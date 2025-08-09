// src/App.js
import { useEffect, useState } from 'react';
import { auth } from './firebase.js';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth';

function App() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Electron으로 되돌아갈 딥링크 (없으면 guidant://auth)
    const returnTo = params.get('return_to') || 'guidant://auth';
    // 추가 파라미터를 유지하고 싶으면 continue 사용 (선택)
    const cont = params.get('continue') || '';

    // 1) 리다이렉트 결과 먼저 확인 (구글에서 돌아온 직후)
    (async () => {
      try {
        setStatus('auth');
        const result = await getRedirectResult(auth);

        if (!result) {
          // 2) 아직 로그인 전이면 즉시 구글로 보냄
          const provider = new GoogleAuthProvider();
          // 계정선택 강제
          provider.setCustomParameters({ prompt: 'select_account' });
          await signInWithRedirect(auth, provider);
          return; // 여기서 브라우저가 구글로 넘어감
        }

        // 3) 로그인 성공: 토큰·프로필 취득
        const user = result.user;
        const cred = GoogleAuthProvider.credentialFromResult(result);

        const idToken = await user.getIdToken(); // Firebase ID 토큰
        const accessToken = cred?.accessToken || ''; // 구글 OAuth access token (있으면)
        const email = user.email || '';
        const displayName = user.displayName || '';

        // 4) Electron 딥링크로 토큰 전송 (앱이 받도록)
        const target = new URL(returnTo);
        target.searchParams.set('provider', 'google');
        target.searchParams.set('id_token', idToken);
        if (accessToken) target.searchParams.set('access_token', accessToken);
        if (email) target.searchParams.set('email', email);
        if (displayName) target.searchParams.set('name', displayName);
        if (cont) target.searchParams.set('continue', cont);

        setStatus('done');
        // 곧장 앱으로 되돌아가기
        window.location.href = target.toString();
      } catch (e) {
        console.error(e);
        setError(e?.message || 'Unknown error');
        setStatus('error');
      }
    })();
  }, []);

  // 거의 안 보이지만 혹시나 보일 수 있는 최소 표기
  if (status === 'error') {
    return (
      <div style={{fontFamily:'system-ui', padding: 24}}>
        <h3>Login Error</h3>
        <pre>{error}</pre>
      </div>
    );
  }

  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'center',
      minHeight:'100vh', fontFamily:'system-ui'
    }}>
      <div>
        <div style={{fontSize:14, opacity:.7, textAlign:'center'}}>
          Redirecting to Google…
        </div>
      </div>
    </div>
  );
}

export default App; 
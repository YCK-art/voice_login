# Guidant Firebase 인증 중간페이지

이 프로젝트는 Electron 앱을 위한 Firebase Google 인증 중간페이지입니다.

## 기능

- Firebase Google 인증 중간페이지
- Electron 앱으로 딥링크를 통한 토큰 전송
- 자동 Google 로그인 리다이렉트
- 에러 처리 및 상태 표시

## 설치 및 실행

1. 의존성 설치:
```bash
npm install
```

2. 환경변수 설정:
프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

3. 개발 서버 실행:
```bash
npm start
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

## 사용 방법

### Electron 앱에서 호출

```javascript
// Electron 앱에서 외부 브라우저로 열기
const authUrl = 'https://your-domain.vercel.app/?return_to=guidant://auth';
shell.openExternal(authUrl);
```

### URL 파라미터

- `return_to`: 인증 완료 후 리다이렉트할 딥링크 (기본값: `guidant://auth`)
- `continue`: 추가 파라미터 (선택사항)

### 딥링크 파라미터

인증 완료 후 Electron 앱으로 전송되는 파라미터:

- `provider`: 인증 제공자 (항상 `google`)
- `id_token`: Firebase ID 토큰
- `access_token`: Google OAuth 액세스 토큰 (있는 경우)
- `email`: 사용자 이메일
- `name`: 사용자 이름
- `continue`: 원본 continue 파라미터 (있는 경우)

## 기술 스택

- React 18
- Firebase Authentication
- Vite
- Tailwind CSS

## 프로젝트 구조

```
voice_login/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Firebase 인증 중간페이지 컴포넌트
│   ├── firebase.ts     # Firebase 설정
│   ├── index.js        # React 앱 진입점
│   └── index.css       # 스타일
├── package.json
├── vite.config.js      # Vite 설정
└── README.md
```

## 배포

이 프로젝트는 Vercel에 배포되어 Electron 앱의 인증 중간페이지로 사용됩니다.

## 주요 특징

- 자동 Google 로그인 리다이렉트
- Electron 딥링크 지원
- 에러 처리 및 사용자 피드백
- 보안을 위한 토큰 전송 
# Day 9

## Q. React.js는 어떤 기술이며 왜 활용되나요?

Meta에서 만든 컴포넌트 기반 JavaScript 라이브러리로, Virtual DOM을 활용해 DOM 업데이트를 최소화하여 Reflow/Repaint로 인한 성능 저하를 개선하고, 복잡한 UI를 재사용 가능한 컴포넌트로 쉽게 개발할 수 있습니다.

## Q. React App은 어떻게 생성할 수 있나요?

1. Vite 사용: `npm create vite@latest`
2. Create React App(CRA): `npx create-react-app my-app`
   - 최근에는 많이 사용되지 않음

## Q. React App은 어떻게 구동되나요?

1. `npm run dev` 명령으로 개발 서버 실행
2. 브라우저에서 `localhost:5173` 등으로 접근
3. `index.html` 로드 -> `main.jsx` 스크립트 로드
4. `main.jsx`에서 `ReactDOM.createRoot()`로 root div에 React 앱 마운트
5. `App.jsx` 및 하위 컴포넌트들이 렌더링됨
6. JSX 코드가 JavaScript로 변환되어 브라우저에 표시
7. 브라우저 렌더링 과정(CRP): HTML Parsing > DOM Tree > CSSOM > Render Tree > Layout > Paint

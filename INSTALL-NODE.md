# Node.js 설치 방법 (npm 인식 오류 해결)

`npm is not recognized` 에러는 **Node.js**가 설치되지 않았거나, 터미널이 설치 경로를 못 찾을 때 나옵니다.

---

## 1. Node.js 다운로드

1. 브라우저에서 **https://nodejs.org** 접속
2. **LTS** 버전(초록색 "Recommended" 버튼) 클릭해서 설치 파일 다운로드

---

## 2. 설치하기

1. 다운로드한 `.msi` 파일 실행
2. "Next" 진행
3. **"Add to PATH"** 옵션이 있으면 **체크된 상태로** 두기
4. 설치 완료될 때까지 Next → Install

---

## 3. Cursor 다시 시작

- **중요:** 설치 후 **Cursor를 완전히 종료**했다가 다시 실행하세요.
- 그래야 터미널이 새 PATH를 읽어서 `node`와 `npm`을 인식합니다.

---

## 4. 확인

Cursor 터미널에서:

```
node -v
npm -v
```

버전 번호가 나오면 성공입니다. 그 다음:

```
cd c:\Users\kuseo\OneDrive\Desktop\kyuseok-portfolio
npm run dev
```

실행하면 `http://localhost:5173` 이 뜹니다.

# 로컬 개발 서버 실행 방법 (localhost:5173)

브라우저에서 `http://localhost:5173` 이 안 열리면, 개발 서버가 꺼져 있는 상태입니다. 아래 순서대로 하세요.

---

## 1단계: Cursor에서 터미널 열기

- **단축키:** `` Ctrl+` `` (백틱, 키보드 왼쪽 위 ~ 키)
- 또는 상단 메뉴 **Terminal** → **New Terminal**
- 화면 아래(또는 옆)에 터미널 창이 열립니다.

---

## 2단계: 프로젝트 폴더로 이동

터미널에 아래를 **그대로 입력**하고 **Enter** 치세요.

```
cd c:\Users\kuseo\OneDrive\Desktop\kyuseok-portfolio
```

---

## 3단계: 개발 서버 실행

다음 명령을 입력하고 **Enter** 치세요.

```
npm run dev
```

---

## 4단계: 서버가 떴는지 확인

정상이면 터미널에 이런 식으로 나옵니다:

```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

**`Local: http://localhost:5173`** 이 보이면 서버가 실행 중인 겁니다.

- 이 터미널 창은 **닫지 마세요.** 닫으면 서버가 꺼집니다.
- 그 상태에서 브라우저 주소창에 **http://localhost:5173** 입력해서 들어가면 됩니다.

---

## 자주 나오는 상황

| 상황 | 해결 |
|------|------|
| `'npm' is not recognized` | Node.js가 설치 안 됐거나 PATH에 없음. [nodejs.org](https://nodejs.org) 에서 LTS 버전 설치 후 Cursor를 **완전히 종료했다가 다시 실행**하고 2~4단계 다시 시도. |
| **`running scripts is disabled on this system`** (PowerShell 보안 오류) | `npm run dev` 대신 아래 명령을 **그대로** 터미널에 붙여넣고 Enter: `& "C:\Program Files\nodejs\npm.cmd" run dev` |
| `Local: http://localhost:5173` 안 보임 | 3단계에서 에러 메시지가 있는지 확인. 에러가 없는데도 안 보이면 터미널 스크롤을 위로 올려서 확인. |
| 서버 끄고 싶을 때 | 해당 터미널에서 **Ctrl+C** 누르면 서버 종료. |

---

## 요약

1. **Ctrl+`** 로 터미널 열기  
2. `cd c:\Users\kuseo\OneDrive\Desktop\kyuseok-portfolio` 입력 후 Enter  
3. `npm run dev` 입력 후 Enter  
4. `Local: http://localhost:5173` 이 보이면 브라우저에서 **http://localhost:5173** 로 접속  

이 순서대로 하면 로컬에서 포트폴리오가 열립니다.

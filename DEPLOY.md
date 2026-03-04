# 웹사이트 배포 방법 (Vercel)

토큰: Vercel 대시보드 → Account → Tokens 에서 발급한 값을 사용하세요.

---

## 방법 1: Vercel 대시보드에서 하기 (가장 쉬움)

1. **https://vercel.com** 접속 후 로그인
2. **Add New...** → **Project** 클릭
3. **Import Git Repository**에서 **kuseok0777-tech/kyuseok-portfolio** 선택 (또는 GitHub 연결 후 해당 저장소 선택)
4. **Import** 클릭 → 설정 그대로 두고 **Deploy** 클릭
5. 끝나면 `https://kyuseok-portfolio-xxx.vercel.app` 같은 주소로 사이트가 열림

이후 GitHub에 push할 때마다 자동으로 다시 배포됨.

---

## 방법 2: 터미널에서 Vercel CLI로 배포

Node.js가 설치된 터미널에서 이 프로젝트 폴더로 이동한 뒤:

```powershell
cd c:\Users\kuseo\OneDrive\Desktop\kyuseok-portfolio

# Vercel CLI 한 번 설치 (이미 있으면 생략 가능)
npm install -g vercel

# 토큰으로 배포 (로그인 없이 바로 배포)
vercel --token "YOUR_VERCEL_TOKEN" --yes
```

처음이면 프로젝트 이름·설정 물어보면 엔터로 기본값 쓰면 됨.  
**프로덕션(실제 사이트) 주소로 배포하려면:**

```powershell
vercel --token "YOUR_VERCEL_TOKEN" --prod
```

---

## 정리

- **지금 바로 웹사이트 만들려면** → **방법 1** (Vercel 사이트에서 GitHub 저장소 Import 후 Deploy)
- **앞으로 터미널로 배포하고 싶으면** → **방법 2** (Node 설치된 터미널에서 위 명령 실행)

코드는 이미 GitHub에 있으니까 **방법 1**만 해도 웹사이트 바로 만들어짐.

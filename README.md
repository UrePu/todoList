# Todo App (Next.js + json-server)

이 프로젝트는 Next.js와 json-server를 기반으로 한 간단한 Todo 앱입니다.  
완료 상태 토글, 삭제, 추가 기능을 포함하고 있으며, React Query로 상태를 관리합니다.

---

## 🚀 기술 스택

- Next.js 14+ (App Router)
- TypeScript
- TanStack Query (React Query)
- Tailwind CSS
- json-server (Mock API)

## 📦 설치 및 실행

### 1. 레포지토리 클론

```
git clone https://github.com/your-username/todo-app.git
```
```
cd todo-app
```
2. 의존성 설치
```
pnpm install
```
또는
```
npm install
```
⚙️ 환경 변수 설정
```
.env.local
```

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
**json-server용 db.json를 만들어야함**
```
🗂️ 프로젝트 구조
```
.
├── app/                    # Next.js App Router 루트
│   ├──is-done/page.tsx     # 완료 필터링 페이지
│   └── page.tsx            # 홈 페이지
├── components/             # 컴포넌트
│    └──common              # 공통 컴포넌트
├── lib/
│   ├── api/                # fetch 함수들
│   ├── hooks/              # React Query 훅
├── types/
│   └── todos.ts            # TodoType 정의
└── ...
```
✅ 주요 기능
- Todo 등록
- 삭제
- 완료 상태 토글 (낙관적 업데이트)
- SSR prefetch 및 Hydration 처리
- 환경변수로 API 주소 관리

### 🐞 Trouble Shooting
#### 문제	원인 및 해결

새로고침 시 작성한 데이터가 안 보임	Next.js가 fetch()를 SSG처럼 캐싱했기 때문. fetch() 호출 시 { cache: "no-store" } 옵션을 반드시 설정해야 SSR로 동작함.

예시 코드
```
export const getTodos = async (): Promise<TodoType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("데이터 조회 실패");
  return res.json(); 
};
```



# 🗳 Voting platform
투표를 할 수 있는 어플리케이션 제작 과제입니다.

![Voting](/readme-assets/vc_voting.gif)

---

## Feature
- 로그인 후 등록되어 있는 투표창에 투표할 수 있습니다.
- 직접 투표 항목을 생성할 수 있습니다.
- 투표 후 투표 결과를 확인할 수 있습니다.

## How to run
- Package installation & Running local server
```sh
npm install
npm run dev
```

## How to Use
- 회원가입 및 로그인 후 [Create] 버튼을 누르세요.
- 투표 타이틀, 옵션, 기간을 선택 후 [Register]를 누르면 투표가 생성됩니다.
- 생성된 투표는 메인 페이지에서 확인할 수 있습니다.
- 만료된 투표는 completed로 표시되며, 진행 중인 투표는 in progress로 투표됩니다.
- 설정한 기간이 만료되면 투표는 자동으로 만료됩니다.
- 투표를 하고 싶은 항목을 누르면 투표를 할 수 있습니다.
- 투표를 만든 사람은 투표 결과를 바로 확인할 수 있지만, 만든 사람이 아닌 경우 기간이 만료되고 결과를 확인할 수 있습니다.
- 투표를 만든 사람은 [Delete] 버튼을 눌러 삭제 할 수 있습니다.
- 내가 만든 투표는 [My Vote]에서 확인 가능합니다.
- 상단 [Logout] 버튼을 누르면 로그아웃이 됩니다.

## Tech Stack
- ES2015+
- Express
- MongoDB Atlas (mongoose)
- Passport

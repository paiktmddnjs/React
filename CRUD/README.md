#🍽️ Firebase 기반 맛평가 게시판 (Food Review Board)<br>

이 프로젝트는 React와 Firebase/Firestore를 사용하여 구현된 실시간 맛평가 게시판 웹 애플리케이션입니다. 사용자 인증, 게시글 CRUD (생성, 읽기, 수정, 삭제), 그리고 실시간 좋아요 기능을 포함합니다.

<br><br>

## 📘 개요 (Overview)

-
-
-



<br><br>

## 📂 프로젝트 구조 (Directory Structure)
<pre>
📁 src/
├─ 📁 assets/
├─ 📁 context/
│  ├─ 📄 AuthContext.jsx
│  └─ 📄 BoardContext.jsx
├─ 📁 pages/
│  ├─ 📄 BoardDetail.jsx
│  ├─ 📄 BoardDetail.styled.js
│  ├─ 📄 BoardList.styled.js
│  ├─ 📄 EditBoard.jsx
│  ├─ 📄 EditBoard.styled.js
│  ├─ 📄 Home.jsx
│  ├─ 📄 Home.styled.js
│  ├─ 📄 LoginPage.jsx
│  ├─ 📄 LoginPage.styled.js
│  ├─ 📄 NotFound.jsx
│  ├─ 📄 NotFound.styled.js
│  ├─ 📄 RegisterPage.jsx
│  ├─ 📄 RegisterPage.styled.js
│  ├─ 📄 TopPosts.jsx
│  ├─ 📄 TopPosts.styled.js
│  ├─ 📄 WriteBoard.jsx
│  └─ 📄 WriteBoard.styled.js
├─ 📁 routes/
│  ├─ 📄 ProtectedRoute.jsx
│  ├─ 📄 routePaths.js
│  └─ 📄 routes.jsx
├─ 📄 App.css
├─ 📄 App.jsx
├─ 📄 index.css
└─ 📄 main.jsx
</pre>
<br>
<br>

#🌟 주요 기능 (Key Features) <br>

## ✅ 회원가입 / 로그인 / 로그아웃 기능

## ✅ 리뷰 게시글 등록, 수정, 삭제 (CRUD)
- (삭제) filter()를 이용해 게시물ID와 일치하면 해당 게시물을 제외하고 배열을 재구성한다.
- (수정) map()을 이용해서 해당 게시물ID를 찾아 넘어온 값을 덮어씌운다.
- {isAuthor && (...)} 구조를 사용하여 해당 사용자만 자신의 게시물에 대해 수정/삭제 할수 있도록 구현하였다.
  
## ✅ 좋아요 처리 기능
( 좋아요 상태 및 업데이트 ) 
- useState()를 이용해 '전체 사용자 좋아요 상태' 와 '현재 사용자의 좋아요 상태'를 랜더링될때마다 로컬스토리지에서 불러온다.

( 각 사용자별 좋아요가 구현 가능)
- useEffect를 이용해 [allUserLikes, currentUserId]가 변경될때마다 allUserLikes을 로컬스토리지에 ALL_LIKES_STORAGE_KEY 형태로 저장하여 현재 사용자의 likes 상태를 업데이트한다.


(좋아요 개수)
- userMemo()로 인해 [allUserLikes]의 값이 변할때마다 실행되어 Object.keys로 allUserLikes(모든 회원의 좋아요) 객체를 배열로 변환후 해당 배열을 게시글 ID 기준으로 또 를 돌며 좋아요가 눌러져있는 것에 대해 count를 1씩 증가시킨다.

##ex)
<pre>
const allUserLikes = {
  user1: { "post1": true(좋아요), "post3": true(좋아요) },
  user2: { "post2": true(좋아요) },
  user3: { "post1": true(좋아요), "post2": true(좋아요), "post4": true(좋아요) }
};
  </pre>

>그중에서 우리가 어떤 userId의 좋아요 정보만 꺼낸 후 ( Object.keys(allUserLikes).forEach(userId =>)

<pre>
userLikes = { "post1": true(좋아요), "post3": true(좋아요) }
</pre>

>"post1": true(좋아요)에 좋아요가 있으므로 해당 게시물의 count기 1 증가  ( if (userLikes[postId]) )

(좋아요 설정, 취소)
- togglePostLike 를 만들어서 prev로 AllUserLikes의 이전 좋아요 데이터를 불러온후 postId를 이용해 해당 게시물의 좋아요 여부를 판단한후 현재 사용자의 좋아요 목록을 복사 하여 if문을 사용해 현재 사용자의 기존 좋아요 상태가 참이면 복사한것을 지우고 거짓이면 true로 값을 주어 이 상태를 현재 사용자 데이터에 덮어씌운다.


<br>

## ✅ 베스트3 게시글 처리

-아까 구한 postLikeCounts(각 게시물의 좋아요 수들)를 불러와서 배열로 변형후 sort() 함수를 이용해 각 배열의 요소들을 정렬하여 순위를 결정지었다.  

<br><br>

## 📸 화면 미리보기 (Preview)

| 기능 | 미리보기 |
|------|-----------|
| 로그인 화면 | ![Login Page](./assets/login.gif) |
| 회원가입 화면 | ![Register Page](./assets/register.png) |
| 리뷰 목록 | ![Board List](./assets/board-list.jpg) |
| 리뷰 작성 | ![Post Write](./assets/post-write.gif) |
| BEST 3 | ![Post Write](./assets/post-write.gif) |

<br><br>


## 💡 학습 포인트 (Learning Points)

1️⃣ React Context API를 활용한 글로벌 상태 관리<br>
2️⃣ localStorage 기반 Persist 구현<br>
3️⃣ 사용자별 좋아요(Like) 시스템 설계 능력 향상<br>

<br><br>


# 🧩 9.  앞으로 확장할 수 있는 기능들

💬 1) 리뷰에 대한 댓글 기능 추가 <br>

📍 2) 게시글에 음식점 위치 공유(지도) 기능 <br>

🔍 3) 검색 기능 추가 <br>

👤 4) 마이페이지(프로필 페이지) 구축 <br>

➡ 사용자 경험 고도화 + 개인화 서비스 구축 <br>

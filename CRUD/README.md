# 🍽️ <span>실시간 맛평가 리뷰 게시판</span> <br>

소개 : **React**를 기반으로 구현된 **실시간 맛평가 게시판 웹 애플리케이션**으로서
사용자는 회원가입과 로그인을 통해 인증된 후, 게시글을 작성, 수정, 삭제(CRUD)할 수 있으며, 다른 사용자의 게시글에 좋아요, 평점 등을 실시간 보거나 반영할 수 있도록 구현하였다.

<br><br>

## 🎯 주제를 선택한 이유 (Project Motivation)

- 평소에 접하는 음식 리뷰들은 어떻게 react로 구현할수 있을지 나만의 방식으로 만들어 보고 싶었다.
- React를 활용해 "실시간 데이터 처리 및 사용자 인증"을 경험하고, 실제 웹 서비스와 유사한 기능을 구현해보고자 하였다.
- 로컬스토리지와 Context API를 활용한 상태 관리 및 데이터 전달 방식에 익숙해지고 싶었다.


<br><br>

## 📂 프로젝트 구조 (Directory Structure)
<pre>
📁 src/
├─ 📁 assets/
├─ 📁 context/
│  ├─ 📄 AuthContext.jsx
│  └─ 📄 BoardContext.jsx
│  
├─ 📁 pages/
│  ├─ 📄 BoardDetail.jsx
│  ├─ 📄 EditBoard.jsx
│  ├─ 📄 Home.jsx
│  ├─ 📄 LoginPage.jsx
│  ├─ 📄 NotFound.jsx
│  ├─ 📄 RegisterPage.jsx
│  ├─ 📄 TopPosts.jsx
│  └─ 📄 WriteBoard.jsx
│
├─ 📁 styles/
│  ├─ 📄 BoardDetail.styled.js
│  ├─ 📄 BoardList.styled.js
│  ├─ 📄 EditBoard.styled.js
│  ├─ 📄 Home.styled.js
│  ├─ 📄 LoginPage.styled.js
│  ├─ 📄 NotFound.styled.js
│  ├─ 📄 RegisterPage.styled.js
│  ├─ 📄 TopPosts.styled.js
│  └─ 📄 WriteBoard.styled.js  
│  
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

# 🌟 주요 기능 (Key Features) <br>

## ✅ 회원가입 / 로그인 / 로그아웃 기능
- localStorage.setItem()을 이용해 id 앞에 user_를 붙여 회원가입
<img width="466" height="21" alt="image" src="https://github.com/user-attachments/assets/8ed34d33-dc71-462a-bff4-e457a5b8bf60" />

<br><br>

- localStorage.key()를 이용해 user_로 시작하는 키를 찾아 전화번호 중복 제거
 <img width="395" height="98" alt="image" src="https://github.com/user-attachments/assets/50981dee-6544-457d-b0e9-c35a16330d0a" />

<br><br>

- setUser(null); 방식으로 로그아웃을 구현
 <img width="197" height="75" alt="image" src="https://github.com/user-attachments/assets/8b60b4d6-2717-4546-9218-f2a495643fe1" />

<br>

## ✅ 리뷰 게시글 등록, 수정, 삭제 (CRUD)
- (삭제) filter()를 이용해 게시물ID와 일치하면 해당 게시물을 제외하고 배열을 재구성한다.
- (수정) map()을 이용해서 해당 게시물ID를 찾아 넘어온 값을 덮어씌운다.
- {isAuthor && (...)} 와같이 조건부 렌더링을 사용하여 해당 사용자만 자신의 게시물에 대해 수정/삭제 할 수 있도록 구현하였다.

<br>
  
## ✅ 좋아요 처리 기능
###  ◇ 🔄 좋아요 상태 및 업데이트  ◇
- useState()를 이용해 '전체 사용자 좋아요 상태' 와 '현재 사용자의 좋아요 상태'의 값이 변하면 랜더링될때마다 로컬스토리지에서 불러온다.
- useState()를 이용해 "현재 사용자 좋아요 상태'가 변하면 변한 상태를 저장하게하여 즉시 화면에 반영한다.
<img width="585" height="169" alt="image" src="https://github.com/user-attachments/assets/42de2c24-bd07-4a81-80c3-546d4c3f8e0d" />

<br><br>

###  ◇ 👤 사용자별 좋아요 상태 관리 ◇
- useEffect를 이용해 [allUserLikes, currentUserId]가 변경될때마다 allUserLikes을 로컬스토리지에 ALL_LIKES_STORAGE_KEY 형태로 저장하여 현재 사용자의 likes 상태를 업데이트한다. ( 좋아요 값이 바뀔떄마다 해당 실행한다.)
<img width="607" height="182" alt="image" src="https://github.com/user-attachments/assets/dfd92992-7be7-4a73-bcb0-f29ed056ab4e" />

<br><br>

###  ◇ 📊 좋아요 개수 계산 ◇
- userMemo()로 인해 [allUserLikes]의 값이 변할때마다 실행되어 Object.keys로 allUserLikes(모든 회원의 좋아요) 객체를 배열로 변환후 해당 배열을 게시글 ID 기준으로 돌며 좋아요가 눌러져있는 것에 대해 count를 1씩 증가시킨다.
<img width="495" height="347" alt="image" src="https://github.com/user-attachments/assets/cecc6b3a-a3a1-49a2-b4df-0d7e567636d8" />



## ex)
<pre>
const allUserLikes = {
  user1: { "post1": true(좋아요), "post3": true(좋아요) },
  user2: { "post2": true(좋아요) },
  user3: { "post1": true(좋아요), "post2": true(좋아요), "post4": true(좋아요) }
};
  </pre>

>그중에서 어떤 userId의 좋아요 정보만 꺼낸 후 ( Object.keys(allUserLikes).forEach(userId =>)

<pre>
userLikes = { "post1": true(좋아요), "post3": true(좋아요) }
</pre>

>"post1": true(좋아요)에 좋아요가 있으므로 해당 게시물의 count가 1 증가  ( if (userLikes[postId]) )

<br>

### ◇ ❤️ 좋아요 설정/취소 기능 ◇
- togglePostLike 를 만들어서 prev로 AllUserLikes의 기존 좋아요 데이터를 불러온후 postId를 이용해 해당 게시물의 좋아요 여부를 판단한후 현재 사용자의 좋아요 목록을 복사 하여 if문을 사용해 현재 사용자의 기존 좋아요 상태가 참이면 복사한것을 지우고 거짓이면 true로 값을 주어 이 상태를 현재 사용자 데이터에 덮어씌운다.
<img width="558" height="307" alt="image" src="https://github.com/user-attachments/assets/b7f3dce2-201b-42cc-859d-e067244d8416" />


<br><br>

## ✅ 베스트3 게시글 처리
### ◇ 🏆 게시글 좋아요 순 정렬 ◇
- 아까 구한 postLikeCounts(각 게시물의 좋아요 수들)를 불러와서 배열로 변형후 sort() 함수를 이용해 각 배열의 요소들을 정렬하여 순위를 결정지었다.  
<img width="617" height="48" alt="image" src="https://github.com/user-attachments/assets/21670a21-b9fe-48f8-94c3-c0bb0e4f86d0" />

<br><br>

## 📸 화면 미리보기 (Preview)

| 로그인 화면 | 회원가입 화면 |
|-------------|--------------|
| <img width="500" alt="로그인 화면" src="https://github.com/user-attachments/assets/1c063b6a-bc9a-433a-a508-2e73e03fc57d" /> | <img width="500" alt="회원가입 화면" src="https://github.com/user-attachments/assets/c2cebf4b-6df7-40ea-98f2-f0a4052e4525" /> |

| 리뷰 목록 | 리뷰 작성 |
|----------|----------|
| <img width="500" alt="리뷰 목록" src="https://github.com/user-attachments/assets/0704479f-57bf-4864-84e5-b3e890b2c80e" /> | <img width="500" alt="리뷰 작성" src="https://github.com/user-attachments/assets/2cddca61-1940-419f-9d87-8cf361d5b7f0" /> |

| BEST 3 | 상세 리뷰 |
|--------|--------|
| <img width="500" alt="BEST 3" src="https://github.com/user-attachments/assets/57d0e60d-8259-4805-be3c-17b767f9aa9d" /> | <img width="500" alt="image" src="https://github.com/user-attachments/assets/2a129516-03e2-48f0-b20a-273b6f1cec2c" /> |


<br><br>


## 💡 학습 포인트 (Learning Points)

1️⃣ React Context API를 활용한 글로벌 상태 관리<br><br>
2️⃣ localStorage 기반 여러 함수 구현<br><br>
3️⃣ 사용자별 좋아요(Like) 시스템 설계 능력 향상<br><br>

<br><br>


## 🧩 9.  앞으로 확장할 수 있는 기능들

### 💬 리뷰에 대한 댓글 기능 추가 <br>

### 📍 게시글에 음식점 위치 공유(지도) 기능 <br>

### 🔍 검색 기능 추가 <br>

### 👤 마이페이지(프로필 페이지) 구축 <br>


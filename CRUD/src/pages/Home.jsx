// src/pages/Home.jsx (업데이트된 코드)
import { useState, useEffect } from "react"; 
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// 🌟 BoardContext에서 posts 데이터를 가져오기 위해 useBoard import
import { useBoard } from "../context/BoardContext"; 
import { 
  Container, 
  Title, 
  Desc, 
  ButtonGroup, 
  Button, 
  LogoutButton,
  StatsContainer, 
  StatsItem 
} from "./Home.styled"; 


// ... StatsBox 컴포넌트는 변경 없음 ...
function StatsBox({ totalReviews, averageRating, activeUsers }) {
    // ... (이전 코드와 동일)
    return (
        <StatsContainer>
            <StatsItem>
                <h4>총 리뷰 수</h4>
                <p>{totalReviews} 개</p>
            </StatsItem>
            <StatsItem>
                <h4>평점 평균</h4>
                <p>{averageRating > 0 ? `${averageRating.toFixed(1)} / 5.0` : 'N/A'}</p>
            </StatsItem>
            <StatsItem>
                <h4>참여 중인 사람 수</h4>
                <p>{activeUsers} 명</p>
            </StatsItem>
        </StatsContainer>
    );
}
// ----------------------------------------


function Home() {
  const { user, logout } = useAuth();
  // 🌟 useBoard 훅을 사용하여 BoardContext에서 posts 목록을 가져옵니다.
  const { posts } = useBoard(); 
  
  const [stats, setStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    activeUsers: 0,
  });

  // 🌟 의존성 배열에 posts를 추가하여 게시물 변경 시마다 재실행
  useEffect(() => {
    
    // 1. 참여 중인 사람 수 (회원가입한 사람 수) 계산 (이 부분은 로컬 스토리지를 직접 읽음)
    let userCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('user_')) {
        userCount++;
      }
    }
    
    // 2. 총 리뷰 수 및 평점 평균 계산
    // 🌟 로컬 스토리지 대신 props로 받은 posts 배열 사용 🌟
    const totalReviews = posts.length;
    let totalScoreSum = 0;

    posts.forEach(post => {
      // 게시물 객체의 'score' 속성 (별점)을 사용
      if (typeof post.score === 'number') {
        totalScoreSum += post.score;
      }
    });

    const averageRating = totalReviews > 0 ? totalScoreSum / totalReviews : 0;

    // 3. 상태 업데이트
    setStats({
      totalReviews: totalReviews,
      averageRating: averageRating,
      activeUsers: userCount,
    });
    
    // 🌟 의존성 배열에 posts를 추가: posts 배열이 변경될 때마다 이펙트 재실행
  }, [posts]); 

  
  return (
    <Container>

      {/* 사용자 환영 메시지 */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: "#00796B", 
          fontSize: "24px",
          backgroundColor: "#B2DFDB", 
          padding: "10px",
          borderRadius: "10px",
          display: "inline-block"
        }}>
          **{user.id}**님 환영합니다!
        </h3>
      </div>

      <Title> 음식 리뷰 게시판 🍽️</Title>

      <Desc>음식의 평가점수를 공유하는 공간입니다!</Desc>

      <StatsBox 
        totalReviews={stats.totalReviews}
        averageRating={stats.averageRating}
        activeUsers={stats.activeUsers}
      />

      <ButtonGroup>
        <Button to="board">글 목록 보기</Button>
        <Button to="top">BEST 3!</Button>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton> 
      </ButtonGroup>


      <Outlet />
    </Container>
  );
}

export default Home;
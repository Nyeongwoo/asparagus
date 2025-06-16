function addScoreAndNavigate(score, nextPage, gameOverPage = null) {
    let currentScore = parseInt(sessionStorage.getItem('score') || '0');
    currentScore += score;
    sessionStorage.setItem('score', currentScore);
    sessionStorage.setItem('lastScore', score); // 이전 선택 점수 저장
    if (score === 0 && gameOverPage) {
        location.href = gameOverPage;
    } else {
        location.href = nextPage;
    }
}
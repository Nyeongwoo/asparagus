function addScoreAndNavigate(score, nextPage, gameoverPage = "gameover/default.html") {
    let current = parseInt(localStorage.getItem("score")) || 0;
    localStorage.setItem("score", current + score);

    if (score === 0) {
        location.href = gameoverPage;
    } else {
        location.href = nextPage;
    }
}
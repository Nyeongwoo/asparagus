function addScore(score) {
    let current = parseInt(localStorage.getItem("score")) || 0;
    localStorage.setItem("score", current + score);
}
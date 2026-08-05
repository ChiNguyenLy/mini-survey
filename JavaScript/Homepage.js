document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start-btn");
    startBtn.addEventListener("click", () => {
        // Hiệu ứng mờ dần
        document.body.classList.add("fade-out");
        // Chờ animation chạy xong
        setTimeout(() => {
            window.location.href = "Question.html";
        }, 500);
    });
});

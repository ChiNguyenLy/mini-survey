// ==========================
// Danh sách câu hỏi
// ==========================
const questions = [
    "Bạn có thích xem phim không?",
    "Bạn có thích đi biển không?",
    "Bạn có thích ăn đồ ngọt không?",
    "Bạn có thích đi dạo buổi tối không?",
    " "
];

// ==========================
// Lấy các phần tử HTML
// ==========================
const progressText = document.querySelector(".progress-text");
const questionTitle = document.querySelector(".question-title");
const question = document.querySelector(".question");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Câu hỏi hiện tại
let currentQuestion = 0;

// ==========================
// Khởi động trang
// ==========================
window.onload = function () {

    showQuestion();

    yesBtn.addEventListener("click", nextQuestion);
    noBtn.addEventListener("click", nextQuestion);

};

// ==========================
// Hiển thị câu hỏi
// ==========================
function showQuestion() {

    progressText.textContent = `Câu hỏi ${currentQuestion + 1} / 5`;

    question.classList.remove("show");

    setTimeout(() => {

        question.textContent = questions[currentQuestion];

        question.classList.add("show");

    }, 200);

}

// ==========================
// Chuyển câu hỏi
// ==========================
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showFinishScreen();

    }

}

// ==========================
// Màn hình hoàn tất
// ==========================
function showFinishScreen() {

    progressText.textContent = "Hoàn thành";

    // Ẩn tiêu đề "Câu hỏi:"
    questionTitle.style.display = "none";

    // Ẩn hai nút trả lời
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    question.classList.remove("show");

    setTimeout(() => {

        question.innerHTML = `

            <div class="finish-screen">

                <div class="heart">❤️</div>

                <h2>Khảo sát hoàn tất!</h2>

                <p>
                    Cảm ơn bạn đã dành thời gian trả lời khảo sát.
                </p>

                <button class="finish-btn">
                    Hoàn thành
                </button>

            </div>

        `;

        question.classList.add("show");

        const finishBtn = document.querySelector(".finish-btn");

        finishBtn.addEventListener("click", finishSurvey);

    }, 300);

}

// ==========================
// Kết thúc khảo sát
// ==========================
function finishSurvey() {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "Homepage.html";

    }, 500);

}
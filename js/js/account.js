// =========================
// 계좌 펼치기
// =========================

const groomBtn = document.querySelector(".groom");
const brideBtn = document.querySelector(".bride");

const groomList = document.getElementById("groomList");
const brideList = document.getElementById("brideList");

groomBtn.addEventListener("click", () => {
    groomList.classList.toggle("show");
});

brideBtn.addEventListener("click", () => {
    brideList.classList.toggle("show");
});


// =========================
// 계좌번호 복사
// =========================

const copyButtons = document.querySelectorAll(".copy-btn");
const toast = document.getElementById("toast");

copyButtons.forEach(btn => {

    btn.addEventListener("click", async () => {

        const account = btn.dataset.account;

        try {

            await navigator.clipboard.writeText(account);

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        } catch {

            // 구형 브라우저 대응
            const textarea = document.createElement("textarea");
            textarea.value = account;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        }

    });

});

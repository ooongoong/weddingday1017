const buttons = document.querySelectorAll(".copy-btn");
const toast = document.getElementById("toast");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        navigator.clipboard.writeText(btn.dataset.copy);

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        },2000);

    });

});

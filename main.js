document.querySelector(".password i").onclick = () => {
    if (document.querySelector(".password i").classList.contains("show")) {
        document.querySelector(".password input").type = "password";
        document.querySelector(".password i").className = "fa-solid fa-eye-slash";
        document.querySelector(".password i").classList.remove("show");
    } else {
        document.querySelector(".password input").type = "text";
        document.querySelector(".password i").className = "fa-solid fa-eye";
        document.querySelector(".password i").classList.add("show");
    }
};
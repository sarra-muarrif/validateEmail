//هنا يجب إضافة كود الجافاسكريبت
function validateEmail(e) {
    e.preventDefault();
    var form = document.getElementById("form");
    var userEmail = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var userPassWord = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError")
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userEmail.match(reg)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        emailError.style.display = "none";
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        emailError.innerHTML = "إيميل غير صالح !!";
        emailError.style.display = "block";
    }
    if (userEmail == "") {
        form.classList.add("invalid");
        form.classList.remove("valid");
        emailError.innerHTML = "الإيميل يجب أن لا يكون فارغ !!";
    }
    if (userPassWord == "") {
        form.classList.add("invalid");
        form.classList.remove("valid");
        passwordError.innerHTML = "كلمة السر يجب أن لا تكون فارغه ";
        passwordError.style.display = "block";

    } else {
        passwordError.style.display = "none";
        emailError.style.display = "none";
    }
}

document.querySelector(".button").addEventListener("click", validateEmail);

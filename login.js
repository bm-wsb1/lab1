const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// jeżeli username jest uzupelnione we formularzu jako admin a hasło haslo- dostajemy allert o pomyślnym logowaniu. w innm wypadku wiadomosc z błędem
    if (username === "admin" && password === "haslo") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

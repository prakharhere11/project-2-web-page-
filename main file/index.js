let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

const genderSelect = document.querySelector('.gender-select');
const genderText = document.querySelector('.gender-text');
const genderOptions = document.querySelector('.gender-options');
const options = document.querySelectorAll('.option');

genderSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    genderOptions.classList.toggle('show');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        genderText.textContent = option.textContent;
        genderOptions.classList.remove('show');
    });
});

window.addEventListener('click', () => {
    if (genderOptions.classList.contains('show')) {
        genderOptions.classList.remove('show');
    }
});
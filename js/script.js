const buttonArray = document.querySelectorAll('.js-btn');

for (const button of buttonArray) {
    button.addEventListener('click', function () {
        this.classList.add('button--cross');
        this.setAttribute("disabled", "true");

        console.log(button);
    });
}

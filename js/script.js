const buttonArray = document.querySelectorAll('.js-btn');
let count = 0;

for (const button of buttonArray) {
    button.addEventListener('click', function () {
        this.setAttribute("disabled", "true");

        this.classList.add(count % 2 === 0 ? 'button--cross' : 'button--circle');

        count++;
    });
}

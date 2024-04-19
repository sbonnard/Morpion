const buttonArray = document.querySelectorAll('.button');

for (const button of buttonArray) {
    button.addEventListener('click', function () {
        button.classList.add('button--cross');
    })
}

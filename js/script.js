const buttonArray = document.querySelectorAll('.js-btn');
let count = 0;

for (const button of buttonArray) {
    button.addEventListener('click', function () {
        this.setAttribute("disabled", "true");
        console.log(count, count % 2);
        if(count % 2 === 0) {
            this.classList.add('button--cross');    
        }else {
            this.classList.add('button--circle');    
            
        }
        count++;
    });
}

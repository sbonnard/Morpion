const game = document.getElementById('game');
const boxA1 = document.querySelector('#a1');

console.log(boxA1);

game.addEventListener('click', function(event){
    // console.log(event.target);
    // const box = event.target;
    // box.style.backgroundColor = "red"

});

boxA1.addEventListener("click", function(event){
    boxA1.classList.add('button--cross')
})
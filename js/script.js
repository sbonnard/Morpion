const game = document.getElementById('game');


game.addEventListener('click', function(event){
    console.log(event.target);
    const box = event.target;
    box.style.backgroundColor = "red"
});
let container = document.getElementById('star-container');
let star = document.querySelectorAll('.star');
let filled = 0;

container.addEventListener("click",(e)=>{
    let currClicked = e.target.dataset.index;
    
    for(let i=0;i<filled;i++){
        star[i].classList.remove('filled-star');
    }

    for(let i=0;i<currClicked;i++){
        star[i].classList.add('filled-star');
    }

    document.getElementById('sub-heading').innerText = `Rating Count: ${currClicked}`

    filled = currClicked;
});

container.addEventListener("mouseover",(e)=>{

    container.classList.add('hover-container');
    let currClicked = e.target.dataset.index;
    
    for(let i=0;i<filled;i++){
        star[i].classList.remove('filled-star');
    }

    for(let i=0;i<currClicked;i++){
        star[i].classList.add('filled-star');
    }
})

container.addEventListener("mouseleave",(e)=>{
    
    for(let i=0;i<5;i++){
        star[i].classList.remove('filled-star');
    }

    for(let i=0;i<filled;i++){
        star[i].classList.add('filled-star');
    }
})
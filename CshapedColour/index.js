let container = document.getElementById('container');
let box = document.querySelectorAll('.box');
let queue = [];

container.addEventListener('click',(e)=>{
    let index = e.target.dataset.index;
    if(index != undefined)
    {   
        queue.push(index);
        box[index].classList.add('green-color');
    }

    if(queue.length == 7){
        let cn = 0;
        while(queue.length > 0){
        let ind = queue.shift();
        cn++;
        setTimeout(()=>{
        box[ind].classList.remove('green-color');
    },cn*1000)
}
}
})
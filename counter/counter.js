let btnAdd = document.querySelector('#add');
let btnDec= document.querySelector('#decrease');
let input = document.querySelector('#number');

let counter = 0;

btnAdd.addEventListener('click', () =>{
    //increment and change counter value
    counter++;
    input.innerText = counter;
});

btnDec.addEventListener('click', () =>{
    counter -- ;
    input.innerText = counter;
})
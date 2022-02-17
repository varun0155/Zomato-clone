//selectors

let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let slider = document.querySelector(".slider");
let dishWidth = document.querySelector(".dish img").width;

dishWidth/=2; // 50px

let count = 0;
nextButton.addEventListener("click", (event)=>{
    count++;
    slider.style.transform = `translateX(${-count*dishWidth}px)`;
});

previousButton.addEventListener("click", (event)=>{
    count--;
    slider.style.transform = `translateX(${-count*dishWidth}px)`;
});



/*
left -> 0;

left -> -50;

0 - 100
left -> -100

0 - 150
left -> -150

0 - 200
left -> -200
4

3
0 - 150
left -> -150

2
0 - 100
left -> -100
*/




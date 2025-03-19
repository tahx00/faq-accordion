document.querySelectorAll(".question").forEach((question) => {
question.addEventListener("click",() =>{
const answer =question.nextElementSibling;
const btn = question.querySelector(".picc");
const faq = question.querySelector(".faq")
if(answer.style.display ==="block"){
    answer.style.display ="none";
    btn.src ="assets/images/icon-plus.svg";
}else {
    answer.style.display ="block";
        btn.src ="assets/images/icon-minus.svg";
}
})
})

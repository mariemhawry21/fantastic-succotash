let share=document.querySelector(".share-abs");
let icons=document.querySelector("#icon");
let foot=document.querySelector("footer");

icons.onmouseover =function () {
    share.style.display="flex";
    icons.classList.add("clicked");
}
icons.onmouseout = ()=>{
share.style.display="none"
icons.classList.remove("clicked");

};


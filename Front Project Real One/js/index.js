$(".acc-1").click(function(){
    $(".acc-title-1").toggle("slow");
    $(".acc-title-2").slideUp("slow");
    $(".acc-title-3").slideUp("slow");
})
$(".acc-2").click(function(){
    $(".acc-title-2").toggle("slow");
    $(".acc-title-1").slideUp("slow");
    $(".acc-title-3").slideUp("slow");
})
$(".acc-3").click(function(){
    $(".acc-title-3").toggle("slow");
    $(".acc-title-1").slideUp("slow");
    $(".acc-title-2").slideUp("slow");
})
$(window).on("load",function(){
    $(".loader").delay(1000).fadeOut("slow");
    $("#overlay").delay(1000).fadeOut("slow");
});
let images = document.querySelectorAll(".images a");
let popup = document.querySelector(".pop-up");
let bigImages = document.querySelector(".pop-up .inner img");
let closeFunc = document.querySelector(".close-item")
let nextItem = document.querySelector(".change-slide .next-item")
let previousItem = document.querySelector(".change-slide .prev-item")
images.forEach((image)=>{
    image.addEventListener("click", function(e){
        e.preventDefault();
        doOpen();
        changeable(this);
        this.classList.add("nextSlide");
    })
})
nextItem.addEventListener("click",function(){
    let nextSlide = document.querySelector(".nextSlide")
    goNext(nextSlide);
})
previousItem.addEventListener("click",function(){
    let previousSlide = document.querySelector(".nextSlide")
    goPrev(previousSlide);
})
function changeable(item){
    let getImage = item.getAttribute("href");
    bigImages.setAttribute("src", getImage);
}
function doOpen(){
    popup.style.display = "flex";
}
function closeSlide(){
    popup.style.display = "none";
}
closeFunc.addEventListener("click",function(){
    closeSlide();
})

document.addEventListener("keydown",(e)=>{
    if (e.code==="Escape") {
        closeSlide();
    }
})
function goNext(item) {
    console.log(item.nextElementSibling);
    if (item.nextElementSibling!==null) {
        item.nextElementSibling.classList.add("nextSlide")
        changeable(item.nextElementSibling);
    }
    else{
        item.parentElement.children[0].classList.add("nextSlide")
        changeable(item.parentElement.children[0]);
    }
   item.classList.remove("nextSlide");
}
function goPrev(item) {
    let length = item.parentElement.children.length;
    if (item.previousElementSibling !==null) {
        item.previousElementSibling.classList.add("nextSlide")
        changeable(item.previousElementSibling);
    }
    else{
        item.parentElement.children[length-1].classList.add("nextSlide")
        changeable(item.parentElement.children[length-1]);
    }
   item.classList.remove("nextSlide");
}
popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("pop-up")) {
      closeSlide();
    }
  });

document.addEventListener("keydown",(e)=>{
   if (e.code==="ArrowRight") {
    let nextSlide = document.querySelector(".nextSlide")
    goNext(nextSlide);
   }
})
document.addEventListener("keydown",(e)=>{
    if (e.code==="ArrowLeft") {
        let previousSlide = document.querySelector(".nextSlide")
        goPrev(previousSlide);
    }
 })
 let menu = document.querySelector(".menu-icon i")
 console.log(menu);
 menu.addEventListener("click",function(){
 })

 window.onscroll = function() {scrollFunction()};
 let navbar = document.querySelector(".nav-bar")
 function scrollFunction(){
     if(document.body.scrollTop>100){
        navbar.style.backgroundColor="white";
        navbar.style.display="none";
     }
 }
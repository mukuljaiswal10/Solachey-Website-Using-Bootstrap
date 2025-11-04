let header = document.querySelector("header")
window.addEventListener("scroll",()=>{
    if(window.scrollY>=100)
    {
        header.classList.add("headerScroll")
    }
    else 
    {
        header.classList.remove("headerScroll")
    }
})
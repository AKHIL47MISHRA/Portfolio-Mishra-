alert("welcome  Mr. warrior⚔️ ")
// document.querySelector(".home-content").addEventListener("click" ,()=>{
//     alert("container Was clicked" )
// })
// function getRandomColor() {

//     let val1 = Math.ceil (0 + Math.random() * 255);
//     let val2 = Math.ceil (0 + Math.random() * 255);
    
//     let val3 = Math.ceil (0 + Math.random() * 255);
    
//     return `rgb(${val1},${val2},${val3})`
//     }
// setInterval(()=> {
//     document.querySelector(".home-content").Style.background=getRandomColor()
// },1000);

// 

// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector("#navbar");
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150

//         let id =sec.getattributes;
//     if(top >= offset && top <offset +height){
//         navlink.forEach(links=>{
//             links.classlist.remove("active")
//             document.querySelector("header nav a href + id  + ']").classList.add("active")
//         })
//     }
//     })
// }
// menu-icon.oneclick = () =>{
//     menu-icon.classlist.toggle("bx-x")
//     navbar.classlist.toggle("active")
// }


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.oneclick = () =>{
    menu.classList.toggle('bx-x');
    menu.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
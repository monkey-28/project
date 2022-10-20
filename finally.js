searchForm = document.querySelector('.search');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.head .head-2').classList.add('active');
  }else{
    document.querySelector('.head .head-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.head .head-2').classList.add('active');
  }else{
    document.querySelector('.head .head-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



let factText = document.querySelector(".fact")
factbtn = document.querySelector(".fact-btn")

function randomFact(){
    fetch("https://api.quotable.io/random").then(response=> response.json()).then(result =>{
       factText.innerText = result.content;
    
    
    });
}

randomFact();

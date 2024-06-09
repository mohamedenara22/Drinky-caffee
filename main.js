



//////////////////////////////////////////////////////////////
// nav list screen 350px to 900px
const btnList = document.querySelector(".fa-list-ul");
const navList = document.querySelector(".nav-list");
const Blur = document.querySelector(".blur");

btnList.addEventListener("click", function (e) {
  e.preventDefault();

  if (btnList.className == "fa fa-list-ul list") {
    navList.style.width = "60%";
    btnList.classList.remove("list");
    Blur.classList.remove("hidden");
  } else {
    navList.style.width = "0%";
    btnList.classList.add("list");
    Blur.classList.add("hidden");
  }
});

Blur.addEventListener('click' , function(){
  navList.style.width = "0%";
  btnList.classList.add("list");
  Blur.classList.add("hidden");
})


////////////////////////////////////////////////////////////////

// const btnAr = document.querySelector('.btn__language');
// const btnEn = document.querySelector('.btn__language2');
// const EntextHeader = document.querySelector('.text-header');
// const ArtextHeader = document.querySelector('.text-header__ar');

// btnAr.addEventListener('click', function(e){
//   e.preventDefault()
//     if(btnAr.className == 'btn__language btn__ar'){
//       EntextHeader.classList.add('hidden')
//       ArtextHeader.classList.remove('hidden')
//       btnAr.classList.remove('btn__ar')
//       btnAr.classList.add('hidden')
//       btnEn.classList.remove('hidden')
//     }else{
//       ArtextHeader.classList.add('hidden')
//       btnAr.classList.add('btn__ar')
//       EntextHeader.classList.remove('hidden')
//     }
// })
/////////////////////////////////////////////////////////////////////////

// const Sliders = document.querySelectorAll('.sliders')
const Slide = document.querySelectorAll('.slide')
const Slider__image = document.querySelectorAll('.image__slide')
const btnLeftSlide = document.querySelector('.btn__left')
const btnRightSlide = document.querySelector('.btn__right')

let curslide = 0;
const maxSlide = Slide.length;

const gotoSlide = function(slider){
  Slide.forEach((s,i) => s.style.transform  = `translateX(${100 * (i-slider)}%)`)
}
gotoSlide()



const nextSlide = function(){
  if(curslide === maxSlide - 1){
    curslide = 0;
  }else{
    curslide ++;
  }
  gotoSlide(curslide)
}

const prevSlide = function(){
  if(curslide === 0){
  curslide = maxSlide -1
  }else{
   curslide --;
  }
  gotoSlide(curslide)
}

btnRightSlide.addEventListener('click',nextSlide)
btnLeftSlide.addEventListener('click',prevSlide)

document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowLeft') prevSlide ()
  if(e.key === 'ArrowRight') nextSlide ()
})


const btnSizeSlide = document.querySelector('.large__menu')

btnSizeSlide.addEventListener('click',function(e){
    e.preventDefault()

  if(btnSizeSlide.className == 'large__menu bigger'){
    Slider__image.forEach(m => m.style.width = '325px')
    Slider__image.forEach(m => m.style.height = '280px')
    Slider__image.forEach(m => m.style.top = '50px')
    Slider__image.forEach(m => m.style.borderRadius = '15px')
    btnSizeSlide.classList.remove('bigger')
  }else{
    btnSizeSlide.classList.add('bigger')
    Slider__image.forEach(m => m.style.width = '150px')
    Slider__image.forEach(m => m.style.height = '150px')
    Slider__image.forEach(m => m.style.borderRadius = '35%')
    Slider__image.forEach(m => m.style.top = '205px')
  }
})







function mouseEffect() {
  var page1content = document.querySelector("#page1-content")
  var mouse = document.querySelector("#mouse")

  page1content.addEventListener("mousemove", function (dets) {
    gsap.to(mouse, {
      x: dets.x,
      y: dets.y
    })
  })

  page1content.addEventListener("mouseenter", function () {
    gsap.to('mouse', {
      scale: 1,
      opacity:1
     
    })
  })

  page1content.addEventListener("mouseleave", function () {
    gsap.to('mouse', {
      scale:0,
      opacity:0

    })
  })



}

mouseEffect()

const elementsToAnimate = [
  "#text #spacediv h2",
  "#textarea h1"
];

elementsToAnimate.forEach((element, index) => {
  gsap.from(element, {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    delay: 4.8 + index * 0.1
   
  });
  
});

gsap.from("#page2 #page3-top h4 ",{
  y:100,
  duration:1,
  opacity:0,
  delay:7
 
})

gsap.from("#page2 #page3-top h2 ",{
  y:140,
  duration:1,
  opacity:0,
  delay:9
 
})

gsap.from("#head ",{
  y:140,
  duration:1,
  opacity:0,
  delay:9
 
})



gsap.from("#othertext h1, #othertext h2", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  delay: 13
});


gsap.from("#moretext h1, #moretext h2", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  delay: 16
});






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});

 var t1= gsap.timeline()
t1.from("#loder h3",{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.1
})

t1.to("#loder h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:-0.1
})

t1.to("#loder",{
  opacity:0
})

t1.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.1,
  delay:-0.5
})

t1.to("#loder",{
  display:none
})

gsap.from("#page5 #page5-top h1",{
 y:100,
 opacity:0,
 delay:0.2,
 duration:2,
 stagger:0.3,
 scale:0
})



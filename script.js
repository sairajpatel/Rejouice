// gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("body", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "body" });
// // --- SETUP END ---






// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();






const page1Content = document.getElementById("page1-content")
var Cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(Cursor,{
        x:dets.x,
        y:dets.y
    })



})
page1Content.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        scale:1,
        opacity:1,
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        scale:0,
        opacity:0,
    })
})
gsap.from("#page2 h2",{
    y:100,
    scale:1,
    opacity:0,
    duration:2,
    
    
    
    scrollTrigger:{
    trigger:"#page2 h2",
    scroller:"body",
    scrub:.2,
    start:"top 70%",
    end:"top 46%",
   
    
   
    
    
    
   


    }
   
    

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
   
  });

 var tl= gsap.timeline();
 tl.from("#loader h3",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.1,
 })
 tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:-0.1
 })
 tl.to("#loader",{
    opacity:0,

 })
 tl.to("#loader",{
    display:"none",
 })
 tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.5,
 })
 gsap.from("footer h1 span",{
   x:100,
    opacity:0,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        scrub:.4,
       
        start:"top 70%",
        end:"top 46%",
       
        
       
        
        
        
       
    
    
        }
 })
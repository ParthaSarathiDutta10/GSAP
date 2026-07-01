// gsap.to('#box', {
//     x:600 ,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1, // -1 dile infinite hbe
//     yoyo:true,
// })


// gsap.from("h1",{
//     color:"red",
//     duration:2,
//     delay:0.5,
//     opacity:0,
//     y:20,
//    stagger:0.2, //akta akta por por kore asbeh
// })


// gsap.to('#box1',{
//     x:800,
//     duration:1.5,
//     rotate:360 ,
//     delay:1,
// })

// gsap.to("#box2",{
//     x:800,
//     duration:2,
//     delay:2.5,
//     backgroundColor:"chartreuse"
// })

// gsap.to("#box3",{
//     x:800,
//     scale:0.5,
//     borderRadius : "50%",
//     duration:1.5,
//     delay:4.5,
// })


// GSAP Timeline

var tl = gsap.timeline();

tl.to("#box1", {
    x:800,
    rotate:360,
    duration:1.5,
    delay:1                                           
})


tl.to('#box2' , {
    x:800,
    duration:1.5
})


tl.to("#box3",{
    x:800,
    duration:1.5
})


var nav= gsap.timeline();


nav.from("#nav",{
    y:-20,
    delay:0.3,
    duration:0.3,
    stagger:0.5
})
nav.from(".content",{
    scale:1,
    delay:0,
    duration:0.3,
    opacity:0
})
nav.from('.logo',{
    y:-20 ,
    delay:0.3,
    duration:0.3,
    stagger:0.5,
    opacity:0
})

nav.from(".menu > div" , {
    y:-20 ,
    delay:0.3,
    duration:0.3,
    stagger:0.5,
    opacity:0
})


nav.from('h1',{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})

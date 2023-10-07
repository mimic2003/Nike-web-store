window.onload = function() {
    document.getElementById("my_audio").play();
}

// 
var loader = document.getElementsByClassName('loader');
window.addEventListener('onload',function(){
    loader.classList.add('disappear');
});


const l = document.getElementById('rightside');
const handleOnMove = e =>{
    const p = e.clientX / window.innerWidth*100;
    l.style.width = `${p}%`;
}

const s = document.getElementById('slides');
s.onmousemove = e => handleOnMove(e);
s.ontouchmove = e => handleOnMove(e.touches[0]);


// gsap

window.onload=function(){
    w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 500;
    if ( w >= targetWidth) {     
        gsap.registerPlugin(ScrollTrigger);
        let t1 = gsap.timeline({
            default:{
                ease:"power4.inOut",
                duration:2
            },
            scrollTrigger:{
                trigger: '.centering',
                toggleAction: 'restart pause none none',
                scrub:true,
                start:'center bottom',
                end: '+=120 +=220',
                // markers:true
            },
        })
        t1.from('.home_title',{ y:60, scale:1.2, duration:1.3 })
        .from('.home_sub_div',{y:60, duration:1},'-=1.2')
        .from('.home_img',{'scale':1.4,duration:1},'-=')
        .from('.centering',{opacity:0, 'scale':0.8 ,duration:2},'');
        
        let t2 = gsap.timeline({
            default:{
                ease:"power4.inOut",
                duration:2
            },
            scrollTrigger:{
                trigger: '.sec1_title',
                // scrub:true, 
                start:'top center',
                end: '+=350 +=500',
                // markers:true
            },
        })
        t2.from('.sec1_title',{ y:70, duration:1 })
        .from('.sec1_img',{ x:250, scale:0.8, duration:2 },'-=2')
        // .from('.floating_shoe',{y:-100, scale:0.5, duration:1},'-=2')
        .from('.sec1_description',{
            // scrollTrigger:{
            //     trigger: '.sec1_description',
            //     toggleAction: 'restart pause none none',
            //     // scrub:true,
            //     start:'top center',
            //     end:'+=350 +=500',
            //     markers:true
            // }, 
            background:'black',
            duration:1,
            scale:1.4,
            color:'black',
        },'-=1');
        
        
        
        
    }
   
    };



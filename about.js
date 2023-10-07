mens = document.getElementsByClassName("cards")[0];
women = document.getElementsByClassName("cards")[1];

mens.onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
  };
}

women.onmousemove = e => {
  for(const card of document.getElementsByClassName("wcard")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
  };
}


// info card
const subtitle = document.getElementsByClassName("icard-subtitle");
console.log(subtitle);


const createWord = (text, index) => {
  const word = document.createElement("span");
  word.innerHTML = `${text} `;
  word.classList.add("icard-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}
let i=0;
for (const sub of subtitle) {
  // console.log(sub);
  const addWord = (text, index) => sub.appendChild(createWord(text, index));
  const createSubtitle = text => text.split(" ").map(addWord);
   
  if (i==0) {
    createSubtitle("Hark! I, Aksshai, a noble of great stature, don this flower-themed royal Nike robe. 'Tis a sight to behold, forsooth! I regale thee, oh peasants, with tales of valor and triumph. Mayhap, one day, ye shall witness such grandeur firsthand."); 
  }
  else if(i==1){
    createSubtitle("Hear ye, hear ye, good peasants of the land! It is I, thy noble Henil the Third. The shoes were most comfortable, and didst lend me a sprightly step as I went about my business. The flowers upon them didst bring to mind the beauty of the countryside, and I felt a sense of joy as I beheld them."); 
  }
  else if(i==2){
    createSubtitle("Harken, good people! As a viscount of thine land, I hath recently had the pleasure of donning a wondrous pair of shoes, fashioned by the skilled hands of Nike. And verily, they are bedecked with a most striking floral pattern."); 
  }
  else{
    createSubtitle("Oh, how I felt when I donned this magnificent robe! Like a flower myself, I bloomed with confidence and grace, each step I took imbued with a sense of purpose and power. The Nike flowers upon my robe seemed to speak of strength and triumph, reminding me that I was a ruler in my own right, capable of great deeds."); 
  }
  i+=1;
}




gsap.registerPlugin(ScrollTrigger);
    let t1 = gsap.timeline({
        default:{
            ease:"power4.inOut",
            duration:2
        },
        scrollTrigger:{
            trigger: '.overlay',
            toggleAction: 'restart pause none none',
            scrub:false,
            start:'center bottom',
            end: '+=120 +=220',
            // markers:true
        },
    })
    t1.from('.overlay', {scale:0.8, y:60})

    gsap.from(".card",{
      scrollTrigger:{
        trigger: '.card',
            toggleActions: 'restart reverse restart reverse',
            scrub:false,
            start:'center bottom',
            end: '+=480 +=220',
            // markers:true
      },
      scale:0.6, x:-100, stagger:0.02
    })

    gsap.from(".wcard",{
      scrollTrigger:{
        trigger: '.wcard',
            toggleActions: 'restart reverse restart reverse',
            scrub:false,
            start:'center bottom',
            end: '+=480 +=220',
            // markers:true
      },
      scale:0.6, x:-100, stagger:0.02
    })

    gsap.from(".infocard",{
      scrollTrigger:{
        trigger: '.infocard',
            toggleActions: 'restart reverse restart reverse',
            scrub:false,
            start:'center bottom',
            end: '+=480 +=220',
            // markers:true
      },
      scale:0.1, y:-100, stagger:0.1
    })


 
  
    const l = document.getElementById('rightside');
    const handleOnMove = e =>{
        const p = e.clientX / window.innerWidth*100;
        l.style.width = `${p}%`;
    }
    
    const s = document.getElementById('slides');
    s.onmousemove = e => handleOnMove(e);
    s.ontouchmove = e => handleOnMove(e.touches[0]);

const text=`Happy Girlfriend's Day ❤️

Thank you for being the most beautiful part of my life.

Your smile makes my darkest days brighter.
Your hugs feel like home.
Every memory with you is my favorite memory.

No matter what life brings,
I promise to always stand beside you.

I love you more than words can ever say.

Happy Girlfriend's Day, My Love ❤️`;

const btn=document.getElementById("openBtn");
const letter=document.getElementById("letter");
const msg=document.getElementById("msg");
btn.onclick=()=>{
btn.style.display="none";
letter.classList.remove("hidden");
let i=0;
(function type(){
 if(i<text.length){
   msg.textContent+=text[i++];
   setTimeout(type,35);
 }
})();
};

const c=document.getElementById("bg"),x=c.getContext("2d");
function resize(){c.width=innerWidth;c.height=innerHeight}
addEventListener("resize",resize);resize();
const stars=[...Array(150)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2}));
const hearts=[...Array(45)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,s:10+Math.random()*18,v:0.4+Math.random()}));
function draw(){
x.fillStyle="#090311";x.fillRect(0,0,c.width,c.height);
x.fillStyle="white";
stars.forEach(s=>{x.globalAlpha=.4+Math.random()*.6;x.beginPath();x.arc(s.x,s.y,s.r,0,6.28);x.fill();});
x.globalAlpha=1;
x.font="20px serif";
hearts.forEach(h=>{
x.font=h.s+"px serif";
x.fillText("❤️",h.x,h.y);
h.y-=h.v;
if(h.y<-30){h.y=c.height+20;h.x=Math.random()*c.width;}
});
requestAnimationFrame(draw);
}
draw();

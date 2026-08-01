const lines=[
"To My Love ❤️,",
"",
"Happy Girlfriend's Day!",
"",
"Thank you for being my happiness.",
"Your smile makes every day brighter.",
"You are my favorite person.",
"I'm grateful for every moment with you.",
"",
"Forever Yours ❤️"
];
let i=0,j=0;
const out=document.getElementById("typewriter");
function type(){
 if(i>=lines.length)return;
 if(j<lines[i].length){
   out.innerHTML+=lines[i][j++];
   setTimeout(type,40);
 }else{
   out.innerHTML+="\n";
   i++;j=0;
   setTimeout(type,350);
 }
}
function replay(){
 out.innerHTML="";
 i=0;j=0;
 type();
}
type();

const hearts=document.getElementById("hearts");
setInterval(()=>{
 const h=document.createElement("div");
 h.className="float";
 h.textContent="❤️";
 h.style.left=Math.random()*100+"vw";
 h.style.animationDuration=(5+Math.random()*5)+"s";
 hearts.appendChild(h);
 setTimeout(()=>h.remove(),10000);
},300);

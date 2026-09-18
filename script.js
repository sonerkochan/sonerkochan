const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const navLinks=[...document.querySelectorAll("nav a")];
const sections=[...document.querySelectorAll("main section[id]")];
const updateNav=()=>{let current="";sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))};
window.addEventListener("scroll",updateNav,{passive:true});updateNav();
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const target=document.querySelector(a.getAttribute("href"));if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"})}}));

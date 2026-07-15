
window.addEventListener('scroll',()=>{
const nav=document.querySelector('.nav');
nav.style.background=window.scrollY>50?'rgba(34,34,34,.75)':'rgba(255,255,255,.12)';
});

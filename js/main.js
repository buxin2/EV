
const $=s=>document.querySelector(s);
$('#bg').onclick=()=>$('#menu').classList.toggle('open');
$('#vid').onclick=e=>{e.preventDefault();$('#md').classList.add('on')};
$('#cl').onclick=()=>$('#md').classList.remove('on');
$('#md').onclick=e=>{if(e.target.id==='md')$('#md').classList.remove('on')};
document.querySelectorAll('.menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*.12+'s';io.observe(el)});

document.querySelectorAll('.gi').forEach(g=>g.onclick=()=>{const l=document.getElementById('lb');l.querySelector('img').src=g.querySelector('img').src;l.classList.add('on')});
document.getElementById('lb').onclick=()=>document.getElementById('lb').classList.remove('on');
document.querySelectorAll('.gi.rv,.fp.rv,.ab-tx.rv').forEach(el=>io.observe(el));

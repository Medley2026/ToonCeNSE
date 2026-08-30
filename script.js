
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

const cursor = $('.cursor');
if(cursor){
  window.addEventListener('mousemove', e=>{
    cursor.style.left=(e.clientX-10)+'px';
    cursor.style.top=(e.clientY-10)+'px';
  });
}
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
},{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

$$('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $$('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const value=btn.dataset.round;
    $$('.match-card').forEach(card=>{
      card.style.display=(value==='all'||card.dataset.round===value)?'block':'none';
    });
  });
});

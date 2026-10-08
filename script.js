const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function submitForm(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const service=document.getElementById('service').value;
  const note=document.getElementById('form-note');
  note.textContent=`Thank you, ${name}. Your ${service.toLowerCase()} request has been prepared for the KB team.`;
  e.target.reset();
  return false;
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.service-card,.step,.about-box,.contact-form,.why-items div').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease, transform .6s ease';observer.observe(el);
});

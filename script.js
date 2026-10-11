document.addEventListener("DOMContentLoaded", () => {
 const body=document.body, theme=document.getElementById("theme"), progress=document.getElementById("progress"), topBtn=document.getElementById("top");
 const navLinks=document.querySelectorAll(".nav-link"), sections=document.querySelectorAll("main section[id]");
 const filterBtns=document.querySelectorAll(".filters button"), projects=document.querySelectorAll(".project"), skills=document.querySelectorAll(".skill");
 const form=document.getElementById("contactForm"), status=document.getElementById("status");
 document.getElementById("year").textContent=new Date().getFullYear();
 if(localStorage.getItem("rishitha-theme")==="dark"){body.classList.add("dark");theme.innerHTML='<i class="bi bi-sun"></i>';}
 theme.addEventListener("click",()=>{body.classList.toggle("dark");const isDark=body.classList.contains("dark");localStorage.setItem("rishitha-theme",isDark?"dark":"light");theme.innerHTML=isDark?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';});
 const words=["Creative builder","Curious learner","Future developer"];let wi=0;
 setInterval(()=>{wi=(wi+1)%words.length;const el=document.getElementById("typed");el.style.opacity=0;setTimeout(()=>{el.textContent=words[wi];el.style.opacity=1;},180);},2400);
 filterBtns.forEach(btn=>btn.addEventListener("click",()=>{filterBtns.forEach(b=>b.classList.remove("active"));btn.classList.add("active");const type=btn.dataset.filter;projects.forEach(p=>p.classList.toggle("d-none",type!=="all"&&p.dataset.category!==type));}));
 const skillObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");skillObserver.unobserve(e.target);}}),{threshold:.2});skills.forEach(s=>skillObserver.observe(s));
 form.addEventListener("submit",e=>{e.preventDefault();form.classList.add("checked");if(!form.checkValidity()){status.textContent="Please correct the highlighted fields and try again.";status.className="failure";return;}const name=document.getElementById("visitorName").value.trim();status.textContent=`Thanks, ${name}! Your message passed validation. This demo does not send messages.`;status.className="success";form.reset();form.classList.remove("checked");});
 function scrollUpdate(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?scrollY/max*100:0}%`;topBtn.classList.toggle("visible",scrollY>450);}addEventListener("scroll",scrollUpdate,{passive:true});scrollUpdate();
 topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
 const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${e.target.id}`));}),{rootMargin:"-35% 0px -55% 0px"});sections.forEach(s=>sectionObserver.observe(s));
 navLinks.forEach(a=>a.addEventListener("click",()=>{const menu=document.getElementById("nav");if(menu.classList.contains("show"))bootstrap.Collapse.getInstance(menu)?.hide();}));
});
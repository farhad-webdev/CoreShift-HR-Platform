lucide.createIcons();
const menu = document.querySelector('#menu');
const links = document.querySelector('#links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  lucide.createIcons();
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const testimonials = [
 {name:'Sarah Mitchell',role:'HR Director at Nova Solutions',image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=85',text:'“CoreShift has streamlined our HR processes, making hiring and onboarding more efficient. It helps us stay organized and focus on what matters most.”'},
 {name:'James Carter',role:'HR Manager at Brightworks',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85',text:'“The platform gives our managers a clearer view of the team. We spend less time on repetitive tasks and more time helping people grow.”'},
 {name:'Amina Rahman',role:'People Lead at Studio North',image:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=85',text:'“CoreShift made our people operations feel connected. The experience is simple for employees and powerful for our HR team.”'}
];
let current = 0;
function showQuote() {
 const q = testimonials[current];
 document.querySelector('#quoteImage').src = q.image;
 document.querySelector('#quoteImage').alt = q.name;
 document.querySelector('#quoteName').textContent = q.name;
 document.querySelector('#quoteRole').textContent = q.role;
 document.querySelector('#quoteText').textContent = q.text;
}
document.querySelector('#prev').addEventListener('click', () => { current=(current-1+testimonials.length)%testimonials.length; showQuote(); });
document.querySelector('#next').addEventListener('click', () => { current=(current+1)%testimonials.length; showQuote(); });
document.querySelector('#contactForm').addEventListener('submit', e => {
 e.preventDefault();
 document.querySelector('#formMessage').textContent = 'Thanks! This demo form is working locally. Connect a form service to receive submissions.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
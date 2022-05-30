// Global Variables
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar_list');
// Build nav menu based on the number of sections in the document

for(let section of sections){
  const navli = document.createElement('li');
  
  const link = document.createElement('a');
 link.classList.add('menu__link');
 link.innerText = section.getAttribute('data-nav');
//  Add eventListener to nav item
  navli.addEventListener('click', () => {section.scrollIntoView({behavior: 'smooth'});
     e.preventDefault() });
  navli.append(link);
  navbar.appendChild(navli);
}

// Add eventListener to current section 
window.addEventListener('scroll',  () => {
  sections.forEach(section => {
       let sectionView = true;
       const bounds = section.getBoundingClientRect();
         // Highlight corresponding nav section when in viewpoint
      if (bounds.top > 0 && bounds.bottom < window.innerHeight) {
            sectionView = true;
        // Add active class  to  nav items
          section.classList.add('active')
         }
         else{
           section.classList.remove('active');
         
        }
   })
   });
   
   
   

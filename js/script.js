$(function(){var e=["https://web.whatsapp.com/send?phone=917016964352","https://api.whatsapp.com/send?phone=917016964352"];function t(){var t=767.98>$(window).width();$(".set-url-target").attr("href",e[t?1:0])}$(window).on("resize",function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(t,200)}).trigger("resize")});


document.querySelector(".year").innerHTML= new Date().getFullYear()



// HEADER
document.getElementById("header").innerHTML = `
  <nav class="mynavbar bg-light">
    <div class="container-fluid header">
      <a class="brandLogo" href="https://dipengada.com/dga-profile/">
        <img src="image/KADS_Logo.webp" alt="KADS Logo">
      </a>
      <button class="navToggle">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="navMenu mx-auto mb-2 mb-lg-0">
        <li class="nav-close">
          <button class="btn-nav-close"><span class="close-btn">+</span></button>
        </li>
        <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
        <li class="navLi">
          <a href="#" class="navLink">About 
            <span class="toggleSub">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
                <path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/>
              </svg>
            </span>
          </a>
          <ul class="dropdownList">
            <li class="navLi"><a href="KADS_Profile.html" class="navLink">KADS Profile</a></li>
            <li class="navLi"><a href="#" class="navLink">link 2</a></li>
            <li class="navLi"><a href="#" class="navLink">link 3</a></li>
          </ul>
        </li>
        <li class="navLi">
          <a href="#" class="navLink">Services 
            <span class="toggleSub"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg></span>
          </a>
          <ul class="dropdownList">
            <li class="navLi"><a href="#" class="navLink">link 1</a></li>
            <li class="navLi"><a href="#" class="navLink">link 2</a></li>
            <li class="navLi"><a href="#" class="navLink">link 3</a></li>
          </ul>
        </li>
        <li class="navLi">
          <a href="#" class="navLink">Projects 
            <span class="toggleSub"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg></span>
          </a>
          <ul class="dropdownList">
            <li class="navLi"><a href="residential.html" class="navLink">Residential</a></li>
            <li class="navLi"><a href="#" class="navLink">link 2</a></li>
            <li class="navLi"><a href="#" class="navLink">link 3</a></li>
          </ul>
        </li>
        <li class="navLi">
          <a href="#" class="navLink">Recognitions 
            <span class="toggleSub"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/></svg></span>
          </a>
          <ul class="dropdownList">
            <li class="navLi"><a href="#" class="navLink">link 1</a></li>
            <li class="navLi"><a href="#" class="navLink">link 2</a></li>
            <li class="navLi"><a href="#" class="navLink">link 3</a></li>
          </ul>
        </li>
        <li class="navLi"><a href="gallery.html" class="navLink">Testimonials</a></li>
        <li class="navLi"><a href="contactUs.html" class="navLink">Contact</a></li>
      </ul>
    </div>
  </nav>
`;

// FOOTER
document.getElementById("footer").innerHTML = `
  <div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/KADS_LogoWhite.webp" alt="KADS">
              </a>
              <ul class="contact-info">
                <li>
                  <a class="locationLink" target="_blank" href="https://maps.app.goo.gl/8e5zxepecGP5nJfV8">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <A1-TF-25>
                      <pre class="mb-0">
Pratapbaug Shopping Center,
vaibhav Traders,
Opp.Bharat Petrol Pump,
Mujmahuda, Vadodara,Gujarat
</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:+917016964352">
                    <i class="fa-solid fa-phone"></i>+91 70169 64352</a>
                </li>
                <li>
                  <a class="emailAnchor" href="mailto:kadsuser@gmail.com">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>kadsuser@gmail.com</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=917016964352">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH centerStyle">Quick Links</h5>
              <ul>
                <li>
                  <a href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a href="about.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>About</a>
                </li>
                <li>
                  <a href="WhatWeDo.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Service </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Testimonials </a>
                </li>
                <li>
                  <a href="contactUs.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 6 will be here</a>
                </li>
                
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH centerStyle">Explore More</h5>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 1 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 2 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 3 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 4 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 5 will be here</a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Link 6 will be here</a>
                </li>
                
              </ul>
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by KADS | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
          `;
          
         
// Active Link Highlighter
function highlightActiveLink() {
  const currentFile = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0];
  document.querySelectorAll('.navLink').forEach(link => {
    const href = link.getAttribute('href')?.split('?')[0];
    if (!href || href === '#') return;

    if (href === currentFile) {
      link.classList.add('active');
      const dropdown = link.closest('.dropdownList');
      const parentLink = dropdown?.closest('.navLi')?.querySelector('.navLink');
      parentLink?.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof loadContent === 'function') {
    loadContent(() => highlightActiveLink());
  } else {
    highlightActiveLink();
  }
});
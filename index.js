const switchMode = document.querySelector('.switch-mode');
const switchCircle = document.querySelector('.switch-circle');
const heroSection = document.querySelector('.hero-section');
const logo = document.querySelector('.logo');
const links = document.querySelector('.links');
const navLinksAnchor = document.querySelectorAll('.nav-links a')
const menuLines = document.querySelectorAll('.menu div')
const navLinks = document.querySelector('.nav-links')
const menu = document.querySelector('.menu')
const heroHeader = document.querySelector('.hero-header')
const heroPara = document.querySelector('.hero-para')
const callToAction = document.querySelector('.hero-text a')
const linksFade = document.querySelectorAll('.nav-links li')
const servicesBackground = document.querySelector('.services-background')
const servicesHeader = document.querySelector('.services-header')
const servicesContentBox = document.querySelectorAll('.services-content div')
const servicesContentHeader = document.querySelectorAll('.services-content h4')
const servicesContentPara = document.querySelectorAll('.services-content p')
const servicesContentBtn = document.querySelectorAll('.services-content a')
const skillsBackground = document.querySelector('.skills-background')  
const skillsHeader = document.querySelector('.skills-header')
const htmlHeader = document.querySelector('.html-header')
const skillscontents = document.querySelectorAll('.skills-content div')
const aboutmeBackground = document.querySelector('.aboutme-background')
const aboutmeHeader = document.querySelector('.aboutme-header')
const paraBtn = document.querySelector('.para-btn a')
const aboutmePara = document.querySelector('.aboutme-para')
const textInputSpace = document.querySelector('.text-input-space')
const nameInputSpace = document.querySelector('.name-input-space')
const emailInputSpace = document.querySelector('.email-input-space')
const formBtn = document.querySelector('.form-btn')
const legendSection = document.querySelector('.legend-section')
const aboutMeForm = document.querySelectorAll('.aboutme-form div')
const aboutMeContacts = document.querySelectorAll('.aboutme-contacts a')
const footerText = document.querySelector('.footer-text')
const navShadow = document.querySelector('.nav-shadow')
const logoFixed = document.querySelector('.logo-fixed')
const wrapper = document.querySelector('.wrapper')


switchMode.addEventListener('click', () => {
    switchCircle.classList.toggle('change-color')
    switchMode.classList.toggle('change-color')
    heroSection.classList.toggle('change-color')
    logo.classList.toggle('change-color')

    menuLines.forEach(line => {
        line.classList.toggle('change-color')
    })

    heroHeader.classList.toggle('change-color')
    heroPara.classList.toggle('change-color')
    callToAction.classList.toggle('change-color')
    servicesBackground.classList.toggle('change-color')
    servicesHeader.classList.toggle('change-color')

    servicesContentBox.forEach(box => {
        box.classList.toggle('change-color')
    })
    servicesContentHeader.forEach(box => {
        box.classList.toggle('change-color')
    })
    servicesContentPara.forEach(box => {
        box.classList.toggle('change-color')
    })
    servicesContentBtn.forEach(box => {
        box.classList.toggle('change-color')
    })

    skillsBackground.classList.toggle('change-color')  
    skillsHeader.classList.toggle('change-color')
    aboutmeBackground.classList.toggle('change-color')
    aboutmeHeader.classList.toggle('change-color')
    aboutmePara.classList.toggle('change-color')
    paraBtn.classList.toggle('change-color')
    textInputSpace.classList.toggle('change-color')
    emailInputSpace.classList.toggle('change-color')
    nameInputSpace.classList.toggle('change-color')
    formBtn.classList.toggle('change-color')
    legendSection.classList.toggle('change-color')
    footerText.classList.toggle('change-color')
    navShadow.classList.toggle('change-color')
    logoFixed.classList.toggle('change-color')
    navLinks.classList.toggle('change-color')
   
    skillscontents.forEach(content => {
        content.classList.toggle('change-color')
    })

    aboutMeForm.forEach(form => {
        form.classList.toggle('change-color')
    })

    navLinksAnchor.forEach(anchor => {
        anchor.classList.toggle('change-color')
    })
    aboutMeContacts.forEach(contact => {
        contact.classList.toggle('change-color')
    })
    
})

menu.addEventListener('click', () => {
 navLinks.classList.toggle('open')
 menu.classList.toggle('toggle')
    
    linksFade.forEach(link => {
        link.classList.toggle('fade')
        
    });

})

 navLinks.addEventListener('click', () => {
      navLinks.classList.toggle('open')
     menu.classList.toggle('toggle')
     
     linksFade.forEach(link => {
        link.classList.toggle('fade')
        
    });
 })

window.addEventListener('load', () => {
     wrapper.style.display = 'none'
 })
  







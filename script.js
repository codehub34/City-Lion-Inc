
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

}

// MouseOver
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = '#b43041';
    event.target.textContent = 'Contact Us🤙';
});

homeBtn.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = '#cb4154';
    event.target.textContent = 'Lets talk🥰';
});


homeBtn.addEventListener('click', event => {
    event.target.style.backgroundColor = '#131d3b';
    event.target.textContent = 'OUCH! 😜';
   setTimeout( function(){
    alert('Thanks for reaching Us!')
    window.location.href = 'https://wa.me/+231775528982?text=How%20can%20we%20help%20you?';
   }, 2000)
});


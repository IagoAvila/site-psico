const btnTop = document.getElementById("btnTop");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const menuList = document.querySelector('.menu-list');

  menuBtn.addEventListener('click', function() {
    menuList.classList.add('show');
    closeBtn.classList.add('show');
  });

  closeBtn.addEventListener('click', function() {
    menuList.classList.remove('show');
    closeBtn.classList.remove('show');
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    const homeSection = document.querySelector('#Home');

    window.addEventListener('scroll', function () {
      const homeRect = homeSection.getBoundingClientRect();

      // Se a Home estiver 90% visível na tela, oculta o botão
      if (homeRect.top < window.innerHeight * 0.9 && homeRect.bottom > 0) {
        whatsappBtn.classList.add('hidden');
      } else {
        whatsappBtn.classList.remove('hidden');
      }
    });
  });


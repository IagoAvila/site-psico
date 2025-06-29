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


document.addEventListener('DOMContentLoaded', function() {
  const especialidadesItems = document.querySelectorAll('#especialidades ul.sub li');

  especialidadesItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
});


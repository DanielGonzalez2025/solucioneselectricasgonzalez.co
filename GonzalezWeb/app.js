//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section:not(#servicios,#benefits)"); // Excluir la sección servicios
    const firstFounder = document.querySelector(".founder-container:first-child");
    const secondFounder = document.querySelector(".founder-container:nth-child(2)");
    const thirdFounder = document.querySelector(".founder-container:nth-child(3)");

    // Intersection Observer para las secciones
    let observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.1 } // Se activa cuando el 20% de la sección está visible
    );

    sections.forEach(section => observer.observe(section));

    // Evento de scroll para manejar la superposición del segundo y tercer founder-container
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        // Puntos de activación para el segundo founder-container
        let fadeInPoint2 = firstFounder.offsetTop + windowHeight * 0.2;
        let fadeOutPoint2 = firstFounder.offsetTop + windowHeight * 0.6;
        
        if (scrollPosition > fadeInPoint2) {
            let opacityValue = Math.min((scrollPosition - fadeInPoint2) / (fadeOutPoint2 - fadeInPoint2), 1);
            secondFounder.style.opacity = opacityValue;
        } else {
            secondFounder.style.opacity = 0;
        }

        // Puntos de activación para el tercer founder-container (aparece después del segundo)
        let fadeInPoint3 = secondFounder.offsetTop + windowHeight * 0.2;
        let fadeOutPoint3 = secondFounder.offsetTop + windowHeight * 0.6;

        if (scrollPosition > fadeInPoint3) {
            let opacityValue = Math.min((scrollPosition - fadeInPoint3) / (fadeOutPoint3 - fadeInPoint3), 1);
            thirdFounder.style.opacity = opacityValue;
        } else {
            thirdFounder.style.opacity = 0;
        }
    });
});

// Este es un ejemplo básico de JavaScript que podrías agregar para animar los números
document.addEventListener('DOMContentLoaded', function() {
    // Función para animar el conteo de porcentajes
    function animatePercentage(element, target) {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.round(current) + '%';
        if (current >= target) {
          element.textContent = target + '%';
          clearInterval(timer);
        }
      }, 20);
    }
  
    // Observador de intersección para activar la animación cuando sea visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percentageElement = entry.target.querySelector('.percentage');
          const targetValue = parseInt(percentageElement.textContent);
          percentageElement.textContent = '0%';
          animatePercentage(percentageElement, targetValue);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    // Observar todas las tarjetas de beneficios
    document.querySelectorAll('.benefit-card').forEach(card => {
      observer.observe(card);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas de testimonios
    const tarjetas = document.querySelectorAll('.testimonio-card');
    
    // Añadir evento de clic a cada tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            // Alternar la clase 'flipped' para girar la tarjeta
            this.classList.toggle('flipped');
        });
    });
});

  
  






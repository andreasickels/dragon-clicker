if (document.body.animate) {
    document.querySelector('#egg').addEventListener('click', pop);
  }
  
  function pop (e) {
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = document.querySelector('#egg').getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
        createParticle(x, y);
    } else {
        createParticle(e.clientX, e.clientY);
    }
  }
  
  function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    
    const size = Math.floor(Math.random() * 10 + 8);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `rgb(155, 145, 113)`;
    
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;
  
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 200
    });

    animation.onfinish = () => {
      particle.remove();
    };
  }
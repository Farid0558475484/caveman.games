function animateCounters() {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach((counter) => {
      const targetValue = parseInt(counter.innerText);
      let currentValue = 0;
      const increment = Math.ceil(targetValue / 10000); // Увеличиваем значение на 1% от целевого значения каждый раз
  
      const counterInterval = setInterval(() => {
        if (currentValue >= targetValue) {
          clearInterval(counterInterval);
        } else {
          currentValue += increment;
          counter.innerText = currentValue;
        }
      }, 50); // Задержка между увеличениями значения (в миллисекундах)
    });
  }
  
  animateCounters();

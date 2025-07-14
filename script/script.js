const phrases = [
      "Crafting a beautiful portfolio...",
      "Sharpening the code...",
      "Almost ready to launch!"
    ];
    let i = 0;
    const el = document.getElementById("fancyText");

    setInterval(() => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = phrases[i % phrases.length];
        el.style.opacity = 1;
        i++;
      }, 500);
    }, 3000);
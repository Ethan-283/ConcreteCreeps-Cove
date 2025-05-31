document.addEventListener("DOMContentLoaded", () => {
  const glitchTexts = document.querySelectorAll(".glitch-text");
  glitchTexts.forEach(text => {
    text.addEventListener("mouseover", () => {
      const original = text.textContent;
      let glitch = '';
      for (let i = 0; i < original.length; i++) {
        glitch += Math.random() > 0.8 ? String.fromCharCode(33 + Math.random() * 94) : original[i];
      }
      text.textContent = glitch;
      setTimeout(() => text.textContent = original, 500);
    });
  });
});
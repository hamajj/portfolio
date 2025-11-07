// Şimdilik basit terminal efektleri ekleyebiliriz
const lines = document.querySelectorAll('.line');

lines.forEach((line, idx) => {
    line.style.opacity = 0;
    setTimeout(() => {
        line.style.transition = 'opacity 0.5s';
        line.style.opacity = 1;
    }, idx * 200);
});


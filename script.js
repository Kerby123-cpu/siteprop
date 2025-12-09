const overlay = document.getElementById('overlay');
const subscribeBtn = document.getElementById('subscribeBtn');

// Показываем overlay
overlay.style.display = 'flex';

// Кнопка теперь просто скрывает overlay, без push, без SDK
subscribeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('screen');
  let pressTimer;
  const longPressDuration = 1000; // 1000 ms = 1 second

  const startPress = (event) => {
    event.preventDefault();

    pressTimer = setTimeout(() => {
      console.log('Long press triggered!');
      target.style.backgroundColor = '#4bb543';
    }, longPressDuration);
  };

  const cancelPress = () => {
    clearTimeout(pressTimer);
  };

  target.addEventListener('mousedown', startPress);
  target.addEventListener('touchstart', startPress);

  target.addEventListener('mouseup', cancelPress);
  target.addEventListener('mouseleave', cancelPress);
  target.addEventListener('touchend', cancelPress);
  target.addEventListener('touchcancel', cancelPress);
});

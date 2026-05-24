const input = document.querySelector('.input');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = 'Error';
    }
  }
});
  document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;

      if (val === 'X') {
        input.value = '';
      } else if (val === '=') {
        // evaluate
        try {
          input.value = eval(input.value);
        } catch {
          input.value = 'Error';
        }
      } else {
        input.value += val;
      }
    });
  });
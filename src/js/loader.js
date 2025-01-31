export function createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.textContent = 'Завантаження тем...';
    return loader;
  }
  
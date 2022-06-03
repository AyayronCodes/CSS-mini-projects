class App {
  panels = document.querySelectorAll('.panel');
  constructor() {
    this.init();
  }

  clearActive() {
    this.panels.forEach(panel => panel.classList.remove('active'));
  }

  init() {
    this.panels.forEach(panel => {
      panel.addEventListener('click', () => {
        this.clearActive();
        panel.classList.add('active');
      })
    })
  }
}

const app = new App();

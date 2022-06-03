const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

async function getJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com/', config)

  const data = await res.json()

  jokeEl.innerText = data.joke
}

getJoke()

btn.addEventListener('click', () => {
  jokeEl.innerText = 'Loading...';
  getJoke();
})
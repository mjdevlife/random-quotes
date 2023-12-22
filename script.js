const btn = document.querySelector('#new-quote');
const quote = document.querySelector('#quote');
const cite = document.querySelector('#cite');
const submit = document.querySelector('#submit');
const blockquote = document.querySelector('#blockquote');

async function getRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  if (response.ok) {
    quote.textContent = data.content;
    cite.textContent = data.author;
  } else {
    quote.textContent = 'An unexpected error occured. Retry';
    console.log(data);
  }
}

getRandomQuote();

btn.addEventListener('click', async () => {
  try {
    submit.innerHTML = `<button class='btn btn-primary' type='button' disabled id='new-quote'>
      <span
        class='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      ></span>
      Loading...
    </button>`;
    blockquote.innerHTML = `<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;

    await getRandomQuote();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    window.location.reload();
  }
});

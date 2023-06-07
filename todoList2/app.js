import { Todolists } from './Component/TodoLists.js';
import { fetchUrl } from './api.js';
import { createElement } from './createElement.js';

try {
  const todos = await fetchUrl(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const pagePrincipale = new Todolists(todos);
  pagePrincipale.appendTo(document.querySelector('#todolist'));
} catch (error) {
  const divError = createElement('div', {
    class: 'alert alert-danger m-2',
    role: 'alert',
  });
  console.log(error);
  divError.innerHTML = 'impossible de charger les elements';
  document.body.prepend(divError);
}

function testButton(e) {
  console.log(e.currentTarget);
}
document
  .querySelector('.btn-close')
  .addEventListener('click', (e) => testButton);

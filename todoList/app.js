import { todoList } from './Components/TodoList.js';
import { fectchJson } from './api.js';
import { createElement } from './dom.js';
try {
  const todos = await fectchJson(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const list = new todoList(todos);
  list.appendTo(document.querySelector('#todolist'));
} catch (err) {
  const alertElement = createElement('div', {
    class: 'alert alert-danger m-2',
    role: 'alert',
  });
  alertElement.innerText = 'impossible de charger les elements';
  document.body.prepend(alertElement);
}

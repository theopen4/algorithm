/**
 * @typedef {object} Todo
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 */

import { TodoListItems } from './TodoListItems.js';

export class Todolists {
  #todos = [];
  #listElement;
  constructor(todos) {
    this.#todos = todos;
  }
  /**
   * @param {HTMLElement}
   */
  appendTo(element) {
    element.innerHTML = `
    <form class="input-group mb-3">
    <input 
      class="form-control"
      type="text"
      placeholder="Acheter des patates..."
      name = "title" />
    <button class="btn btn-outline-secondary" >
      Ajouter
    </button>
  </form>
  <main>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-primary">Left</button>
      <button type="button" class="btn btn-outline-primary">Middle</button>
      <button type="button" class="btn btn-outline-primary">Right</button>
    </div>
    <div>
    <ul class="list-groups">
     <li class="list-group-item">
     <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
     <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox <button type="button" class="btn-close" disabled aria-label="Close"></button></label>
     </li>
    </ul>
  <button class="btn-closee" >bonsoirr</button>
  </main> </div>`;
    this.#listElement = element.querySelector('.list-groups');
    for (const todo of this.#todos) {
      const item = new TodoListItems(todo);
      item.appendTOO(this.#listElement);
    }
    element
      .querySelector('.btn-closee')
      .addEventListener('click', (event) => this.testButton(event));
    element
      .querySelector('form')
      .addEventListener('submit', (e) => this.onSubmit(e));
  }
  onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const title = new FormData(event.currentTarget)
      .get('title')
      .toString()
      .trim();
    console.log(title);
    if (title === '') {
      return;
    }
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    const item = new TodoListItems(todo);
    item.appendTOO(this.#listElement);
    form.reset();
  }
  testButton(e) {
    console.log(e.currentTarget);
  }
}

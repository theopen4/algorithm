/**
 * @typedef {object} Todo
 * @param {number} id
 * @param {string} title
 * @param {boolean} completed
 */

import { createElement } from '../createElement.js';

export class TodoListItems {
  #element;
  constructor(items) {
    const li = createElement('li', { class: 'list-group-item' });
    const id = `id-${items.id}`;

    const input = createElement('input', {
      class: 'form-check-input me-1',
      type: 'checkbox',
      value: '',
      id,
      checked: items.completed ? '' : null,
    });
    const label = createElement('label', {
      class: 'form-check-label stretched-link',
      for: id,
    });
    label.innerHTML = items.title;
    const button = createElement('button', {
      class: 'btn-close',
    });

    label.addEventListener('mousedown', (event) => {
      this.removeList(event);
    });

    li.append(input);
    li.append(label);
    li.append(button);
    this.#element = li;
  }
  /**
   *
   * @param {HTMLElement} element
   */
  appendTOO(element) {
    element.append(this.#element);
  }
  removeList(event) {
    event.preventDefault();
    event.currentTarget;
    this.#element.remove();
    console.log(event.currentTarget);
  }
}

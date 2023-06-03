export class todoList {
  #todos = [];
  constructor(todos) {
    this.#todos = todos;
  }
  appendTo(element) {
    element.innerHTML = `<div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Acheter des patates..."
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      Ajouter
    </button>
  </div>
  <main>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-primary">Left</button>
      <button type="button" class="btn btn-outline-primary">Middle</button>
      <button type="button" class="btn btn-outline-primary">Right</button>
    </div>
  </main>`;
  }
}

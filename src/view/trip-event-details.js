import { createElement } from '../render.js';

export default class TripEventDetails {
  getTemplate() {
    return '<section class="event__details"></section';
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

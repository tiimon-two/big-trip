import BoardPresenter from './boardPresenter.js';
import { render } from './render.js';
import TripFiltersView from './view/trip-filters-view.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMainContainer = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter();

render(new TripFiltersView(), filtersContainer);

boardPresenter.init(tripMainContainer, tripEvents);


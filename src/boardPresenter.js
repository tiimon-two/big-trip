import { render } from './render.js';
import TripEventDestination from './view/trip-event-destination.js';
import TripEventDetails from './view/trip-event-details.js';
import TripEventOffers from './view/trip-event-offers.js';
import TripEventsEdit from './view/trip-events-edit.js';
import TripEventsItem from './view/trip-events-item.js';
import TripEventsList from './view/trip-events-list.js';
import TripEventsSortView from './view/trip-events-sort-view.js';
import TripInfoView from './view/trip-info-view.js';

export default class BoardPresenter {
  tripEventsList = new TripEventsList();
  tripEditItem = new TripEventsEdit();
  tripEventDetails = new TripEventDetails();

  init = (mainContainer, eventsContainer) => {
    this.mainContainer = mainContainer;
    this.eventsContainer = eventsContainer;

    render(new TripInfoView(), this.mainContainer, 'afterbegin');
    render(new TripEventsSortView(), this.eventsContainer);
    render(this.tripEventsList, this.eventsContainer);
    render(new TripEventOffers(), this.tripEventDetails.getElement());
    render(new TripEventDestination(), this.tripEventDetails.getElement());
    render(this.tripEventDetails, this.tripEditItem.getElement());
    render(this.tripEditItem, this.tripEventsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventsItem(), this.tripEventsList.getElement());
    }
  };
}

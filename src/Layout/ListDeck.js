import React from "react";
import { NavLink } from "react-router-dom";

export default function ListDeck({ deleteDeckButtonHandler, decks }) {
  //maps a card with buttons for each deck from the array passed in as a prop
  return decks.map((deck, i) => {
    return (
      <div key={`home-div-${[i]}`} className="card mt-3">
        <div key="home-sub" className="card-body">
          <h5 key="deck-title" className="card-title d-flex align-items-center">
            {deck.name}
            <small key="cards-length-text" className="text-muted ml-auto">
              {deck.cards.length} cards
            </small>
          </h5>
          <p key="deck-description-text" className="card-text">
            {deck.description}
          </p>
          <div key="deck-action-buttons" className="d-flex align-items-center">
            <NavLink
              to={`/decks/${deck.id}`}
              key="view-button"
              role="button"
              className="btn btn-secondary mr-2"
            >
              <span className="oi oi-eye mr-1"></span>
              View
            </NavLink>
            <NavLink
              to={`/decks/${deck.id}/study`}
              key="study-button"
              role="button"
              className="btn btn-primary mr-5"
            >
              <span className="oi oi-book mr-1"></span>
              Study
            </NavLink>
            <NavLink
              to={`/`}
              key="delete-button"
              onClick={() => deleteDeckButtonHandler(deck.id)}
              className="btn btn-danger ml-auto"
            >
              <span className="oi oi-trash"></span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  });
}
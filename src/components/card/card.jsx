import { React } from "react";
import Popup from "reactjs-popup";
import "./card.styles.css";

const tags = ["lemonade", "mint", "summer"];

const ingredients = [
  "3g mint leaves",
  "2 tablespoon of sugar",
  "ice",
  "half a lemon, squeezed",
  "150ml sparkling water",
  "50ml of butterflu pea tea",
  "splash of vodka (optional)",
];

const instructions = [
  "mash lemon quarters, mint leaves, and sugar together",
  "in a cup, add the lemon-mint-sugar mixture, lemon juice, and your desired amount of ice cubes",
  "pour in the sparkling water and butterfly pea tea",
];

export const Card = (props) => (
  <Popup
    trigger={
      <button className='button'>
        {" "}
        <div className='card-container'>
          <h2>{props.drink.name}</h2>{" "}
        </div>{" "}
      </button>
    }
    modal
    nested
  >
    {(close) => (
      <div className='modal'>
        <button className='close' onClick={close}>
          &times;
        </button>
        <div className='header'> Galaxy Lemon Mojito </div>
        <div className='flex-container'>
          <div className='flex-item'>
            <div className='description'>
              Aesthically pleasing. Tastes like a summer dream. This galaxy
              lemon mojito can be non-alcholic or add a splash of vodka.
            </div>
            <div className='wrapper-dt'>
              <div className='difficulty'>easy</div>
              <div className='tags'>
                {" "}
                <ul>
                  {tags.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='ingredients'>
              {" "}
              <ul>
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='instructions'>
              {instructions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </div>
          <div className='flex-item'>
            <div className='image'>image</div>
          </div>
        </div>
      </div>
    )}
  </Popup>
);

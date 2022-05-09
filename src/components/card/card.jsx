import { React } from "react";
import Popup from "reactjs-popup";
import "./card.styles.css";

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
        <div className='header'> {props.drink.name} </div>
        <div className='flex-container'>
          <div className='flex-item'>
            <div className='description'>{props.drink.description}</div>
            <div className='wrapper-dt'>
              <div className='difficulty'>{props.drink.difficulty}</div>
              <div className='tags'>
                {" "}
                <ul>
                  <li>{props.drink.tags}</li>
                </ul>
              </div>
            </div>
            <div className='ingredients'>
              {" "}
              <ul>
                <li>{props.drink.ingredients}</li>
              </ul>
            </div>
            <div className='instructions'>
              <li>{props.drink.instructions}</li>
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

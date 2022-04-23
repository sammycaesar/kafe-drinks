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
        <div className='header'> Modal Title </div>
        <div className='content'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
        </div>
      </div>
    )}
  </Popup>
);

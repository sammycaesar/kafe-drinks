import { React } from "react";
import Popup from "reactjs-popup";
import "./card.styles.css";

import TempImg from "../../images/00-popcorn-latte.jpeg";

export const Card = (props) => (
  <Popup
    trigger={
      <button className='button'>
        {" "}
        <div className='card-container'>
          <div className='card-image'>
            <img src={TempImg} alt='temp' />
          </div>
          <div className='card-drink'>
            <h2>{props.drink.name}</h2>{" "}
          </div>
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
        <div className='flex-container'>
          <div className='flex-item1'>
            <div className='header'> {props.drink.name} </div>
            <div className='description'>{props.drink.description}</div>
            <div className='wrapper-dt'>
              <div className='difficulty'>{props.drink.difficulty}</div>
              <div className='tags'>
                <ul>
                  {props.drink.tags.map((tags) => (
                    <li key={tags}>{tags}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='ingredients'>
              <div className='content-header'>ingredients</div>
              <ul>
                {props.drink.ingredients.map((ingredients) => (
                  <li key={ingredients}>{ingredients}</li>
                ))}
              </ul>
            </div>
            <div className='instructions'>
              <div className='content-header'>instructions</div>
              <ol>
                {props.drink.instructions.map((instructions) => (
                  <li key={instructions}>{instructions}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className='flex-item2'>
            <img src={TempImg} alt='temp' />
            <div className='image'></div>
          </div>
        </div>
      </div>
    )}
  </Popup>
);

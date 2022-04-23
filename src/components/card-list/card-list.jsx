import React from "react";
import { Card } from "../card/card";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className='card-list-container'>
      <div className='card-list-box'>
        <div className='card-list'>
          {props.drinks.map((drink) => (
            <Card key={drink.id} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
};

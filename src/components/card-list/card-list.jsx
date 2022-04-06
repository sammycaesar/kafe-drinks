import React from "react";
import { Card } from "../card/card";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.cocktails.map((cocktail) => (
        <Card key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
};

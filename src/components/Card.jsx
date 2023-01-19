import React from "react";
import './Card.css'

function Card({ data }) {
  const { location, current } = data;

  return (
    <div className="city">
      <div>
        <h2 className="city_name">{location.name}</h2>
        <h3 className="city_location">
          <span>{location.region}</span> - <span>{location.country}</span>
        </h3>
      </div>
      <div className="city_temp">
        <span>{current.temp_c}</span>
        <span>°C</span>
      </div>
      <div className="city_time">
        {location.localtime}
      </div>
      <div className="city_condition">
        <img src={current.condition.icon} alt={current.condition.text}/>
        <span>{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

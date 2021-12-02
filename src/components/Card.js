import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flags.svg} alt={country.name.common} />
      <div className="data-container">
        <ul>
          <li>{country.name.common}</li>
          <li>{country.capital}</li>
          <li>{country.region}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;

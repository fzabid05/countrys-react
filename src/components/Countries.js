import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [continentFilter, setContinentFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  const continents = data.reduce(
    (acc, continent) =>
      acc.includes(continent.region) ? acc : acc.concat(continent.region),
    []
  );

  return (
    <div className="countries">
      <div style={{ textAlign: "center" }}>
        <select
          value={continentFilter}
          onChange={(e) => setContinentFilter(e.target.value)}
        >
          <option onChange={() => setContinentFilter("")}>
            Tous les continents
          </option>
          {continents.map((reg) => (
            <option value={reg} key={reg}>
              {reg}
            </option>
          ))}
        </select>
      </div>
      <ul className="countries-list">
        {data.map((country) =>
          !continentFilter || continentFilter === country.region ? (
            <Card country={country} key={country.name.common} />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Countries;

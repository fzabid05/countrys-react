import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <Card country={country} key={country.name.common} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;

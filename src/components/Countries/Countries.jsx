import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ contriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    const totalVisited = [...visitedCountries, country];
    setVisitedCountries(totalVisited);
    console.log(country);
    console.log(visitedCountries);
  };
  const contriesData = use(contriesPromise);
  const contries = contriesData.countries;
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-black">In the Countries</h1>
      <h3 className="text-2xl font-semibold">
        Total Country Visited:{visitedCountries.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {contries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;

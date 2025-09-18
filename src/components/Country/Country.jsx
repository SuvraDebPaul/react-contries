import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    if (!visited) {
      setVisited(true);
    } else {
      setVisited(false);
    }
    handleVisitedCountry(country);
  };
  return (
    <div
      className={`card lg:card-side bg-base-100 shadow-sm ${
        visited ? "bg-green-300" : "bg-gray-100"
      }`}
    >
      <figure className="w-1/2">
        <img
          className="object-cover h-full w-full"
          src={country.flags.flags.png}
          alt={country.flags.flags.alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country.name.common}</h2>
        <p className="text-sm text-gray-600">
          Population: {country.population.population}
        </p>
        <p className="text-sm text-gray-600">
          Area: {country.area.area}
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 inset-ring inset-ring-purple-700/10">
            {country.area.area > 300000 ? "Big" : "Small"}
          </span>
        </p>
        <div className="card-actions justify-start">
          <button onClick={handelVisited} className="btn btn-primary">
            {visited ? "Visited" : "Not Visited"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;

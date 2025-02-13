import React, { useState } from "react";
import { Input } from "@/components/ui/input";

function CreateTrip() {
  const apiKey = import.meta.env.VITE_GOMAPS_API_KEY;
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchPlaces = async (input) => {
    if (!input.trim()) return setSuggestions([]);

    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`
      );
      const data = await response.json();
      setSuggestions(data.predictions || []);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 p-5 mt-10 ">
      <h2 className="font-bold text-3xl">
        Customize your travel plan by entering your preference
      </h2>
      <p className="mt-3">
        Provide some basic information, and our trip planner will generate a
        customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
      <div className="mt-20">
        <h2 className="text-xl my-3 font-medium">
          Enter your destination of choice
        </h2>
        <input
          type="text"
          placeholder="Search for a place..."
          className="border p-2 w-full bg-white text-black rounded-md"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            fetchPlaces(e.target.value);
          }}
        />

        {/* Show autocomplete suggestions */}
        {suggestions.length > 0 && (
          <ul className="border border-gray-300 mt-2 rounded-md bg-white shadow-md">
            {suggestions.map((place) => (
              <li
                key={place.place_id}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setQuery(place.description);
                  setSuggestions([]); // Hide suggestions after selection
                }}
              >
                {place.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
      <h2 className="text-xl my-3 font-medium">
          How many days are you staying for?
        </h2>
        <Input placeholder={'Ex.3'} type="number"/>
      </div>

      <div>
      <h2 className="text-xl my-3 font-medium">
          What is your budget?
          <div>
            
          </div>
        </h2>
      </div>
      </div>
    </div>
  );
}

export default CreateTrip;

import React, { useEffect } from 'react';

export default function Itinerary({ trip }) {
  useEffect(() => {
    console.log("Itinerary Data:", trip?.tripData?.itinerary);
    console.log("Entries:", Object.entries(trip?.tripData?.itinerary || {}));
  }, [trip]);

  return (
    <div>
      <h2 className="font-bold text-lg">Exploration Guide</h2>

      <div>
        {trip?.tripData?.itinerary
          ? Object.entries(trip.tripData.itinerary).map(([day, details]) => (
              <div key={day} className="border p-4 my-4 rounded shadow">
                <h3 className="text-lg font-semibold">{day}</h3>
                
                <p><strong>Theme:</strong> {details?.theme || 'N/A'}</p>
                <p>⏰ <strong>Best Time to Visit:</strong> {details?.best_time_to_visit || 'N/A'}</p>

                {/* Display only places related to this day if they exist */}
                {details?.places?.length > 0 ? (
                  details.places.map((place, index) => (
                    <div key={index} className="border p-2 my-2 rounded shadow">
                      <h3 className="font-semibold">{place.placeName}</h3>
                      <p>{place.placeDetails}</p>
                    </div>
                  ))
                ) : (
                  <p>No places listed for this day.</p>
                )}
              </div>
            ))
          : <p>No itinerary available</p>}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvilablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvilablePlaces] = useState([]);
  const [fetching, setFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setFetching(true);

      try {
        const places = await fetchAvilablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
          setAvilablePlaces(sortedPlaces);
          setFetching(false)
        })

      } catch (error) {
        setError({ message: error.message || 'not found, try again later!' });
        setFetching(false);
      }

    }

    fetchPlaces();

  }, []);

  function HandleConfirm() {
    console.log(error, error)

  }

  console.log('error', error)

  if (error) {
    return <Error
      title='error has occured!!'
      message={error.message}
      onConfirm={HandleConfirm}
    />


  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetching}
      loadingText=" Places is being fetched..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

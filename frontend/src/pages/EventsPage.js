import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>{(event) => <EventsList events={event} />}</Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "error occured bro" },
      {
        status: 500,
      }
    );
  } else {
    // console.log("response", response);
    const resData = await response.json();
    // return resData.events; //react will automtically make the return value available for the element
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

export default EventsPage;

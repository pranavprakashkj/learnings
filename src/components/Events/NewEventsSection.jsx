import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["events", { max: 3 }], //key will be used by the tanstack to cache the data
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), //queryFn is the function that will be executed to send the req
    // staleTime: 0, //frequency in which it will check, 0 is default
    // gcTime: 1000, //how long it is kept in the cache, 5000 is default, 5 secs
  });
  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "failed to fetch"}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}

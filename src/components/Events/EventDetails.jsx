import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isdeleting, setIsdeleting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["event", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });
  console.log(data);
  let content;

  const {
    mutate,
    isPending: isPendingDeleting,
    isError: isDeletingError,
    error: deletingError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none", // avoids re-rendering the current event
      });
      navigate("/events");
    },
  });

  const handleStartDelete = () => {
    setIsdeleting(true);
  };
  const handleStopDelete = () => {
    setIsdeleting(false);
  };

  const handleDelete = () => {
    mutate({ id: id });
  };

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={"Error loading event"}
        message={error.info?.message || "try again later"}
      />
    );
  }

  if (data) {
    const date = new Date(data.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {date} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {isdeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure you want to delete</h2>
          {isPendingDeleting ? (
            <p>Deleting, please wait</p>
          ) : (
            <div className="form-actions">
              <button onClick={handleStopDelete} className="button-text">
                Cancel
              </button>
              <button onClick={handleDelete} className="button">
                Delete
              </button>
            </div>
          )}
          {isDeletingError && (
            <ErrorBlock
              title={"Error deleting event"}
              message={deletingError.info?.message || "failed to delete"}
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>

      <article id="event-details">{content}</article>
    </>
  );
}

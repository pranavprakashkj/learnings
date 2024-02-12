import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      // data is the value that is passed to mutate
      const newEvent = data.event; //passed value had id and event
      await queryClient.cancelQueries({ queryKey: ["event", params.id] }); // cancel all the outgoing queries before updating req
      const prevEvent = queryClient.getQueryData(["event", params.id]); // get the prev stored value
      queryClient.setQueryData(["event", params.id], newEvent); //pass the querykey and event

      return { prevEvent };
    },
    onError: (error, data, context) => {
      // context is the value returned above, prevEvent
      queryClient.setQueryData(["event", params.id], context.prevEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["event", params.id]); //even if there is mismatch in backend and frontend ,this will fix it
    },
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title={"Error loading"}
          message={error.info?.message || "Try again later"}
        />
        <div className="center">
          <Link to="../" className="button-text">
            Close
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <>
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      </>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

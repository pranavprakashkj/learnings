import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      //on successfully executing the fnc
      queryClient.invalidateQueries({ queryKey: ["events"], exact: true }); // invlidates all queries with queryKey:["events"]
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending ? (
          "submitting..."
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title={"failed to create event"}
          message={
            error.info?.message || "failed to create event, please try later"
          }
        />
      )}
    </Modal>
  );
}

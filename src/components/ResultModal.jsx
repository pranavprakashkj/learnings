import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal({ result, targetTime, reset }, ref) {

    const dialog = useRef();
    const formattedTime = (result / 1000).toFixed(2)
    const score = Math.round((1 - result / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();

            }
        }
    }) //in the component file
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={reset}>
            <h2> you {result <= 0 ? 'lost' : 'won'}</h2>
            {result > 0 && <h2>Your score: {score}</h2>}
            <p> The target time was <strong>{targetTime} second{targetTime > 1 && 's'}</strong>
            </p>
            <p>You stopped the timer with <strong>{formattedTime} secs left</strong>
            </p>
            <form>
                <button method='dialog' onSubmit={reset}>
                    Close
                </button>
            </form>
        </dialog>, document.getElementById('modal')
    );
})

export default ResultModal;
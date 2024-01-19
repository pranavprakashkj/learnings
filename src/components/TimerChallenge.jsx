import { useRef, useState } from "react";
import ResultModal from "./ResultModal";



export default function TimerChallenge({ title, targetTime }) {
    console.log(targetTime)
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timer = useRef();
    const dialog = useRef();
    const timerStarted = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000) //be careful while setting this outside the condition, it will cause infinite loop
    }

    function handleStart() {
        console.log('timer.current', timer.current)
        timer.current = setInterval(() => {
            setTimeRemaining(prevtime => prevtime - 10)

        }, 10)
    }

    function handleStop() {
        console.log('timer', timer)
        clearInterval(timer.current);
        dialog.current.open();

    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={timeRemaining} reset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 && 's'}
                </p>
                <p>
                    <button ref={timer} onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} challenge</button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'time running' : 'timer inactive'}
                </p>

            </section>
        </>
    )
}
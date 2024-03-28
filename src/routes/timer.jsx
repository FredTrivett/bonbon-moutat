import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const circleRef = useRef(null);
    const audioRef = useRef(new Audio('/chanson.mp3')); // Replace with the correct path

    // The radius for the inner content of the circle and its circumference
    const innerRadius = 110;
    const strokeWidth = 5;
    // The outer radius is slightly larger to accommodate the stroke width
    const outerRadius = innerRadius + strokeWidth / 2;
    const svgSize = outerRadius * 2;
    const circumference = 2 * Math.PI * innerRadius;

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((timeLeft) => {
                    const newTimeLeft = timeLeft - 1;
                    // Update the strokeDashoffset as time decreases
                    if (circleRef.current) {
                        const progress = ((120 - newTimeLeft) / 120) * circumference;
                        circleRef.current.style.strokeDashoffset = circumference - progress;
                    }
                    return newTimeLeft;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
            if (timeLeft === 0) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive, timeLeft, circumference]);

    const handlePlay = () => {
        setIsActive(true);
        setIsPaused(false);
        audioRef.current.play();
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(true);
        audioRef.current.pause();
    };

    const handleRestart = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeLeft(120);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        if (circleRef.current) {
            circleRef.current.style.strokeDashoffset = circumference;
        }
    };

    return (
        <div className="flex flex-col items-center justify-start pt-12 h-full space-y-4 overflow-hidden relative ">
            <Link to="/home" className='absolute top-4 left-3' onClick={handleStop} > <img src="/back_arrow.svg" alt="back" /> </Link>
            <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} className="rotate-[-90deg] z-20 relative">
                {/* Inner static circle */}
                <circle
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={innerRadius}
                    fill="#6079DD"
                />
                {/* Outer dynamic progress circle */}
                <circle
                    ref={circleRef}
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={innerRadius}
                    stroke="#2D3052"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round" // if you want a rounded stroke line
                />
                {/* Text */}
                <text
                    transform={`rotate(90 ${svgSize / 2} ${svgSize / 2})`}
                    x={svgSize / 2}
                    y={svgSize / 2} // Center of the SVG size
                    textAnchor="middle"
                    fontSize="40"
                    fill="white"
                    dominantBaseline="middle"
                >
                    {`${Math.floor(timeLeft / 60)}:${`0${timeLeft % 60}`.slice(-2)}`}
                </text>
            </svg>
            <div className="z-30">
                {/* Buttons */}
                {!isActive && !isPaused && (
                    <button onClick={handlePlay} className="px-4 py-2 rounded">
                        <img src="/play_timer.png" alt="play" />
                    </button>
                )}
                {isActive && (
                    <>
                        <button onClick={handleStop} className="px-4 py-2 rounded mr-2">
                            <img src="/pause_timer.png" alt="play" />
                        </button>
                        <button onClick={handleRestart} className="px-4 py-2 rounded">
                            <img src="/stop_timer.png" alt="play" />
                        </button>
                    </>
                )}
                {!isActive && isPaused && (
                    <>
                        <button onClick={handlePlay} className="px-4 py-2 rounded mr-2">
                            <img src="/play_timer.png" alt="play" />
                        </button>
                        <button onClick={handleRestart} className="px-4 py-2 rounded">
                            <img src="/stop_timer.png" alt="play" />
                        </button>
                    </>
                )}
            </div>
            <img src="/brosse_fort.png" alt="timer" className="absolute -bottom-14 w-64 " />
        </div>
    );
};

export default Timer;

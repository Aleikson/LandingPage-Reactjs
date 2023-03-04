import React, { useRef, useEffect } from "react";
import Video from "../Assets/video-about.mp4"

const VideoModal = ({ onClose, onEnded }) => {
    const modalRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    useEffect(() => {
        const handleVideoEnded = () => {
            onClose();
            onEnded();
        };
        if (videoRef.current) {
            videoRef.current.addEventListener("ended", handleVideoEnded);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("ended", handleVideoEnded);
            }
        };
    }, [onClose, onEnded]);

    return (
        <div className="video-modal-overlay">
            <div ref={modalRef} className="video-modal">
                <video controls autoPlay ref={videoRef}>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
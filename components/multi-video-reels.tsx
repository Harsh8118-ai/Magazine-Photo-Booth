"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

interface VideoCardProps {
  url: string;
  showControls?: boolean;
  isActive?: boolean; // For mobile single video
}

const VideoCard = ({ url, showControls = false, isActive = true }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true));
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative rounded-[40px] overflow-hidden border border-gold/40 shadow-lg bg-black flex-shrink-0"
      style={{ width: "260px", height: "460px" }}
    >
      <video
        ref={videoRef}
        src={url}
        autoPlay
        muted={true}
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {showControls && (
        <>
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="absolute top-3 left-3 bg-black/60 p-2 rounded-full backdrop-blur-sm hover:bg-black/75 transition"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-gold" /> : <Play className="w-5 h-5 text-gold" />}
          </button>

          {/* Mute / Unmute */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 bg-black/60 p-2 rounded-full backdrop-blur-sm hover:bg-black/75 transition"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-gold" /> : <Volume2 className="w-5 h-5 text-gold" />}
          </button>
        </>
      )}
    </motion.div>
  );
};

interface MultiVideoReelsProps {
  videoUrls: string[];
  title?: string;
  className?: string;
}

export const MultiVideoReels = ({ videoUrls, title, className = "" }: MultiVideoReelsProps) => {
  const validUrls = videoUrls.filter((url) => url && url.startsWith("http"));

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % validUrls.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + validUrls.length) % validUrls.length);

  if (!validUrls.length) {
    return (
      <div className="w-full bg-gray-900/50 rounded-lg border border-gray-700 p-8 text-center text-gray-400">
        No valid video URLs provided
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {title && <h3 className="text-2xl text-center font-bold mb-6 text-gold/30">{title}</h3>}

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex items-center justify-center gap-6 overflow-x-auto pb-6">
        {validUrls.map((url, index) => (
          <VideoCard key={index} url={url} showControls={false} isActive={true} />
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div className="relative md:hidden flex items-center justify-center">
        {/* LEFT BUTTON */}
        <button
          onClick={goPrev}
          className="absolute left-2 z-20 bg-black/50 p-2 rounded-full"
        >
          <ChevronLeft className="text-gold" size={24} />
        </button>

        {/* VIDEO WITH SMOOTH TRANSITION */}
        <motion.div
          key={activeIndex} // remounts on index change
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <VideoCard url={validUrls[activeIndex]} showControls={true} isActive={true} />
        </motion.div>

        {/* RIGHT BUTTON */}
        <button
          onClick={goNext}
          className="absolute right-2 z-20 bg-black/50 p-2 rounded-full"
        >
          <ChevronRight className="text-gold" size={24} />
        </button>
      </div>
    </div>
  );
};

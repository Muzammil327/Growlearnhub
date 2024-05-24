"use client";
import React, { useEffect, useRef } from "react";
import YouTubePlayer from "youtube-player";

interface VideoPlayerProps {
  videoId: string;
}

function VideoPlayer({ videoId }: VideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return; // Exit early if playerRef is null

    const { offsetWidth } = playerRef.current;
    const aspectRatio = 16 / 9; // YouTube video aspect ratio (width/height)

    // Calculate height based on the aspect ratio
    const height = Math.round(offsetWidth / aspectRatio);

    // Create a new instance of YouTubePlayer with the provided options
    const player = YouTubePlayer(playerRef.current, {
      videoId: videoId,
      width: "100%", // Set width to 100% to fit container
      height: height.toString(), // Set height based on aspect ratio
    });

    // You can now use the player instance for various actions
    player.playVideo(); // For example, play the video
  }, [videoId]);

  return (
    <div ref={playerRef} style={{ width: "100%", height: "100%" }}>
      {/* This div will be replaced by the YouTube player */}
    </div>
  );
}

export default VideoPlayer;

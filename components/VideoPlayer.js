import { useEffect, useRef } from "react";

function VideoPlayer() {
  const cloudRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (!cloudRef.current) {
      cloudRef.current = window.cloudinary;
      if (cloudRef.current) {
        cloudRef.current.videoPlayer(videoRef.current, {
          cloud_name: 'piyush_exaples',
        });
      }
    }
  }, []);

  return (
    <video
    className="h-80  w-80"
      ref={videoRef}
     
      data-cld-public-id="/logo2"
      width={380}
      height={380}
    loop
    />
  );
}

export default VideoPlayer;

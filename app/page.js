"use client";

import styles from "../styles/Home.module.css"; // Import the CSS module
import YouTube from "react-youtube"; // Import the YouTube component

export default function HomePage() {
  const videos = [
    { id: "sRxrwjOtIag", title: "Sample Video 1" },
    { id: "eUDVUZZyA0M", title: "Sample Video 2" },
  ];

  return (
    <div className="background-container">
      {/* Video Background */}
      {/* Uncomment if needed
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/passingclouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}

      <div className="flex flex-col items-center">
        <div className={styles.homeContainer}>
          <h1 className={styles.gradientText}>Welcome To Your Media Library</h1>
          <p className={styles.description}>
            Keeping your most important media in a personal repository for easy
            reference.
          </p>

          <div className="flex justify-center items-center">
            <ul className="text-center mt-6 text-slate-800">
              <li>
                ❤️ Add your favourite YouTube videos.
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    marginTop: "10px",
                  }}
                >
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      style={{
                        margin: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <YouTube
                        videoId={video.id}
                        opts={{
                          width: "200", // Adjust for responsiveness
                          height: "120",
                          playerVars: {
                            autoplay: 0,
                            modestbranding: 1,
                            rel: 0,
                          },
                        }}
                      />
                      <p
                        style={{
                          marginTop: "5px",
                          fontSize: "12px",
                          color: "gray",
                        }}
                      >
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              </li>
              <li className="mt-6">🏦 Add URLs for quick reference.</li>
              <li className="mt-6">🔍 Easily search your library.</li>
              <li className="mt-6">🛒 Centralise your media links.</li>
              {/*<li className="mt-6">🏆 Bonus applications included.</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
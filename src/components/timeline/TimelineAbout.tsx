import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { TimelineSection } from "./TimelineSection";

interface Props {
  // Define your props here if needed
}

const TimelineAbout: React.FC<Props> = () => {
  return (
    <ParallaxProvider>
      <TimelineSection
        year="2009"
        title="Music Production Program"
        company="Glokala Folkshögskola"
        description="Seeking to blend creativity with technical precision, I dove into the world of music production. This journey taught me that great products, like great music, require both technical excellence and creative vision."
        image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
        technologies={["Audio Production", "Recording", "Mixing", "Mastering"]}
        project={{
          title: "Electronic Music Album",
          description:
            "Produced and released a full-length electronic music album, handling everything from composition to final mastering. The project involved complex audio processing and innovative sound design techniques.",
          technologies: [
            "Ableton Live",
            "Pro Tools",
            "Sound Design",
            "Digital Audio Processing",
          ],
          link: {
            href: "https://soundcloud.com/your-music",
            title: "Listen on SoundCloud",
          },
        }}
        reverse={true}
      />
    </ParallaxProvider>
  );
};

export default TimelineAbout;

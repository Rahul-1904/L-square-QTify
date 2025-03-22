// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SongCard from "../SongCard/SongCard"; // Import the reusable Card component
// import styles from "./Section.module.css"; // Import CSS module

// const Section = ({ title, apiEndpoint }) => {
//   const [albums, setAlbums] = useState([]);
//   const [isExpanded, setIsExpanded] = useState(true);

//   useEffect(() => {
//     axios
//       .get(apiEndpoint)
//       .then((response) => setAlbums(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [apiEndpoint]);

//   return (
//     <div className={styles.section}>
//       {/* Section Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>{title}</h2>
//         <button className={styles.collapseButton} onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? "Collapse" : "Show All"}
//         </button>
//       </div>

//       {/* Albums Grid */}
//       {console.log(albums)}
//       {isExpanded && (
//         <div className={styles.grid}>
//           {albums.map((album) => (
//             <SongCard key={album.id} albumName={album.title} follows={album.follows} cardImage={album.image} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Section;


import React, { useState, useRef, useEffect } from "react";
import styles from "./Section.module.css"; // Ensure you have module CSS
import SongCard from "../SongCard/SongCard";
import axios from "axios";
// import { useEffect, useState } from "react";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null); // Ref for scrolling container

  useEffect(() => {
    axios.get(apiEndpoint).then((response) => {
        console.log(response.data);
      setAlbums(response.data);
    });
  }, [apiEndpoint]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust scroll distance
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className={styles.sectionContainer}>
      {/* Header with Expand/Collapse Button */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.collapseButton} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse" : "Show all"}
        </button>
      </div>

      {/* Arrow buttons for scrolling */}
      {!isExpanded && (
        <button className={styles.leftArrow} onClick={scrollLeft}>
          {"<"}
        </button>
      )}

      {/* Album Container (Scrollable when collapsed) */}
      <div className={`${styles.albumContainer} ${isExpanded ? styles.expanded : styles.notExpanded}`} ref={scrollRef}>
        {albums.map((album) => (
          <SongCard key={album.id} albumName={album.title} follows={album.follows} cardImage={album.image} />
        ))}
      </div>

      {!isExpanded && (
        <button className={styles.rightArrow} onClick={scrollRight}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Section;


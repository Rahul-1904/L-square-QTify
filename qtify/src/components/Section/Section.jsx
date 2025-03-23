// import React, { useState, useRef, useEffect } from "react";
// import styles from "./Section.module.css"; // Ensure you have module CSS
// import SongCard from "../SongCard/SongCard";
// import axios from "axios";
// // import { useEffect, useState } from "react";

// const Section = ({ title, apiEndpoint }) => {
//   const [albums, setAlbums] = useState([]);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const scrollRef = useRef(null); // Ref for scrolling container

//   useEffect(() => {
//     axios.get(apiEndpoint).then((response) => {
//         console.log(response.data);
//       setAlbums(response.data);
//     });
//   }, [apiEndpoint]);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft -= 300; // Adjust scroll distance
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className={styles.sectionContainer}>
//       {/* Header with Expand/Collapse Button */}
//       <div className={styles.sectionHeader}>
//         <h2 className={styles.title}>{title}</h2>
//         <button className={styles.collapseButton} onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? "Collapse" : "Show all"}
//         </button>
//       </div>

//       {/* Arrow buttons for scrolling */}
//       {!isExpanded && (
//         <button className={styles.leftArrow} onClick={scrollLeft}>
//           {"<"}
//         </button>
//       )}

//       {/* Album Container (Scrollable when collapsed) */}
//       <div className={`${styles.albumContainer} ${isExpanded ? styles.expanded : styles.notExpanded}`} ref={scrollRef}>
//         {albums.map((album) => (
//           <SongCard key={album.id} albumName={album.title} follows={album.follows} cardImage={album.image} isExpanded={isExpanded}/>
//         ))}
//       </div>

//       {!isExpanded && (
//         <button className={styles.rightArrow} onClick={scrollRight}>
//           {">"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default Section;

import React, { useState, useRef, useEffect } from "react";
import styles from "./Section.module.css"; // Ensure you have module CSS
import SongCard from "../SongCard/SongCard";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={7}
            navigation={true}
            loop={false}
        >
            {albums.map((album) => (
              <SwiperSlide key={album.id}>
                <SongCard albumName={album.title} follows={album.follows} cardImage={album.image} isExpanded={isExpanded}/>
              </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default Section;

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Box, Button, Typography } from "@mui/material";
// import SongCard from "../SongCard/SongCard";
// import axios from "axios";

// const Section = ({ title, apiEndpoint }) => {
//   const [albums, setAlbums] = useState([]);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     axios.get(apiEndpoint).then((response) => {
//       console.log(response.data);
//       setAlbums(response.data);
//     });
//   }, [apiEndpoint]);

//   return (
//     <Box sx={{ width: "100%", padding: "20px" }}>
//       {/* Header with Expand/Collapse Button */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           {title}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? "Collapse" : "Show all"}
//         </Button>
//       </Box>

//       {/* Swiper Implementation */}
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={10}
//         slidesPerView={isExpanded ? 5 : 3} // Show more when expanded
//         navigation={true} // Enables next/prev arrows
//         loop={false}
//         breakpoints={{
//           320: { slidesPerView: 1 }, // Mobile
//           480: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: isExpanded ? 5 : 4 }, // Desktop
//         }}
//         style={{ padding: "10px 0" }}

//       >
//         {albums.map((album) => (
//           <SwiperSlide key={album.id}>
//             <SongCard albumName={album.title} follows={album.follows} cardImage={album.image} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default Section;

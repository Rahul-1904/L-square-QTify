import React from "react";
import styles from "./SongCard.module.css";
import { Chip } from "@mui/material";
import cardImage from "../../assets/cartImage.png"
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography,
  } from "@mui/material";

// const SongCard = ({ albumName, follows }) => {
//   return (
//     <div className={styles.card}>
//       {/* Album Image */}
//       <div className={styles.imageContainer}>
//         <img src={cardImage} alt={albumName} className={styles.albumImage} />
//         {/* <div>
//             <img src={cardImage} alt={albumName} className={styles.albumImage} />
//         </div> */}
//       </div>
//       <div>
//             <Chip label={`${follows} Follows`} className={styles.chip} />
//       </div>

//       {/* Bottom Section */}
//       <div className={styles.cardContent}>
//         <p className={styles.albumName}>{albumName}</p>
//       </div>
//     </div>
//   );
// };

// export default SongCard;

const SongCard = ({ albumName, follows, cardImage, isExpanded , isAlbumCard=true}) => {
    return (
        <Card className={isExpanded?styles.cardExpanded : styles.card} sx={{"borderRadius": "12px", "backgroundColor": "unset"}}>
            <CardMedia
                component="img"
                height="100%"
                image={cardImage}
                alt={albumName}
                className={styles.albumImage}
            />
            <CardContent className={styles.cardContent} sx={{"padding": "5px !important", "backgroundColor": "#fff", "width": "100%"}}>
                <Chip label={isAlbumCard ? `${follows} Follows` : `${follows} Likes`} className={styles.chip} />
            </CardContent>
            <Typography sx={{"color": "#fff"}}>
                {albumName}
            </Typography>
        </Card> 
    );
  };
  
  export default SongCard;
  
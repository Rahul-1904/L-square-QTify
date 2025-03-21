// import React from "react";
// import {
//   Button
// } from "@mui/material";

// function Button({buttonText}) {
//     return (
//         <Button 
//         variant="contained"
//         sx={{
//           backgroundColor: "#121212",
//           color: "green",
//           "&:hover": { backgroundColor: "#333" },
//         }}
//         >
//             {buttonText}
//         </Button>
//     )
// }
// export default Button


import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
// import {
//   Button
// } from "@mui/material";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      {/* <Button
        variant="contained"
        sx={{
          backgroundColor: "#121212",
          color: "green",
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        Give Feedback
      </Button> */}
      <Button text="Give Feedback" onClick={() => alert("Feedback clicked!")} />
    </nav>
  );
}

export default Navbar;

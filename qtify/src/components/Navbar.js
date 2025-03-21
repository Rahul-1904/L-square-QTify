import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import LogoImage from "../assets/logo.png"
import SearchIcon from "@mui/icons-material/Search";
import {
  InputAdornment,
  TextField,
  Button
} from "@mui/material";

const Navbar = () => {
    return (
        <Box className={styles.navbar}>
            <Link to="/">
                <img src={LogoImage} alt="logo" width={67} />
            </Link>
            <TextField
                placeholder="Search a album of your choice"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  width: "300px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#121212",
                color: "green",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Give Feedback
            </Button>
        </Box>
    )
}

export default Navbar
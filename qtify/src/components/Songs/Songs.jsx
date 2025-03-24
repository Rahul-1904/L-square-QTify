import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from "./Songs.module.css"
import Carousel from '../Carousel/Carousel';

export default function Songs() {
  const [value, setValue] = React.useState('ALL');
  const [genres, setGenres] = React.useState([]);
  const [songs, setSongs] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/genres").then((response) => {
        console.log(response.data.data[0]);
      setGenres(response.data.data);
    });
    axios.get("https://qtify-backend-labs.crio.do/songs").then((response) => {
        console.log("songs data")
        console.log(response.data[0]);
      setSongs(response.data);
    });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(`Inside handleChange : new value : ${newValue}`)
    setValue(newValue);
  };
  const filteredSongs = value === "ALL" ? songs : songs.filter((song) => song.genre.label === value);
  return (
    <Box sx={{ width: '100%', typography: 'body1', margin:"20px", color:"#ffffff" }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{"Songs"}</h2>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: {backgroundColor: '#34c94b' } }} >

            <Tab label="ALL" value="ALL" className={styles.tab}/>
            {genres.map((genre) => <Tab key={`${genre['key']}`} label={`${genre['label']}`} value={`${genre['label']}`} className={styles.tab}/>)}
          </TabList>
        </Box>
        <TabPanel value="ALL">
            <Carousel songs={songs} />
        </TabPanel>
        {genres.map((genre) => (
          <TabPanel key={genre.key} value={genre.label}>
            <Carousel songs={filteredSongs} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

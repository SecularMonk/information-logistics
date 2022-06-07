import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import styles from "../styles/Footer.module.css";
import { Info } from "@mui/icons-material";

const pages = [
   { label: "Home", icon: <HomeIcon /> },
   { label: "About", icon: <InfoIcon /> },
   { label: "Blog", icon: <ChromeReaderModeIcon /> },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function BottomNav() {
   const [value, setValue] = React.useState(0);

   return (
      <Box className={styles.container}>
         <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
         >
            {pages.map((element) => {
               return <BottomNavigationAction label={element.label} icon={element.icon} />;
            })}
         </BottomNavigation>
      </Box>
   );
}

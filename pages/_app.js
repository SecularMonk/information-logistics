import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import "../styles/globals.css";

const lightTheme = createTheme({
   palette: {
      mode: "light",
   },
});

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function getActiveTheme(themeMode) {
   return themeMode === "light" ? lightTheme : darkTheme;
}

function MyApp({ Component, pageProps }) {
   const [activeTheme, setActiveTheme] = useState(lightTheme);
   const [selectedTheme, setSelectedTheme] = useState("light");

   function toggleTheme() {
      const desiredTheme = selectedTheme === "light" ? "dark" : "light";
      setSelectedTheme(desiredTheme);
   }

   useEffect(() => {
      setActiveTheme(getActiveTheme(selectedTheme));
   }, [selectedTheme]);

   return (
      <ThemeProvider theme={activeTheme}>
         <meta name="viewport" content="initial-scale=1, width=device-width" />
         <Layout>
            <Component {...pageProps} toggleTheme={toggleTheme} />
         </Layout>
      </ThemeProvider>
   );
}

export default MyApp;

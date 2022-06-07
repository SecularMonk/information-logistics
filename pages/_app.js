import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   <meta name="viewport" content="initial-scale=1, width=device-width" />;
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;

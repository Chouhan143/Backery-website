import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


function MyApp(
 
  { Component, pageProps }) {
   
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
  <>
  <Header/>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp

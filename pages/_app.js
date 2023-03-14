
import { Provider } from '../components/context/context';
import '../styles/globals.css';


        
       


function MyApp({ Component, pageProps }) {

  return (
    <Provider>
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

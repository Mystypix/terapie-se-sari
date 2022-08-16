import TinaProvider from "../.tina/components/TinaDynamicProvider";
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;

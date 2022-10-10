import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChooseMoviePage from './pages/ChooseMoviePage'
import { MovieProvider } from "./store/MoviesStore";
import { Helmet } from "react-helmet";


function App() {
  return (
    <MovieProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopify Challenge</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Shopify Challenge" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-movie" element={<ChooseMoviePage />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;

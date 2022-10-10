import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChooseMoviePage from './pages/ChooseMoviePage'
import { MovieProvider } from "./store/MoviesStore";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/choose-movie" element={<ChooseMoviePage/>}/>
      </Routes>
    </MovieProvider>
  );
}

export default App;

import MovieList from "./components/MovieList";
import MovieSearchBar from "./components/MovieSearchBar";
import { MovieProvider } from "./store/MoviesStore";

function App() {
  return (
    <MovieProvider>
      <div>
        <MovieSearchBar />
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;

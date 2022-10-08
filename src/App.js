import MovieList from "./components/MovieList";
import MovieSearchBar from "./components/MovieSearchBar";
import NominatedList from "./components/NominatedList";
import { MovieProvider } from "./store/MoviesStore";

function App() {
  return (
    <MovieProvider>
      <div>
        <MovieSearchBar />
        <div className="flex">
          <MovieList />
          <NominatedList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>{movie.map(item => (
        <div key={item.id}>
          <img src={item.medium_cover_image} />
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <ul>
            {item.genres.map(g => <li key={g}>{g}</li>)}
          </ul>
        </div>
      ))}</div>}
    </div>
  );
}

export default App;

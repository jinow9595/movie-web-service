import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movie.map(item => (
                        <Movie
                            id={item.id}
                            key={item.id}
                            coverImg={item.medium_cover_image}
                            title={item.title}
                            ummary={item.summary}
                            genres={item.genres} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;

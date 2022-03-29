import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=download_count")).json();

        setMovie(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
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
                            rating={item.rating}
                            summary={item.summary}
                            genres={item.genres} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Home;

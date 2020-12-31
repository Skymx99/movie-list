import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import Grid from "@material-ui/core/Grid";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3}>
            <Movie
              name={movie.name}
              price={movie.price}
              img={movie.img}
              description={movie.description}
              review={movie.review}
              key={movie.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;

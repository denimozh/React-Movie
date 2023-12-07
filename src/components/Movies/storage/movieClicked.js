let movieClicked = 0;

export const getMovieClicked = () => {
    return movieClicked;
  };
  
  export const setMovieClicked = (id) => {
    movieClicked = id;
  };

export default movieClicked;
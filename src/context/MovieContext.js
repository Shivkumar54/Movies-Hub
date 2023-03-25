import { createContext, useState } from "react";

const MovieContext = createContext();

function Provider({ childern }) {
  const [count, setCount] = useState(2);
  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <MovieContext.Provider value={valueToShare}>
      {childern}
    </MovieContext.Provider>
  );
}

// export default Provider;

export { Provider };
export default MovieContext;

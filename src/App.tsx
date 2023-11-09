import React, { Suspense, lazy, useEffect } from "react";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading/Loading";
import { useAppDispatch } from "./hook";
import { fetchPokemonsData } from "./store/pokemonSlice";
const PokemonCard = lazy(() => import("./components/PokemonCard/PokemonCard"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsData());
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokemon" element={<PokemonCard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

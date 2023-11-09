import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonsData = createAsyncThunk(
  "pokemons/fetchPokemonsData",
  async function () {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1300"
    );
    let data = await response.json();
    return { data };
  }
);
interface Pokemon {
  name: string;
  url: string;
}
interface initialState {
  pokemonsList: Pokemon[];
  status: null | "loading" | "resolved" | "rejected";
  error: null | true;
}
const PokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemonsList: [],
    status: null,
    error: null,
  } as initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonsData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchPokemonsData.fulfilled, (state, action) => {
      state.status = "resolved";
      state.pokemonsList = action.payload.data.results;
    });
    builder.addCase(fetchPokemonsData.rejected, (state) => {
      state.status = "rejected";
      state.error = true;
      alert("Error connecting to server, try again later");
    });
  },
});

export default PokemonSlice.reducer;

// extraReducers: {
//     [fetchPokemonsData.pending]: (state) => {
//       state.status = "loading";
//       state.error = null;
//     },
//     [fetchPokemonsData.fulfilled]: (state, action) => {
//       state.staus = "resolved";
//       state.pokemonsInfo = action.payload.data.results;
//     },
//     [fetchPokemonsData.rejected]: (state, action) => {
//       state.status = "rejected";
//       state.error = true;
//       alert("Error connecting to server, try again later");
//     },
//   },

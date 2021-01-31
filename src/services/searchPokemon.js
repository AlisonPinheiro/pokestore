import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";

export default function SearchPokemon() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchApi = async () => {
      try {
        const result = await api.get("/type/" + theme.pokemonTypeID);
        dispatch({
          type: "SET_POKEMON_DATA_BY_TYPE",
          payload: result.data.pokemon,
        });
      } catch (error) {
        dispatch({
          type: "SET_ERROR_APP_MESSAGE",
          payload:
            "Tente novamente",
        });
      }
    };

    searchApi();
  }, [dispatch, theme.pokemonTypeID]);
}

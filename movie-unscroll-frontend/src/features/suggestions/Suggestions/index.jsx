import { useDispatch, useSelector } from "react-redux";
import {
  clearSuggestions,
  getSuggestions,
  selectAllSuggestions,
} from "../suggestionsSlice";
import { useEffect } from "react";
import { selectLoggedUser } from "../../login/loginSlice";
import Suggestion from "./Suggestion";

function Suggestions() {
  const loggedUser = useSelector(selectLoggedUser);
  const suggestions = useSelector(selectAllSuggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    let index;
    if (loggedUser) {
      index = setTimeout(() => dispatch(getSuggestions(loggedUser.token)), 100);
    }

    return () => {
      clearTimeout(index);
      dispatch(clearSuggestions());
    };
  }, [dispatch, loggedUser]);

  return (
    <div>
      <Suggestion movie={suggestions[1]} />
      {/* {suggestions.map((s) => (
        <p key={s.id}>{s.vote_average}</p>
      ))} */}
    </div>
  );
}

export default Suggestions;

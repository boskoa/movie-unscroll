import { useEffect, useRef, useState } from "react";
import {
  AvailableOptions,
  Input,
  Option,
  SelectContainer,
  Title,
} from "./filterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../login/loginSlice";

function InputFilter({
  selectedOptions,
  setSelectedOptions,
  searched,
  setSearched,
  fetch,
  role,
  title,
}) {
  const [search, setSearch] = useState("");
  const loggedUser = useSelector(selectLoggedUser);
  const inputRef = useRef();

  useEffect(() => {
    function get(e) {
      if (
        search &&
        document.activeElement === inputRef.current &&
        e.key === "Enter"
      ) {
        fetch(search, loggedUser.token, role, setSearched);
      }
    }
    document.addEventListener("keypress", get);

    return () => document.removeEventListener("keypress", get);
  }, [fetch, loggedUser.token, role, search, setSearched]);

  return (
    <SelectContainer>
      <Title>{title}</Title>
      <Input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          fontSize: 14,
          padding: 4,
          position: "relative",
          transform: "translateX(-24px)",
          cursor: "pointer",
        }}
        onClick={() =>
          search && fetch(search, loggedUser.token, role, setSearched)
        }
      />
      <AvailableOptions>
        {searched.map((v) => (
          <Option
            $bg="0"
            key={v.id}
            onClick={() => {
              setSearched((p) => p.filter((i) => i.id !== v.id));
              setSelectedOptions((p) =>
                !p.map((i) => i.id).includes(v.id) ? [...p, v] : p,
              );
            }}
          >
            {v.name}
          </Option>
        ))}
      </AvailableOptions>
      <AvailableOptions>
        {selectedOptions.map((v) => (
          <Option
            $bg="1"
            key={v.id}
            onClick={() => {
              setSelectedOptions((p) => p.filter((i) => i.id !== v.id));
              console.log(v.name.includes(search), v.name, search);
              setSearched((p) =>
                v.name.toLowerCase().includes(search)
                  ? !p.map((e) => e.id).includes(v.id)
                    ? [...p, v]
                    : p
                  : p.filter((e) => e.id !== v.id),
              );
            }}
          >
            {v.name}
          </Option>
        ))}
      </AvailableOptions>
      {/* {Object.entries(options).map(([k, v]) => (
        <Option
          $bg={selectedOptions.includes(v) ? "1" : "0"}
          key={k}
          onClick={() =>
            setSelectedOptions((p) =>
              p.includes(v) ? p.filter((i) => i !== v) : [...p, v],
            )
          }
        >
          {k}
        </Option>
      ))} */}
    </SelectContainer>
  );
}

export default InputFilter;

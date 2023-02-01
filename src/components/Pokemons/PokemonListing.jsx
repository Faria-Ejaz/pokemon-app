import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputBase,
  CircularProgress,
  Typography,
  styled,
  Button,
  ButtonGroup,
} from "@mui/material";
//Components
import PokemonCard from "./PokemonCard";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function PokemonListing() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [isLoaded, setIsLoaded] = useState(true);
  const [q, setQ] = useState("");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchParam] = useState(["name"]);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          getPokemon(result.results);
          setNextUrl(result.next);
          setPrevUrl(result.previous);
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, [url]);

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  const search = (pokeData) => {
    return pokeData.filter((product) => {
      return searchParam.some((newPokemon) => {
        return (
          product[newPokemon]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  if (!isLoaded) {
    return (
      <LoaderWrap>
        <CircularProgress />
      </LoaderWrap>
    );
  } else {
    return (
      <Wrap>
        <StyledContent>
          <Typography gutterBottom variant="h4">
            Search for a Pokémon by name.
          </Typography>
          <Search>
            <StyledInputBase
              inputProps={{ "aria-label": "search" }}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </StyledContent>
        <PokemonWrap>
          {search(pokeData).map((product) => (
            <PokemonCard product={product} />
          ))}
        </PokemonWrap>
        <ButtonGroup
          sx={{
            margin: 5,
          }}
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <StyledButton
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            <ArrowCircleLeftIcon fontSize={"small"} /> Prev
          </StyledButton>
          <StyledButton
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next <ArrowCircleRightIcon fontSize={"small"} />
          </StyledButton>
        </ButtonGroup>
      </Wrap>
    );
  }
}

const StyledButton = styled(Button)({
  alignItems: "center",
  borderRadius: "4px",
  backgroundColor: "#003A70",
  fontSize: "15px",
  fontWeight: 500,
  color: "#FFCB05",
  display: "flex",
  padding: "7px 40px",
  fontFamily: "'DM Sans',sans-serif",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FFCB05",
    color: "#003A70",
  },
});

const LoaderWrap = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%",
  height: "100%",
  zIndex: "9999",
});

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontFamily: "'DM Sans',sans-serif",
  fontWight: 700,
  textAlign: "center",
  marginBottom: "25px",

  "& > div": {
    color: "#323232",
    fontSize: "38px",
    lineHeight: "42px",
  },

  "& > p": {
    color: "#003A70",
    fontSize: "14px",
    lineHeight: "25px",
    letterSpacing: "1px",
  },
});

const Wrap = styled(Box)({
  display: "flex",
  margin: "55px auto",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  "& .MuiBox-root": {},
});

const PokemonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "& > div": {
    width: "calc(100% / 6)",
    margin: "10px",
    flexDirection: "column",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
}));

const Search = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const SearchIconWrapper = styled("div")({
  position: "absolute",
  margin: "0 10px",
});

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontWeight: 500,
  backgroundColor: "transparent",
  lineHeight: 1.2,
  "& .MuiInputBase-input": {
    width: "100%",
    height: "40px",
    outline: "none",
    border: "1px solid rgba(50, 50, 50, 0.6)",
    borderRadius: "10px",
    fontWeight: 700,
    lineHeight: "44.27px",
    color: "#323232",
    fontFamily: "DM Sans, sans-serif",
    padding: "0px 40px",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },

    "&::placeholder": {
      textOverflow: "ellipsis !important",
      padding: "0 20px",
      color: "#323232",
      fontWeight: 700,
      fontFamily: "DM Sans, sans-serif",
    },
  },
}));

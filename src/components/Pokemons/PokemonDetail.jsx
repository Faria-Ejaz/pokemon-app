import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { styled } from "@mui/system";
// Context
import { PokemonContext } from "../../context/PokemonContext";

export const PokemonDetail = () => {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "47px 97px 67px 97px",
      }}
    >
      <BoxWrap>
        <Typography variant="h6" color="white" fontWeight={700}>
          Name: {pokemonData?.product.name}
        </Typography>
        <Typography variant="h6" color="white">
          Weight: {pokemonData?.product.weight}
        </Typography>

        <Typography variant="h6" color="white">
          Height: {pokemonData?.product.height}
        </Typography>
        <Typography variant="h6" color="white">
          Abilities: {pokemonData?.product.abilities.length}
        </Typography>
        <Typography variant="h6" color="white">
          Moves: {pokemonData?.product.moves.length}
        </Typography>
      </BoxWrap>
      <img
        src={pokemonData?.product?.sprites?.other.dream_world.front_default}
        alt=""
      />
    </Box>
  );
};

const BoxWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  flex: 1,
  color: "#fff",
  fontFamily: "'DM Sans',sans-serif",
  "& .MuiTypography-root": {
    fontFamily: "'DM Sans',sans-serif",
    lineHeight: "23.44px",
  },
});

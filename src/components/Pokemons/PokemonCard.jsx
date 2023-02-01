import { useContext } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { styled } from "@mui/system";
// Context
import { PokemonContext } from "../../context/PokemonContext";

export default function PokemonCard(item) {
  const { setPokemonData, setShowModal } = useContext(PokemonContext);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);
    return color;
  }

  return (
    <StyledCard
      style={{
        backgroundColor: randomColor(),
      }}
      key={item.product.id}
      onClick={() => {
        setPokemonData({ bgColor: randomColor(), ...item });
        setShowModal(true);
      }}
    >
      <CardMedia
        component="img"
        alt={"item.product.sprites.front_default"}
        image={item.product.sprites.other.dream_world.front_default}
      />
      <StyledCardContent>
        <Typography
          sx={{ color: randomColor() }}
          gutterBottom
          variant="h5"
          component={"div"}
        >
          {item.product.name}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

const StyledCardContent = styled(CardContent)({
  "& > div": {
    // color: "#323232",
    fontSize: "22px",
    lineHeight: "35px",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'DM Sans',sans-serif",
  },

  "& > p": {
    color: "#616c80",
    fontSize: "18px",
    fontFamily: "'DM Sans',sans-serif",
  },
});

const StyledCard = styled(Card)({
  fontFamily: "'DM Sans',sans-serif",
  display: "flex",
  padding: "15px 20px  20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "1px 1px 35px 0 rgb(145 158 190 / 16%)",
  transition: "250ms",
  flexWrap: "wrap",
});

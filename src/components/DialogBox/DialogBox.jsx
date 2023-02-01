import { useContext } from "react";
import { styled } from "@mui/system";
import { Dialog, IconButton} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
//Components
import { PokemonDetail } from "../Pokemons/PokemonDetail";
// Context
import { PokemonContext } from "../../context/PokemonContext";

export const DialogBox = () => {
  const { showModal, setShowModal, pokemonData } = useContext(PokemonContext);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <DialogWrap myColor={pokemonData?.bgColor} open={showModal}>
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#fff",
          }}
        >
          <CancelOutlinedIcon />
        </IconButton>
        <PokemonDetail />
      </DialogWrap>
    </>
  );
};

const DialogWrap = styled(Dialog)(({ myColor }) => ({
  position: "fixed",
  top: 0,
  zIndex: 99999,
  overflow: "visible",
  borderRadius: "35px",
  "& .MuiDialog-paper": {
    display: "flex",
    flexDirection: "row",
    backgroundPosition: "top right",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    backgroundColor: myColor,
    borderRadius: "35px",
    fontFamily: "DM Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
  },
}));

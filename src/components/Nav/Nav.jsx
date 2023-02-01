import { styled } from "@mui/system";
import { Container } from "@mui/system";
import { Box, Link } from "@mui/material";
// Assets
import logo from "../../assets/svg/pokemon.svg";

function Nav() {
  return (
    <StyledNavBox component="nav" bgcolor={"#FFCB05"} sx={{ py: 3 }}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"} flexWrap="wrap">
          <StyledLink href="#">
            <img src={logo} width="100%" alt="logo" />
          </StyledLink>
        </Box>
      </Container>
    </StyledNavBox>
  );
}

export default Nav;

const StyledLink = styled(Link)({
  width: "130px",
});

const StyledNavBox = styled(Box)({
  position: "sticky",
  top: 0,
  zIndex: 9999,
  display: "block",
  overflow: "visible",
  padding: "10px 5%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "	#003A70",
});

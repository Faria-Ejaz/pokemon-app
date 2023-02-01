import { createTheme, ThemeProvider } from "@mui/material/styles";
//Components
import Nav from './components/Nav/Nav';
import PokemonListing from './components/Pokemons/PokemonListing';
import { DialogBox } from "./components/DialogBox/DialogBox";
//Context
import {PokemonContextProvider} from "./context/PokemonContext";


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

function App() {
  return (
    <PokemonContextProvider>
    <ThemeProvider theme={theme}>
      <Nav/>
      <DialogBox/>
      <PokemonListing/>
    </ThemeProvider>
    </PokemonContextProvider>
  );
}

export default App;

import { FactsContainer } from './components/FactsContainer/FactsContainer'
import './Style/GlobalStyle.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function App() {
  

  return (
    <>
      <div className="App"> 
        <Stack direction="row" spacing={2} >
          <Avatar alt="Chuck Norris Avatar" src="https://img.icons8.com/plasticine/400/chuck-norris.png" />
        </Stack>
        <FactsContainer/>
      </div>
    </>
  );
}

export default App;

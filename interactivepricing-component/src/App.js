import React,{useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './App.css';
import Cards from './Cards';


import patternCircleLogo from './assets/images/pattern-circles.svg';

function App() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode?'dark':'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
   <FormGroup>
      <FormControlLabel control={<Switch />} label="Dark Mode" style={{color:"black"}} onClick={(e)=>setIsDarkMode(!isDarkMode)}/>
    </FormGroup>
    <div className="App">
   <img  className="circle-img" src={patternCircleLogo} alt=''></img>
    <Cards/>
    </div>
  </ThemeProvider>
  );
}

export default App;
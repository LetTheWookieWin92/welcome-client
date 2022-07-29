// Style
import './App.css';

import React,{useState, useEffect} from 'react'

// Theme (MaterialUI)
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";

// MaterialUI components
import NavigationBar from "./components/navigationBar";
import { Typography } from "@mui/material/";

// Images
import banner from "./images/Banner.png";

// Axios for integrating Rails api with React client
import axios from 'axios';

function App() {

    // Event data value and set method. 
    const [data, setData] = useState({ hits: [] });

    // On application start, send get request to Welcome_api to retrieve all events
    useEffect(() => {
        // Asynchronously retrieve events using Axios
        const fetchData = async () => {
            // Get request will set result when returned
          const result = await axios(
            'http://localhost:3000/events',
          );
            
          // Once result is received, use set method to store events
          setData(result.data);
        };
    
        fetchData();
      }, []);
   

    return (
        <ThemeProvider theme={theme}>
            <NavigationBar textLabel="University of Sydney" showBack="No" />
            <div>
            <img class="cover-image" src={banner} alt="Banner" />

                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>Welcome to Sydney Law School</Typography>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Acknowledgement of Country</Typography>

                {/* If events exist, display them. If not, display no events message */}
                <ul>
                    {data.length ? data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    )) : <li>Nothing to show</li>}
                </ul>
                
                
            </div>
        </ThemeProvider>
  );
}

export default App;

/*

<p style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 10px; font-size: 18pt; color: black;">Acknowledgement of country</p>
<div style="width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center;">
    <p style="text-align: center; color: grey; margin-top: 10px; margin-bottom: 10px; max-width: 1000px; font-size: 12pt;"><i>In Australia, the Acknowledgement of Country is a show of respect for Traditional Owners and the continuing connection of Aboriginal and Torres Strait Islander peoples to Country. Delivered by the Dean in our new indigenous garden.</i></p>
</div>




*/
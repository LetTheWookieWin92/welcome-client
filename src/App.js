// Style
import './App.css';

import React,{useState, useEffect} from 'react'

// Theme (MaterialUI)
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";

// MaterialUI components
import NavigationBar from "./components/navigationBar";
import { Typography } from "@mui/material/";
import OrientationCard from "./components/orientationCard";

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

                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>In Australia, the Acknowledgement of Country is a show of respect for Traditional Owners and the continuing connection of Aboriginal and Torres Strait Islander peoples to Country. Delivered by the Dean in our new indigenous garden.</Typography>

                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Orientation Materials</Typography>
                <div class="card-collection">
                    <OrientationCard />
                    <OrientationCard />
                    <OrientationCard />
                    <OrientationCard />
                    <OrientationCard />

                </div>
                
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Create your Schedule</Typography>

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
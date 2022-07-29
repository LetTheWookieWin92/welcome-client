// Style
import './App.css';

import React,{useState, useEffect} from 'react'

// Theme (MaterialUI)
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";

// MaterialUI components
import NavigationBar from "./components/navigationBar";
import Button from "@mui/material/Button"

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
                <Button color="primary">Theme test</Button>
                <h1>Hello world!</h1>

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

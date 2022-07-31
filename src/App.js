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
import StatusForm from "./components/statusForm"

// Images
import banner from "./images/Banner.png";

// Axios for integrating Rails api with React client
import axios from 'axios';

function App() {

    // Status form selections
    const [degree, setDegree] = useState("Bachelor of Laws (from Bachelor of Commerce)");
    const [studentStatus, setStudentStatus] = useState("Domestic");
    const [englishStatus, setEnglishStatus] = useState("Yes");
    const [commonStatus, setCommonStatus] = useState("Yes");

    // Handler for when user makes a change to any of the form fields
    function handleFormChange(change) {
        
        switch (change[0]) {
            case 'Degree':
                setDegree(change[1]);
                break;
            case 'Status':
                setStudentStatus(change[1]);
                break;
            case 'English':
                setEnglishStatus(change[1]);
                break;
            case 'Common':
                setCommonStatus(change[1]);
                break;
            default:

            }
    }

    function submitForm() {
        console.log("Degree: " + degree + "\nStatus: " + studentStatus + "\nEnglish: " + englishStatus + "\nCommon: " + commonStatus);
    }

    // After async save
    /*useEffect(() => {
        console.log("Degree: " + degree + "\nStatus: " + studentStatus + "\nEnglish: " + englishStatus + "\nCommon: " + commonStatus);
    },[degree, studentStatus, englishStatus, commonStatus]);*/
    

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
                <img className="cover-image" src={banner} alt="Banner" />

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

                <StatusForm degree={degree} studentStatus={studentStatus} englishStatus={englishStatus} commonStatus={commonStatus} onChange={handleFormChange} onSubmit={submitForm} />



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
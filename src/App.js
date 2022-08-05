// Style
import './App.css';

import React,{useState, useEffect} from 'react'

// Theme (MaterialUI)
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";

// MaterialUI components
import NavigationBar from "./components/navigationBar";
import { Typography } from "@mui/material/";

// Components
import OrientationCard from "./components/orientationCard";
import StatusForm from "./components/statusForm"
import Schedule from "./components/schedule";

// Images
import banner from "./images/Banner.png";

// Axios for integrating Rails api with React client
import axios from 'axios';

function App() {

    // Orientation materiall links are taken directly from active university site
    let acknowledgement = {
        title: "Acknowledgement of country ",
        url: "Acknowledgement of country ",
        imageURL: "https://canvas.sydney.edu.au/courses/4533/files/11750246/preview",
    }

    let aTeam = {
        title: "Meet the Associate Deans",
        url: "https://www.youtube.com/watch?v=MaI9gtI0Pio",
        imageURL: "https://canvas.sydney.edu.au/courses/4533/files/15251380/preview",
    }

    let transition = {
        title: "Transition to Studying Law",
        url: "https://echo360.org.au/media/ceffaff7-171f-404d-b85b-9508acf9533f/public",
        imageURL: "https://canvas.sydney.edu.au/courses/4533/files/12062104/preview",
    }

    let integrity = {
        title: "Academic Integrity",
        url: "https://www.sydney.edu.au/students/academic-integrity.html",
        imageURL: "https://canvas.sydney.edu.au/courses/4533/files/14080915/preview",
    }


    let common = {
        title: "Law Bites",
        url: "https://canvas.sydney.edu.au/courses/4533/pages/law-bites",
        imageURL: "https://canvas.sydney.edu.au/courses/4533/files/722112/preview",
    }

    let orientationMaterials = [acknowledgement, aTeam, transition, integrity, common]

    // Display mode switches depending on whether user is filling out the form or viewing schedule
    const [displayMode, setDisplayMode] = useState("Form");

    function changeDisplayMode(mode) {
        setDisplayMode(mode);
    }

    function renderDisplayMode (mode) {
        switch (displayMode) {
            case "Form":
                return <StatusForm degree={degree} studentStatus={studentStatus} englishStatus={englishStatus} commonStatus={commonStatus} onChange={handleFormChange} onSubmit={submitForm} />;
                
            case "Schedule":
                return <Schedule events={data} degree={degree} studentStatus={studentStatus} englishStatus={englishStatus} commonStatus={commonStatus} onBackPress={changeDisplayMode} />;

            default:
                return <StatusForm degree={degree} studentStatus={studentStatus} englishStatus={englishStatus} commonStatus={commonStatus} onChange={handleFormChange} onSubmit={submitForm} />;
        }
    }

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

    // When form is submitted, change display mode to schedule
    function submitForm() {
        changeDisplayMode("Schedule");
    }
   
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
           
                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>To all of our students - new and returning, on campus and overseas -
				welcome to Sydney Law School. Our campuses sit on the ancestral lands of
				Australia's First Peoples, where they have taught and learned for tens
				of thousands of years. As a community, we come together as one Sydney,
				but many peoples and continue the exchange of knowledge upon these lands
				proudly.</Typography>

                {orientationMaterials.length > 0 && (
                    <div>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Orientation Materials</Typography>
                        <div class="card-collection">
                            {orientationMaterials.map((item) => (
                                <OrientationCard item={item} />
					        ))}

                        </div>
                    </div>
                )}


                
                
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Create your Schedule</Typography>

                {/* Render depending on display mode */}
                {renderDisplayMode(displayMode)}

            </div>
        </ThemeProvider>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Login from '../pages/Login';
import AboutPage from '../pages/AboutPage';
import bootstrap from 'bootstrap'
import './NavBar.css';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function NavBar() {
    return (
        <div >

            <Router>
                <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%", marginTop: 10 }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    item xs={12} sm={6}>
                    <Box marginBottom={1}>
                        <Link className="Link" to="/">Home</Link>
                    </Box>

                    <Box marginBottom={1} >
                        <Link className="Link" to="/about">About Us</Link></Box>
                    <Box marginBottom={1}>
                        <Link className="Link" to="/login">Login</Link></Box>
                        
                </Grid>
                <Routes>
                    <Route exact path="/" element={<homePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/about" element={<AboutPage />} />

                </Routes>
               

            </Router>
            
        </div>
    )
}

export default NavBar;
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Login from '../pages/Login';
import AboutPage from '../pages/AboutPage';
import bootstrap from 'bootstrap'
import './NavBar.css';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ProductCall from './ProductCall';
import ContactPage from '../pages/ContactPage';

function NavBar() {
    return (
        <div >

            <Router>
                <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%", marginTop:8 }}
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
                        <Box marginBottom={1}>
                        <Link className="Link" to="/contact">Contact Us</Link></Box>
                      
                </Grid>
                <hr style={{color:"whitesmoke"}}/>
                <Routes>
                    <Route exact path="/" element={<ProductCall /> } />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />}/>
                </Routes>
               

            </Router>
            
        </div>
    )
}

export default NavBar;
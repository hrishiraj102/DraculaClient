import { Height } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./NavBar";

function Header() {
    return (
        <Grid sx={{ width: "100%", backgroundColor: "black", height: "330px" }}

            

            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            item xs={12} sm={6}>

            <Grid sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <img style={{width:"100px",heigh:"100px",marginRight:"11px",marginTop:20,position:"relative"}} src='./DraculaLogo.jpeg' alt="Logo"/>
                <Typography variant="h2" sx={{ color: "white", fontFamily: "sans-serif" ,pt:6,fontSize:"auto",fontWeight:400}}>DRACULA</Typography>
            </Grid>
            <NavBar />



        </Grid>
    )
}
export default Header
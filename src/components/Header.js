import { Height } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./NavBar";

function Header() {
    return (
        <Grid sx={{ width: "100%", backgroundColor: "black", height: "350px" }}

            

            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            item xs={12} sm={6}>

            <Grid>
                <Typography variant="h1" sx={{ color: "white", fontFamily: "sans-serif" ,pt:6}}>DRACULA</Typography>
            </Grid>
            <NavBar />



        </Grid>
    )
}
export default Header
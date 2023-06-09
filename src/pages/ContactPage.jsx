import { Container, Grid, Typography } from "@mui/material";

function ContactPage(){


    return(
        <>
        <Grid>
            <Typography variant="h4">
               Contact Us
            </Typography>
            {/* Form need to be add */}

        </Grid>
        <Grid>
            <Grid sx={{}}>
            <img style={{width:"100px",heigh:"100px",marginRight:"11px",marginTop:20,position:"relative"}} src='./DraculaLogo.jpeg' alt="Logo"/>
             
                <Typography variant="body" sx={{ color: "white", fontFamily: "sans-serif" ,pt:6,fontSize:"auto",fontWeight:400}}>Address: Silpukhuri, Guwahati, Pincode - 781021</Typography>
                <Typography variant="body" sx={{ color: "white", fontFamily: "sans-serif" ,pt:6,fontSize:"auto",fontWeight:400}}><br/>Contact no - cc2223333</Typography>
               
            </Grid>
        </Grid>
        </>
        
    )
}
export default ContactPage;
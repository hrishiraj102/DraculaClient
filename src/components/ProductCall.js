import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./ProductList.css"

function ProductCall() {
    var [product, setProduct] = useState([]);
    var url = "http://localhost:4000/products";

    useEffect(() => {
        axios.get(url)
            .then(res => setProduct(res.data))
            .then(error => console.error("Error" + error));
    }, []);

    return (
        <>

            <Grid sx={{ display: "grid", flexDirection: "column",justifyContent:"center", width: "100%", marginTop: 4, backgroundColor: "black" }}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                item xs={12} sm={6}>

                <Typography variant="h4" sx={{color:"white",mb:5}}>Our Products</Typography>
                <Grid container sx={{ display: "flex", flexDirection: "row",justifyContent:"center",pl:5, flexWrap: "wrap", width: "100%"}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {product.map((item) =>
                        <Grid sx={{ display: "flex", flexDirection: "column",width: "350px", height: "500px" }} >
                            <Grid >
                                <img style={{ width: "280px", height: "330px", borderRadius: 5 }} src={item.imageUrl} />
                            </Grid>
                            <Typography variant="h6" sx={{ color: "white" }}>{item.pname}</Typography>
                            <Typography variant="body" sx={{ color: "white" }}>Price- ₹{item.price}</Typography>
                            <Typography variant="body" sx={{ color: "white" }}>Size : {item.size}</Typography>
                            
                            <Box sx={{height:"20px",mt:2}} >
                            <button onClick={()=> {window.location.href="https://wa.me/918011514990"; }} style={{width:"50%"}} className="button2">Order</button>
                            </Box>
                        </Grid>
                        
                    )}
                </Grid>


            </Grid>
        </>
    )
}

export default ProductCall;
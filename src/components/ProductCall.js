import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function ProductCall() {
    var [product, setProduct] = useState([]);
    var url = "http://localhost:4000/products";

    useEffect(() => {
        axios.get(url)
            .then(res => setProduct(res.data))
            .then(error => console.error("Error" + error));
    },[]);

    return (
        <>
            <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", width: "100%", marginTop: 10,backgroundColor:"black" }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    item xs={12} sm={6}>
            <Typography variant="h5">Product Call</Typography>
            <table>
                <thead>
                    <th>Product Name</th>

                    <th>Price</th>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index}>
                            <td> {item.pname}</td>
                            <td>{item.price}</td>

                        </tr>


                    ))}



                </tbody>
            </table>
            </Grid>
        </>
    )
}

export default ProductCall;
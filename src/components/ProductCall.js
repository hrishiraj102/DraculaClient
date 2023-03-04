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
        <div>
            <h3>Product Call</h3>
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
            {/* {JSON.stringify(product)} */}
        </div>
    )
}

export default ProductCall;
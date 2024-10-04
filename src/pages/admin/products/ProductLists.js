import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function ProductList(){

    const [products, setproducts] = useState([]); 

    function getProducts(){

        fetch("http://localhost:4000/products?_sort=id&_order=desc")
        .then(
            response=> {
                if(response.ok){
                    return response.json()
                }

                throw new Error()
            }
        )
        .then( data=> {setproducts(data)})
        .catch(error => { alert("Unable to get data") });
        
    }

    useEffect(getProducts,[])


    return (

        <div className="container my-4">

            <h2 className="text-center mb-4">Products</h2>

            <div className="row mb-3">
                <div className="col">

                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>

                    <button type="button" className="btn btn-outline-primary" onClick={getProducts}> Refresh </button>

                </div>

                <div className="col"></div>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        products.map((product,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}$</td>
                                        <td><img src={"http://localhost:4000/images/" + product.image} width="100" alt="..."/></td>
                                        <td style={{width:"10px",whiteSpace:"nowrap"}}>

                                            <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + product.id }>EDIT</Link>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>

                                        </td>

                                    </tr>
                                )
                        })

                    }

                </tbody>
            </table>

        </div>
    )

}
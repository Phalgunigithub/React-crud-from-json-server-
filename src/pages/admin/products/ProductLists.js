import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ProductList(){

    const [products, setproducts] = useState([]); 

    function getProducts(){

        axios("http://localhost:4000/products?_sort=id&_order=desc")
    
        .then( response=> {setproducts(response.data)})
        .catch(error => { alert("Unable to get data") });
        
    }

    useEffect(getProducts,[])

    function deleteProduct(id){

        fetch("http://localhost:4000/products/"+id,{
            method:"DELETE"

        })

        .then(response=>{
            if(response.ok){
                getProducts();
            }
            else throw new Error();
        })

        .catch(error=>
        {
            alert("unable to delete Product")
        }
        )

    }


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
                                            <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteProduct(product.id)}>Delete</button>

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
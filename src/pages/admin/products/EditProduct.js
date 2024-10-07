import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";

export function EditProduct(){

        const params= useParams()
        const navigate=useNavigate();

        const [initialData, setinitialData] = useState()

        function getProduct(){
            fetch("http://localhost:4000/products/"+params.id)
            .then(response=>{
                if(response.ok){
                        return response.json()
                }
                throw new Error()
            })
            .then(data=> {
                setinitialData(data)
            })
            .catch(error=>{
                alert("Unable tor read data")
            })
            
        }


        useEffect(getProduct,[])



    async function handleSubmit(event){

        event.preventDefault();

        const formData= new FormData(event.target);

        const product= Object.fromEntries(formData.entries());

        if(!product.name || !product.price){
            alert("field required");
            return
        }


            try{
                 const response=await axios.patch("http://localhost:4000/products/" + params.id,product,{
                
                    headers: {
                        "Content-Type": "application/json",
                      },
                          });

                const data=await response.json();

                if (response.status === 200 || response.status === 204) {
                    navigate("/admin/products")
                }
                else if(response.status===400){alert("not found")}
                else{alert("cannot update  PRODUCT")};
             }

            catch(error){
                alert("Unable to connect to server")

            }

    }

    return(

        <div className="container my-4">

            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">

                      {/*title*/}
                    <h2 className="text-centre mb-5">EDIT PRODUCT</h2>



                    {/*id*/}
                    <div className="row mb-3">

                        <label className="col-sm-4 col-form-label">Id</label>

                        <div className="col-sm-8">
                        <input readOnly className="form-control-plaintext" defaultValue={params.id} ></input>
                        
                        </div>

                    </div>




                      {/*form display or not*/}

                    {
                        initialData &&

                    <form onSubmit={handleSubmit}>


                   

                        <div className="row mb-3">

                            <label className="col-sm-4 col-form-label">Name</label>
                           
                           <div className="col-sm-8">
                            <input className="form-control" name="name" defaultValue={initialData.name}></input>
                            <span className="text-danger"></span>
                            </div>

                         </div>

                      

                         <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input className="form-control" name="price" type="number" defaultValue={initialData.price}/>
                <span className="text-danger"></span>
              </div>
            </div>



                                <div className="row mb-3">

                                    <div className="offset-sm-4 col-sm-4 d-grid">
                                        <button type="submit" className="btn btn-primary" >Submit</button>
                                    </div>

                                    <div className="col-sm-4 d-grid">
                                        <Link className="btn btn-secondary" to='/admin/produts' role='button'>Cancel</Link>
                                    </div>

                                  

                                </div>


                        
                    </form>
                }

                    
                </div>
            </div>

        </div>
    )
}
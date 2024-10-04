import { Link, Navigate, useNavigate } from "react-router-dom";

export function CreateProduct(){

        const navigate=useNavigate()


    async function handleSubmit(event){

        event.preventDefault();

        const formData= new FormData(event.target);

        const product= Object.fromEntries(formData.entries());

        if(!product.name || !product.price){
            alert("field required");
            return
        }


            try{
                 const response=await fetch("http://localhost:4000/products",{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(product), // Send data as JSON
                    });

                const data=await response.json();

                if(response.ok){
                    navigate("/admin/products")
                }
                else if(response.status===400){alert("not found")}
                else{alert("NOT CREATE PRODUCT")};
             }

            catch(error){
                alert("Unable to connect to server")

            }

    }

    return(

        <div className="container my-4">

            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">


                    <h2 className="text-centre mb-5">CREATE PRODUCT</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="row mb-3">

                            <label className="col-sm-4 col-form-label">Name</label>
                           
                           <div className="col-sm-8">
                            <input className="form-control" name="name"></input>
                            <span className="text-danger"></span>
                            </div>

                         </div>

                      

                         <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input className="form-control" name="price" type="number"/>
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

                    
                </div>
            </div>

        </div>
    )
}
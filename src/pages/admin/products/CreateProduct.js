export function CreateProduct(){

    return(

        <div className="container my-4">

            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">


                    <h2 className="text-centre mb-5">CREATE PRODUCT</h2>

                    <form>
                        <div className="row mb-3">

                            <label className="col-sm-4 col-form-label">Name</label>
                            <input className="form-contro" name="name"></input>
                            <span className="text-danger"></span>

                         </div>

                      

                            <div className="row mb-3">

                                <label className="col-sm-4 col-form-label">Price</label>
                                
                                <div className="col-sm-8">
                                    <select className="form-select" name="category">
                                        <option value='Other'>Other</option>
                                        <option value='6554'>6554</option>
                                        <option value='234'>234</option>
                                        <option value='35'>35</option>
                                    </select>
                                </div>

                                <span className="text-danger"></span>

                                </div>


                        
                    </form>

                    
                </div>
            </div>

        </div>
    )
}
import { useForm } from "react-hook-form";

const AddProduct = () => {
    

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data);
        const url = `https://damp-coast-51374.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(name => {
                e.target.reset();
                console.log(name);

            })

    };

    return (
        <div className="container my-5" >
            <div className="my-5">
                <p className="display-6 fw-bold">Add Product</p>
            </div>
            
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center w-100 mx-auto">
                    <div className="d-flex flex-column text-right px-3 pt-1 justify-content-between">
                        <label className="" htmlFor="productName">Name :</label>
                        <label htmlFor="">Image :</label>
                        <label htmlFor="">Description :</label>
                        <label htmlFor="">Quantity :</label>
                        <label htmlFor="">Price :</label>
                        <label htmlFor="">Supplier :</label>
                    </div>

                    <div className="w-sm-100 w-75 w-md-50">
                        <input className="form-control" {...register("name", { required: true, maxLength: 100 })} />
                        <input className="form-control my-4" {...register("img", { required: true, maxLength: 200 })} />
                        <input className="form-control my-4" {...register("description", { required: true, maxLength: 500 })} />
                        <input className="form-control my-4" type="number" {...register("quantity", { required: true, min: 1, max: 100000 })} />
                        <input className="form-control my-4" type="number" {...register("price", { required: true, min: 1, max: 100000 })} />
                        <input className="form-control " {...register("supplierName", { required: true, maxLength: 500 })} />
                    </div>
                </div>
                <input className="form-control w-25 mx-auto mt-4 bg-info fw-bold" type="submit" value="Add Product" />
            </form>
            
        </div>
    );
};

export default AddProduct;
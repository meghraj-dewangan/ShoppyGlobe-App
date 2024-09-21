import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import UseFetch from "./UseFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import { addItem } from "./Utils/CartSlice";



function ProductDetail() {

    const { id } = useParams();
    const url = "https://dummyjson.com/products";
    const { data, loading, error } = UseFetch(url);
    const [detailData, setdetailData] = useState([]);
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1)

    useEffect(() => {

        if (data) {
            const upData = data.products.find((item) => item.id === parseInt(id));
            setdetailData(upData);
        }
    }, [data, id])

    
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>error loading data: {error.message}</p>
    }
    // Check if product is found
    if (!detailData) { return <div>Product not found.</div>; }

    function handleaddToCart(){

        
     const  productToAdd = {
        ...detailData, 
        quantity
     };
     
       dispatch(addItem(productToAdd));
     
     

       

    }
    
            
           
        
    
    return (


        <div className="flex flex-col justify-center items-center bg-orange-200  mb-10    font-serif text-sm ">

            <div className="p-1 pb-6  bg-gradient-to-r h-auto rounded-3xl mb-10  from-orange-200 to-white mt-10 w-full lg:w-3/4  ">

                {
                    detailData.images && detailData.images.length > 0 ? (
                        <img src={detailData.images[0]} alt="detailimages" className=" bg-gradient-to-r from-gray-300 to-white w-full rounded-3xl" />
                    ) : detailData.images && detailData.images.length > 1 ? (

                        <img src={detailData.images[1]} alt="images" className="bg-gradient-to-r from-gray-300 to-white round-3xl " />
                    ) : (
                        <p>no images Available</p>
                    )
                }

                <div className="mt-3 py-3 pb-7 rounded-3xl lg:text-base px-2 lg:py-10  lg:border-solid lg:border-2">
                    <h1 className="text-2xl font-bold mb-3">{detailData.title}</h1>
                    <span className="mr-3 sm:block" ><span className="font-extrabold">Category:</span>  {detailData.category}</span>
                    <span ><span className="font-extrabold">Brand:</span> {detailData.brand}</span>
                    <span className="block text-yellow-600"> <span className="font-extrabold">Rating:</span> {detailData.rating} <FontAwesomeIcon icon={faStar} className="text-yellow-600" /></span>
                    <span className="mr-5 block text-green-600" ><span className="font-extrabold">Price</span>:   ${detailData.price}</span>

                    <span className="text-red-400 sm:block block "> <span className="font-extrabold">Left:</span> {detailData.stock}</span>

                    <span className="block mt-4"><span className="font-bold">Description:</span> {detailData.description}</span>

                   
                </div>


                <div className="flex justify-center lg:mt-7">
                <button className="hover:scale-110 mr-8 shadow-lg shadow-orange active:scale-95 bg-orange-300 px-2 py-1 rounded-lg text-black  " onClick={handleaddToCart} >Add to Cart</button>
             <Link to="/cart"> <button className="hover:scale-110 mr-8 shadow-lg shadow-orange active:scale-95 bg-orange-300 px-2 py-1 rounded-lg text-black  ">Checkout</button></Link>  
                </div>
              


            </div>



        </div>


    )
}

export default ProductDetail;
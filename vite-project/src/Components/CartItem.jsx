import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CartSlice, { addItem } from './Utils/CartSlice';
import { removeItem } from './Utils/CartSlice';
import { clearCart } from './Utils/CartSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';





function CartItem(props) {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.cartProduct.quantity || 1);
    const [totalAmount, setTotalAmount] = useState(props.cartProduct.price * quantity)

    //increment quantity and handle store
    function handleIncrement() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        dispatch(addItem({ ...props.cartProduct, quantity: newQuantity }));
    };


    //update total ammount when quantity changes
    useEffect(() => {
        setTotalAmount(props.cartProduct.price * quantity)
    }, [quantity, props.cartProduct.price])

    //decrement quantity and handle store
    function handleDecrement() {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(addItem({ ...props.cartProduct, quantity: newQuantity }));
        }

    };


    //remove item from the cart
    function handleRemove() {

        dispatch(removeItem(props.cartProduct.id))
    };


    return (
        <>




            <div className=" font-serif text-sm  sm:flex sm:justify-center w-full ">

                <div className="flex mt-2 py-3 bg-gradient-to-r from-slate-200 to-white sm:shadow-md sm:w-1/2 sm:mt-3 sm:mb-8 ">

                    <div className="p-2  mr-2">

                        {
                            props.cartProduct.images && props.cartProduct.images.length > 0 ? (
                                <img src={props.cartProduct.images[0]} alt="detailimages" className=" bg-gradient-to-r from-gray-100 to-white w-24 rounded-3xl" />
                            ) : detailData.images && detailData.images.length > 1 ? (

                                <img src={props.cartProduct.images[1]} alt="images" className="bg-gradient-to-r from-gray-300 to-white round-3xl " />
                            ) : (
                                <p>no images Available</p>
                            )
                        }

                    </div>

                    <div className="pr-2 lg:ml-11 ">


                        <div className='lg:flex '>
                            <div>
                                <h1 className="font-extrabold">{props.cartProduct.title} </h1>
                                <span className="block"><span className="font-extrabold text-red-400 ">Brand:</span> {props.cartProduct.brand}</span>
                                <span className="mr-5 block text-green-600" ><span className="font-extrabold">Price</span>: ${props.cartProduct.price}</span>
                                <span className="mr-5 block text-green-600" ><span className="font-extrabold">Discount</span>: {props.cartProduct.discountPercentage}%</span>

                                <span className="mr-5 block text-green-600" ><span className="font-extrabold">Delivery by</span>: {props.cartProduct.shippingInformation}</span>
                                <span className='block text-base'><span className='font-semibold'>quantity:</span> {quantity}</span>
                            </div>


                            <span className="block text-base xl:left-36 xl:relative  bg-cyan-400 lg:h-14 px-3 shadow-lg rounded-md text-center"><span className="font-semibold lg:block">Total:</span> ${totalAmount.toFixed(2)}</span> {/* Display total amount */}


                        </div>


                        <div className='mt-4'>
                            <button onClick={handleIncrement} className='mr-5 px-3 py-2 hover:scale-110 active:scale-95 shadow-lg shadow-gray-300 bg-orange-400 text-white  rounded-full'><FontAwesomeIcon icon={faPlus} /></button>
                            <button onClick={handleDecrement} className=' px-3 mr-5 py-2 hover:scale-110 active:scale-95 shadow-lg shadow-gray-300 bg-orange-400 text-white  rounded-full'><FontAwesomeIcon icon={faMinus} /></button>
                            <button onClick={handleRemove} className=' px-3 py-2 hover:scale-110 active:scale-95 shadow-lg shadow-gray-300 bg-orange-400 text-white  rounded-full'><FontAwesomeIcon icon={faTrash} /></button>


                        </div>
                    </div>




                </div>

            </div>
        </>
    )

}

export default CartItem;
import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass,faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

import { dummy } from "./Utils/MockImage";




function ProductList() {


// state for welcome images change
    const [index, setIndex] = useState(0)
    let dommys = dummy[index]

    function handleClick() {
        index == 2 ? setIndex(0) : setIndex(index + 1);
    }

    const [filterData, setFilterData] = useState([])
    const { data, loading, error } = UseFetch('https://dummyjson.com/products')

    //state for seach product

    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        if (data) {
            setFilterData(data.products)

        }
    }, [data]);

    if (error) {
        return <p>Error in loading Data:{error}</p>
    }
    if (loading) {
        return <p className="text-center text-orange-400 text-xl font-extrabold"> loading...</p>
    }

    // filter data for searching
    const filterDataSearch = filterData.filter((data) => {
        return (
            data.title.toLowerCase().includes(searchQuery.toLowerCase())

        );
    }
    );

    // handle search function

    function handleSInputChange(e) {
        setSearchQuery(e.target.value);
        
    };
    function handleSearch(){
    
        setSearchQuery("");
    }

    return (



        <div className="font-serif  bg-gray-100 border-solid border-2 w-full">


            <div className="mb-10 flex  flex-col relative items-center lg:mb-24">

                
                <img className="w-full h-36 sm:h-60 md:h-72 lg:h-96 " key={dommys.id} src={dommys.url} alt="welcomeimages" /> 
                <button className="absolute right-0 sm:top-28 md:top-36 hover:scale-110  hover:bg-cyan-400 p-2 hover:text-white rounded-full active:scale-95 top-12" onClick={handleClick}><FontAwesomeIcon icon={faAnglesRight} /></button>
                <div className=" flex justify-center top-24 sm:top-36 lg:top-44 absolute mb-9 mt-5 w-full sm:mt-9 md:mt-14 lg:mt-20  " >

                    <input onChange={handleSInputChange} value={searchQuery} placeholder="search grocery" className=" rounded-l-lg lg:w-2/3 md:w-96  px-2 py-3 shadow-md lg:px-7  bg-white border-gray-200 border-solid  border-l-2 border-t-2 border-b-2   " type="text" />
                    <button onClick={handleSearch} className='text-black p-3 border-gray-200 shadow-md  shadow-orange-300 border-solid border-r-2 lg sm:w-20  border-t-2 border-b-2 sm:px-5 lg:px-10 bg-orange-400 rounded-r-lg hover:scale-110 transition-all'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                </div>

            </div>



            <div className="flex flex-col" >





                <div className="flex justify-center  ">
                    <div className="flex flex-wrap  justify-center  bg-gray-100   ">


                        {filterDataSearch.length > 0 ? (
                            filterDataSearch.map((product) => (
                                <ProductItem key={product.id} product={product} />

                            ))
                        ) : (
                            <p className="text-center">Not Available...</p>

                        )


                        }
                    </div>



                </div>



            </div>



        </div>

    )




}


export default ProductList;
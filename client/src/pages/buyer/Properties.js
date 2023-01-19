import React, { useEffect, useState } from "react";
import axios from "axios";

import Listings from "./Listings";
import Pagination from "./Pagination";

const Properties = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(16);

    useEffect(() => {
        async function fetchData(){
            const  response =  await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            console.log(response.data)
            setCoinsData(response.data)
        }
        fetchData()
        // const response = fetchData()
        // console.log(response.data)
        

        // setCoinsData(response.data);
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <Listings coinsData={currentPosts} />
            <Pagination
                totalPosts={coinsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Properties;
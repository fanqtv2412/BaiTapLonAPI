import React, { useState, useEffect } from "react"
import axios from "axios";
import {useParams} from "react-router-dom"


const DetailsNews = ({item, index})=>{
    //console.log(item);
    let { id } = useParams();
    const [newsDetail, setNewsDetail] = useState([]);

    const getListNew = async()=>{  
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_4721691fd6f15f5f7eab70111e0499bd53b4&q=sport&language=en");
        console.log(response.data.results[id]);
        setNewsDetail(response.data.results[id]);
        //console.log(news);
        return response.data.results;  
    }
    useEffect( async ()=>{
        const data = getListNew();
    }, [])
    return(
        <div>
            <div>
                <h3> {newsDetail.title}</h3>
            </div>
            <div>
                <table>

                </table>
            </div>
        </div>
    )
}
export default DetailsNews;
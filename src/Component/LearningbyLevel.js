import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LearningbyLevel.css"
import Header from "./Header";

const LearningbyLevel = () => {
    const [news, setNews] = useState([]);
    const getListNew = async () => {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_4721691fd6f15f5f7eab70111e0499bd53b4&q=sport&language=en ");
        return response.data.results;
    }

    useEffect(async () => {
        const data = await getListNew();
        setNews(data);
        console.log(news);
    }, [])
    return (
        <div className="main-container1">
            <Header/>
            {news.map((item, index) => (
                <Link className="News" to={`/DetailsNews/${index}`}  key={index}>
                    <div className="Descri">
                        <div className="elem">
                            <h3>Title: </h3> <h3 className="Content">{item.title}</h3><br></br>
                        </div>
                        <div className="elem">
                            <label>Content: </label> <span className="Content">{item.content}</span><br></br>
                        </div>
                        <div className="elem">
                            <label>Publish Date: </label> <span >{item.pubDate}</span>
                        </div>
                        
                    </div>
                </Link>
            ))}
               
        </div>
    )
}

export default LearningbyLevel;
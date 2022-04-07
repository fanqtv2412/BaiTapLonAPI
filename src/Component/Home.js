import './Home.css'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Home = ()=>{
    return(
        <div className="main-container2">
            <Header/>
            <h3>Started!!!</h3>
            <br></br>
            <div className="wrapper-content">
                <div className="easy">
                    <div className="block">
                        <div className="inside">
                            <div>
                                Easy level will help you getting started 
                            </div>
                            <div>
                                <Link to=""><button className='btn btn-success'>Easy</button></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="medium">
                    <div className="block">
                        <div className="inside">
                            <div>
                                Easy level will help you getting started 
                            </div>
                            <div>
                                <Link to=""><button className='btn btn-success'>Medium</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hard">
                    <div className="block">
                        <div className="inside">
                            <div>
                                Easy level will help you getting started 
                            </div>
                            <div >
                                <Link to=""><button className='btn btn-success'>Hard</button></Link>
                            </div>
                        </div>
                    </div>
                </div>   
            </div> 
            <Footer></Footer> 
        </div>
    )
}
export default Home;
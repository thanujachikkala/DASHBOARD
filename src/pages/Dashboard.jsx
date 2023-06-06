import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Fetchjsondata from '../components/Fetchjsondata';
import Analyzed from '../components/Analyzed';
import Sha256sum from '../components/Sha256sum';
import PieChart from '../components/PieChart';
// import BarGraph from '../components/BarGraph';
// import LineGraph from '../components/LineGraph';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faShoppingCart, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaCog } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { Navbar } from 'react-bootstrap';
import Graphs from '../components/Graphs';
import BarGraph from '../components/BarGraph';






const Dashboard = (props) => {
    const location = useLocation();
    const history = useNavigate();
    console.log("history", location);
    const section =
        // const state = this.location.state.myProp;
        // console.log("state", state);
        console.log("Location", location.pathname);

    const scrollToAbout = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (location.hash == "#about") {
            console.log("true")
            scrollToAbout('section1')
        }

        if (location.hash == "#comment") {
            console.log("true")
            scrollToAbout('section2')
        }
        if (location.hash == "#analytics") {
            console.log("true")
            scrollToAbout('section3')
        }
        if (location.hash == "#product") {
            console.log("true")
            scrollToAbout('section6')
        }
        if (location.hash == "#productList") {
            console.log("true")
            scrollToAbout('section4')
        }
    })


    const severityDistribution = {
        Critical: 4,
        High: 1,
        Medium: 2,
        Low: 3,
    };

    const Card = ({ icon, heading, data, color }) => {
        return (

            <div className="card" style={{ backgroundColor: color }}>
                <div className="card-icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="card-body">
                    <h5 className="card-heading">{heading}</h5>
                    <p className="card-data">{data}</p>
                </div>
            </div>
        );
    };



    const Footer = () => {
        return (
            <footer className="footer">
                <div className="left-content">
                    <ul className="footer-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </div>
                <div className="right-content">
                    <p>&copy; {new Date().getFullYear()} <span className='cdac'>CDAC</span> All rights reserved.</p>
                </div>
            </footer>
        );
    };

    return (

        <div className='main-panel'>

            <div>
                <NavBar />
            </div><br></br>
            <div className='main-container'>
                <div className='dash-body'>


                    
                    <div className="card-container" id='section1'>
                        <Card
                            icon={faChartLine}
                            heading="Card Heading 1"
                            data="Sample data 1"
                            color="#63c2de"
                        />
                        <Card
                            icon={faUsers}
                            heading="Card Heading 2"
                            data="Sample data 2"
                            color="#5cb85c"
                        />
                        <Card
                            icon={faShoppingCart}
                            heading="Card Heading 3"
                            data="Sample data 3"
                            color="#f86c6b"
                        />
                        <Card
                            icon={faBriefcase}
                            heading="Card Heading 4"
                            data="Sample data 4"
                            color="#f8cb00"
                        />
                    </div>

                    <div id='section3'>
                        <Graphs />
                    </div>
                    <div className='fetch' id='section4'>
                        <div><Fetchjsondata /></div>
                        <div><Fetchjsondata /></div>
                        <div><Fetchjsondata /></div>
                    </div>
                    
                    <div className="dashboard-wrapper" id='section2'>
                        <div className="dashboard-container">
                            <div className="card">
                                <h1 className='piee'>Severity Distribution</h1>
                                <div className="chart-container">
                                    <PieChart severityDistribution={severityDistribution} />
                                </div>
                            </div>
                            <div className="card">
                                <h1 className='barr'>Bar Graph</h1>
                                <div className="chart-container">
                                    <BarGraph />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <br></br>
                    <div id='section6'>
                        <Sha256sum />
                    </div>

                    <br></br>
                    <div className="dashboard">
                        <div className="setting-option">
                            <FaCog className="big-setting-icon" />
                            <div className="small-settings">
                                <IoIosSettings className="small-setting-icon" />
                                <IoIosSettings className="small-setting-icon" />
                            </div>
                        </div>

                    </div>
                    <div>
                        <Footer />
                    </div>


                </div>
            </div>

        </div>

    );
};

export default Dashboard;
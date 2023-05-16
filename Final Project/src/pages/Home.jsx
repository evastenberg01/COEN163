import Navbar from "../components/Navbar";
import ChannelSearchCard from "../components/ChannelSearchCard";

import "../stylesheets/Home.css";
import {ImSearch} from 'react-icons/im'

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <div className="dj-search">
          <div className="search-bar-container">
            <input type="text" placeholder="Search..."/>
            <button className="search-button"><ImSearch/></button>
          </div>
          <div className="horizontal-divider"></div>
          <div className="channel-card-display-section">
            <ChannelSearchCard
              name={"DanTheMan"}
              viewercount={3}
              playing={"rich flex"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
          </div>
        </div>
        <div className="station-search">
          <h2>Station Search</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

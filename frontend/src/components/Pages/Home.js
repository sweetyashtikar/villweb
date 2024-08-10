import React from "react";
import bath from "../image/bath.png";
import bed from "../image/bed.png";
import bhira from "../image/bhira.png";
import call from "../image/call.png";
import chirag from "../image/chirag.png";
import color1 from "../image/color1.png";
import color2 from "../image/color2.png";
import color3 from "../image/color3.png";
import color4 from "../image/color4.png";
import extra from "../image/extra.png";
import kitchen from "../image/kitchen.png";
import light from "../image/light.png";
import man from "../image/man.png";
import more from "../image/more.png";
import orchard from "../image/orchard.png";
import owner from "../image/owner.png";
import raigad from "../image/raigad.png";
import river from "../image/river.png";
import sai from "../image/sai.png";
import shivraj from "../image/shivraj.png";
import theme from "../image/theme.png";
import tv from "../image/tv.png";
import "../style/Home.css";
const Home = () => {
  return (
    <>
    <div className="welcome">
      <div className="header">
        <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
      </div>
      <div className="content">
        <h1 style={{fontSize:"60px"}}>WELCOME TO SWARU VILLA</h1>
        <p className="subtitle">
          "ESCAPE the city hustle
          <br />
          EXPLORE Swaru Villa in Tamhini ghat
          <br />
          in the heart of the Nature."
        </p>
      </div>
      <div className="sub-div">
        <h1>
          Tamhini Ghat, Gold Valley, Sanaswadi,
          <br />
          Maharashtra 402120
        </h1>
      </div>
    </div>
    <div className="host">
      <div className="host-item">
        <p>TamhiniGhat,GoldValley,Sanaswadi,
          <br />
        Maharashtra 402120</p>
        <hr className="hr"/>
        <h1>Meet Your Host</h1>
      </div>
      <div className="img-contain">
        <img className="img" src={owner} alt=""></img>
        <div className="text">
          <h1>Owner</h1>
          <p>Swapnil D</p>
          <div className="flex-item">
          <img src={call} alt=""></img>
          <p>+91 8237330306</p>
          </div>
          <span>Happy To Help You!</span>
        </div>
      </div>
    </div>
    <hr />
    <div className="table-content">
    <h1>ABOUT SWARU VILLA</h1>
    <hr className="hr"/>
    <div className="img-item">
      <img src={color1} alt=""></img>
      <img src={color2} alt=""></img>
      <img src={color3} alt=""></img>
      <img src={color4} alt=""></img>
    </div>
    <div className="table-item">
      <div className="table-list">
        <img src={man} alt=""></img>
        <h3>4 PERSONS</h3>
      </div>
      <div className="table-list">
        <img src={light} alt=""></img>
        <h3>2 KINGSIZE BED</h3>
      </div>
      <div className="table-list">
        <img src={bed} alt=""></img>
        <h3>1 LIVING ROOM </h3>
      </div>
      <div className="table-list">
        <img src={bath} alt=""></img>
        <h3>2 BATH</h3>
      </div>
    </div>

    <div className="table-item1">
      <div className="table-list1">
        <img src={more} alt=""></img>
        <h3>2 Persons can sleep
          <br />
        comfortably</h3>
      </div>
      <div className="table-list1">
        <img src={extra} alt=""></img>
        <h3>EXTRA-BEDS</h3>
      </div>
      <div className="table-list1">
        <img src={tv} alt=""></img>
        <h3>SMART-TV</h3>
      </div>
      <div className="table-list1">
        <img src={kitchen} alt=""></img>
        <h3>1 KITCHEN</h3>
      </div>
    </div>
    
    <p className="p-text">Indulge in our luxurious suites with AC, Tata sky, and a
        refreshing shower. Enjoy private moments <br/> in your own
        on a king-size bed and the flexibility of a sofa , all within
<br/> the spacious haven.</p>
    </div>
    <hr />
    <div className="attract-item">
      <h1>Nearby Attractions</h1>
      <hr className="hr1"/>

      <div className="near-item">
        <div className="near-item1">
        <img src={raigad} alt=""></img>
        </div>
        <div className="near-item1">
          <h1>Raigad Fort</h1>
          <p>“Raigad Fort is a historical icon symbolizing <br />
              the valor of Chhatrapati Shivaji Maharaj and <br />
              offering panoramic views of Maharashtra's <br />
              rugged landscapes. “</p>
        </div>
      </div>
      <hr />
      <div className="near-item">
        <div className="near-item1">
          <h1>Bhira Dam</h1>
          <p>“Bhira Dam, situated in the Sahyadri 
              mountains <br/> near Bhira village, is a 
              picturesque  reservoir  <br/>on the Kundalika
              River.”</p>
        </div>
        <div className="near-item1">
        <img src={bhira} alt=""></img>
        </div>
      </div>
      <hr />
      <div className="near-item">
        <div className="near-item1">
        <img src={theme} alt=""></img>
        </div>
        <div className="near-item1">
          <h1>IMAGICAA
          THEME PARK</h1>
          <p>“Imagicaa Theme Park is an immersive
            entertainment destination near Mumbai,
            India, offering a thrilling mix of rides,
            attractions, and live entertainment for a
            memorable and magical experience.”</p>
        </div>
      </div>
      <hr />
      <div className="near-item">
        <div className="near-item1">
          <h1>DIVEAGAR
          BEACH</h1>
          <p>“Diveagar Beach, nestled along the
              Konkan coast in Maharashtra, India,
              captivates with its pristine shores and
              tranquil ambiance, providing a serene
              escape for beach lovers.”</p>
        </div>
        <div className="near-item1">
        <img src={river} alt=""></img>
        </div>
      </div>
    </div>
    < hr />
    <div className="local">
      <h1>Top 4 Local Restaurant</h1>
      <hr className="hr"/>
      <div className="local-item">
        <div className="local-item1">
        <img src={orchard} alt=""></img>
        <p>ORCHARD
        CAFE</p>
        </div>
        <div className="local-item1">
        <img src={sai} alt=""></img>
        <p>HOTEL
        SAI KRUPA</p>
        </div>
        <div className="local-item1">
        <img src={chirag} alt=""></img>
        <p>HOTEL
        CHIRAG</p>
        </div>
        <div className="local-item1">
        <img src={shivraj} alt=""></img>
        <p>SHIVRAJ
          FAMILY HOTEL
        </p>
        </div>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Home;

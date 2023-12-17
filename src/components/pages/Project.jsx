import React from "react";
import styled from "styled-components";
import wta from "../../assets/antscreen.png";
import movieapi from "../../assets/movieapi.jpg";
// import portfolio from "../../assets/portfolio.png";
import cm from "../../assets/cm.png";
import dataware from "../../assets/dataware.png";
import airbnb from "../../assets/airbnb.png";
import intercon from "../../assets/itech.png";
import cheappay from "../../assets/cheappay.png";
import dnd from "../../assets/dnd.png";
import altschool from "../../assets/altschool.png";
import calculator from "../../assets/calculator.png";
import text from "../../assets/text.png";
import store from "../../assets/store.png";

function Project() {
  return (
    <MainPro id="project">
      <Body>
        <h1>Projects</h1>
        <Box>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={wta} alt="calc" />
            </div>
            <div className="detail-card">
              <h2>AntBuilder Web  APP</h2>
              <p> 
                This application was built with Next JS, Redux, Tailwind Css, TypeScript, it
                is also responsive to mobile view
              </p>
            </div>
            <a href="https://www.antbuilder.tech/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={intercon} alt="calc" />
            </div>
            <div className="detail-card">
              <h2>INTERCON</h2>
              <p> 
                This application was built with React,Next JS,  Chakra-UI, TypeScript, it provides
                Holistic Solutions to Unleash Business’s Full Potential
              </p>
            </div>
            <a href="https://itechnetronics.com/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

          <InnerBox data-aos="zoom-in">
            <div>
              <img src={movieapi} alt="movie" />
            </div>
            <div className="detail-card">
              <h2>MOVIE API WEBSITE</h2>
              <p>
                The website is built with HTML, CSS, JavaScript and API call
                from a database using axios, it is quite responsive to mobile
                view.
              </p>
            </div>
            <a href="https://movieapicurpra.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
         
        </Box>





        <Box>
         <InnerBox data-aos="zoom-in">
            <div>
              <img src={cheappay} alt="stephen" />
            </div>
            <div className="detail-card">
              <h2>CHEAPPAY APP</h2>
              <p>
                This is an ecommerce website  built with
                Reactjs, Nextjs, Tailwind CSS
              </p>
            </div>
            <a href="https://typescript-chakra-ui-pages.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={airbnb} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>Airbnb-Clone</h2>
              <p>
                This is a clone website  built with
                Reactjs, Nextjs, Tailwind CSS
              </p>
            </div>
            <a href="https://airbnb-curpra-clone.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

        
          <InnerBox data-aos="zoom-in">
            <div>
              <img src={dataware} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>Dataware</h2>
              <p>
                This is a landing page website  built with
                HTML, CSS, and JavaScript
              </p>
            </div>
            <a href="https://dataware.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>

         
         
        </Box>
        <Box>
     
        <InnerBox data-aos="zoom-in">
            <div>
              <img src={altschool} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>ALTSCHOOL CLONE</h2>
              <p>
                This is a School website  built with
                Reactjs, Nextjs, Tailwind CSS
              </p>
            </div>
            <a href="https://steph-altschool-clone.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>


        <InnerBox data-aos="zoom-in">
            <div>
              <img src={dnd} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>DnD IMAGE GALLERY</h2>
              <p>
                This is a Drag and drop website  built with
                ReactJs,TypeScript and Chakra UI
              </p>
            </div>
            <a href="https://drag-drop-image-gallery.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>



          <InnerBox data-aos="zoom-in">
            <div>
              <img src={cm} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>CurpraMovie</h2>
              <p>
                This is full stack web application built with
                react.js, styled-components, context api, node.js, Mongo db and express
              </p>
            </div>
            <a href="https://movie-webapp.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
        </Box>


        <Box>
     
        <InnerBox data-aos="zoom-in">
            <div>
              <img src={store} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>Clothing Store</h2>
              <p>
                This is a clothing store built with
                Vue Js, Tailwind CSS
              </p>
            </div>
            <a href="https://edu-tams-clothing-store-admin.vercel.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>


        <InnerBox data-aos="zoom-in">
            <div>
              <img src={text} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>TEXT2SPEECH_CONVERTER</h2>
              <p>
                This is a Drag and drop website  built with
                HTML,CSS,Javascript
              </p>
            </div>
            <a href="https://text-to-speech-converter01.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>



          <InnerBox data-aos="zoom-in">
            <div>
              <img src={calculator} alt="curtis" />
            </div>
            <div className="detail-card">
              <h2>CurpraMovie</h2>
              <p>
                This is calculator built with
                HTML,CSS,Javascript
               
              </p>
            </div>
            <a href="https://neumorphism-ui-design-calculator.netlify.app/">
              <button>CLICK TO VIEW</button>
            </a>
          </InnerBox>
        </Box>
      </Body>
    </MainPro>
  );
}

export default Project;

const MainPro = styled.div`
  padding: 100px 0;
`;
const Body = styled.div`
  margin: 0 auto;
  max-width: 1240px;
 
  h1 {
    font-family: lobster;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 999px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 590px){
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 999px) {
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const InnerBox = styled.div`
  border: 0px;
  margin: 1rem;
  flex: 1;
  border-radius:2rem;
  border-radius: 12.8028px;
    background-color: ${props=>props.theme.cardColor};
    box-shadow: ${props=>props.theme.cardShadow};
    width: 100%;
text-align:center;
padding: 2rem 1rem;
  

  img {
    width: 100%;
    border-radius:1rem;
  }
  .detail-card {
    padding: 1rem;
    text-align:center;
  }
  button {
    border: 0px;
    background-color:  rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.99rem 1.2rem;
    color: white;
    border-radius:2rem;
    margin-bottom: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  } 
  a {
    text-decoration: none;
  }
  p{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  h2{
  font-size: 1.4rem;
  margin-bottom: 1rem;
  }
`;

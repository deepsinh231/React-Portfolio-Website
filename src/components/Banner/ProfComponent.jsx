import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram,AiFillGithub } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">DEEP SOLANKI</h1>
          <h3>UX/UI Developer and Front End Developer</h3>
          <p>
            Highly skilled and passionate Front-End Developer with 1 years of experience in creating dynamic and responsive web applications. Proficient in HTML5, CSS3, JavaScript, and various front-end frameworks, I am dedicated to delivering visually appealing and user-friendly websites that provide exceptional user experiences. With a keen eye for design and a strong understanding of UX principles, I strive to create seamless interfaces that enhance user engagement and drive conversions. I am constantly exploring emerging technologies and trends to stay at the forefront of the ever-evolving web development landscape.
          </p>
          <button><a href="mailto:deepsinh231+portfolio@gmail.com">Let's talk</a></button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a  href="https://www.instagram.com/deepsinh231/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://deepsinh231.netlify.app/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/deepsinh231/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://github.com/deepsinh231">
                  <AiFillGithub />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img className="imgdata"
            src={window.location.origin + '/deepsinh231.png'}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  a{
    text-decoration: none;
    color: white;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #363633);
    transition: transform 400ms ease-in-out;
    filter: contrast(110%);
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 container" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Danil</span>👋
      <br />A FullStack Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="Picked up many skills and mastered various technologies along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Successfully developed multiple projects over the year. Check their quality"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I`m just few keystrokes away"
      link="/contact"
      btnText="Let`s talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;

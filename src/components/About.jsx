import React from 'react'

import DownloadLink from './DownloadLink';

import './About.scss';

const aboutTopics = [
  {
    title: 'Who am I?',
    description: 'I am a guy from Ada, Oklahoma. I have been a professional software engineer since January 2020. I enjoy any and all things music + art, software development, physics, and philosophy.'
  },
  {
    title: 'What do I know?',
    description: 'I graduated from East Central University in 2019 with bachelors degree in Physics. After college, I took some online courses. First I did a Team Treehouse frontend development course, then continued learning with a Udemy course for building full stack MERN applications. Since then I have primarily worked in frontend JS applications.'
  },
  {
    title: 'Professional experience?',
    description: 'Professionally I have worked with the JS frameworks Angular (briefly) and React. At LegalShield (Pre-Paid Legal), I have built software to help people manage their legal documents and consultations with their attornery. Currently at Flogistix, I build software that gives unique insights and data references for oil pipeline data for oil companies who use our revolutionary compressor technology.'
  },
]

const TopicRow = ({ entry }) => {
  return <div className='topic-row'>
    <h2>{entry?.title}</h2>
    <p>{entry?.description}</p>
  </div>
}

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='about-topics'>
        {aboutTopics.map(entry => <TopicRow entry={entry} />)}
      </div>
      <DownloadLink />
    </div>
  )
}

export default About
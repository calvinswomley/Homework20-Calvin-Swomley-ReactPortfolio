import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Calvin</h1>
      <img src={ require('../../images/Calvin_Swomley.jpg') } alt={'Photo of Calvin Swomley smiling'}></img>
      <p>
      Calvin is currently a QA Engineer at Xylem Inc. Calvin's engineering team provides utilities with a mobile work and asset management enterprise web application called Kona. Calvin is currently working through a part time Full Stack Web Development Coding Bootcamp at the University of Denver. Calvin has an educational background in economics and geology as well as substantial engagement experience in customer service and business development.
      </p>
    </div>
  );
}
import React from 'react';

const styles = {
  aboutStyle: {
    display: 'inline-flex',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom:'5%'
  },
  contentStyle: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom:'5%',
    paddingTop: '30px'
  },
  imgStyle: {
    maxHeight: '255px',
    maxidth: '100%',
  }
}

export default function About() {
  return (
    <div>
      <div style={styles.aboutStyle}>
        <img style={styles.imgStyle} src={ require('../../images/Calvin_Swomley.jpg') } alt={'Calvin Swomley smiling'}></img>
        <p style={styles.contentStyle}>
          Calvin is currently a QA Engineer at Xylem Inc. Calvin's engineering team provides utilities with a mobile work and asset management enterprise web application called Kona. Calvin is currently working through a part time Full Stack Web Development Coding Bootcamp at the University of Denver. Calvin has an educational background in economics and geology as well as substantial engagement experience in customer service and business development.
        </p>
      </div>
    </div>
  );
}
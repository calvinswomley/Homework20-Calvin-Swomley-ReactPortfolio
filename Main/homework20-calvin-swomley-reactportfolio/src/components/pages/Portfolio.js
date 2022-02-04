import React from 'react';

export default function Porfolio() {
  return (
    <div>
      <main id="my-work">
        <section class="work1">
            <h4>
                <a href="https://sub-hub12.herokuapp.com" target="_blank" rel="noreferrer">Subscription Management App</a> | 
                <a href="https://github.com/mthurber82/SubHub" target="_blank" rel="noreferrer">Github Repo</a>
            </h4>
            <img src={ require('../../images/subhub_project2.PNG') } alt={'Screenshot of Subscription Management App'}></img>
        </section>
        <section class="work2">
            <h4>
                <a href="https://enigmatic-river-67357.herokuapp.com/" target="_blank" rel="noreferrer">Note Taker App</a> | 
                <a href="https://github.com/calvinswomley/Homework11-NoteTaker" target="_blank" rel="noreferrer">GitHub Repo</a>
            </h4>
            <img src={ require('../../images/Note_Taker.PNG') } alt={'Screenshot of Note Taker App'}></img>
        </section>
        <section class="work2">
            <h4>
                E-Commerce Backend | 
                <a href="https://github.com/calvinswomley/Homework13-E-CommerceBackEnd" target="_blank" rel="noreferrer">Github Repo</a>
            </h4>
            <img src={ require('../../images/E-CommerceBackEnd_Routes.PNG') } alt={'Screenshot of E-Commerce Backend routes being tested using Insomnia'}></img>
        </section>
        <section class="work2">
            <h4>
                <a href="https://calvinswomley.github.io/Homework4-CodeQuiz/" target="_blank" rel="noreferrer">Coding Quiz App</a> | 
                <a href="https://github.com/calvinswomley/Homework4-CodeQuiz" target="_blank" rel="noreferrer">Github Repo</a>
            </h4>
                <img src={ require('../../images/Code_Quiz_App_HW.JPG') } alt={'Screenshot of Coding Quiz App'}></img>
        </section>
        <section class="work2">
            <h4>
                <a href="https://calvinswomley.github.io/Homework5-WorkDayScheduler/" target="_blank" rel="noreferrer">Work Day Scheduler App</a> | 
                <a href="https://github.com/calvinswomley/Homework5-WorkDayScheduler" target="_blank" rel="noreferrer">Github Repo</a>
            </h4>
            <img src={ require('../../images/Work_Day_Scheduler_App_HW.JPG') } alt={'Screenshot of Work Day Scheduler App'}></img>
        </section>
    </main>
    </div>
  );
}
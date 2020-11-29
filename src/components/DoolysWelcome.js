import React from 'react';
import {Welcome, Hoi, Smoke, Over} from '../data/Actors.js';
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import BuildMeme from './BuildMeme';
import './../style/style.scss';

const DoolysWelcome = () => {

  const actors = [Welcome, Hoi, Smoke, Over];

  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <main>
          <Menu actors={actors} />
          {actors.map((actor, index) => {
            return <BuildMeme key={`actor-${index}`} actorConst={actor} />;
          })}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default DoolysWelcome;

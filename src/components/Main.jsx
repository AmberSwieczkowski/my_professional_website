/** @format */

import React, { useEffect, useState, useRef } from 'react';
import '../css/Main.css';
import { AboutData } from '../data/AboutData';

const Main = ({isOpen, toggle}) => {

  const hidden = isOpen ? '' : 'hide';

  const display = `mainSection ${hidden}`
  return (
    <>
      <div className={display}>
        <div className='mainWrapper'>
          {AboutData.map((about, index) => (
            <div key={about.id}>
              <h1>
                Hello,
                <h1>
                  My name is {about.name}.
                  <h1>
                    I have an {about.degree} degree
                    <h1>
                      and I am a {about.job}.
                      <h1>
                        My attractiveness rating is a {about.sexyRating}.
                        <h1>
                          And yes,
                          <h1>I voted for {about.vote}.</h1>
                        </h1>
                      </h1>
                    </h1>
                  </h1>
                </h1>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;

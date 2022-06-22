import React from 'react';

// imgs
import nemo from './../assets/images/nemo.png';

const Team = () => {
  return (
    <section className="team ">
      <div className="container">
        <h2 className="title">Team</h2>
        <div className="team__row d-g gtc-3-af">
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={nemo} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={nemo} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={nemo} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

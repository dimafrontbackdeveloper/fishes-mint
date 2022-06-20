import React from 'react';

// imgs
import gull1 from './../assets/images/gull1.png';
import gull2 from './../assets/images/gull2.png';
import gull3 from './../assets/images/gull3.png';
import logo from './../assets/images/logo.png';
import headerFish from './../assets/images/header-fish.png';
import island from './../assets/images/island.png';
import { Button } from './Button';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="gull gull1" src={gull1} alt="gull" />
        <img className="gull gull2" src={gull2} alt="gull" />
        <img className="gull gull3" src={gull3} alt="gull" />
        <div className="header__top d-f jc-sb ai-c">
          <nav className="nav">
            <ul className="d-f ai-c">
              <li>
                <a className="text-border" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-border" href="#">
                  Mint
                </a>
              </li>
              <li>
                <a className="text-border burger" href="#">
                  Social
                </a>
              </li>
            </ul>
          </nav>
          <ul className="social d-f ai-c">
            <li>
              <a src="https://discord.com/invite/duckfrens" href="#">
                <img
                  src="https://www.duckfrens.com/_next/image?url=%2Fimages%2Fsocials%2FDiscord.svg&w=32&q=75"
                  alt="discord"
                />
              </a>
            </li>
            <li>
              <a src="https://twitter.com/DuckFrens" href="#">
                <img
                  src="https://www.duckfrens.com/_next/image?url=%2Fimages%2Fsocials%2FTwitter.svg&w=32&q=75"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a src="https://opensea.io/collection/duck-frens" href="#">
                <img
                  src="https://www.duckfrens.com/_next/image?url=%2Fimages%2Fsocials%2FOpensea.svg&w=32&q=75"
                  alt="opensea"
                />
              </a>
            </li>
            <li>
              <a
                src="https://etherscan.io/address/0x0E42fb5f6C542a8a027E09eC71380CbB44DBbf5A"
                href="#">
                <img
                  src="https://www.duckfrens.com/_next/image?url=%2Fimages%2Fsocials%2FEtherscan.svg&w=32&q=75"
                  alt="etherscan"
                />
              </a>
            </li>
            <div className="close">
              <div className="close__container">
                <div className="close__line"></div>
                <div className="close__line"></div>
              </div>
            </div>
          </ul>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-row d-g gtc-2">
            <div className="header__bottomColumn">
              <h1 className="logo">
                <img src={logo} alt="logo" />
              </h1>
              <h2 className="text-border">775 ducks left to migrate!</h2>
              <div className="progressBar"></div>
              <Button />
            </div>
            <div className="header__bottomColumn d-f jc-e">
              <div className="header__bottomColumnImg ">
                <img src={headerFish} alt="fish" />
                <img src={island} alt="island" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

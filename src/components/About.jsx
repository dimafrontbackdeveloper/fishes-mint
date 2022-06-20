import React, { useEffect } from 'react';

// imgs
import fish2 from './../assets/images/fish2.png';
import fish3 from './../assets/images/fish3.png';
import fish4 from './../assets/images/fish4.png';
import fish5 from './../assets/images/fish5.png';
import fish6 from './../assets/images/fish6.png';
import fish7 from './../assets/images/fish7.png';
import fish8 from './../assets/images/fish8.png';
import fishes1 from './../assets/images/fishes1.png';
import fishes2 from './../assets/images/fishes2.png';

const About = () => {
  // движение полос с картинками
  function line() {
    const lines = document.querySelectorAll('.about__line');

    let arithmeticSignFirst = '-'; // если -, то полоса движеться влево, если +, то вправо
    let arithmeticSignSecond = '+'; // если -, то полоса движеться влево, если +, то вправо
    let lineWidthFirst; // ширина всей линии
    let lineWidthSecond; // ширина всей линии

    // изначально задаем, чтобы полоса двигалась влево
    lines.forEach((line, ind) => {
      const multiply =
        window.innerWidth > 1024
          ? 300
          : window.innerWidth <= 1024 && window.innerWidth > 768
          ? 200
          : 145;

      if (ind === 0) {
        lineWidthFirst = (line.children.length + 1) * multiply - window.innerWidth;
        line.style.transform = `translate(${arithmeticSignFirst}${lineWidthFirst}px,0)`;
      }

      if (ind === 1) {
        lineWidthSecond = (line.children.length + 1) * multiply - window.innerWidth;
        line.style.transform = `translate(${100}px,0)`;
      }
    });

    // в зависимости от знака, полоса будет двигатся или влево, или вправо
    setInterval(() => {
      if (arithmeticSignFirst === '+') {
        arithmeticSignFirst = '-';
      } else {
        arithmeticSignFirst = '+';
      }

      if (arithmeticSignSecond === '+') {
        arithmeticSignSecond = '-';
      } else {
        arithmeticSignSecond = '+';
      }

      lines.forEach((line, ind) => {
        if (ind === 0) {
          if (arithmeticSignFirst === '+') {
            line.style.transform = `translate(${100}px,0)`;
          } else {
            line.style.transform = `translate(${arithmeticSignFirst}${lineWidthFirst}px,0)`;
          }
        }

        if (ind === 1) {
          if (arithmeticSignSecond === '+') {
            line.style.transform = `translate(${100}px,0)`;
          } else {
            line.style.transform = `translate(${arithmeticSignSecond}${lineWidthSecond}px,0)`;
          }
        }
      });
    }, 9000);
  }

  // движения рыбок
  function fishes() {
    const fishes = document.querySelectorAll('.fishes');

    window.addEventListener('scroll', () => {
      fishes.forEach((el, ind) => {
        // ищем расстояние элемента от верхней границы экрана
        const elRectTop = el.getBoundingClientRect().top;

        // если мы будем ниже элемента на 300px, то он будет двигаться
        if (elRectTop - window.innerHeight + 300 < 0) {
          el.style.transform = `translate(${ind % 2 === 0 ? '-' : '+'}${
            (elRectTop - window.innerHeight + 300) * -1 * 2
          }px,0)`;
        }
      });
    });
  }

  useEffect(() => {
    line();
    fishes();
  }, []);

  return (
    <section className="about">
      <img className="fishes fishes1" src={fishes1} alt="fishes" />
      <div className="container">
        <h2 className="title">About</h2>
        <p>
          Fish Frens is a community driven collection of 5,000 randomly generated NFTs on the
          Ethereum blockchain.
        </p>
        <p>
          We want to build a big group of frens that are ready to dive into the metaverse together.
        </p>
        <p>
          For zero eth, you will receive 1 Fish Fren NFT which will make for a cute PFP as well as
          an access pass to everything Fish Frens.
        </p>
        <p>
          Your Fish Fren will grant you access to future drops, raffles, merch, the metaverse, and
          our utility token. This is all a part of our roadmap 1.0 and we are excited to take Fish
          Frens even further.
        </p>
        <p>Ready to join the flock?</p>
      </div>
      <img className="fishes fishes2" src={fishes2} alt="fishes" />
      <div className="about__lines">
        <div className="about__line d-f jc-sb">
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish2} alt="fish" />
          </div>
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish4} alt="fish" />
          </div>
          <div>
            <img src={fish5} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish7} alt="fish" />
          </div>
          <div>
            <img src={fish8} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish2} alt="fish" />
          </div>
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish4} alt="fish" />
          </div>
          <div>
            <img src={fish5} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish7} alt="fish" />
          </div>
        </div>
        <div className="about__line d-f jc-sb">
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish2} alt="fish" />
          </div>
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish4} alt="fish" />
          </div>
          <div>
            <img src={fish5} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish7} alt="fish" />
          </div>
          <div>
            <img src={fish8} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish2} alt="fish" />
          </div>
          <div>
            <img src={fish3} alt="fish" />
          </div>
          <div>
            <img src={fish4} alt="fish" />
          </div>
          <div>
            <img src={fish5} alt="fish" />
          </div>
          <div>
            <img src={fish6} alt="fish" />
          </div>
          <div>
            <img src={fish7} alt="fish" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

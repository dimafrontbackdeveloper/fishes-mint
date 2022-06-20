import React, { useEffect } from 'react';

// imgs
import fishes3 from './../assets/images/fishes3.png';
import fishes4 from './../assets/images/fishes4.png';
import swimmingFish from './../assets/images/swimming-fish.png';
// import bubbles1 from './../assets/images/bubbles1.png';
// import bubbles2 from './../assets/images/bubbles2.png';
import fishBubble1 from './../assets/images/fish-bubble1.png';
import fishBubble2 from './../assets/images/fish-bubble2.png';
import fishBubble3 from './../assets/images/fish-bubble3.png';
import fishBubble4 from './../assets/images/fish-bubble4.png';

const Roadmap = () => {
  function bubbles() {
    const bubbles = document.querySelectorAll('.bubbles');

    const removeToTop = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.remove('bubbles--to-top');
        });

        addActiveClass();
      }, 2500);
    };

    const removeOpacity = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.remove('bubbles--opacity');
        });

        removeToTop();
      }, 1700);
    };

    const addActiveClass = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.add('bubbles--to-top');
          bubble.classList.add('bubbles--opacity');
        });

        removeOpacity();
      }, 8000);
    };

    addActiveClass();
  }

  function fish() {
    const fish = document.querySelector('.fish'),
      fishContainer = document.querySelector('.fishContainer'),
      fishWrapper = document.querySelector('.fish-wrapper');

    let pageScrollFromTop;
    let isAddedPageScrollFromTop = false;
    let x = 0;
    let y = 0;
    let isScale = false;
    const delay = 300;

    const elRectTop = fish.getBoundingClientRect().top;
    window.addEventListener('scroll', () => {
      // если мы будем ниже элемента на delay, то рыбка будет двигаться
      if (elRectTop - window.scrollY - window.innerHeight + delay < 0) {
        if (!isAddedPageScrollFromTop) {
          isAddedPageScrollFromTop = true;
          pageScrollFromTop = window.scrollY - 100;
        }

        // диапазоны движения рыбки
        if (window.scrollY - pageScrollFromTop < 100) {
          y = -45;
          x = 0;

          isScale = false;
        }

        if (window.scrollY - pageScrollFromTop >= 100 && window.scrollY - pageScrollFromTop < 300) {
          y = -35;
          x = 240;

          isScale = true;
        }

        if (window.scrollY - pageScrollFromTop >= 300 && window.scrollY - pageScrollFromTop < 600) {
          y = 180;
          x = -300;

          isScale = false;
        }

        if (window.scrollY - pageScrollFromTop >= 600 && window.scrollY - pageScrollFromTop < 900) {
          y = 380;
          x = 230;

          isScale = true;
        }

        if (
          window.scrollY - pageScrollFromTop >= 900 &&
          window.scrollY - pageScrollFromTop < 1200
        ) {
          y = 650;
          x = -320;

          isScale = false;
        }

        if (
          window.scrollY - pageScrollFromTop >= 1200 &&
          window.scrollY - pageScrollFromTop < 1500
        ) {
          y = 760;
          x = -20;

          isScale = true;
        }
      } else {
        // начальная позиция рыбки
        x = 0;
        y = -45;

        isScale = false;
      }

      // задаем движения рыбки
      fishWrapper.style.transform = `translate(${x}px,${y}px)`;

      // разворачивать рыбку или нет
      fish.style.transform = `${isScale ? 'scale(-1,1)' : ''}`;
    });
  }

  useEffect(() => {
    bubbles();
    fish();
  }, []);

  return (
    <section className="roadmap">
      <img className="fishes fishes3" src={fishes3} alt="fishes" />
      <img className="fishes fishes4" src={fishes4} alt="fishes" />
      <img className="fishes fishes5" src={fishes3} alt="fishes" />
      <img className="fishes fishes6" src={fishes4} alt="fishes" />
      <div className="container">
        <h2 className="title">Roadmap</h2>
        <h3>Here is how we're planning an amazing future for this collection.</h3>
        <div className="roadmap__row d-g gtc-3 ai-c">
          <div className="fishContainer">
            <div className="fishContainer__wrapper">
              <div className="fish-wrapper">
                <img className="fish" src={swimmingFish} alt="fish" />
              </div>
              <img
                className="bubbles bubbles--first "
                src={'https://www.duckfrens.com/images/bubbles1.png'}
                alt="bubbles"
              />
              <img
                className="bubbles  bubbles--second  "
                src={'https://www.duckfrens.com/images/bubbles2.png'}
                alt="bubbles"
              />
            </div>
          </div>
          <div className="roadmap__column roadmap__column--left ">
            <div className="roadmap__circle roadmap__circle--yellow text-border">1</div>
            <p className="text-border">Pixel Fish Frens</p>
          </div>
          <div className="roadmap__column roadmap__column--center ">
            <img src={fishBubble1} alt="fish" />
          </div>
          <div className="roadmap__column"></div>

          <div className="roadmap__column"></div>
          <div className="roadmap__column roadmap__column--center d-f jc-e">
            <img src={fishBubble2} alt="fish" />
          </div>
          <div className="roadmap__column roadmap__column--right">
            <div className="roadmap__circle roadmap__circle--blue text-border">2</div>
            <p className="text-border">Metaverse integration</p>
          </div>

          <div className="roadmap__column  roadmap__column--left">
            <div className="roadmap__circle roadmap__circle--red text-border">3</div>
            <p className="text-border">Merchandise</p>
          </div>
          <div className="roadmap__column roadmap__column--center ">
            <img src={fishBubble3} alt="fish" />
          </div>
          <div className="roadmap__column"></div>

          <div className="roadmap__column"></div>
          <div className="roadmap__column roadmap__column--center d-f jc-e">
            <img src={fishBubble4} alt="fish" />
          </div>
          <div className="roadmap__column  roadmap__column--right">
            <div className="roadmap__circle roadmap__circle--green text-border">4</div>
            <p className="text-border">Utility token, future drops and experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

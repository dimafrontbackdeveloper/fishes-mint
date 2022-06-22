import React, { useEffect } from 'react';

// imgs
import fishes3 from './../assets/images/fishes3.png';
import fishes4 from './../assets/images/fishes4.png';
import swimmingFish from './../assets/images/swimming-fish.png';
import bubbles1 from './../assets/images/bubbles1.png';
import bubbles2 from './../assets/images/bubbles2.png';
import fishBubble1 from './../assets/images/fish-bubble1.png';
import fishBubble2 from './../assets/images/fish-bubble2.png';
import fishBubble3 from './../assets/images/fish-bubble3.png';
import fishBubble4 from './../assets/images/fish-bubble4.png';

const Roadmap = () => {
  function bubbles() {
    const bubbles = document.querySelectorAll('.bubbles');

    const removeToTopTime = 2500;
    const removeOpacityTime = 1700;
    const addActiveClassTime = 8000;

    const removeToTop = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.remove('bubbles--to-top');
        });

        addActiveClass();
      }, removeToTopTime);
    };

    const removeOpacity = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.remove('bubbles--opacity');
        });

        removeToTop();
      }, removeOpacityTime);
    };

    const addActiveClass = () => {
      setTimeout(() => {
        bubbles.forEach((bubble) => {
          bubble.classList.add('bubbles--to-top');
          bubble.classList.add('bubbles--opacity');
        });

        removeOpacity();
      }, addActiveClassTime);
    };

    addActiveClass();
  }

  function fish() {
    const fish = document.querySelector('.fish'),
      fishWrapper = document.querySelector('.fish-wrapper');

    let pageScrollFromTop; // начальное определение позиции элемента
    let isAddedPageScrollFromTop = false; // если уже есть начальное определение, то становиться true
    let x = 0; // значение движения рыбки по оси x
    let y = 0; // значение движения рыбки по оси y
    let isScale = false; // нужно ли разворачивать рыбку, или нет
    const delay = 200; // задержка перед началом движения рыбки

    // в каких диапазонах и на сколько рыбка будет двигаться
    const movement = [
      {
        diapasonStart: 0,
        diapasonEnd: 200,
        yValue: -45,
        xValue: 0,
        isScaleValue: false,
      },
      {
        diapasonStart: 200,
        diapasonEnd: 400,
        yValue: -35,
        xValue: 240,
        isScaleValue: true,
      },
      {
        diapasonStart: 400,
        diapasonEnd: 800,
        yValue: 180,
        xValue: -300,
        isScaleValue: false,
      },
      {
        diapasonStart: 800,
        diapasonEnd: 1100,
        yValue: 380,
        xValue: 230,
        isScaleValue: true,
      },
      {
        diapasonStart: 1100,
        diapasonEnd: 1350,
        yValue: 650,
        xValue: -320,
        isScaleValue: false,
      },
      {
        diapasonStart: 1350,
        diapasonEnd: 1450,
        yValue: 760,
        xValue: -20,
        isScaleValue: true,
      },
    ];

    const elRectTop = fish.getBoundingClientRect().top;
    window.addEventListener('scroll', async () => {
      // если мы будем ниже элемента на delay, то рыбка будет двигаться
      if (elRectTop - window.scrollY - window.innerHeight + delay < 0) {
        if (!isAddedPageScrollFromTop) {
          isAddedPageScrollFromTop = true;
          pageScrollFromTop = window.scrollY;
        }

        movement.forEach(async (move, ind) => {
          if (
            window.scrollY - pageScrollFromTop >= move.diapasonStart &&
            window.scrollY - pageScrollFromTop < move.diapasonEnd
          ) {
            if (
              (y === movement[ind - 1]?.yValue && x === movement[ind - 1]?.xValue) ||
              (y === movement[ind + 1]?.yValue && x === movement[ind + 1]?.xValue)
            ) {
              y = move.yValue - 1;
              x = move.xValue - 1;

              await setTimeout(() => {
                y = move.yValue;
                x = move.xValue;

                isScale = move.isScaleValue;
                fishWrapper.style.transform = `translate(${x}px,${y}px)`;
                fish.style.transform = `${isScale ? 'scale(-1,1)' : ''}`;
              }, 250);
            }
          }
        });
      } else {
        // начальная позиция рыбки
        console.log('qwe');
        x = 0;
        y = -45;

        isScale = false;
        fishWrapper.style.transform = `translate(${x}px,${y}px)`;
        fish.style.transform = `${isScale ? 'scale(-1,1)' : ''}`;
      }
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
              <img className="bubbles bubbles--first " src={bubbles1} alt="bubbles" />
              <img className="bubbles  bubbles--second  " src={bubbles2} alt="bubbles" />
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

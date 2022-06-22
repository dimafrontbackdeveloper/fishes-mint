import ReactDOM from 'react-dom';

import Header from './components/Header';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

// подключаю файл .css, так как не выходит поключить .scss
import './scss/style.scss';

// при перезагрузке страница будет в верху (чтобы не ломался скрипт в roadmap на движение рыбки)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import Product from './Product';
import Nout from './img/nout.png';
import Car from './img/car.png';
import Scooter from './img/csooter.webp';
import Korz from './img/korz.png'

 import Maska from './img/maska.png'
import Mobile from './img/mobile.png'
import Monik from './img/monik.png'


const App = () => {
  return (
    
    
    
    <div className=' wrapper'>

      <div className="nav">
        <h3>Intocode Coding Shopcamp</h3>
        <p>Гаджеты и аксессуары <hr /></p>
        <p>Бытовая техника<hr /></p>
        <p>Прочее <hr /></p>
      </div>

      <div className="container">

      <div className="block one ">
           <img src= {Nout} alt="Ноутбук" />
      < Product  price = "33400 P" name = "NoutBook"  />
             <button>купить</button>
             </div>


            <div className="block two">
             <img src= {Car} alt="Стиральная машина" />
      < Product  price = "25300 P" name = "Стиральная машина"  />
             <button>купить</button>
             </div>


          <div className="block three">
             <img src= {Scooter} alt="Скутер" />
      < Product  price = "79000 p" name = "Скутер"  />
             <button>купить</button>
             </div>

             <div className="block foo">
             <img src= {Monik} alt="Монитор" />
      < Product  price = "29000 p" name = "Монитор"  />
             <button className='monik-button'>Нет в наличии</button>
             </div>

             <div className="block five">
             <img src= {Maska} alt="Маска" />
      < Product  price = "3500 p" name = "Маска"  />
             <button>купить</button>
             </div>

             <div className="block six">
             <img src= {Mobile} alt="Телефон" />
      < Product  price = "16900 p" name = "Телефон"  />
             <button>купить</button>
             </div>


             </div>
             <div className="product-korz">
              <img src={Korz} alt="корзинка" />
             </div>
     </div>
    
  );
};

export default App;
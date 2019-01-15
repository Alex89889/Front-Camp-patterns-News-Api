'use strict';

import "./style.css";
 
import FactoryReguest from "./factory.js";
let  source = new FactoryReguest('sourse');
let news = new FactoryReguest('news');

import('./error.js')
  .then(module => {
   // module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });


  





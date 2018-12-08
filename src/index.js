'use strict';

import "./style.css";
 
import FactoryReguest from "./factory.js";
let  source = new FactoryReguest('request', 'https://newsapi.org/v2/sources?apiKey=a09253e9d8614d7f86d01ec6998b70de');
//source.printSource();

//let news = new News('request');
//news.printNews();

import Logging from "./error.js";
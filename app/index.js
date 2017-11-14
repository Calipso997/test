import './style/style.scss';
import 'bootstrap';
import $ from 'jquery';
import moment from 'moment';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import AOS from '../node_modules/aos/dist/aos.js';
import 'tether';


const port = 3000;
const apiUri = `http://localhost:${port}`;

AOS.init();
// AOS.refresh();
// AOS.init({
//     duration: 1200,
// })

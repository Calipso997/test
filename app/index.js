import './style/style.scss';
import 'bootstrap';
import $ from 'jquery';
import moment from 'moment';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import AOS from 'aos';
import 'tether';
import 'popper.js';

AOS.init({
    disable: window.innerWidth < 479
});

const port = 3000;
const apiUri = `http://localhost:${port}`;



// import portfolioPict from '../img/portfolioPict.JPG';
// import


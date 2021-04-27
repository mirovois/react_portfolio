import item1 from "./images/banking_JS.jpg";
import item2 from "./images/googleBooks_JS.jpg";
import item3 from "./images/covid19Tracker_JS.jpg";
import item4 from "./images/pdj_React.jpg";
import item5 from "./images/portfolio_React.jpg";
import item6 from "./images/amazon_React.jpg";
import item7 from './images/movie_React.jpg';
import item8 from './images/weather_JS.jpg'
import item9 from './images/ebakery.jpg'
import item10 from './images/auth.jpg'
import iconJS from "./images/iconJS.svg";
import iconReact from "./images/iconReact.svg";

const cardsInfo = [
  {
    id: 9,
    name: "E-commerce Bakery",
    image: item9,
    desc:
      "React e-commerce scalable app with express framework serving as a backend. MongoDB is used as database. Redux library as a  tool for state management.",
    source: "https://github.com/mirovois/React-Redux-estore/tree/master",
    link: "https://estore-app-miro.herokuapp.com/",
    icon: iconReact,
  },
  {
    id: 10,
    name: "Login and Signup",
    image: item10,
    desc:
      "Developed functionality for login and signup with with validation , error handling. Used MongoDB and Nodejs for manipulating and storing users' credentials ",
    source: "https://github.com/mirovois/authentification-authorization-NodejsMongoReact",
    link: "https://auth-app-miro.herokuapp.com/",
    icon: iconReact,
  },
  {
    id: 3,
    name: "Movie App",
    image: item7,
    desc:
      "An application for searching movies and related information using powerful TMDb API. The state is managed with Context API. By using special NPM packages we can fetch youtube trailers for any movie. ",
    source: "https://github.com/mirovois/movie-finder-React",
    link: "https://movie-app-miro.netlify.app/",
    icon: iconReact,
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: item5,
    desc:
    "A single page responsive portfolio website. Custom styles and Material UI library are used. The backend is represented by Express.js and Nodemailer.",
    source: "https://github.com/mirovois/react_portfolio",
    link: "https://miro-portfolio.netlify.app/",
    icon: iconReact,
  },
  {
    id: 1,
    name: "Amazon Clone",
    image: item6,
    desc:
      "A scalable full stack E-commerce website built using ReactJS with backened aimed to process payments using Stripe API. Data is stored and processed in cloud database supported by Firebase.",
    source: "https://github.com/mirovois/amazon-clone",
    link: "https://clone-3bf30.web.app/",
    icon: iconReact,
  },
  {
    id: 4,
    name: "Order Service",
    image: item4,
    desc:
      "A single-page responsive application, which helps a customer to order breakfast. Data is managed by Context API. Material UI library was for layout and styling components.",
    source: "https://github.com/mirovois/order-service-app",
    link: "https://order-service-app.netlify.app/",
    icon: iconReact,
  },
  {
    id: 5,
    name: "Weather App",
    image: item8,
    desc:
      "A simple weather application for defining weather all around the globe with built-in geolocating functionality.",
    source: "https://github.com/mirovois/JS_weather-app",
    link: "https://googlebooks-api.netlify.app/",
    icon: iconJS,
  },
  {
    id: 6,
    name: "Google Books API",
    image: item2,
    desc:
      "A search application with requests to third-party API - Google Books API. Application was bundled using WebPAck",
    source: "https://github.com/mirovois/GoogleBooks_project",
    link: "https://googlebooks-api.netlify.app/",
    icon: iconJS,
  },
  {
    id: 7,
    name: "COVID-19 Tracker",
    image: item3,
    desc:
      "A simple application for monitoring COVID-19 stats up to date. Used fetchAPI to make external calls to API",
    source: "https://github.com/mirovois/covid-19-app-JavaScript",
    link: "https://covid19-js-app.netlify.app/",
    icon: iconJS,
  },
  {
    id: 8,
    name: "Banking App",
    image: item1,
    desc:
      "A simple application on Vanilla JS, built using module architecture.",
    source: "https://github.com/mirovois/banking_app",
    link: "https://banking-app.netlify.app/",
    icon: iconJS,
  },
];
export default cardsInfo;

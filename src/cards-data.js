import item1 from "./images/banking_JS.jpg";
import item2 from "./images/googleBooks_JS.jpg";
import item3 from "./images/covid19Tracker_JS.jpg";
import item4 from "./images/pdj_React.jpg";
import item5 from "./images/portfolio_React.jpg";
import item6 from "./images/amazon_React.jpg";
import iconJS from "./images/iconJS.svg";
import iconReact from "./images/iconReact.svg";

const cardsInfo = [
  {
    id: 1,
    name: "Amazon Clone",
    image: item6,
    desc:
      "A scalable full stack E-commerce website built using ReactJS with backened aimed to process payments using Stripe API. For data storage is used real time cloud database supported by Firebase.",
    source: "https://github.com/mirovois/amazon-clone",
    link: "https://clone-3bf30.web.app/",
    icon: iconReact,
  },
  {
    id: 2,
    name: "Portfolio Website",
    image: item5,
    desc:
      "A single page responsive portfolio website. Material UI library paired with custom styles are used for styling components. ",
    source: "https://github.com/mirovois/react_portfolio",
    link: "https://miro-portfolio.netlify.app/",
    icon: iconReact,
  },
  {
    id: 3,
    name: "Order Service",
    image: item4,
    desc:
      "A single-page responsive application, which helps a customer to order breakfast. Data is managed by Context API. Used Material UI library for constructing and styling components.",
    source: "https://github.com/mirovois/order-service-app",
    link: "https://order-service-app.netlify.app/",
    icon: iconReact,
  },
  {
    id: 4,
    name: "Google Books API",
    image: item2,
    desc:
      "A search application with requests to third-party API - Google Books API. Application was bundled using WebPAck",
    source: "https://github.com/mirovois/GoogleBooks_project",
    link: "https://googlebooks-api.netlify.app/",
    icon: iconJS,
  },
  {
    id: 5,
    name: "COVID-19 Tracker",
    image: item3,
    desc:
      "A simple application for monitoring COVID-19 stats up to date. Used fetchAPI to make external calls to API",
    source: "https://github.com/mirovois/covid-19-app-JavaScript",
    link: "https://covid19-js-app.netlify.app/",
    icon: iconJS,
  },
  {
    id: 6,
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

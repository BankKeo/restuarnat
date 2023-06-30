import "./App.css";
import Banner from "./assets/images/banner.jpeg";

const data = [
  {
    image: Banner,
    foodName: "Hamburgur",
    description: "A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll",
  },
  {
    image: Banner,
    foodName: "Sandwich",
    description: "A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll",
  },
  {
    image: Banner,
    foodName: "Rice",
    description: "A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll",
  },
];

function App() {
  return (
    <div>
      {/* navbar */}
      <div className="navbar">
        <h3>Jennie Food</h3>
        <ul className="list-menu">
          <li>Home</li>
          <li>Dishes</li>
          <li>About</li>
          <li>Menu</li>
          <li>Order</li>
        </ul>
        <div className="signup-button">SIGN UP</div>
      </div>

      {/* hero */}
      <div className="hero">
        <div className="image-banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="spacer"></div>
        <div className="detail">
          <div>Order Food</div>
          <div>Any Time </div>
          <div>Every Where</div>
          <h4 className="order-button">Order Now</h4>
        </div>
      </div>

      {/* food list */}
      <div className="food-lists">
        <div className="title">Our Special Dish</div>
        <div className="food-list">
          <div class="container">
            <img src={Banner} alt="banner" />
            <h3>Hamburgur</h3>
            <p>A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll</p>
          </div>
          <div class="container">
            <img src={Banner} alt="banner" />
            <h3>Hamburgur</h3>
            <p>A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll</p>
          </div>
          <div class="container">
            <img src={Banner} alt="banner" />
            <h3>Hamburgur</h3>
            <p>A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll</p>
          </div>
          <div class="container">
            <img src={Banner} alt="banner" />
            <h3>Hamburgur</h3>
            <p>A Hamburgur, or simply burgur is a food consisting of filling--usually a partty of ground meat, typically beef--placed inside a sliced bun or bread roll</p>
          </div>
        </div>
      </div>

      {/* intro food list */}
      <div className="intro-food-lists">
        <div className="title">Spicy Noodles</div>
        <div className="food-list">
          {data.map((item) => (
            <div class="container">
              <img src={item.image} alt="banner" />
              <h3>{item.foodName}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

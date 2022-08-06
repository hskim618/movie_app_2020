import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt="{name}" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1280px-Samgyeopsal-gui.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg",
    rating: 4.92,
  },
  {
    id: 4,
    name: "Dongcasu",
    image: "https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C",
    rating: 3.89,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg.webp",
    rating: 4.99,
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

function Food({ name, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1280px-Samgyeopsal-gui.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg",
  },
  {
    name: "Dongcasu",
    image: "https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C",
  },
  {
    name: "Kimbap",
    image:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2015/07/Kimbap-Korean-Sushi-DSC05900-1-2.jpg.webp",
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;

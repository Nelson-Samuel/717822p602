import { useEffect,useState } from "react";
const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('http://20.244.56.144/numbers/fibo')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.numbers);
        setPhotos(data.numbers);
      });
  }, []);
  const store = (fibo) => {
    return fibo.map(name => <li>{name}</li>)
  }

  return (
    <div className="App">
      <h1>Fibo</h1>
      <ul>
        {store (photos)}
      </ul>
      
    </div>
  );
};

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Fish from './components/Fish/Fish';



function App() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      .then(res => res.json())
      .then(data => setMeal(data.meals))
  }, [])
  return (
    <div className="App container mt-5">
      <Row xs={1} md={4} className="g-4">
        {
          meal.map(ml => <Fish meal={ml}></Fish>)
        }
      </Row>
    </div>
  );
}

export default App;
// https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=9133eceed14b4555be0d2def92bec2f6

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
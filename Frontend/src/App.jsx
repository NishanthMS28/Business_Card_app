import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateCard from "./Components/CreateCard";
import Cards from "./Components/Cards";

function App() {
  const [cards, setCards] = useState([]);

  fetch("http://localhost:3000/cards").then(async (res) => {
    const json = await res.json();
    setCards(json.cards);
  });

  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<CreateCard />} />
    //       <Route path="/cards" element={<Cards cards={cards} />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <CreateCard />
      <Cards cards={cards} />
    </div>
  );
}

export default App;

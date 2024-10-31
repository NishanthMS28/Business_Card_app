import "./Cards.css";

function Cards({ cards }) {
  async function deleteCard(cardID) {
    await fetch("http://localhost:3000/deleteCard", {
      method: "DELETE",
      body: JSON.stringify({
        id: cardID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Card deleted");
  }

  return (
    <div className="cardWrapper">
      {cards.map((card) => (
        <div key={card.id || card.name} className="cardContainer">
          <h2 className="name">{card.name}</h2>
          <p className="description">{card.description}</p>
          <h3 className="interestsTitle">Interests</h3>
          <p className="interests">{card.interests}</p>
          <a
            href={card.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkButton"
          >
            LinkedIn
          </a>
          <a
            href={card.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="linkButton"
          >
            Twitter
          </a>
          <button onClick={() => deleteCard(card._id)} className="deleteButton">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;

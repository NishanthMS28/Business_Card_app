import { useState } from "react";
import "./CreateCard.css";

function CreateCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  async function addingCard() {
    if (!name || !description) {
      alert("Name and Description are required!");
      return;
    }

    const response = await fetch("http://localhost:3000/card", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        interests: interests,
        linkedin: linkedin,
        twitter: twitter,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    alert("Card added");

    setName("");
    setDescription("");
    setInterests("");
    setLinkedin("");
    setTwitter("");
  }

  return (
    <div>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        id="interests"
        type="text"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        placeholder="Interests"
      />
      <input
        id="linkedin"
        type="text"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        placeholder="Linkedin profile"
      />
      <input
        id="twitter"
        type="text"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
        placeholder="Twitter profile"
      />
      <button id="submitButton" onClick={addingCard}>
        Create Card
      </button>
    </div>
  );
}

export default CreateCard;

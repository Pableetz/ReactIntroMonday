import axios from "axios";
import React, { useEffect, useState } from "react";
import AffichageJokes from "../AffichageJokes/AffichageJokes";

const Jokes = () => {
  const [jokes, setJokes] = useState("");

  const getJokes = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    setJokes(response.data.value);
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <button onClick={getJokes}>Get Jokes</button>
      <AffichageJokes blague={jokes} />
    </div>
  );
};

export default Jokes;

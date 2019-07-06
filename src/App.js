import React, { useState } from "react";
import api from "./services/api";

export default function App() {
  const [repositorios, setRepositorios] = useState([
    { id: 1, name: "Repo 1" },
    { id: 2, name: "Repo 2" },
    { id: 3, name: "Repo 3" }
  ]);
  return (
    <ul>
      {repositorios.map(repositorio => (
        <li key={repositorio.id}>{repositorio.name}</li>
      ))}
    </ul>
  );
}

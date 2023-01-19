import React, { ChangeEvent, SetStateAction, useState } from "react";
import Form from "./components/Form";
import User from "./components/User";
import "./App.css";
import styled from "styled-components";

const API_URL = "https://api.github.com";

const fetchResults = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items;
  } catch (e: any) {
    throw new Error(e);
  }
};

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  };

  interface User {
    login: string;
    avatar_url: string;
    html_url: string;
  }

  const ResultsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  `;

  return (
    <div className="app">
      <h2>GitHub - User Search</h2>
      <Form onChange={onSearchChange} onSubmit={onSearchSubmit} value={query} />
      <h3>Results:</h3>
      <ResultsContainer>
        {results.map((user: User) => (
          <User
            key={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            username={user.login}
          />
        ))}
      </ResultsContainer>
    </div>
  );
}

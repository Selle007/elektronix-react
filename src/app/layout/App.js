import React from "react";
import { Routes, useLocation } from 'react-router-dom';
import './App.css';
import AppRouter from "../rotuer/router";

function App() {
  const location = useLocation();
  return (
    <>
    <AppRouter />
    </>
  );
};

export default App;

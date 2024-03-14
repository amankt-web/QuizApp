// App.js

import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Homepage';
import Quiz from './components/Quizlisting';
import QuizDetails from './components/QuizDetails';
import QuizPlay from './components/QuizPlay';
import Score from './components/ScoreDisplay';

const router = createBrowserRouter([
  {
    path :"/",
    element : <Home></Home>
  },

  {
    path :"/quiz",
    element : <Quiz></Quiz>
  },

  {
    path :"/quiz/:id",
    element : <QuizDetails></QuizDetails>
  },

  {
    path :"/quiz/play/:id",
    element : <QuizPlay></QuizPlay>
  },

  {
    path :"/score",
    element : <Score></Score>
  },

]);
function App(){
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;

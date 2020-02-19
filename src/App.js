import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

// React Hook, React Context

const App = () => {
  const [goalListArray, setGoalListArray] = useState([
    { id: "cg1", text: "Refresh react knowlegde" },
    { id: "cg2", text: "Complete react project" },
    { id: "cg3", text: "Complete flutter project" }
  ]);
  const addNewGoalHandler = newGoal => {
    setGoalListArray(prevGoalArray => prevGoalArray.concat(newGoal));
  };
  return (
    <div className="main">
      <h1>Goal List</h1>
      <NewGoal addNewGoal={addNewGoalHandler} />
      <GoalList goals={goalListArray} />
    </div>
  );
};

export default App;

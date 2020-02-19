import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState("");
  const onFormSubmit = event => {
    event.preventDefault();
    props.addNewGoal({ id: Math.random.toString(), text: enteredText });
    setEnteredText("");
  };
  const onTextChange = event => {
    setEnteredText(event.target.value);
  };
  return (
    <form className="new-goal-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="newGoalText"
        value={enteredText}
        onChange={onTextChange}
      />
      <button type="submit">Add New Goal</button>
    </form>
  );
};

export default NewGoal;

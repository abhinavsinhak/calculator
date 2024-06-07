import { useState } from "react";
import InputField from "./component/InputField";
import Button from "./component/Button";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (label) => {
    console.log(label);
    if (label === "=") {
      try {
        setInputValue(eval(inputValue)); // Note: eval can be dangerous, consider safer alternatives.
      } catch (e) {
        setInputValue("Error");
      }
    } else if (label === "C") {
      setInputValue("");
    } else {
      setInputValue(inputValue + label);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <>
      <div className="calculator">
        <h1>Calculator</h1>
        <InputField value={inputValue} />
        <div className="button-grid">
          {buttons.map((label, index) => (
            <Button key={index} label={label} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

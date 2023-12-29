"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import {
  Cancel,
  Divide,
  Equal,
  Minus,
  Percent,
  Plus,
  PlusMinus,
  Time,
} from "@/components/icons";
import Wrapper from "./Wrapper";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value: any) => {
    if (value === "C") {
      // Clear the calculator
      setDisplay("0");
      setCurrentInput("");
      setOperator(null);
    } else if (value === "=") {
      // Perform calculation
      if (currentInput !== "" && operator !== null) {
        const result = calculate(
          parseFloat(currentInput),
          parseFloat(display),
          operator
        );
        setDisplay(result.toString());
        setCurrentInput(result.toString());
        setOperator(null);
      }
    } else if (value === "%") {
      // Calculate percentage
      const percentage = parseFloat(display) / 100;
      setDisplay(percentage.toString());
      setCurrentInput(percentage.toString());
    } else if (value === "+/-") {
      // Toggle positive/negative
      setDisplay((prevDisplay) => (parseFloat(prevDisplay) * -1).toString());
    } else if (isDigit(value) || value === ".") {
      // Handle digits and decimal point
      if (operator) {
        setDisplay((prevDisplay) =>
          prevDisplay === "0" ? value : prevDisplay + value
        );
      } else {
        setDisplay((prevDisplay) =>
          prevDisplay === "0" ? value : prevDisplay + value
        );
        setCurrentInput((prevInput) => prevInput + value);
      }
    } else {
      // Handle operators
      if (currentInput !== "" && operator !== null) {
        const result = calculate(
          parseFloat(currentInput),
          parseFloat(display),
          operator
        );
        setDisplay(result.toString());
        setCurrentInput(result.toString());
      }
      setOperator(value);
      setDisplay("0");
    }
  };

  const isDigit = (value: any) => /\d/.test(value);

  const calculate = (operand1: any, operand2: any, operator: any) => {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      default:
        return operand2;
    }
  };

  const listButton = [
    {
      value: "C",
      color: "grey",
      icon: <Cancel />,
    },
    {
      value: "+/-",
      color: "grey",
      icon: <PlusMinus />,
    },
    {
      value: "%",
      color: "grey",
      icon: <Percent />,
    },
    {
      value: "/",
      color: "orange",
      icon: <Divide />,
    },
    {
      value: "7",
      color: "default",
      icon: null,
    },
    {
      value: "8",
      color: "default",
      icon: null,
    },
    {
      value: "9",
      color: "default",
      icon: null,
    },
    {
      value: "*",
      color: "orange",
      icon: <Time />,
    },
    {
      value: "4",
      color: "default",
      icon: null,
    },
    {
      value: "5",
      color: "default",
      icon: null,
    },
    {
      value: "6",
      color: "default",
      icon: null,
    },
    {
      value: "-",
      color: "orange",
      icon: <Minus />,
    },
    {
      value: "1",
      color: "default",
      icon: null,
    },
    {
      value: "2",
      color: "default",
      icon: null,
    },
    {
      value: "3",
      color: "default",
      icon: null,
    },
    {
      value: "+",
      color: "orange",
      icon: <Plus />,
    },
    {
      value: "0",
      color: "default",
      icon: null,
    },
    {
      value: ".",
      color: "default",
      icon: null,
    },
    {
      value: "=",
      color: "orange",
      icon: <Equal />,
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="text-white/80 text-3xl font-semibold mb-6 text-right">
          operator: {operator} <br />
          current: {currentInput} <br />
          {display}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {listButton.map((item, idx) => (
            <Button
              key={idx}
              // @ts-ignore
              color={item.color}
              className={item.value === "0" ? "col-span-2" : ""}
              fullWidth={item.value === "0"}
              onClick={() => handleButtonClick(item.value)}
            >
              {item.icon ? item.icon : item.value}
            </Button>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Calculator;

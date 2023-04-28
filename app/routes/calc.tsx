import { useState } from "react";
import Button from "~/components/button";
export default function Calc() {
  const [valueA, setValueA] = useState<number>(0);
  const [valueB, setValueB] = useState<number>(0);
  const [operator, setOperator] = useState<string>("+");
  const data = [{ name: "bingchlling" }];
  function calc(val1: number, val2: number, operator: string) {
    switch (operator) {
      case "+":
        return val1 + val2;
      case "-":
        return val1 - val2;
      case "*":
        return val1 * val2;
      case "/":
        return val1 / val2;
      default:
        return 0;
    }
  }

  return (
    <div>
      <div className="flex w-64 flex-col gap-2">
        <input
          type="number"
          className="rounded-md border-2 border-black px-2 py-1"
          onChange={(e) => {
            setValueA(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          className="rounded-md border-2 border-black px-2 py-1"
          onChange={(e) => {
            setValueB(parseInt(e.target.value));
          }}
        />

        <button
          className={`${
            operator === "+" ? " text-white bg-red-800" : "bg-white"
          }`}
          onClick={(data) => {
            return { data };
          }}
        >
          +
        </button>
        <button
          className={`${operator === "-" ? "bg-red-800" : "bg-white"}`}
          onClick={() => {
            setOperator("-");
          }}
        >
          -
        </button>

        <button
          className={`${operator === "/" ? "bg-red-800" : "bg-white"}`}
          onClick={() => {
            setOperator("/");
          }}
        >
          /
        </button>

        <button
          className={`${operator === "*" ? "bg-red-800" : "bg-white"}`}
          onClick={() => {
            setOperator("*");
          }}
        >
          *
        </button>

        <p className="text-white">
          <b className="text-white">Summe=</b>: {calc(valueA, valueB, operator)}
        </p>
      </div>
    </div>
  );
}

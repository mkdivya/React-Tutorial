import React from "react";

const SpreadOperator = () => {
  const employee = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Doe",
      age: 25,
    },
  ];


        const newEmployee = [...employee, { name: "Smith", age: 35 }];
        console.log(newEmployee);
  return (
    <div>
      <h3>Spread Operator</h3>

    </div>
  );
};
export default SpreadOperator;

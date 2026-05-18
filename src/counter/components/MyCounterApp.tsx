import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(10);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleSubtract}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

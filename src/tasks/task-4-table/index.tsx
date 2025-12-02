import React from "react";
import data from "../../../data/task-4-data.json";

/**
 * Task starter component.
 * Implement your solution in this file for the task.
 */

export default function Task4(): React.JSX.Element {
  return (
    <div style={{ padding: 24 }}>
      <h1>Task (implement here)</h1>
      <p>Open the corresponding README.md to view the task prompt.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

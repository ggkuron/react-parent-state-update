import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export function Parent() {
  const [state, updater] = React.useState(new Map([[0, 0], [1, 0]]));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {
        Array.from(state.entries()).map(
          ([id, v]) =>
            <Child
              key={id}
              id={id}
              value={v}
              updater={updater}
            />
        )
      }
    </div>
  )
}

function Child({
  id,
  value,
  updater,
}) {
  const handleClick = React.useCallback(() =>
    updater(prev => new Map([...prev.entries(), [id, prev.get(id) + 1]])),
    [id, updater]
  )
  return (
    <div>
      <span>{value}</span>
      <button
        onClick={handleClick}
      >update</button>
    </div>
  )
}

export default App;

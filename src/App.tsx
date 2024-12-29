import { useMemo, useState } from "react";
import "./App.css";

const INITIAL_LIVES_COUNT = 3;
const INITIAL_CHAMBERS_COUNT = 6;

function App() {
  const [count, setCount] = useState(0);
  const [livesRemaining, setLivesRemaining] = useState(INITIAL_LIVES_COUNT);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div>Lives remaining: {livesRemaining}</div>
        <BulletsViz chambersCount={INITIAL_CHAMBERS_COUNT} />
        <button>Blank</button>
        <button>Live</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function BulletsViz({ chambersCount }: { chambersCount: number }) {
  const chambers = useMemo(() => {
    return Array.from({ length: chambersCount });
  }, [chambersCount]);
  return (
    <>
      <div>Bullets Viz</div>
      <div>
        {chambers.map((_, index) => {
          return <button>Chamber {index}</button>;
        })}
      </div>
    </>
  );
}

export default App;

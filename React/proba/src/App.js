import Hello from "./Hello";
import MultiHello from "./MultiHello";

function App() {
  const name = undefined;
  return (
    <div className="App">
      {name ? <p>{name}</p> : <p>No Name</p>}
      {/* Hello.js komponens kirajzolasa */}
      Elso Hello: <Hello age={33} />
      {/* MultiHello az `num` szamu komponenst fog kirajzolni */}
      <hr />
      MultiHello:
      <MultiHello number={12} />
    </div>
  );
}

export default App;

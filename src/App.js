import "./Dist/App.css";
import Random from "./Components/Random";
import Homepage from "./Routes/Homepage";
import Attribution from "./Components/Attribution";

function App() {
  return (
    <main className="App">
      {/* <Random /> */}
      <Homepage />
      <Attribution />
    </main>
  );
}

export default App;

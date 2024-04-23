import Operators from "./Operators";
import Input from "./components/Input";
import Numbers from "./components/Numbers";

function App() {
  return (
    <div className="App">
      <h1>MY CALCULATOR</h1>
      
      <Input/>
      <Operators/>
      <Numbers/>
      
    </div>
  );
}

export default App;

import Operators from "./Operators";
import Header from "./components/Header";
import Input from "./components/Input";
import Numbers from "./components/Numbers";

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <Operators/>
      <Numbers/>
      
    </div>
  );
}

export default App;

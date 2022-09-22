import "./App.css";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Navigation from "./components/Nav/Navigation";
import Container from "./container/Container";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container/>
    </div>
  );
}

export default App;

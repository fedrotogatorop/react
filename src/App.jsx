import "./App.css";
import Article from "./components/Article";
import Home from "./pages/index";
// import "./components/Article";
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Article name="Fedro" titles={["react", "nextJS", "NodeJS"]} />
      <Article name="Togatorop" titles={["Javascript", "PHP"]}></Article> */}
    </div>
  );
}

export default App;

import "./App.css";
import Article from "./components/Article";
// import "./components/Article";
function App() {
  return (
    <div className="App">
      {/* <Article name="Fedro" /> */}
      <Article name="Fedro" titles={["VueJS", "NodeJS", "TypeSkript"]} />
      <br />
      {/* <Article name="Togatorop" titles={["ReactJS", "NextJS"]} /> */}
    </div>
  );
}

export default App;

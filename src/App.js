import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        Coded by{" "}
        <a
          href="https://github.com/feralderetes/"
          target="_blank"
          rel="noreferrer"
          title="Github profile"
        >
          Fer Alderetes
        </a>{" "}
        👩🏻‍💻, open-sourced on{" "}
        <a
          href="https://github.com/feralderetes/dictionary-by-fer/"
          target="_blank"
          rel="noreferrer"
          title="Github repository"
        >
          Github
        </a>{" "}
        and hosted on
        <a
          href="https://dictionary-by-fer.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Netlify hosted website"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

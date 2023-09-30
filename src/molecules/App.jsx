import List from "../atoms/List/List";
import Form from "../atoms/Form/Form";

function App() {
  return (
    <>
      <div class="wrapper">
        <h1>Finance Logger</h1>

        <List />
      </div>
      <footer>
        <Form />
      </footer>
    </>
  );
}

export default App;

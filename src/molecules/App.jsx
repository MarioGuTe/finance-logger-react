import { useState } from "react";
import List from "../atoms/List/List";
import Form from "../atoms/Form/Form";

function App() {
  const [newLog, setNewLog] = useState([]);

  function updateLogInfo(formData) {
    return setNewLog((currentData) => {
      return [...currentData, formData];
    });
  }

  console.log(newLog);
  return (
    <>
      <div className="wrapper">
        <h1>Finance Logger</h1>
        <List logInfo={newLog} />
      </div>
      <footer>
        <Form formData={updateLogInfo} />
      </footer>
    </>
  );
}

export default App;

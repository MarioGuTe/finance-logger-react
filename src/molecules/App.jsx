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

  function deleteLog(id) {
    setNewLog((currentData) => {
      return currentData.filter((newLog) => newLog.id !== id);
    });
  }

  console.log(newLog);
  return (
    <>
      <div className="wrapper">
        <h1>Finance Logger</h1>
        <List logInfo={newLog} onClickItem={deleteLog} />
      </div>
      <footer>
        <Form formData={updateLogInfo} />
      </footer>
    </>
  );
}

export default App;

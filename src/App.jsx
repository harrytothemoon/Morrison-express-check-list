import "./App.css";
import mockData from "./mockData";

function App() {
  const renderHeader = () => {
    return (
      <tr>
        <th class="checkboxCol">
          <input type="checkbox" />
        </th>
        <th></th>
        <th class="statusCol">狀態</th>
      </tr>
    );
  };
  const renderBody = () => {
    return (
      <tbody>
        {mockData.map(({ id, status, isAvailable }) => (
          <tr key={id}>
            <td>{isAvailable && <input type="checkbox" />}</td>
            <td></td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="App">
      <h1 className="title">Checkboxes List</h1>
      <table className="table">
        <thead>{renderHeader()}</thead>
        {renderBody()}
      </table>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  const renderHeader = () => {
    return (
      <tr>
        <th class="checkboxCol">
          <input type="checkbox" />
        </th>
        <th></th>
        <th>狀態</th>
      </tr>
    );
  };
  const renderBody = () => {
    return (
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td></td>
          <td>00-未派車</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td></td>
          <td>00-未派車</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td></td>
          <td>00-未派車</td>
        </tr>
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

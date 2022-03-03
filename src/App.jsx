import React, { useEffect, useState } from "react";
import mockData from "./mockData";

import "./App.css";

function App() {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [list, setList] = useState([]);

  const handleAllSelected = () => {
    const updatedList = [...list];
    setList(
      updatedList.map(({ isSelected, ...rest }) => ({
        ...rest,
        isSelected: !isAllSelected,
      }))
    );
    setIsAllSelected(!isAllSelected);
  };

  const handleSelect = (index) => () => {
    const updatedList = [...list];
    updatedList[index].isSelected = !updatedList[index].isSelected;

    updatedList.some(({ isSelected }) => isSelected === false)
      ? setIsAllSelected(false)
      : setIsAllSelected(true);

    setList(updatedList);
  };

  const renderHeader = () => {
    return (
      <tr>
        <th className="checkboxCol">
          <input
            type="checkbox"
            onChange={handleAllSelected}
            checked={isAllSelected}
          />
        </th>
        <th></th>
        <th className="statusCol">狀態</th>
      </tr>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {list.map(({ id, status, isAvailable, isSelected }, index) => (
          <tr key={id}>
            <td>
              {isAvailable && (
                <input
                  id={id}
                  onChange={handleSelect(index)}
                  checked={isSelected}
                  type="checkbox"
                />
              )}
            </td>
            <td></td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  useEffect(() => {
    const parseData = mockData.map((data) => ({
      ...data,
      isSelected: false, //init the state
    }));
    setList(parseData);
  }, []);

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

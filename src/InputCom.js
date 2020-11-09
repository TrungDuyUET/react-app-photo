
import React, { useState } from "react";
 
function InputCom() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
 
  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div className="box" style={{display:"flex"}}>
            <input
              name="firstName"
                placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                {inputList.length !== 1 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
 
export default InputCom;
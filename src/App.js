import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 것을 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터 

    let newTodo = {
        id: Date.now(),
        title: value,
        completed: false
    };

    // 원래 있던 할 일 리스트에 새로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
}
  
    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>
              할 일 목록
            </h1>
          </div>
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
          <List todoData={todoData} setTodoData={setTodoData}/>

        </div>
      </div>
    )
  }
import React, { useState } from "react";

const App = () => {
  const [title, setTtile] = useState(" ");
  const [desc, setDesc] = useState(" ");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    setTtile("");
    setDesc("");
  };

  const deleteHandler = (i) =>{
     let copyTask = [...mainTask]
     copyTask.splice(i,1)
     setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;


  if(mainTask.length > 0){
  renderTask = mainTask.map((task, i) => {
    return (
      <li  key={i} class="flex items-center justify-between mb-4" > 
        <div class="flex justify-between mb-5 w-2/3 ">
          <h5 class="text-2xl font-semibold" >{task.title}</h5>
          <h6 class="text-lg font-medium" >{task.desc}</h6>
        </div>
        <button
        onClick={() => deleteHandler(i)}
        class="bg-red-500 text-white font-bold rounded p-5" >Delete</button>
      </li>
    );
  });
}

  return (
    <>
      <h1 class="bg-black text-white text-center text-7xl p-5 font-mono">
        Your TODO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          class="border-2 border-zinc-600 text-2xl m-16 p-5 font-bold font-mono"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            setTtile(e.target.value);
          }}
        />
        <input
          type="text"
          class="border-2 border-zinc-600 text-2xl m-16 p-5 font-mono"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button class="rounded bg-black text-white text-2xl m-8 p-6 font-bold">
          Add Task
        </button>
      </form>
      <hr />
      <div class="bg-slate-200 p-8">
        <ul>{renderTask} </ul>
      </div>
    </>
  );
};

export default App;

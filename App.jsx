import { useEffect, useState } from 'react'
import Navbar from "./components/navbar"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, settodo] = useState("");
  const [finished, setfinished] = useState(true);
  const [todoss, settodoss] = useState(() => {
    let savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoss));
  }, [todoss]);






  const handelEdit = (n) => {
    let ids = n.target.id
    let index = todoss.findIndex(item => item.id === ids)
    settodo(todoss[index].todo)
    let newtodo = [...todoss]
    newtodo.splice(index, 1)
    settodoss(newtodo)
  }

  const handelDelete = (m) => {
    let ids = m.target.id
   console.log(ids)
    let index = todoss.findIndex(item => item.id === ids)
    console.log(index)
    let newtodo = [...todoss]
    newtodo.splice(index, 1)
    settodoss(newtodo)
    settodo("")
  }


  const handelAdd = () => {
    if (todo === "") {
      alert("there is no todos to add")
    } else {
      settodoss([...todoss, { id: uuidv4(), todo, isCompleted: false }])
      settodo("")
    }
  }





  const handelchange = (e) => {
    settodo(e.target.value)
  }



  const handelcheck = (e) => {
    let ids = e.target.id
    let index = todoss.findIndex(item => item.id === ids)
    let newtodo = [...todoss]
    newtodo[index].iscompleted = !newtodo[index].iscompleted
    settodoss(newtodo)
  }


  const handelFinshed = () => {
    setfinished(!finished)
  }







  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[102vw] rounded-md  h-[10vh]  mt-16 bg-gray-300 min-h-[80vh] p-7">
        <h1 className='flex justify-center text-2xl font-bold font-[Poppins] items-center' >I-TASK Add your task </h1>
        <div className='font-semibold font-[Poppins] ml-7'>Add a Todo</div>
        <div className='flex gap-3'>

          <input onChange={handelchange} value={todo} className='ml-7 w-full rounded-xl pl-[1vw]'  type="text" name="" id="" />
          <button onClick={handelAdd} className='font-[Poppins] bg-violet-700 p-3 py-1 text-white rounded-md hover:bg-violet-950'>Save </button>

        </div>
        <input type="checkbox" onChange={handelFinshed} checked={finished} /> show Finished
        <div className='font-semibold font-[Poppins] ml-7  mt-6'>Your todo</div>
        {todoss.length === 0 && <div className='no ml-[3vw] mt-3'>No Todos to display</div>}

        {
          todoss.map(item => {
            
            return (finished || !item.iscompleted) && <div key={item.id} className='flex justify-between -black gap-3 w-[25vw]   my-3 ml-10'>
              <div className='flex gap-9 items-center justify-center'>

                <input type="checkbox" onChange={handelcheck} defaultChecked={item.iscompleted} id={item.id} />
                <div className={item.iscompleted ? "line-through text-md font-medium  font-[Poppins]" : "text-md font-medium font-[Poppins]"} >{item.todo}</div>
              </div>
              <div className='flex gap-2 '>
{console.log(item.id)}
                <button onClick={handelEdit}  id={item.id} className='font-[Poppins] flex items-center justify-center bg-violet-700 p-[3px]  w-[3vw] h-[5vh] text-white rounded-md hover:bg-violet-950'> <FaEdit /></button>
                <button onClick={handelDelete} id={item.id} className='font-[Poppins] bg-violet-700 p-[3px]  w-[3vw] flex justify-center items-center h-[5vh] text-white rounded-md hover:bg-violet-950'><MdDelete/></button>
              </div>
            </div>

          })}

      </div>
    </>
  )
}

export default App

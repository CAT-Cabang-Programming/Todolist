import React, { useState, useRef, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import todo_icon from '../icon/todo_icon.png'
import Todolist from './todolist'

function Add (){
    const [deadline, setDeadline] = useState("")
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();
    const navigate = useNavigate();
    useEffect(()=>{
        axios
        .get("http://localhost:3000/todos/incomplete")
        .then((res)=>{
            setTodoList(res.data.data);
        })
        .catch((err)=> console.error("Gagal ambil data:", err));
    }, []);
    // tambah task baru 
    const addnow = async ()=>{
        const inputText = inputRef.current.value;
        if (!inputText || !deadline) return;
        const newTodo = {
            text: inputText,
            deadline,
            isComplete: false, 
        };
        try{
            const res = await axios.post("http://localhost:3000/todos/add", newTodo);
            setTodoList((prev)=> [...prev, res.data.data]);
            inputRef.current.value = "";
            setDeadline("");
        }catch (error){
            console.error("Gagal menambah todo:", error);
        }
    };
    // Delete task
    const deleteTodo =  async (id) =>{
        try{
            await axios.delete(`http://localhost:3000/todos/${id}`);
            setTodoList((prev)=> prev.filter((todo)=> todo.id !== id));
        }catch(error){
            console.error("Gagal hapus todo:", error);
        }
    };
    // Toggle status complete
    const toggle = async (id) => {
        const todo = todoList.find((t) => t.id === id);
        if (!todo) return;

        try {
            const updatedTodo = { ...todo, isComplete: !todo.isComplete };
            await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo);

            const updatedList = todoList.map((t) =>
                t.id === id ? updatedTodo : t
            );
            setTodoList(updatedList);

      // pindah ke halaman completed jika status complete
            if (updatedTodo.isComplete) {
                setTimeout(() => navigate("/completed"), 200);
            }
        } catch (error) {
            console.error("Gagal update todo:", error);
        }
    };  

    return(
        <div className='bg-sky-100 h-screen pt-30'>
             <div className='flex flex-col w-full '>
                <div className='flex items-center mx-auto gap-2'>
                    <img src={todo_icon} className='w-8 '/>
                    <h1 className='text-4xl font-bold' >To-Do List</h1>
                </div>
                <div className='flex  items-center mt-5 gap-2 mx-auto' >
                    <input ref={inputRef} className='bg-white text-left border-gray-100 border-2 p-4  mt-1 rounded-xl shadow-md w-[300px] max-w-full ' type='text' placeholder='Add your task'></input>
                    <input onChange={(e)=> setDeadline(e.target.value)} className='bg-white text-left border-gray-100 border-2 p-4  mt-1 rounded-xl shadow-md w-[100px] max-w-full ' type='datetime-local' placeholder='Add your Deadline'></input>
                    <button onClick={addnow} className='bg-sky-500 rounded-xl border-none  p-4  mt-1 text-white font-bold cursor-pointer'>ADD +</button>
                </div>
                <div className='mx-auto mt-8' >
                {todoList.map((item, index)=>{
                    return <Todolist key={index} text={item.text} deadline={item.deadline} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                })}
                    
                </div>
             </div>  
        </div>
    )
}
export default Add
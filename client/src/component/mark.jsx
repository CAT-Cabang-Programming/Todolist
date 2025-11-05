import React, { useState, useRef, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import "../index.css";
import todo_icon from "../icon/todo_icon.png";
import Todolist from "./todolist";

function Mark() {
  const [completedTodos, setCompletedTodos] = useState([]);
  const token = localStorage.getItem("token");
  //ambil data yang complete saja
  useEffect(() => {
    axiosInstance
      .get("/todos/completed")
      .then((res) => {
        setCompletedTodos(res.data.data);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, [token]);
  // Delete task complete
  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      setCompletedTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Gagal hapus todo: ", error);
    }
  };
  const toggle = async (id) => {
    const todo = completedTodos.find((t)=> t.id === id);
    if (!todo) return;

    try{
      const updatedTodo = {...todo, isComplete: !todo.isComplete};
      await axiosInstance.put(`/todos/${id}`, updatedTodo);

      if(!updatedTodo.isComplete){
        setCompletedTodos((prev)=> prev.filter((t)=> t.id !== id));
      }
    } catch (error){
      console.error("Gagal ubah jadi incomplete:", error);
    }
  }

  return (
    <div className="bg-sky-100 h-screen pt-30">
      <div className="flex flex-col w-full ">
        <div className="flex items-center mx-auto gap-2">
          <img src={todo_icon} className="w-8 " />
          <h1 className="text-4xl font-bold">Completed Task</h1>
        </div>
        <div className="mx-auto mt-8">
          {completedTodos.length === 0 ? (
            <p className="text-sky-600 text-2xl font-medium">
              Belum ada task selesai 😊
            </p>
          ) : (
            completedTodos.map((item, index) => {
              return (
                <Todolist
                  key={index}
                  text={item.text}
                  deadline={item.deadline}
                  id={item.id}
                  isComplete={item.isComplete}
                  deleteTodo={deleteTodo}
                  toggle={toggle}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default Mark;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import tick from '../icon/check.png'
import not_tick from '../icon/not_tick.png'
import delete_icon from '../icon/delete.png'

function Todolist ({text, deadline, id, isComplete, deleteTodo, toggle}){
     const formattedDeadline = deadline
        ? new Date(deadline).toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    : "";
    return(
        <div className='flex items-center my-3 justify-between border-gray-100 p-4  bg-white rounded-xl w-[500px] max-w-full mx-auto'>
             <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
                <img className='w-7' src={isComplete ? tick : not_tick}/>
                <div className='flex flex-col'>
                    <p className='text-slate-700 ml-4 text-[17px] font-semibold'>{text}</p>
                    {deadline && (
                        <p className={`text-slate-700 ml-4 text-[15px] font-light`}>Deadline: {formattedDeadline}</p>
                    )}
                </div>
                
             </div>

             <img onClick={()=>{deleteTodo(id)}} src= {delete_icon} className='w-4 cursor-pointer ml-4'/>
        </div>
    )
}
export default Todolist
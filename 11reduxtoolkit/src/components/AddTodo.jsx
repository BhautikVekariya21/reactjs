import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/TodoSlice'
import { useState } from 'react'

function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-purple-300 rounded border border-gray-700 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-purple-200 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
}
    
export default AddTodo
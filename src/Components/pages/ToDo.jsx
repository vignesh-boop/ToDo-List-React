import React, { useState } from 'react'
import { DeleteButton, EditButton, TodoButton, TodoContainer, TodoItem, TodoItemContainer, TodoListContainer, TodoText } from '../../styles/toDo'
import { CustonTextField } from '../shared/CustonTextField'
import { useDispatch, useSelector } from 'react-redux';
import { notifyUser } from '../../redux/toSlice';
import { setToDoList } from '../../redux/toSlice';
import CustomButton from '../shared/CustomButton';


export const ToDo = () => {

const toDoData = useSelector((state)=>state.todo.toDoList);

const[toDo , setToDo] = useState("");
const[editIndex,setEditIndex]=useState(null);
const dispatch = useDispatch();

const handleDelete = (index)=>{
const toDoList = [...toDoData];
toDoList.splice(index,1);
dispatch(setToDoList(toDoList));
dispatch(notifyUser({message : "Data is Deleted",type : "success"}))
}

const handleToDo = (value)=>{
    setToDo(value);
}

const handleEdit = (index)=>{
setEditIndex(index);
setToDo(toDoData[index]);
}

const addToDo=()=>{
    if(!toDo){
        dispatch(
            notifyUser({message : "Please Enter the ToDo item",type:"error"})
        )
        return;
    }

    if(editIndex!=null){
        const updatedToDoList = [...toDoData];
        updatedToDoList[editIndex] = toDo;
        dispatch(setToDoList(updatedToDoList));
        setToDo('');
        setEditIndex(null);
        dispatch(notifyUser({message : "Data Updated successfully",type:'success'}))
    }else{
    dispatch(setToDoList([...toDoData,toDo]));
    setToDo("");
    dispatch(notifyUser({message:"Data added successfully",type:"success"}),)
    }
}

  return (
    <>
    <TodoContainer>
    <TodoText>ToDo - List</TodoText>
    <CustonTextField label={"Add your TODO"} type={"text"} value={toDo} handleChange={handleToDo}/>
    <TodoButton onClick={addToDo}>{editIndex!==null?"Update":"Add"}</TodoButton>
    <TodoListContainer>
        {toDoData?.map((item,index)=>(
            <TodoItemContainer key={index}>
                <TodoItem>{item}</TodoItem>
                <CustomButton sx={{marginLeft:"auto"}}>
                    <EditButton onClick={()=>handleEdit(index)}>Edit</EditButton>
                </CustomButton>
                <CustomButton>
                    <DeleteButton onClick={()=>handleDelete(index)}>Delete</DeleteButton>
                </CustomButton>
            </TodoItemContainer>
        ))}
    </TodoListContainer>
    </TodoContainer>

    </>
  )
}







import React, { useEffect, useState } from 'react';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Container, Wrapper, UserActions, UserName, LogoutAction, TodoList, Headings, TodoHeading, StatusHeading, DeleteHeading, InputSection, AddTodo, AddIcon, TodoBody, Todo,
TodoText, Status, NotDoneIcon, DoneIcon, Delete, DeleteIcon } from '../styledComponents/todoListPageStyling.js';
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../Redux/usersSlice'
import axiosInstance from './apiConfig'
import Spinnerpage from '../Components/DisplayTodoSpinner.js';
import TodoSpinner from '../Components/AddTodoSpinner.js';
import StatusSpinner from '../Components/StatusSpinner.js';
import DeleteSpinner from '../Components/DeleteSpinner.js';


const TodoListPage = () => {
    const User = useSelector(state => state.users.userInfo)
   
    const [userTodoList, setuserTodoList] = useState([]);
    const [editCompletionStatus, seteditCompletionStatus] = useState(0);
    const [newInput, setnewInput] = useState("")
    const [reloaderForAddTodoButton, setreloaderForAddTodoButton] = useState(false)
    const [deleteTodo, setdeleteTodo] = useState(false)
    const [displayTodoSpinner, setdisplayTodoSpinner] = useState(false)
    const [addTodoSpinner, setaddTodoSpinner] = useState(false)
    const [completionStatusSpinner, setcompletionStatusSpinner] = useState(false)
    const [deleteTodoSpinner, setdeleteTodoSpinner] = useState(false)


    const dispatch = useDispatch();

    

    useEffect(() => {
        const getAllTodos = async () => {
            setdisplayTodoSpinner(true)
            try {
             const results = await axiosInstance.get(`/getusertodolist/${User.user_id}`);
            setuserTodoList(results.data)
            setdisplayTodoSpinner(false)
             
            } catch (error) {
              console.log(error)
            }  
          }
          
        getAllTodos()
        
      
    }, [editCompletionStatus, reloaderForAddTodoButton, deleteTodo])
    
    
    

    const addButtonHandler = async() => {
        if(newInput!=""){
            setaddTodoSpinner(true)
            await axiosInstance.post(`/new/todo/${User.user_id}`, {"todo": newInput})
            setaddTodoSpinner(false)
            setnewInput("")
            setreloaderForAddTodoButton(!reloaderForAddTodoButton)
        }
    }



    const inputHandler = (e) => {
        setnewInput(e.target.value)
    }


    const logoutHandler = () => {
        dispatch(logout())
        window.location = "/login"
    }

    const setCompletionHandler = async (todoid) => {
        if(editCompletionStatus == 0){
            seteditCompletionStatus(1)
            setcompletionStatusSpinner(true)
            await axiosInstance.put(`/edit/${todoid}`, {"todo_status": editCompletionStatus})
            setcompletionStatusSpinner(false)
        }
        if(editCompletionStatus == 1){
            seteditCompletionStatus(0)
            setcompletionStatusSpinner(true)
           await axiosInstance.put(`/edit/${todoid}`, {"todo_status": editCompletionStatus})
            setcompletionStatusSpinner(false)
        }    
    }

    const deleteHandler = async(todoid) => {
        setdeleteTodoSpinner(true)
        await axiosInstance.delete(`/delete/todo/${todoid}`)
        setdeleteTodo(!deleteTodo)
        setdeleteTodoSpinner(false)
    }


  return (
    <Container data-testid="maincontainer">
        <Wrapper >
            <UserActions data-testid="useractions">
                <UserName>
                    Hi, {User.username}   |
                </UserName>
                <LogoutAction onClick={logoutHandler}>
                    Logout
                </LogoutAction>
            </UserActions>
            <TodoList  data-testid="todolist">
                <Headings>
                    <TodoHeading>
                        Todos
                    </TodoHeading>
                    <StatusHeading>
                         Status
                    </StatusHeading>
                    <DeleteHeading>
                        X
                    </DeleteHeading>
                </Headings>
                <Spinnerpage style={{display: displayTodoSpinner? "initial" : "none"}}/> {userTodoList.map(item => (
                    <TodoBody style={{display: displayTodoSpinner? "none" : "initial"}}>
                    <Todo>
                        <TodoText data-testid="todotext">{item.todo}</TodoText>
                    </Todo>
                    <Status>
                       {item.todo_status == 1 ?
                        <DoneIcon onClick={()=>setCompletionHandler(item.todo_id)} data-testid="completionclicker">{completionStatusSpinner? <StatusSpinner/> : <CheckCircleOutlineOutlinedIcon data-testid="complete"/>}</DoneIcon>
                         :
                        <NotDoneIcon onClick={()=>setCompletionHandler(item.todo_id)} data-testid="notcompleteclicker">{completionStatusSpinner? <StatusSpinner/> :  <DoNotDisturbOnOutlinedIcon data-testid="notcomplete"/>}</NotDoneIcon>
                        }
                    </Status>
                    <Delete>
                       {deleteTodoSpinner? <DeleteSpinner/> :<DeleteIcon onClick={()=>deleteHandler(item.todo_id)}><DeleteOutlineOutlinedIcon/></DeleteIcon>}
                    </Delete>
                </TodoBody>))}
            </TodoList>
            <InputSection >
                    <AddTodo data-testid="inputsection" onChange={inputHandler} value = {newInput} type="text" placeholder="Add new todo here...">

                    </AddTodo>
                    <AddIcon>
                        {addTodoSpinner? <TodoSpinner/> :<AddCircleOutlineOutlinedIcon data-testid="addButton" onClick={addButtonHandler}/>}
                    </AddIcon>
                </InputSection>
        </Wrapper>
    </Container>
  )
}

export default TodoListPage
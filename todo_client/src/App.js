import LoginPage from './Pages/loginPage'
import TodoListPage from './Pages/todoListPage'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {useSelector } from 'react-redux'

function App() {

  const User = useSelector(state => state.users.userInfo)
 
  return (
    <Router>
       <Routes>
         
         <Route path="login" element={User? <Navigate to="/"/> : <LoginPage/>}/> 
        
         <Route exact path="/" element={User? <TodoListPage/> : <Navigate to="/login"/>}/>
      
       </Routes>
     </Router>
  );
}

export default App;

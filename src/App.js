import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";



function App() {
  return (
    <div>
      
      <Routes>
        <Route path={'/'} element = {<Login/>}/>

        <Route path = {'/admin'}>
          <Route path={'dashboard/*'} element = {<Dashboard/>} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;

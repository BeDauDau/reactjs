import LoginForm from "./components/loginform";
import RegisterForm from "./components/registerform";
import ForgotForm from "./components/forgotform";
import Home from "./components/Home"
import Addstudent from "./components/addstudent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classlist from "./components/classlist";
import Search from "./components/search";
import Subjectscore from "./components/subjectscore";
import Semesterreport from "./components/semesterreport";
import Classreport from "./components/classreport";
import Regulation from "./components/regulation";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/login" element={<Home/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/forgot" element={<ForgotForm/>} />
          
          <Route path="/addStudent" element={<Addstudent/>} />
          <Route path="/classList" element={<Classlist/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/subjectScore" element={<Subjectscore/>} />
          <Route path="/semesterReport" element={<Semesterreport/>} />
          <Route path="/classReport" element={<Classreport/>} />
          <Route path="/regulation" element={<Regulation/>} />
          {/*<Route path="/classList" element={<ForgotForm/>} />
          <Route path="/search" element={<ForgotForm/>} />
          <Route path="/subjectScore" element={<ForgotForm/>} />
          <Route path="/semesterReport" element={<ForgotForm/>} />
          <Route path="/classReport" element={<ForgotForm/>} />
          <Route path="/regulation" element={<ForgotForm/>} />
  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

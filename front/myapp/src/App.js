import { BrowserRouter, Routes, Route, } from "react-router-dom";
import IsLogin from "./isLogin";
import Admin from "./admin/admin"
import User from "./user/user";
import Login from "./login/login";
import Archive from "./Archive";
import AdminArchive from "./AdminArchive";
import "./user/style/style.css";
import "./admin/style.css";
import "./login/style.css";
import "./styleArchive.css";

const App =()=>{
  return<>
  <BrowserRouter>
        <Routes>
              <Route element={<IsLogin/>}>
                <Route  path="admin" element={<Admin/>} exact/>
                <Route  path="adminarchive/:Year" element={<AdminArchive/>} exact/>
              </Route>
              <Route exact path="/" element={<User/>}/>
              <Route exact path="login" element={<Login/>} />
              <Route exact path="archive/:Year" element={<Archive/>} />
        </Routes>
      </BrowserRouter>

  </>
}
export default App;

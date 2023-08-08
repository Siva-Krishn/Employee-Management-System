import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";
import EmpEdit from "./EmpEdit";
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EmpList />} />
          <Route path="/empform" element={<EmpForm />} />
          <Route path="/empedit/:empid" element={<EmpEdit />} /> 
        </Routes>
      </Router>
    </div>
  )
}
export default App;
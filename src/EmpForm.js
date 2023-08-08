import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
function EmpForm() {
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [city,setCity] = useState("")

    const navigate = useNavigate()
    
    const updateId=(e)=>{
        setId(e.target.value)
    }
    const updateName=(e)=>{
        setName(e.target.value)
    }
    const updateEmail=(e)=>{
        setEmail(e.target.value)
    }
    const updateSalary=(e)=>{
        setSalary(e.target.value)
    }
    const updateCity=(e)=>{
        setCity(e.target.value)
    }

    const submitData=(e)=>{
        e.preventDefault()
        const data={id,name,email,salary,city}
         fetch("http://localhost:3004/Employee",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
         })
         .then(()=>{
            alert("successfully added...!")
            navigate("/")
         })
         .catch(()=>{
            alert("failed adding..")
         })
    }

    return (
        <div>
            <form style={{ background: "cadetblue", width: "200px" }} onSubmit={submitData}>
                <div class="mb-3">
                    <label class="form-label">ID:</label><br />
                    <input value={id} type="number" disabled="disabled" onChange={updateId} placeholder="Enter Id" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Name:</label><br />
                    <input value={name} type="text" placeholder="Enter Name" onChange={updateName}/>
                </div>
                <div class="mb-3">
                    <label class="form-check-label">Email:</label><br />
                    <input value={email} type="email" placeholder="Enter Email" onChange={updateEmail}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Salary:</label><br />
                    <input value={salary} type="number" placeholder="Enter Salary" onChange={updateSalary} />
                </div>
                <div class="mb-3">
                    <label class="form-label">City:</label><br />
                    <input  value={city} type="text" placeholder="Enter City"  onChange={updateCity}/>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <Link className="btn btn-success" to="/">Back</Link>
                </div>
            </form>

        </div>
    )
}
export default EmpForm;

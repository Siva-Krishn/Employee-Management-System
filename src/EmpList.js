
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from "axios";
function EmpList() {
    const [data, setData] = useState("")
    const [value,setValue] = useState("")
    const navigate = useNavigate()
    useEffect((e) => {
        fetch("http://localhost:3004/Employee", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }, [])

    const onDelete = (id) => {
        if (window.confirm("Are you Sure..!")) {
            fetch("http://localhost:3004/Employee/" + id, {
                method: "DELETE"
            })
                .then(() => {
                    alert("Deleted successfull...!")
                })
        }
    }
    
    const onEdit=(id)=>{
        navigate("/empedit/"+id)
    }

    const updateRecords=(e)=>{
        setValue(e.target.value)
    }

    const filterRecords= async (a)=>{
        a.preventDefault()
       return await axios.get(`http://localhost:3004/Employee?q=${value}`)
       .then((res)=>{
           setData(res.data)
           setValue("")
       })
       .catch(()=>{
        alert("error")
       })
    }
    const resetData=()=>{
        navigate("/")
    }
    return (
        <div className="container">
            <div className="cart">
                <div className="card-title">
                    <h1 style={{ color: "rgb(54, 156, 160)" }}>Employee Management System</h1>
                </div> <br />
                <div>
                    <form onSubmit={filterRecords}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div class="mb-3">
                            <label class="form-check-label">Filter Records:</label><br />
                            <input value={value} type="text"  onChange={updateRecords}/>
                            <button style={{marginLeft:"10px"}} className="btn btn-secondary" type="submit">Search</button>
                            <button onClick={resetData} className="btn btn-primary">Reset</button>
                        </div>
                        <div>
                        <Link className="btn btn-success" to="/empform">Add New+</Link>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.city}</td>
                                    <td>

                                        <button onClick={() => {onEdit(item.id)}} className="btn btn-primary">EDIT</button>
                                        <button onClick={() => {onDelete(item.id)}} className="btn btn-danger">DELETE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default EmpList;
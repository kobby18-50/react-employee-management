import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const [employee_name, setEmployeeName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('')
    const [dob,setDOB] = useState('')
    const [projects,setProjects] = useState('')
    const [positon,setPosition] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employee_name,email,phone_number,dob,projects,positon)

    }

    const navigate = useNavigate()

    const  handleCancel = (event) => {
        navigate(-1)
    }
    return (
        <form
        onSubmit={handleSubmit}
         className="ml-5 mt-5">
            <h2>Add Employee</h2>

            <div className="mt-9">
                <label>Employee Full Name</label><br />
                <input
                value={employee_name}
                onChange={(event) => setEmployeeName(event.target.value)}
                required
                 type="text" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-9">
                <label>Email</label><br />
                <input
                value={email}
                onChange = {(event) => setEmail(event.target.value)}
                required
                 type="email" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-9">
                <label>Phone Number</label><br />
                <input
                value={phone_number}
                onChange = {(event) => setPhoneNumber(event.target.value)}
                required
                 type="tel" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-9">
                <label>Date Of Birth</label><br />
                <input
                value={dob}
                onChange = {(event) => setDOB(event.target.value)}
                required
                 type="date" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-9">
                <label>Number Of Projects</label><br />
                <input
                value={projects}
                onChange = {(event) => setProjects(event.target.value)}
                required
                 type="number" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-9">
                <label>Position</label><br />
                <input
                value={positon}
                onChange = {(event)=> setPosition(event.target.value)}
                required
                 type="text" className="border p-2 rounded-md w-[40%] outline-none mt-2" />
            </div>

            <div className="mt-5 space-x-10">
                <button type="submit" className="btn btn-success">Save</button>
                <button onClick={handleCancel} className="btn btn-error">Cancel</button>
            </div>

        </form>
    )


}

export default AddEmployee
import React from 'react'
import { Table } from 'reactstrap';
import { getListStudent } from '../services'
import axios from "axios";
const config = {
  headers: {  
      Authorization: "Bearer "+ localStorage.getItem("token"),
  }
}
export default function Home() {
    const [listStudent, setListStudent] = React.useState([])

    React.useEffect(()=>{
      
      axios.get('http://localhost:5000/api/v1/students/',config).then(res => {
            setListStudent(res.data.data)
        })
    },[])
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                {listStudent ? listStudent.map(data => 
                    <tr>
                        <td>{data._id}</td>
                        <td>{data.email}</td>
                        <td>{data.fullname}</td>
                    </tr>
                )
                : ""}
                </tbody>
            </Table>
        </div>
    )
}



import axios from "axios";
const endpoint = 'http://localhost:5000'

const config = {
    headers: {  
        Authorization: "Bearer "+ localStorage.getItem("token"),
    }
}
export const getListStudent = () => {
    return axios.get(endpoint + '/api/v1/students/',config).then( ( response ) => {
        console.log( response )
      } )
      .catch()
}
 
export const deleteStudent = (StudentId) => {
    return axios.delete(endpoint + '/api/v1/students/'+ {StudentId})
    
}

export const createNewStudent = (Student) => {
    return axios.post(endpoint + '/api/v1/students/', Student)
}
export const updateStudent = (Student) => {
    return axios.patch(endpoint + '/api/v1/students/' + {Student})
}



import axios from "axios";
const endpoint = 'http://localhost:5000'
const token =localStorage.getItem("token");
const config = {
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg4NTRmZDAxNTZjNzVmNjM4NmM5YTgiLCJpYXQiOjE2ODY3NTY2NjksImV4cCI6MTY4Njc3NDY2OX0.B9ERph4NSuQ43k1KyVCqborROOSARp0Q3pcOr2lsKKs"}` }
};
export const getListStudent = () => {
    return axios.get(endpoint + '/api/v1/students/',config)
    .then(console.log).catch(console.log);
    
};
 
export const deleteStudent = (StudentId) => {
    return axios.delete(endpoint + '/api/v1/students/'+ {StudentId})
    
}

export const createNewStudent = (Student) => {
    return axios.post(endpoint + '/api/v1/students/', Student)
}
export const updateStudent = (Student) => {
    return axios.patch(endpoint + '/api/v1/students/' + {Student})
}



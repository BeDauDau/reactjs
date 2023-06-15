import React, {useEffect, useState} from "react";
import "./classlist.css"
import {Link} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios"  

const config = {
  headers: {  
      Authorization: "Bearer "+ localStorage.getItem("token"),
  }
}

const Classlist = () => {
  const [listStudent, setListStudent] = React.useState([])

    React.useEffect(()=>{
      
      axios.get('http://localhost:5000/api/v1/classes/',config).then(res => {
            setListStudent(res.data.data)
        })
    },[])



    return (

        <div className="container">
            <div id="header">
          <ul id="nav">
            <li><a href="/login">Home Page</a></li>
            <li><a href="#gr">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a >
                function <MdKeyboardArrowDown/>
              </a>
              <ul className="subnav">
                {/*<li><a className="subnav-padding" href="./addstudent.html">Nhận học sinh</a></li>
                <li><a className="subnav-padding" href="./classlist.html">Lập danh sách lớp</a></li>
                <li><a className="subnav-padding" href="./search.html">Tra cứu học sinh</a></li>
                <li><a className="subnav-padding" href="./subjectscore.html">Bảng điểm môn học</a></li>
                <li><a className="subnav-padding" href="./semesterreport.html">Lập bảng báo cáo kì</a></li>
                <li><a className="subnav-padding" href="./classreport.html">Lập bảng báo cáo môn</a></li>
                <li><a className="subnav-padding" href="./regulation.html">Danh sách quy định</a></li>*/}
                 <Link to="/addStudent">Nhận học sinh</Link>
                 <Link to="/classList">Lập danh sách lớp</Link>
                 <Link to="/search">Tra cứu học sinh</Link>
                 <Link to="/subjectScore">Bảng điểm môn học</Link>
                 <Link to="/semesterReport">Lập bảng báo cáo kì</Link>
                 <Link to="/classReport">Lập bảng báo cáo môn</Link>
                 <Link to="/regulation">Danh sách quy định</Link>

              </ul>
            </li>
          </ul>
          {/*End nav*/}
          {/*Begin sign-out*/}
                <div className="signout-btn">
                    <Link to="/">
                    <i className="signout-icon">Logout</i>
                    </Link>
                </div>
          
                <div id="mobile-menu" className="mobile-menu-btn">
                    <i className="menu-icon ti-menu" />
                </div>
          {/*End sign-out*/}
            </div>
            <br></br><br></br>
            <div class="">
    <h1>Lập danh sách lớp</h1>
    <form id="class-form">
      <label for="class-input">Nhập lớp:</label>
      <input type="text" id="class-input" placeholder="Nhập tên lớp"></input>
      <button type="submit">Lập danh sách</button>
    </form>

    <h2>Sĩ số lớp:</h2>
    <table id="class-size-table">
      <thead>
        <tr>
          <th>Lớp</th>
          <th>Sĩ số</th>
        </tr>
      </thead>
      <tbody id="class-size-body">

      </tbody>
    </table>

    <h2>Danh sách lớp:</h2>
    <table id="student-list-table">
      <thead>
        <tr>
          <th>Số thứ tự</th>
          <th>Tên học sinh</th>
          <th>Giới tính</th>
          <th>Năm sinh</th>
          <th>Địa chỉ</th>
        </tr>
      </thead>
      <tbody id="student-list">

      </tbody>
    </table>
  </div>
        </div>
        )
}

export default Classlist
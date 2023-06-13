import React, {useEffect, useState} from "react";
import "./search.css"
import {Link} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
  
const Search = () => {
    return (

        <div className="">
            <div id="header">
          <ul id="nav">
            <li><a href="/login">Home Page</a></li>
            <li><a href="#gr">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a className="">
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
            <div id="search">
    <h1>Tra cứu học sinh</h1>
    <form id="search-form">
      <label for="class-input">Lớp:</label>
      <input type="text" id="class-input" placeholder="Nhập tên lớp"></input>
      <label for="student-name-input">Tên học sinh:</label>
      <input type="text" id="student-name-input" placeholder="Nhập tên học sinh"></input>
      <button type="submit">Tra cứu</button>
    </form>

    <h2>Kết quả tra cứu:</h2>
    <table id="search-results-table">
      <thead>
        <tr>
          <th>Số thứ tự</th>
          <th>Tên học sinh</th>
          <th>Điểm HK1</th>
          <th>Điểm HK2</th>
        </tr>
      </thead>
      <tbody id="search-results-body"></tbody>
    </table>
  </div>
        </div>
        )
}

export default Search
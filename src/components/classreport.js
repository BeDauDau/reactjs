import React, {useEffect, useState} from "react";
import "./classreport.css"
import {Link} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
  
const Classreport = () => {
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
            <div id="container">
        <h1>Báo cáo tổng kết học kì</h1>

        <div class="form-container">
            <form id="reportForm">
                <div class="form-group">
                    <label for="semester">Học kì:</label>
                    <input type="text" id="semester" name="semester"></input>
                </div>
                <div class="form-group">
                    <input type="submit" value="Xem báo cáo"></input>
                </div>
            </form>
        </div>

        <table id="reportTable">
            <thead>
                <tr>
                    <th>Số thứ tự</th>
                    <th>Lớp</th>
                    <th>Sĩ số</th>
                    <th>Số lượng đạt</th>
                    <th>Tỉ lệ học sinh đạt</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
        </div>
        )
}

export default Classreport
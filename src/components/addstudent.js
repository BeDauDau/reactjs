import React, {useEffect, useState} from "react";
import "./addstudent.css"
import {Link} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
  
const Addstudent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  const [isActive2, setIsActive2] = useState(false);

  const handleClick2 = event => {
    // 👇️ toggle isActive state on click
    setIsActive2(current => !current);
  };
  const [isActive3, setIsActive3] = useState(false);

  const handleClick3 = event => {
    // 👇️ toggle isActive state on click
    setIsActive3(current => !current);
  };
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
        <div className="">
        <h2>Nhận học sinh</h2>
       
    <button id="add-student-btn" class="action-btn" onClick={handleClick}>Thêm học sinh</button>
    <button id="delete-student-btn" class="action-btn" onClick={handleClick2}>Xóa học sinh</button>
    <button id="edit-student-btn" class="action-btn" onClick={handleClick3}>Sửa thông tin học sinh</button>
    <div id="add-student-form" class={isActive ?"":"hidden"}>
      <h2>Thêm học sinh</h2>
      <form id="student-form">
      <label for="class-input">Lớp:</label>
        <input type="text" id="class-input" required></input>
        <label for="name-input">Tên học sinh:</label>
        <input type="text" id="name-input" required></input>
        <label for="gender-input">Giới tính:</label>
        <select id="gender-input" required>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <label for="dob-input">Ngày sinh:</label>
        <input type="date" id="dob-input" required></input>
        <label for="address-input">Địa chỉ:</label>
        <input type="text" id="address-input" required></input>
        <label for="email-input">Email:</label>
        <input type="email" id="email-input" required></input>
        <button type="submit">Thêm</button>
      </form>
    </div>
    <div id="delete-student-form" class={isActive2 ?"":"hidden"}>
      <h2>Xóa học sinh</h2>
      <form id="delete-form">
        <label for="delete-name-input">Tên học sinh:</label>
        <input type="text" id="delete-name-input" required></input>
        <label for="delete-class-input">Lớp:</label>
        <input type="text" id="delete-class-input" required></input>
        <button type="submit">Xóa</button>
      </form>
    </div>
    <div id="edit-student-form" class={isActive3 ?"":("hidden" )}>
      <h2>Sửa thông tin học sinh</h2>
      <form id="edit-form">
        <label for="edit-name-input">Tên học sinh:</label>
        <input type="text" id="edit-name-input" required></input>
        <label for="edit-class-input">Lớp:</label>
        <input type="text" id="edit-class-input" required></input>
        <label for="edit-gender-input">Giới tính:</label>
        <select id="edit-gender-input" required>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <label for="edit-dob-input">Ngày sinh:</label>
        <input type="date" id="edit-dob-input" required></input>
        <label for="edit-address-input">Địa chỉ:</label>
        <input type="text" id="edit-address-input" required></input>
        <label for="edit-email-input">Email:</label>
        <input type="email" id="edit-email-input" required></input>
        <button type="submit">Sửa</button>
      </form>
    </div>
    <table id="student-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Lớp</th>
          <th>Tên học sinh</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody id="student-list">
      </tbody>
    </table>
        </div>
        </div>
        )
}

export default Addstudent
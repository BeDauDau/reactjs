import "./Home.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import "./addstudent.css"

const Addstudent = () => {
  return (
      <div id="main">
        {/*Begin nav*/}
        <div id="header">
          <ul id="nav">
            <li><a href="/login">Home Page</a></li>
            <li><a href="#gr">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="#">
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
            <i className="signout-icon">Logout</i>
          </div>
          <div id="mobile-menu" className="mobile-menu-btn">
            <i className="menu-icon ti-menu" />
          </div>
          {/*End sign-out*/}
        </div>
        <div class="container">
          <h1>Nhận học sinh</h1>
          <button id="add-student-btn" class="action-btn">Thêm học sinh</button>
          <button id="delete-student-btn" class="action-btn">Xóa học sinh</button>
          <button id="edit-student-btn" class="action-btn">Sửa thông tin học sinh</button>
        </div>
        <div id="add-student-form" className="hidden">
      <h2>Thêm học sinh</h2>
      <form id="student-form">
        <label htmlFor="class-input">Lớp:</label>
        <input type="text" id="class-input" required="" />
        <label htmlFor="name-input">Tên học sinh:</label>
        <input type="text" id="name-input" required="" />
        <label htmlFor="gender-input">Giới tính:</label>
        <select id="gender-input" required="">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <label htmlFor="dob-input">Ngày sinh:</label>
        <input type="date" id="dob-input" required="" />
        <label htmlFor="address-input">Địa chỉ:</label>
        <input type="text" id="address-input" required="" />
        <label htmlFor="email-input">Email:</label>
        <input type="email" id="email-input" required="" />
        <button type="submit">Thêm</button>
      </form>
    </div>
      </div>
  );
}

  export default Addstudent;
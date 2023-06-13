import React, {useEffect, useState} from "react";
import "./regulation.css"
import {Link} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
  
const Regulation = () => {
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
            <div class="">
        <h1>Quy định</h1>
        <div class="left-section">
            <h2>Bảng các loại quy định</h2>
            <table id="rule-types-table">
                <thead>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Các loại quy định</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Thay đổi độ tuổi tối thiểu và tối đa</td>
                        <td><button class="select-rule-btn">Chọn</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Thay đổi sĩ số tối đa của các lớp, thay đổi số lượng và tên của các lớp trong trường</td>
                        <td><button class="select-rule-btn">Chọn</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Thay đổi số lượng và tên các môn học</td>
                        <td><button class="select-rule-btn">Chọn</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Thay đổi điểm chuẩn đạt môn</td>
                        <td><button class="select-rule-btn">Chọn</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="right-section">
            <h2 id="selected-rule-title"></h2>
            <table id="selected-rule-table">
                <thead>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Danh sách các quy định</th>
                        <th>Chỉnh sửa nội dung</th>
                        <th>Xóa quy định</th>
                    </tr>
                </thead>
                <tbody id="selected-rule-body">

                </tbody>
            </table>
            <form id="edit-rule-form" class="hidden">
                <label for="rule-content">Nội dung:</label>
                <input type="text" id="rule-content" name="rule-content"></input>
                <button type="submit">Xác nhận</button>
            </form>
        </div>
    </div>
        </div>
        )
}

export default Regulation
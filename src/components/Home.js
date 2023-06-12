import "./Home.css"
import memberLogo from "../img/content/bandmember.jpg"
import mapLogo from "../img/map.jpg"
import { FaBeer,FaFacebookSquare,FaInstagramSquare,FaYoutube, FaTwitter,FaLinkedin,FaPinterestSquare,FaLocationArrow,FaPhoneSquareAlt,FaMailBulk} from 'react-icons/fa'

const Home = () => {
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
                function
                <i className="nav-arrow-down ti-angle-down" />
              </a>
              <ul className="subnav">
                <li><a className="subnav-padding" href="./addstudent.html">Nhận học sinh</a></li>
                <li><a className="subnav-padding" href="./classlist.html">Lập danh sách lớp</a></li>
                <li><a className="subnav-padding" href="./search.html">Tra cứu học sinh</a></li>
                <li><a className="subnav-padding" href="./subjectscore.html">Bảng điểm môn học</a></li>
                <li><a className="subnav-padding" href="./semesterreport.html">Lập bảng báo cáo kì</a></li>
                <li><a className="subnav-padding" href="./classreport.html">Lập bảng báo cáo môn</a></li>
                <li><a className="subnav-padding" href="./regulation.html">Danh sách quy định</a></li>
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
        <div id="slider">
          <div className="text-content">
            <h2 className="text-heading">University of Science</h2>
            <div className="text-decription">Chào mừng đến với Trường Trung học Phổ thông (THPT) của chúng tôi, nơi mang đến một môi 
              trường học tập đầy thách thức và phát triển toàn diện cho học sinh.</div>
          </div>
        </div>
        <div id="content">
          <div id="gr" className="content-section">
            <br /><br /><br />
            <h2 className="content-heading">Trường THPT 06</h2>
            <p className="content-sub-heading">We love study</p>
            <p className="about-text">
              Trường Trung học Phổ thông (THPT) chúng tôi là một ngôi trường đầy năng lượng và sự phấn khởi, nơi học sinh được 
              khám phá và phát triển tiềm năng của mình. Với sứ mệnh đem lại một môi trường học tập đa dạng, sáng tạo và thân 
              thiện, chúng tôi cam kết mang đến cho học sinh một cuộc sống học tập đầy ý nghĩa và hạnh phúc.</p>
            <p className="about-text">   
              Trường THPT chúng tôi không chỉ chú trọng vào việc truyền đạt kiến thức, mà còn tập trung vào việc xây dựng tư duy 
              sáng tạo, kỹ năng tự học và khả năng giải quyết vấn đề. Chúng tôi tôn trọng sự độc đáo và khác biệt của mỗi học 
              sinh, khuyến khích họ khám phá và phát triển cái tôi riêng của mình. Chúng tôi luôn tạo điều kiện thuận lợi để 
              học sinh có thể phát triển toàn diện về mặt trí tuệ, thể chất và tình cảm.</p>
            
            <h3 className="content-heading">Thành viên hội đồng quản trị</h3>
            <div className="members-list">
              <div className="member-it member-item">
                <p className="membername">Nguyễn Văn Chung</p>
                <img src={memberLogo} alt="Name" className="member-img" />
              </div>
              <div className="member-it member-item">
                <p className="membername">Lâm Nguyễn Ngọc Mỹ</p>
                <img src={memberLogo} alt="Name" className="member-img" />
              </div>
              <div className="member-it member-item">
                <p className="membername">Trần Trọng Trí </p>
                <img src={memberLogo} alt="Name" className="member-img" />
              </div>
              <div className="clear" />
            </div>
            <br /><br /><br />
            <div className="members-list-2">
              <div className="member-it member-item-2">
                <p className="membername">Phan Đình Anh Quân</p>
                <img src={memberLogo} alt="Name" className="member-img" />
              </div>
              <div className="member-it member-item-2">
                <p className="membername">Võ Hữu Trọng</p>
                <img src={memberLogo} alt="Name" className="member-img" />
              </div>
              <div className="clear" />
            </div>
            <br /><br /><br />
          </div>
          <div id="contact" className="content-section">
            <br /><br /><br />
            <h2 className="content-heading">Liên Hệ</h2>
            <p className="content-sub-heading">Liên hệ với chúng tôi</p>
            <div className="row contact-content">
              <div className="col col-half s-col-full contact-info">
                <p><i /><FaLocationArrow/>HCM, Viet Nam</p>
                <p><i/><FaPhoneSquareAlt/>Phone: +19004545</p>
                <p><i/><FaMailBulk/>Email: 06group@mail.com</p>
              </div>
              <div className="col col-half s-col-full contact-form">
                <form action>
                  <div className="row">
                    <div className="col col-half s-col-full">
                      <input type="text" name placeholder="Name" required className="form-control" />
                    </div>
                    <div className="col col-half s-col-full s-mt-8">
                      <input type="email" name placeholder="Email" required className="form-control" />
                    </div>
                    <div className="col col-full mt-8">
                      <input type="text" name placeholder="Message" required className="form-control" />
                    </div>
                  </div>
                  <input className="btn mt-16 s-full-width" type="submit" defaultValue="SEND" />
                </form>
              </div>
            </div>
          </div>
          <br /><br /><br />
          <div className="map-section">
            <img src={mapLogo} alt="Map" />
          </div>
          <br /><br /><br />
        </div>
        <div id="footer">
          <div className="socials-list">
            <a href><i/><FaFacebookSquare size='3rem' /></a>
            <a href><i/>    <FaInstagramSquare size='3rem'/></a>
            <a href><i/>    <FaYoutube size='3rem'/></a>
            <a href><i/>    <FaPinterestSquare size='3rem'/></a>
            <a href><i/>    <FaTwitter size='3rem'/></a>
            <a href><i/>   <FaLinkedin size='3rem'/></a>
          </div>
          <p className="copyright">Made by team 06</p>
        </div>
      </div>

  );
}

  export default Home;
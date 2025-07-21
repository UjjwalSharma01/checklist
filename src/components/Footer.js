import ToTopButton from './ToTopButton';

const Footer = () => {
  return (
    <footer>
      <div className="footer-panel2">
        <div className="navFooterlinkCol">
          <div className="footerlinkcol">Get to Know Us</div>
          <ul>
            <li className="footlink-li">
              <a href="#"> About</a>
            </li>
            <li className="footlink-li">
              <a href="#">Careers</a>
            </li>
            <li className="footlink-li">
              <a href="#">Documentation</a>
            </li>
            <li className="footlink-li">
              <a href="#">Computer Science</a>
            </li>
          </ul>
        </div>

        <div className="navFooterlinkCol">
          <div className="footerlinkcol">Connect with Us</div>
          <ul>
            <li className="footlink-li">
              <a href="#">Facebook</a>
            </li>
            <li className="footlink-li">
              <a href="#">Twitter</a>
            </li>
            <li className="footlink-li">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="navFooterlinkCol">
          <div className="footerlinkcol">Learn Subjects with Us</div>
          <ul>
            <li className="footlink-li">
              <a href="C_Programming.html">C Programming</a>
            </li>
            <li className="footlink-li">
              <a href="C++_Basics.html">C++ Basics</a>
            </li>
            <li className="footlink-li">
              <a href="python_Basics.html">Python Basics</a>
            </li>
            <li className="footlink-li">
              <a href="OOP.html">Object Oriented Programming</a>
            </li>
            <li className="footlink-li">
              <a href="STL.html">Standard Template Library</a>
            </li>
            <li className="footlink-li">
              <a href="WebApp.html">Web Application Fundamentals</a>
            </li>
            <li className="footlink-li">
              <a href="algorithm.html">Algorithm Design Techniques</a>
            </li>
            <li className="footlink-li">
              <a href="JavaBasic.html">Java Basics</a>
            </li>
            <li className="footlink-li">
              <a href="linux.html">Linux Basics</a>
            </li>
            <li className="footlink-li">
              <a href="golang.html">Golang Basics</a>
            </li>
            <li className="footlink-li">
              <a href="frontendProjects.html">Frontend Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-panel4">
        <div className="pages">
          <div className="copyright">
            Copyright © <span id="year">{new Date().getFullYear()}</span>, Ujjwal Sharma All Rights Reserved
          </div>
        </div>
      </div>
      <ToTopButton />
    </footer>
  );
};

export default Footer;

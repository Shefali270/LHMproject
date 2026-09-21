import { useState } from "react";

import "./Header.css";


// import Arrowicons from "./Arrowicons.png";
import blue from "./blue.jpeg";
import computer from "./computer.png";
import darkblue from "./darkblue.jpeg";
import green from "./green.jpeg";
import Institution from "./Institution.png";
import job from "./job.png";
import logo from "./logo.png";
import professional from "./professional.webp";
// import qr from "./qr.jpeg";
import screen from "./screen.jpeg";
import seach from "./seach.png";
import Student from "./Student.png";
import Teacher from "./Teacher.png";



// import {logo} from "../constants/image.js"

// import {blue} from "../constants/image.js"
// import {company} from "../constants/image.js"
// import {computer} from "../constants/image.js"
// import {Student} from "../constants/image.js"
// import {green} from "../constants/image.js"
// import {darkblue} from "../constants/image.js"
// import { Institution } from "../constants/image.js"
// import { job } from "../constants/image.js"
// import { professional } from "../constants/image.js"
// import { Teacher } from "../constants/image.js"
// import { seach } from "../constants/image.js"
// import { screen} from "../constants/image.js"


function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">

      {/* ================= LOGO ================= */}

      <div className="logo-header">

        <img
          src={logo}
          alt="LMH Project"
          className="logo"
        />

        <div className="logo-text">

          <h2 className="company-name">
            LMH
          </h2>
{/* 
          <h3 className="LiveMentorHub">
            LiveMentorHub
          </h3> */}
<h3>
  <span className="Live">Live</span><span
   className="MentorHub">MentorHub</span>
</h3>

          <p className="tagline">
            Learn • Connect • Grow    
          </p>

        </div>

      </div>
{/* PHONE MENU */}
<div className="mobile-header-buttons">

  <button className="mobile-search-btn">
    <img src={seach} alt="Search" />
  </button> 

 <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

</div>


      {/* ================= NAVIGATION ================= */}

<nav className={menuOpen ? "mobile-menu-open" : ""}>

        <a href="/">
          Home
        </a>

        <a href="/">
          Explore Learning
        </a>

        <a href="/">
          Courses
        </a>

        <a href="/">
          Mentors
        </a>

        <a href="/">
          Institutions
        </a>

        <a href="/">
          Careers
        </a>

        <a href="/">
          Resources
        </a>

        <a href="/">
          About
        </a>

        <a href="/">
          Contact
        </a>

        {/* ================= SEARCH ================= */}

        <a
          href="/"
          className="search"
        >
          <img
            src={seach}
            alt="Search"
          />
        </a>


        {/* ================= LOGIN ================= */}

        <a
          href="/"
          className="login-btn"
        >
          Login
        </a>


        {/* ================= SIGN ================= */}

        <a
          href="/"
          className="sign-btn"
        >
          Sign Up
        </a>

      </nav>


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="hero">

        {/* ================= BACKGROUND VIDEO ================= */}

        {/* <video
          className="hero-background-video"
          src={backgroundVideo}
          // autoPlay
          // muted
          // loop
          // playsInline
        /> */}

{/* 
          <img
          src={screen}
          alt="LMH Project"
          className="logo"
        />  */}


        {/* ================= DARK OVERLAY ================= */}

        <div className="hero-overlay"></div>


        {/* ================= HERO CONTENT ================= */}

        <div className="hero-content">

          <h4>
            WELCOME TO LIVEMENTORHUB
          </h4>


          <h1>
            Learn Today

            <br />

           <span className="build">Build a </span><span
           className="brighter">Brighter Tomorrow</span>
          </h1>


          <p>
            Your one-stop platform for Learning, mentoring, career growth
            <br/>
            and real opportunities. Connect with the right people,
            <br/>
            right resources and the right opportunities-all in one place.
          </p>
</div>

          {/* ================= BUTTONS ================= */}

          <div className="hero-button">

            <button className="get-Started">
              Get Started Today <span> →</span>
            </button>

            <button className="explore-courses">
              Explore Courses
            </button>

          </div>

          {/* ================= FEATURES ================= */}

           <div className="features">

            <div className="Feature-iteam">

              <div className="feature-icon blue">
                <span className="icon-screen"></span>
              </div>

    <div className="box-row">

  <div className="Feature-iteam">
    <div className="feature-icon">
      <img src={computer} alt="Live Classes" />
    </div>

    <div className="feature-text">
      <h3>Live & Interactive <br/> </h3>
      <p>Classes</p>
    </div>
  </div>


  <div className="Feature-iteam">
    <div className="feature-icon">
      <img src={green} alt="Expert Mentors" />
    </div>

    <div className="feature-text">
      <h3>Expert Mentors <br/> </h3>
      <p>& Teachers</p>
    </div>
  </div>


  <div className="Feature-iteam">
    <div className="feature-icon">
     <img src={blue} alt="Learn at Your Own Pace" />
    </div>

    <div className="feature-text">
      <h3>Learn at Your <br/> </h3>
      <p>Own Pace</p>
    </div>
  </div>


  <div className="Feature-iteam">
    <div className="feature-icon">
      <img src={darkblue} alt="Career Guidance" />
    </div>

    <div className="feature-text">
      <h3>Career Guidance <br/></h3>
      <p>& Opportunities</p>
    </div>
  </div>

</div>


         {/* <div className="box-row"> 
            <div className="box">Live & Interactive  <span>classes</span></div>
             <div className="box">Expert Mentors<span>&Teachers</span></div>
              <div className="box">Learn at your<span>Own Pace</span></div>
               <div className="box">Career Guidance<span>& Opportunties</span></div>
          </div>  */}

        </div>
</div>
      </section>


      {/* =================================================
          SIX ROLE BOXES
      ================================================= */}

      <section className="six-box">


        {/* ================= STUDENT ================= */}

        <div className="role-box">

          <img
            src={Student}
            alt="Student"
            className="role-logo"
          />

          <h3>
            Student/Learner
          </h3>

          <p>
            Learn, grow and build your future
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>


        {/* ================= TEACHER ================= */}

        <div className="role-box">

          <img
            src={Teacher}
            alt="Teacher"
            className="role-logo"
          />

          <h3>
            Teacher/Faculty
          </h3>

          <p>
            Teach, inspire and earn globally
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>


        {/* ================= INSTITUTION ================= */}

        <div className="role-box">

          <img
            src={Institution}
            alt="Institution"
            className="role-logo"
          />

          <h3>
            Institution
          </h3>

          <p>
            Empower your students with quality Learning
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>


        {/* ================= PROFESSIONAL MENTOR ================= */}

        <div className="role-box">

          <img
            src={professional}
            alt="Professional Mentor"
            className="role-logo"
          />

          <h3>
            Professional Mentor
          </h3>

          <p>
            Share Knowledge and make an impact
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>


        {/* ================= COMPANY ================= */}

        <div className="role-box">

          <img
            src={company}
            alt="Company"
            className="role-logo"
          />

          <h3>
            Company/MSME
          </h3>

          <p>
            Hire talent & upskill your workforce
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>


        {/* ================= JOB SEEKER ================= */}

        <div className="role-box">

          <img
            src={job}
            alt="Job Seeker"
            className="role-logo"
          />

          <h3>
            Job Seeker
          </h3>

          <p>
            Find Opportunities and kickstart your career
          </p>

          <a href="#">
            Get Started <span>→</span>
          </a>

        </div>

      </section>


      {/* =================================================
          BLUE STATS
      ================================================= */}

      <section className="stats-section">


        <div className="stat-item">

          <div className="stat-icon">
            ♟
          </div>

          <h2>
            50K+
          </h2>

          <p>
            Students Learning
          </p>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ▣
          </div>

          <h2>
            5K+
          </h2>

          <p>
            Expert Teachers
          </p>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ◇
          </div>

          <h2>
            1K+
          </h2>

          <p>
            Partner Institutions
          </p>

        </div>


        <div className="stat-item">

          <div className="stat-icon">
            ♙
          </div>

          <h2>
            500+
          </h2>

          <p>
            Hiring Partners
          </p>

        </div>


        <div className="tomorrow">

          <h2>
            Together
            <br />
            for a Brighter Tomorrow
          </h2>

          <div className="yellow-line"></div>

        </div>

      </section>
    </div>
  );
}

export default Header;
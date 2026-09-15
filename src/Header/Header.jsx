import "./Header.css";

import logo from "./splashLogo.png";
import seachLogo from "./seach logo.png";

// ================= BACKGROUND VIDEO =================
import screen from "./screen.jpeg";

// ================= ROLE IMAGES =================
import Student from "./Student.png";
import Teacher from "./Teacher.png";
import ArrowIcons from "./ArrowIcons.png";
import InstitutionLogo from "./InstitutionLogo.png";
import ProfessionalLogo from "./professional logo.webp";
import CompanyLogo from "./companyLogo.jpg";
import JobLogo from "./JobLogo.png";
import blue from "./blue.jpeg";
import computerlogo from "./computerlogo.png";
import darkblue from "./darkblue.jpeg";
import green from "./green.jpeg";




function Header() {
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


      {/* ================= NAVIGATION ================= */}

      <nav>

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
            src={seachLogo}
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



         {/* <img
          src={screen}
          alt="LMH Project"
          className="logo"
        /> */}
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

           <span className="build">Build </span><span
           className="brighter">Brighter Tomorrow</span>
          </h1>


          <p>
            Your one-stop platform for Learning, mentoring, career growth
            <br />
            and real opportunities. Connect with the right people,
            <br />
            right resources and the right opportunities-all in one place.
          </p>


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

           {/* <div className="features">

            <div className="Feature-iteam">

              <div className="feature-icon blue">
                <span className="icon-screen"></span>
              </div> */}

    <div className="box-row">

  <div className="Feature-iteam">
    <div className="feature-icon">
      <img src={computerlogo} alt="Live Classes" />
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
            <div className="box">Live & Interactive </r> <span>classes</span></div>
             <div className="box">Expert Mentors<span>&Teachers</span></div>
              <div className="box">Learn at your<span>Own Pace</span></div>
               <div className="box">Career Guidance<span>& Opportunties</span></div>
          </div> 

        </div> */}
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
            src={InstitutionLogo}
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
            src={ProfessionalLogo}
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
            src={CompanyLogo}
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
            src={JobLogo}
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
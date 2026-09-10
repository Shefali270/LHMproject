import "./Header.css";

import logo from "./splashLogo.png";
import seachLogo from "./seach logo.png";

// ================= BACKGROUND VIDEO =================
import backgroundVideo from "./video.mp4";

// ================= ROLE IMAGES =================
import student from "./Student logo copy.png";
import TeacherLog from "./Teacher log.jpg";
import ArrowIcons from "./Arrow icons.png";
import InstitutionLogo from "./-institution logo.jpg";
import ProfessionalLogo from "./professional logo.webp";
import CompanyLogo from "./company logo copy.png";
import JobLogo from "./job logo copy.png";


function Header() {
  return (
    <div className="header">

      {/* ================= LOGO ================= */}

      <div className="logo-header">

        <img
          src={logo}
          alt="LHM Project"
          className="logo"
        />

        <div className="logo-text">

          <h2 className="company-name">
            LMH
          </h2>

          <h3 className="LiveMentorHub">
            LiveMentorHub
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
          Sign
        </a>

      </nav> 


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="hero">

        {/* ================= BACKGROUND VIDEO ================= */}

        <video
          className="hero-background-video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />


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

            <span className="brighter">
              Build a brighter Tomorrow
            </span>

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
              Get Started Today
            </button>

            <button className="explore-courses">
              Explore Courses
            </button>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="features">

            <div className="Feature-iteam">

              <h3>
                Live & interactive
              </h3>

              <p>
                Classes
              </p>

            </div>


            <div className="Feature-iteam">

              <h3>
                Explore Mentors
              </h3>

              <p>
                & Teacher
              </p>

            </div>


            <div className="Feature-iteam">

              <h3>
                Learn at Your
              </h3>

              <p>
                Own Pace
              </p>

            </div>


            <div className="Feature-iteam">

              <h3>
                Career Guidance
              </h3>

              <p>
                & Opportunities
              </p>

            </div>

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
            src={student}
            alt="Student"
            className="role-logo"
          />

          <h3>
            Student/Learner
          </h3>

          <p>
            Learn, grow and build your future
          </p>

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

        </div>


        {/* ================= TEACHER ================= */}

        <div className="role-box">

          <img
            src={TeacherLog}
            alt="Teacher"
            className="role-logo"
          />

          <h3>
            Teacher/Faculty
          </h3>

          <p>
            Teach, inspire and earn globally
          </p>

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

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

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

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

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

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

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

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

          <a href="/">
            Get Started
          </a>

          <img
            src={ArrowIcons}
            alt="Arrow"
            className="arrow-icon"
          />

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


      {/* =================================================
          POPULAR CATEGORIES
      ================================================= */}

      <section className="categories-section">

        <div className="categories-heading">

          {/* View All Categories later add kar sakte ho */}

        </div>

      </section>

    </div>
  );
}

export default Header;
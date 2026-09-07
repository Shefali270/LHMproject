import "./Header.css";

import logo from "./logo.jpg";
import seachLogo from "./seach logo.png";
import StudentLogoCopy from "./Student logo copy.png";
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

      <img
        src={logo}
        alt="LHM Project"
        className="logo"
      />


      {/* ================= NAVIGATION ================= */}

      <nav>

        <a href="/">Home</a>

        <a href="/">Explore Learning</a>

        <a href="/">Courses</a>

        <a href="/">Mentors</a>

        <a href="/">Institutions</a>

        <a href="/">Careers</a>

        <a href="/">Resources</a>

        <a href="/">About</a>

        <a href="/">Contact</a>


        {/* SEARCH */}

        <a href="/" className="search">
          <img
            src={seachLogo}
            alt="Search"
          />
        </a>


        {/* LOGIN */}

        <a href="/">Login</a>


        {/* SIGN */}

        <a href="/">Sign</a>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-content">

          <h4>WELCOME TO LIVEMENTORHUB</h4>

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


          {/* BUTTONS */}

          <div className="hero-button">

            <button className="get-Started">
              Get Started Today
            </button>

            <button className="explore-courses">
              Explore Courses
            </button>

          </div>


          {/* FEATURES */}

          <div className="Feature-iteam">
            <h3>Live & interactive</h3>
            <p>Classes</p>
          </div>

          <div className="Feature-iteam">
            <h3>Explore Mentors</h3>
            <p>& Teacher</p>
          </div>

          <div className="Feature-iteam">
            <h3>Learn at Your</h3>
            <p>Own Pace</p>
          </div>

          <div className="Feature-iteam">
            <h3>Career Guidance</h3>
            <p>& Opportunities</p>
          </div>

        </div>


        {/* STUDENT IMAGE */}

        <div className="student-image">

          <img
            src={StudentLogoCopy}
            alt="Student"
          />

        </div>

      </section>


      {/* ================= SIX BOX SECTION ================= */}

      <section className="six-box">


        {/* 1. STUDENT */}

        <div className="role-box">

          <img
            src={StudentLogoCopy}
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


        {/* 2. TEACHER */}

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


        {/* 3. INSTITUTION */}

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


        {/* 4. PROFESSIONAL MENTOR */}

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


        {/* 5. COMPANY */}

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


        {/* 6. JOB SEEKER */}

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
          BLUE STATS SECTION
      ================================================= */}

      <section className="stats-section">


        {/* 50K+ */}

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


        {/* 5K+ */}

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


        {/* 1K+ */}

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


        {/* 500+ */}

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


        {/* TOGETHER */}

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
          POPULAR LEARNING CATEGORIES
      ================================================= */}

      <section className="categories-section">

        <div className="categories-heading">

          <h2>
            Popular Learning Categories
          </h2>

          <a href="/">
            View All Categories
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
}


export default Header;
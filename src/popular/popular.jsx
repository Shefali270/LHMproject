import "./popular.css";
import englishLogo from "./english logo.webp";
import scanlogo from "./scanlogo.png";
import logo from "./splashLogo.png";
import  qr  from "./image";


function Popular() {
  const categories = [
    {
      icon: "📖",
      title: "School Education",
      sub: "(Class 9 - 12)",
      color: "blue",
    },
    {
      icon: "🎓",
      title: "Graduation",
      sub: "(B.Tech, BBA, BCA, B.Sc)",
      color: "purple",
    },
    {
      icon: "📚",
      title: "Post Graduation",
      sub: "(M.Tech, MBA, MCA)",
      color: "orange",
    },
    {
      icon: "📋",
      title: "Competitive Exams",
      sub: "(UPSC, SSC, State Exams)",
      color: "pink",
    },
    {
      icon: "⚙️",
      title: "Technical Training",
      sub: "(Industrial & Job Oriented)",
      color: "green",
    },
    {
      icon: "🌐",
      title: "Skills & Languages",
      sub: "(French, Arabic & More)",
      color: "violet",
    },
  ];

  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      badge: "♥ LIVE",
      badgeType: "live",
      title: (
        <>
          Complete NEET Preparation for
          <br />
          Class 11 & 12
        </>
      ),
      teacher: "Dr. Priya Sharma",
      rating: "4.8 (2.1K)",
      price: "₹4,999",
      oldPrice: "₹6,999",
    },

    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      badge: "Bestseller",
      badgeType: "best",
      title: (
        <>
          Full Stack Web Development
          <br />
          (Frontend to Backend)
        </>
      ),
      teacher: "Amit Verma",
      rating: "4.7 (1.8K)",
      price: "₹5,999",
      oldPrice: "₹8,999",
    },

    {
      image: englishLogo,
      badge: "♥ LIVE",
      badgeType: "live",
      title: "Spoken English Masterclass",
      teacher: "Neha Kapoor",
      rating: "4.8 (3.2K)",
      price: "₹1,999",
      oldPrice: "₹3,999",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      badge: "Bestseller",
      badgeType: "best",
      title: (
        <>
          Data Science & AI for
          <br />
          Beginners
        </>
      ),
      teacher: "Rahul Mehta",
      rating: "4.6 (1.5K)",
      price: "₹4,999",
      oldPrice: "₹7,999",
    },

    {
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=600&q=80",
      badge: "♥ LIVE",
      badgeType: "live",
      title: (
        <>
          UPSC Civil Services
          <br />
          Foundation
        </>
      ),
      teacher: "Sandeep Singh",
      rating: "4.8 (2.6K)",
      price: "₹6,999",
      oldPrice: "₹9,999",
    },
  ];

  return (
    <div className="popular-page">

      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-heading">

          <h2>
            Popular Learning Categories
          </h2>

          <a href="/">
            View All Categories <span>→</span>
          </a>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className={`category-card ${category.color}`}
              key={index}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.title}
              </h3>

              <p>
                {category.sub}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FEATURED COURSES ================= */}

      <section className="courses-section">

        <div className="section-heading">

          <h2>
            Featured Courses
          </h2>

          <a href="/">
            View All Courses <span>→</span>
          </a>

        </div>

        <div className="courses-wrapper">

          <div className="courses-grid">

            {courses.map((course, index) => (

              <div
                className="course-card"
                key={index}
              >

                {/* COURSE IMAGE */}

                <div className="course-image">

                  <img
                    src={course.image}
                    alt="Course"
                  />

                  <span
                    className={`course-badge ${course.badgeType}`}
                  >
                    {course.badge}
                  </span>

                  <button className="heart-button">
                    ♡
                  </button>

                </div>


                {/* COURSE CONTENT */}

                <div className="course-content">

                  <h3>
                    {course.title}
                  </h3>

                  <div className="course-info">

                    <span>
                      {course.teacher}
                    </span>

                    <span className="rating">
                      ⭐ {course.rating}
                    </span>

                  </div>

                  <div className="price-row">

                    <strong>
                      {course.price}
                    </strong>

                    <del>
                      {course.oldPrice}
                    </del>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button className="course-next">
            ›
          </button>

        </div>

      </section>


      {/* ================= MOBILE APP ================= */}

      <section className="app-section">

        <div className="app-left">

          <div className="phone-shape">

            <div className="phone-screen">

              <div className="phone-logo">
                🎓
              </div>

              <strong>
                LMH
              </strong>

              <span>
                LiveMentorHub
              </span>

              <small>
                Learn • Connect • Grow
              </small>

            </div>

          </div>

        </div>


        <div className="app-middle">

          <h2>
            Learn Anytime, Anywhere
            <br />
            with the LMH Mobile App
          </h2>

          <p>
            Access live classes, recorded sessions, doubt support,
            career guidance and more on the go.
          </p>

          <div className="store-buttons">

            <button>
              ▶
              <span>
                GET IT ON
                <br />
                <b>Google Play</b>
              </span>
            </button>

            <button>
              
              <span>
                Download on the
                <br />
                <b>App Store</b>
              </span>
            </button>

          </div>

        </div>


        <div className="app-features">

          <p>
            <span className="green-dot">✓</span>
            Live & Recorded Classes
          </p>

          <p>
            <span className="green-dot">✓</span>
            Doubt Solving
          </p>

          <p>
            <span className="green-dot">✓</span>
            Progress Tracking
          </p>

          <p>
            <span className="green-dot">✓</span>
            Course Certificates
          </p>

          <p>
            <span className="green-dot">✓</span>
            Mentor Support
          </p>

        </div>


       <div className="qr-section">
  <div className="qr-box">
    <img
      src={scanlogo}
      alt="scan"
    />
    {/* <span>▦</span> */}
  </div>

          <p>
            Scan to Download
          </p>
        
        
      <div className="learning">
        Your Learning Companion
      </div>
</div>
      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <h2>
            Ready to Start Your Learning Journey?
          </h2>

          <p>
            Join thousands of learners, teachers and institutions on
            LiveMentorHub.
          </p>

        </div>

        <button>
          Sign Up Now <span>→</span>
        </button>

        <div className="cta-text">
          Learn · Connect · Grow
        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-main">


          {/* ABOUT */}

          <div className="footer-about">

            {/* <div className="footer-logo">
              <span className="footer-icon"></span>
              <span className="footer-lmh">LMH</span>
            </div> */}

            <div className="footer-brand-text">
               <img
                        src={logo}
                        alt="LMH Project"
                        className="logo"
                      />
            <h2 className="company-name">
            LMH
          </h2>


             <h3>
          <span className="Live">Live</span><span
              className="MentorHub">MentorHub</span>
          </h3>


              <p>Learn • Connect • Grow</p>
            </div>

            <p className="about-text">
              LiveMentorHub is a next-generation learning and career
              platform connecting students, teachers, mentors,
              institutions and companies for a brighter future.
            </p>

            <div className="social-icons">

              <span>f</span>
              <span>in</span>
              <span>◎</span>
              <span>▶</span>
              <span>𝕏</span>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Courses</a>
            <a href="/">Mentors</a>
            <a href="/">Institutions</a>
    
            <a href="/">Contact</a>

          </div>


          {/* FOR USERS */}

          <div className="footer-column">

            <h3>
              For Users
            </h3>

            <a href="/">Students</a>
            <a href="/">Teachers</a>
            <a href="/">Institutions</a>
            <a href="/">Mentors</a>
            <a href="/">Companies</a>
            <a href="/">Job Seekers</a>

          </div>


          {/* RESOURCES */}

          <div className="footer-column">

            <h3>
              Resources
            </h3>

            <a href="/">Blogs</a>
            <a href="/">Success Stories</a>
            <a href="/">Help & Support</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Refund Policy</a>
     

          </div>


          {/* NEWSLETTER */}

          <div className="newsletter">

            <h3>
              Subscribe to Our Newsletter
            </h3>

            <p>
              Get the latest updates, courses and opportunities.
            </p>

            <div className="subscribe-box">

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>
                Subscribe
              </button>

            </div>

            <h2>
              A Brighter
              <br />
              Tomorrow Together ❤️
            </h2>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © 2026 LiveMentorHub. All rights reserved.
          </p>

          <p>
            Making Education Accessible for a Brighter Tomorrow ❤️
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Popular;
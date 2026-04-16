import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participation</h4>
                <h5>SIH & TechJam</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Finalist at Smart India Hackathon (SIH) 2025 – Selected among top national teams. Top 10 finish at TechJam national-level hackathon at Microsoft, Rank 2 at HackShastra among 4,000+ participants, and Rank 3 at HackEnergy. Selected finalist in 8+ national hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Manav Rachna University</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              CGPA: 7.2. Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management, Operating Systems, Generative AI Integration, and Secure Application Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

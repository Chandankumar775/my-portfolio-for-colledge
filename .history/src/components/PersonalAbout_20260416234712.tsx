import "./styles/PersonalAbout.css";

const PersonalAbout = () => {
  return (
    <div className="personal-about-wrapper" id="personal-about">
      <div className="personal-glass-card">
        <div className="personal-photo-container">
          <img 
            src="/images/chandan.jpg" 
            alt="Chandan" 
            className="personal-photo"
          />
        </div>
        <div className="personal-content">
          <h2 className="personal-title">The Mind Behind The Code</h2>
          <p className="personal-description">
            I am Chandan, an innovative Software Engineer from Faridabad. 
            Blending the lines between artificial intelligence, beautiful UI/UX, and robust software architectures, 
            I build digital experiences that leave a lasting impression. 
            Whether it's diving deep into blockchain networks or crafting glass-morphic 3D web applications, 
            my true passion lives at the cutting edge of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalAbout;
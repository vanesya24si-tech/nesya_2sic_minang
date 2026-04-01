import "./App.css";

// 1. Child: Header (Gaya Modern & Animasi)
function HeaderSection() {
  return (
    <header className="pcr-header">
      <div className="class-badge">✨ 2 SI C • Sistem Informasi</div>
      <h1 className="main-logo">Vanesya Digital Space</h1>
    </header>
  );
}

// 2. Child: ProfilePhoto (Menampilkan Phourto-144.jpg)
function ProfilePhoto() {
  return (
    <div className="photo-wrapper">
      <div className="photo-border">
       <img src="/Phourto-144.jpg" alt="Vanesya" className="avatar" />
      </div>
      <div className="status-online"></div>
    </div>
  );
}

  // 3. Child: ProfileInfo (Identitas PCR)
function ProfileInfo() {
  return (
    <div className="info-section">
      <h2 className="user-name">Vanesya Minang</h2>
      <p className="campus-info">Politeknik Caltex Riau</p>
    </div>
  );
}

// 4. Child: ProfessionalBio (Isi lebih bermanfaat)
function ProfessionalBio() {
  return (
    <section className="glass-card-content">
      <h3 className="section-title">About Me</h3>
      <p>
        Aspiring <b>System Information</b> student at PCR with a passion for 
        creating aesthetic and functional user interfaces. I love turning 
        complex problems into beautiful digital experiences. 🌸
      </p>
    </section>
  );
}

// 5. Child: Skills (Interaktif & Colorful)
function Skills() {
  const mySkills = ["React JS", "JavaScript", "UI Design", "Tailwind"];
  return (
    <div className="skill-container">
      <h3 className="section-title">Magical Skills</h3>
      <div className="pill-group">
        {mySkills.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}

// 6. Child: ContactFooter (Link Interaktif)
function ContactFooter() {
  return (
    <footer className="footer-area">
      <button className="contact-btn" onClick={() => window.open('https://instagram.com')}>
        Let's Connect 💌
      </button>
      <p className="copyright">© 2026 Vanesya • Built with React</p>
    </footer>
  );
}

// --- PARENT COMPONENT ---
function App() {
  return (
    <main className="main-viewport">
      <div className="main-portfolio-card">
        <HeaderSection />
        <ProfilePhoto />
        <ProfileInfo />
        <ProfessionalBio />
        <Skills />
        <ContactFooter />
      </div>
    </main>
  );
}

export default App;
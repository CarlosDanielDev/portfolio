import { profileData } from '@infrastructure/data/profile-data';
import './Footer.css';

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <p>
          <a href={`mailto:${profileData.contact.email}`}>{profileData.contact.email}</a>
          {' • '}
          <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {' • '}
          <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p className="footer-copyright">&copy; {new Date().getFullYear()} {profileData.name}</p>
      </div>
    </footer>
  );
} 
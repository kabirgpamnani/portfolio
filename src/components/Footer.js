import React from 'react';
import './Footer.css';
import linkedInIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/kabirpamnani/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://github.com/kabirgpamnani" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github" className="footer-icon" />
            </a>
        </footer>
    );
}

export default Footer;
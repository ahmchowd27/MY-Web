import styles from './Hero.module.css';
import heroimg from '../../assets/image (1).png';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/Ahmed Chowdhury - Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    // Determine which icons to use based on the current theme
    const themeIcon = theme === 'light' ? sunIcon : moonIcon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="Hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroimg} alt="Profile of Ahmed" />
                
                <img 
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="Theme icon"
                    onClick={toggleTheme}  // Added onClick to toggle theme
                />
            </div>
            <div className={styles.info}> {/* Corrected className spelling */}
                <h1>Ahmed <br /> Chowdhury</h1>
                <h2>Senior Year Student Aspiring Software Developer</h2>
                <span>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/ahmchowd27" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>
                    <a href="https://linkedin.com/in/ahmed-s-chowdhury" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                    </a>
                </span>
                <p>
                    I am a Java developer with strong skills in object-oriented programming (OOP). 
                    I am also familiar with HTML, CSS, and JavaScript, and currently learning React
                    to enhance my front-end development capabilities.
                </p>
                <a href={resume} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;

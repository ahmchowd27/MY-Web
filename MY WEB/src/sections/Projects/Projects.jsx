import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/logo.jpg';
import freshBurger from '../../assets/clipart1319878.png';
import hipsster from '../../assets/pngwing.com.png';
import fitLift from '../../assets/restaurent.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/ahmchowd27/BankManagement"
          h3="ATM"
          p="Banking App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ahmchowd27/Employee-Management-System-master"
          h3="Employee"
          p="Employee Management"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/ahmchowd27/UI-UX-design"
          h3="GPT"
          p="Page For AI"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/ahmchowd27/Email-generator"
          h3="Khai Khai"
          p="Indian Restaurent"
        />
      </div>
    </section>
  );
}

export default Projects;

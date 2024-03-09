import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.horizontalLine}></div>
      <h1 className={styles.title}>
        <b>Welcome to All About Calisthenics, your ultimate resource for all things related to bodyweight fitness and calisthenics.<br /><br />
          Our mission is to inspire and empower individuals to achieve their fitness goals through calisthenics,
          a form of exercise that uses minimal equipment and relies on bodyweight resistance.
          Whether you're a beginner looking to get started or an advanced practitioner seeking new challenges, we've got you covered.<br /><br />
          At All About Calisthenics, we believe that fitness is not just about physical strength, but also about mental resilience and discipline.
          Through our informative articles, expert tips, and inspiring stories, we aim to educate, motivate,
          and support our community in their fitness journey.<br /><br />
          Join us as we explore the world of calisthenics and discover the amazing things your body can achieve. Let's move, grow, and inspire together.
        </b>
      </h1>
    </div>
  );
};

export default AboutPage;

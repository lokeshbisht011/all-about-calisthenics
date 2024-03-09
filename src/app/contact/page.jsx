import styles from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.horizontalLine}></div>
      <h1 className={styles.title}>
        <b>Thank you for your interest in contacting us. Please email us at allaboutcalisthenics@gmail.com to send us your message, and we will get back to you as soon as possible.</b>
      </h1>
    </div>
  );
};

export default ContactPage;

import styles from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.contactUsParent}>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.getInTouch}>GET IN TOUCH</div>
      <img className={styles.groupChild} alt="" src="/rectangle-68@2x.png" />
      <img className={styles.groupItem} alt="" src="/rectangle-69@2x.png" />
      <img className={styles.groupInner} alt="" src="/rectangle-70@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-71@2x.png" />
      <div className={styles.nameParent}>
        <div className={styles.name}>Name</div>
        <img className={styles.groupIcon} alt="" src="/group-184@2x.png" />
      </div>
      <div className={styles.emailParent}>
        <div className={styles.name}>Email</div>
        <img className={styles.groupChild1} alt="" src="/group-186@2x.png" />
      </div>
      <div className={styles.subjectParent}>
        <div className={styles.name}>Subject</div>
        <img className={styles.groupChild2} alt="" src="/group-188@2x.png" />
      </div>
      <div className={styles.yourMessageParent}>
        <div className={styles.name}>Your Message</div>
        <img className={styles.groupChild3} alt="" src="/group-190@2x.png" />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild4} alt="" src="/rectangle-72@2x.png" />
        <div className={styles.submit}>SUBMIT</div>
      </div>
    </div>
  );
};

export default ContactContainer;

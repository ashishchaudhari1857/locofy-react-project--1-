import styles from "./ExpertiseForm.module.css";

const ExpertiseForm = () => {
  return (
    <div className={styles.ourAreaExpertiseParent}>
      <div className={styles.ourAreaExpertise}>Our Area Expertise</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-40@2x.png"
          />
          <img className={styles.groupItem} alt="" src="/group-70@2x.png" />
        </div>
        <div className={styles.webDevelopment}>Web Development</div>
        <img className={styles.groupInner} alt="" src="/group-72@2x.png" />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-43@2x.png" />
        <div className={styles.mobileApplicationDevelopmentContainer}>
          <p className={styles.mobileApplication}>Mobile Application</p>
          <p className={styles.mobileApplication}>Development</p>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-93@2x.png" />
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.groupChild} alt="" src="/rectangle-48@2x.png" />
        <div className={styles.ecommerceWebDevelopment}>
          eCommerce Web Development
        </div>
        <img className={styles.groupChild2} alt="" src="/group-104@2x.png" />
      </div>
      <div className={styles.vectorContainer}>
        <img className={styles.groupChild} alt="" src="/rectangle-50@2x.png" />
        <div className={styles.uiuxDesigning}>UI/UX Designing</div>
        <img className={styles.groupChild4} alt="" src="/group-119@2x.png" />
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.groupChild} alt="" src="/rectangle-51@2x.png" />
        <div className={styles.digitalMarketing}>Digital Marketing</div>
        <img className={styles.groupChild6} alt="" src="/group-123@2x.png" />
      </div>
      <div className={styles.vectorParent1}>
        <img className={styles.groupChild} alt="" src="/rectangle-52@2x.png" />
        <div className={styles.websiteAppContainer}>
          <p className={styles.mobileApplication}>{`Website & App`}</p>
          <p className={styles.mobileApplication}>Maintenance</p>
        </div>
        <img className={styles.groupChild8} alt="" src="/group-126@2x.png" />
      </div>
    </div>
  );
};

export default ExpertiseForm;

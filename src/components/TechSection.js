import styles from "./TechSection.module.css";

const TechSection = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-65@2x.png" />
        <img className={styles.groupItem} alt="" src="/ellipse-24@2x.png" />
        <img className={styles.path304Icon} alt="" src="/path-304@2x.png" />
        <div className={styles.enterYourEmail}>Enter Your Email</div>
      </div>
      <img className={styles.path305Icon} alt="" src="/path-305@2x.png" />
      <div className={styles.allRightReservedByTechEruParent}>
        <div className={styles.allRightReservedContainer}>
          <span>{`2019 All right reserved by `}</span>
          <b>{`Tech Erudite `}</b>
        </div>
        <img className={styles.groupInner} alt="" src="/group-168@2x.png" />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groupDiv}>
          <div className={styles.eruditeParent}>
            <div className={styles.erudite}>ERUDITE</div>
            <div className={styles.tech}>TECH</div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group-171@2x.png" />
        </div>
        <div className={styles.groupParent1}>
          <img className={styles.groupChild1} alt="" src="/group-174@2x.png" />
          <img className={styles.groupChild2} alt="" src="/group-176@2x.png" />
          <img className={styles.groupChild3} alt="" src="/group-178@2x.png" />
        </div>
        <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </div>
      </div>
      <div className={styles.quickLinksParent}>
        <div className={styles.quickLinks}>Quick Links</div>
        <div className={styles.webDevelopment}>Web Development</div>
        <div className={styles.cmsCommerce}>{`CMS & Commerce`}</div>
        <div className={styles.mobileAppDeveloment}>Mobile App Develoment</div>
        <div className={styles.digitalMarketing}>Digital marketing</div>
        <div className={styles.uiuxDesign}>UI/UX Design</div>
      </div>
      <div className={styles.comapnyParent}>
        <div className={styles.comapny}>Comapny</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.tearmsOfServices}>Tearms of Services</div>
        <div className={styles.legalInfo}>Legal Info</div>
        <div className={styles.knowledgeBase}>Knowledge Base</div>
        <div className={styles.contactUs}>Contact us</div>
      </div>
      <div className={styles.loremIpsumIs1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </div>
      <div className={styles.subscribeOurNewsletter}>
        Subscribe Our Newsletter
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-67@2x.png" />
    </div>
  );
};

export default TechSection;

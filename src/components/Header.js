import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.groupChild} alt="" src="/rectangle-62@2x.png" />
      <img className={styles.groupItem} alt="" src="/rectangle-80@2x.png" />
      <div className={styles.groupParent}>
        <div className={styles.path4Parent}>
          <img className={styles.path4Icon} alt="" src="/path-4@2x.png" />
          <div className={styles.groupContainer}>
            <img className={styles.groupInner} alt="" src="/group-6@2x.png" />
            <img className={styles.groupIcon} alt="" src="/group-7@2x.png" />
            <img className={styles.groupChild1} alt="" src="/group-8@2x.png" />
          </div>
          <div className={styles.home}>HOME</div>
          <div className={styles.whatWeDo}>WHAT WE DO</div>
          <div className={styles.hireExperts}>HIRE EXPERTS</div>
          <div className={styles.company}>COMPANY</div>
          <div className={styles.company}>COMPANY</div>
          <div className={styles.sayHello}>SAY HELLO!</div>
          <img className={styles.path5Icon} alt="" src="/path-5@2x.png" />
          <img className={styles.path6Icon} alt="" src="/path-6@2x.png" />
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupChild2} alt="" src="/group-4@2x.png" />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
      </div>
      <div
        className={styles.loremIpsumIs}
      >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `}</div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.groupChild3} />
    </div>
  );
};

export default Header;

import styles from "./CEOContainer.module.css";

const CEOContainer = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-155@2x.png" />
      <img className={styles.groupItem} alt="" src="/group-156@2x.png" />
      <div className={styles.ceo}>CEO</div>
      <div className={styles.forMyReactContainer}>
        <span>{`For my react native applications, Tejash and his team has provided me very professional and `}</span>
        <i>{`captivative app. They worked dedicatedly and keep me updated with project updates. I think `}</i>
        <span>
          that is the best support from the team for me. Thank you for the best
          application.
        </span>
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-59@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CEOContainer;

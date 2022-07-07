import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { NextPage } from "next";
import { Button } from "react-bootstrap";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <Parallax pages={3.5} className={styles["wrapper"]}>
      <ParallaxLayer sticky={{ start: 0, end: 1.5 }}>
        <img alt="background" src="/images/background.png" />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 1.5 }}>
        <div className={styles["color-area"]}></div>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 1, end: 1.5 }}
        className={styles["content-container"]}
      >
        <div>
          <h1 style={{ fontSize: "72px" }}>
            TOKAI
            <br />
            STUDENT
            <br />
            ROCKET
            <br />
            PROJECT
          </h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.5}>
        <img alt="engine" src="/images/engine.jpg" />
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} className={styles["content-container"]}>
        <div>
          <h1 style={{ fontSize: "64px", margin: "0 0 15%" }}>Combustion</h1>
          <Button size="lg" variant="outline-light">
            LEARN MORE
          </Button>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

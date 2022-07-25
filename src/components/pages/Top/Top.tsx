import { Col, Container, Row } from "react-bootstrap";
import Img from "react-optimized-image";
import styles from "./Top.module.scss";

export const Top = () => {
  return (
    <div>
      <div className={styles["hero"]}>
        <Img src={require("./images/tsrp.jpeg")} alt="tsrp" webp />
      </div>
      <Container style={{ padding: "64px 0" }}>
        <Row>
          <Col lg={6}>
            <div style={{ color: "white" }}>
              <p style={{ marginBottom: "32px" }}>
                TSRPは手作りで低価格なロケット開発の場を学生に提供することで、学生が机上の勉学では学べない、
                宇宙理工学の知識・技術を修得させ、将来の宇宙技術者を養成することを目的として1995年に設立されました。
                ロケットの設計・制作、搭載計器の動作試験、実験から得られたデータ解析など多岐に渡るロケットミッションの活動を通じて、
                技術面の向上だけではなく、マネジメント力、メンバーとの協調性、コミュニケーション能力など、学生の社会性の育成も目的としています。
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <img
              src="https://fakeimg.pl/1920x1080/?text=TSRP&font=noto"
              alt="tsrp"
              style={{ height: "auto", width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
      <div className={styles["hero"]}>
        <img
          src="https://fakeimg.pl/1920x1080/?text=Mechanism&font=noto"
          alt="mechanism"
        />
      </div>
      <div className={styles["hero"]}>
        <img
          src="https://fakeimg.pl/1920x1080/?text=Combustion&font=noto"
          alt="combustion"
        />
      </div>
      <div className={styles["hero"]}>
        <img
          src="https://fakeimg.pl/1920x1080/?text=Electric&font=noto"
          alt="electric"
        />
      </div>
    </div>
  );
};

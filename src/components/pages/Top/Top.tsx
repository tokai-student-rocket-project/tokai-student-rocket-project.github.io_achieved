import ExportedImage from "next-image-export-optimizer";
import { useEffect, useRef } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./Top.module.scss";

export const Top = () => {
  const backgroundImageReference = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position = window.scrollY;

    if (backgroundImageReference.current != null) {
      backgroundImageReference.current.style.top = `${
        position - position / 2
      }px`;
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="position-relative vh-100" ref={backgroundImageReference}>
        <ExportedImage
          src="images/pages/Top/tsrp.jpeg"
          layout="fill"
          alt="tsrp"
          objectFit="cover"
          objectPosition="40% 0"
        />
      </div>

      <Stack gap={5} className="position-relative py-5 text-bg-dark">
        <Container>
          <Row>
            <Col>
              <p className="mb-4 fs-1">TSRP</p>
              <p>
                TSRPは手作りで低価格なロケット開発の場を学生に提供することで、学生が机上の勉学では学べない、
                宇宙理工学の知識・技術を修得させ、将来の宇宙技術者を養成することを目的として1995年に設立されました。
                ロケットの設計・制作、搭載計器の動作試験、実験から得られたデータ解析など多岐に渡るロケットミッションの活動を通じて、
                技術面の向上だけではなく、マネジメント力、メンバーとの協調性、コミュニケーション能力など、学生の社会性の育成も目的としています。
              </p>
              <p>
                全長が2
                m程の小型ロケットを夏と冬の年に2回打ち上げています。ロケットのボディだけでなく、搭載される電子機器、
                ロケットエンジンまで全て学生が開発しています。ロケットは高度約2.4
                kmまで到達しました。
                現在は60人ほどの人間が在籍しており、幾つかのセクションに分かれて分業制で開発をしています。
                航空宇宙学科の学生だけでなく工学部の様々な学科の学生が学部1年から修士2年まで幅広く参加しています。
                現在はロケットの大型化と高高度化を進めており、高度10
                kmへ到達するロケットを開発中です。
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6}>
              <p className="mb-4 fs-2">各班紹介</p>
              <p className="mb-4">
                TSRPでは幾つかの班に分かれてロケット開発を行っています。ここではTSRPを構成する班とそれぞれ活動を紹介します。
              </p>
              <Button variant="outline-light" className="mb-4">
                詳細を見る
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles["image-container"]}>
                <ExportedImage
                  src="https://fakeimg.pl/1920x1080/?text=Team&font=noto"
                  alt="team"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6}>
              <p className="mb-4 fs-2">機体</p>
              <p className="mb-4">
                TSRPで開発しているロケットはハイブリッドロケットと呼ばれる種類のロケットエンジンを搭載しています。
                全長は約2 mから3 mです。到達高度200 mから2.4
                kmで、これはエンジンのパワーの強さや実験の目的によって変化します。
                機体はモジュール式の構造になっており、部品の再利用や、ミッションごとにモジュールの組換えが可能になっています。
                下の図はTSRPで打上げているロケットの例です。
              </p>
              <Button variant="outline-light" className="mb-4">
                詳細を見る
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles["image-container"]}>
                <ExportedImage
                  src="https://fakeimg.pl/1920x1080/?text=Vehicle&font=noto"
                  alt="vehicle"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={6}>
              <p className="mb-4 fs-2">ミッション</p>
              <p className="mb-4">
                TSRPでは年に2回のロケット打上実験を行っています。夏は秋田県能代市を、冬は北海道広尾郡大樹町を発射場としています。
                両自治体には打上げに適した広大な用地があるだけでなく、ロケット打上実験など宇宙技術実験の実施を積極的に支援しており、学生のロケット打上げにとって無くてはならない貴重な場所です。
              </p>
              <Button variant="outline-light" className="mb-4">
                詳細を見る
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles["image-container"]}>
                <ExportedImage
                  src="https://fakeimg.pl/1920x1080/?text=Mission&font=noto"
                  alt="mission"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Stack>

      <div className={styles["image-gallery"]}>
        <ExportedImage
          src="images/pages/Top/image0.jpg"
          alt="image0"
          layout="fill"
          objectFit="cover"
        />
        <ExportedImage
          src="images/pages/Top/image1.jpg"
          alt="image1"
          layout="fill"
          objectFit="cover"
        />
        <ExportedImage
          src="images/pages/Top/image2.jpg"
          alt="image2"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

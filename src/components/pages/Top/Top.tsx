import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Img from "react-optimized-image";
import styles from "./Top.module.scss";

const setShow = (
  position: number,
  element: HTMLDivElement | null,
  setFunction: Dispatch<SetStateAction<boolean>>
) => {
  if (element == null) {
    return;
  }

  setFunction(position > element.offsetTop + element.clientHeight / 2);
};

export const Top = () => {
  const tsrpRef = useRef<HTMLDivElement>(null);

  const mechanismRef = useRef<HTMLDivElement>(null);
  const [showMechanism, setShowMechanism] = useState(false);

  const combustionRef = useRef<HTMLDivElement>(null);
  const [showCombustion, setShowCombustion] = useState(false);

  const electricRef = useRef<HTMLDivElement>(null);
  const [showElectric, setShowElectric] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;

    if (tsrpRef.current != null) {
      tsrpRef.current.style.top = `${position - position / 2}px`;
    }

    setShow(position, mechanismRef.current, setShowMechanism);
    setShow(position, combustionRef.current, setShowCombustion);
    setShow(position, electricRef.current, setShowElectric);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles["hero"]} ref={tsrpRef}>
        <Img
          src={require("./images/tsrp.jpeg")}
          alt="tsrp"
          webp
          style={{ objectPosition: "40% 0" }}
        />
      </div>

      <div className={styles["content-container"]}>
        <Container style={{ paddingTop: "64px", paddingBottom: "48px" }}>
          <p>
            TSRPは手作りで低価格なロケット開発の場を学生に提供することで、学生が机上の勉学では学べない、
            宇宙理工学の知識・技術を修得させ、将来の宇宙技術者を養成することを目的として1995年に設立されました。
            ロケットの設計・制作、搭載計器の動作試験、実験から得られたデータ解析など多岐に渡るロケットミッションの活動を通じて、
            技術面の向上だけではなく、マネジメント力、メンバーとの協調性、コミュニケーション能力など、学生の社会性の育成も目的としています。
          </p>
        </Container>

        <div className={styles["images"]}>
          <div>
            <Img src={require("./images/image0.jpg")} alt="image0" webp />
          </div>
          <div>
            <Img src={require("./images/image1.jpg")} alt="image1" webp />
          </div>
          <div>
            <Img src={require("./images/image2.jpg")} alt="image2" webp />
          </div>
        </div>

        <div className={styles["hero"]} ref={mechanismRef}>
          <img
            src="https://fakeimg.pl/1920x1080/?text=Mechanism&font=noto"
            alt="combustion"
            style={{ objectPosition: "60% 0" }}
          />
          <div
            className={`${styles["hero-container"]} ${
              showMechanism ? styles["fade-in"] : ""
            }`}
          >
            <div>
              <div className={styles["headline-english"]}>Mechanism</div>
              <div className={styles["headline-japanese"]}>＿＿ 構造機構班</div>
              <p>
                ロケットのボディなどの設計と製造を担当しています。
                ロケットは上昇後、上空でパラシュートを開傘して地上へ軟着陸しますが、そのためのパラシュート放出機構も開発しています。
                ロケットに関する全ての設計は最終的に構造機構班のチーフデザイナーへ集約されます。
              </p>
              <Button size="lg" variant="outline-light">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>

        <div className={styles["hero"]} ref={combustionRef}>
          <Img src={require("./images/combustion.jpg")} alt="combustion" webp />
          <div
            className={`${styles["hero-container"]} ${
              showCombustion ? styles["fade-in"] : ""
            }`}
          >
            <div>
              <div className={styles["headline-english"]}>Combustion</div>
              <div className={styles["headline-japanese"]}>＿＿ 燃焼班</div>
              <p>
                ハイブリッドロケットと呼ばれるロケットエンジンの開発を担当しています。
                エンジンの設計や固体燃料の研究を行い、より大型で高性能なエンジンの実現を追求しています。
                大学構内でロケットエンジンの動作テスト（燃焼実験）も行っています。
                また、ロケット発射台の保守と運用も行っています。
                ロケット発射台はこれらの活動はTSRPの打上げのみならず他大学の打上げでも必要とされるため、他大学の打上げ作業でも大きく活躍しています。
              </p>
              <Button size="lg" variant="outline-light">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>

        <div className={styles["hero"]} ref={electricRef}>
          <img
            src="https://fakeimg.pl/1920x1080/?text=Electric&font=noto"
            alt="combustion"
            style={{ objectPosition: "60% 0" }}
          />
          <div
            className={`${styles["hero-container"]} ${
              showElectric ? styles["fade-in"] : ""
            }`}
          >
            <div>
              <div className={styles["headline-english"]}>Electric</div>
              <div className={styles["headline-japanese"]}>＿＿ 計測制御班</div>
              <p>
                ロケットに搭載される電子機器の開発を担当します。
                ロケットには必ず電子機器が搭載されます。
                これはロケットの姿勢や位置、パラシュートの開傘指令などを出すために必要だからです。
                打上実験後にはロケット搭載計器のデータが読み出され、データは全ての班での開発に役立てられます。
              </p>
              <Button size="lg" variant="outline-light">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

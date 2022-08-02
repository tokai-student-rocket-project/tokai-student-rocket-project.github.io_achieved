import ExportedImage from "next-image-export-optimizer";
import { useEffect, useRef } from "react";
import { Container, Stack } from "react-bootstrap";
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

      <Stack className="position-relative text-bg-dark">
        <Container>
          <p>
            TSRPは手作りで低価格なロケット開発の場を学生に提供することで、学生が机上の勉学では学べない、
            宇宙理工学の知識・技術を修得させ、将来の宇宙技術者を養成することを目的として1995年に設立されました。
            ロケットの設計・制作、搭載計器の動作試験、実験から得られたデータ解析など多岐に渡るロケットミッションの活動を通じて、
            技術面の向上だけではなく、マネジメント力、メンバーとの協調性、コミュニケーション能力など、学生の社会性の育成も目的としています。
          </p>
        </Container>
      </Stack>

      <div className={styles["gallery"]}>
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

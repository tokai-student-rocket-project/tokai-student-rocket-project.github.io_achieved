import type { NextPage } from "next";
import { Carousel } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img alt="slide0" width="100%" height="auto" src="/images/img.png" />
      </Carousel.Item>
      {/*<Carousel.Item>*/}
      {/*  <img*/}
      {/*    alt="slide0"*/}
      {/*    width="100%"*/}
      {/*    height="auto"*/}
      {/*    src="/images/slides/slide0.png"*/}
      {/*  />*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item>*/}
      {/*  <img*/}
      {/*    alt="slide1"*/}
      {/*    width="100%"*/}
      {/*    height="auto"*/}
      {/*    src="/images/slides/slide1.jpg"*/}
      {/*  />*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item>*/}
      {/*  <img*/}
      {/*    alt="slide2"*/}
      {/*    width="100%"*/}
      {/*    height="auto"*/}
      {/*    src="/images/slides/slide2.jpg"*/}
      {/*  />*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item>*/}
      {/*  <img*/}
      {/*    alt="slide3"*/}
      {/*    width="100%"*/}
      {/*    height="auto"*/}
      {/*    src="/images/slides/slide3.png"*/}
      {/*  />*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item>*/}
      {/*  <img*/}
      {/*    alt="slide4"*/}
      {/*    width="100%"*/}
      {/*    height="auto"*/}
      {/*    src="/images/slides/slide4.jpg"*/}
      {/*  />*/}
      {/*</Carousel.Item>*/}
    </Carousel>
  );
};

export default Home;

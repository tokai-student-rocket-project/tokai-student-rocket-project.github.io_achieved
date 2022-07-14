import { Button, Col, Container, Row } from "react-bootstrap";

const Electric = () => {
  return (
    <Container style={{ marginTop: "64px" }}>
      <Row>
        <Col lg={6}>
          <div style={{ color: "white" }}>
            <h2 style={{ marginBottom: "64px" }}>計測制御班</h2>
            <p style={{ marginBottom: "32px" }}>
              ロケットに搭載される電子機器の開発を担当します。
              ロケットには必ず電子機器が搭載されます。
              これはロケットの姿勢や位置、パラシュートの開傘指令などを出すために必要だからです。
              打上実験後にはロケット搭載計器のデータが読み出され、データは全ての班での開発に役立てられます。
            </p>
            <Button variant="outline-light" style={{ marginBottom: "32px" }}>
              詳細を見る
            </Button>
          </div>
        </Col>

        <Col lg={6}>
          <img
            src="https://fakeimg.pl/1920x1080/?text=Electric&font=noto"
            alt="combustion"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Electric;

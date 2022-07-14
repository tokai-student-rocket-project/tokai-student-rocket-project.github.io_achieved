import { Button, Col, Container, Row } from "react-bootstrap";

const Combustion = () => {
  return (
    <Container style={{ marginTop: "64px" }}>
      <Row>
        <Col lg={6}>
          <div style={{ color: "white" }}>
            <h2 style={{ marginBottom: "64px" }}>燃焼班</h2>
            <p style={{ marginBottom: "32px" }}>
              ハイブリッドロケットと呼ばれるロケットエンジンの開発を担当しています。
              エンジンの設計や固体燃料の研究を行い、より大型で高性能なエンジンの実現を追求しています。
              大学構内でロケットエンジンの動作テスト（燃焼実験）も行っています。
              また、ロケット発射台の保守と運用も行っています。
              ロケット発射台はこれらの活動はTSRPの打上げのみならず他大学の打上げでも必要とされるため、他大学の打上げ作業でも大きく活躍しています。
            </p>
            <Button variant="outline-light" style={{ marginBottom: "32px" }}>
              詳細を見る
            </Button>
          </div>
        </Col>

        <Col lg={6}>
          <img
            src="https://fakeimg.pl/1920x1080/?text=Combustion&font=noto"
            alt="combustion"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Combustion;

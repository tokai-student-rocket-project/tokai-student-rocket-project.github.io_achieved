import { Button, Col, Container, Row } from "react-bootstrap";

export const Mechanism = () => {
  return (
    <Container style={{ marginTop: "64px" }}>
      <Row>
        <Col lg={6}>
          <div style={{ color: "white" }}>
            <h2 style={{ marginBottom: "64px" }}>構造機構班</h2>
            <p style={{ marginBottom: "32px" }}>
              ロケットのボディなどの設計と製造を担当しています。
              ロケットは上昇後、上空でパラシュートを開傘して地上へ軟着陸しますが、そのためのパラシュート放出機構も開発しています。
              ロケットに関する全ての設計は最終的に構造機構班のチーフデザイナーへ集約されます。
            </p>
            <Button variant="outline-light" style={{ marginBottom: "32px" }}>
              詳細を見る
            </Button>
          </div>
        </Col>

        <Col lg={6}>
          <img
            src="https://fakeimg.pl/1920x1080/?text=Mechanism&font=noto"
            alt="combustion"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

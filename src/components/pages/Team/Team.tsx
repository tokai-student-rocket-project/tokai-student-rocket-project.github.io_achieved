import { Stack } from "react-bootstrap";
import Combustion from "./components/Combustion/Combustion";
import Electric from "./components/Electric/Electric";
import Mechanism from "./components/Mechanism/Mechanism";

const Team = () => {
  return (
    <Stack gap={5} style={{ padding: "64px 0" }}>
      <Mechanism />
      <Combustion />
      <Electric />
    </Stack>
  );
};

export default Team;

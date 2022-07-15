import { Stack } from "react-bootstrap";
import { Combustion } from "./components/Combustion/";
import { Electric } from "./components/Electric/";
import { Mechanism } from "./components/Mechanism/";

export const Team = () => {
  return (
    <Stack gap={5} style={{ padding: "64px 0" }}>
      <Mechanism />
      <Combustion />
      <Electric />
    </Stack>
  );
};

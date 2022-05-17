import styled from "styled-components";
import { AssemblyAILogo } from "@/components";

const Container = styled.div`
  left: 50%;
  margin-top: 40px;
  position: absolute;
  transform: translateX(-50%);
`

const LogoHeader = () => (
  <Container>
    <AssemblyAILogo
      data-testid="LogoHeader-logo"
      style={{
        width: 148.8,
      }}
    />
  </Container>
)

export default LogoHeader
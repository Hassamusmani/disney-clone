import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  /* margin-bottom: 10vw; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 4rem;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("Assets/Images/login-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 1.2rem;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bolder;
  color: #f9f9f9;
  background-color: #0063e6;
  width: 100%;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 1.8rem;
  padding: 1.65rem 0;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1.2rem;
  margin: 0 0 2.4rem;
  line-height: 1.5;
  letter-spacing: 0.15rem;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 2rem;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="Assets/Images/cta-logo-one.svg" alt="" />
          <SignUp>Get All There</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with the Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="Assets/Images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

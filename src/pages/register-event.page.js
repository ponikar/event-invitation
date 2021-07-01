// RegisterEvent page form
import React, { useCallback, useState } from "react";
import { submitFormAPI } from "../apis/submit-form.api";
import { Container } from "../components/Common/Container/container.component";
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { AnimatedParticles } from "../components/Common/Particles/particles.component";
import { RegisterForm } from "../components/Register_Event/RegisterForm/register-form.component";
import { useTitle } from "../hooks/useTitle.component";
import { Ticket } from "../components/Register_Event/Ticket/ticket.component";

const DEFAULT_STATE = {
  userName: "",
  EmailId: "",
  Semester: "",
  department: "",
  collegeName: "",
  desc: "",
};
const defaultHelpers = {
  isLoading: false,
  message: "",
  success: false,
};
export const RegisterEvent = () => {
  const [viewerRegistration, setViewerRegistration] = useState(DEFAULT_STATE);
  const [helpers, setHelpers] = useState(defaultHelpers);
  useTitle("NXT.Tech | Regiser Event")
  const { success } = helpers;

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setHelpers({ ...defaultHelpers, isLoading: true });
        const response = await submitFormAPI(viewerRegistration);
        const data = await response.json();
        // setViewerRegistration(DEFAULT_STATE);
        setHelpers({
          message: "Thank you, See you there!",
          isLoading: false,
          success: true,
        });
      } catch (e) {
        setHelpers({
          message: "Something went wrong!",
          isLoading: false,
          success: false,
        });
      }
    },
    [viewerRegistration]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setViewerRegistration({ ...viewerRegistration, [name]: value });
  };
  
  return (
    <PageBase>
      <HeaderTitle className="relative top-10" title="Get Ready to Explore." />
      <Container className={`flex flex-col relative items-center h-screen`}>
        <img
          alt="nxt.tech Register page"
          src="/assets/svgs/background.svg"
          className="w-full sm:block hidden abs-center"
        />
       { !success ? <Ticket /> : <RegisterForm
          {...{ handleChange, handleSubmit, viewerRegistration, helpers }}
        />}
      </Container>
      {success && <AnimatedParticles />}
    </PageBase>
  );
};

export default RegisterEvent;

// RegisterEvent page form
import React, { useCallback, useState } from "react";
import { submitFormAPI } from "../apis/submit-form.api";
import { Container } from "../components/Common/Container/container.component";
import { InputBox } from "../components/Common/Container/Register_Event/Input/input.compnent";
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component"

const DEFAULT_STATE = {
  userName: "",
  EmailId: "",
  Semester: "",
  department: "",
  collegeName: "",
  desc: "",
}
const defaultHelpers = {
  isLoading:false,
  message: "",
  success: false
}
export const RegisterEvent = () => {
  const [viewerRegistration, setViewerRegistration] = useState(DEFAULT_STATE);
  const [helpers, setHelpers] = useState(defaultHelpers);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
        setHelpers({ ...defaultHelpers, isLoading: true });
        const response = await submitFormAPI(viewerRegistration);
        const data = await response.json();
        console.log("working", data)
        setViewerRegistration(DEFAULT_STATE);
        setHelpers({ message: "Thank you, See you there!", isLoading: false, success:true });
    } catch(e) {
      setHelpers({ message: "Something went wrong!", isLoading: false, success: false })
    }
  }, [viewerRegistration]);

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setViewerRegistration({ ...viewerRegistration, [name]: value }); 
  };

  return (
    <PageBase>
      <HeaderTitle className="relative top-10" title="Get Ready to Explore." />
      <Container className="flex relative flex-col justify-center items-center h-screen">
        <img alt="nxt.tech Register page" src="/assets/svgs/background.svg" className="w-full sm:block hidden abs-center" />
        <section className="bg-white border z-10 shadow border-pc w-full md:w-9/12 lg:w-2/5 xl:w-4/12 p-4 rounded-pm mx-auto">
          <form onSubmit={handleSubmit}>
            <InputBox
              label="Your Name"
              name="userName"
              placeholder="John Doe"
              value={viewerRegistration.userName}
              onChange={handleChange}
            />
            <InputBox
              type="email"
              label="Email Id"
              name="EmailId"
              placeholder="emailaddress@gmail.com"
              value={viewerRegistration.EmailId}
              onChange={handleChange}
            />
            <InputBox
              label="Semester"
              name="Semester"
              type="number"
              placeholder="Current Sem"
              value={viewerRegistration.Semester}
              onChange={handleChange}
            />
            <InputBox
              label="Department"
              name="department"
              placeholder="Department"
              value={viewerRegistration.department}
              onChange={handleChange}
            />
            <InputBox
              label="College Name"
              name="collegeName"
              placeholder="College Name"
              value={viewerRegistration.collegeName}
              onChange={handleChange}
            />
            <InputBox
              label="How did you hear about NXT.Tech ?"
              name="desc"
              placeholder="i.e Linkedin, Whatsapp Group, Friend Suggested"
              value={viewerRegistration.desc}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full py-2 px-4 text-sm bg-primary text-white rounded-pm focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </section>
      </Container>
    </PageBase>
  );
};

export default RegisterEvent;

// RegisterEvent page form
import React, { useCallback, useEffect, useState } from "react";
import { submitFormAPI } from "../apis/submit-form.api";
import { Container } from "../components/Common/Container/container.component";
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { AnimatedParticles } from "../components/Common/Particles/particles.component";
import { RegisterForm } from "../components/Register_Event/RegisterForm/register-form.component";
import { useTitle } from "../hooks/useTitle.component";
import { Ticket } from "../components/Register_Event/Ticket/ticket.component";
import {
  storeFormFirestore,
  isEntryExistsFirestore,
} from "../firebase/firestore";
import { getUserId } from "../helpers/storage.helpers";
import { LoadingWithContainer } from "../components/Common/Loading/loading.component";
import { FirebaseAuth } from "../firebase/firebase.config";

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
  isLoadingExists: true,
  isExists: false,
};
const RegisterEvent = () => {
  const [viewerRegistration, setViewerRegistration] = useState(DEFAULT_STATE);
  const [showCelebrations, setShowCelebration] = useState(false);
  const [helpers, setHelpers] = useState(defaultHelpers);
  useTitle("NXT.Tech | Register Event");
  const { success } = helpers;
  const uid = getUserId();

  useEffect(() => {
    isEntryExists();
  }, []);

  useEffect(() => {
    if (success) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [helpers.success]);

  useEffect(() => {
    if(FirebaseAuth.currentUser) {
        setViewerRegistration({ ...viewerRegistration, EmailId: FirebaseAuth.currentUser })
    }
  }, [FirebaseAuth.currentUser]);

  const isEntryExists = async () => {
    const result = await isEntryExistsFirestore(uid);
    if (result) {
      setViewerRegistration(result);
      return setHelpers({ ...helpers, isLoadingExists: false, success: true });
    }

    setHelpers({ ...helpers, isLoadingExists: false });
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setHelpers({ ...helpers, isLoading: true });
        await submitFormAPI(viewerRegistration);
        await storeFormFirestore(uid, viewerRegistration);
        setHelpers({
          message: "Thank you, See you there!",
          isLoading: false,
          success: true,
        });
        setShowCelebration(true);
      } catch (e) {
        console.log("FORM ERROR", e.message);
        setHelpers({
          ...helpers,
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
      {helpers.isLoadingExists ? (
        <LoadingWithContainer />
      ) : (
        <>
          {" "}
          <HeaderTitle
            className="relative top-10"
            title="Get Ready to Explore."
          />
          <Container
            className={`flex flex-col relative items-center ${
              !success && "justify-center"
            } h-screen`}
          >
            {!success && (
              <img
                alt="nxt.tech Register page"
                src="/assets/svgs/background.svg"
                className="w-full sm:hidden md:hidden lg:block abs-center"
              />
            )}
            {success ? (
              <Ticket {...viewerRegistration} />
            ) : (
              <RegisterForm
                {...{ handleChange, handleSubmit, viewerRegistration, helpers }}
              />
            )}
          </Container>
          {success && showCelebrations && <AnimatedParticles />}
        </>
      )}
    </PageBase>
  );
};

export default RegisterEvent;

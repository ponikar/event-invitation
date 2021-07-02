import { useCallback, useState } from "react";
import { doSignIn } from "../../../firebase/firebase.auth";
import { PrimaryButton } from "../Button/button.component";
import { PageBase } from "../Page-Base/page-base.component";
import SectionTitle from "../Typography/section-title.component";

const DEFAULT_HELPERS = {
    isLoading:false,
    message: "We are excited to see you there!",
    success: false,
}

export const Guest = () => {
    const [helpers, setHelpers] = useState(DEFAULT_HELPERS);
  const signInWithGoogle = useCallback(async () => {
      try {
          setHelpers({ ...DEFAULT_HELPERS, isLoading: true });
          await doSignIn();
          setHelpers({ ...DEFAULT_HELPERS, message: "Redirecting...", success: true });
          window.location.reload();
      } catch(e) {
        setHelpers({ ...DEFAULT_HELPERS, message: "Something went wrong! Reload the page.", success: false });
         
      }
  }, []);

  return (
    <PageBase>
      <section className="flex flex-col justify-center mt-24 p-5 items-center">
        <SectionTitle title={helpers.message} />
        <PrimaryButton onClick={signInWithGoogle} className="my-1">Sign in with Google </PrimaryButton>
        <img
          alt="Event"
          loading="lazy"
          src="/assets/svgs/team.svg"
          className="lg:w-4/12 w-11/12 my-8"
        />
      </section>
    </PageBase>
  );
};




// About us Page

import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { AllMember } from "../components/About/AllMember.component";

export const About = () => {
    return <PageBase>
        <HeaderTitle className="mt-24" title="Hello there! Meet with our Community." />
        <AllMember /> 
    </PageBase>
}

export default About;
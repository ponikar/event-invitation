


// About us Page

import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { AllMember } from "../components/About/AllMember.component";
import { useTitle } from "../hooks/useTitle.component";

const About = () => {
    useTitle("NXT.Tech | Community")
    return <PageBase>
        <HeaderTitle className="mt-24" title="Hello there! Meet with our Community." />
        <AllMember /> 
    </PageBase>
}

export default About;



// About us Page

import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { Container  } from "../components/Common/Container/container.component"
import { Member } from "../components/About/member.component";

export const About = () => {
    return <PageBase>
        <HeaderTitle className="mt-24" title="Hello there! Meet with our Community." />
        <Container className="grid sm:grid-cols-4 grid-cols-2 gap-2 sm:w-7/12 w-full">
            <Member />
            <Member />
            <Member />
            <Member />
        </Container>
        <Container className="grid sm:grid-cols-5 grid-cols-2 sm:w-8/12 w-full">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member last />
        </Container>
        <Container className="grid sm:grid-cols-4 grid-cols-2 gap-2 sm:w-7/12 w-full">
            <Member />
            <Member />
            <Member />
            <Member />
        </Container>
    </PageBase>
}

export default About;
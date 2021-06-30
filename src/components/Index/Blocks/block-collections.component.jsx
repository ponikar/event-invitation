import { Container } from "../../Common/Container/container.component";
import SectionTitle from "../../Common/Typography/section-title.component";
import { BlockItem } from "./block-item.component";



const BlockCollections = () => {
    return <Container>
        <SectionTitle title="2 Days to Explore" />
        <div className="flex sm:w-10/12 sm:flex-row flex-col items-center mx-auto sm:justify-center">
            <BlockItem src="/assets/svgs/code.svg" tagline="Learn and Grow Together" />
            <BlockItem src="/assets/svgs/live.svg" tagline="Live Virtual Event" />
            <BlockItem src="/assets/svgs/interactive.svg" tagline="Highly  Interactive with Mentors" />
        </div>
    </Container>
}   

export default BlockCollections;
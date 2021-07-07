import { Members } from "../About/memberInfo"
import { Container } from "../Common/Container/container.component"
import { Member } from "../About/member.component"



export const AllMember =() =>{

   
   
    
    return(
        <div className="collection">
        <Container className="grid lg:grid-cols-4 grid-cols-2 gap-2 sm:w-7/12 w-full">
         { 
         Members.slice(0,4).map((member, index) => <Member key={index} {...member} />) 
         }
        </Container>

        <Container className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 sm:w-8/12 w-full">
            {
                Members.slice(4,9).map((member,index)=><Member last={index === Members.slice(4,9).length - 1} key={index} {...member}/>)
            }
        </Container>

        <Container className="grid lg:grid-cols-4 grid-cols-2 gap-2 sm:w-7/12 w-full">
         { 
         Members.slice(9,13).map((member, index) => <Member key={index} {...member} />) 
         }
        </Container>
        <Container className="grid lg:grid-cols-5 grid-cols-2 gap-2 sm:w-8/12 w-full">
         { 
         Members.slice(13).map((member, index) => <Member last={index === Members.slice(13).length - 1} key={index} {...member} />) 
         }
        </Container>
        
             
        </div>
    )


}
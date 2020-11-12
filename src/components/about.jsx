import React from 'react'
import { Container } from 'react-bootstrap'
import './css/about.css';
import Teammemeber from './Teammember';
function about() {
    return (
        <Container className='about'>
            <h1>education to everyone</h1>
 <p><per>
     <h3>Who we are </h3>
     Lernov is the idea that blossomed in the mind of our CEO and Founder MR. Rishav Ranjan. It was an idea that set one's heart on providing quality education to all no matter how far and to promote knowledge in a time when school and collegs have closed, which denies many students their right to have a good learning experience. It was a vision 
     to make a platform which would make sure that students don't have to travel far to participate in workshops and coaching classed but have a reliable solution in Lernov. A platform 
     that would work towards providing their students with interminable mentor support right at their doorstop. 
     </per></p>
   <h3>What are we doing ? </h3>
  <p> We are preparing to set out on this journey of reform by conducting our first ever webinar in the month of Decemberand we hope that it would be one of the best and encourage students to choose Lernov
       We are working towards providing workshops and webinars on a wide variety of courses. We hope to privide a comfortable learning experience for our students by providing engaging content. 
       </p>
<h3>Our Team</h3>
 <p>Lernov is truly the success of a team effort. The true realization of Lernov was possible with the help of the hard work and efficient contribution of the following members of Lernov.</p>
  <Teammemeber />
        </Container>
    )
}

export default about
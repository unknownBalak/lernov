import React from 'react'
import {Col, Row } from 'react-bootstrap'
import './css/teammember.css'
const team =[ 
    {"name":"Rishavh Rajpoot",
     "pos":"Founder",
     "about":"BBA undergraduate from Reva University, Bangalore",
     "email":"ceo.lernov.founder@gmail.com"
    
     },
    {"name":"Nikhil Agrwal",
     "pos":"Co-Founder",
     "about":"Petroleum undergraduate from KL university, Vijaywada",
     "email":"co.founder.lernov@gmail.com"
 },
     {"name": "Pushkar Ranjan",
     "pos":"Chief Human Resource officer",
     "about":"BBA final year Graduate from Ramaiah COllege, Bangalore",
     "email":"chro.lernov.hr@gmail.com"
    
    
    },
     
    {"name":"Aman Kumar ",
    "pos":"Managing Director",
    "about":"EEE undergraduate from  Techno Mail Salt Lake, West Bangal.",
    "email":"md.lernov@gmail.com"

     },
    {"name": "Aaradhya kumar Singh",
    "pos":"Persident",
    "about":"BCA undergraduate from Reva University",
    "email":"president.lernov@gmail.com"
},
    {"name":"Nayan Deep",
 "pos":"Vice Persident",
"about":"Mechanical undergraduate from Heritage Institute of Technology, Kolkota",
 "email":"vice.president.lernov@gmail.com"},

 
 {"name":"Akash Kumar ",
  "pos":"CTO",
 "about":"BCA undergraduate from Reva University",
 "email":"cto.lernov@gmail.com" },

    {"name":"Avijeet Mishra",
     "pos":"Chief Marketing Officer",
      "about":'',
     "email":""
  }
]

function Teammember() {
    return (
        <Row  style={{margin:"auto"}} > 
             {team.map(({name,about,pos,email}) =>(
        <Col style={{margin:"10px"}} md={5} className='teambox' >
              <h3 >{name}</h3>
              <p>{pos}</p>
            <p>{about}</p>
             <p className="email">{email}</p>              
         </Col>
         
             ))}           
        </Row>
    )
}

export default Teammember

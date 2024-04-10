import React from "react"
import {useState} from "react"
import {Button, Form} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const CreateQuestion=()=>{

    const [question, setQuestion]=useState("")
    const [a ,setA]=useState("")
    const [b ,setB]=useState("")
    const [c ,setC]=useState("")
    const [d ,setD]=useState("")
    const [choices, setChoices] = useState([])
    const [answer, setAnswer]=useState();
    const [numAnswer, setNumAnswer] =useState()

    const submitQuestion = async () => {
        try {
          const response = await fetch('http://localhost:3001/submitQuestion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question, choices, answer })
          })

        .then((response)=>response.json())
         .then((data)=>{
            console.log(data) 
            alert(data);
            setQuestion("")
            setA("")
            setB("")
            setC("")
            setD("")
            setChoices([""])
            setAnswer("")})
        } catch (error) {
          console.error(error);
          alert('Failed to submit the question');
        }
      };

    const setAnswerToNum=()=>{
        if(answer==="a" || answer==="A"){
            setNumAnswer(0)
        }
        if(answer==="b" || answer==="B"){
            setNumAnswer(1)
        }
        if(answer==="c" || answer==="C"){
            setNumAnswer(2)
        }
        if(answer==="d" || answer==="D"){
            setNumAnswer(3)
        }
    }

    const choiceStyle ={
        padding:"20px",

    }
    return(
        <div className="create">
            <Form>
                <Form.Label style={{width:"100%"}}>Enter Question
                <Form.Control  
                    type="text" 
                    placeholder="Enter question"
                    value={question}
                    onChange={e=>setQuestion(e.target.value)}  />
                </Form.Label>
                <br/>
                <Form.Label style={choiceStyle}>A
                <Form.Control  
                    type="text" 
                    placeholder="Enter choice A"
                    value={a}
                    onChange={e=>setA(e.target.value)}  />
                </Form.Label>
             
                <Form.Label style={choiceStyle}>B
                <Form.Control  
                    type="text" 
                    placeholder="Enter choice B"
                    value={b}
                    onChange={e=>setB(e.target.value)}  />
                </Form.Label>
          
                <Form.Label style={choiceStyle}>C
                <Form.Control  
                    type="text" 
                    placeholder="Enter choice C"  
                    value={c}
                    onChange={e=>setC(e.target.value)}/>
                </Form.Label>
          
                <Form.Label style={choiceStyle}>D
                <Form.Control  
                    type="text" 
                    placeholder="Enter choice D" 
                    value={d} 
                    onChange={e=>setD(e.target.value)}/>
                </Form.Label>
                <br/>
                    <Form.Label>Answer
                <Form.Control  
                    type="text" 
                    placeholder="Enter answer"
                    value={answer}
                    onChange={e=>setAnswerToNum(e.target.value)}  />
                </Form.Label>
            </Form>
            <Button onClick={()=>{
                console.log(a)
                setChoices([`A: ${a} `,`B: ${b} `,`C: ${c} `,`D: ${d} `])
                console.log(choices)
                }}>test</Button>
                <br/>
         
            <NavLink to="/dashboard"><Button>Go back</Button></NavLink>
            <Button onClick={async()=>{
                await setChoices([`A: ${a} `,`B: ${b} `,`C: ${c} `,`D: ${d} `])

                console.log(choices)
                submitQuestion()
                }}>Submit Question</Button>
                <br/>
         
            <NavLink to="/dashboard"><Button>Go back</Button></NavLink>
        </div>
    )
}
export default CreateQuestion
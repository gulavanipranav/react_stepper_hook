import { FormEvent, useState } from 'react';
import './App.css';
import { useMultiStepForm } from './useMultiStepForm';
import UserForm from './components/UserForm';
import AddressForm from './components/AddressForm';
import AccountForm from './components/AccountForm';

const INITIAL_DATA ={
  firstName:"",
  lastName:"",
  age:"",
  street:"",
  city:"",
  state:"",
  zip:"",
  email:"",
  password:""
}

function App() {
  console.log("render")
  const [data, setData] = useState(INITIAL_DATA)

  function updatefields(fields:any){
     setData(prev =>{
       console.log(prev,"prev")
       return {
        ...prev,
        ...fields
         }
     })
}

  console.log(data)
  const {steps, currentStepIndex,step,isFirstStep,isLastStep,next,back,goto} = useMultiStepForm([
   <UserForm {...data} handleForm={updatefields}/>,<AddressForm {...data} handleForm={updatefields}/>,<AccountForm {...data} handleForm={updatefields}/>
  ])

  function handleSubmit(e:FormEvent){
      e.preventDefault()
      if(!isLastStep)return next()
      alert(JSON.stringify(data))
  }
 
  return (
    <div className="question-container">
        <form action="" className='form' onSubmit={handleSubmit}>
           <div className='stepCount'>
                {currentStepIndex + 1}/{steps.length}
           </div>

           <div>
           {step}
           </div>
          

           <div className='card-footer'>
             <div>
              { 
                !isFirstStep &&
                <button onClick={back} type="button">Back</button>
              }
             
             </div>
             <div>
             <button type="submit">
              {isLastStep ? "Finish" : "Next"}
              
              </button>
             </div>
             
           </div>
        </form>
    </div>
  );
}

export default App;

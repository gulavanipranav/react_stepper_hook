import React from 'react'
import FormWrapper from './FormWrapper'

type UserFormProps ={
  firstName:string,
  lastName:string,
  age:string,
  handleForm: (fields:any) => void
}
export default function UserForm({firstName,lastName,age ,handleForm}:UserFormProps) {
  return (
    <>
     <FormWrapper title="User Form">
     <label htmlFor="">First Name</label>
    <input type="text" autoFocus required value={firstName} onChange={e => handleForm({firstName:e.target.value})}/><br/>
    <label htmlFor="">Last Name</label>
    <input type="text"  required value={lastName} onChange={e => handleForm({lastName:e.target.value})}/><br/>
    <label htmlFor="">Age</label>
    <input type="number" required min={5} value={age} onChange={e => handleForm({age:e.target.value})}/>
     </FormWrapper>
    

    </>
  )
}

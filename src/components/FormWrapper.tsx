import { ReactNode } from "react"

type formWrapperProps={
    title:string,
    children:ReactNode
}
export default function FormWrapper({title ,children}:formWrapperProps) {
  return (
    <>
    <h3 style={{textAlign:"center"}}>{title}</h3>
     <div style={{display:"grid",gap:".5rem",justifyContent:"flex-start",gridTemplateColumns:"auto minmax(auto 400px)"}}>
        {children}
     </div>
    </>
  )
}

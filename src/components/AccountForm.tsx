import FormWrapper from "./FormWrapper";

type AccountFormProps = {
  email: string;
  password: string;
  handleForm: (fields:any) => void
};

export default function AccountForm({ email, password ,handleForm}: AccountFormProps) {
  return (
    <>
      <FormWrapper title="Account Form">
        <label htmlFor="">Email</label>
        <input type="text" autoFocus required value={email} onChange={e => handleForm({email:e.target.value})}/> <br />
        <label htmlFor="">Password</label>
        <input type="password" required value={password} onChange={e => handleForm({password:e.target.value})}/>
      </FormWrapper>
    </>
  );
}

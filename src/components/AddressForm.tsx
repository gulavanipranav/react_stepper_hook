import FormWrapper from "./FormWrapper";

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
  handleForm: (fields:any) => void
};

export default function AddressForm({
  street,
  city,
  state,
  zip,
  handleForm
}: AddressFormProps) {
  return (
    <>
      <FormWrapper title=" Address Form">
        <label htmlFor="">Street</label>
        <input type="text" autoFocus required value={street} onChange={e => handleForm({street:e.target.value})}/> <br />
        <label htmlFor="">City</label>
        <input type="text" required value={city} onChange={e => handleForm({city:e.target.value})}/>
        <br />
        <label htmlFor="">State</label>
        <input type="text" value={state} onChange={e => handleForm({state:e.target.value})}/>
        <br />
        <label htmlFor="">Zip</label>
        <input type="number" required min={5} value={zip} onChange={e => handleForm({zip:e.target.value})} />
      </FormWrapper>
    </>
  );
}

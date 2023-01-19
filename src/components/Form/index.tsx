import { FormContainer } from "./styles";

interface FormProps {
  onSubmit: any;
  onChange: any;
  value: string;
}

const Form = (props: FormProps) => {
  return (
    <FormContainer>
      <form onSubmit={props.onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Enter username or email"
          onChange={props.onChange}
          value={props.value}
        />
        <button type="submit">Search</button>
      </form>
    </FormContainer>
  );
};

export default Form;

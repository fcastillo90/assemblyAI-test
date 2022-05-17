import styled from "styled-components";
import { ErrorMessage } from "@/components/Feedback";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const StyledInput = styled.input<InputProps>`
  background-color: #FFFFFF;
  border-color: ${props => props.error ? 'red' : '#E9E9E9'};
  border-radius: 8px;
  border: 1px solid #E9E9E9;
  font-size: 16px;
  height: 51px;
  padding-left: 14px;
  width: 100%;
  ::placeholder { 
    color: #AFAFAF;
    opacity: 1;
  }
`
const StyledContainer = styled.div`
  width: 100%;
`

const Input = (props: InputProps) => {
  const {error, ...rest} = props
  return (
    <StyledContainer>
      <StyledInput
        error={error}
        {...rest}
      />
      {error && <ErrorMessage>This field is required field</ErrorMessage>}
    </StyledContainer>
  )
}


export default Input
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const UserButton = styled.button`
  width: 80%;
  background-color: #ba135d;
  color: #f4cca4;
  border: none;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: ${(props) => (props.disabled ? '#333' : '')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  :hover {
    background-color: ${(props) => (props.disabled ? '#333' : '#99154e')};
  }
`;

const UserForm = styled.form`
  min-width: 3rem;
  height: 4rem;
  padding: 3rem;
  background-color: #d99879;
`;
const UserInput = styled.input`
  border: 1px solid ${(props) => (props.valid ? 'green' : 'red')};
  background-color: ${(props) => (props.valid ? 'yellow' : 'brown')};
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 5px;
  outline: none;
`;

const Input = () => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  let formIsValid = false;

  if (enteredName) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setNameIsTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }

    setEnteredName('');
    setNameIsTouched(false);
  };

  const test = false;
  const test2 = true;

  return (
    <Wrapper>
      <UserForm onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="">
            <UserInput
              type="text"
              id="name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              valid={+test}
            />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <UserInput
              type="text"
              id="name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              valid={+test2}
            />
          </label>
        </div>

        <div>
          <UserButton disabled={!formIsValid}>Submit</UserButton>
        </div>
      </UserForm>
    </Wrapper>
  );
};

export default Input;

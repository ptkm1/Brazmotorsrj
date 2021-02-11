import styled from 'styled-components';

export const InputFilter = styled.select`
  width: 80%;
  height: 50px;
  background: #fff;
  border: none;
  border-radius: 7px;
  margin-top: 20px;
  padding-left: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  color: none;
  option{
    background: #fff;
  }
`;

export const InputHour = styled.select`
 width: 100%;
  height: 50px;
  background: #f6f7fb;
  border: solid 1px #e63946;
  margin-top: 20px;
  padding-left: 15px;
  outline: none;
  color: black;
  option{
    background: #f6f7fb;
  }
`

export const InputsBox = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #f6f7fb;
  padding-left: 15px;
  outline: none;
  border: 1px solid black;
  box-sizing: border-box;
  margin: 15px;

  @media (max-width: 700px){
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SmallInput = styled.input`
  width: 48%;
  height: 50px;
  background: #f6f7fb;
  padding-left: 15px;
  outline: none;

  border: 1px solid black;
  box-sizing: border-box;

    @media (max-width: 450px) {
        width: 60;
    }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  background: #f6f7fb;
  padding: 15px;
  outline: none;

  border: 1px solid black;
  box-sizing: border-box;
  margin: 15px;
  resize: none;

  @media (max-width: 700px){
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
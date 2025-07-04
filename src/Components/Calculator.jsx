import { ActionButton, ButtonGroup, Container, Heading, InputGroup } from '../Styles/Calculator'
import CustomTextField from './Shared/CustomTextField'
import React, { useState } from 'react'



export default function Calculator() {
    
    const[firstNumber,setFirstNumber]=useState("");
    const[secondNumber,setSecondNumber]=useState("");
    const[result,setResult]=useState("");

    const errMsg = "FILL THE INPUT BOX";

    function handleValidation(){
         if(firstNumber==""||secondNumber==""){
            alert(errMsg);
            return true;
        }
        return false;
    }

    function handleAddition(){
        if(handleValidation()){
            return;
        }
        setResult(Number(firstNumber)+Number(secondNumber));
    }
    function handleSubraction(){
        if(handleValidation()){
            return;
        }
        setResult(Number(firstNumber)-Number(secondNumber));
    }
    function handleMutiplication(){
        if(handleValidation()){
            return;
        }
        setResult(Number(firstNumber)*Number(secondNumber));
    }
    function handleDivition(){
        if(handleValidation()){
            return;
        }
        setResult(Number(firstNumber)/Number(secondNumber));
    }

  return (
    <>
        <Container>
            <Heading>
                Calculator
            </Heading>
            <InputGroup>
                <CustomTextField label={"FirstNumber"} type={"number"} value={firstNumber} onChange={setFirstNumber}></CustomTextField>
                <CustomTextField label={"SecondNumber"} type={"number"} value={secondNumber} onChange={setSecondNumber}></CustomTextField>
                <CustomTextField label={"Result"} type={"number"} disabled={true} value={result}></CustomTextField>
            </InputGroup>
            <ButtonGroup>
                <ActionButton onClick={handleAddition}>+</ActionButton>
                <ActionButton onClick={handleSubraction}>-</ActionButton>
                <ActionButton onClick={handleMutiplication}>*</ActionButton>
                <ActionButton onClick={handleDivition}>/</ActionButton>
            </ButtonGroup>
        </Container>   
    </>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import { AcceptButton, Buttonwrap, CardWrapper, EligibilityCard, EligibilityContainer, EligibilityImage, EligibilityLabel, EligibilityTitle } from '../../Styles/eligibility'
import { Box } from '@mui/material'
import { AppContext } from './Root'
import { subsidyData } from '../../constrains/eligiblity'
import CustomCheckBoxField from '../shared/CustomCheckBoxField'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../../routes/routePath'
import marriage from '/src/asserts/subsidy/marriage.jpg'
import foodImage from '/src/asserts/subsidy/foodImage.jpg'
import touristImage from '/src/asserts/subsidy/touristImage.jpg'
import education from '/src/asserts/subsidy/education.jpg'

export default function Eligibility() {

    const[subsidyEligibility,setSubsidyEligibility]=useState(subsidyData);
    const[subsidityResult,setSubsidityResult]= useState(subsidyData);
    const isSelected = Object.values(subsidityResult).some((val)=>val);
     
    const{userDetails,setSelectedResult}= useContext(AppContext);
    
    const navigate = useNavigate();

        const checkEligibility = (subsidyType)=>{
            const{age,gender,income,location} = userDetails;

            switch(subsidyType){
                case 'marriage' :
                    return(
                        (gender=='male'&& age>=21)||(gender=='female'&& age >=18)
                    );

                case "food":
                    return income<200000

                case "education":
                    return(
                        (gender=='male'&&income<500000)||(gender=='female'&&income<700000)
                    );
                
                case "travel":
                    return(
                        (location=='city' && income<400000) || (location=="non-city"&&income<600000)
                    );
                default:
                    return false;
            }
        }

        const handleSubmit = ()=>{
            setSelectedResult(subsidityResult);
            navigate(routePath.message);
        }

        const handleCheckBox = (checked,type)=>{
            setSubsidityResult((pre)=>({
                ...pre,[type]:checked,
            }));
        };

        useEffect(()=>{
                Object.keys(subsidyData).map((data)=>{
                    setSubsidyEligibility((pre)=>({
                        ...pre,[data]:checkEligibility(data),
                    }));
                });
        },[]);
        
  return (
    <>
    <EligibilityTitle sx={{fontSize:'30px',fontWeight:'600px'}}>Marrage Eligibility Subsidy</EligibilityTitle>
    <EligibilityContainer>
        <EligibilityCard>
            <CardWrapper>
                <EligibilityImage src={marriage} alt='marrage Image'/>
                <Box>Marrage Subsidy</Box>
            </CardWrapper>
            <EligibilityLabel>
                <span>Marriage : </span>
                {subsidyEligibility?.marriage ? 'YES':'NO'}
            </EligibilityLabel>
            <EligibilityLabel><span>Criteria : </span>For men age should be greater than 21
             and female sholud be greater than 18 </EligibilityLabel>
             {subsidyEligibility?.marriage && (
                <CustomCheckBoxField label='Accept Marriage Subsidy'
                value={subsidityResult?.marriage}
                handleChange={(e)=>{
                    handleCheckBox(e?.target?.checked,'marriage');
                }}
                />
             )} 
        </EligibilityCard>
    

    
    
        <EligibilityCard>
            <CardWrapper>
                <EligibilityImage src={foodImage} alt='Food Image'/>
                <Box>Food Subsidy</Box>
            </CardWrapper>   
            <EligibilityLabel>
                <span>Food : </span>
                {subsidyEligibility?.food ? 'YES':'NO'}
            </EligibilityLabel>
            <EligibilityLabel><span>Criteria : </span>Annual Income should be Less than 20,000</EligibilityLabel>

             {subsidyEligibility?.food && (
                <CustomCheckBoxField label='Accept Food Subsidy'
                value={subsidityResult?.food}
                handleChange={(e)=>{
                    handleCheckBox(e?.target?.checked,'food');
                }}
                />
             )} 
        </EligibilityCard>
    


    
    
        <EligibilityCard>
            <CardWrapper>
                <EligibilityImage src={education} alt='marrage Image'/>
                <Box>Educational Loan Subsidy</Box>
            </CardWrapper>
             <EligibilityLabel>
                <span>Education : </span>
                {subsidyEligibility?.education ? 'YES':'NO'}
            </EligibilityLabel>
            <EligibilityLabel><span>Criteria : </span>Annual Income should be Less than 70,000 For Women 500,000 For Men</EligibilityLabel>
        {subsidyEligibility?.education && (
                <CustomCheckBoxField label='Accept Educational Subsidy'
                value={subsidityResult?.education}
                handleChange={(e)=>{
                    handleCheckBox(e?.target?.checked,'education');
                }}
                />
             )} 
        </EligibilityCard>

       
    
        <EligibilityCard>
            <CardWrapper>
                <EligibilityImage src={touristImage} alt='marrage Image'/>
                <Box>Travel Subsidy</Box>
            </CardWrapper>
             <EligibilityLabel>
                <span>Travel : </span>
                {subsidyEligibility?.travel ? 'YES':'NO'}
            </EligibilityLabel>
            <EligibilityLabel><span>Criteria : </span>For Non-City People Annual Income should be less than 60,000 40,000 for City people</EligibilityLabel>
        {subsidyEligibility?.travel && (
                <CustomCheckBoxField label='Accept Travel Subsidy'
                value={subsidityResult?.travel}
                handleChange={(e)=>{
                    handleCheckBox(e?.target?.checked,'travel');
                }}
                />
             )} 
        </EligibilityCard>
    </EligibilityContainer>
    <Buttonwrap>
    {isSelected?
    <AcceptButton onClick={handleSubmit}>SUBMIT</AcceptButton>
    :
    <AcceptButton onClick={()=>navigate(routePath.home)}>BACK</AcceptButton>
    }
    </Buttonwrap>
    </>
  )
}

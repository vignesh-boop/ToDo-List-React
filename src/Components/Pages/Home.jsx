import React, { useContext, useState } from 'react'
import { AppHeader, EligibilityButton, HomeContainer } from '../../Styles/home'
import { Grid } from '@mui/material'
import CostemTextField from '../shared/CostemTextField'
import CustomRadioField from '../shared/CustomRadioField';
import { errorMessage, genderSeed, locationSeed } from '../../constrains/home';
import { AppContext } from './Root';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../routes/routePath';

export default function Home() {
    const[name,setName]=useState("");
    const[gender,setGender]=useState('male');
    const[age,setage]=useState("");
    const[location,setLocation]=useState('city');
    const[income,setIncome]=useState("");
    const {setUserDetails} = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        if(name==""||age==""||income==""){
            alert(errorMessage);
            return;
        }
        setUserDetails({name,age,location,income,gender});
        navigate(routePath?.eligibility);
    }
  return (
    <>
    <HomeContainer container>
        <Grid size={12}>
                <AppHeader>Government Subsidy Eligibility Check</AppHeader>
        </Grid>

        <Grid size={12}>
            <CostemTextField 
            label={'Enter your Name'} 
            type={'text'} 
            value={name}
            handleChange={setName}
            />
        </Grid>

        <Grid size={12}>
                <CustomRadioField label='Select your gender'
                value={gender}
                handleChange={setGender}
                option={genderSeed}
                />
        </Grid>

        <Grid size={12}>
            <CostemTextField 
            label={'Enter your Age'} 
            type={'number'} 
            value={age}
            handleChange={setage}
            />
        </Grid>

        
        <Grid size={12}>
                <CustomRadioField label='Select your Location'
                value={location}
                handleChange={setLocation}
                option={locationSeed}
                />
        </Grid>

        <Grid size={12}>
            <CostemTextField 
            label={'Enter your Income'} 
            type={'number'} 
            value={income}
            handleChange={setIncome}
            />
        </Grid>

        <Grid size={12}>
        <EligibilityButton onClick={handleSubmit}>CHECK ELIGIBILITY</EligibilityButton>
        </Grid>
        
    </HomeContainer>
    </>
  )
}

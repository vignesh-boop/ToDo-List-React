import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notifyUser } from '../../redux/toSlice';
import { Alert, Snackbar } from '@mui/material';

export default function SnackBar() {
    const dispatch = useDispatch();

    const snackBar = useSelector((state)=>state.todo.snackBar);

    const handleClose = (event,reason)=>{
            if(reason = "clickway"){
                return;
            }
            dispatch(notifyUser(null));
    }
  return (
    <>
    <Snackbar open={snackBar} autoHideDuration={2000} onClose={handleClose}>
        <Alert
        onClose={handleClose}
        severity={snackBar?.type}
        variant='filled'
        sx={{width:'100%'}}
        >
            {snackBar?.message}
        </Alert>

    </Snackbar>
    </>
  )
}

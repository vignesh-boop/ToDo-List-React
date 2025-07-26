import {Box, Button, styled}from '@mui/material'


export const TodoContainer = styled (Box)({
backgroundColor: "rgba(54, 82, 121, 0.8)",
width: "450px",
display: "flex",
flexDirection: "column",
alignItems: "center",
padding: "20px",
borderRadius: "8px",
gap: "10px",
});

export const TodoText = styled (Box)({
fontSize: "24px",
fontWeight: "bold",
color: "#FFF",
});


export const TodoButton = styled (Button)({
backgroundColor: "#e8eff7",
color: "#365279",
padding: "10px",
borderRadius: "68px",
minwidth: "100px",
fontsize: "16px",
fontweight: "bold",
alignSelf: "end",
});

export const TodoListContainer = styled (Box)({
display: "flex",
flexDirection: "column",
maxHeight: "320px",
gap: "10px",
width: "100%",
overflow: "auto",
"::-webkit-scrollbar": {
display: "none",
}
});

export const TodoItemContainer = styled (Box)({
display: "flex",
alignItems: "center",
backgroundColor: "#E8EFF7",
color: "#365279",
fontFamily: "Roboto",
gap: "14px",
padding: "8px",
borderRadius: "8px",
transition: "all 0.3s ease-in-out",
});

export const TodoItem = styled (Box)({
fontsize: "18px",
fontweight: "bold",
});

export const EditButton = styled (Button)({
cursor: "pointer",
color: "#008000",
height:"30px",
width:"30px",
});

export const DeleteButton = styled (Button)({
cursor: "pointer",
color:"FF0000",
height:"30px",
width:"30px",
});
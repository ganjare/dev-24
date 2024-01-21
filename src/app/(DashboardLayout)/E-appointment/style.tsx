import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const  Heading1 = styled(Typography)(({ theme }) => ({
    font: "Nunito",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "28px",
        alignItem: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#1D1F2C",
        paddingTop: "10px",
        
  }));
  export const Heading2 = styled(Typography)(({ theme }) => ({
    fontFamily: "Nunito",
    fontSize: "17px",
     lineHeight:"35px",
    letterSpacing: "0.07px",
    textAlign: "left",
    color: "#777980",
    //  width:"336px",
    // height:"64px",
    fontWeight:"500",
    
  }));


  export const TopSection  = {
    width: "100%",
    // height: "50vh",
    background: "#FFF",
    // border:"1px solid black",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  }

  export const  IncomingBody = {
    width: "100%",
      height: "56px",
      // background : "#F0F6F6",
      alignItem: "center",
      justifyContent: "center",
      flexDirection:"column",
      display: "flex",
      paddingLeft: "60px",
      fontWeight : "700",
      fontSize : "25px",
  }

  export const  FormParent = {
    width: "auto",
    // height:"30vh",
    color: "#000000",
    backgroundColor: "white",
    // border: "1px solid #8B8B8B",
    
    padding: "30px",
    boxShadow: "0px 4px 250px 0px #000000008",
    margin: "10px",
  }

  export const OutlinedStyled = {
    width: "100%",
    
    borderRadius: "8px",
    border: "1px solid var(--neutral-gray-gray-100, #E0E2E7)",
    background: "var(--neutral-gray-gray-25, #F9F9FC)",
  }

  export const ButtonParent = 
    {alignItems:"center" , display:"flex"  , justifyContent:"left" }
  

  export const ButtonStyle = {
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "20px",
    width:"100px",
    height:"38px",
    border: "1px solid #6E64BB",
    marginTop:"36px",
    color : "#FFF",
    backgroundColor:  "#6E64BB;",
   
    "&:hover": {
      background: "var(--neutral-gray-gray-25, #F9F9FC)",
      color: "black",
    },
    // alignItems:"center"
  }

  export const TableCells = {
      
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",

  
}
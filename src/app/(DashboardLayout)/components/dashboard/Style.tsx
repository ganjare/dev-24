import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const  Heading1 = styled(Typography)(({ theme }) => ({
    font: "Nunito",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "28px",       
        justifyContent: "center",
        alignItems: "center",
        color: "#1D1F2C",
        marginTop: "10px",
        border:"1px solid black"
        
  }));
  export const Heading2 = styled(Typography)(({ theme }) => ({
    fontFamily: "Nunito",
    fontSize: "18px",
     lineHeight:"35px",
    letterSpacing: "0.07px",
    textAlign: "left",
    color: "#777980",
    //  width:"336px",
    // height:"64px",
    fontWeight:"500",
    
  }));
  export const OuterBox= styled(Typography)(({ theme }) => ({
    width: "auto",
    height: "100vh",
    background: "#F7F7F7",
  }));
  export const SubmitButton = styled(Typography)(({ theme }) => ({
    backgroundColor: "#E15A11",
    color: "#FFFFFF",
    height: "49px",
    width: "125px",
    borderRadius: "8px",
  }));


  export const FormParent = 
    {
      width: "auto",
      height:"auto",
      color: "#000000",
      // backgroundColor: "#F0F6F6",
      // border: "1px solid #8B8B8B",
      
      padding: "20px",
      boxShadow: "0px 4px 250px 0px #000000008",
      margin: "10px",
    }
  
  export const GenralBody = {
    width: "100%",
    // height: "100%",
    // background: "#F0F6F6",
    // border:"1px solid black",
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
   
  }

  export const SubFormParent = {
    width: "auto",
    height: "auto",
    color: "#000000",
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0px 4px 250px 0px #000000008",
    margin: "10px",
  }

  export const OutlinedStyle = {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid var(--neutral-gray-gray-100, #E0E2E7)",
    background: "var(--neutral-gray-gray-25, #F9F9FC)",
  }

  export const ButtonParent = { alignItems: "center", display: "flex", marginTop: "20px", justifyContent: "right" }

  export const ButtonStyle = {
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "20px",
    width:"100px",
    height:"38px",
    border: "1px solid #6E64BB",
    // marginTop:"36px",
    color : "#FFF",
    backgroundColor:  "#6E64BB;",
   
    "&:hover": {
      background: "var(--neutral-gray-gray-25, #F9F9FC)",
      color: "black",
    },
  }

  export const FormTopSection = 
    {
      width: "100%",
      height: "26px",
      // background : "#F0F6F6",
      alignItem: "center",
      justifyContent: "center",
      flexDirection:"column",
      display: "flex",
      paddingLeft: "40px",
      fontWeight : "700",
      fontSize : "25px",
      // borderBottom : "1px solid #666"
     
    }

    export const TableCells = {
      
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        borderTop: "1px solid black",

      
    }
  
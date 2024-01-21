"use client";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
// import { useAuth } from '../../../../../context/JWTContext/AuthContext.provider';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import router from "next/router";
import React from "react";
import Banner from "Banner.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const GreenBox = styled(Box)`
  width: 874px;
  height: 64px;
  background: #3e7d60;
  border: 0.5px solid #3e7d60;
  display: flex;
`;

const Heading = styled(Typography)`
  width: 221px;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #eaf2f9;
  margin-top: 22px;
  margin-left: auto;
  margin-right: auto;
`;

const SBox = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 40px;
  }
  margin-left: 47px;
`;

const NewRegistration = styled(Button)`
  width: 254px;
  height: 62px;
  background: #e15a11 !important;
  box-shadow: 0px 0px 19px -10px rgba(215, 215, 215, 0.25) !important;
  color: white;
  margin-right: 280px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    background-color: #e15a11 !important;
  }
`;

const LoginButton = styled(Button)`
  width: 131px;
  height: 62px;
  background: #e15a11 !important;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  box-shadow: 0px 0px 19px -10px rgba(215, 215, 215, 0.25) !important;
  color: white !important;
  &:hover {
    background-color: #e15a11 !important;
  }
`;

const ResendOTP = styled(Typography)`
  width: 150px;
  height: 22px;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #1e88e5;
  cursor: pointer;
  margin-left: auto;
`;

const ErrorTypography = styled(Typography)`
  color: #ff0000;
  font-size: 12px;
  margin-top: 10px !important;
`;
import { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

// const passwordValidationRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const emailValidationRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const mobileValidationRegex =
  /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/;
// const otrValidationRegex = '';

function Login() {
  //   const auth = useAuth();
  const router = useRouter();
  // const [email, setEmail] = useState<any>("")
  // const [password, setPassword]:any = useState(null)
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const email: any = useRef();
  const password: any = useRef();

  const Handlesubmit = () => {
    if (value.email == "hemant@gmail.com" && value.password == "123") {
      localStorage.setItem("emailData", "hemant@gmail.com");
      localStorage.setItem("passwordData", "123");

      console.log("inside");
      router.push("/");
    } else {
      setState({
        open: true,
        vertical: "top",
        horizontal: "center",
      });
      setTimeout(() => {
        setState({ ...state, open: false });
      }, 2000);
    }

    console.log(email.current);
  };

  // const handleLogin = async () => {
  // await auth.signIn(email, password);
  // };
  const Heading1 = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    color: "black",
    fontFamily: "Nunito, sans-serif",
    // fontSize: "22.26px",
    lineHeight: "41.72px",
    fontWeight: 700,
  }));
  const LoginButton = styled(Button)`
    width: auto;
    height: auto;

    background: #e15a11;
    font-weight: 600;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    box-shadow: 0px 0px 19px -10px rgba(215, 215, 215, 0.25);
    color: white;
    &:hover {
      background-color: #e15a11;
    }
  `;
  const SBox = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;

    & > div,
    & > button,
    & > p {
      margin-top: 10px;
    }
    padding: 20px;
  `;

  const ResendOTP = styled(Typography)`
    width: 150px;
    height: 22px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #1e88e5;
    cursor: pointer;
    margin: auto;
    text-align: center;
    justify-content: center;
  `;
  // const styles = {
  //   paperContainer: {
  //     backgroundImage: `url(/Banner.png)`

  //   },
  // };
  //   const [showPassword, setShowPassword] = React.useState(true);

  //   const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box
        // style={styles.paperContainer}
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          // width: "auto",
          // height: "100vh",
          width: "100%",
          height: "auto",
          top: "4px",
          backgroundImage: `url(/Banner.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="user name or password are incorrect"
          key={vertical + horizontal}
        />
        <Box
          sx={{
            background: "#000000b3",
            width: "580px",
            height: "100vh",
            top: "0",
            left: "0",
            borderRadius: "0",
            color: "#ffffff",
            padding: "40px",
            zIndex: "777",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/Gov.png" width={50} height={70} alt={""} />
          </Box>

          <Box
            sx={{
              // flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Heading1
              sx={{
                color: "#fff900",
                lineHeight: "28px",
                letterSpacing: "0.2em",
                fontSize: {
                  xs: "11.26",
                  sm: "11.26",
                  md: "15.26px",
                  lg: "17.26px",
                  xl: "17.26px",
                },
              }}
            >
              UNION PUBLIC SERVICE COMMISSION
            </Heading1>
          </Box>
          <Typography
            sx={{
              letterSpacing: "0.2em",
              textAlign: "center",
              lineHeight: "30px",
              fontWeight: "700",
              fontSize:"18px",
              // textTransform:"uppercase",

              justifyContent: "center",
            }}
          >
            File Tracking System
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              //sx={{fontSize:"14.22px",color:"#e15a11",fontWeight:"700"}}
              sx={{
                fontFamily: "Nunito",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "18px",
                mb: 2,
                color: "#fff900",
              }}
            >
              Reset Password
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ lineHeight: "9px" }}>
              Previous Password
            </Typography>
            <TextField
            type={showPassword ? "text" : "password"}
              // id="outlined-basic"
              placeholder="Previous Password"
              size="small"
              value={value.email}
              onChange={(e) => {
                setValue({
                  ...value,
                  email: e.target.value,
                });
              }}
              sx={{
                width: "100%",
                background: "white",
                marginBottom: "8px",
                mt: 2,
              }}
              // onInput={(event:any) => setEmail(event.target.value)}
            />
             <Typography variant="body1" sx={{ lineHeight: "9px" }}>
              New Password
            </Typography>
            <TextField
            type={showPassword ? "text" : "password"}
              // id="outlined-basic"
              placeholder="New Password"
              size="small"
              value={value.email}
              onChange={(e) => {
                setValue({
                  ...value,
                  email: e.target.value,
                });
              }}
              sx={{
                width: "100%",
                background: "white",
                marginBottom: "8px",
                mt: 2,
              }}
              // onInput={(event:any) => setEmail(event.target.value)}
            />

            <Typography variant="body1" sx={{ lineHeight: "9px", mt: 1 }}>
             Confirm Password
            </Typography>

            <OutlinedInput
              // id="outlined-adornment-weight"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              size="small"
              value={value.password}
              onChange={(e) => {
                setValue({
                  ...value,
                  password: e.target.value,
                });
              }}
              sx={{
                width: "100%",
                background: "white",
                marginBottom: "8px",
                mt: 2,
              }}
              // onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <LoginButton
              // onClick={handleLogin}
              // onClick={Handlesubmit}
              onClick={()=> alert("Password Updated")}
              size="small"
              sx={{ fontSize: "15px", py: 1, width: "100%", mt: 2 }}
            >
              Reset
            </LoginButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "auto",
                color: "#ffffff",
              }}
            >
              <Box sx={{cursor:"pointer"}} onClick={() => 
                      {router.push("/LoginTab")}}>
                Back
              </Box>
              {/* <ResendOTP
                      sx={{
                       
                        color:'#ffffff',
                      fontSize:'12px', textDecoration:'none',
                      mt:2
                      }}
                      
                      variant="body1" onClick={() => 
                      {router.push("/login")}}>
                        Forgot Password ?
                      </ResendOTP> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

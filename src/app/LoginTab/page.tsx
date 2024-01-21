"use client";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
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
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import router from "next/router";
import React from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";

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

  const [showPassword, setShowPassword] = useState(false);

  const [inputCapcha, setInputCapcha] = useState<any>("");

  const [capchaCode, SetCapchaCode] = useState<any>("");

  const refreshCapcha = () => {
    SetCapchaCode(Math.random().toString(36).substr(2, 8));
  };

  useEffect(() => {
    const randomCapcha: string = Math.random().toString(36).substr(2, 8);
    SetCapchaCode(randomCapcha);
  }, []);

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

  const Handlesubmit = () => {
    if (
      value.email === "hemant@gmail.com" &&
      value.password === "123" &&
      capchaCode === inputCapcha
    ) {
      console.log("yeess")
      router.push("/E-appointment");
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
          alignItems: "left",
          width: "auto",
          height: "100vh",
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
          message="All fields Requied"
          key={vertical + horizontal}
        />
        <Box
          sx={{
            background: "#000000b3",
            width: "auto",
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
            <img src="/Gov.png" width={60} height={80} alt={""} />
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
              fontSize: "18px",
              // textTransform:"uppercase",

              justifyContent: "center",
            }}
          >
            E-Appointment Systum
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
              User Login
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ lineHeight: "9px", fontWeight: "700" }}
            >
              Email
            </Typography>
            <TextField
              required
              // id="outlined-basic"
              placeholder="Email"
              autoComplete="off"
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
                marginBottom: "15px",
                mt: 2,
              }}
              // onInput={(event:any) => setEmail(event.target.value)}
            />

            <Typography
              variant="body1"
              sx={{ lineHeight: "9px", mt: 1, fontWeight: "700" }}
            >
              Password
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
            <Box
              sx={{
                cursor: "pointer",
                mt: "5px",
                mb: "5px",
                fontWeight: "700",
              }}
              onClick={() => {
                router.push("/ForgetPassword");
              }}
            >
              Forget Password
            </Box>
            <Box
              sx={{
                width: "500px",
                display: "flex",
                justifyContent: "space-between",
                mt: "20px",
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="Enter Captcha"
                autoComplete="off"
                // variant="outlined"
                type="text"
                onPaste={(event: any) => {
                  event.preventDefault();
                  return false;
                }}
                onDrop={(event: any) => {
                  event.preventDefault();
                  return false;
                }}
                onKeyDown={(event) => {
                  if (event.key == "Enter") {
                    // handleLogin()
                  }
                }}
                value={inputCapcha}
                sx={{ width: "55%", background: "white" }}
                onChange={(event) => {
                  setInputCapcha(event.target.value);
                }}
                inputProps={{
                  style: {
                    height: "45px",
                    padding: "0 14px",
                  },
                }}
              ></TextField>

              <Box
                sx={{
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    fontWeight: 600,
                    height: "100%",
                    width: "80%",
                    backgroundColor: "grey",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "not-allowed",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      p: 1.2,
                      fontSize: "20px",
                      width: "fit-content",
                      margin: "auto",
                      height: "45px",
                      color: "white",
                      borderRadius: "4px",
                      cursor: "not-allowed",
                    }}
                    fontFamily="Nunito"
                  >
                    {capchaCode}
                  </Typography>
                </Box>
                <Tooltip title="Refresh Captcha">
                  <RefreshIcon
                    onClick={refreshCapcha}
                    sx={{
                      fontSize: "33px",
                      color: "#E15A11",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
            <LoginButton
              // onClick={handleLogin}
              onClick={Handlesubmit}
              size="small"
              sx={{ fontSize: "15px", py: 1, width: "100%", mt: 4 }}
            >
              Login
            </LoginButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "auto",
                color: "#ffffff",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

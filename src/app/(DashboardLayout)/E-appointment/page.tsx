"use client";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Box,
  styled,
  MenuItem,
  FormControl,
  List,
  ListItem,
  Tooltip,
  createTheme,
  ThemeProvider,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  validateEmailid,
  validateRequiredField,
  validateMobileNum,
  validateLandlineNum,
  validateAppointmentNum,
  validateAlphabetsOnly,
} from "./validation";
import Select from "@mui/material/Select";
import RefreshIcon from "@mui/icons-material/Refresh";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import InfoIcon from "@mui/icons-material/Info";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FastForwardIcon from "@mui/icons-material/FastForward";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { useUser } from "./Context/UserContext.provider";
import React from "react";
import dayjs from "dayjs";
import PreviewPage from "../components/preview";
import { StaticDatePicker } from "@mui/x-date-pickers";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
export const LabelTypography = styled(Typography)`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
import CircleIcon from "@mui/icons-material/Circle";
export const FormControlBox = styled(FormControl)`
  width: 100%;
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
interface ApiResponse {
  message: string;
}
const initialUnavailableDates: string[] = [];
const MultiStepForm = () => {
  const user = useUser();
  const [dropdownValue, setDropdownValue] = useState(false);
  const [overridingValue, setOverridingValue] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [capchaCode, SetCapchaCode] = useState<any>("");
  const [inputCapcha, setInputCapcha] = useState<any>("");
  const [ministryArr, setMinistryArr] = useState([]);
  const [depttArry, setDepttArry] = useState([]);
  const [appArry, setAppArry] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [open, setOpen] = React.useState<any>(false);
  const [value, setValue] = React.useState<any>(dayjs());
  const [noDataFound, setNoDataFound] = useState(false);
  const [unavailableDates, setUnavailableDates] = useState(
    initialUnavailableDates
  );
  const [endDates, setEndDates] = useState([]);
  const [startTime, setStartTime] = React.useState([]);
  const [endTime, setEndTime] = React.useState([]);
  const [slot, setSlot] = useState([]);
  const [appoint_id, setAppoint_id] = useState("");
  const refreshCapcha = () => {
    SetCapchaCode(Math.random().toString(36).substr(2, 6));
  };
  useEffect(() => {
    const randomCapcha: string = Math.random().toString(36).substr(2, 6);
    SetCapchaCode(randomCapcha);
  }, []);

  const [formData, setFormData] = useState<any>({
    select_ministry: "",
    select_department: "",
    type_of_case: "Fresh Proposal",
    previous_appointment_id: "",
    appointment_date: "",
    appointment_time: "",
    name_of_co: "",
    ministry_file_num: "",
    is_court_involved: "",
    date_of_retirement: "",
    first_name: "",
    last_name: "",
    office_landline_number: "",
    mobile_number: "",
    designation: "",
    fax: "",
    email_id: "",
    date_of_co: "",
    order_of_court: "",
    court_cat: "",
    contempt_of_court: "",
    extensions_of_time: "",
    court_option: "",
    direction_of_court: "",
    time_line_of_case: "",
  });

  const [validateObject, setValidateObject] = useState<any>({
    first_name: {
      error: false,
      errMessage: "",
    },
    last_name: {
      error: false,
      errMessage: "",
    },
    office_landline_number: {
      error: false,
      errMessage: "",
    },
    mobile_number: {
      error: false,
      errMessage: "",
    },
    designation: {
      error: false,
      errMessage: "",
    },
    fax: {
      error: false,
      errMessage: "",
    },
    email_id: {
      error: false,
      errMessage: "",
    },
    name_of_co: {
      error: false,
      errMessage: "",
    },
    ministry_file_num: {
      error: false,
      errMessage: "",
    },
    is_court_involved: {
      error: false,
      errMessage: "",
    },
    previous_appointment_id: {
      error: false,
      errMessage: "",
    },
    direction_of_court: {
      error: false,
      errMessage: "",
    },
    time_line_of_case: {
      error: false,
      errMessage: "",
    },
  });

  const validateAllField = (name: any, event: any) => {
    switch (name) {
      case "first_name":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateAlphabetsOnly(event),
        });
        break;
      case "last_name":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateAlphabetsOnly(event),
        });
        break;
      case "office_landline_number":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateLandlineNum(event),
        });
        break;
      case "mobile_number":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateMobileNum(event),
        });
        break;
      case "designation":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      case "fax":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      case "email_id":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateEmailid(event),
        });
        break;
      case "name_of_co":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateAlphabetsOnly(event),
        });
        break;
      case "ministry_file_num":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      case "is_court_involved":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      case "previous_appointment_id":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateAppointmentNum(event),
        });
        break;
      case "time_line_of_case":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      case "direction_of_court":
        setValidateObject({
          ...validateObject,
          [event.target.name]: validateRequiredField(event),
        });
        break;
      default:
    }
  };

  const handleNext = (e: any) => {
    if (activeStep === 0) {
      if (
        !formData.select_ministry ||
        !formData.select_department ||
        !formData.type_of_case
      ) {
        alert("Please Select Type Of Meeting");
        return;
      } else if (dropdownValue === true && !formData.previous_appointment_id) {
        return toast.error("Please enter previous appointment ID!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (noDataFound && dropdownValue == true) {
        return toast.error("Please enter valid previous appointment ID!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 1) {
      if (!formData.appointment_time) {
        return toast.error("Please Select Date & Time!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 2) {
      if (
        !formData.name_of_co ||
        !formData.court_option ||
        validateObject.name_of_co.error
      ) {
        return toast.error("Please fill the required feilds", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 3) {
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.office_landline_number ||
        !formData.mobile_number ||
        !formData.email_id ||
        validateObject.first_name.error ||
        validateObject.last_name.error ||
        validateObject.office_landline_number.error ||
        validateObject.mobile_number.error ||
        validateObject.email_id.error
      ) {
        return toast.error("Please fill the required feilds", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }  else if (activeStep === 3) {
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.office_landline_number ||
        !formData.mobile_number ||
        !formData.email_id ||
        validateObject.first_name.error ||
        validateObject.last_name.error ||
        validateObject.office_landline_number.error ||
        validateObject.mobile_number.error ||
        validateObject.email_id.error
      ) {
        return toast.error("Please fill the required feilds", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 4) {
      refreshCapcha();
      if (inputCapcha === capchaCode)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "appointment_date") {
      const filteredApps = appArry.filter((app: any) => {
        const appointmentDate = new Date(app.appointment_date);
        const selectedDate = new Date(e.target.value);
        return appointmentDate.getTime() === selectedDate.getTime();
      });
    }
  };

  const handleDate = async (e: any) => {
    const parsedDate = dayjs(e, { utc: true });

    const formattedDate: any = parsedDate.format("YYYY-MM-DD");

    setFormData((prevData: any) => ({
      ...prevData,
      appointment_date: formattedDate,
    }));

    setSelectedDate(formattedDate);
    const data = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/getFSlots`,
      { appointment_date: formattedDate }
    );

    setSelectedSlots(data.data);
  };
  useEffect(() => {
    if (formData.type_of_case === "Re-submission of return case") {
      setDropdownValue(true);
    } else {
      setDropdownValue(false);
    }
  }, [formData.type_of_case]);

  useEffect(() => {
    if (formData.appointment_time === ("overriding case" as any)) {
      setOverridingValue(true);
    } else {
      setOverridingValue(false);
    }
  }, [formData.appointment_time]);

  useEffect(() => {
    async function fetchMinistryData() {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/getMinistry`
      );
      setMinistryArr(data.data.data);

      setFormData({
        ...formData,
        select_ministry: data.data.data[0].ministry_name,
        select_department: data.data.data[0].ministry_deptt[0],
      });
    }
    fetchMinistryData();
  }, [depttArry]);

  useEffect(() => {
    async function fetchDepttData() {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/getMinistry`
      );
      setDepttArry(data.data.data);
    }
    fetchDepttData();
  }, []);

  useEffect(() => {
    if (filteredObj)
      setFormData({
        ...formData,
        select_department: filteredObj?.ministry_deptt[0],
      });
  }, [formData.select_ministry]);

  const filteredObj: any = depttArry.find((obj: any) => {
    return obj.ministry_name === formData.select_ministry;
  });

  const handleSubmit = async () => {
    try {
      if (inputCapcha === capchaCode) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/createAppointment`,
          formData
        );
        setAppoint_id(response.data.data.appointment_num);

        toast.success("Appointment created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return response.data;
      } else if (inputCapcha === "")  {
        toast.error("Please fill the captcha", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }else{
        toast.error("Enter valid captcha", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
    } catch (err) {
      toast.error("Please check the form details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    const handleIdd = async () => {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/getAppointmentByMinistry`,
          {
            previous_appointment_id: formData.previous_appointment_id,
            select_ministry: formData.select_ministry,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          if (res.data.message == "No Data Found") {
            setNoDataFound(true);
          } else {
            setNoDataFound(false);
          }
        })
        .catch((err) => console.log(err, "err in id"));
    };

    if (formData.previous_appointment_id.length >= 4) {
      handleIdd();
    }
  }, [formData.previous_appointment_id]);

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 18,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(14,0,14) 100%,rgb(133,0,287) 100%,rgb(38,0,335) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(14,0,14) 100%,rgb(133,0,287) 100%,rgb(38,0,335) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 38,
    height: 38,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 95deg,rgb(14,0,14) 100%,rgb(133,0,287) 100%,rgb(38,0,335) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 95deg,rgb(14,0,14) 100%,rgb(133,0,287) 100%,rgb(38,0,335) 100%)",
    }),
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <InfoIcon />,
      2: <CalendarMonthIcon />,
      3: <ContentPasteIcon />,
      4: <AccountBalanceIcon />,
      5: <ConfirmationNumberIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const steps = [
    "Select Basic Information",
    "Select Appointment Date And Time",
    "Case Details",
    "Ministry/ State Govt. Representative Details",
    "Confirmation of Appointment Details",
  ];

  useEffect(() => {
    const getUnavailableDate = async () => {
      const unavailableDate = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/appointment/getAllUnavailableDates`
      );

      setUnavailableDates(
        unavailableDate.data.data.map((item: any) =>
          item.start_time.slice(0, 10)
        )
      );

      setEndDates(
        unavailableDate.data.data.map((item: any) => item.end_time.slice(0, 10))
      );

      setStartTime(
        unavailableDate.data.data.map((item: any) => {
          item.start_time;
        })
      );
      setEndTime(
        unavailableDate.data.data.map((item: any) => {
          item.end_time;
        })
      );
    };
    getUnavailableDate();
    setSlot(selectedSlots.map((item) => item));
    const resultArray = slot.map((slot, index) => {
      const a =
        slot > startTime[index] &&
        slot < endTime[index] &&
        selectedDate[index] === unavailableDates &&
        selectedDate[index] === endDates[index];

      return a;
    });
  }, []);
  const shouldDisableDate = (date: any) => {
    const today = dayjs();
    const dayOfWeek = date.day();
    return (
      dayOfWeek === 0 ||
      dayOfWeek === 6 ||
      date.isBefore(today, "day") ||
      unavailableDates.includes(date.format("DD-MM-YYYY"))
    );
  };
  const MySelectStyle = styled(Select)`
    .react-select__control {
      min-height: 24px !important;
      padding-left: 0.15rem;
      font-size: var(--fontsize);
      height: "24px";
      border-radius: 0 !important;
      flex-wrap: nowrap !important;
    }

    .react-select__control--is-focused {
      border: 1px solid #ced4da !important;
      box-shadow: none !important;
    }

    .react-select__value-container {
      padding: 0 !important;
    }
    .react-select__input-container {
      margin: 0 !important;
      padding: 0 !important;
      height: "24px";
      color: #000 !important;
    }
    .react-select__placeholder {
      color: #000 !important;
    }
    .react-select__menu {
      padding: 0;
      z-index: 99;
      position: absolute;
      margin: 0;
      box-shadow: none;
      border: 1px solid #e7e7e7;
    }
    .react-select__menu-list {
      margin: 0;
      padding: 0;
    }
    .react-select__indicator-separator {
      background: #ced4da;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .react-select__indicator {
      padding: 2px 5px;
    }
    .react-select__multi-value {
      height: 20px;
      line-height: 15px;
      margin: 1px;
    }
  `;
  const newTheme = (theme: any) =>
    createTheme({
      ...theme,
      components: {
        MuiPickersDay: {
          styleOverrides: {
            root: {
              color: "#000",
              backgroundColor: "#fff",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#555a63",
                border: "1px solid black",
                color: "#fff",
              },
            },
          },
        },
        MuiPickersCalendarHeader: {
          styleOverrides: {
            root: {
              color: "#000",
              borderRadius: 2,
              borderWidth: 1,
              backgroundColor: "#f7b924",
              // borderTop: "1px solid black",
            },
          },
        },
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              color: "#1565c0",
              borderRadius: 2,
              borderWidth: 1,
              borderColor: "#000",
              borderBottom: "1px solid black",
            },
          },
        },
        MuiDayCalendar: {
          styleOverrides: {
            weekDayLabel: {
              color: '#000',
             fontWeight:"bold"
            }
          }
        }, MuiButton: {
          styleOverrides: {
            root: {
             display:"none"
            },
          },
        },
        
      },
    });

  const filterFunction = (selectedSlots: any) => {
    return selectedSlots.filter((slot: any) => {
      const currentTime = new Date();
      const [slotHours, slotMinutes] = slot.split(":");
      const slotTime = new Date();
      slotTime.setHours(slotHours, slotMinutes);

      const currentDate = [currentTime.toISOString().split("T")[0]];
      if (currentDate === selectedDate) {
        return slotTime > currentTime;
      } else {
        return selectedSlots;
      }
    });
  };

  const filteredSlots = filterFunction(selectedSlots);

  return (
    <>
      <Box sx={{ backgroundColor: "#b1b7bd", height: "auto" }}>
        <Grid item xs={12} sx={{ backgroundColor: "white", height: "100%" }}>
          <Typography
            sx={{
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "700",
              color: "black",
              marginBottom: "20px",
              fontFamily: "Nunito",
            }}
          >
            <span style={{ textAlign: "center", display: "block" }}>
              Service I
            </span>
            <span style={{ textAlign: "center", display: "block" }}>
              Appointment System under Single Window System
            </span>
          </Typography>

          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    sx={{
                      fontFamily: "Nunito",
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "12px",
                        lg: "12px",
                      },
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <>
              <Grid container>
                <Grid
                  container
                  columns={{ lg: 12, xs: 3, sm: 6, md: 9, xl: 6 }}
                  sx={{
                    p: 3,
                    mt: 2,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    height: "100%",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "dark-gray",
                        mb: "10px",
                        fontFamily: "Nunito",
                      }}
                    >
                      Select Basic Information
                    </Typography>
                    <Grid container spacing={1.5}>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth>
                          <LabelTypography
                            variant="subtitle1"
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Nunito",
                            }}
                          >
                            Select Ministry <span>&#47;</span> State Government
                          </LabelTypography>

                          <Select
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            name="select_ministry"
                            value={formData.select_ministry}
                            onChange={(e) => {
                              handleChange(e);
                              validateAllField("select_ministry", e);
                            }}
                            size="small"
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  maxHeight: 110,
                                  overflowY: "auto",
                                },
                              },
                            }}
                          >
                            {ministryArr.map((min: any) => (
                              <MenuItem
                                value={min.ministry_name}
                                sx={{
                                  height: "30px",
                                  "&:hover": {
                                    backgroundColor: "lightgray",
                                  },
                                }}
                              >
                                {min.ministry_name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth>
                          <LabelTypography
                            variant="subtitle1"
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Nunito",
                            }}
                          >
                            Select Department
                          </LabelTypography>

                          <MySelectStyle
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            name="select_department"
                            size="small"
                            value={formData.select_department}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            {filteredObj?.ministry_deptt.map((deptt: any) => (
                              <MenuItem
                                value={deptt}
                                sx={{
                                  height: "30px",
                                  "&:hover": {
                                    backgroundColor: "lightgray",
                                  },
                                }}
                              >
                                {deptt}
                              </MenuItem>
                            ))}
                          </MySelectStyle>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        <FormControl fullWidth>
                          <LabelTypography
                            variant="subtitle1"
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Nunito",
                            }}
                          >
                            Type Of Cases
                          </LabelTypography>

                          <MySelectStyle
                            displayEmpty
                            size="small"
                            inputProps={{ "aria-label": "Without label" }}
                            name="type_of_case"
                            value={formData.type_of_case}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <MenuItem
                              value="Fresh Proposal"
                              sx={{
                                height: "30px",
                                "&:hover": {
                                  backgroundColor: "lightgray",
                                },
                              }}
                            >
                              Fresh Proposal
                            </MenuItem>
                            <MenuItem
                              value="Re-submission of return case"
                              sx={{
                                height: "30px",
                                "&:hover": {
                                  backgroundColor: "lightgray",
                                },
                              }}
                            >
                              Re-submission of return case
                            </MenuItem>
                          </MySelectStyle>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6}>
                        {dropdownValue == true ? (
                          <>
                            <FormControl fullWidth>
                              <LabelTypography variant="subtitle1">
                                Previous Appointment ID
                                <Typography
                                  style={{
                                    display: "inline",
                                    color: "red",
                                    fontWeight: "bold",
                                  }}
                                >
                                  *
                                </Typography>
                              </LabelTypography>
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type="number"
                                size="small"
                                name="previous_appointment_id"
                                value={formData.previous_appointment_id}
                                error={
                                  validateObject.previous_appointment_id.error
                                }
                                helperText={
                                  validateObject.previous_appointment_id
                                    .errMessage
                                }
                                onChange={(event) => {
                                  handleChange(event);
                                  validateAllField(
                                    "previous_appointment_id",
                                    event
                                  );
                                }}
                              ></TextField>
                            </FormControl>
                          </>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>

                    <FormControl fullWidth>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1.5,
                          fontSize: "15px",
                          fontFamily: "Nunito",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <NoteAltIcon
                          sx={{
                            border: "1px solid green",
                            borderRadius: "20px",
                            marginRight: "5px",
                            padding: "2px",
                            color: "green",
                          }}
                        />{" "}
                        Note:
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "15px",
                          lineHeight: "15px",
                          mt: 1,
                          backgroundColor: "rgb(237, 247, 237)",
                          color: "black",
                          padding: "5px",
                          borderRadius: "5px",
                          fontWeight: "500",
                          width: "100%",
                          fontFamily: "Nunito",
                        }}
                      >
                        Please book the appointment only when cases have the
                        approval of the President and are ready for submission
                        to UPSC.
                      </Typography>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}

          {activeStep === 1 && (
            <>
              <Box
                sx={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  mt: 1,
                  padding: "20px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "dark-gray",
                    mb: "10px",
                    fontFamily: "Nunito",
                  }}
                >
                  Select Appointment Date And Time
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "black",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "600",
                    width: "100%",
                    fontFamily: "Nunito",
                  }}
                >
                  Only 01 case will be accepted in each slot. Please book
                  separate slots for separate cases.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    paddingLeft: "5px",
                    fontFamily: "Nunito",
                  }}
                >
                  [01 Slot = 01 Case]
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <ThemeProvider theme={newTheme}>
                          <StaticDatePicker
                            value={value}
                            shouldDisableDate={shouldDisableDate}
                            onChange={(e: any) => handleDate(e?.$d)}
                            sx={{
                              ".MuiPickersToolbar-root": {
                                color: "#000",
                                borderRadius: 2,
                                borderWidth: 1,
                                
                              },
                             
                            }}
                          />
                        </ThemeProvider>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl
                        sx={{
                          width: "100%",
                          borderRadius: "10px",
                          letterSpacing: "1px",
                          ml: "20px",
                        }}
                      >
                        {(selectedSlots.length === 0 &&
                          selectedDate.length === 0) ||
                        (selectedSlots.length > 0 &&
                          selectedDate.length > 0) ? (
                          <>
                            <LabelTypography
                              variant="body1"
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "16px",
                                fontWeight: "700",
                                color: "dark-gray",
                                mb: "10px",
                                fontFamily: "Nunito",
                              }}
                            >
                              Select Time Slot
                              <Typography
                                style={{
                                  display: "inline",
                                  color: "red",
                                  fontWeight: "bold",
                                }}
                              >
                                *
                              </Typography>
                            </LabelTypography>

                            <List
                              sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              {selectedSlots.map((slot: any, index: any) => (
                                <ListItemButton
                                  key={index}
                                  selected={formData.appointment_time === slot}
                                  sx={{
                                    margin: "20px",
                                    fontWeight: "800",

                                    borderRadius: "15px",
                                    backgroundColor:
                                      formData.appointment_time === slot
                                        ? "rgb(14,0,14)  !important"
                                        : "#c7cad6",
                                    color:
                                      formData.appointment_time === slot
                                        ? "#fff !important"
                                        : "#000",
                                    "&:hover": {
                                      backgroundColor: "#eee",
                                      color: "black",
                                    },
                                  }}
                                  onClick={() =>
                                    handleChange({
                                      target: {
                                        name: "appointment_time",
                                        value: slot,
                                      },
                                    })
                                  }
                                >
                                  <ListItemText
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {slot}
                                  </ListItemText>
                                </ListItemButton>
                              ))}
                            </List>
                          </>
                        ) : (
                          <>
                            <Typography
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "24px",
                                fontWeight: "700",
                                color: "dark-gray",
                                mb: "10px",
                                fontFamily: "Nunito",
                              }}
                            >
                              All slots are booked.
                            </Typography>
                          </>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>

                <Typography
                  variant="body2"
                  paragraph // Add the paragraph prop to enable spacing between the text sections
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    lineHeight: "15px",
                    mt: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                  }}
                >
                  <CircleIcon
                    sx={{
                      height: "30px",
                      width: "40px",
                      color: "#000",
                    }}
                  />{" "}
                  The Available Dates for Appointment Booking.
                  <br />
                  <CircleIcon
                    sx={{
                      height: "30px",
                      width: "40px",
                      color: "#eee",
                    }}
                  />{" "}
                  The Dates are not Available for Appointment Booking.
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    fontSize: "15px",
                    fontFamily: "Nunito",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <NoteAltIcon
                    sx={{
                      border: "1px solid green",
                      borderRadius: "20px",
                      marginRight: "5px",
                      padding: "2px",
                      color: "green",
                    }}
                  />{" "}
                  Note:
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "15px",
                    mt: 1,
                    backgroundColor: "rgb(237, 247, 237)",
                    color: "black",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "500",
                    width: "100%",
                    fontFamily: "Nunito",
                  }}
                >
                  {" "}
                  Overriding Priority case slot will be enabled only if other
                  slots are not available on a given day. <br />
                  <span>
                    {" "}
                    This slot may be used only if no other slot is available on
                    a given day for cases which involve overriding priority due
                    to Court/ CAT directions or Date of Retirement in next 03-06
                    months.
                  </span>
                </Typography>
              </Box>
            </>
          )}

          {activeStep === 2 && (
            <>
              <Grid>
                <Grid
                  spacing={1.5}
                  columns={{ lg: 12, xs: 3, sm: 6, md: 9, xl: 12 }}
                  sx={{
                    p: 3,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    height: "100%",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "dark-gray",
                        mb: "10px",
                        fontFamily: "Nunito",
                      }}
                    >
                      Case Details
                    </Typography>
                    <Grid container spacing={1.5}>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        {" "}
                        <LabelTypography
                          sx={{
                            fontSize: "14px",
                            fontFamily: "Nunito",
                          }}
                        >
                          Name of Charged Officer{" "}
                          <Typography
                            style={{
                              display: "inline",
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            *
                          </Typography>
                        </LabelTypography>
                        <FormControlBox>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            name="name_of_co"
                            value={formData.name_of_co}
                            error={validateObject.name_of_co.error}
                            helperText={validateObject.name_of_co.errMessage}
                            onChange={(event) => {
                              handleChange(event);
                              validateAllField("name_of_co", event);
                            }}
                            required
                          />
                        </FormControlBox>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <LabelTypography
                          sx={{
                            fontSize: "14px",
                            fontFamily: "Nunito",
                          }}
                        >
                          Ministry File/ Reference Number
                        </LabelTypography>
                        <FormControlBox>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            name="ministry_file_num"
                            value={formData.ministry_file_num}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required
                          />
                        </FormControlBox>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        {" "}
                        <LabelTypography
                          sx={{
                            fontSize: "14px",
                            fontFamily: "Nunito",
                          }}
                        >
                          Whether Court/ CAT case involved
                          <Typography
                            style={{
                              display: "inline",
                              color: "red",
                              fontWeight: "bold",
                            }}
                          >
                            *
                          </Typography>
                        </LabelTypography>
                        <FormControlBox>
                          <MySelectStyle
                            displayEmpty
                            name="court_option"
                            value={formData.court_option}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            size="small"
                          >
                            <MenuItem
                              value={"Yes"}
                              sx={{
                                height: "30px",
                                "&:hover": {
                                  backgroundColor: "lightgray",
                                },
                              }}
                            >
                              Yes
                            </MenuItem>
                            <MenuItem
                              value={"No"}
                              sx={{
                                height: "30px",
                                "&:hover": {
                                  backgroundColor: "lightgray",
                                },
                              }}
                            >
                              No
                            </MenuItem>
                          </MySelectStyle>
                        </FormControlBox>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Typography
                          sx={{
                            fontSize: "10px",

                            fontWeight: "600",
                            textDecoration: "underline",
                            fontFamily: "Nunito",
                          }}
                        >
                          If CO in-service, Date of Retirement (Pls. Ignore If
                          CO is not in-service)
                        </Typography>

                        <TextField
                          type="date"
                          size="small"
                          name="date_of_retirement"
                          value={formData.date_of_retirement}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                          InputProps={{
                            inputProps: {
                              min: "1970-01-01",
                            },
                          }}
                          sx={{
                            width: "100%",
                          }}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                  {formData.appointment_time === "overriding priority case" && (
                    <>
                      <Grid container spacing={1.5}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                          {" "}
                          <LabelTypography
                            sx={{
                              fontSize: "14px",
                              fontFamily: "Nunito",
                              marginTop: "10px",
                            }}
                          >
                            Priority involved
                            <Typography
                              style={{
                                display: "inline",
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              *
                            </Typography>
                          </LabelTypography>
                          <FormControlBox>
                            <MySelectStyle
                              displayEmpty
                              name="is_court_involved"
                              value={formData.is_court_involved}
                              onChange={(e) => {
                                handleChange(e);
                                validateAllField("is_court_involved", e);
                              }}
                              size="small"
                            >
                              <MenuItem
                                value={"COURT/CAT Case"}
                                sx={{
                                  height: "30px",
                                  "&:hover": {
                                    backgroundColor: "lightgray",
                                  },
                                }}
                              >
                                COURT/CAT Case
                              </MenuItem>
                              <MenuItem
                                value={"Date of retirement"}
                                sx={{
                                  height: "30px",
                                  "&:hover": {
                                    backgroundColor: "lightgray",
                                  },
                                }}
                              >
                                Date of retirement
                              </MenuItem>
                            </MySelectStyle>
                          </FormControlBox>
                        </Grid>

                        {formData.is_court_involved === "COURT/CAT Case" ? (
                          <>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                              <LabelTypography
                                sx={{
                                  fontSize: "14px",
                                  fontFamily: "Nunito",
                                  marginTop: "10px",
                                }}
                              >
                                Direction of Court
                                <Typography
                                  style={{
                                    display: "inline",
                                    color: "red",
                                    fontWeight: "bold",
                                  }}
                                >
                                  *
                                </Typography>
                              </LabelTypography>
                              <FormControlBox>
                                <TextField
                                  id="outlined-basic"
                                  variant="outlined"
                                  size="small"
                                  name="direction_of_court"
                                  value={formData.direction_of_court}
                                  error={
                                    validateObject.direction_of_court.error
                                  }
                                  helperText={
                                    validateObject.direction_of_court.errMessage
                                  }
                                  onChange={(event) => {
                                    handleChange(event);
                                    validateAllField(
                                      "direction_of_court",
                                      event
                                    );
                                  }}
                                  required
                                />
                              </FormControlBox>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                              <LabelTypography
                                sx={{
                                  fontSize: "14px",
                                  fontFamily: "Nunito",
                                  marginTop: "10px",
                                }}
                              >
                                Time Line of case
                                <Typography
                                  style={{
                                    display: "inline",
                                    color: "red",
                                    fontWeight: "bold",
                                  }}
                                >
                                  *
                                </Typography>
                              </LabelTypography>
                              <FormControlBox>
                                <TextField
                                  id="outlined-basic"
                                  variant="outlined"
                                  size="small"
                                  name="time_line_of_case"
                                  value={formData.time_line_of_case}
                                  error={validateObject.time_line_of_case.error}
                                  helperText={
                                    validateObject.time_line_of_case.errMessage
                                  }
                                  onChange={(event) => {
                                    handleChange(event);
                                    validateAllField(
                                      "time_line_of_case",
                                      event
                                    );
                                  }}
                                  required
                                />
                              </FormControlBox>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                              <LabelTypography
                                sx={{
                                  fontSize: "14px",
                                  fontFamily: "Nunito",
                                }}
                              >
                                Date of Court order
                                <Typography
                                  style={{
                                    display: "inline",
                                    color: "red",
                                    fontWeight: "bold",
                                  }}
                                >
                                  *
                                </Typography>
                              </LabelTypography>
                              <FormControlBox>
                                <TextField
                                  id="outlined-basic"
                                  variant="outlined"
                                  size="small"
                                  name="date_of_order_of_court"
                                  value={formData.date_of_order_of_court}
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  required
                                  sx={{
                                    boxShadow:
                                      "rgba(149, 157, 165, 0.2) 0px 2px 2px",
                                    letterSpacing: "1px",
                                  }}
                                />
                              </FormControlBox>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                              <Typography
                                sx={{
                                  fontSize: "10px",

                                  fontWeight: "600",
                                  textDecoration: "underline",
                                  fontFamily: "Nunito",
                                }}
                              >
                                Date up to which proceedings are to be finalized
                                as per directions of Court/CAT
                              </Typography>

                              <TextField
                                type="date"
                                size="small"
                                name="date_of_retirement"
                                value={formData.date_of_retirement}
                                onChange={(event) => {
                                  handleChange(event);
                                }}
                                InputProps={{
                                  inputProps: {
                                    min: "1970-01-01",
                                  },
                                }}
                                sx={{
                                  width: "100%",
                                  boxShadow:
                                    "rgba(149, 157, 165, 0.2) 0px 2px 2px",
                                  letterSpacing: "1px",
                                }}
                              ></TextField>
                            </Grid>
                          </>
                        ) : (
                          <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Typography
                              sx={{
                                fontSize: "10px",

                                fontWeight: "600",
                                textDecoration: "underline",
                                fontFamily: "Nunito",
                                marginTop: "10px",
                              }}
                            >
                              Date of Superannuation of CO (Up to 06 Months
                              before the date of retirement)
                              <Typography
                                style={{
                                  display: "inline",
                                  color: "red",
                                  fontWeight: "bold",
                                }}
                              >
                                *
                              </Typography>
                            </Typography>

                            <TextField
                              type="date"
                              size="small"
                              name="date_of_retirement"
                              value={formData.date_of_retirement}
                              onChange={(event) => {
                                handleChange(event);
                              }}
                              InputProps={{
                                inputProps: {
                                  min: "1970-01-01",
                                },
                              }}
                              sx={{
                                width: "100%",
                                boxShadow:
                                  "rgba(149, 157, 165, 0.2) 0px 2px 2px",
                                letterSpacing: "1px",
                              }}
                            ></TextField>
                          </Grid>
                        )}
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </>
          )}

          {activeStep === 3 && (
            <>
              <Grid
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 5, sm: 8, md: 12 }}
              >
                <Grid
                  spacing={1.5}
                  columns={{ lg: 12, xs: 3, sm: 6, md: 9, xl: 12 }}
                  sx={{
                    p: 3,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "dark-gray",
                      marginTop: "10px",
                      fontFamily: "Nunito",
                    }}
                  >
                    Ministry/ State Govt. Representative Details
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "dark-gray",
                      mb: "10px",
                      fontFamily: "Nunito",
                    }}
                  >
                    (Appointment confirmation will be communicated to the Mobile
                    Number and & Email address filled below.)
                  </Typography>
                  <Grid container spacing={1.5}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        First Name{" "}
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>

                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        helperText={validateObject.first_name.errMessage}
                        name="first_name"
                        value={formData.first_name}
                        error={validateObject.first_name.error}
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("first_name", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        Last Name{" "}
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="last_name"
                        value={formData.last_name}
                        error={validateObject.last_name.error}
                        helperText={validateObject.last_name.errMessage}
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("last_name", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        Office Landline Number{" "}
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="office_landline_number"
                        value={formData.office_landline_number}
                        error={validateObject.office_landline_number.error}
                        helperText={
                          validateObject.office_landline_number.errMessage
                        }
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("office_landline_number", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        Mobile Number
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="mobile_number"
                        value={formData.mobile_number}
                        error={validateObject.mobile_number.error}
                        helperText={validateObject.mobile_number.errMessage}
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("mobile_number", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        Designation
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="designation"
                        value={formData.designation}
                        error={validateObject.designation.error}
                        helperText={validateObject.designation.errMessage}
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("designation", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        FAX(if any)
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        // label="FAX"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="fax"
                        value={formData.fax}
                        onChange={(event) => {
                          handleChange(event);
                          // validateAllField("fax", event);
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <LabelTypography
                        variant="subtitle1"
                        sx={{ fontSize: "14px", fontFamily: "Nunito" }}
                      >
                        Email-ID{" "}
                        <Typography
                          style={{
                            display: "inline",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </Typography>
                      </LabelTypography>
                      <TextField
                        id="outlined-basic"
                        // label="Email-ID"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="email_id"
                        value={formData.email_id}
                        error={validateObject.email_id.error}
                        helperText={validateObject.email_id.errMessage}
                        onChange={(event) => {
                          handleChange(event);
                          validateAllField("email_id", event);
                        }}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}

          {activeStep === 4 && (
            <>
              <Grid
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 5, sm: 8, md: 12 }}
              >
                <Grid
                  spacing={1.5}
                  columns={{ lg: 12, xs: 3, sm: 6, md: 9, xl: 12 }}
                  sx={{
                    p: 3,
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    mt: 2,
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "dark-gray",
                      marginBottom: "15px",
                      fontFamily: "Nunito",
                    }}
                  >
                    Confirmation of Appointment Details
                  </Typography>
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "18px",
                          fontFamily: "Nunito",
                        }}
                      >
                        {formData.select_ministry}
                      </Typography>
                      <br />
                      <Typography
                        sx={{
                          color: "#4790ca",
                          fontSize: "13px",
                          fontWeight: "500",
                          fontFamily: "Nunito",
                        }}
                      >
                        {formData.select_department}
                        <br />
                        {selectedDate},&nbsp;&nbsp;{formData.appointment_time}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      {" "}
                      <Typography
                        sx={{
                          fontWeight: "500",
                          mb: 1,
                          fontSize: "12px",
                          lineHeight: "20px",
                          fontFamily: "Nunito",
                        }}
                      >
                        <span
                          style={{ fontSize: "20px", fontFamily: "Nunito" }}
                        >
                          {formData.first_name}&nbsp;{formData.last_name}
                        </span>
                        <br />
                        Office Landline Number :
                        {formData.office_landline_number}
                        <br />
                        Email-ID :{formData.email_id}
                        <br />
                        Mobile Number :{formData.mobile_number}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid spacing={{ xs: 2, md: 3 }}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      sx={{
                        display: "flex",
                      }}
                    >
                      <List
                        sx={{ listStyleType: "disc", fontFamily: "Nunito" }}
                      >
                        <Typography
                          sx={{
                            textDecoration: "underline",
                            lineHeight: "18px",
                            fontFamily: "Nunito",
                          }}
                        >
                          Undertaking
                        </Typography>
                        <ListItem
                          sx={{
                            display: "list-item",
                            marginLeft: "15px",

                            fontFamily: "Nunito",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: "Nunito" }}
                          >
                            All the documents are completed as per proforma/
                            checklist issued vide DoP&T's O.M. No.
                            39011/08/2016-Esst(B) dated 28.12.2018.
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            display: "list-item",
                            marginLeft: "15px",

                            fontFamily: "Nunito",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: "Nunito" }}
                          >
                            All the documents are in original/ authenticated
                            legible copies, duly paginated.
                          </Typography>
                        </ListItem>
                        <ListItem
                          sx={{
                            display: "list-item",
                            marginLeft: "15px",

                            fontFamily: "Nunito",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: "Nunito" }}
                          >
                            Priority indicated in the case is as per Court/CAT's
                            order or due to date of Retirement in next 06
                            Months.
                          </Typography>
                        </ListItem>
                      </List>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Box
                        sx={{
                          gap: 2,
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography
                          fontFamily="Nunito"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "700",
                            fontFamily: "Nunito",
                          }}
                        >
                          Captcha
                        </Typography>

                        <TextField
                          error
                          placeholder="Enter Captcha"
                          autoComplete="off"
                          type="text"
                          value={inputCapcha}
                          sx={{ background: "white" }}
                          onPaste={(e) => e.preventDefault()}
                          onChange={(event) => {
                            setInputCapcha(event.target.value);
                          }}
                          inputProps={{
                            style: {
                              height: "35px",
                              padding: "0 14px",
                            },
                          }}
                        ></TextField>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="body1"
                            sx={{
                              cursor: "not-allowed",

                              background: "#000",
                              fontWeight: 500,
                              p: 1.2,
                              fontSize: "18px",
                              width: "80px",
                              margin: "auto",
                              height: "35px",
                              color: "white",
                              borderRadius: "4px",
                              fontFamily: "cursive",
                            }}
                          >
                            {capchaCode}
                          </Typography>

                          <Tooltip title="Refresh Captcha">
                            <RefreshIcon
                              onClick={refreshCapcha}
                              sx={{
                                fontSize: "33px",
                                color: "#000",
                                cursor: "pointer",
                                width: "50px",
                              }}
                            />
                          </Tooltip>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}

          {activeStep === steps.length && (
            <PreviewPage
              appoint_id={appoint_id}
              appointment_date={formData.appointment_date}
              appointment_time={formData.appointment_time}
            />
          )}

          <Box
            sx={{
              display: "flex",
              mt: 2,
              mb: 1,
              justifyContent: "right",
              gap: "1%",
            }}
          >
            {activeStep > 0 && activeStep < steps.length && (
              <Button
                variant="contained"
                onClick={handleBack}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#eee",
                    color: "black",
                  },
                }}
              >
                <FastRewindIcon /> Back
              </Button>
            )}
            {activeStep !== steps.length && (
              <Button
                variant="contained"
                onClick={(e) => {
                  if (activeStep === steps.length - 1) {
                    handleSubmit();
                  } else {
                    handleNext(e);
                  }
                }}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.87)",
                  color: "#fff",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}{" "}
                <FastForwardIcon />
              </Button>
            )}
          </Box>
        </Grid>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </>
  );
};

export default MultiStepForm;

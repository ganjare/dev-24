import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PrintIcon from "@mui/icons-material/Print";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const PreviewPage = (props: any) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      sx={{
        paddingLeft: "60px",
        paddingRight: "60px",
        mt: "14px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "20px",
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              mt: "10px",
            }}
          >
            <Box sx={{ paddingRight: "10px" }}>
              <img src="/submit.png" width={44} alt={"logo_img"} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  cursor: "pointer",
                  letterSpacing: "-0.8px",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                <u>Booking Details</u>
              </Typography>
              {/* <br /> */}
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "14px",
                  cursor: "pointer",
                  letterSpacing: "-0.8px",
                  fontFamily: "Nunito, sans-serif",
                  lineHeight: "40px",
                }}
              >
                Appointment ID:{props.appoint_id}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mb: "40px", mt: "20px" }}>
          <List
            sx={{
              listStyleType: "disc",
              mt: "5px",
              fontSize: "14px",
              fontFamily: "Nunito",
            }}
          >
            Your appointment has been booked for following slot(s):
            <ListItem>
              <FiberManualRecordIcon
                sx={{ fontSize: "6px", marginRight: "10px" }}
              />
              <Typography sx={{ fontWeight: "bold", fontFamily: "Nunito" }}>
                {" "}
                Appointment Date/Time : {props.appointment_date} ,&nbsp;&nbsp;
                {props.appointment_time}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sx={{ fontWeight: "bold", fontFamily: "Nunito" }}>
          Please reach the Single Window (Disciplinary cases -Services-I branch)
          located at Room No. 10A, Ground Floor, Annexe Building, UPSC on
          scheduled date and time.
        </Grid>
        <Grid item xs={12} sx={{ fontSize: "13px", fontFamily: "Nunito" }}>
          <Typography sx={{ fontFamily: "Nunito" }}>Disclaimer:</Typography>
          <Typography sx={{ fontFamily: "Nunito" }}>
            <br /> All efforts will be made to accept the case on the given
            date/time. However, in view of any unavoidable circumstances,
            appointment may be changed to any mutually convenient date/time.
          </Typography>
          <Typography sx={{ fontFamily: "Nunito" }}>
            <br />
            An email with the appointment details has been sent to you.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Button
            variant="contained"
            startIcon={<CalendarMonthIcon />}
            onClick={() => location.reload()}
            sx={{
              alignItems: "right",
              backgroundColor: "#f5c44e",
              color: "black",
              fontWeight: "bold",
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#f5c00e",
                color: "black",
              },
            }}
          >
            Go To Booking Page
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Button
            variant="contained"
            sx={{
              alignItems: "right",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "#eee",
                color: "black",
              },
            }}
            onClick={handlePrint}
            endIcon={<PrintIcon />}
          >
            Print
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewPage;

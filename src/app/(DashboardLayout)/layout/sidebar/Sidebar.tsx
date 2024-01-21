import { useMediaQuery, Box, Drawer, Typography, Divider } from "@mui/material";
import Logo from "../shared/logo/Logo";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
import router from "next/navigation";
import { useRouter } from "next/navigation";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const sidebarWidth = "330px";

  const router = useRouter();


  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              backgroundColor:"#F0F6F6",
              // boxShadow: "0px 0px 25px 0px rgba(128, 128, 128, 0.25)"
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box sx={{paddingLeft:"10px"}}>
            
              <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop:"10px"}}>
                <img src="/Gov.png" width={50} alt="" />
              </Box>
              <Box  onClick={() => 
                      {router.push("/LoginTab")}} sx={{display:"flex" ,cursor:"pointer", flexDirection:"column", justifyContent:"center" , alignItems:"center" , paddingLeft:"10px"}}>
                <Typography sx={{color:"black" , fontWeight:"700"}}>संघ लोक सेवा आयोग</Typography>
                <Typography sx={{color:"black" , fontWeight:"700"}}>Union Public Service Commision</Typography>
                
                </Box>

               

            </Box>
           
            <Box> 
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;

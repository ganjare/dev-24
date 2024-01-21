import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";
import PageviewIcon from '@mui/icons-material/Pageview';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { uniqueId } from "lodash";
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Incoming",  
    icon: EditNoteIcon,
    href: "/E-appointment",
  },
 
  // {
  //   id: uniqueId(),
  //   title: "Admin Data Panel",
  //   icon: PageviewIcon,
  //   href: "/FileTrack/ForgetPassword",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Officer Report",
  //   icon: SummarizeIcon,
  //   href: "/Report/OfficerReport",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Add Authorities",
  //   icon: AddHomeWorkIcon,
  //   href: "/Authority/AddAuthority",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Show Authorities",
  //   icon: PageviewIcon,
  //   href: "/Authority/ShowAuthority",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Add Officer",
  //   icon: AddHomeWorkIcon,
  //   href: "/Officer/AddOfficer",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Show Officer",
  //   icon: PageviewIcon,
  //   href: "/Officer/Showofficer",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/sample-page",
  // },
];

export default Menuitems;

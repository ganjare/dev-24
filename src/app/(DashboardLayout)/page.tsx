'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import { useEffect } from 'react';
// import { useAuth } from '../../context/JWTContext/AuthContext.provider';
import { useRouter } from 'next/navigation';
import DashboardForm from '@/app/(DashboardLayout)/components/dashboard/DashboardForm';
import DashboardTable from './components/dashboard/DashboardTable';
import MultiStepForm from './E-appointment/page';



const Dashboard = () => {

  // const auth = useAuth();
  const router = useRouter();

  // console.log(auth,"auth")

  // useEffect(() => {
  //   if (
  //     !auth.isAuthenticated
  //   ) {
  //     router.push("/login");
  //   }
  // }, [auth, router]);

  return (
   
          <MultiStepForm/>
        
  )
}

export default Dashboard;

import { createContext, useContext, useMemo } from 'react';
import axios from '../../../../../config/axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const illegalStateFunction = async (..._args: any) => {
    throw new Error('You must wrap your components in <UserContextProvider />');
};

const initialData = {
    createEAppointment: illegalStateFunction,
};

export type EAppointment = {
    select_ministry: string;
    select_department: string;
    type_of_case: string;
    previous_appointment_id: string;
    appointment_date: string;
    appointment_time: string;
    name_of_co: string;
    ministry_file_num: number;
    is_court_involved: string;
    date_of_retirement: string;
    date_of_superannuation: string;
    order_of_court: string;
    date_upto_proceedings: string;
    is_contempt_of_court: string;
    whether_extensions: string;
    first_Name: string;
    last_Name: string;
    designation: string;
    email_id: string;
    office_landline_number: string;
    mobile_number: string;
    fax: string
};


export const UserContext = createContext(initialData);

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const useUser = () => useContext(UserContext);

function UserContextProvider({ children }: UserContextProviderProps) {
    const createEAppointment = (EAppointmentObj: EAppointment) => {
        const response = axios.post(
            '/api/api/appointment/createAppointment',
            EAppointmentObj,
        );
        return response;
    };

    // const updateFamilyHistoryDetails = (
    //     FamilyHistoryDetailsArr: FamilHistoryDetails[],
    // ) => {
    //     const response = axios.patch(
    //         '/api/candidate/familyHistory/update',
    //         FamilyHistoryDetailsArr,
    //     );
    //     return response;
    // };

    // const saveAsDraft = (Arr: any, form_name: string, token: string) => {
    //     console.log(Arr);
    //     axios
    //         .post('/api/candidate/saveAsDraft', Arr, {
    //             headers: {
    //                 form_name,
    //                 token,
    //             },
    //         })
    //         .then((response) => console.log(response));
    //     // console.log(response);
    // };

    // const getEAppointment = async () => {
    //     const response = await axios.get('/api/candidate/getEAppointment');
    //     return response;
    // };

    // const getEducationDetails = async () => {
    //     const response = await axios.get('/api/candidate/getEducationDetails');
    //     return response;
    // };

    const globalContextValue = useMemo(
        () =>
            ({
                createEAppointment,
            } as any),
        [],
    );
    return (
        <UserContext.Provider value={globalContextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

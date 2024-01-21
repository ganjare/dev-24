
export const validateFileSize = (
    e: any,
    str: string,
    minSize: number,
    maxSize: number,
): { error: boolean; errMessage: string } | undefined => {
    if (e.target.name === str) {
        const file = e.target.files[0];
        if (file.size > maxSize) {
            return {
                error: true,
                errMessage:
                    'File size is too large. Please select an image file that is less than 2 MB.',
            };
        }
        if (file.size < minSize) {
            return {
                error: true,
                errMessage:
                    'File size is too small. Please select an image file that is greater than 50 KB.',
            };
        }
    }
    return { error: false, errMessage: '' };
};

export const validatePayscale = (e: any) => {
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input) {
        return { error: true, errMessage: 'This field is required' };
    }
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Payscale can have only Numbers' };
    }
    // if(input.length<1)return ({ error: true, errMessage:"length should be 6"});
    return { error: false, errMessage: '' };
};

export const validateAlphabetsWithoutSpaces = (e: any) => {
    const input = e.target.value;
    const pattern = /^[A-Za-z]+$/;
    if (!input.match(pattern) && input.length > 0) {
        return { error: true, errMessage: 'It can have alphabets only' };
    }
    return { error: false, errMessage: '' };
};

export const validateRequiredField = (e: any) => {
    if (e.target.value === '') {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateEmailid = (e: any) => {
    const input = e.target.value;
    const pattern = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.value === '') {
        return { error: true, errMessage: 'This is required' };
    }
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Enter Valid Mail Id' };
    }
    return { error: false, errMessage: '' };
};

export const validateAlphabetwithminChar = (e: any) => {
    const input = e.target.value;
    const pattern = /^[A-Za-z]+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }
    if (input.length < 3) {
        return {
            error: true,
            errMessage: 'Username length should be morethan 3',
        };
    }

    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Username can have only Alphabets' };
    }
    return { error: false, errMessage: '' };
};

export const validatePincode = (e: any) => {
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Reference No. can have only Numbers' };
    }
    // if(input.length!=6)return ({ error: true, errMessage:"length should be 6"});
    return { error: false, errMessage: '' };
};

export const validateRequiredandAlphabetOnly = (e: any) => {
    const input = e.target.value;
    const pattern = /^[A-Za-z]+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }

    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Username can have only Alphabets' };
    }
    return { error: false, errMessage: '' };
};

export const validateAlphabetsOnly = (e: any) => {
    console.log(1);

    const input = e.target.value;
    const pattern = /^[A-Za-z ]+$/;
    if (e.target.value === '') {
        return { error: true, errMessage: 'This is required' };
    }


    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Enter valid input.' };
    }

    return { error: false, errMessage: '' };
};

export const validateDigitsOnly = (e: any) => {
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateAlphabetsAndDigitsOnly = (e: any) => {
    const input = e.target.value;
    const pattern = /^[0-9a-zA-Z ]+$/;
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateMobileNum = (e: any) => {
    console.log(e);
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Mobile Num can only have Numbers' };
    }
    if (input.length === 10) {
        return { error: false, errMessage: '' };
    }
    return { error: true, errMessage: 'Mobile No. should be of length 10' };
};

export const validateAppointmentNum = (e: any) => {
    console.log(e);
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }
    // if (!input.match(pattern)) {
    //     return { error: true, errMessage: 'Appointment Num can only have Numbers' };
    // }
    if (input.length === 4) {
        return { error: false, errMessage: '' };
    }
    return { error: true, errMessage: 'Appointment no. should be of length 4' };
};

export const validateLandlineNum = (e: any) => {
    console.log(e);
    const input = e.target.value;
    const pattern = /^\d+$/;
    if (!input) {
        const res = validateRequiredField(e);
        return res;
    }
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Landline Num can only have Numbers' };
    }
    if (input.length === 10) {
        return { error: false, errMessage: '' };
    }
    return { error: true, errMessage: 'Landline No. should be of length 10' };
};

export const validateMaxLength = (e: any, maxLength: number) => {
    const input = e.target.value;
    if (input.length > maxLength) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateMinLength = (e: any, minLength: number) => {
    const input = e.target.value;
    if (input.length < minLength) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateMinValue = (e: any, minValue: number) => {
    const input = e.target.value;
    if (input < minValue) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validateMaxValue = (e: any, maxValue: number) => {
    const input = e.target.value;
    if (input > maxValue) {
        return { error: true, errMessage: 'This is required' };
    }

    return { error: false, errMessage: '' };
};

export const validatePassword = (e: any) => {
    const input = e.target.value;
    const pattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\\[\]|\\:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_+={}\\[\]|\\:;"'<>,.?/]{8,}$/;
    if (!input.match(pattern)) {
        return { error: true, errMessage: 'Enter a Valid password' };
    }
    return { error: false, errMessage: '' };
};


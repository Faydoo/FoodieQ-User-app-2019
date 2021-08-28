export const CREATE_BOOKING = 'CREATE_BOOKING';
export const EDIT_BOOKING = 'EDIT_BOOKING';

export const createBooking = (vendor, noOfPeople, date, startTime, endTime, name, telnum, mailaddress, comments) => {
    return async dispatch => {
        // all the async code goes here
        const response = await fetch('http://127.0.0.1:8000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vendor,
                noOfPeople,
                date,
                startTime,
                endTime,
                name,
                telnum,
                mailaddress,
                comments
            })
        });

        const resData = await respone.json();

        dispatch({
            type: CREATE_BOOKING,
            bookingData: {
                id: resData.id,
                vendor,
                noOfPeople,
                date,
                startTime,
                endTime,
                name,
                telnum,
                mailaddress,
                comments
            } 
        });
    };
};

export const editBooking = (id, vendor, noOfPeople, date, startTime, endTime, name, telnum, mailaddress, comments) => {
    return async dispatch => {
        // all the async code goes here
        const response = await fetch('http://127.0.0.1:8000/bookings', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vendor,
                noOfPeople,
                date,
                startTime,
                endTime,
                name,
                telnum,
                mailaddress,
                comments
            })
        });

        const resData = await respone.json();

        dispatch({
            type: CREATE_BOOKING,
            bookingData: {
                id: resData.id,
                vendor,
                noOfPeople,
                date,
                startTime,
                endTime,
                name,
                telnum,
                mailaddress,
                comments
            } 
        });
    };
};
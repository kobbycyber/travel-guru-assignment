
import { Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const CalenderDate = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const history = useHistory()

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

 const handleBookingOrder = () =>{
    history.push('/booking')
 }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>origin</Form.Label>
                        <Form.Control type="email" placeholder="Enter origin" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>destination</Form.Label>
                        <Form.Control type="email" placeholder="Enter destination" />
                    </Form.Group>
                </Form>

                <Grid container justify="space-around">

                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="From"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="To"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
                <Button onClick={handleBookingOrder} variant="warning px-5" type="submit">
                    Booking
                </Button>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default CalenderDate;
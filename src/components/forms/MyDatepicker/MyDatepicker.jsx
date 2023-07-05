import {forwardRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styleDatepicker from "./Modal.MyDatepicker.css"; 
import Icon from "components/Icon/Icon";

const newDate = new Date()

export const MyDatepicker = ({ date, handleSetData }) => {

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <div className="example-custom-input" onClick={onClick} ref={ref}>
            <p>{value}</p>
            <Icon name="#chevron-down-icon" width='20px' height='20px' color='#BEDBB0'/>
        </div>
    ));

    return (
        <div>
            {date.toLocaleDateString() === newDate.toLocaleDateString() &&
                <span className="deadline">Today, </span>}
            <DatePicker
                selected={date}
                onChange={date => handleSetData(date)}
                minDate={new Date()}
                dateFormat='MMMM d'
                className={styleDatepicker}
                customInput={<CustomInput />}
            />          
        </div>
    )
}
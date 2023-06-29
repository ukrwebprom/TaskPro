// import { useDispatch } from "react-redux";
import {
    forwardRef,
    // useEffect,
    useState
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styleDatepicker from "./Modal.MyDatepicker.css"; 
import Icon from "components/Icon/Icon";

const newDate = new Date()

export const MyDatepicker = () => {
    const [selectedDate, setSelectedDate] = useState(newDate);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(udateDeadline(selectedDate.toLocaleDateString()))
    // }, [dispatch, selectedDate]);

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <p className="example-custom-input" onClick={onClick} ref={ref}>
            <p>{value}</p>
            <Icon name="#chevron-down-icon" width='20px' height='20px' color='#BEDBB0'/>
        </p>
    ));

    return (
        <p>
            {selectedDate.toLocaleDateString() === newDate.toLocaleDateString() &&
                <span className="deadline">Today, </span>}
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()}
                dateFormat='MMMM d'
                className={styleDatepicker}
                customInput={<CustomInput />}
            />          
        </p>
    )
}
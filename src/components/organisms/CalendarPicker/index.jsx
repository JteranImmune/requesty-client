import { React, useState }from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Label from "../../atoms/Labels";
import { DayPicker, Row , useInput } from 'react-day-picker';
import { differenceInCalendarDays } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Input from '../../atoms/Input'
import Icon from "../../atoms/Icon";

const CalendarPicker = ({onChange}) =>{
    
    const [isCalendarOpen, setisCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with a default value
    
    const handleSelect = (selectedDay) => {
        setSelectedDate(selectedDay);
        setisCalendarOpen(false); // Close the picker upon selection

        const event = {
            target: {
                name: selectedDay,
                value: selectedDay.value
            }
        };
        onChange(event);
    };
    
    const toggleDatePicker = () => setisCalendarOpen(!isCalendarOpen);

    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: selectedDate,
        // onChange: handleSelect,
        onDayChange: handleSelect,
        onDayClick: handleSelect,
        onSelect: handleSelect,
        fromYear: 2024,
        toYear: 2025,
        format: 'yyyy-MM-dd',     
    });

      function isPastDate(date) {
        return differenceInCalendarDays(date, new Date()) < 0;
      }
      
      function OnlyFutureRow(props) {
        const isPastRow = props.dates.every(isPastDate);
        if (isPastRow) return <></>;
        return <Row {...props} />;
      }

    return(
        <Flex direction="column" maxwidth="xsm">
        <Label for="dueDate">Due Date</Label>  
        <Flex gap="medium">             
            <Input 
                type="date" 
                name="dueDate"
                id="dueDate" 
                onChange= {handleSelect}               
                {...inputProps}
            /> 
            <Flex gap="small" align="center">
                <Icon iconName="FaCalendarAlt" onClick={() => toggleDatePicker()} cursor="pointer" size="regular"/>
                {!isCalendarOpen && <Text size="sm">Open</Text>}
                {isCalendarOpen && <Text size="sm">Close</Text>}
            </Flex>    
        </Flex>
        {isCalendarOpen && (
            <div className="calendar-popup">
                <DayPicker 
                    fromDate={new Date()}
                    components={{ Row: OnlyFutureRow }}
                    hidden={isPastDate}
                    showOutsideDays
                    onChange= {handleSelect}
                    {...dayPickerProps}
                />
            </div>   
         )}
    </Flex>
    )
}

export default CalendarPicker;
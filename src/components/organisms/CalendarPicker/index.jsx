import { React, useState }from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Label from "../../atoms/Labels";
import { DayPicker, Row , useInput } from 'react-day-picker';
import { differenceInCalendarDays } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Input from '../../atoms/Input'
import Icon from "../../atoms/Icon";

const CalendarPicker = () =>{

    
    const [isCalendarOpen, setisCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(undefined);


    const handleDayClick = (day) => {
        setSelectedDate(day);
        setisCalendarOpen(!isCalendarOpen);
        console.log("Dia elegido")
    };

    const toggleDatePicker = () => setisCalendarOpen(!isCalendarOpen);

    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: new Date(),
        onDayChange: handleDayClick,
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
        <Label for="DueDate">Due Date</Label>  
        <Flex gap="medium">             
            <Input 
                type="text" 
                name="DueDate" 
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
                    onDayClick={handleDayClick}
                    {...dayPickerProps}
                />
            </div>   
         )}
    </Flex>
    )
}

export default CalendarPicker;
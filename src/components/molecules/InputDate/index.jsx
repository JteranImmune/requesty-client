import React, { useState } from 'react';
import InputField from '../InputField';

const InputDate = ({label, name, onChange}) => {
    // Utility function to format a Date object as YYYY-MM-DD
    const formatDate = (date) => {
        const d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

        return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
    };

    // Assuming today's date for initial setup
    const today = new Date();

    // Calculating the next day
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);

    // Calculating one month later
    const oneMonthLater = new Date(today);
    oneMonthLater.setMonth(today.getMonth() + 1);

    // State to hold the current day
    const [currentDay, setCurrentDay] = useState(formatDate(today));

    // Handler for onChange event to update the current day
    const handleChange = (e) => {
        setCurrentDay(e.target.value);

        const event = {
            target: {
                name: e.target.name,
                value: e.target.value
            }
        };
        onChange(event);
    };

    return (
        <InputField
            type="date"
            name={name}
            label={label}
            value={currentDay}
            min={formatDate(nextDay)}
            max={formatDate(oneMonthLater)}
            onChange={handleChange}
        />
    );
};

export default InputDate;
import React, { useEffect, useState } from "react";
import Flex from "../../utility/Flex";
import Divider from '../../atoms/Divider'
import TaskInputField from '../../molecules/TaskInputField';
import 'react-day-picker/dist/style.css';
// import CalendarPicker from "../CalendarPicker";
import InputField from '../../molecules/InputField'
// import Button from "../../atoms/Button";
import InputDate from "../../molecules/InputDate";
import { STATUS_LIST, PRIORITY_LIST } from '../../../consts'
import { capitalizedFirstLetter } from "../../../utils";
import Input from "../../atoms/Input";
import PhotoAlbum from "react-photo-album";
import { formatDate } from "../../../utils/index";


const RequestDetails = ({onChange, onSubmit, options, requestDetails, disabled }) =>{

    const ownerIds = Array.isArray(options) ? options.map(item => item._id) : [];
    const ownerNames = Array.isArray(options) ? options.map(item => item.name) : [];

    const teamList = ownerNames.map((name, index) => ({
        name: capitalizedFirstLetter(name),
        id: ownerIds[index],
      }));

    const priorityList = PRIORITY_LIST.map((name, index) => ({
        name: capitalizedFirstLetter(name),
        id: index,
      }));

    const statusList = STATUS_LIST.map((name, index) => ({
        name: capitalizedFirstLetter(name),
        id: index,
      }));


    const TASK_OPTIONS = [
        { 
            list : statusList,
            placeholder: capitalizedFirstLetter(requestDetails.status),
            label: "Status"
        },
        { 
            list : priorityList,
            placeholder: capitalizedFirstLetter(requestDetails.priority),
            label: "Priority"
        },
        { 
            list : teamList,
            placeholder: requestDetails.owner.name,
            label: "Owner"
        }
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);


    const toggleDropdown = (dropdownId) => {
        if (activeDropdown === dropdownId) {
            setActiveDropdown(null); 
        } else {
            setActiveDropdown(dropdownId); 
        }
    };

    const dateFormated = formatDate(requestDetails.dueDate);

    console.log(dateFormated)

    return(
        <Flex direction='column'>
            <form onSubmit={onSubmit} style={{marginTop:'1.8rem'}} encType="multipart/form-data" > 
                <Input type={"text"} name={requestDetails.title} value={requestDetails.title} TextDisplay="sm" width="100%"  disabled={disabled} height='auto'></Input>
                <Flex gap="normal" align="flex-start" style={{marginTop:'1.8rem'}}>
                    {TASK_OPTIONS.map((option, index) =>
                        <TaskInputField 
                            label={option.label} 
                            listItems={option.list} 
                            placeholder={option.placeholder}
                            onChange={onChange}
                            key={index}
                            disabled = {disabled}
                            toggleDropdown={disabled ? () => {} : () => toggleDropdown(option.label)} 
                            isOpen={activeDropdown === option.label} 
                        />
                    )}
                    {/* <CalendarPicker onChange={onChange} /> */}
                    <InputDate label="Due Date" name="dueDate" value={dateFormated} onChange={onChange} disabled = {disabled}/>
                </Flex>
                <Flex direction="column" style={{marginTop:'1.8rem'}}>
                    <InputField label="Description" name="description" disabled = {disabled} isTextArea={true} maxwidth="100%" onChange={onChange} value={requestDetails.description}/>
                    {/* <InputField label="Attachments" name="attachments" type="file" maxwidth="100%" onChange={onChange} multiple/> */}
                    {/* <FilesInput onChange={onChange}/> */}
                </Flex>   
                <Divider margin="large"/>
                <PhotoAlbum layout="rows" photos={requestDetails.attachments}/>
            </form>
        </Flex>
    )
};

export default RequestDetails;
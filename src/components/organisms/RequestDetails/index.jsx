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


const RequestDetails = ({onChange, onSubmit, options, requestDetails, isEditable}) =>{

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


    return(
        <Flex direction='column'>
            <form onSubmit={onSubmit} style={{marginTop:'1.8rem'}} encType="multipart/form-data" > 
                <Input type={"text"} name={requestDetails.title} value={requestDetails.title} TextDisplay="sm" height='auto' isEditable={isEditable}></Input>
                <Flex gap="normal" align="flex-end" style={{marginTop:'1.8rem'}}>
                    {TASK_OPTIONS.map((option, index) =>
                        <TaskInputField 
                            label={option.label} 
                            listItems={option.list} 
                            placeholder={option.placeholder}
                            onChange={onChange}
                            key={index} 
                            isEditable={isEditable}
                            toggleDropdown={isEditable ? () => toggleDropdown(option.label) : undefined} 
                            isOpen={activeDropdown === option.label} 
                        />
                    )}
                    {/* <CalendarPicker onChange={onChange} /> */}
                    <InputDate label="Due Date" name="dueDate" onChange={onChange} isEditable={isEditable}/>
                </Flex>
                <Flex direction="column" style={{marginTop:'1.8rem'}}>
                    <InputField label="Description" name="description" isTextArea={true} maxwidth="100%" onChange={onChange} value={requestDetails.description} isEditable={isEditable}/>
                    {/* <InputField label="Attachments" name="attachments" type="file" maxwidth="100%" onChange={onChange} multiple/> */}
                    {/* <FilesInput onChange={onChange}/> */}
                </Flex>   
                <Divider margin="large"/>
                <PhotoAlbum layout="rows" photos={requestDetails.attachments}/>
                <Divider margin="large"/>
            </form>
        </Flex>
    )
};

export default RequestDetails;
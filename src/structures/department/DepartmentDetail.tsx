import React, {useEffect, useState} from "react";
import {FC} from 'react';
import IDepartment  from './IBasicInterface';
import Link from "react-router-dom";
import useParams from "react-router-dom";
import useLocation from "react-router-dom";
import Select from "react-select";


// make UI to interract with departments and its patrs , subdepartments etc.
const DepartmentDetail: FC<IDepartment> = ({ departmentName, departmentComment,departmentId,subDepartment })  => {

    const [departmentNameLoc, setdepartmentNameLoc] = useState(departmentName);
    const [departmentCommentLoc, setdepartmentCommentLoc] = useState(departmentComment);
    const [departmenIdLoc, setDepartmenId] = useState(departmentId);
    const [subDepartments, setSubDepartments] = useState(subDepartment);

    let localSelectedValue = [];
    let localOptions = [];
    for (var j = 0; j < subDepartments.length; j++) {
        let el = subDepartments[j];
        localOptions.push({value: el.subDepartmentId, label: el.subDepartmentName});
        if (el.departmentId == departmenIdLoc) {
            localSelectedValue.push({value: el.subDepartmentId, label: el.subDepartmentName});
        }
    }
    const [options, setOptions] = useState(localOptions);
    const [selectedValue, setSelectedValue] = useState(localSelectedValue);

    return (
        <div>
            <h1>Department detail</h1>
            <hr/>
            <input
                type="text" placeholder=" department name " value={departmentNameLoc} onChange={(e) => {
                setdepartmentNameLoc(e.target.value);
            }}/>
            <input
                type="text" placeholder="department comment" value={departmentCommentLoc} onChange={(e) => {
                setdepartmentCommentLoc(e.target.value);
            }}/>
            <Select
                isMulti
                className="Select"
                isClearable={true}
                // onChange={(item) => setSelectedValue(item)}
                options={options}
                value={selectedValue}
            />
        </div>
    );
};
export default DepartmentDetail;
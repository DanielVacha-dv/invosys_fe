import React, {useEffect, useState} from "react";
// import IDepartmentDetail from './IDepartmentDetail'
import {
    Link,
    useParams,
    useLocation
} from "react-router-dom";
import Select from "react-select";
// make UI to interract with departments and its patrs , subdepartments etc.
const DepartmentDetail = (props) => {
    // const departmentData =  useLocation().departmentData as IDepartmentDetail;
    const [departmentName, setDepartmentName] = useState(useLocation().state.departmentName);
    // const [departmentName, setDepartmentName] = useState(departmentData.departmentName);
    const [departmentComment, setDepartmentComment] = useState(useLocation().state.departmentComment);
    // const [departmentComment, setDepartmentComment] = useState(props.departmentData.departmentComment);
    // const [departmenId, setDepartmenId] = useState(useLocation().state.departmentId);
    const [departmenId, setDepartmenId] = useState(useLocation().state.departmentId);
    // const [departmenId, setDepartmenId] = useState(props.departmentData.departmentId);
    const [subDepartments, setSubDepartments] = useState(useLocation().state.subDepartments);

    let localSelectedValue = [];
    let localOptions = [];
    for (var j = 0; j < subDepartments.length; j++) {
        let el = subDepartments[j];
        localOptions.push({value: el.subDepartmentId, label: el.subDepartmentName});
        if (el.departmentId.toString() === departmenId) {
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
                type="text" placeholder=" department name " value={departmentName} onChange={(e) => {
                setDepartmentName(e.target.value);
            }}/>
            <input
                type="text" placeholder="department comment" value={departmentComment} onChange={(e) => {
                setDepartmentComment(e.target.value);
            }}/>
            <Select
                isMulti
                className="Select"
                isClearable={true}
                onChange={(item) => setSelectedValue(item)}
                options={options}
                value={selectedValue}
            />
        </div>
    );
};
export default DepartmentDetail;
import React, {useEffect, useState} from "react";
import {CREATE_DEPARTMENT_MUTATION} from "./../../Graphql/Mutations";
import {useMutation} from "@apollo/client";

export const DepartmentInput = () => {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentComment, setDepartmentComment] = useState("");
    const [subDepartmentID, setSubDepartmentID] = useState("");
    const [createDepartmment, {error}] = useMutation(CREATE_DEPARTMENT_MUTATION);
    const addDepartment = () => {
        createDepartmment({
            variables: {
                name: ''+departmentName,
                comment: ''+departmentComment,
                // subDepartmentIds: new Array(1),
            }
        })
        if (error) {
            console.log(" Error catch "+error)
        }
    };

    return (
        <div>
            <input
                type="text" placeholder=" department name " onChange={(e) => {
                setDepartmentName(e.target.value);
            }}/>
            <input
                type="text" placeholder="department comment" onChange={(e) => {
                setDepartmentComment(e.target.value);
            }}/>
            <input
                type="text" placeholder="subdepartment id" onChange={(e) => {
                setSubDepartmentID(e.target.value);
            }}/>
            <button onClick={addDepartment}>Create department</button>
        </div>
    );
};
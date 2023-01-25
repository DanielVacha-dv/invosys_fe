import React, {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {GET_DEPARTMENT_BY_ID} from "../../Graphql/Queries";
import Select from 'react-select'

const DepartmentDetail = (props) => {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentComment, setDepartmentComment] = useState("");
    const [departmenId, setDepartmenId] = useState(0);

    const {error, loading, data} = useQuery(GET_DEPARTMENT_BY_ID, {
        variables: {id: props.match.params.id},
    });

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    useEffect(() => {
        if (data) {
            setDepartmentName(data.getDepartmentById.name);
            setDepartmentComment(data.getDepartmentById.comment);
            setDepartmenId(data.getDepartmentById.departmenId);
            console.log("set data ==" + data)
        }
    }, [data]);

    const getDepartmentByIDJS = () => {
        console.log("getDepartmentByIDJS ==")
        if (error) {
            console.log(" Error catch " + error)
        }
    };
    let a = getDepartmentByIDJS();
    return (
        <div>
            <h1>Department detail</h1>
            <hr/>
            <p>
                <input
                    type="text" placeholder=" department name " value={departmentName} onChange={(e) => {
                    setDepartmentName(e.target.value);
                }}/>
                <input
                    type="text" placeholder="department comment" value={departmentComment} onChange={(e) => {
                    setDepartmentComment(e.target.value);
                }}/>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={options}
                />
            </p>
        </div>
    );
};
export default DepartmentDetail;
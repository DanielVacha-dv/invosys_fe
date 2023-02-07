import React, {useEffect, useState} from "react";
import {useQuery, gql} from "@apollo/client";
import {GET_ALL_DEPARTMENTS} from "../../Graphql/Queries";


export function GetDepartments() {
    const {error, loading, data} = useQuery(GET_ALL_DEPARTMENTS);
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        if (data) {
            setDepartments(data.getDepartment);
        }
    }, [data]);

    return (
        <div>
            {departments.map((val) => {
                return <h1 key={val.departmentId}>{val.name}</h1>;
            })}
        </div>
    );
}

export default GetDepartments;
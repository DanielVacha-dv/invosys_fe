import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ApiDelete} from "../../common/Api";
// import {DepartmentGraph} from "./DepartmentGraph"
import {useQuery, gql} from "@apollo/client";
import {GET_ALL_DEPARTMENTS} from "../../Graphql/Queries";

const DepartmentTable = () => {

    const {error, loading, data} = useQuery(GET_ALL_DEPARTMENTS);
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        if (data) {
            setDepartments(data.getDepartment);
        }
    }, [data]);

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Název</th>
                    <th>kommentář</th>
                    <th>Akce</th>
                </tr>
                </thead>
                <tbody>
                {departments.map((val) => {
                    console.log("pico data tr name " + val.name);
                    console.log("data tr departmentId " + val.departmentId);
                    return (
                    <tr key={val.departmentId}>
                        <td>{val.name}</td>
                        <td>{val.name}</td>
                        <td>{val.departmentId}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            <Link to={"/movies/create"} className="btn btn-success">
                Nové oddělení
            </Link>
        </div>
    );
};

export default DepartmentTable;

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ApiDelete} from "../../common/Api";
import {DepartmentInput} from "./DepartmentInput";
import {DELETE_DEPARTMENT_MUTATION} from "./../../Graphql/Mutations";
import {useQuery, gql} from "@apollo/client";
import {GET_ALL_DEPARTMENTS} from "../../Graphql/Queries";
import {useMutation} from "@apollo/client";

const DepartmentTable = () => {
    const {error, loading, data} = useQuery(GET_ALL_DEPARTMENTS);
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        if (data) {
            setDepartments(data.getDepartment);
        }
    }, [data]);
    const [deleteDepartmmentMutation, {errorg}] = useMutation(DELETE_DEPARTMENT_MUTATION);

    let depID;
    const deleteDepartment = () => {
        console.log("depID ==" + depID)
        deleteDepartmmentMutation({
            variables: {
                departID: depID,
            }
        })
        if (errorg) {
            console.log(" Error catch " + errorg)
        }
    };

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
                    console.log("data tr departmentId " + val.departmentId);
                    return (
                        <tr key={val.departmentId}>
                            <td>{val.name}</td>
                            <td>{val.name}</td>
                            <td>
                                <button
                                    onClick={(e) => {
                                        depID = val.departmentId;
                                        deleteDepartment();
                                    }}
                                    className="btn btn-sm btn-danger"
                                >Odstranit
                                </button>
                                <div className="btn-group">
                                    <Link to={"/department/show/" + val.departmentId} className="btn btn-sm btn-info">
                                        Zobrazit
                                    </Link>
                                </div>
                            </td>
                        </tr>)
                })}
                </tbody>
            </table>
            <DepartmentInput/>
        </div>
    );
};

export default DepartmentTable;

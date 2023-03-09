//@ts-nocheck
import React, {useEffect, useState} from "react";
import {FC} from 'react';
import {Link} from "react-router-dom";
import {DepartmentInput} from "./DepartmentInput";
import {DELETE_DEPARTMENT_MUTATION} from "./../../Graphql/Mutations";
import {useQuery, gql} from "@apollo/client";
import {GET_ALL_DEPARTMENTS} from "../../Graphql/Queries";
import {GET_SUB_DEPARTMENT} from "../../Graphql/Queries";
import {useMutation} from "@apollo/client";
import {Title} from './../Footer';
import IDepartment from './IBasicInterface';
import ISubDepartment from './IBasicInterface';

const DepartmentTable = () => {
    const {error, loading, data: dataDepartment} = useQuery(GET_ALL_DEPARTMENTS);
    const {error1, loading1, data: dataSubDepartment} = useQuery(GET_SUB_DEPARTMENT);
    const [options, setOptions] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [subDepartments, setSubDepartments] = useState([]);
    useEffect(() => {
        if (dataDepartment) {
            setDepartments(dataDepartment.getDepartment);
        }
        if (dataSubDepartment) {
            setSubDepartments(dataSubDepartment.getSubDepartment);
        }
    }, [dataDepartment, dataSubDepartment]);
    const [deleteDepartmmentMutation, {errorg}] = useMutation(DELETE_DEPARTMENT_MUTATION);

    let depID: number;
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

    function passDepartmentDetail(departmentNameP: string,
                                  departmentCommentP: string,
                                  departmentIdP: number,
                                  subDepartmentL: ISubDepartment): FC<IDepartment> {
            let  departmentDetail= {} as IDepartment;
        departmentDetail.departmentId=departmentIdP;
        departmentDetail.departmentName=departmentNameP;
        departmentDetail.subDepartment=subDepartmentL;
        return departmentDetail;
    }

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
                    return (
                        <tr key={val.departmentId}>
                            <td>{val.name}</td>
                            <td>{val.comment}</td>
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
                                    <Link to={{  pathname: "/department/show/" + val.departmentId,
                                        state: { departmentData: passDepartmentDetail(val.name, val.comment, val.departmentId,val.subDepartmentL)
                                        }
                                    }} className="btn btn-sm btn-info">
                                        Zobrazit
                                    </Link>
                                </div>
                            </td>
                        </tr>)
                })}
                </tbody>
            </table>
            <DepartmentInput/>
            {/*<Title title={"frante"} subtitle={"subtilicek jojo"}> </Title>*/}
        </div>
    );
};
export default DepartmentTable;
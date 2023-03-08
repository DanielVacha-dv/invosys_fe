//@ts-nocheck
import React, {useEffect, useState} from "react";
import {FC} from 'react';
import {Link} from "react-router-dom";
// import {ApiDelete} from "../../common/Api";
// @ts-ignore
import {DepartmentInput} from "./DepartmentInput";
// @ts-ignore
import {DELETE_DEPARTMENT_MUTATION} from "./../../Graphql/Mutations";
import {useQuery, gql} from "@apollo/client";
// @ts-ignore
import {GET_ALL_DEPARTMENTS} from "../../Graphql/Queries";
// @ts-ignore
import {GET_SUB_DEPARTMENT} from "../../Graphql/Queries";
import {useMutation} from "@apollo/client";
import {Title} from './../Footer';
import IDepartment from './IBasicInterface';
import ISubDepartment from './IBasicInterface';

const DepartmentTable = () => {
    const {error, loading, data: dataDepartment} = useQuery(GET_ALL_DEPARTMENTS);
    // @ts-ignore
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
    // @ts-ignore
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
                                  departmentIdP: number): FC<IDepartment> {
            let  departmentDetail= {} as IDepartment;
        departmentDetail.departmentId=departmentIdP;
        departmentDetail.departmentName=departmentNameP;
        const subDepartment = [
            {
            "subDepartmentName": "subDepartmentName hod.",
            "subDepartmentComment":"subDepartmentComment hod."
            }

        ];
        // @ts-ignore
        departmentDetail.subDepartment=subDepartment;
        // @ts-ignore
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
                    // @ts-nocheck
                    // console.log("data tr departmentId " + val.departmentId);
                    return (
                        // @ts-ignore
                        <tr key={val.departmentId}>
                            {/*// @ts-ignore*/}
                            <td>{val.name}</td>
                            {/*// @ts-ignore*/}
                            <td>{val.comment}</td>
                            <td>
                                <button
                                    onClick={(e) => {
                                        {/*// @ts-ignore*/}
                                        depID = val.departmentId;
                                        deleteDepartment();
                                    }}
                                    className="btn btn-sm btn-danger"
                                >Odstranit
                                </button>
                                <div className="btn-group">
                                    <Link to={{  pathname: "/department/show/" + val.departmentId,
                                        // @ts-nocheck
                                        state: { departmentData: passDepartmentDetail(val.name, val.comment, val.departmentId)
                                            // departmentData: passDepartmentDetail(val.name, val.comment, val.departmentId, subDepartments)

                                            // departmentData: passDepartmentDetail("Jmenicko"," val.comment", 1)
                                            // departmentName: val.name,
                                            // departmentComment: val.comment,
                                            // departmentId: val.departmentId,
                                            // subDepartments: subDepartments
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

// export default DepartmentTable;

// import React, { FC } from "react";
// import { Link } from "react-router-dom";
// import IDepartment from "./IBasicInterface";
// import ISubDepartment from "./IBasicInterface";
//
//
// const DepartmentTable = () => {
//     function passDepartmentDetail(departmentNameP: string,
//                                   departmentCommentP: string,
//                                   departmentIdP: number): FC<IDepartment> {
//             let  departmentDetail= {} as IDepartment;
//         departmentDetail.departmentId=departmentIdP;
//         departmentDetail.departmentName=departmentNameP;
//         const subDepartment = [
//             {
//             "subDepartmentName": "subDepartmentName hod.",
//             "subDepartmentComment":"subDepartmentComment hod."
//             }
//
//         ];
//         // @ts-ignore
//         departmentDetail.subDepartment=subDepartment;
//         // @ts-ignore
//         return departmentDetail;
//     }
//     return (
//         <div>
//             <table className="table table-bordered">
//                 <thead>
//                 <tr>
//                     <th>Název</th>
//                     <th>kommentář</th>
//                     <th>Akce</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td> ahoj</td>
//                     <td>
//                                                              <Link to={{
//                                         pathname: "/department/show/" + 1,
//                                         state: {
//                                             // departmentData: passDepartmentDetail(val.name, val.comment, val.departmentId, subDepartments)
//                                             departmentData: passDepartmentDetail("Jmenicko"," val.comment", 1)
//                                             // departmentName: val.name,
//                                             // departmentComment: val.comment,
//                                             // departmentId: val.departmentId,
//                                             // subDepartments: subDepartments
//                                         }
//                                     }} className="btn btn-sm btn-info">
//                                         Zobrazit
//                                     </Link>
//                     </td>
//                 </tr>
//
//                 </tbody>
//             </table>
//
//      </div>
//  );
// }
export default DepartmentTable;
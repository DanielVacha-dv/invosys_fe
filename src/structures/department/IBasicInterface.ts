import {FC} from 'react';
export default interface IDepartment {
    departmentName: string;
    departmentComment: string;
    departmentId: number;
    subDepartment: {
        subDepartmentName: string;
        subDepartmentComment: string;
        subDepartmentId: number;
        departmentId: number;
    }[];
}
 // export  IDepartment;
export default interface ISubDepartment {
    subDepartmentName: string;
    subDepartmentComment: string;
    subDepartmentId: number;
    departmentId: number;
}

export function initDepartmentFromProp(departmentI: any): FC<IDepartment> {
    let departmentDetail = {} as IDepartment;
    departmentDetail.departmentId = departmentI.departmentId;
    departmentDetail.departmentName = departmentI.departmentName;
    departmentDetail.subDepartment = departmentI.subDepartment;
    // @ts-ignore
    return departmentDetail;
}
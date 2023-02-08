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
 interface ISubDepartment {
    subDepartmentName: string;
    subDepartmentComment: string;
    subDepartmentId: number;
    departmentId: number;
}
 // export default {
 //     ISubDepartment
 //     IDepartment
 // }

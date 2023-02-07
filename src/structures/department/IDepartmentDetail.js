// import * as React from 'react';

interface IDepartmentDetail {
    departmentData: {
        departmentName: String;
        departmentComment: String;
        departmentId: Number;
        subDepartments: {
            subDepartmentId: Number;
            departmentId: Number;
            subDepartmentName: String;
        }[];
        logo ? : String;
    };
};
// export default IDepartmentDetail;
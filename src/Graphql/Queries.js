import {gql} from '@apollo/client'

export const GET_ALL_DEPARTMENTS = gql`
    query  {
        getDepartment {
            departmentId
            name,
            comment,
            subDepartmentL {
                subDepartmentId
                subDepartmentName,
                subDepartmentComment
            }
        }
    }
`

export const GET_DEPARTMENT_BY_ID = gql`
    query getDepartmentById($id: Int) {
        getDepartmentById(id: $id) {
            departmentId
            name,
            comment,
            subDepartmentL {
                subDepartmentId,
                subDepartmentName,
                subDepartmentComment
            }
        }
    }
`

export const GET_SUB_DEPARTMENT = gql`
    query getSubDepartment {
        getSubDepartment {
            departmentId,
            subDepartmentId,
            subDepartmentName,
            subDepartmentComment
        }
    }
`
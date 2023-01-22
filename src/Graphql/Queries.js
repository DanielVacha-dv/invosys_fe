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
    query getDepartmentById {
        getDepartmentById(id: $id) {
            departmentId
            name,
            subDepartmentL {
                subDepartmentId,
                subDepartmentName,
                subDepartmentComment
            }
        }
    }
`
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
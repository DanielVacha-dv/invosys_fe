import {gql} from '@apollo/client'

export const CREATE_DEPARTMENT_MUTATION = gql`
    mutation createDepartment2(
        $name: String!  
        $comment: String 
#        $subDepartmentIds: [ID] 
    ) {
        createDepartment2(
            name: $name
            comment: $comment
#            subDepartmentIds: $subDepartmentIds
        )       
    }
`
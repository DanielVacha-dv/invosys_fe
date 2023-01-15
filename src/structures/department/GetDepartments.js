import React, {useEffect} from 'react'
import {useQuery, gql} from '@apollo/client';
import {GET_ALL_DEPARTMENTS} from '../../Graphql/Queries'


export function GetDepartments() {
    const {error, loading, data} = useQuery(GET_ALL_DEPARTMENTS)
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])
    return (<div>

    </div>);
}

// export default function GetDepartments;
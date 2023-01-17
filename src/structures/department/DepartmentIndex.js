import React, { useState, useEffect } from "react";
import {ApiGet} from "../../common/Api" ;
import DepartmentTable from "./DepartmentTable" ;
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {useQuery, gql} from '@apollo/client';
import {GET_ALL_DEPARTMENTS} from '../../Graphql/Queries';
import {onError} from "@apollo/client/link/error";
import {GetDepartments} from "./GetDepartments";

const errorLink = onError(({graphqlErrors}) => {
    if (graphqlErrors) {
        graphqlErrors.map(({message, location, path}) => {
            alert(`Graphq; error  ${message}`)
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:8083/graphql"}),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

const DepartmentIndex = (props) => {
    const [departmentListState, setDepartmentListState] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        ApiGet("/department/getall", "").then((data) => setDepartmentListState(data));
    };

    return (
        <div>
            <h3>department list</h3>
            {/*<hr />*/}
            {/*<MovieFilter*/}
            {/*    handleChange={handleChange}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    directorList={directorListState}*/}
            {/*    actorList={actorListState}*/}
            {/*    genreList={genreListState}*/}
            {/*    filter={filterState}*/}
            {/*    confirm="Filtrovat filmy"*/}
            {/*/>*/}
            {/*<hr />*/}
            <ApolloProvider client={client}> <DepartmentTable/> </ApolloProvider>

        </div>
    );
};

export default DepartmentIndex;

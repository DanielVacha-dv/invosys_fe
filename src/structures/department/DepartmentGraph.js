import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {useQuery, gql} from '@apollo/client';
import {GET_ALL_DEPARTMENTS} from '../../Graphql/Queries';
import {onError} from "@apollo/client/link/error";
import {React} from "react";
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

export const DepartmentGraph = (props) => {
    return (
        <ApolloProvider client={client}> <GetDepartments/> </ApolloProvider>
    );
}
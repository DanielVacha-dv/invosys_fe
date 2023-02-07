import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

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

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode className="p-3 mb-2 bg-secondary text-white">
            <App/>
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

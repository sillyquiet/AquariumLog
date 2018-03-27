import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const ConnectedApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

AppRegistry.registerComponent('AquariumLog', () => ConnectedApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

type Fish = {
  name: string;
}
type Props = {
  data: {
    fish: Fish[];
  },
  loading: boolean,
  error: any
};
const fishQuery = gql` {
  fish {
      name
  }
}
`;

export default App = () => (
  <Query query={fishQuery} >
    {({ loading, error, data }: Props) => {
      if (loading) return <View><Text>Loading...</Text></View>;
      if (error) return <View><Text>Error :(</Text></View>;

      return (
          <View>
            <FlatList
              data={data.fish}
              keyExtractor={(item, index) => item.name}
              renderItem={({item}) => <Text>{item.name}</Text>}
            />
          </View>
        );
    }}
  </Query>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
    marginTop: 20
  },
});

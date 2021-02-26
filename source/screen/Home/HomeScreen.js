import * as React from 'react';
import { Text, View,StyleSheet, } from 'react-native';

export default function Home() {
  return (
    <View style={styles.content}>
        <Text>HomeScreen</Text>
    </View>
  );
}
const styles=StyleSheet.create({
    content: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
})

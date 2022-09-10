import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import lodash from 'lodash'
interface Props {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
    },
    unFollow: () => void;
}

function FriendComponent( {data, unFollow} : Props) {
  return (
    <View style={{marginBottom: 30}}>
      <Text>{data.name} - Likes: {data.likes}</Text>
      <TouchableOpacity onPress={unFollow} style={styles.button}>
          <Text>Deixar de seguir</Text> 
      </TouchableOpacity>

      <Text>Online em {data.online}</Text>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data)
  // return Object.is(prevProps.data, nextProps.data)
})

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'light', borderRadius:20, width:130, paddingHorizontal:2, paddingVertical:5, display: 'flex', alignItems: 'flex-start'}
})
import React, { useMemo } from 'react';
import { View , Text, FlatList} from 'react-native';
import { Friend } from './Friend';

interface Props {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
    }[];
    unFollow: () => void;
}

export function FriendList({data,unFollow} : Props) {

    //Amigo 2 - 264ms

    const totalLikes = useMemo(() => {  
        return data.reduce((likes, friends)=> {
            return Number(likes) + Number(friends.likes)
        } ,0)
    }, [data])

    //Amigo 2 com cálculo = 304ms
    //Amigo 2 com useMemo = 29ms => pois a lista não mudou...

  return (
    <View>
        <Text style={{fontWeight: 'bold', marginBottom: 10,marginTop: 15}}>Total de likes: {totalLikes}</Text>
        {
            <FlatList
                data={data}
                keyExtractor={item=> String(item.id)}
                renderItem={({item}) => (
                    <Friend
                        data={item}
                        unFollow={unFollow}
                    ></Friend>

                )}
            ></FlatList>
        }
    </View>

  );
}
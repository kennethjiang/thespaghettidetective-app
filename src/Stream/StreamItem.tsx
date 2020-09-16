import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { colors } from '../constants/colors'
import images from '../constants/images';

const StreamItem = (stream: any) => {
  return (
    <View 
        style={{
            backgroundColor: colors.streamCard,
            borderRadius: 10,
        }}
    >
        <View style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 15,
            backgroundColor: colors.black
        }}>
            <Image
                source={images.logo}
                style={{
                    width: 200,
                    height: 200,
                    alignSelf: 'center'
                }}
                resizeMode='contain'
            />
        </View>
        <View
            style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center'
        }}>
            <Text style={{
                color: colors.green,
                fontSize: 14
            }}>{stream.stream.type}</Text>
            <Text style={{
                marginTop: 10,
                fontSize: 14,
                color: colors.white
            }}>{stream.stream.description}</Text>
        </View>
    </View>
  );
};

export default StreamItem;

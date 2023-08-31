import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <ScrollView>
      <SafeAreaView
      style={{
        paddingHorizontal: 1,
        gap: 1
      }}
      >

        {/*Header Part*/}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 22,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8
          }}
        >
          <Image source={require('../assets/images/japan-anh-final.jpg')} 
          style={{width: 52, aspectRatio: 1, borderRadius:52}}
          resizeMode="cover"></Image>
          <View style={{flex: 1}}>
            <Text
              style={{fontSize: 18, fontWeight: "600", marginBottom: 2}}
              numberOfLines={1}
            >
              Hi I am KNP!
            </Text>
            <Text style={{}}>Discover fashion that suit your style</Text>
          </View>
          <TouchableOpacity
          style={{
            width: 52,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 52,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          >
            <Icons name="notifications" size={24} color={colors.text}></Icons>
          </TouchableOpacity>
        </View>

        {/*Search Part*/}
        <View style={{flexDirection: 'row', paddingHorizontal: 20, gap:12}}>
          <TouchableOpacity
          style={{
            flex: 1,
            height: 52,
            borderRadius: 52,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
            gap: 12,
          }}
          >
            <Icons 
            name="search"
            size={25}
            color={colors.text}
            style={{opacity: 0.5}}></Icons>
            <Text
            style={{
              flex:1,
              fontSize: 15,
              color: colors.text,
              opacity: 0.5,
            }}
            >Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{
            width: 52,
            aspectRatio: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 52,
            backgroundColor: '#000000'
          }}
          >
            <Icons name="tune" size={24} color='#ffffff'></Icons>
          </TouchableOpacity>
        </View>

        {/*New Collections Part*/}
        <View style={{paddingHorizontal: 24}}>
          {/*Title Collections*/}
          <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 22,
          }}
          >
            <Text style={{fontSize: 20, fontWeight: "700", opacity: 0.9}}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flex: 1, height: 200, gap:12}}>
              <Card/>
              <View style={{flex: 1, gap:12}}>
                <Card/>
                <Card/>
              </View>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen


{/*Tao ra 1 Component con ngay trong file*/}
const Card= () => {
  return(
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow:"hidden",
        borderRadius: 24,
      }}
    >
      <Image
      source={require('../assets/images/Anh-Nhat-Ban.jpg')} 
      resizeMode='cover'
      style={{
        position: 'absolute',
        paddingVertical: 0,
        width: "100%",
        height: "100%",
      }}
      />
    </View>
  )
};
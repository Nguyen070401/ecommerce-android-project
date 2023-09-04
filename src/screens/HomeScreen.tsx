import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import MasonryList from '@react-native-seoul/masonry-list';
import { BlurView } from "expo-blur";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import CustomBackdrop from '../components/CustomBackdrop';
import FilterView from '../components/FilterView';

const CATEGORIES =[
  "Clothing",
  "Shoes",
  "Accessories",
  "Accessories 2",
  "Accessories 3",
  "Accessories 4"
]

const HomeScreen = () => {
  const {colors} = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

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
          onPress={openFilterModal}
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

        {/*Categories Section*/}
        <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 24,
          paddingHorizontal: 24,
          gap: 12,
        }}
        renderItem={({item,index})=>{
          const isSelected = categoryIndex === index;
          return(
            <TouchableOpacity
            onPress={()=> setCategoryIndex(index)}
            style={{
              backgroundColor: isSelected ? '#000001' : colors.card,
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderRadius: 100,
              borderWidth: isSelected ? 0 : 1,
              borderColor: colors.border,
            }}
            >
              <Text
              style={{
                color: isSelected ? colors.background : colors.text,
                fontWeight: "600",
                fontSize: 16,
                opacity: isSelected ? 0.9 : 0.5,
              }}
              >{item}</Text>
            </TouchableOpacity>
          )
        }}
        ></FlatList>

        {/*Products Section*/}
        <MasonryList
          data={[1,2,3,4,5,56,44,13]}
          keyExtractor={(item): string => item}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal: 18}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, i}) => (
            <View style={{padding: 6}}>
            <View
            style={{
              aspectRatio: i === 0 ? 1 : 1,
              position: "relative",
              overflow: "hidden",
              backgroundColor: "red",
              marginTop: -4,
              borderRadius: 24,
              height: 170
            }}>
              <Image
              source={require('../assets/images/Anh-Nhat-Ban.jpg')} 
              resizeMode="cover"
              style={{
                position: 'absolute',
                paddingVertical: 0,
                width: "100%",
                height: "100%",
              }}
              ></Image>

              <View
              style={[StyleSheet.absoluteFill]}>
              <View style={{flexDirection: "row", padding: 16, gap: 8}}>
                <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: "600",
                  color: "#fff",
                }}
                >
                  TOKYO Everyday Hussle
                </Text>
                <View
                      style={{
                        backgroundColor: colors.card,
                        borderRadius: 100,
                        height: 32,
                        aspectRatio: 1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icons
                        name="favorite-border"
                        size={20}
                        color={colors.text}
                      />
                </View>
              </View>
              <View style={{flex:1}}>
              <BlurView
                style={{
                  flexDirection: "row",
                  backgroundColor: "rgba(0,0,0,0.35)",
                  alignItems: "center",
                  padding: 12,
                  borderRadius: 100,
                  overflow: "hidden",
                  bottom: 4,
                  position: "absolute",
                }}
                intensity={20}
              >
                <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#fff",
                  marginLeft: 4,
                }}
                numberOfLines={1}
                > $160.00</Text>
                
                <TouchableOpacity
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                }}
                >
                  <Icons name="add-shopping-cart" size={20} color="#000"></Icons>
                </TouchableOpacity>
              </BlurView>
              </View>

              </View>
            </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />

        {/*Bottom Slide Section*/}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={["80%"]}
          backdropComponent={(props) => <CustomBackdrop {...props}/>}
          // onChange={handleSheetChanges}
        >
          <FilterView/>
        </BottomSheetModal>
        

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
      <View
      style={{
        position: "absolute",
        left: 10,
        right: 10,
        top: 6,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: 100,
        width: 70,
        height: 40
      }}>
        <Text style={{fontSize: 14, fontWeight: "600", color: "#fff"}}>
          $130
        </Text>
      </View>
    </View>
  )
};

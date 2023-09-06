import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { RootStackScreenProps } from '../navigators/RootNavigator'
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const DetailsScreen = ({ navigation,
  route: {
    params: {id},
  },
}: RootStackScreenProps<"Details">) => {

  // KNP viet
  // const bottomSheetRef = useRef<BottomSheet>(null);

  const {colors} = useTheme();

  const insets = useSafeAreaInsets();

  const [count, setCount] = useState(1);

  const [size, setSize] = useState(SIZES[0]);

  return (
      <View style={{flex: 1}}>
        <Image
          source={{uri: "https://phunugioi.com/wp-content/uploads/2021/08/Anh-Nhat-Ban.jpg",
        }} 
        style={{flex: 1}}
        />
        
        <SafeAreaView edges={["top"]} style={{position: "absolute", top: 0, left: 0, right: 0}}>
          <StatusBar style="light"></StatusBar>
          <View style={{flexDirection: "row", alignItems: "center", paddingTop: 25, paddingLeft: 20,gap: 8,paddingRight: 20}}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
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
              <Icons name="arrow-back" size={24} color= "#fff"></Icons>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            >
              <Icons name="favorite" size={24} color= "#fff"></Icons>
            </TouchableOpacity>
            

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
              <Icons name="add-shopping-cart" size={24} color= "#fff"></Icons>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <BottomSheet 
         detached
         snapPoints={[64, 500]}
         index={0}
         style={{marginHorizontal: 20}}
         bottomInset={insets.bottom +20}
         backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background,
         }}
         >
          <View style={{padding:16, flex: 1}}>
            <Text style={{fontSize: 20, fontWeight: "600",color: colors.text}}>
                TOKYO Everyday Hussle
            </Text>


            <View style={{ flexDirection: "row", alignItems: "center", gap: 4}}>
              <View style={{flex:1}}>

              <View style={{ flexDirection: "row", gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 3 ? "star" : "star-border"}
                    color="#facc15"
                    size={20}
                  />
                ))}
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  opacity: 0.5,
                  marginTop: 4,
                  marginLeft: 2,
                }}
              >
                3.0 (250K Reviews)
              </Text>
              </View>

              <View style={{
               flexDirection: "row",
               alignItems: "center",
               gap: 6,
               backgroundColor: "#000",
               padding: 6,
               borderRadius: 100,
               }}>

                <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count - 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
                >
                  <Icons name="remove" size={20} color={colors.text}></Icons>
                </TouchableOpacity>

                <Text style={{fontSize: 16,fontWeight: "600", color: colors.background}}>{count}</Text>

                <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count + 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
                >
                  <Icons name="add" size={20} color={colors.text}></Icons>
                </TouchableOpacity>
               </View>
            </View>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
            }}>
              <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: "600",
                color: colors.text,
                textTransform: "uppercase",
              }}
              >Model is 6'1'', Size M</Text>

              <Text style={{
                color: colors.text,
                opacity: 0.6,
              }}>Size guide</Text>
              </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 6,
              }}
              >
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSize(s)}
                  style={{
                    width: 44,
                    height: 44,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: s === size ? "#000" : colors.card,
                    borderRadius: 44,
                  }}
                >
                  <Text
                    style={{
                      color: s === size ? colors.card : colors.text,
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
          
            </View>

            <View style={{
              marginTop: 5,
            }}>

              <Text style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
                color: colors.text,
              }}>Description</Text>

              <Text style={{
                fontSize: 13,
                color: colors.text,
                opacity: 0.75,
              }}
              numberOfLines={9}>
                Aute magna dolore sint ipsum dolor fugiat. Ad magna ad elit labore
                culpa sunt sint laboris consectetur sunt. Lorem excepteur occaecat
                reprehenderit nostrud culpa ad ex exercitation tempor kute magna is
                dolore sint ipsum dolor fugiat. Ad magna ad elit labore on knowhere
                culpa sunt sint laboris consectetur sunt. Lorem excepteur occaecat
                reprehenderit nostrud culpa ad ex exercitation tempor.
              </Text>
            </View>

          <View style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", alignItems: "center", position: 'absolute', bottom: 20, left: 14, right: 14 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: colors.text, fontSize: 16, fontWeight: "600", marginBottom: 4 }}
              >
                Total
              </Text>
              <Text
                style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}
              >
                ${(25000).toLocaleString()}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                height: 64,
                borderRadius: 64,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexDirection: "row",
                padding: 14,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  color: colors.background,
                  marginLeft: 20,
                  marginBottom: 4
                }}
              >
                Add to cart
              </Text>

              <View
                style={{
                  backgroundColor: colors.card,
                  width: 40,
                  aspectRatio: 1,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 12,
                }}
              >
                <Icons name="arrow-forward" size={24} color={colors.text} />
              </View>
            </TouchableOpacity>
          </View>

          </View>
        </BottomSheet>
      </View>
  )
}

export default DetailsScreen
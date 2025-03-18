import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground } from "react-native";
import { images } from "@/constants/images";
 

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => {
            <>
				<ImageBackground source={images.highlight}>
					<Image source={images.home}
					
					></Image>

			  </ImageBackground>
            </>;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;

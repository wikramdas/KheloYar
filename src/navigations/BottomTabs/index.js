import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@src/screens';
import {Platform, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {commonStyle} from '@src/styles';
import {SVG} from '@src/constants';
import {BoldText} from '@src/commons';
const Tab = createBottomTabNavigator();

const renderTabIconAndTitle = (label, icon, isFocused, theme) => {
  const ICON = icon;
  return (
    <View style={styles().iconTitleContainer}>
      <ICON
        height={25}
        width={25}
        color={isFocused ? theme?.tertiaryColor : '#fff'}
      />
      <BoldText style={styles().tabLabel}>{label}</BoldText>
    </View>
  );
};

export const BottomTabs = () => {
  const theme = useSelector(store => store?.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles(theme).tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIconAndTitle('Home', SVG.BT_HOME, focused, theme),
        }}
      />
      <Tab.Screen
        name="InPlay"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIconAndTitle('Inplay', SVG.BT_INPLAY, focused, theme),
        }}
      />
      <Tab.Screen
        name="Live Chat"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIconAndTitle('Live Chat', SVG.BT_CHAT, focused, theme),
        }}
      />
      <Tab.Screen
        name="Markets"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIconAndTitle('Markets', SVG.BT_MARKETS, focused, theme),
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIconAndTitle('More', SVG.BT_MORE, focused, theme),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = theme =>
  StyleSheet.create({
    tabBarStyle: {
      ...commonStyle(theme).boxShadow,
      position: 'absolute',
      bottom: 15,
      left: 15,
      right: 15,
      elevation: 0,
      backgroundColor: theme?.primaryColor,
      borderRadius: 20,
      height: 90,
    },
    iconTitleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      top: Platform.OS === 'ios' ? 10 : 0,
    },
    tabLabel: {color: '#fff', top: 10},
  });

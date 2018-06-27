import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Easing, Animated } from 'react-native'

import OverviewScreen from '../screens/OverviewScreen/OverviewScreen'

import test1 from '../screens/tests/test1'
import test1_1 from '../screens/tests/test1.1'
import test1_2 from '../screens/tests/test1.2'
import test1_3 from '../screens/tests/test1.3'


import test2 from '../screens/tests/test2'
import test2_1 from '../screens/tests/test2.1'
import test2_2 from '../screens/tests/test2.2'
import test2_3 from '../screens/tests/test2.3'

import test3 from '../screens/tests/test3'
import test3_1 from '../screens/tests/test3.1'
import test3_2 from '../screens/tests/test3.2'
import test3_3 from '../screens/tests/test3.3'

import test4 from '../screens/tests/test4'

const RootRouter = createStackNavigator(
    {
        Overview: {
            screen: OverviewScreen,
        },

        test1: {
            screen: test1,
        },
        test1_1: {
            screen: test1_1,
        },
        test1_2: {
            screen: test1_2,
        },
        test1_3: {
            screen: test1_3,
        },

        test2: {
            screen: test2,
        },
        test2_1: {
            screen: test2_1,
        },
        test2_2: {
            screen: test2_2,
        },
        test2_3: {
            screen: test2_3,
        },

        test3: {
            screen: test3,
        },
        test3_1: {
            screen: test3_1,
        },
        test3_2: {
            screen: test3_2,
        },
        test3_3: {
            screen: test3_3,
        },

        test4: {
            screen: test4,
        },
    },
    {
        headerMode: 'screen',
        mode: 'modal',
        // initialRouteName: 'test3_3',
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

export default RootRouter
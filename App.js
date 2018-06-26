import React from 'react';
import { StyleSheet, View } from 'react-native';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

import NavigationService from './routing/NavigationService'
import RootRouter from './routing/RootRouter';


export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, width: "100%" }}>
				<RootRouter
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		);
	}
} 
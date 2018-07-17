/**
 * This file provides a simple interface that could 
 * be imported from anywhere to provide simple navigation
 */

import { NavigationActions } from '../../../../.cache/typescript/2.9/node_modules/@types/react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function pop(option) {
  _navigator.dispatch(
    NavigationActions.back({
      option
    })
  );
}

export default {
  navigate,
  pop,
  setTopLevelNavigator,
};
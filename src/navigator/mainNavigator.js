import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile189964Navigator from '../features/UserProfile189964/navigator';
import Maps189945Navigator from '../features/Maps189945/navigator';
import Settings189923Navigator from '../features/Settings189923/navigator';
import Settings189908Navigator from '../features/Settings189908/navigator';
import NotificationList189907Navigator from '../features/NotificationList189907/navigator';
import Maps189906Navigator from '../features/Maps189906/navigator';
import Settings189891Navigator from '../features/Settings189891/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile189964: { screen: UserProfile189964Navigator },
Maps189945: { screen: Maps189945Navigator },
Settings189923: { screen: Settings189923Navigator },
Settings189908: { screen: Settings189908Navigator },
NotificationList189907: { screen: NotificationList189907Navigator },
Maps189906: { screen: Maps189906Navigator },
Settings189891: { screen: Settings189891Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

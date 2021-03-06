import React, { Component } from 'react';
import SplashScreen from '../screens/SplashScreen';
import SliderScreen from '../screens/SliderScreen'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Forget from '../screens/ForgetPassword';
import TabNav from '../screens/TabComponent/index';
import HomeScreen from '../screens/TabComponent/HomeScreen';
import Notifi from '../screens/NotificationsScreen';
import ProfileEdit from '../screens/UserprofileEdit';
import AccountEdit from '../screens/AccountEdit';
import About from '../screens/About';
import CreditCard from '../screens/CreditCardScene';
import Giftcard from '../screens/Giftcard';
import Reward from '../screens/Rewards';
import Wallet from '../screens/Wallet';
import Topup from '../screens/Topup';
import MoblieRecharge from '../screens/MoblieRecharge';
import SendContacts from '../screens/SendContacts';
import ReceiveContacts from '../screens/ReceiveContacts';
import Send from '../screens/send';
import Receive from '../screens/Receive';
 
const Routes = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }

  },
  SliderScreen: {
    screen: SliderScreen,
    navigationOptions: {
      header: null
    }
  },

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },

  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  },

  Forget: {
    screen: Forget,
    navigationOptions: {
      header: null
    }
  },

  TabNav: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },

  Notifi: {
    screen: Notifi,
    navigationOptions: {
      header: null
    },
  },

  ProfileEdit: {
    screen: ProfileEdit,
    navigationOptions: {
      header: null
    },
  },

  AccountEdit: {
    screen: AccountEdit,
    navigationOptions: {
      header: null
    },
  },

  About: {
    screen: About,
    navigationOptions: {
      header: null
    },
  },

  CreditCard: {
    screen: CreditCard,
    navigationOptions: {
      header: null
    },
  },

  Giftcard: {
    screen: Giftcard,
    navigationOptions: {
      header: null
    },
  },

  Reward: {
    screen: Reward,
    navigationOptions: {
      header: null
    },
  },

  Wallet: {
    screen: Wallet,
    navigationOptions: {
      header: null
    },
  },

  Topup: {
    screen: Topup,
    navigationOptions: {
      header: null
    },
  },

  MoblieRecharge: {
    screen: MoblieRecharge,
    navigationOptions: {
      header: null
    },
  },

  SendContacts: {
    screen: SendContacts,
    navigationOptions: {
      header: null
    },
  },

  ReceiveContacts: {
    screen: ReceiveContacts,
    navigationOptions: {
      header: null
    },
  },

  Send: {
    screen: Send,
    navigationOptions: {
      header: null
    },
  },

  Receive: {
    screen: Receive,
    navigationOptions: {
      header: null
    },
  },

}
export default Routes;
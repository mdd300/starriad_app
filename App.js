import React from 'react';
import {createStackNavigator} from 'react-navigation';
import firebase from "firebase";
import '@firebase/firestore';
import firebaseEnvironments from './application/configs/firebase/environment';
/* Import das paginas */
import Explorer from "./application/pages/explorer/Explorer";
import ProdutoProfile from "./application/pages/produto_profile/ProdutoProfile";

import Login from "./application/pages/login/Login";


firebase.initializeApp(firebaseEnvironments.development);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default createStackNavigator({

        'Main': {
            screen: Explorer,
        },
        'Login': {
            screen: Login
        },
        'ProdutoProfile': {
            screen: ProdutoProfile
        },
    },
    {
        initialRouteName: 'Main',

        navigationOptions: {
            header: null
        }
    });


import React from 'react';
import {createStackNavigator} from 'react-navigation';
import firebase from "firebase";
import '@firebase/firestore';
// import '@firebase/messaging';
import firebaseEnvironments from './application/configs/firebase/environment';
/* Import das paginas */
import TestesPage from "./application/pages/testes/TestesPage";
import Explorer from "./application/pages/explorer/Explorer";
import Feed from "./application/pages/feed/Feed";
import SlideScreen from "./application/pages/slides/SlideScreen";
import Notificacoes from "./application/pages/notificacoes/Notificacoes";
import ExplorerSearch from "./application/pages/explorer-search/ExplorerSearch";
import Carrinho from "./application/pages/carrinho/passo1/Carrinho";
import FinalizarPedido from "./application/pages/carrinho/passo2/finalizarPedido";
import DetalhePedido from './application/pages/carrinho/detalhePedido/DetalhePedido';
import ProdutoProfile from "./application/pages/produto_profile/ProdutoProfile";
import FeedCreatePost from "./application/pages/feed-create-post/FeedCreatePost";
import Login from "./application/pages/login/Login";
import Perfil from "./application/pages/perfil/Perfil";
import EditarPerfil from "./application/pages/minha-conta/editar-perfil/EditarPerfil";

firebase.initializeApp(firebaseEnvironments.development);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default createStackNavigator({
        'Main': {
            screen: TestesPage,
        },
        'Explorer': {
            screen: Explorer,
        },
        'ExplorerSearch': {
            screen: ExplorerSearch
        },
        'Feed': {
            screen: Feed,
        },
        'FeedCreatePost': {
            screen: FeedCreatePost,
        },
        'SlideScreen': {
            screen: SlideScreen,
        },
        'Notificacoes': {
            screen: Notificacoes
        },
        'Carrinho': {
            screen: Carrinho
        },
        'FinalizarPedido': {
            screen: FinalizarPedido
        },
        'DetalhePedido': {
            screen: DetalhePedido
        },
        'ProdutoProfile': {
            screen: ProdutoProfile
        },
        'Login': {
            screen: Login
        },
        'Perfil': {
            screen: Perfil
        },
        'EditarPerfil': {
            screen: EditarPerfil,
        },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            header: null
        }
    });

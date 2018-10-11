import { StyleSheet } from 'react-native';

const stylesExplorer = StyleSheet.create({

    loadingPager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Scroll da page explorer
    containerScroll: {
        flex: 1,
    },

    // Contem o conteudo da pagina explorer
    containerExplorer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default stylesExplorer;
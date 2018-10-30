import React from 'react';
import { FlatList, View } from 'react-native';
import ListItemNewNotificacoes from '../list-item-notificacoes/list-item-new-notificacoes';
import ListItemLastNotificacoes from '../list-item-notificacoes/list-item-last-notificacoes';

const ListNotificacoes = props => {

    const { notificacoes } =  props;

    return (
        <FlatList data={notificacoes} renderItem={({ item }) => (

            <View>
                <ListItemNewNotificacoes
                    notificacao={item} />

                <ListItemLastNotificacoes
                    notificacao={item} />
            </View>

            )}
            keyExtractor={item => item.key} />
    );
};


export default ListNotificacoes;
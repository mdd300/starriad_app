import React from 'react';
import {Text, View, Image, TouchableOpacity, AsyncStorage, Alert, Animated, Picker, Dimensions} from 'react-native';
import {styleCadastro} from "../../pages/login/loginComponents/cadastro/Cadastro-styles";
import CheckBox from "../checkBox/CheckBox";

export default class AlertConexoes extends React.Component {

    constructor(props) {
        super(props);

        let { height, width } = Dimensions.get('window');

        this.state = {
            passos: {
                um: true,
                dois: false,
                tres: false
            },

            screen_height: height,
            screen_width: width,
        };
    }

    renderAlertPassoUm(){

        if(this.state.passos.um){
            return(
                <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 10}}>

                    <View style={{width: '100%', height: 90, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>

                        <View style={{width: 83, height: 83, alignItems: 'center', justifyContent: 'center', borderColor: '#facea8', borderWidth: 5, borderRadius: 50}}>
                            <Text style={{fontSize: 50, color: '#f8bb86', fontWeight: 'bold'}}>
                                !
                            </Text>
                        </View>

                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#595959'}}>
                            Excluir Conexão
                        </Text>

                        <Text style={{fontSize: 20, textAlign: 'center', color: '#545454'}}>
                            Tem certeza que deseja excluir essa conexão?
                        </Text>
                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>

                        <TouchableOpacity onPress={() => {
                            this.state.passos.um = false;
                            this.state.passos.dois = true;
                            this.setState({
                                passos: this.state.passos
                            })
                        }}
                                          style={{width: 120, padding: 10, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                Sim, deletar!
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.state.passos.um = true;
                            this.state.passos.dois = false;
                            this.state.passos.tres = false;
                            this.setState({
                                passos: this.state.passos
                            });

                            this.props.onclose()
                        }}
                                          style={{width: 120, padding: 10, backgroundColor: '#ff1824', alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginLeft: 10}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }
    }

    renderAlertPassoDois(){

        if(this.state.passos.dois){
            return(
                <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 10}}>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#595959'}}>
                            Qual o motivo da exclusão?
                        </Text>
                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center', marginBottom: 20, paddingLeft: 20}}>
                        <TouchableOpacity
                            style={{alignItems: 'center',
                                marginTop: 10,
                                width: '100%',
                                minHeight: 30,
                                flexDirection: 'row'}}
                        >
                            <CheckBox actived={true} color={'#0099df'}/>
                            <Text style={{fontSize: 20, textAlign: 'center', color: '#545454', marginLeft: 10}}>Não compro mais nessa loja</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center',
                            marginTop: 10,
                            width: '100%',
                            minHeight: 30,
                            flexDirection: 'row'}}>
                            <CheckBox actived={false} color={'#0099df'}/>
                            <Text style={{fontSize: 20, textAlign: 'center', color: '#545454', marginLeft: 10}}>Outros</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>

                        <TouchableOpacity onPress={() => {
                            this.state.passos.dois = false;
                            this.state.passos.tres = true;
                            this.setState({
                                passos: this.state.passos
                            })
                        }}
                                          style={{width: 120, padding: 10, backgroundColor: '#3085d6', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                OK
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.state.passos.um = true;
                            this.state.passos.dois = false;
                            this.state.passos.tres = false;
                            this.setState({
                                passos: this.state.passos
                            });

                            this.props.onclose()
                        }}
                                          style={{width: 120, padding: 10, backgroundColor: '#aaa', alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginLeft: 10}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }
    }

    renderAlertPassoTres(){

        if(this.state.passos.tres){
            return(
                <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 10}}>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#595959', textAlign: 'center'}}>
                            Deseja receber uma nova solicitação deste cliente?
                        </Text>
                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center'}}>

                        <View style={{borderColor: '#595959', borderWidth: 1, width: '80%' }}>

                            <Picker
                                selectedValue={this.state.language}
                                style={{ height: 50, width: '100%' }}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                <Picker.Item label="Escolha..." value="" />
                                <Picker.Item label="Sim" value="sim" />
                                <Picker.Item label="Daqui à 1 mes" value="sim" />
                                <Picker.Item label="Daqui à 3 mes" value="tresMeses" />
                                <Picker.Item label="Daqui à 6 mes" value="seisMeses" />
                                <Picker.Item label="Nunca" value="nunca" />
                            </Picker>

                        </View>
                    </View>

                    <View style={{width: '100%', height: 83.33, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>

                        <TouchableOpacity style={{width: 120, padding: 10, backgroundColor: '#3085d6', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                OK
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.state.passos.um = true;
                            this.state.passos.dois = false;
                            this.state.passos.tres = false;
                            this.setState({
                            passos: this.state.passos
                        });

                            this.props.onclose()
                        }}
                                          style={{width: 120, padding: 10, backgroundColor: '#aaa', alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginLeft: 10}}>
                            <Text style={{fontSize: 18, color: '#fff'}}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
        }
    }

    renderPage(){
        return(
            <View style={{width: '90%', height: 350, borderRadius: 5, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
                {this.renderAlertPassoUm()}
                {this.renderAlertPassoDois()}
                {this.renderAlertPassoTres()}
            </View>
        );
    }

    render(){
        if(this.props.opened){
            return(
                <View style={{position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', width: this.state.screen_width, height: this.state.screen_height, alignItems: 'center', justifyContent: 'center'}}>

                    {this.renderPage()}

                </View>
            );
        }else{
            return(
                <View />
            )
        }

    }
}
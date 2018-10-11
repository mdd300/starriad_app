import React from 'react';
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "./list-grade-tamanhos-styles";

export default class ListGradeTamanhos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            variantesTamanhos: props.varianteTamanhos,
            qtdMax: 0,
        };
    }

    componentDidMount(){

        // Atribui o valor maximo de quantidade de peças disponiveis na variavel qtdMax
        this.state.variantesTamanhos.tamanhos.map((tamanho) => {
            this.setState({qtdMax: tamanho.tamanho_quant});
        });
    }

    // Adiciona mais quantidade, caso o usuario clique no +
    sumGrade(tamanho) {
        if (tamanho.tamanho_quant === tamanho.quantidade) {

            Alert.alert(
                'Atenção',
                'Não é possível adicionar mais, pois não há quantidade disponivel.',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        }
        else {
            tamanho.quantidade++;
            this.setState({variantesTamanhos: this.state.variantesTamanhos})
        }
    }

    // subtrai a quantidade, caso o usuario clique no -
    subtractGrade(tamanho) {
        if (tamanho.quantidade === 0) {

            Alert.alert(
                'Atenção',
                'Não é possível retirar menos que 0.',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            )
        } else {
            tamanho.quantidade--;
            this.setState({variantesTamanhos: this.state.variantesTamanhos})
        }
    }

    blur(grade) {
        if (grade.quantidade === 0 || grade.quantidade === '0' || grade.quantidade === 'NaN') {
            grade.quantidade = 0
        }
        this.setState({variantesTamanhos: this.state.variantesTamanhos})
    }

    focus(grade) {
        if (grade.quantidade === 0 || grade.quantidade === '0') {
            grade.quantidade = ''
        }
        this.setState({variantesTamanhos: this.state.variantesTamanhos})
    }

    calc(valor, grade) {
        parseInt(valor);
        if (valor > grade.tamanho_quant) {
            grade.quantidade = valor
        } else {
            grade.quantidade = valor
        }
        this.setState({variantesTamanhos: this.state.variantesTamanhos})
    }

    // Renderiza os tamanhos disponiveis pela Marca
    renderTamanhosDisponiveis(){
        return(
            <View style={styles.tamanhosDisponiveis}>
                <View style={styles.containerTitleTamanhosDisponiveis}>
                    <View style={styles.viewLabelTitle}>
                        <Text style={styles.labelTitle}>Tamanho</Text>
                    </View>

                    <View style={styles.viewLabelTitle}>
                        <Text style={styles.labelTitle}>Peças Disponiv.</Text>
                    </View>
                </View>

                <View>
                    {this.state.variantesTamanhos.tamanhos.map((tamanhoDispo, index) => (
                        <View key={index} style={styles.containerTamanhosDisponiveis}>

                            <View style={styles.viewNomeTamanho}>
                                <Text>{ tamanhoDispo.nome }</Text>
                            </View>

                            <View style={styles.viewQtdTamanho}>
                                <Text>{ tamanhoDispo.tamanho_quant }</Text>
                            </View>

                        </View>
                    ))}
                </View>
            </View>
        )
    }

    // Renderiza a quantidade de cada item no carrinho
    renderQuantidade(){
        return (
            <View style={styles.containerInfosQtd}>
                <View style={styles.infosQtd}>
                    <View style={styles.titleQtd}>
                        <Text style={styles.labelTitle}>Quantidade</Text>
                    </View>
                </View>

                <View>
                    {this.state.variantesTamanhos.tamanhos.map((tamanho, index) => (
                        <View key={index} style={styles.containerBtnMaisMenosQtd}>
                            <TouchableOpacity activeOpacity={1} style={styles.menosQtdMais} onPress={() => {
                                this.subtractGrade(tamanho)
                            }} >
                                <Text style={[
                                    styles.textMenosMais,
                                    tamanho.quantidade === 0 ? styles.textBloqueado : null
                                ]}>-</Text>
                            </TouchableOpacity>

                            <View style={styles.menosQtdMais}>
                                <View
                                    style={[styles.containerInput, (tamanho.quantidade > tamanho.tamanho_quant ? styles.errorInput : null)]}>
                                    <TextInput
                                        style={[tamanho.quantidade > tamanho.tamanho_quant ? styles.errorTextInput : null, {textAlign: 'center', borderWidth: 0}]}
                                        keyboardType='numeric'
                                        maxLength={3}
                                        onChangeText={(text) => this.calc(text, tamanho)}
                                        value={tamanho.quantidade.toString()}
                                        underlineColorAndroid='#FFF'
                                        onFocus={() => this.focus(tamanho)}
                                        onBlur={() => this.blur(tamanho)}
                                        editable={tamanho.tamanho_quant === 0 ? false : true}
                                        defaultValue={tamanho.quantidade === 0 || tamanho.quantidade === '' ? '0' : tamanho.quantidade.toString()}
                                    />
                                </View>
                            </View>

                            <TouchableOpacity activeOpacity={1} style={styles.menosQtdMais} onPress={() => {
                                this.sumGrade(tamanho)
                            }}>
                                <Text style={[
                                    styles.textMenosMais,
                                    tamanho.quantidade === this.state.qtdMax ? styles.textBloqueado : null
                                ]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style={[styles.containerInfosTamanhos]}>
                { this.renderTamanhosDisponiveis() }
                { this.renderQuantidade() }
            </View>
        )
    }
}
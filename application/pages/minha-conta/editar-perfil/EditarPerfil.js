import React from "react";
import {
    View,
    Text,
    Switch,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
    ImageBackground
} from "react-native";
import style from "./editar-perfil-styles";
import HeaderCarrinho from "../../carrinho/carrinhoComponents/header-carrinho/header-carrinho";
import PerfilLojaEdit from "./perfil-loja/PerfilLojaEdit"
import Logo from "./logo/Logo"
import ImagePicker from "../../../components/ImagePicker/ImagePicker";
import Autocomplete from 'react-native-autocomplete-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import OptionsMenu from "react-native-options-menu";
import Hoshi from "react-native-textinput-effects/lib/Hoshi";



export default class EditarPerfil extends React.Component{


    /** Função construtora do feed */
    constructor( props ){
        super( props );
        this.onTyping = this.onTyping.bind(this);

        this.state = {
            Perfil_loja: false,
            Logo: false,
            Foto_capa: false,
            MeusEstilos: false,
            ConfigLoja: false,
            FotosLoja: false,
            End: false,
            TelefoneCont: false,
            ImageLogo: false,
            has_image_logo: false,
            post_image_logo: false,
            ImageLoja: false,
            ImageCapa: false,
            has_image_capa: false,
            post_image_capa: false,
            autoList: [],
            lojaPrivada: false,
            imagePickerAlbum: false,
            modalVisible: false,
            modalVisibleEnd: false,
            modalVisibleEndEdit: {
                visible: false,
                id: null
            },
            ImageAlbum: [],
            Enderecos: [],
            EnderecosDig: {
                cep: "",
                rua: "",
                numero: "",
                cidade: "",
                bairro: "",
                estado: "",
                complemento: ""
            },
            autoloadTeste: [
                {id: 1, title: "teste1"},
                {id: 2, title: "teste2"},
                {id: 3, title: "victor"},
                {id: 4, title: "oshiro"},
                {id: 5, title: "asdasd"},
                {id: 6, title: "testgfdge2"},
                {id: 7, title: "qwe"},
                {id: 8, title: "asss"},
                {id: 9, title: "hgfhf"},
                {id: 10, title: "cvbcv"},
                {id: 11, title: "qweee"},
            ],
            selectedCat: [],
            autoInput: ""
        };

    }/* Fim da função construtora do Editar Perfil */

    /** Função utilizada para esconder os Itens de edição */
    hideEdit = ((itens) => {
        switch (itens) {
            case 1:
                this.setState({Perfil_loja: !this.state.Perfil_loja});
                break;
            case 2:
                this.setState({Logo: !this.state.Logo});
                break;
            case 3:
                this.setState({Foto_capa: !this.state.Foto_capa});
                break;
            case 4:
                this.setState({MeusEstilos: !this.state.MeusEstilos});
                break;
            case 5:
                this.setState({ConfigLoja: !this.state.ConfigLoja});
                break;
            case 6:
                this.setState({FotosLoja: !this.state.FotosLoja});
                break;
            case 7:
                this.setState({End: !this.state.End});
                break;
            case 8:
                this.setState({TelefoneCont: !this.state.TelefoneCont});
                break;
            case 9:
                this.setState({has_image_logo: !this.state.has_image_logo});
                break;
            case 10:
                this.setState({has_image_capa: !this.state.has_image_capa});
                break;
        }
    })

    __set_image_array = ((image)=>{
        this.state.ImageAlbum.push(image[0].node.image.uri);
        this.setState({ imagePickerAlbum: false, ImageAlbum: this.state.ImageAlbum});
    })

    __set_image = (( image, id )=>{

        switch (id) {

            case 1:
                this.setState({ ImageLogo: false, has_image_logo: true, post_image_logo: image[0].node.image.uri });
                break;
            case 2:
                this.setState({ ImageCapa: false, has_image_capa: true, post_image_capa: image[0].node.image.uri });
                break;
        }


    });

    __clean_image = ((id)=>{


        switch (id) {

            case 1:
                this.setState({ ImageLogo: true, has_image_logo: false, post_image_logo: false});
                this.setState({Logo: true});
                break;
            case 2:
                this.setState({ ImageCapa: true, has_image_capa: false, post_image_capa: false });
                this.setState({Foto_capa: true});
                break;
        }

    });

    __add_categoria = ((id, title)=>{
        const index = this.state.selectedCat.findIndex(obj => obj.id === id);
        if(index < 0 ) {
            this.state.selectedCat.push({id: id, categoria: title});
            this.setState({autoList: []});
        }else{
            this.setState({autoList: []});
        }
    })
    __add_categoria_list = ((id, title)=>{
        const index = this.state.selectedCat.findIndex(obj => obj.id === id);
        if(index < 0 ) {
            this.state.selectedCat.push({id: id, categoria: title});
            this.setState({autoList: []});
        }else{
            this.state.selectedCat.splice(index,1)
            this.setState({selectCat: this.state.selectedCat})
            this.setState({autoList: []});
        }
    })
    __add_end = (( end ) => {

            this.state.Enderecos.push(end);
            this.state.EnderecosDig =  {
                cep: "",
                rua: "",
                numero: "",
                cidade: "",
                bairro: "",
                estado: "",
                complemento: ""
            };
            this.setState({EnderecosDig: this.state.EnderecosDig})

    })
    __add_end_edit = ((end, id)=>{

        this.state.Enderecos[id] = end;
        this.state.EnderecosDig =  {
            cep: "",
            rua: "",
            numero: "",
            cidade: "",
            bairro: "",
            estado: "",
            complemento: ""
        };
        this.setState({EnderecosDig: this.state.EnderecosDig})
       this.setState({modalVisibleEndEdit: {
               visible: false,
               id: null
           }});
    })

    __start_edit = ((id)=>{
        this.state.EnderecosDig = this.state.Enderecos[id];
        this.setState({EnderecosDig: this.state.EnderecosDig})
        this.setState({modalVisibleEndEdit: {
                visible: true,
                id: id
            }})
        this.setState({modalVisibleEnd: true});
    })

    __delete_categoria = ((id)=>{
        this.state.selectedCat.splice(id,1)
        this.setState({selectCat: this.state.selectedCat})
    })

    __delete_foto_album = ((id)=>{
        this.state.ImageAlbum.splice(id,1)
        this.setState({ImageAlbum: this.state.ImageAlbum})
    })

    __delete_end = ((id)=>{
        this.state.Enderecos.splice(id,1)
        this.setState({Enderecos: this.state.Enderecos})
    })
    onTyping(text) {

        if(text !== "" && text !== undefined && text !== null && text !== false && text !== "undefined" && text !== "null") {
            const countries = this.state.autoloadTeste.filter(function (country) {
                return country.title.toLowerCase().startsWith(text.toLowerCase())
            })

            this.setState({autoList: countries});
        }else{
            this.setState({autoList: []});
        }
    }

    render(){

        return(
            <View>
            <KeyboardAwareScrollView innerRef={ref => this.scrollView = ref}  style={{backgroundColor: '#fff'}}>
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <View style={style.headerEditarBar} />
                    <HeaderCarrinho title={'Editar Perfil'} subtitle={'Aqui você pode editar os dados da sua conta'} onPressItem={() => {
                        this.props.navigation.goBack(null);
                    }} />
                </View>
                <View style={ style.body_edit_content_init }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(1)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>PERFIL DA LOJA</Text>
                        </View>
                        { !this.state.Perfil_loja &&
                            <Image style={style.body_edit_down}
                                source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Perfil_loja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    { this.state.Perfil_loja &&
                    <PerfilLojaEdit/>
                    }

                </View>

                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => {this.hideEdit(2); this.hideEdit(9)}}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>ALTERAR LOGO</Text>
                        </View>
                        { !this.state.Logo &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Logo &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    { (this.state.Logo && this.state.post_image_logo === false)&&
                    <Logo onImage={ ()=> {

                        this.hideEdit(2)
                        this.setState({ImageLogo: true});

                    } } />
                    }
                    {   this.state.ImageLogo &&
                    <ImagePicker
                        show={ this.state.ImageLogo }
                        onSelect={( images )=>{ this.__set_image( images, 1 ); }}
                        onCancel={()=>{ this.setState({ ImageLogo: false }) }} />

                    }
                    {(this.state.post_image_logo !== false && this.state.has_image_logo) &&
                    <View style={style.contentImage}>
                        <ImageBackground
                            style={style.imageLogoSelected}
                            source={{uri: this.state.post_image_logo}}>
                        </ImageBackground>
                        <View style={style.editStyle}>
                            <TouchableOpacity style={style.btnEditar} onPress={()=>{this.__clean_image(1)}}>
                                <Image style={style.imgView}
                                       source={require('../../../assets/imgs/png/icons/pencil.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    }

                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => {this.hideEdit(3); this.hideEdit(10)}}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>FOTO DE CAPA</Text>
                        </View>
                        { !this.state.Foto_capa &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Foto_capa &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    { (this.state.Foto_capa && this.state.post_image_capa === false)&&
                    <Logo onImage={ ()=> {

                        this.hideEdit(3)
                        this.setState({ImageCapa: true});

                    } } />
                    }
                    {   this.state.ImageCapa &&
                    <ImagePicker
                        show={ this.state.ImageCapa }
                        onSelect={( images )=>{ this.__set_image( images, 2 ); }}
                        onCancel={()=>{ this.setState({ ImageCapa: false }) }} />

                    }
                    {(this.state.post_image_capa !== false && this.state.has_image_capa) &&
                    <View style={style.contentImage}>
                        <ImageBackground
                            style={style.imageLogoSelected}
                            source={{uri: this.state.post_image_capa}}>
                        </ImageBackground>
                        <View style={style.editStyle}>
                            <TouchableOpacity style={style.btnEditar} onPress={()=>{this.__clean_image(2)}}>
                                <Image style={style.imgView}
                                       source={require('../../../assets/imgs/png/icons/pencil.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    }

                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(4)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>MEUS ESTILOS</Text>
                        </View>
                        { !this.state.MeusEstilos &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.MeusEstilos &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    {this.state.MeusEstilos &&
                        <View>
                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                }}>
                                <ScrollView>

                                    <View style={{width: "100%", margin: 15}}>
                                        <Text style={{fontSize: 20, color: "#6a7989"}}>Categorias</Text>
                                    </View>
                                    <View>
                                        {this.state.autoloadTeste.map((item, i) => {
                                            return (
                                                <View key={i} style={{borderBottomWidth: 1, borderColor: "#a2a2a2"}}>
                                                    <TouchableOpacity onPress={() => {
                                                        this.__add_categoria_list(item.id, item.title);
                                                        this.state.autoInput = ""
                                                    }}>
                                                        <Text style={style.itemText}>
                                                            {item.title}
                                                        </Text>
                                                        {(this.state.selectedCat.findIndex(x => x.id == item.id) >= 0) &&
                                                            <Image style={{width: 20, tintColor: '#7f1cef', height: 20, marginRight: 15, position:"absolute", right: 0, marginTop: 15 }}
                                                                   source={require('../../../assets/imgs/png/icons/check.png')}/>
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                        <View style={{height:80}}>

                                        </View>
                                    </View>

                                </ScrollView>
                                <View style={{position: "absolute", bottom:0, left: 0, right: 0}}>
                                    <View style={style.footerEditar}>

                                        <TouchableOpacity activeOpacity={0.6} style={style.containerBtnSalvar} onPress={()=> this.setState({modalVisible: false})}>
                                            <Text style={style.textBtnSalvar}>
                                                CONCLUIR
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </Modal>
                            <View style={style.containerAuto}>
                                <Autocomplete
                                    ref={input => this.state.autoInput = input}
                                    onFocus={() => {this.scrollView.props.scrollToEnd({animated: true})}}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    containerStyle={style.autocompleteContainer}
                                    inputContainerStyle={{borderWidth: 0 }}
                                    data = {this.state.autoList}
                                    onChangeText={this.onTyping}
                                    placeholder="Qual o seu estilo?"
                                    renderItem={({ id,title }) => (
                                        <TouchableOpacity onPress={() => {
                                            this.__add_categoria(id,title);
                                            this.state.autoInput = ""
                                        }}>
                                            <Text style={style.itemText}>
                                                {title}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                                <TouchableOpacity onPress={ ()=> this.setState({modalVisible: true})}>
                                        <Image style={{width:30, height: 30, marginRight: 15}} source={require('../../../assets/imgs/png/icons/list.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={{width: "100%", margin: 15}}>
                                    <Text style={{fontSize: 20, color: "#6a7989"}}>Categorias Adicionadas</Text>
                                </View>
                                <ScrollView horizontal={true} style={style.contentInsideOptions}>
                                {this.state.selectedCat.map((item,i) => {
                                    return (
                                    <TouchableOpacity key={item.id}  style={style.btnListCat}>

                                        <OptionsMenu
                                            customButton={<Text numberOfLines={1} ellipsizeMode="tail" style={{ textAlign:"center", color: "#fff", marginTop: 5 }}>
                                                {item.categoria}
                                            </Text>}
                                            buttonStyle={{ width:"100%", height: 30 }}
                                            destructiveIndex={1}
                                            options={["Apagar", "Cancelar"]}
                                            actions={[()=>{this.__delete_categoria(i)}, ()=>{}]}/>
                                    </TouchableOpacity>


                                    )
                                })
                                }
                                    {this.state.selectedCat.length === 0 &&
                                        <Text style={{marginLeft: 15, marginBottom: 15}}>Nenhuma categoria foi selecionada</Text>
                                    }
                                </ScrollView>
                            </View>
                        </View>
}
                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(5)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>CONFIGURAÇÃO DA LOJA</Text>
                        </View>
                        { !this.state.ConfigLoja &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.ConfigLoja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    {this.state.ConfigLoja &&
                        <View style={{flex: 1, alignContent: "center", justifyContent: "center", marginLeft: 20}}>
                            <View style={style.contentInsideOptions}>
                                <Text style={{color: "#6a7989", marginRight: 10}} >Sua loja é privada?</Text>
                                <Switch
                                    onValueChange = {() =>{ this.setState({lojaPrivada: !this.state.lojaPrivada}); }}
                                    value = {this.state.lojaPrivada}/>
                            </View>
                        </View>
                    }


                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(6)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>FOTO DA SUA LOJA</Text>
                        </View>
                        { !this.state.FotosLoja &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.FotosLoja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>

                    {this.state.FotosLoja &&

                        <View>
                        <ScrollView horizontal={true} style={{
                            width:"100%",
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                width:"100%",
                                flex: 1,
                                flexDirection: 'row',
                            }}>

                            {this.state.ImageAlbum.map((image,i) => {
                                return (
                                    <View style={{marginLeft: 15}} key={i}>
                                        <ImageBackground
                                            style={style.imageLogoSelectedAlbum}
                                            source={{uri: image}}>
                                        </ImageBackground>
                                        <TouchableOpacity style={{position: "absolute", right: 0, top:0}} onPress={()=>{this.__delete_foto_album(i)}}>
                                            <View style={style.btnEditar}>
                                                <Text style={{color: "#fff"}}>X</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                )
                            })}
                        </View>

                        {   this.state.imagePickerAlbum &&
                        <ImagePicker
                            show={ this.state.imagePickerAlbum }
                            onSelect={( images )=>{ this.__set_image_array( images ); }}
                            onCancel={()=>{ this.setState({ imagePickerAlbum: false }) }} />

                        }

                        </ScrollView>
                            <TouchableOpacity style={{marginBottom: 15,marginTop:15, flex: 1, alignContent: "center", justifyContent: "center", width:"100%"}} onPress={ ()=> {this.setState({imagePickerAlbum: true});} }>
                                <ImageBackground
                                    style={{width: 70, height: 70, alignSelf: "center"}}
                                    source={require('../../../assets/imgs/png/icons/add-round.png')}
                                    onPress={ ()=> {

                                        this.setState({imagePickerAlbum: true});

                                    } } />
                            </TouchableOpacity>
                        </View>

                    }
                </View>

                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(7)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>ENDEREÇO</Text>
                        </View>
                        { !this.state.End &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.End &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>

                    {this.state.End &&


                    <View>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisibleEnd}
                            onRequestClose={() => {
                            }}>
                            <ScrollView>


                                <View style={{width: "100%", margin: 15}}>
                                    <Text style={{fontSize: 20, color: "#6a7989"}}>Novo endereço</Text>
                                </View>
                                <View>
                                    <Hoshi style={style.contentPerfilLoja}
                                           label={'CEP'}
                                           borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.cep = text}}
                                           value={this.state.EnderecosDig.cep}
                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                           label={'Rua'}
                                           borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.rua = text}}
                                           value={this.state.EnderecosDig.rua}

                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                             label={'Número'}
                                             borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.numnero = text}}
                                           value={this.state.EnderecosDig.numnero}

                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                           label={'Complemento'}
                                           borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.complemento = text}}
                                           value={this.state.EnderecosDig.complemento}

                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                           label={'Bairro'}
                                           borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.bairro = text}}
                                           value={this.state.EnderecosDig.bairro}

                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                         label={'Cidade'}
                                         borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.cidade = text}}
                                           value={this.state.EnderecosDig.cidade}

                                    />
                                    <Hoshi style={style.contentPerfilLoja}
                                         label={'Estado'}
                                         borderColor={'transparent'}
                                           onChangeText={(text) => {this.state.EnderecosDig.estado = text}}
                                           value={this.state.EnderecosDig.estado}

                                    />

                                    <View style={{height:140}}>

                                    </View>
                                </View>



                            </ScrollView>
                            <View style={{position: "absolute", bottom:0, left: 0, right: 0}}>
                                <View style={style.footerEnd}>

                                    <TouchableOpacity activeOpacity={0.6} style={style.containerBtnSalvar} onPress={()=> {
                                        if(this.state.modalVisibleEndEdit.visible === false){
                                            this.__add_end(this.state.EnderecosDig);

                                        }else{
                                            this.__add_end_edit(this.state.EnderecosDig);
                                        }
                                        this.setState({modalVisibleEnd: false});

                                    }}>
                                        <Text style={style.textBtnSalvar}>
                                            CONCLUIR
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.6} style={style.containerBtnCancelar} onPress={()=> {this.setState({modalVisibleEnd: false});}}>
                                        <Text style={style.textBtnSalvar}>
                                            CANCELAR
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Modal>

                        {this.state.Enderecos.map((end,i)=>{
                            return(
                                <View style={{flex: 1, flexDirection: "row"}} key={i}>
                                    <View style={{width: "80%", marginLeft: 15}}>
                                        <Text>{end.rua} - {end.numero}, {end.complemento}</Text>
                                        <Text>{end.bairro}, {end.cep}</Text>
                                        <Text>{end.cidade} {end.estado} </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=> {this.__start_edit(i)}}>
                                        <Image style={[ style.imgView, { tintColor: '#000' }]}
                                               source={require('../../../assets/imgs/png/icons/pencil.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{this.__delete_end(i)}}>
                                        <Text style={{fontSize: 20}}>X</Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        })

                        }

                        <TouchableOpacity style={{marginBottom: 15,marginTop:15, flex: 1, alignContent: "center", justifyContent: "center", width:"100%"}} onPress={ ()=> { this.setState({modalVisibleEnd: true}) }}>
                            <ImageBackground
                                style={{width: 70, height: 70, alignSelf: "center"}}
                                source={require('../../../assets/imgs/png/icons/add-round.png')}
                                onPress={ ()=> {

                                    this.setState({imagePickerAlbum: true});

                                } } />
                        </TouchableOpacity>

                    </View>
                    }

                </View>
            <View style={{height:200}}>

                <View style={ style.body_edit_content_end }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(8)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>TELEFONE</Text>
                        </View>
                        { !this.state.TelefoneCont &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.TelefoneCont &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>

                    {this.state.TelefoneCont &&

                    <Hoshi style={style.contentPerfilLoja}
                           label={'Telefone para contato'}
                           borderColor={'transparent'}
                           onChangeText={(text) => {}}

                    />

                    }
                </View>
            </View>

            </KeyboardAwareScrollView>
                {this.renderButtonAvancar()}
            </View>
        );

    }


    renderButtonAvancar() {
        return (
            <View style={style.footerEditar}>

                <TouchableOpacity activeOpacity={0.6} style={style.containerBtnSalvar}>
                    <Text style={style.textBtnSalvar}>
                        SALVAR
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }

};

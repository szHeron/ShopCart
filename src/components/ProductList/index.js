import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Headline, Text } from 'react-native-paper';
import { data } from '../../services/data';
import { styles } from './styles';

const DATA = [
    {
        id: "1",
        name: "Kaiak Pulso",
        brand: "Natura",
        price: 126.90,
        img: 'https://static.natura.com/cdn/ff/y6b3Eh_VwMZG2a-Pf11DI-slmbLv2B8K8x5oYj2hI-Q/1624647418/public/2021-06/25227_dicas_de_uso.jpg'
    },
    {
        id: "2",
        name: "Melbec",
        brand: "Boticario",
        price: 159.90,
        img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/B73607/2dcdaf41-e906-4816-9786-36feb27304f5-malbec-desodorante-colonia-100-ml.png'
    },
    {
        id: "3",
        name: "J'dore",
        brand: "DIOR",
        price: 585.90,
        img: 'https://www.dior.com/couture/var/dior/storage/images/horizon/products/fp-pcd/folder-fragrance/folder-j_adore/y0715201-jadore-edp/strate05_crossell/20352697-13-eng-US/strate05_crossell2_1440_1200.jpg?imwidth=460'
    },
    {
        id: "4",
        name: "Nº 5",
        brand: "CHANNEL",
        price: 585.90,
        img: 'https://prd-v3-i.chanel.com/fnbv3/image/full/chanel__com_type1/products_full/n_5-eau-de-parfum-vaporizador.P125420.jpg'
    },
    {
        id: "5",
        name: "J'dore",
        brand: "DIOR",
        price: 585.90,
        img: 'https://www.dior.com/couture/var/dior/storage/images/horizon/products/fp-pcd/folder-fragrance/folder-j_adore/y0715201-jadore-edp/strate05_crossell/20352697-13-eng-US/strate05_crossell2_1440_1200.jpg?imwidth=460'
    },
    {
        id: "6",
        name: "Nº 5",
        brand: "CHANNEL",
        price: 585.90,
        img: 'https://prd-v3-i.chanel.com/fnbv3/image/full/chanel__com_type1/products_full/n_5-eau-de-parfum-vaporizador.P125420.jpg'
    },
]

export default function ProductList(){
    const renderPerfumes = ({ item }) => {
        return (
            <TouchableOpacity style={styles.conteinerPerfumes}>
                <Image source={{uri: item.img}} style={styles.perfumeImg}/>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'green'}}>R$ {item.price}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>ou 6x de {(item.price/6).toFixed(2)}</Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style={{flex: 1}}>
            <FlatList
                data={DATA}
                renderItem={renderPerfumes}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
};
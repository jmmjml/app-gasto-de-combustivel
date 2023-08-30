import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './globalStyles';

export default function App() {
  const [valorLitro, setValorLitro] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  const executar = () =>{
    let dim = (valorLitro * quantidade);
    let ks = ( dim / km);
    setResultado = ks
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>Valor do litro</Text>
          <View style={styles.viewInput}>
            <TextInput value={valorLitro} onChangeText={setValorLitro} style={styles.texto} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View>
          <Text>Quantidade Abastecida</Text>
          <View style={styles.viewInput}>
            <TextInput value={quantidade} onChangeText={setQuantidade} style={styles.texto} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View>
          <Text>Km Rodado</Text>
          <View style={styles.viewInput}>
            <TextInput value={km} onChangeText={setKm} style={styles.texto} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Pressable style={styles.botao} ><Text style={{color:"#fff"}}>Buscar valor</Text></Pressable>
        </View>
        <View>
          <Text>{`Resultado: ${resultado}`}</Text>
        </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

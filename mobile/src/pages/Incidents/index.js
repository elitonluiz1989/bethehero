import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logoImg from '../../assets/img/logo.png';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const navigateToDetail = incident => navigation.navigate('Detail', { incident });

  const loadIncidents = async () => {
    if (loading) {
      return;
    }

    if (total > 0 && total === incidents.length) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', { params: { page } });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} incidents</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>

      <Text style={styles.description}>Choose one of incidents bellow and save it!</Text>

      <FlatList style={styles.incidents}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO</Text>
            <Text style={styles.incidentValue}>{incident.name} from {incident.city}/{incident.state}</Text>

            <Text style={styles.incidentProperty}>Title</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Value</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

            <TouchableOpacity style={styles.detailBtn}
              onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailBtnText}>See more details</Text>

              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
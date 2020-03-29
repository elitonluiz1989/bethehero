import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: '#737380',
    fontSize: 15
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    marginTop: 48,
    marginBottom: 16,
    color: '#13131a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  description: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24
  },
  incidents: {
    marginTop: 32,
  },
  incident: {
    marginBottom: 16,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8
  },
  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    color: "#737380"
  },
  detailBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailBtnText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
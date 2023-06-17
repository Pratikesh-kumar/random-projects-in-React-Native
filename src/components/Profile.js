import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  width,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Profile() {
  const [selected_index, setSeleted_index] = useState(0);
  const [color, setColor] = useState("red");
  const DATA = [
    {
      id: '1',
      title: 'Information Technology',
      selected: [
        {name: 'Internet'},
        {name: 'communiction'},
        {name: 'telecom operation'},
        {name: 'IT'},
      ],
    },
    {
      id: '2',
      title: 'Engineering',
      selected: [
        {name: 'Mechanical'},
        {name: 'Electronics'},
        {name: 'computer Science'},
        {name: 'Civil'},
      ],
    },
    {
      id: '3',
      title: 'FInance',
    },
    {
      id: '4',
      title: 'Business service',
    },
    {
      id: '5',
      title: 'Transportation',
    },
    {
      id: '6',
      title: 'Cultural Medium',
    },
    {
      id: '7',
      title: 'Public Utilities',
    },
    {
      id: '8',
      title: 'Student',
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon style={styles.icon} name="arrowleft"/>
          </TouchableOpacity>

          <Text style={styles.occupation}>Please select your i...</Text>

          <Text style={styles.comp}>Compl...</Text>
        </View>
      </View>
      <View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.cont}>
        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setSeleted_index(index);
                }}>
                <Text style={styles.items}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.innerlist}>
          <FlatList
            data={DATA[selected_index].selected}
            renderItem={({item, index}) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    width: width,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  occupation: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 500,
    color: '#000000',
    left: 5,
  },
  comp: {
    color: '#1A94EC',
    fontSize: 18,
  },
  icon: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'space-evenly',
    height: 30,
  },
  line: {
    width: 360,
    height: 8,
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
  },
  items: {
    padding: 10,
    fontSize: 14,
  },
  list: {
    width: 210,
  },
  innerlist: {
    padding: 20,
    fontSize: 18,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'Technology',
    selected: [
      {name: 'Robot'},
      {name: 'Coding'},
      {name: 'Apply Fans'},
      {name: 'Meta'},
      {name: 'Drones'},
      {name: 'Vr World'},
    ],
  },
  {
    id: '2',
    title: 'pets',
    selected: [
      {name: 'Eagles'},
      {name: 'Monkey'},
      {name: 'Bird'},
      {name: 'Fish'},
      {name: 'Cat'},
      {name: 'Dog'},
    ],
  },
  {
    id: '3',
    title: 'Reading Film and Telivision',
    selected: [
      {name: 'Anime'},
      {name: 'Hollywood'},
      {name: 'Marvel'},
      {name: 'Acg'},
      {name: 'star wars'},
    ],
  },
  {
    id: '4',
    title: 'Art Music',
    selected: [
      {name: 'Gardening'},
      {name: 'Guitar'},
      {name: 'Drums'},
      {name: 'EDMI'},
      {name: 'Reck'},
      {name: 'Hip Hop'},
      {name: 'Cello'},
    ],
  },
  {
    id: '5',
    title: 'Game',
    selected: [
      {name: 'Call Of Duty'},
      {name: 'Minecraft'},
      {name: 'LOL'},
      {name: 'DNF'},
      {name: 'PUBG'},
      {name: 'GTA v1'},
    ],
  },
  {
    id: '6',
    title: 'Sport Fitness',
    selected: [
      {name: 'Swimming'},
      {name: 'Soccer'},
      {name: 'Badminton'},
      {name: 'Tennis'},
      {name: 'Yoga'},
      {name: 'Rugby'},
      {name: 'Jerking'},
    ],
  },
  {
    id: '7',
    title: 'Personal Traits',
    selected: [
      {name: 'Perfectionist'},
      {name: 'Critic'},
      {name: 'Positive'},
      {name: 'Family'},
      {name: 'Brilliant'},
      {name: 'Open-minded'},
      {name: 'Self aware'},
      {name: 'Sensual'},
      {name: 'Funny'},
    ],
  },
  {
    id: '8',
    title: 'Travelling',
    selected: [
      {name: 'Hiking'},
      {name: 'Fishing'},
      {name: 'Road trips'},
      {name: 'Trapeze'},
      {name: 'Beach Volleyball'},
      {name: 'Surfing'},
    ],
  },
];

const Hobby = ({navigation}) => {
  const [selected_index, setSeleted_index] = useState(0);
  const [selected_item, setSelected_item] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon style={styles.icon} name="arrowleft" />
        </TouchableOpacity>

        <Text style={styles.hobbies}>Hobbies</Text>

        <Text style={styles.comp}>Compl...</Text>
      </View>
      <View style={styles.line}></View>

      <View>
        <View>
          <View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.cont}>
            <View style={styles.list}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSeleted_index(index);

                      setSelected_item(index);
                    }}>
                    <Text
                      style={[
                        {color: selected_item == index ? 'red' : 'black'},
                        styles.items,
                      ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={styles.shape}>
              <FlatList
                numColumns={2}
                data={DATA[selected_index].selected}
                renderItem={({item, index}) => (
                  <TouchableOpacity>
                    <Text style={styles.square}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: width,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  hobbies: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 500,
    color: '#000000',
    left: -45,
  },
  comp: {
    color: '#1A94EC',
    fontSize: 18,
  },
  line: {
    width: 360,
    height: 8,
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
  },
  icon: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'space-evenly',
    height: 30,
  },
  items: {
    height: 100,
    padding: 15,
    fontSize: 16,
    marginHorizontal: 13,
    fontFamily: 'roboto',
  },
  square: {
    height: 50,
    width: 150,
    borderWidth: 0.5,
    margin: 10,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    left: 20,
    
  
  },
  shape: {
    justifyContent: 'space-between',
  },
});

export default Hobby;

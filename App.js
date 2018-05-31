import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel'; // 3.4.0'
import Modal from "react-native-modal";
import ModalDropdown from 'react-native-modal-dropdown';
import Video from "react-native-video";
import Swiper from 'react-native-swiper';

import Data from './podData';
import Row from './Row';

import LightVideo from "./assets/cheers.mp4";
import BooBear from "./assets/boobear.mp4";
import Burger from "./assets/burgerrrr.mp4";

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class App extends Component {

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _togglePodSelectModal =() =>
    this.setState({isPodModalVisible: !this.state.isPodModalVisible});

  _toggleHarvestModal =() =>
    this.setState({isHarvestModalVisible: !this.state.isHarvestModalVisible});
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  {/* Should be getting these states from the server */}
  {/* you can dynamically do imagebackground given that the images are stored in s3 https storage and the sql data from that location can be retrieved */}
    this.state = {
      activeSlide: 0,
      isModalVisible: false,
      isPodModalVisible: false,
      isHarvestModalVisible: false,
      dataSource: ds.cloneWithRows(Data),
      entries: [
        {
          podIndex: 'POD 1',
          podType: 'BASIL',
          cultivationPeriod: 15,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 2',
          podType: 'TOMATOES',
          cultivationPeriod: 30,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 3',
          podType: 'MUSHROOM',
          cultivationPeriod: 20,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 4',
          podType: 'THYME',
          cultivationPeriod: 18,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 5',
          podType: 'OREGANO',
          cultivationPeriod: 45,
          image: './assets/TomatoesCard.png',
        }

      ],
    }
  }

  // pagination for carousel cards
  get pagination () {
      const { entries, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: '#fff'}}
            inactiveDotElement={<Image source={require('./assets/pod-faded.png')} style={{width:15, height:15, marginHorizontal: 5}}/>}
            dotElement={<Image source={require('./assets/pod-selected.png')} style={{width:15, height:15, marginHorizontal:5}}/>}
          />
      );
  }

  // this is the render of the pod cards on the main dock.
  _renderItem ({item, index}) {
        return (
          <ImageBackground 
            source={require('./assets/TomatoesCard.png')} 
            style={styles.card}
            >
            <View 
              style={{
                flex:0.9,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 18,
                marginTop: 15,
              }}>

                <View style={{flex:1, alignItems: 'flex-start'}}>
                
                  <Text style={styles.podIndex}>{ item.podIndex }</Text>
                  <Text style={styles.podType}>{ item.podType }</Text>
                
                </View>

                <View style={{flex:0.25, alignItems: 'flex-end'}}>
                  <ModalDropdown 
                    options={['Rearrange', 'Delete', 'Replace (New)', 'Learn More']}
                    defaultIndex={-1}
                    renderSeparator={() => <View />}
                    >
                    
                    <Image source={require('./assets/info-circle.png')} style={{width:25, height:25}}/>
                  
                  </ModalDropdown>
                </View>
            
            </View>
            
            <View style ={{flex:1, width: '85%', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                
                <Image source={require('./assets/info-circle.png')} style={{width:25, height:25, marginRight: 5}}/>
               
                <View style={{flex:1}}>
                    <Text style={styles.miscHeader}>Learn More</Text>
                    <Text style={styles.miscDesc}>Tap here to learn more about {item.podType.toLowerCase()} and its usage </Text>
                </View>
                

              </View>
                
              <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                <Image source={require('./assets/info-circle.png')} style={{width:25, height:25, marginRight: 5}}/>
                
                <View style={{flex:1}}>
                  <Text style={styles.miscHeader}>Harvest Tip</Text>
                  <Text style={styles.miscDesc}>Tap here to harvest {item.podType.toLowerCase()} </Text>
                </View>

              </View>

              <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                
                
                <View style={{flex:1}}>
                  <Text style={styles.miscHeader}>Ready in {item.cultivationPeriod} days</Text>
                  <Image source={require('./assets/progressBar.png')} style={{width:'100%', height:5, marginTop: 5}}/>
                </View>

              </View>
            
            </View>
          
          </ImageBackground>

        );
    }


  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <View style={{flex:0.2}}>
          </View>
          
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <ModalDropdown textStyle={styles.modalText} renderSeparator={() => <View />} options={["Alex's Garden", "Chiragh's Garden"]} defaultValue={"Himanshu's Garden"}/>
            <TouchableOpacity onPress={this._toggleHarvestModal}>
              <Image source={require('./assets/info-black.png')} style={{width:15, height:15, marginLeft:5}}/>
            </TouchableOpacity>
          </View>


          <View style={{flex:0.2, alignItems: 'flex-end'}}>
            <ModalDropdown textStyle={styles.modalText}renderSeparator={() => <View />} options={['My Profile', 'Settings']} >
              <Image source={require('./assets/info-black.png')} style={{width:20, height:20}}/>
            </ModalDropdown>
          </View>
         
        </View>
        


        <View style={styles.podCards}>
          
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                sliderWidth={width - 10}
                itemWidth={width - 100}
                itemHeight={height}
              />
        </View>


        <View style={{flex:0.15}} >
          <TouchableOpacity onPress={this._togglePodSelectModal}>
            { this.pagination }
          </TouchableOpacity>
        </View>

        <View style={styles.infoCards}>
            <TouchableOpacity onPress={this._toggleModal}>
              <View style={{flex:1,}}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Image source={require('./assets/drawerBar.png')} style={{width:80, height:3, marginTop:3, alignItems: 'center'}}/>
                </View>
                <View style={{flex:3, justifyContent: 'space-around', alignItems: 'flex-start', marginHorizontal: 20, marginBottom:10}}>
                  <Text style={styles.infoTitle}>
                    Water
                  </Text>
                  <Text style={styles.infoDetail}>
                    Refill water tank in 3 days
                  </Text>
                  <Image source={require('./assets/waterLevelBar.png')} style={{width: width*0.85, height:5}}/>
                </View>
              </View>
            </TouchableOpacity>

            <Modal isVisible={this.state.isModalVisible}>

              <View style={{ flex: 1}}>
                
                <TouchableOpacity style={{flex:0.05}} onPress={this._toggleModal}>
                </TouchableOpacity>
                
                <ScrollView contentContainerStyle={{justifyContent: 'space-between'}}>
                  
                    
                    <View style={{ backgroundColor: '#fff', height: height*0.15, margin: 5}}>
                      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Image source={require('./assets/drawerBar.png')} style={{width:80, height:3, marginTop:3, alignItems: 'center'}}/>
                      </View>
                      <View style={{flex:3, justifyContent: 'space-around', alignItems: 'flex-start', marginHorizontal: 10, marginBottom:10, }}>
                        <Text style={styles.infoTitle}>
                          Water
                        </Text>
                        <Text style={styles.infoDetail}>
                          Refill water tank in 3 days
                        </Text>
                        <Image source={require('./assets/waterLevelBar.png')} style={{width: width*0.8, height:5}}/>
                      </View>
                    </View>

                    <View style={{ height: height*0.25, backgroundColor: '#507CE3', margin: 5}}>
                      <View style={{flex:0.5, justifyContent: 'space-around', margin:10}}>
                        <Text style={{fontSize:12, color:'#fff'}}> Your </Text>
                        <Text style={{fontSize:14, color:'#fff'}}> AVA BYTE </Text>
                      </View>

                      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/cloud.png')} style={{flex:1, width: 25, height:15, resizeMode:'contain', marginBottom:5, justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71', justifyContent: 'center'}}> Humidity </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff', justifyContent: 'flex-end'}}> 36 % </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/lightbulb.png')} style={{flex:1, width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1, fontSize:10, color:'#273D71', justifyContent: 'flex-end'}}> Light </Text>
                          <Text style={{flex:1, fontSize:12, color:'#fff', justifyContent: 'flex-end'}}> 1000 Lum </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/temperature.png')} style={{flex:1,width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71'}}> Temp </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff'}}> 32 C </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/droplet.png')} style={{flex:1,width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71'}}> Pump </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff'}}> 3H </Text>
                        </View>
                       
                      </View>

                      <View style={{flex:0.5, backgroundColor: '#273D71', justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:14, color:'#fff'}}> Learn More </Text>
                      </View>

                    </View>

                    <View style={{ height: height*0.3, backgroundColor: '#fff', margin: 5}}>
                      <View style={{flex:0.5, justifyContent: 'space-around', margin:10}}>
                        <Text style={{fontSize:12, color:'#000'}}> News </Text>
                        <Text style={{fontSize:14, color:'#000'}}> Introducing Mega-Byte </Text>
                      </View>

                      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                          <Image source={require('./assets/avabyte-grey.png')} style={{flex:1, width: 107, height:57, resizeMode:'contain', marginBottom:5}}/>
                        </View>

                        <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{flex:1, fontSize:14, color:'#000', justifyContent: 'center', alignItems: 'center'}}> 
                            Now grow more with ease. New Mega-byte gives you 8 pods to grow more. 
                          </Text>
                        </View>
                       
                      </View>

                      <View style={{flex:0.5, backgroundColor: '#273D71', justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:14, color:'#fff'}}> See what the buzz is about </Text>
                      </View>

                    </View>



                    <View style={{ height: height*0.25, backgroundColor: '#507CE3', margin: 5}}>
                      <View style={{flex:0.5, justifyContent: 'space-around', margin:10}}>
                        <Text style={{fontSize:12, color:'#fff'}}> Your </Text>
                        <Text style={{fontSize:14, color:'#fff'}}> AVA BYTE </Text>
                      </View>

                      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/cloud.png')} style={{flex:1, width: 25, height:15, resizeMode:'contain', marginBottom:5, justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71', justifyContent: 'center'}}> Humidity </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff', justifyContent: 'flex-end'}}> 36 % </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/lightbulb.png')} style={{flex:1, width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1, fontSize:10, color:'#273D71', justifyContent: 'flex-end'}}> Light </Text>
                          <Text style={{flex:1, fontSize:12, color:'#fff', justifyContent: 'flex-end'}}> 1000 Lum </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/temperature.png')} style={{flex:1,width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71'}}> Temp </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff'}}> 32 C </Text>
                        </View>

                        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                          <Image source={require('./assets/droplet.png')} style={{flex:1,width: 25, height:25, resizeMode:'contain', marginBottom:5,justifyContent: 'flex-start'}}/>
                          <Text style={{flex:1,fontSize:10, color:'#273D71'}}> Pump </Text>
                          <Text style={{flex:1,fontSize:12, color:'#fff'}}> 3H </Text>
                        </View>
                       
                      </View>

                      <View style={{flex:0.5, backgroundColor: '#273D71', justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:14, color:'#fff'}}> Learn More </Text>
                      </View>

                    </View>

                    <View style={{ height: height*0.3, backgroundColor: '#fff', margin: 5}}>
                      <View style={{flex:0.5, justifyContent: 'space-around', margin:10}}>
                        <Text style={{fontSize:12, color:'#000'}}> News </Text>
                        <Text style={{fontSize:14, color:'#000'}}> AVA arrives at IHS! </Text>
                      </View>

                      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                          <Image source={require('./assets/avabyte-grey.png')} style={{flex:1, width: 107, height:57, resizeMode:'contain', marginBottom:5}}/>
                        </View>

                        <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{flex:1, fontSize:14, color:'#000', justifyContent: 'center', alignItems: 'center'}}> 
                            AVA is at IHS winning over the heart of Chicagonians, techies, ag-nerds and more! 
                          </Text>
                        </View>
                       
                      </View>

                      <View style={{flex:0.5, backgroundColor: '#273D71', justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:14, color:'#fff'}}> Where will they be next? </Text>
                      </View>

                    </View>
                  
                  
                </ScrollView>

              </View>
            </Modal>      
        </View>

        <Modal style={styles.fullScreenModal} isVisible={this.state.isPodModalVisible}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#40C9E8', paddingTop: 30}}>
            <View style={{flex:3, paddingLeft: 15}}>
              <Text style={{fontSize:12, color:'#fff'}}> POD1 </Text>
              <Text style={{fontSize:18, color:'#fff'}}> SELECT A PLANT POD </Text>
            </View>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={this._togglePodSelectModal}>
                <Text style={{fontSize:30, color:'#DEDEDE'}}> X </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:6}}>  
            <ListView
              style={styles.notificationInfo}
              dataSource={this.state.dataSource}
              renderRow={(data) => <Text style={{fontSize: 16, padding:15}}>{data.genericName}</Text>}
            />
          </View>
        </Modal>
        
        <Modal style={styles.fullScreenModal} isVisible={this.state.isHarvestModalVisible}>
          <View style={styles.harvestTipContainer}>
            <Swiper 
              ref='swiper'
              style={styles.wrapper} 
              showsButtons={true}
              loop={false}
              dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDotColor={'#40C9E8'}
              scrollEnabled={false}
              nextButton={<Text></Text>}
              prevButton={<Text style={{color:'#40C9E8', fontSize:50,}}>‹</Text>}
              buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}
            >

              <View style={styles.deviceSetUpSlide}>
                <
                  repeat
                  source={LightVideo}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                  muted={true}Video
                />
                <View style={styles.harvestHeader}>
                  <View style={styles.headerDetails}>
                    <Text style={styles.descText}>
                      HARVESTING POD 5
                    </Text>
                    <Text style={styles.headerText}>
                      TOMATOES
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                    <Text style={styles.descText}>Skip</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.emptySpace}>
                </View>

                <View style={styles.harvestTips}>
                  <Text style={styles.headerText}>
                    Step 1
                  </Text>
                  <Text style={styles.descText}>
                    Description
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                    <View style={styles.nextStepButton}>
                      <Text style={styles.buttonText}>
                        NEXT
                      </Text>
                    </View> 
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.deviceSetUpSlide}>
                <Video
                  repeat
                  source={BooBear}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                  muted={true}
                />
                <View style={styles.harvestHeader}>
                  <View style={styles.headerDetails}>
                    <Text style={styles.descText}>
                      HARVESTING POD 5
                    </Text>
                    <Text style={styles.headerText}>
                      TOMATOES
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                    <Text style={styles.descText}>Skip</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.emptySpace}>
                </View>

                <View style={styles.harvestTips}>
                  <Text style={styles.headerText}>
                    Step 2
                  </Text>
                  <Text style={styles.descText}>
                    Description
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                    <View style={styles.nextStepButton}>
                      <Text style={styles.buttonText}>
                        NEXT
                      </Text>
                    </View> 
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.deviceSetUpSlide}>
                <Video
                  repeat
                  source={Burger}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                  muted={true}
                />
                <View style={styles.harvestHeader}>
                  <View style={styles.headerDetails}>
                    <Text style={styles.descText}>
                      HARVESTING POD 5
                    </Text>
                    <Text style={styles.headerText}>
                      TOMATOES
                    </Text>
                  </View>
                </View>
                
                <View style={styles.emptySpace}>
                </View>

                <View style={styles.harvestTips}>
                  <Text style={styles.headerText}>
                    Step 3
                  </Text>
                  <Text style={styles.descText}>
                    Description
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={this._toggleHarvestModal}>
                    <View style={styles.nextStepButton}>
                      <Text style={styles.buttonText}>
                        FINISH
                      </Text>
                    </View> 
                  </TouchableOpacity>
                </View>
              </View>

              

            </Swiper>        
          </View>
        </Modal>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 25
  
  },
  modalText:{
    fontSize: 16,
    color:'#5C5757'
  },
  podCards: {
    flex: 1,
    marginHorizontal: 25,
  },

  infoCards: {
    flex: 0.25,
    marginVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
  },

  card:{
    width: itemWidth, 
    height: height, 
    flex:1, 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  podIndex: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  podType: {
    color: '#fff',
    fontSize: 30,
    // fontWeight: 'bold',
  },
  miscHeader:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: "wrap",
  },
  miscDesc:{
    color: '#fff',
    fontSize: 15,
    flexWrap: "wrap",
  },
  infoTitle:{
    color: '#000',
    fontSize: 14,
  },
  infoDetail:{
    color: '#000',
    fontSize: 18,
  },
  fullScreenModal: {
    backgroundColor: '#fff',
    margin:0
  },
  harvestTipContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
  },
  harvestHeader:{
    flex:0.2,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 22
  },
  deviceSetUpSlide: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
    backgroundColor: '#fff'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descText:{
    color: '#fff',
    fontSize: 14
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  nextStepButton: {
    justifyContent:'center', 
    alignItems:'center', 
    width:0.8*width, 
    height:50, 
    borderRadius:25, 
    backgroundColor:'#40C9E8'
  },
  buttonText:{
    color:'#fff', 
    fontSize:18
  },
  emptySpace:{
    flex: 3
  },
  harvestTips:{
    flex:1,
    paddingHorizontal: 22
  },
});
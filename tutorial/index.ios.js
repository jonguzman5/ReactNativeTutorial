/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Slide from './components/Slide';
import Content from './ios/content';
export default class tutorial extends Component {

  constructor(){
    super();
    this.state={
      oldSlide: {
        index: Content[0].id,
        text: Content[0].text,
        image: Content[0].img
          },
      currentSlide: {
        index:Content[0].id,
        text: Content[0].text,
        image: Content[0].img
          },
      nextSlide: {
        index:Content[1].id,
        text: Content[1].text,
        image: Content[1].img
          }
    }

    this.nextState = this.nextState.bind(this);
    this.prevState = this.prevState.bind(this);
  }

  nextState(){
    if(this.state.oldSlide.index === 1 && this.state.currentSlide.index === 1){
        this.setState({
            currentSlide: {
              index: Content[this.state.currentSlide.index].id,
              text: Content[this.state.currentSlide.index ].text,
              image: Content[this.state.currentSlide.index ].image
            },
             nextSlide: {
              index: Content[this.state.nextSlide.index ].id,
              text: Content[this.state.nextSlide.index ].text,
              image: Content[this.state.nextSlide.index ].image
            }
        });
       }
       else if(this.state.currentSlide.index > 1 && this.state.currentSlide.index < 8){
        this.setState({
         oldSlide: {
              index: Content[this.state.oldSlide.index ].id,
              text: Content[this.state.oldSlide.index ].text,
              image: Content[this.state.oldSlide.index ].image
            },
             currentSlide: {
              index: Content[this.state.currentSlide.index ].id,
              text: Content[this.state.currentSlide.index ].text,
              image: Content[this.state.currentSlide.index ].image
            },
             nextSlide: {
              index: Content[this.state.nextSlide.index ].id,
              text: Content[this.state.nextSlide.index ].text,
              image: Content[this.state.nextSlide.index ].image
            }
            });
       }
       else if(this.state.currentSlide.index === 8){
        this.setState({
             oldSlide: {
              index: Content[this.state.oldSlide.index ].id,
              text: Content[this.state.oldSlide.index ].text,
              image: Content[this.state.oldSlide.index ].image
            },
   currentSlide: {
              index: Content[this.state.currentSlide.index ].id,
              text: Content[this.state.currentSlide.index ].text,
              image: Content[this.state.currentSlide.index ].image
            }
             });
       }
  }


  prevState(){
    if((this.state.oldSlide.index === 1 && this.state.currentSlide.index === 1)  ){
      this.setState({
        currentSlide: {
              index: Content[this.state.currentSlide.index - 1].id,
              text: Content[this.state.currentSlide.index - 1].text,
              image: Content[this.state.currentSlide.index - 1].image
            }
          });
       }
       else if((this.state.oldSlide.index === 1 )  ){
        this.setState({
         oldSlide: {
              index: Content[this.state.oldSlide.index - 1].id,
              text: Content[this.state.oldSlide.index - 1].text,
              image: Content[this.state.oldSlide.index - 1].image
            },
             currentSlide: {
              index: Content[this.state.oldSlide.index - 1].id,
              text: Content[this.state.oldSlide.index - 1].text,
              image: Content[this.state.oldSlide.index - 1].image
            },
             nextSlide: {
              index: Content[this.state.currentSlide.index - 1 ].id,
              text: Content[this.state.currentSlide.index - 1].text,
              image: Content[this.state.currentSlide.index - 1].image
            }
            });
       }
       else if((this.state.currentSlide.index > 1 && this.state.currentSlide.index <= 8)  ){
        this.setState({
         oldSlide: {
              index: Content[this.state.oldSlide.index - 2].id,
              text: Content[this.state.oldSlide.index - 2].text,
              image: Content[this.state.oldSlide.index - 2].image
            },
             currentSlide: {
              index: Content[this.state.oldSlide.index - 1].id,
              text: Content[this.state.oldSlide.index - 1].text,
              image: Content[this.state.oldSlide.index - 1].image
            },
             nextSlide: {
              index: Content[this.state.oldSlide.index - 1].id,
              text: Content[this.state.oldSlide.index - 1].text,
              image: Content[this.state.oldSlide.index - 1].image
            }
            });
       }
       else if(this.state.currentSlide.index === 9){
         this.setState({
         oldSlide: {
              index: Content[this.state.oldSlide.index - 2].id,
              text: Content[this.state.oldSlide.index - 2].text,
              image: Content[this.state.oldSlide.index - 2].image
            },
             currentSlide: {
              index: Content[this.state.oldSlide.index -1].id,
              text: Content[this.state.oldSlide.index - 1].text,
              image: Content[this.state.oldSlide.index - 1 ].image
            },
             nextSlide: {
              index: Content[this.state.oldSlide.index ].id,
              text: Content[this.state.oldSlide.index ].text,
              image: Content[this.state.oldSlide.index ].image
            }
            });
       }
  }

  render() {
    return (
      <View style={styles.container}>
        <Slide
        nextState={this.nextState}
        slide={this.state.currentSlide}
        prevState={this.prevState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slidediv: {
    backgroundColor: 'blue',
    opacity: 0.5,
  },
  // button:{
  //   border: 4px solid green,
  //   'border-radius': 1em,
  //   backgroundColor: lightgreen,
  //   width: 3em,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // background: url('https://s-media-cache-ak0.pinimg.com/736x/25/17/12/251712967ce3b0436e43123e0c6785cf.jpg'),
    // backgroundSize: "cover",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tutorial', () => tutorial);

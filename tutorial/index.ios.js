/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
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
       else if(this.state.currentSlide.index > 1 && this.state.currentSlide.index < Content.length){
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
       else if(this.state.currentSlide.index === Content.length){
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
       else if((this.state.currentSlide.index > 1 && this.state.currentSlide.index <= Content.length)  ){
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
       else if(this.state.currentSlide.index === Content.length){
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
      <Image source={require('./images/slideshowbackground.jpg')} style={styles.container}>
        <Slide
        nextState={this.nextState}
        slide={this.state.currentSlide}
        prevState={this.prevState}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
  }
});

AppRegistry.registerComponent('tutorial', () => tutorial);

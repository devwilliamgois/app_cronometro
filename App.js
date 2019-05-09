/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

export default class App extends Component {
 constructor(props){
   super(props);
   this.timer = null;
   this.state = {'milesimo':'00','segundos':'00','minutos':'00','funcao':'INICIAR'}
    this.contador_milisegindos = 0;
    this.contador_segundos = 0;
    this.contador_minutos = 0;

   this.minutos = 0;
   this.segundos = 0;
   this.milesimo = 0;
  this.vai = this.vai.bind(this);
  this.limpar = this.limpar.bind(this)
 }

  vai(){
    
    if(this.timer != null){

        clearInterval(this.timer);
        this.timer = null;
        let s = this.state;
        s.funcao = 'INICIAR';
        this.setState(s);

    }else{
      let s = this.state;
      s.funcao = 'PARAR';
      this.setState(s);

      this.timer = setInterval(() => {
        let s = this.state;
        this.contador_milisegindos += 1;

        if(s.milesimo == '00'){
          s.milesimo = '01'; 
        }else{
          if(s.milesimo == '01'){
            s.milesimo = '02'; 
          }else{
            if(s.milesimo == '02'){
              s.milesimo = '03'; 
            }else{
              if(s.milesimo == '03'){
                s.milesimo = '04'; 
              }else{
                if(s.milesimo == '04'){
                  s.milesimo = '05'; 
                }else{
                  if(s.milesimo == '05'){
                    s.milesimo = '06'; 
                  }else{
                    if(s.milesimo == '06'){
                      s.milesimo = '07'; 
                    }else{
                      if(s.milesimo == '07'){
                        s.milesimo = '08'; 
                      }else{
                        if(s.milesimo == '08'){
                          s.milesimo = '09'; 
                        }else{
                          s.milesimo = this.contador_milisegindos; 
                        }
                      }
                      
                    }
                    
                  }
                  
                }
                
              }
              
            }
            
          }
          
        }

        if(this.contador_milisegindos == 100){
          this.contador_segundos += 1;
          this.contador_milisegindos = 0;
          s.milesimo = '00';

          if(s.segundos == '00'){
            s.segundos = '01'; 
          }else{
            if(s.segundos == '01'){
              s.segundos = '02'; 
            }else{
              if(s.segundos == '02'){
                s.segundos = '03'; 
              }else{
                if(s.segundos == '03'){
                  s.segundos = '04'; 
                }else{
                  if(s.segundos == '04'){
                    s.segundos = '05'; 
                  }else{
                    if(s.segundos == '05'){
                      s.segundos = '06'; 
                    }else{
                      if(s.segundos == '06'){
                        s.segundos = '07'; 
                      }else{
                        if(s.segundos == '07'){
                          s.segundos = '08'; 
                        }else{
                          if(s.segundos == '08'){
                            s.segundos = '09'; 
                          }else{
                            s.segundos = this.contador_segundos; 
                          }
                        }
                        
                      }
                      
                    }
                    
                  }
                  
                }
                
              }
              
            }
            
          }
        }

        if(this.contador_segundos == 60){
          this.contador_minutos += 1;

          this.contador_segundos = 0;
          s.segundos = '00';

          if(s.minutos == '00'){
            s.minutos = '01'; 
          }else{
            if(s.minutos == '01'){
              s.minutos = '02'; 
            }else{
              if(s.minutos == '02'){
                s.minutos = '03'; 
              }else{
                if(s.minutos == '03'){
                  s.minutos = '04'; 
                }else{
                  if(s.minutos == '04'){
                    s.minutos = '05'; 
                  }else{
                    if(s.minutos == '05'){
                      s.minutos = '06'; 
                    }else{
                      if(s.minutos == '06'){
                        s.minutos = '07'; 
                      }else{
                        if(s.minutos == '07'){
                          s.minutos = '08'; 
                        }else{
                          if(s.minutos == '08'){
                            s.minutos = '09'; 
                          }else{
                            s.minutos = this.contador_minutos; 
                          }
                        }
                        
                      }
                      
                    }
                    
                  }
                  
                }
                
              }
              
            }
            
          }
        }
      
        this.setState(s);
      },1)
        
    }
  }

  limpar(){
    if(this.timer != null){

      clearInterval(this.timer);
      this.timer = null;

  }
  let s = this.state;

  s.segundos = '00';
  s.milesimo = '00';
  s.minutos = '00';

  this.contador_milisegindos = 0;
  this.contador_segundos = 0;
  this.contador_minutos = 0;

  this.setState(s);
  
  }

  render() {

   

    return (
      <View style={style.body}>
       <Image style={style.image} source={require("./images/cronometro.png")}/>
       <Text style={style.timer}>{this.state.minutos}:{this.state.segundos}:{this.state.milesimo}</Text>
      
        <View style={style.botaoArea}>
          <TouchableOpacity style={style.botao} onPress={this.vai}>
              <Text style={style.botaoText}>{this.state.funcao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.botao} onPress={this.limpar}>
              <Text style={style.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

const style = StyleSheet.create({
  body:{
    padding:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#000000"
  },
  image:{
    width:350,
    height:350,
    marginTop:-150,
  },
  timer:{
    fontWeight:'bold',
    fontSize:35,
    backgroundColor:'transparent',
    marginTop:-170,
    color:"#FFFFFF"
  },
  botaoArea:{
    flexDirection:'row',
    height:40,
    marginTop:150
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    height:40,
    margin:10,
    borderRadius:5
  },
  botaoText:{
    fontSize:17,
    fontWeight:'bold'

  }
})
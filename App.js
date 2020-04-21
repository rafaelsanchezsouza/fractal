import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';

export default class App extends Component {

    handleCanvas = (canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'purple';
      ctx.fillRect(0,0,100,100);
    }

    render() {
      return (
        <Canvas ref={this.handleCanvas}/>
      )
    }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <WebView
//         originWhitelist={['*']}
//         source={{ 
//           html: '<h1>Hello world</h1>' 
//         }}
//         style={{ marginTop: 20 }}
//       />
//     );
//   }
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

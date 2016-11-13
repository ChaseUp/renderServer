var React = require("react");

var Myapp = React.createClass({
  getInitialState : function(){
    return ({
      items: [
        'Item 0',
        'Item 1'
      ]
    });
  },
  render : function(){
    return (
      React.createElement('div', null, '哈哈哈哈')
    )
  }
});

exports.Myapp = Myapp;

// export default class App extends React.Component{

//   constructor() {
//     this.render = this.render.bind(this);
//     this.state = {
//       items: [
//         'Item 0',
//         'Item 1'
//       ],
//       disabled: true
//     };
//   }

//   // componentDidMount() {
//   //   this.setState({
//   //     disabled: false
//   //   })
//   // }

//   handleClick() {
//     console.log("you clicked");
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)} >Add Item</button>
//         <ul>
//         {
//           this.state.items.map(function(item) {
//             return <li>{item}</li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// };

import React from "react";
import img1 from './bg1.png'

{/**/}
class App extends React.Component{
  constructor(props){  super(props)
this.state={
  Person:{ 
    fullName:'halima elhagouchi' ,
    bio: 'live the life you will remember',
     imgSrc:img1,
      profession:'devlepper',
     
  }, 
  show:false ,
  lastMountedTime: null,
   timeSinceLastMount: null}}

//else {return}

toggleShow = () => {
  this.setState({ show: !this.state.show });
};

componentDidMount(){
  this.setState({ lastMountedTime: new Date() });
  this.interval = setInterval(() => {
    this.updateTimeSinceLastMount();
  }, 1000); // update every second
}

 componentWillUnmount() {
   clearInterval(this.interval);
 }

updateTimeSinceLastMount() {
  if (!this.state.lastMountedTime) {
    this.setState({ timeSinceLastMount: "N/A" });
  } else {
    const now = new Date();
    const diffMs = now - this.state.lastMountedTime;
    const diffMins = Math.floor(diffMs / (1000 ));
    this.setState({ timeSinceLastMount: `${diffMins} seconds ago` });
  }
}

  render(){
    const { Person, show, timeSinceLastMount } = this.state;
  return (
    <div className="App">
   
<button onClick={this.toggleShow} className='text-xl bg-slate-500 text-white'>click here</button>

<p> Monted att : {timeSinceLastMount}</p>


{show && 
(
<div className="text-center border-2 border-black bg-neutral-400">
<p className="text-3xl text-pink-500">full name:<span className="text-3xl text-pink-900">{Person.fullName}</span></p>
<p className="text-3xl text-pink-500">bio:<span className="text-3xl text-pink-900">{Person.bio}</span></p>
image<img src={Person.imgSrc}  className="w-[200px] h-[200px] justify-center ml-[480px] m-6"/> 
<p className="text-3xl text-pink-500">profession:<span className="text-3xl text-pink-900">{Person.profession} </span></p>


</div>)

}








    </div>
  );}
}

export default App;




















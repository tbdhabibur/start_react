import React, { Component } from 'react';

class Counter extends Component {
    //SETTING OBJECT
    // state = { 
    //     count: 0 
    //  };
    // render() { 
    //     return (<div>
    //                 <span> {this.formateCount()}</span>
    //                 <button>Increment</button>
    //             </div>);
                
                
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     return count ===0?<h2>Zero</h2>: count;
    // }




    //ADD SOME MORE OBJECT ELEMENTS AND USE IT
    // state = { 
    //     count: 0,
    //     imageUrl : "https://picsum.photos/200"

    //  };
    // render() { 
    //     return (<div>
    //                 <img src={this.state.imageUrl} alt="" />
    //                 <span> {this.formateCount()}</span>
    //                 <button>Increment</button>
    //             </div>);
                
                
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     return count ===0?<h2>Zero</h2>: count;
    // }


    //SETTING ATTRIBUTIES
    // state = { 
    //     count: 0

    //  };
     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() { 
    //     return (<div>
    //                 <span style={this.batchStyle} className="badge badge-primary m-2"> {this.formateCount()}</span>
    //                 <button className="btn btn-secondary btn-sm">Increment</button>
    //             </div>);
                
                
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     return count ===0?<h2>Zero</h2>: count;
    // }



    //RENDERING CLASSESS DYNAMICALLY
    // state = { 
    //     count: 1

    //  };
     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
    //                 <button className="btn btn-secondary btn-sm">Increment</button>
    //             </div>);
                
                
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     //return count ===0?<h2>Zero</h2>: count;
    //     return count ===0? "Zero": count;
    // }


    //RENDERING LISTS
    // state = { 
    //     count: 1,
    //     tags:['tag1','tag2','tag3']

    //  };
     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
    //                 <button className="btn btn-secondary btn-sm">Increment</button>
    //                 <ul>
    //                     {/* it works as for looping cause it doesnt have looping */}
    //                     {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    //                 </ul>
    //             </div>);
                
                
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     //return count ===0?<h2>Zero</h2>: count;
    //     return count ===0? "Zero": count;
    // }


    //CONDITIONAL RENDERING
    // state = { 
    //     count: 1,
    //     tags:[]

    //  };

    //  renderTags(){
    //      if(this.state.tags.length ===0) return <p>There are no tags!</p>;
    //      return <ul>{this.state.tags.map(tag => <li key="{tag}">{tag}</li>)}</ul>;
    //  }
     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 {this.state.tags.length === 0 && 'please create a new tag!'}
    //                 {this.renderTags()}
    //             </div>);
                
                
    // }


    //HANDLING EVENTS
    //problem: here if we create any event method, there is a problem 
    //which it can not be accessed 'this' because of strict mode 
    //so we cant access any method or variables from handler.
    //solution: bind method or convert the function into arro function 
    // state = { 
    //     count: 1,
    //     tags:['tag1','tag2','tag3']

    //  };

    //  //bind method is just use constructor
    // //  constructor(){
    // //      super();
    // //      //every handler needs to bind like this way
    // //      this.handleIncrement = this.handleIncrement.bind(this);

    // //  }

    // // handleIncrement(){
    // handleIncrement=()=>{ //inherite this by converting arro function
    
    //         console.log("Increment Clicked",this);
    //  };

     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
    //                 <button 
    //                 onClick={this.handleIncrement} 
    //                 className="btn btn-secondary btn-sm">Increment</button>
    //                 <ul>
    //                     {/* it works as for looping cause it doesnt have looping */}
    //                     {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    //                 </ul>
    //             </div>);
                
                
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     //return count ===0?<h2>Zero</h2>: count;
    //     return count ===0? "Zero": count;
    // }



    //UPDATING THE STATE
    // state = { 
    //     count: 1,
    //     tags:[]

    //  };

    
    // handleIncrement=()=>{ //inherite this by converting arro function
    
    //         this.setState({count:this.state.count + 1});
    //  };

     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
    //                 <button 
    //                 onClick={this.handleIncrement} 
    //                 className="btn btn-secondary btn-sm">Increment</button>
    //                 <ul>
    //                     {/* it works as for looping cause it doesnt have looping */}
    //                     {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    //                 </ul>
    //             </div>);
                
                
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     return count ===0? "Zero": count;
    // }



    //STATE CHANGES
    // state = { 
    //     count: 1,
    //     tags:['tag1','tag2','tag3']

    //  };

    
    // handleIncrement=()=>{ //inherite this by converting arro function
    
    //         this.setState({count:this.state.count + 1});
    //  };

     
    //  batchStyle={fontSize:20, fontWeight:"bold"};
    // render() 
    // { 

    //     return (<div>
    //                 <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
    //                 <button 
    //                 onClick={this.handleIncrement} 
    //                 className="btn btn-secondary btn-sm">Increment</button>
    //                 <ul>
    //                     {/* it works as for looping cause it doesnt have looping */}
    //                     {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
    //                 </ul>
    //             </div>);
                
                
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count === 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formateCount(){
    //     const {count} = this.state;
    //     return count ===0? "Zero": count;
    // }



    //PASSING EVENT ARGUMENTS
    state = { 
        value: this.props.value,
        tags:[]

     };

    
    handleIncrement= product=>{ //inherite this by converting arro function
            console.log(product)
            this.setState({value:this.state.value + 1});
     };


     
     batchStyle={fontSize:20, fontWeight:"bold"};

     
    render() { 

        return (<div>
                    {/* <h4>{this.props.id}</h4> */}
                    <span style={this.batchStyle} className={this.getBadgeClasses()}> {this.formateCount()}</span>
                    <button 
                    onClick={() =>this.handleIncrement({id:1})} 
                        className="btn btn-secondary btn-sm">Increment</button>
                    <button
                        //getting the id sent from conunters by props 
                        onClick={() =>this.props.onDelete(this.props.id)} 
                        className="btn btn-danger btn-sm m-2">Delete</button>
                    <ul>
                        {/* it works as for looping cause it doesnt have looping */}
                        {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
                    </ul>
                </div>);
                
                
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formateCount(){
        const {value} = this.state;
        return value ===0? "Zero": value;
    }



}
 
export default Counter;
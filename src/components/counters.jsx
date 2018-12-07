import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    //MAIN PART
    // state = {
    //     counters: [
    //         {id:1, value:0},
    //         {id:2, value:0},
    //         {id:3, value:0},
    //         {id:4, value:0}
    //     ]
    // }
    // render() { 
    //     return ( 
    //         <div>
    //             {this.state.counters.map(counter => <Counter key={counter.id} />)}
    //         </div>
    //      );
    // }



    //PASS DATA
    // state = {
    //     counters: [
    //         {id:1, value:4},
    //         {id:2, value:0},
    //         {id:3, value:0},
    //         {id:4, value:0}
    //     ]
    // }
    // render() { 
    //     return ( 
    //         <div>
    //             {this.state.counters.map(counter => 
    //             <Counter key={counter.id} value={counter.value} id={counter.id} />)}
    //         </div>
    //      );
    // }


    //RAISE AND HANDLE EVENTS
    state = {
        counters: [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    };

    //sending the method as props using 'onDelete' property
    handleDelete = (counterId)=>{
         //console.log('Event handler called: ', counterId);
        //  const counters = this.state.counters.filter(c => c.id !== counterId)
        //  this.setState({counters});
    };

    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                value={counter.value} 
                id={counter.id} />))}
            </div>
         );
    }


    //MULTIPLE COMPONENTS IN SYNC




    //FUNCTIONAL COMPONENTS




    //LIFECYCLE HOOKS
}
 
export default Counters;
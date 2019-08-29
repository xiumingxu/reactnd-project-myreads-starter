import React, { Component } from 'react'

export default class ShelfChanger extends Component {
    state={
        // selected : 'move',
    }

    onSelected = (event)=>{
       
        // console.log("event.value", event.value);
        // let changeTo = event.target.value;
        // this.setState({selected: changeTo});
        // ?? why not change??
        // console.log("this.state.selected", this.state.selected);
        // console.log("event.target.value", event.target.value);

        this.props.onShelfChange(event.target.value);

    }

    
    render() {
        // rewrite 

        return (
            <div className="book-shelf-changer">
                {/* <select onSubmit={() => this.props.onShelfChange( , value}> */}
                <select onChange={this.onSelected} value="move">
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

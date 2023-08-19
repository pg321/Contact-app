import React from 'react';

class AddContaact extends React.Component{
    state = {
        name: "",
        email:"",
    }; 
        add = (e) => {
            e.preventDefault();
            if(this.state.name === "" ||this.state.name === ""){
                alert("All the fields are Mandatory!");
                return
            }
                this.props.addContactHandler(this.state);
                this.setState({name:"", email:""});
                console.log(this.props + "hi" );
                //this.props.navigate('/')
    


            }
    render() {
        return(
            <div className="ui fixed main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" 
                        value = {this.state.name} 
                        onChange={ (e) => this.setState({ name: e.target.value }) }
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Email" 
                        value = {this.state.email} 
                        onChange={ (e) => this.setState({ email: e.target.value }) }
                        />
                    </div>
                    <button className="ui button blue">ADD</button>
                </form>
            </div>
        )
    }
}

export default AddContaact;

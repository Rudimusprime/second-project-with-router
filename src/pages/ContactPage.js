import React from 'react';
import '../styles/ContactPage.css'

class ContactPage extends React.Component {

    state = {
        value: "",
    }

    handleChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })

    }

    render() {
        return (
            <>
                <div className="contact">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Napisz do nas!</h3>
                        <textarea placeholder="Wpisz wiadomość..."
                                  value={this.state.value}
                                  onChange={this.handleChange}/>
                        <button>Wyślij</button>
                    </form>
                </div>
            </>
        );
    }
}

export default ContactPage;
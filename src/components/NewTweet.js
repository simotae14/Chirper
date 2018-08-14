import React, { Component } from "react";

class NewTweet extends Component {
    state = {
        text: ''
    }
    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }));
    }
    handleSubmit = (e) => {
        e.preventDefault();

        // recupero il testo
        const { text } = this.state;

        // TODO: add tweet to the store

        console.log('New Tweet: ', text);

        this.setState(() => ({
            text: ''
        }));
    }
    render () {
        const { text } = this.state;
        { /* TODO: redirect to / if submitted */ }
        const tweetLeft = 280 - text.length;
        return (
            <div>
                <h3 className='center'>
                    Compose new Tweet
                </h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                    {
                        tweetLeft <= 100 && (
                            <div className='tweetLength'>
                                { tweetLeft }
                            </div>
                        )
                    }
                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NewTweet;
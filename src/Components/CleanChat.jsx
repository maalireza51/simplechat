import React, { Component } from 'react'
import Heading from './Heading'
import Body from './Body'
import Footer from './Footer'
import { messageGenerator } from '../faker'

export default class CleanChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Chat',
            chatsList: messageGenerator(10),
            gravatars: {
                user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
                user2: "https://bootdey.com/img/Content/avatar/avatar2.png"
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(message) {
        console.log(message);
        this.setState(state => {
            return {
                ...state,
                chatsList: [
                    ...state.chatsList,
                    { type: 'sent', message, time: new Date().toLocaleTimeString() },
                ]
            }
        })
    }

    handleScroll(e){

    }

    render() {
        return (
            <div className="container bootstrap snippets">
                <div className="col-md-7 col-xs-12 col-md-offset-2">
                    <div className="panel" id="chat">
                        <Heading title={this.state.title} />
                        <Body
                            handleScroll={this.handleScroll}
                            chatsList={this.state.chatsList}
                            gravatars={this.state.gravatars} />
                        <Footer handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

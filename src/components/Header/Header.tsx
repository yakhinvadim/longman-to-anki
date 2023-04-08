import { Alert, AlertTitle } from '@material-ui/lab'
import React, { PureComponent } from 'react'
import GithubCorner from 'react-github-corner'

export default class Header extends PureComponent {
    render() {
        return (
            <>
                <GithubCorner
                    href="https://github.com/yakhinvadim/longman-to-anki"
                    bannerColor="#3f51b5"
                />
                <Alert severity="info">
                    <AlertTitle>
                        👋 Hi! I'm Vadim, the creator of Longman to Anki. I have
                        a favor to ask.
                    </AlertTitle>
                    <br />I recently started a new project called{' '}
                    <strong>The News Minimalist</strong>, aimed at helping
                    people stay informed without feeling overwhelmed. Every day,
                    I use ChatGPT to analyze the top 1000 news stories and
                    select the most important ones. Then, I send a summary email
                    to my subscribers.
                    <br />
                    <br />
                    If you're interested, please{' '}
                    <a href="https://www.newsminimalist.com/subscribe">
                        support me by subscribing
                    </a>
                    ! And if you like it, please share it with your friends!
                    <br />
                    <br />
                    Thank you!
                </Alert>
                <header>
                    <h1>Longman to Anki</h1>
                    <p>A web app to help you learn English with Anki</p>
                </header>
            </>
        )
    }
}

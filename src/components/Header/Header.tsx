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
                <header>
                    <h1>Longman to Anki</h1>
                    <p>A web app to help you learn English with Anki</p>
                </header>
            </>
        )
    }
}

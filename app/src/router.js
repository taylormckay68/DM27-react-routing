import React from 'react';
import Home from './Home.js'
import About from './About.js'
import Faq from './FAQ.js'
import {Switch, Route} from 'react-router-dom';
import People from './People.js';
import Person from './Person.js';
import Company from './Company.js';


export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/about" render={() => {
            return (
                <About>
                    <Switch>
                        <Route path="/about/company" component={Company}/>
                        <Route path="/about/faq" component={Faq}/>
                    </Switch>
                </About>
            )
        }}/>
        <Route path="/people/:id" component={Person}/>
        <Route path="/people" component={People}/>
    </Switch>
)
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
    main {
        height: 100%;
        width: 100%;
    }
    div.optionContainer {
        width: 100%;
        background-color: yellow;
        display: block;
    }
    .button {
        height: 50px;

    }
    nav {
        width: 100%;
        height: 80px;
        display: flex;
    }


`;

class Stores extends Component {
    state = {  }
    render() { 
        return (
            <main>
                <div className="optionContainer">
                    <div style={{padding: "20px 80px", alignItems: "center"}}>
                        <nav>
                            <div>
                                <div>
                                    <Button>Delivery</Button>
                                </div>
                            </div>
                            <div style={{width: 16, height: 1}} />
                            <div>
                                <div>
                                    <Button>Delivery</Button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
          );
    }
}
 
export default Stores;
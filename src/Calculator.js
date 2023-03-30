import React, { Component } from 'react'
import './Calculator.css'

var result = 0.0;
var currentMode = true;

export default class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            resultText: '0',
            btns: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            lastOper: '',
            lastMovedPanel: null,
            currentMode: true,
        };

        this.addingDigits = this.addingDigits.bind(this);
        this.clickedBtn = this.clickedBtn.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEndonRight = this.dragEndonRight.bind(this);
        this.dragEndonLeft = this.dragEndonLeft.bind(this);
        this.editModeontrue = this.editModeontrue.bind(this);
        this.editModeonfalse = this.editModeonfalse.bind(this);
        this.operPanel = React.createRef();
        this.eqvaPanel = React.createRef();
        this.btnPanel = React.createRef();
        this.resultPanel = React.createRef();
        this.rightSide = React.createRef();
        this.leftSide = React.createRef();
    }


    editModeontrue(e) {
            currentMode = true;
            console.log(currentMode);
    }

    editModeonfalse(e) {
        currentMode = false;
        console.log(currentMode);
    }

    dragStart(e, draggingRef) {
        this.setState({
            lastMovedPanel: draggingRef
        })
    }

    dragEndonLeft(e) {
        this.leftSide.current.appendChild(this.state.lastMovedPanel.current)
    }

    dragEndonRight(e) {
        this.rightSide.current.appendChild(this.state.lastMovedPanel.current)
    }

    addingDigits(a, b) {
        let c
        if (a[0] === '0') {
            c = b
        }
        else {
            c = a + b
        }
        return (
            c
        )
    }

    clickedBtn(e, item) {
        if (this.state.lastOper === '=') {
            this.setState({
                resultText: '0',
                lastOper: ''
            })
        }
        switch (item) {
            case '0':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '1':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '2':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '3':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '4':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '5':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '6':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '7':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '8':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '9':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '.':
                this.setState({
                    resultText: this.addingDigits(this.state.resultText, item)
                })
                break;
            case '+':
                result += parseFloat(this.state.resultText)
                this.setState({
                    lastOper: '+',
                    resultText: '0'
                })
                break;
            case '-':
                result += parseFloat(this.state.resultText)
                this.setState({
                    lastOper: '-',
                    resultText: '0'
                })
                break;
            case '*':
                result += parseFloat(this.state.resultText)
                this.setState({
                    lastOper: '*',
                    resultText: '0'
                })
                break;
            case '/':
                result += parseFloat(this.state.resultText)
                this.setState({
                    lastOper: '/',
                    resultText: '0'
                })
                break;
            case '=':
                if (this.state.lastOper === '+') {
                    this.state.resultText = result + parseFloat(this.state.resultText);
                }
                if (this.state.lastOper === '-') {
                    this.state.resultText = result - parseFloat(this.state.resultText);
                }
                if (this.state.lastOper === '*') {
                    this.state.resultText = result * parseFloat(this.state.resultText);
                }
                if (this.state.lastOper === '/') {
                    this.state.resultText = result / parseFloat(this.state.resultText);
                }
                this.setState({
                    lastOper: '=',
                })
                result = 0.0;
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <div className='EmptyBody'>
                    <div>

                    </div>
                    <div className='btnPanel'>
                        <div className='modeBtn' onClick={(e) => this.editModeontrue(e)}>Constructor</div>
                        <div className='modeBtn' onClick={(e) => this.editModeonfalse(e)}>Runtime</div>
                    </div>
                </div>
                <div className='Mainbody'>
                    <div
                        className='leftBody'
                        // onDragEnter={(e) => this.dragEndonLeft(e, 'end')}
                        ref={this.leftSide}
                    >
                        <div
                            className="resultWnd"
                            ref={this.resultPanel}
                            onDragStart={(e) => this.dragStart(e, this.resultPanel)}
                            draggable={currentMode}
                        >
                            <strong>{this.state.resultText}</strong>
                        </div>
                        <div
                            className="operatorsWrapper"
                            draggable={currentMode}
                            onDragStart={(e) => this.dragStart(e, this.operPanel)}
                            ref={this.operPanel}
                        >
                            <button className='operBtn'
                                onClick={(e) => this.clickedBtn(e, '+')}
                            >
                                {'+'}
                            </button>
                            <button className='operBtn'
                                onClick={(e) => this.clickedBtn(e, '-')}
                            >
                                {'-'}
                            </button>
                            <button className='operBtn'
                                onClick={(e) => this.clickedBtn(e, '*')}
                            >
                                {'*'}
                            </button>
                            <button className='operBtn'
                                onClick={(e) => this.clickedBtn(e, '/')}
                            >
                                {'/'}
                            </button>
                        </div>
                        <div
                            className='BtnPanel'
                            ref={this.btnPanel}
                            onDragStart={(e) => this.dragStart(e, this.btnPanel)}
                            draggable={currentMode}
                        >
                            <div className="calcBtnWrapper">
                                {
                                    this.state.btns.map((item, i) => {
                                        return (
                                            <button
                                                className='calcBtn'
                                                onClick={(e) => this.clickedBtn(e, item)}
                                            >
                                                {item}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <div className='zeroBtnWrapper'>
                                <button
                                    className='zeroBtn'
                                    onClick={(e) => this.clickedBtn(e, '0')}
                                >
                                    {'0'}
                                </button>
                                <button
                                    className='zeroBtn'
                                    onClick={(e) => this.clickedBtn(e, '.')}
                                >
                                    {','}
                                </button>
                            </div>
                        </div>
                        <button className='eqvalbtn'
                            onClick={(e) => this.clickedBtn(e, '=')}
                            ref={this.eqvaPanel}
                            onDragStart={(e) => this.dragStart(e, this.eqvaPanel)}
                            draggable={currentMode}
                        >
                            {'='}
                        </button>
                    </div>
                    <div
                        className='rightBody'
                        onDragEnter={(e) => this.dragEndonRight(e, 'end')}
                        ref={this.rightSide}
                    >
                        
                    </div>
                </div>
            </div>
        )
    }
}

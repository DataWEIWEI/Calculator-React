import React, { Component } from 'react';
import { connect } from 'react-redux';
import OperactionButton from '../calculator/operationButton';
import Base from './base';
import DigitButton from '../calculator/digitButton';
import ACTIONS from '../../redux/action';

class Calculator extends Component {
    state = { 
        formater: Intl.NumberFormat('en-US'),
    } 
    
    format = number => {
        if (!number)
            return '';
        const [integer, decimal] = number.split('.');
        if (decimal === undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`
    }

    render() { 
        return (
            <Base>
                <div className='calculator'>
                    <div className="output">
                        <div className="last-output">
                            {this.format(this.props.lastOperand)} {this.props.operation}
                        </div>
                        <div className="current-output">
                            {this.format(this.props.currentOperand)}
                        </div>
                    </div>
                    <button onClick={this.props.clear} className='button-ac'>AC</button>
                    <button onClick={this.props.delete_digit}>Del</button>
                    <OperactionButton operation={'÷'} />
                    <DigitButton digit={"7"} />
                    <DigitButton digit={"8"} />
                    <DigitButton digit={"9"} />
                    <OperactionButton operation={'×'} />
                    <DigitButton digit={"4"} />
                    <DigitButton digit={"5"} />
                    <DigitButton digit={"6"} />
                    <OperactionButton operation={'-'} />
                    <DigitButton digit={"1"} />
                    <DigitButton digit={"2"} />
                    <DigitButton digit={"3"} />
                    <OperactionButton operation={'+'} />
                    <DigitButton digit={"0"} />
                    <DigitButton digit={"."} />
                    <button onClick={ this.props.evaluate } className='button-equal'>=</button>
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
}

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
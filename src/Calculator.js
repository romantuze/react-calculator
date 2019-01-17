import React, { Component } from 'react'

class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<div className="display">{this.props.current || 0}</div>
			 	<div onClick={() => this.props.clear()} className="count">C</div>
			 	<div onClick={() => this.props.sign()} className="count">+/-</div>
				<div onClick={() => this.props.percent()} className="count">%</div>   
			    <div onClick={() => this.props.divide} className="count">/</div>
			    <div onClick={() => this.props.append(7)} className="count">7</div>
			    <div onClick={() => this.props.append(8)} className="count">8</div>
			    <div onClick={() => this.props.append(9)} className="count">9</div>
			    <div onClick={() => this.props.times()} className="count">x</div>
			    <div onClick={() => this.props.append(4)} className="count">4</div>
			    <div onClick={() => this.props.append(5)} className="count">5</div>
			    <div onClick={() => this.props.append(6)} className="count">6</div>
			    <div onClick={() => this.props.minus()} className="count">-</div>
				<div onClick={() => this.props.append(1)} className="count">1</div>
				<div onClick={() => this.props.append(2)} className="count">2</div>
				<div onClick={() => this.props.append(3)} className="count">3</div>  
			    <div onClick={() => this.props.add()} className="count">+</div>
			    <div onClick={() => this.props.append(0)} className="count zero">0</div>
			    <div onClick={() => this.props.dot()} className="count">.</div>
			    <div onClick={() => this.props.equal()} className="count">=</div>
			</div>	
		)
	}
}

export default Calculator;
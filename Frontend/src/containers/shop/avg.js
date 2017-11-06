import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getAvgRating} from '../../actions';

class Avg extends Component {
	componentDidMount(){
		const {id} = this.props;
		this.props.getAvgRating(id);
	}
	render(){
		const {value} = this.props.avgrating;
		return(
			<div>{value?(<h4>{value}</h4>):("")}</div>
		);
	}
}
function mapStateToProps(state){
	return {
		avgrating:state.avgrating
	}
}

export default connect (mapStateToProps,{getAvgRating})(Avg);
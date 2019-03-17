import React from 'react'

import ParameterInputRender from './ParameterInputRender'

import { getUnitFromType, convertToChain } from 'utils/helper'

export default class ParameterInput extends React.Component {
  state = {
    value: this.props.value,
    unit: getUnitFromType(this.props.type),
  }

  changeUnit(unit) {
    this.setState({ unit })
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    if (e.target.value === '') {
      this.props.handleParameterChange(null)
    } else {
      this.props.handleParameterChange(
        convertToChain(e.target.value, this.props.type, this.state.unit),
      )
    }
  }

  render() {
    return (
      <ParameterInputRender
        value={this.state.value || this.props.value}
        unit={this.state.unit}
        type={this.props.type}
        onChangeUnit={this.changeUnit.bind(this)}
        handleParameterChange={this.handleChange.bind(this)}
      />
    )
  }
}
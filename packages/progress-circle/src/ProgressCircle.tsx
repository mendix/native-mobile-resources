import React, { Component } from "react";
import { Circle } from "react-native-progress";
import { ProgressCircleProps } from "../typings/ProgressCircleProps";

export class ProgressCircle extends Component<ProgressCircleProps> {
    private get progress(): number {
        const { progressMax, progressValue } = this.props;
        const max = progressMax && progressMax.value != null ? Number(progressMax.value) : 100;
        const value = progressValue && progressValue.value != null ? Number(progressValue.value) : 0;

        if (this.props.indeterminate || max === 0) {
            return 0;
        }

        return value / max;
    }

    render(): JSX.Element {
        return (
            <Circle
                progress={this.progress}
                indeterminate={this.props.indeterminate}
                animated={this.props.animated}
                {...(this.props.color ? { color: this.props.color } : {})}
                {...(this.props.unfilledColor ? { color: this.props.unfilledColor } : {})}
                {...(this.props.borderColor ? { color: this.props.borderColor } : {})}
                borderWidth={this.props.borderWidth}
                size={this.props.size}
                thickness={this.props.thickness}
                showsText={this.props.showsText}
            />
        );
    }
}

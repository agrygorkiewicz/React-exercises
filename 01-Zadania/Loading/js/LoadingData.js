import React, {Component} from "react";

class LoadingData extends Component {
    state = {
        progress: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(({progress}) => {
                if (progress === 100) {
                    clearInterval(this.interval);
                    return;
                }

                return {
                    progress: progress + 1
                };
            });
        }, 80);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {progress} = this.state;

        if (progress === 100) {
            return <h1>Dane załadowane!</h1>;
        }

        return (
            <div className="progress">
                <div className="progress-bar" style={{width: `${progress}%`}}/>
            </div>
        );
    }
}

export default LoadingData;
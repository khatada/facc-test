import * as React from "react";
import * as ReactDOM from "react-dom";


class Container extends React.Component<{}, {}> {
    render() {
        const children = this.props.children as Function;
        return <div>
            {children({ foo: "bar" })}
        </div>
    }
}

class Timer extends React.Component<{ interval: number }, {}> {
    private timer = null;
    state = {
        now: new Date()
    };

    onTimer = () => {
        this.setState({ now: new Date() });
        this.timer = setTimeout(this.onTimer, this.props.interval);
    };

    componentWillMount() {
        this.onTimer();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const children = this.props.children as Function;
        return children({ ...this.state, ...this.props });
    }
}

class App extends React.Component<{}, {}> {
    render() {
        return <Timer interval={1000}>
            {({ now }) => <div>Timer {now.toLocaleTimeString()}</div>}
        </Timer>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
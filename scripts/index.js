var Pulse = React.createClass({ displayName: 'Pulse',

	propTypes: {
		delay: React.PropTypes.number },


	getDefaultProps: function getDefaultProps() {
		return {
			delay: 0 };

	},

	getInitialState: function getInitialState() {
		return {
			pulsing: false };

	},

	componentDidMount: function componentDidMount() {
		this.schedulePulse(this.props.delay);
	},

	schedulePulse: function schedulePulse() {var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
		setTimeout(this.startPulse, delay);
	},

	startPulse: function startPulse() {
		this.setState({ pulsing: true });
	},

	onPulseEnd: function onPulseEnd() {
		$(this.refs.pulse).addClass('reset');
		this.setState({ pulsing: false });
		this.schedulePulse();
	},

	render: function render() {
		return (
			React.createElement('div', { ref: 'pulse',
					onTransitionEnd: this.onPulseEnd,
					className: this.getPulseClasses() },
				this.props.children,
				this.renderPulse()));


	},

	getPulseClasses: function getPulseClasses() {
		return 'shape-wrapper' + (this.state.pulsing ? ' pulsing' : '');
	},

	renderPulse: function renderPulse() {
		return (
			React.createElement('div', { className: 'shape-pulse' },
				this.getClonedChild()));


	},

	getClonedChild: function getClonedChild() {
		return React.cloneElement(this.props.children);
	} });



var Root = React.createClass({ displayName: 'Root',
	render: function render() {
		return (
			React.createElement('div', { id: 'root-element' },
				this.renderCircle(),
				this.renderHeart(),
				this.renderSquare()));


	},

	renderCircle: function renderCircle() {
		return (
			React.createElement('div', { className: 'shape-container' },
				React.createElement(Pulse, { delay: 1000 },
					React.createElement('div', { className: 'shape circle' }))));



	},

	renderHeart: function renderHeart() {
		return (
			React.createElement('div', { className: 'shape-container' },
				React.createElement(Pulse, { delay: 1200 },
					React.createElement('div', { className: 'shape heart' },
						React.createElement('div', null),
						React.createElement('div', null),
						React.createElement('div', null)))));




	},

	renderSquare: function renderSquare() {
		return (
			React.createElement('div', { className: 'shape-container' },
				React.createElement(Pulse, { delay: 1400 },
					React.createElement('div', { className: 'shape square' }))));



	} });


ReactDOM.render(React.createElement(Root, null), document.body);
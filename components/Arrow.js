'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bindme = require('bindme');

var _bindme2 = _interopRequireDefault(_bindme);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrow = function (_React$Component) {
  _inherits(Arrow, _React$Component);

  function Arrow(props) {
    _classCallCheck(this, Arrow);

    var _this = _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).call(this, props));

    (0, _bindme2.default)(_this, 'onMouseDown', 'onMouseEnter', 'onMouseLeave');

    _this.state = { isMouseOver: false };
    return _this;
  }

  _createClass(Arrow, [{
    key: 'onMouseDown',
    value: function onMouseDown() {
      // TODO selectArrow
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      this.setState({ isMouseOver: true });
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.setState({ isMouseOver: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _Step$defaultProps$st = _Step2.default.defaultProps.style,
          stroke = _Step$defaultProps$st.stroke,
          strokeWidth = _Step$defaultProps$st.strokeWidth;
      var isMouseOver = this.state.isMouseOver;


      if (isMouseOver) strokeWidth++;

      return _react2.default.createElement('path', {
        d: 'M295 50 h100 v20 h50 v20',
        fill: 'none',
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        stroke: stroke,
        strokeWidth: strokeWidth,
        markerEnd: 'url(#arrow)'
      });
    }
  }]);

  return Arrow;
}(_react2.default.Component);

exports.default = Arrow;
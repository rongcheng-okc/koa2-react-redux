"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var index =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(index, _Component);

    function index(props) {
      var _this;

      _classCallCheck(this, index);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(index).call(this, props)
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        name: "Okc_Rongcheng"
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick1", function(
        value,
        e
      ) {
        // 这里参数的位置和调用处的一致
        alert(e.target.tagName);

        _this.setState({
          name: "Thunder up !" + value
        });
      });

      return _this;
    }

    _createClass(index, [
      {
        key: "handleClick2",
        value: function handleClick2(value, e) {
          alert(e.target.tagName);
          this.setState({
            name: "Thunder up !" + value
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var name = this.state.name;
          return _react.default.createElement(
            "div",
            null,
            _react.default.createElement(
              "button",
              {
                onClick: function onClick(e) {
                  return _this2.handleClick1(123, e);
                }
              },
              "\u96F7\u9706\u4F60\u600E\u4E48\u4E86\uFF1F"
            ),
            _react.default.createElement(
              "button",
              {
                onClick: this.handleClick2.bind(this, 234)
              },
              "\u96F7\u9706\u4E0D\u5728\u5E74\u8F7B\u4E86"
            ),
            _react.default.createElement("p", null, name)
          );
        }
      }
    ]);

    return index;
  })(_react.Component);

index.propTypes = {};
var _default = index;
exports.default = _default;

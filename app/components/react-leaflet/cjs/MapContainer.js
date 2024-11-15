"use strict";

exports.__esModule = true;
exports.useMapElement = useMapElement;
exports.MapContainer = MapContainer;

var _core = require("@react-leaflet/core");

var _leaflet = require("leaflet");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function useMapElement(mapRef, props) {
  const [map, setMap] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new _leaflet.Map(mapRef.current, props);

      if (props.center != null && props.zoom != null) {
        instance.setView(props.center, props.zoom);
      } else if (props.bounds != null) {
        instance.fitBounds(props.bounds, props.boundsOptions);
      }

      if (props.whenReady != null) {
        instance.whenReady(props.whenReady);
      }

      setMap(instance);
    }
  }, [mapRef, map, props]);
  return map;
}

function MapContainer({
  children,
  className,
  id,
  placeholder,
  style,
  whenCreated,
  ...options
}) {
  const mapRef = (0, _react.useRef)(null);
  const map = useMapElement(mapRef, options);
  const createdRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    if (map != null && createdRef.current === false && whenCreated != null) {
      createdRef.current = true;
      whenCreated(map);
    }
  }, [map, whenCreated]);
  const [props] = (0, _react.useState)({
    className,
    id,
    style,
  });
  const context = (0, _react.useMemo)(
    () =>
      map
        ? {
            __version: _core.CONTEXT_VERSION,
            map,
          }
        : null,
    [map]
  );
  const contents = context
    ? /*#__PURE__*/ _react.default.createElement(
        _core.LeafletProvider,
        {
          value: context,
        },
        children
      )
    : placeholder ?? null;
  return /*#__PURE__*/ _react.default.createElement(
    "div",
    _extends({}, props, {
      ref: mapRef,
    }),
    contents
  );
}

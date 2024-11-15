(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("react"),
        require("leaflet"),
        require("react-dom")
      )
    : typeof define === "function" && define.amd
    ? define(["exports", "react", "leaflet", "react-dom"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory(
        (global.ReactLeaflet = {}),
        global.React,
        global.L,
        global.ReactDOM
      ));
})(this, function (exports, React, leaflet, reactDom) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  function useAttribution(map, attribution) {
    const attributionRef = React.useRef(attribution);
    React.useEffect(
      function updateAttribution() {
        if (
          attribution !== attributionRef.current &&
          map.attributionControl != null
        ) {
          if (attributionRef.current != null) {
            map.attributionControl.removeAttribution(attributionRef.current);
          }

          if (attribution != null) {
            map.attributionControl.addAttribution(attribution);
          }
        }

        attributionRef.current = attribution;
      },
      [map, attribution]
    );
  }

  function updateCircle(layer, props, prevProps) {
    if (props.center !== prevProps.center) {
      layer.setLatLng(props.center);
    }

    if (props.radius != null && props.radius !== prevProps.radius) {
      layer.setRadius(props.radius);
    }
  }

  const CONTEXT_VERSION = 1;
  const LeafletContext = /*#__PURE__*/ React.createContext(null);
  const LeafletProvider = LeafletContext.Provider;
  function useLeafletContext() {
    const context = React.useContext(LeafletContext);

    if (context == null) {
      throw new Error(
        "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
      );
    }

    return context;
  }

  function createContainerComponent(useElement) {
    function ContainerComponent(props, ref) {
      const { instance, context } = useElement(props).current;
      React.useImperativeHandle(ref, () => instance);
      return props.children == null
        ? null
        : /*#__PURE__*/ React__default["default"].createElement(
            LeafletProvider,
            {
              value: context,
            },
            props.children
          );
    }

    return /*#__PURE__*/ React.forwardRef(ContainerComponent);
  }
  function createDivOverlayComponent(useElement) {
    function OverlayComponent(props, ref) {
      const [isOpen, setOpen] = React.useState(false);
      const { instance } = useElement(props, setOpen).current;
      React.useImperativeHandle(ref, () => instance);
      React.useEffect(
        function updateOverlay() {
          if (isOpen) {
            instance.update();
          }
        },
        [instance, isOpen, props.children]
      ); // @ts-ignore _contentNode missing in type definition

      const contentNode = instance._contentNode;
      return contentNode
        ? /*#__PURE__*/ reactDom.createPortal(props.children, contentNode)
        : null;
    }

    return /*#__PURE__*/ React.forwardRef(OverlayComponent);
  }
  function createLeafComponent(useElement) {
    function LeafComponent(props, ref) {
      const { instance } = useElement(props).current;
      React.useImperativeHandle(ref, () => instance);
      return null;
    }

    return /*#__PURE__*/ React.forwardRef(LeafComponent);
  }

  function createControlHook(useElement) {
    return function useLeafletControl(props) {
      const context = useLeafletContext();
      const elementRef = useElement(props, context);
      const { instance } = elementRef.current;
      const positionRef = React.useRef(props.position);
      const { position } = props;
      React.useEffect(
        function addControl() {
          instance.addTo(context.map);
          return function removeControl() {
            instance.remove();
          };
        },
        [context.map, instance]
      );
      React.useEffect(
        function updateControl() {
          if (position != null && position !== positionRef.current) {
            instance.setPosition(position);
            positionRef.current = position;
          }
        },
        [instance, position]
      );
      return elementRef;
    };
  }

  function useEventHandlers(element, eventHandlers) {
    const eventHandlersRef = React.useRef();
    React.useEffect(
      function addEventHandlers() {
        if (eventHandlers != null) {
          element.instance.on(eventHandlers);
        }

        eventHandlersRef.current = eventHandlers;
        return function removeEventHandlers() {
          if (eventHandlersRef.current != null) {
            element.instance.off(eventHandlersRef.current);
          }

          eventHandlersRef.current = null;
        };
      },
      [element, eventHandlers]
    );
  }

  function withPane(props, context) {
    const pane = props.pane ?? context.pane;
    return pane ? { ...props, pane } : props;
  }

  function createDivOverlayHook(useElement, useLifecycle) {
    return function useDivOverlay(props, setOpen) {
      const context = useLeafletContext();
      const elementRef = useElement(withPane(props, context), context);
      useAttribution(context.map, props.attribution);
      useEventHandlers(elementRef.current, props.eventHandlers);
      useLifecycle(elementRef.current, context, props, setOpen);
      return elementRef;
    };
  }

  function splitClassName(className) {
    return className.split(" ").filter(Boolean);
  }

  function addClassName(element, className) {
    splitClassName(className).forEach((cls) => {
      leaflet.DomUtil.addClass(element, cls);
    });
  }

  function createElementHook(createElement, updateElement) {
    if (updateElement == null) {
      return function useImmutableLeafletElement(props, context) {
        return React.useRef(createElement(props, context));
      };
    }

    return function useMutableLeafletElement(props, context) {
      const elementRef = React.useRef(createElement(props, context));
      const propsRef = React.useRef(props);
      const { instance } = elementRef.current;
      React.useEffect(
        function updateElementProps() {
          if (propsRef.current !== props) {
            updateElement(instance, props, propsRef.current);
            propsRef.current = props;
          }
        },
        [instance, props, context]
      );
      return elementRef;
    };
  }

  function useLayerLifecycle(element, context) {
    React.useEffect(
      function addLayer() {
        const container = context.layerContainer ?? context.map;
        container.addLayer(element.instance);
        return function removeLayer() {
          var _context$layersContro;

          (_context$layersContro = context.layersControl) == null
            ? void 0
            : _context$layersContro.removeLayer(element.instance);
          context.map.removeLayer(element.instance);
        };
      },
      [context, element]
    );
  }
  function createLayerHook(useElement) {
    return function useLayer(props) {
      const context = useLeafletContext();
      const elementRef = useElement(withPane(props, context), context);
      useAttribution(context.map, props.attribution);
      useEventHandlers(elementRef.current, props.eventHandlers);
      useLayerLifecycle(elementRef.current, context);
      return elementRef;
    };
  }

  function usePathOptions(element, props) {
    const optionsRef = React.useRef();
    React.useEffect(
      function updatePathOptions() {
        if (props.pathOptions !== optionsRef.current) {
          const options = props.pathOptions ?? {};
          element.instance.setStyle(options);
          optionsRef.current = options;
        }
      },
      [element, props]
    );
  }
  function createPathHook(useElement) {
    return function usePath(props) {
      const context = useLeafletContext();
      const elementRef = useElement(withPane(props, context), context);
      useEventHandlers(elementRef.current, props.eventHandlers);
      useLayerLifecycle(elementRef.current, context);
      usePathOptions(elementRef.current, props);
      return elementRef;
    };
  }

  function createControlComponent(createInstance) {
    function createElement(props, context) {
      return {
        instance: createInstance(props),
        context,
      };
    }

    const useElement = createElementHook(createElement);
    const useControl = createControlHook(useElement);
    return createLeafComponent(useControl);
  }
  function createLayerComponent(createElement, updateElement) {
    const useElement = createElementHook(createElement, updateElement);
    const useLayer = createLayerHook(useElement);
    return createContainerComponent(useLayer);
  }
  function createOverlayComponent(createElement, useLifecycle) {
    const useElement = createElementHook(createElement);
    const useOverlay = createDivOverlayHook(useElement, useLifecycle);
    return createDivOverlayComponent(useOverlay);
  }
  function createPathComponent(createElement, updateElement) {
    const useElement = createElementHook(createElement, updateElement);
    const usePath = createPathHook(useElement);
    return createContainerComponent(usePath);
  }
  function createTileLayerComponent(createElement, updateElement) {
    const useElement = createElementHook(createElement, updateElement);
    const useLayer = createLayerHook(useElement);
    return createLeafComponent(useLayer);
  }

  function updateGridLayer(layer, props, prevProps) {
    const { opacity, zIndex } = props;

    if (opacity != null && opacity !== prevProps.opacity) {
      layer.setOpacity(opacity);
    }

    if (zIndex != null && zIndex !== prevProps.zIndex) {
      layer.setZIndex(zIndex);
    }
  }

  function updateMediaOverlay(overlay, props, prevProps) {
    if (
      props.bounds instanceof leaflet.LatLngBounds &&
      props.bounds !== prevProps.bounds
    ) {
      overlay.setBounds(props.bounds);
    }

    if (props.opacity != null && props.opacity !== prevProps.opacity) {
      overlay.setOpacity(props.opacity);
    }

    if (props.zIndex != null && props.zIndex !== prevProps.zIndex) {
      // @ts-ignore missing in definition but inherited from ImageOverlay
      overlay.setZIndex(props.zIndex);
    }
  }

  function useMap() {
    return useLeafletContext().map;
  }
  function useMapEvent(type, handler) {
    const map = useMap();
    React.useEffect(
      function addMapEventHandler() {
        // @ts-ignore event type
        map.on(type, handler);
        return function removeMapEventHandler() {
          // @ts-ignore event type
          map.off(type, handler);
        };
      },
      [map, type, handler]
    );
    return map;
  }
  function useMapEvents(handlers) {
    const map = useMap();
    React.useEffect(
      function addMapEventHandlers() {
        map.on(handlers);
        return function removeMapEventHandlers() {
          map.off(handlers);
        };
      },
      [map, handlers]
    );
    return map;
  }

  const AttributionControl = createControlComponent(
    function createAttributionControl(props) {
      return new leaflet.Control.Attribution(props);
    }
  );

  const Circle = createPathComponent(function createCircle(
    { center, children: _c, ...options },
    ctx
  ) {
    const instance = new leaflet.Circle(center, options);
    return {
      instance,
      context: { ...ctx, overlayContainer: instance },
    };
  },
  updateCircle);

  const CircleMarker = createPathComponent(function createCircleMarker(
    { center, children: _c, ...options },
    ctx
  ) {
    const instance = new leaflet.CircleMarker(center, options);
    return {
      instance,
      context: { ...ctx, overlayContainer: instance },
    };
  },
  updateCircle);

  const FeatureGroup = createPathComponent(function createFeatureGroup(
    { children: _c, ...options },
    ctx
  ) {
    const instance = new leaflet.FeatureGroup([], options);
    const context = {
      ...ctx,
      layerContainer: instance,
      overlayContainer: instance,
    };
    return {
      instance,
      context,
    };
  });

  const GeoJSON = createPathComponent(
    function createGeoJSON({ data, ...options }, ctx) {
      const instance = new leaflet.GeoJSON(data, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updateGeoJSON(layer, props, prevProps) {
      if (props.style !== prevProps.style) {
        if (props.style == null) {
          layer.resetStyle();
        } else {
          layer.setStyle(props.style);
        }
      }
    }
  );

  const ImageOverlay = createLayerComponent(
    function createImageOveraly({ bounds, url, ...options }, ctx) {
      const instance = new leaflet.ImageOverlay(url, bounds, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updateImageOverlay(overlay, props, prevProps) {
      updateMediaOverlay(overlay, props, prevProps);

      if (props.url !== prevProps.url) {
        overlay.setUrl(props.url);
      }
    }
  );

  const LayerGroup = createLayerComponent(function createLayerGroup(
    { children: _c, ...options },
    ctx
  ) {
    const instance = new leaflet.LayerGroup([], options);
    return {
      instance,
      context: { ...ctx, layerContainer: instance },
    };
  });

  const useLayersControlElement = createElementHook(
    function createLayersControl({ children: _c, ...options }, ctx) {
      const instance = new leaflet.Control.Layers(
        undefined,
        undefined,
        options
      );
      return {
        instance,
        context: { ...ctx, layersControl: instance },
      };
    },
    function updateLayersControl(control, props, prevProps) {
      if (props.collapsed !== prevProps.collapsed) {
        if (props.collapsed === true) {
          control.collapse();
        } else {
          control.expand();
        }
      }
    }
  );
  const useLayersControl = createControlHook(useLayersControlElement);
  // @ts-ignore
  const LayersControl = createContainerComponent(useLayersControl);
  function createControlledLayer(addLayerToControl) {
    return function ControlledLayer(props) {
      const parentContext = useLeafletContext();
      const propsRef = React.useRef(props);
      const [layer, setLayer] = React.useState(null);
      const { layersControl, map } = parentContext;
      const addLayer = React.useCallback(
        (layerToAdd) => {
          if (layersControl != null) {
            if (propsRef.current.checked) {
              map.addLayer(layerToAdd);
            }

            addLayerToControl(layersControl, layerToAdd, propsRef.current.name);
            setLayer(layerToAdd);
          }
        },
        [layersControl, map]
      );
      const removeLayer = React.useCallback(
        (layerToRemove) => {
          layersControl == null
            ? void 0
            : layersControl.removeLayer(layerToRemove);
          setLayer(null);
        },
        [layersControl]
      );
      const context = React.useMemo(
        () => ({
          ...parentContext,
          layerContainer: {
            addLayer,
            removeLayer,
          },
        }),
        [parentContext, addLayer, removeLayer]
      );
      React.useEffect(() => {
        if (layer !== null && propsRef.current !== props) {
          if (
            props.checked === true &&
            (propsRef.current.checked == null ||
              propsRef.current.checked === false)
          ) {
            map.addLayer(layer);
          } else if (
            propsRef.current.checked === true &&
            (props.checked == null || props.checked === false)
          ) {
            map.removeLayer(layer);
          }

          propsRef.current = props;
        }
      });
      return props.children
        ? /*#__PURE__*/ React__default["default"].createElement(
            LeafletProvider,
            {
              value: context,
            },
            props.children
          )
        : null;
    };
  }
  LayersControl.BaseLayer = createControlledLayer(function addBaseLayer(
    layersControl,
    layer,
    name
  ) {
    layersControl.addBaseLayer(layer, name);
  });
  LayersControl.Overlay = createControlledLayer(function addOverlay(
    layersControl,
    layer,
    name
  ) {
    layersControl.addOverlay(layer, name);
  });

  function MapConsumer({ children }) {
    return children(useMap());
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
    const [map, setMap] = React.useState(null);
    React.useEffect(() => {
      if (mapRef.current !== null && map === null) {
        const instance = new leaflet.Map(mapRef.current, props);

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
    const mapRef = React.useRef(null);
    const map = useMapElement(mapRef, options);
    const createdRef = React.useRef(false);
    React.useEffect(() => {
      if (map != null && createdRef.current === false && whenCreated != null) {
        createdRef.current = true;
        whenCreated(map);
      }
    }, [map, whenCreated]);
    const [props] = React.useState({
      className,
      id,
      style,
    });
    const context = React.useMemo(
      () =>
        map
          ? {
              __version: CONTEXT_VERSION,
              map,
            }
          : null,
      [map]
    );
    const contents = context
      ? /*#__PURE__*/ React__default["default"].createElement(
          LeafletProvider,
          {
            value: context,
          },
          children
        )
      : placeholder ?? null;
    return /*#__PURE__*/ React__default["default"].createElement(
      "div",
      _extends({}, props, {
        ref: mapRef,
      }),
      contents
    );
  }

  const Marker = createLayerComponent(
    function createMarker({ position, ...options }, ctx) {
      const instance = new leaflet.Marker(position, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updateMarker(marker, props, prevProps) {
      if (props.position !== prevProps.position) {
        marker.setLatLng(props.position);
      }

      if (props.icon != null && props.icon !== prevProps.icon) {
        marker.setIcon(props.icon);
      }

      if (
        props.zIndexOffset != null &&
        props.zIndexOffset !== prevProps.zIndexOffset
      ) {
        marker.setZIndexOffset(props.zIndexOffset);
      }

      if (props.opacity != null && props.opacity !== prevProps.opacity) {
        marker.setOpacity(props.opacity);
      }

      if (marker.dragging != null && props.draggable !== prevProps.draggable) {
        if (props.draggable === true) {
          marker.dragging.enable();
        } else {
          marker.dragging.disable();
        }
      }
    }
  );

  const DEFAULT_PANES = [
    "mapPane",
    "markerPane",
    "overlayPane",
    "popupPane",
    "shadowPane",
    "tilePane",
    "tooltipPane",
  ];

  function omitPane(obj, pane) {
    const { [pane]: _p, ...others } = obj;
    return others;
  }

  function createPane(props, context) {
    const name = props.name;

    if (DEFAULT_PANES.indexOf(name) !== -1) {
      throw new Error(
        `You must use a unique name for a pane that is not a default Leaflet pane: ${name}`
      );
    }

    if (context.map.getPane(name) != null) {
      throw new Error(`A pane with this name already exists: ${name}`);
    }

    const parentPaneName = props.pane ?? context.pane;
    const parentPane = parentPaneName
      ? context.map.getPane(parentPaneName)
      : undefined;
    const element = context.map.createPane(name, parentPane);

    if (props.className != null) {
      addClassName(element, props.className);
    }

    if (props.style != null) {
      Object.keys(props.style).forEach((key) => {
        // @ts-ignore
        element.style[key] = props.style[key];
      });
    }

    return element;
  }

  function Pane(props) {
    const [paneElement, setPaneElement] = React.useState();
    const context = useLeafletContext();
    const newContext = React.useMemo(
      () => ({ ...context, pane: props.name }),
      [context]
    );
    React.useEffect(() => {
      setPaneElement(createPane(props, context));
      return function removeCreatedPane() {
        const pane = context.map.getPane(props.name);
        pane == null ? void 0 : pane.remove == null ? void 0 : pane.remove(); // @ts-ignore map internals

        if (context.map._panes != null) {
          // @ts-ignore map internals
          context.map._panes = omitPane(context.map._panes, props.name); // @ts-ignore map internals

          context.map._paneRenderers = omitPane(
            // @ts-ignore map internals
            context.map._paneRenderers,
            props.name
          );
        }
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return props.children != null && paneElement != null
      ? /*#__PURE__*/ reactDom.createPortal(
          /*#__PURE__*/ React__default["default"].createElement(
            LeafletProvider,
            {
              value: newContext,
            },
            props.children
          ),
          paneElement
        )
      : null;
  }

  const Polygon = createPathComponent(
    function createPolygon({ positions, ...options }, ctx) {
      const instance = new leaflet.Polygon(positions, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updatePolygon(layer, props, prevProps) {
      if (props.positions !== prevProps.positions) {
        layer.setLatLngs(props.positions);
      }
    }
  );

  const Polyline = createPathComponent(
    function createPolyline({ positions, ...options }, ctx) {
      const instance = new leaflet.Polyline(positions, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updatePolyline(layer, props, prevProps) {
      if (props.positions !== prevProps.positions) {
        layer.setLatLngs(props.positions);
      }
    }
  );

  const Popup = createOverlayComponent(
    function createPopup(props, context) {
      return {
        instance: new leaflet.Popup(props, context.overlayContainer),
        context,
      };
    },
    function usePopupLifecycle(element, context, props, setOpen) {
      const { onClose, onOpen, position } = props;
      React.useEffect(
        function addPopup() {
          const { instance } = element;

          function onPopupOpen(event) {
            if (event.popup === instance) {
              instance.update();
              setOpen(true);
              onOpen == null ? void 0 : onOpen();
            }
          }

          function onPopupClose(event) {
            if (event.popup === instance) {
              setOpen(false);
              onClose == null ? void 0 : onClose();
            }
          }

          context.map.on({
            popupopen: onPopupOpen,
            popupclose: onPopupClose,
          });

          if (context.overlayContainer == null) {
            // Attach to a Map
            if (position != null) {
              instance.setLatLng(position);
            }

            instance.openOn(context.map);
          } else {
            // Attach to container component
            context.overlayContainer.bindPopup(instance);
          }

          return function removePopup() {
            var _context$overlayConta;

            context.map.off({
              popupopen: onPopupOpen,
              popupclose: onPopupClose,
            });
            (_context$overlayConta = context.overlayContainer) == null
              ? void 0
              : _context$overlayConta.unbindPopup();
            context.map.removeLayer(instance);
          };
        },
        [element, context, setOpen, onClose, onOpen, position]
      );
    }
  );

  const Rectangle = createPathComponent(
    function createRectangle({ bounds, ...options }, ctx) {
      const instance = new leaflet.Rectangle(bounds, options);
      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updateRectangle(layer, props, prevProps) {
      if (props.bounds !== prevProps.bounds) {
        layer.setBounds(props.bounds);
      }
    }
  );

  const ScaleControl = createControlComponent(function createScaleControl(
    props
  ) {
    return new leaflet.Control.Scale(props);
  });

  const useSVGOverlayElement = createElementHook(function createSVGOverlay(
    props,
    context
  ) {
    const { attributes, bounds, ...options } = props;
    const container = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    container.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    if (attributes != null) {
      Object.keys(attributes).forEach((name) => {
        container.setAttribute(name, attributes[name]);
      });
    }

    return {
      instance: new leaflet.SVGOverlay(container, bounds, options),
      container,
      context,
    };
  },
  updateMediaOverlay);
  const useSVGOverlay = createLayerHook(useSVGOverlayElement);

  function SVGOverlayComponent({ children, ...options }, ref) {
    const { instance, container } = useSVGOverlay(options).current;
    React.useImperativeHandle(ref, () => instance);
    return container == null || children == null
      ? null
      : /*#__PURE__*/ reactDom.createPortal(children, container);
  }

  const SVGOverlay = /*#__PURE__*/ React.forwardRef(SVGOverlayComponent);

  const TileLayer = createTileLayerComponent(function createTileLayer(
    { url, ...options },
    context
  ) {
    return {
      instance: new leaflet.TileLayer(url, withPane(options, context)),
      context,
    };
  },
  updateGridLayer);

  const Tooltip = createOverlayComponent(
    function createTooltip(props, context) {
      return {
        instance: new leaflet.Tooltip(props, context.overlayContainer),
        context,
      };
    },
    function useTooltipLifecycle(element, context, props, setOpen) {
      const { onClose, onOpen } = props;
      React.useEffect(
        function addTooltip() {
          const container = context.overlayContainer;

          if (container == null) {
            return;
          }

          const { instance } = element;

          const onTooltipOpen = (event) => {
            if (event.tooltip === instance) {
              instance.update();
              setOpen(true);
              onOpen == null ? void 0 : onOpen();
            }
          };

          const onTooltipClose = (event) => {
            if (event.tooltip === instance) {
              setOpen(false);
              onClose == null ? void 0 : onClose();
            }
          };

          container.on({
            tooltipopen: onTooltipOpen,
            tooltipclose: onTooltipClose,
          });
          container.bindTooltip(instance);
          return function removeTooltip() {
            container.off({
              tooltipopen: onTooltipOpen,
              tooltipclose: onTooltipClose,
            }); // @ts-ignore protected property

            if (container._map != null) {
              container.unbindTooltip();
            }
          };
        },
        [element, context, setOpen, onClose, onOpen]
      );
    }
  );

  const VideoOverlay = createLayerComponent(
    function createVideoOverlay({ bounds, url, ...options }, ctx) {
      const instance = new leaflet.VideoOverlay(url, bounds, options);

      if (options.play === true) {
        var _instance$getElement;

        (_instance$getElement = instance.getElement()) == null
          ? void 0
          : _instance$getElement.play();
      }

      return {
        instance,
        context: { ...ctx, overlayContainer: instance },
      };
    },
    function updateVideoOverlay(overlay, props, prevProps) {
      updateMediaOverlay(overlay, props, prevProps);

      if (typeof props.url === "string" && props.url !== prevProps.url) {
        overlay.setUrl(props.url);
      }

      const video = overlay.getElement();

      if (video != null) {
        if (props.play === true && !prevProps.play) {
          video.play();
        } else if (!props.play && prevProps.play === true) {
          video.pause();
        }
      }
    }
  );

  const WMSTileLayer = createTileLayerComponent(
    function createWMSTileLayer({ params = {}, url, ...options }, context) {
      return {
        instance: new leaflet.TileLayer.WMS(url, {
          ...params,
          ...withPane(options, context),
        }),
        context,
      };
    },
    function updateWMSTileLayer(layer, props, prevProps) {
      updateGridLayer(layer, props, prevProps);

      if (props.params != null && props.params !== prevProps.params) {
        layer.setParams(props.params);
      }
    }
  );

  const ZoomControl = createControlComponent(function createZoomControl(props) {
    return new leaflet.Control.Zoom(props);
  });

  exports.AttributionControl = AttributionControl;
  exports.Circle = Circle;
  exports.CircleMarker = CircleMarker;
  exports.FeatureGroup = FeatureGroup;
  exports.GeoJSON = GeoJSON;
  exports.ImageOverlay = ImageOverlay;
  exports.LayerGroup = LayerGroup;
  exports.LayersControl = LayersControl;
  exports.MapConsumer = MapConsumer;
  exports.MapContainer = MapContainer;
  exports.Marker = Marker;
  exports.Pane = Pane;
  exports.Polygon = Polygon;
  exports.Polyline = Polyline;
  exports.Popup = Popup;
  exports.Rectangle = Rectangle;
  exports.SVGOverlay = SVGOverlay;
  exports.ScaleControl = ScaleControl;
  exports.TileLayer = TileLayer;
  exports.Tooltip = Tooltip;
  exports.VideoOverlay = VideoOverlay;
  exports.WMSTileLayer = WMSTileLayer;
  exports.ZoomControl = ZoomControl;
  exports.useMap = useMap;
  exports.useMapEvent = useMapEvent;
  exports.useMapEvents = useMapEvents;

  Object.defineProperty(exports, "__esModule", { value: true });
});

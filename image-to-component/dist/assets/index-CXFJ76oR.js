(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
      for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const o = {};
      return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(l) {
      if (l.ep) return;
      l.ep = true;
      const o = n(l);
      fetch(l.href, o);
    }
  })();
  function wc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var ns = {
    exports: {}
  }, nl = {}, rs = {
    exports: {}
  }, z = {};
  var Zn = Symbol.for("react.element"), Sc = Symbol.for("react.portal"), xc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), Ec = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), _c = Symbol.for("react.context"), Tc = Symbol.for("react.forward_ref"), Nc = Symbol.for("react.suspense"), Pc = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), Ui = Symbol.iterator;
  function Rc(e) {
    return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ls = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, os = Object.assign, is = {};
  function un(e, t, n) {
    this.props = e, this.context = t, this.refs = is, this.updater = n || ls;
  }
  un.prototype.isReactComponent = {};
  un.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  un.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function us() {
  }
  us.prototype = un.prototype;
  function Bo(e, t, n) {
    this.props = e, this.context = t, this.refs = is, this.updater = n || ls;
  }
  var Vo = Bo.prototype = new us();
  Vo.constructor = Bo;
  os(Vo, un.prototype);
  Vo.isPureReactComponent = true;
  var Bi = Array.isArray, ss = Object.prototype.hasOwnProperty, Ho = {
    current: null
  }, as = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function cs(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ss.call(t, r) && !as.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
      l.children = s;
    }
    if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: Zn,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Ho.current
    };
  }
  function zc(e, t) {
    return {
      $$typeof: Zn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function Wo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zn;
  }
  function Lc(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Vi = /\/+/g;
  function xl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : t.toString(36);
  }
  function Sr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = false;
    if (e === null) i = true;
    else switch (o) {
      case "string":
      case "number":
        i = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case Sc:
            i = true;
        }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Bi(l) ? (n = "", e != null && (n = e.replace(Vi, "$&/") + "/"), Sr(l, t, n, "", function(a) {
      return a;
    })) : l != null && (Wo(l) && (l = zc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Vi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Bi(e)) for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + xl(o, u);
      i += Sr(o, t, n, s, l);
    }
    else if (s = Rc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + xl(o, u++), i += Sr(o, t, n, s, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i;
  }
  function rr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Sr(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function Oc(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var se = {
    current: null
  }, xr = {
    transition: null
  }, Mc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Ho
  };
  function fs() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  z.Children = {
    map: rr,
    forEach: function(e, t, n) {
      rr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return rr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return rr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Wo(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  z.Component = un;
  z.Fragment = xc;
  z.Profiler = Ec;
  z.PureComponent = Bo;
  z.StrictMode = kc;
  z.Suspense = Nc;
  z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mc;
  z.act = fs;
  z.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = os({}, e.props), l = e.key, o = e.ref, i = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = Ho.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
      for (s in t) ss.call(t, s) && !as.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      u = Array(s);
      for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
      r.children = u;
    }
    return {
      $$typeof: Zn,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
    };
  };
  z.createContext = function(e) {
    return e = {
      $$typeof: _c,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: Cc,
      _context: e
    }, e.Consumer = e;
  };
  z.createElement = cs;
  z.createFactory = function(e) {
    var t = cs.bind(null, e);
    return t.type = e, t;
  };
  z.createRef = function() {
    return {
      current: null
    };
  };
  z.forwardRef = function(e) {
    return {
      $$typeof: Tc,
      render: e
    };
  };
  z.isValidElement = Wo;
  z.lazy = function(e) {
    return {
      $$typeof: jc,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: Oc
    };
  };
  z.memo = function(e, t) {
    return {
      $$typeof: Pc,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  z.startTransition = function(e) {
    var t = xr.transition;
    xr.transition = {};
    try {
      e();
    } finally {
      xr.transition = t;
    }
  };
  z.unstable_act = fs;
  z.useCallback = function(e, t) {
    return se.current.useCallback(e, t);
  };
  z.useContext = function(e) {
    return se.current.useContext(e);
  };
  z.useDebugValue = function() {
  };
  z.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e);
  };
  z.useEffect = function(e, t) {
    return se.current.useEffect(e, t);
  };
  z.useId = function() {
    return se.current.useId();
  };
  z.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n);
  };
  z.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t);
  };
  z.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t);
  };
  z.useMemo = function(e, t) {
    return se.current.useMemo(e, t);
  };
  z.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n);
  };
  z.useRef = function(e) {
    return se.current.useRef(e);
  };
  z.useState = function(e) {
    return se.current.useState(e);
  };
  z.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n);
  };
  z.useTransition = function() {
    return se.current.useTransition();
  };
  z.version = "18.3.1";
  rs.exports = z;
  var O = rs.exports;
  const ds = wc(O);
  var Ic = O, Dc = Symbol.for("react.element"), Ac = Symbol.for("react.fragment"), Fc = Object.prototype.hasOwnProperty, $c = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uc = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function ps(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Fc.call(t, r) && !Uc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
      $$typeof: Dc,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: $c.current
    };
  }
  nl.Fragment = Ac;
  nl.jsx = ps;
  nl.jsxs = ps;
  ns.exports = nl;
  var g = ns.exports, ms = {
    exports: {}
  }, we = {}, hs = {
    exports: {}
  }, gs = {};
  (function(e) {
    function t(_, P) {
      var R = _.length;
      _.push(P);
      e: for (; 0 < R; ) {
        var Q = R - 1 >>> 1, Z = _[Q];
        if (0 < l(Z, P)) _[Q] = P, _[R] = Z, R = Q;
        else break e;
      }
    }
    function n(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var P = _[0], R = _.pop();
      if (R !== P) {
        _[0] = R;
        e: for (var Q = 0, Z = _.length, tr = Z >>> 1; Q < tr; ) {
          var vt = 2 * (Q + 1) - 1, Sl = _[vt], yt = vt + 1, nr = _[yt];
          if (0 > l(Sl, R)) yt < Z && 0 > l(nr, Sl) ? (_[Q] = nr, _[yt] = R, Q = yt) : (_[Q] = Sl, _[vt] = R, Q = vt);
          else if (yt < Z && 0 > l(nr, R)) _[Q] = nr, _[yt] = R, Q = yt;
          else break e;
        }
      }
      return P;
    }
    function l(_, P) {
      var R = _.sortIndex - P.sortIndex;
      return R !== 0 ? R : _.id - P.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var i = Date, u = i.now();
      e.unstable_now = function() {
        return i.now() - u;
      };
    }
    var s = [], a = [], c = 1, d = null, p = 3, v = false, y = false, x = false, j = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(_) {
      for (var P = n(a); P !== null; ) {
        if (P.callback === null) r(a);
        else if (P.startTime <= _) r(a), P.sortIndex = P.expirationTime, t(s, P);
        else break;
        P = n(a);
      }
    }
    function w(_) {
      if (x = false, h(_), !y) if (n(s) !== null) y = true, yl(k);
      else {
        var P = n(a);
        P !== null && wl(w, P.startTime - _);
      }
    }
    function k(_, P) {
      y = false, x && (x = false, m(N), N = -1), v = true;
      var R = p;
      try {
        for (h(P), d = n(s); d !== null && (!(d.expirationTime > P) || _ && !Ne()); ) {
          var Q = d.callback;
          if (typeof Q == "function") {
            d.callback = null, p = d.priorityLevel;
            var Z = Q(d.expirationTime <= P);
            P = e.unstable_now(), typeof Z == "function" ? d.callback = Z : d === n(s) && r(s), h(P);
          } else r(s);
          d = n(s);
        }
        if (d !== null) var tr = true;
        else {
          var vt = n(a);
          vt !== null && wl(w, vt.startTime - P), tr = false;
        }
        return tr;
      } finally {
        d = null, p = R, v = false;
      }
    }
    var E = false, T = null, N = -1, W = 5, L = -1;
    function Ne() {
      return !(e.unstable_now() - L < W);
    }
    function cn() {
      if (T !== null) {
        var _ = e.unstable_now();
        L = _;
        var P = true;
        try {
          P = T(true, _);
        } finally {
          P ? fn() : (E = false, T = null);
        }
      } else E = false;
    }
    var fn;
    if (typeof f == "function") fn = function() {
      f(cn);
    };
    else if (typeof MessageChannel < "u") {
      var $i = new MessageChannel(), yc = $i.port2;
      $i.port1.onmessage = cn, fn = function() {
        yc.postMessage(null);
      };
    } else fn = function() {
      j(cn, 0);
    };
    function yl(_) {
      T = _, E || (E = true, fn());
    }
    function wl(_, P) {
      N = j(function() {
        _(e.unstable_now());
      }, P);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, e.unstable_continueExecution = function() {
      y || v || (y = true, yl(k));
    }, e.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return p;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(s);
    }, e.unstable_next = function(_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var R = p;
      p = P;
      try {
        return _();
      } finally {
        p = R;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(_, P) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var R = p;
      p = _;
      try {
        return P();
      } finally {
        p = R;
      }
    }, e.unstable_scheduleCallback = function(_, P, R) {
      var Q = e.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? Q + R : Q) : R = Q, _) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = R + Z, _ = {
        id: c++,
        callback: P,
        priorityLevel: _,
        startTime: R,
        expirationTime: Z,
        sortIndex: -1
      }, R > Q ? (_.sortIndex = R, t(a, _), n(s) === null && _ === n(a) && (x ? (m(N), N = -1) : x = true, wl(w, R - Q))) : (_.sortIndex = Z, t(s, _), y || v || (y = true, yl(k))), _;
    }, e.unstable_shouldYield = Ne, e.unstable_wrapCallback = function(_) {
      var P = p;
      return function() {
        var R = p;
        p = P;
        try {
          return _.apply(this, arguments);
        } finally {
          p = R;
        }
      };
    };
  })(gs);
  hs.exports = gs;
  var Bc = hs.exports;
  var Vc = O, ye = Bc;
  function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var vs = /* @__PURE__ */ new Set(), On = {};
  function Lt(e, t) {
    bt(e, t), bt(e + "Capture", t);
  }
  function bt(e, t) {
    for (On[e] = t, e = 0; e < t.length; e++) vs.add(t[e]);
  }
  var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kl = Object.prototype.hasOwnProperty, Hc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hi = {}, Wi = {};
  function Wc(e) {
    return Kl.call(Wi, e) ? true : Kl.call(Hi, e) ? false : Hc.test(e) ? Wi[e] = true : (Hi[e] = true, false);
  }
  function Qc(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Gc(e, t, n, r) {
    if (t === null || typeof t > "u" || Qc(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function ae(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    te[e] = new ae(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    te[e] = new ae(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    te[e] = new ae(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    te[e] = new ae(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    te[e] = new ae(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    te[e] = new ae(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var Qo = /[\-:]([a-z])/g;
  function Go(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Qo, Go);
    te[t] = new ae(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Qo, Go);
    te[t] = new ae(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(Qo, Go);
    te[t] = new ae(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    te[e] = new ae(e, 1, false, e.toLowerCase(), null, false, false);
  });
  te.xlinkHref = new ae("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    te[e] = new ae(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Ko(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Wc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Xe = Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), It = Symbol.for("react.portal"), Dt = Symbol.for("react.fragment"), Yo = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), ys = Symbol.for("react.provider"), ws = Symbol.for("react.context"), Xo = Symbol.for("react.forward_ref"), Xl = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Zo = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Ss = Symbol.for("react.offscreen"), Qi = Symbol.iterator;
  function dn(e) {
    return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var V = Object.assign, kl;
  function Sn(e) {
    if (kl === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = t && t[1] || "";
    }
    return `
` + kl + e;
  }
  var El = false;
  function Cl(e, t) {
    if (!e || El) return "";
    El = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (a) {
          r = a;
        }
        e();
      }
    } catch (a) {
      if (a && r && typeof a.stack == "string") {
        for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1) do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      El = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
  }
  function Kc(e) {
    switch (e.tag) {
      case 5:
        return Sn(e.type);
      case 16:
        return Sn("Lazy");
      case 13:
        return Sn("Suspense");
      case 19:
        return Sn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Cl(e.type, false), e;
      case 11:
        return e = Cl(e.type.render, false), e;
      case 1:
        return e = Cl(e.type, true), e;
      default:
        return "";
    }
  }
  function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Dt:
        return "Fragment";
      case It:
        return "Portal";
      case Yl:
        return "Profiler";
      case Yo:
        return "StrictMode";
      case Xl:
        return "Suspense";
      case Zl:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ws:
        return (e.displayName || "Context") + ".Consumer";
      case ys:
        return (e._context.displayName || "Context") + ".Provider";
      case Xo:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Zo:
        return t = e.displayName || null, t !== null ? t : Jl(e.type) || "Memo";
      case qe:
        t = e._payload, e = e._init;
        try {
          return Jl(e(t));
        } catch {
        }
    }
    return null;
  }
  function Yc(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Jl(t);
      case 8:
        return t === Yo ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function dt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xc(e) {
    var t = xs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return l.call(this);
        },
        set: function(i) {
          r = "" + i, o.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(i) {
          r = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function or(e) {
    e._valueTracker || (e._valueTracker = Xc(e));
  }
  function ks(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = xs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function Lr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ql(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function Gi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = dt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Es(e, t) {
    t = t.checked, t != null && Ko(e, "checked", t, false);
  }
  function bl(e, t) {
    Es(e, t);
    var n = dt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ki(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function eo(e, t, n) {
    (t !== "number" || Lr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var xn = Array.isArray;
  function Kt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function Yi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(S(92));
        if (xn(n)) {
          if (1 < n.length) throw Error(S(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: dt(n)
    };
  }
  function Cs(e, t) {
    var n = dt(t.value), r = dt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function _s(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function no(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _s(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ir, Ts = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, Zc = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Cn).forEach(function(e) {
    Zc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Cn[t] = Cn[e];
    });
  });
  function Ns(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cn.hasOwnProperty(e) && Cn[e] ? ("" + t).trim() : t + "px";
  }
  function Ps(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ns(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Jc = V({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function ro(e, t) {
    if (t) {
      if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(S(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(S(62));
    }
  }
  function lo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var oo = null;
  function Jo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var io = null, Yt = null, Xt = null;
  function Zi(e) {
    if (e = bn(e)) {
      if (typeof io != "function") throw Error(S(280));
      var t = e.stateNode;
      t && (t = ul(t), io(e.stateNode, e.type, t));
    }
  }
  function js(e) {
    Yt ? Xt ? Xt.push(e) : Xt = [
      e
    ] : Yt = e;
  }
  function Rs() {
    if (Yt) {
      var e = Yt, t = Xt;
      if (Xt = Yt = null, Zi(e), t) for (e = 0; e < t.length; e++) Zi(t[e]);
    }
  }
  function zs(e, t) {
    return e(t);
  }
  function Ls() {
  }
  var _l = false;
  function Os(e, t, n) {
    if (_l) return e(t, n);
    _l = true;
    try {
      return zs(e, t, n);
    } finally {
      _l = false, (Yt !== null || Xt !== null) && (Ls(), Rs());
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(S(231, t, typeof n));
    return n;
  }
  var uo = false;
  if (Qe) try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function() {
        uo = true;
      }
    }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    uo = false;
  }
  function qc(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, a);
    } catch (c) {
      this.onError(c);
    }
  }
  var _n = false, Or = null, Mr = false, so = null, bc = {
    onError: function(e) {
      _n = true, Or = e;
    }
  };
  function ef(e, t, n, r, l, o, i, u, s) {
    _n = false, Or = null, qc.apply(bc, arguments);
  }
  function tf(e, t, n, r, l, o, i, u, s) {
    if (ef.apply(this, arguments), _n) {
      if (_n) {
        var a = Or;
        _n = false, Or = null;
      } else throw Error(S(198));
      Mr || (Mr = true, so = a);
    }
  }
  function Ot(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ms(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ji(e) {
    if (Ot(e) !== e) throw Error(S(188));
  }
  function nf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Ot(e), t === null) throw Error(S(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ji(l), e;
          if (o === r) return Ji(l), t;
          o = o.sibling;
        }
        throw Error(S(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = false, u = l.child; u; ) {
          if (u === n) {
            i = true, n = l, r = o;
            break;
          }
          if (u === r) {
            i = true, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              i = true, n = o, r = l;
              break;
            }
            if (u === r) {
              i = true, r = o, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(S(189));
        }
      }
      if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t;
  }
  function Is(e) {
    return e = nf(e), e !== null ? Ds(e) : null;
  }
  function Ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var As = ye.unstable_scheduleCallback, qi = ye.unstable_cancelCallback, rf = ye.unstable_shouldYield, lf = ye.unstable_requestPaint, G = ye.unstable_now, of = ye.unstable_getCurrentPriorityLevel, qo = ye.unstable_ImmediatePriority, Fs = ye.unstable_UserBlockingPriority, Ir = ye.unstable_NormalPriority, uf = ye.unstable_LowPriority, $s = ye.unstable_IdlePriority, rl = null, Fe = null;
  function sf(e) {
    if (Fe && typeof Fe.onCommitFiberRoot == "function") try {
      Fe.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Le = Math.clz32 ? Math.clz32 : ff, af = Math.log, cf = Math.LN2;
  function ff(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (af(e) / cf | 0) | 0;
  }
  var ur = 64, sr = 4194304;
  function kn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Dr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = kn(u) : (o &= i, o !== 0 && (r = kn(o)));
    } else i = n & ~l, i !== 0 ? r = kn(i) : o !== 0 && (r = kn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Le(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function df(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Le(o), u = 1 << i, s = l[i];
      s === -1 ? (!(u & n) || u & r) && (l[i] = df(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Us() {
    var e = ur;
    return ur <<= 1, !(ur & 4194240) && (ur = 64), e;
  }
  function Tl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Le(t), e[t] = n;
  }
  function mf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Le(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function bo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Le(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var I = 0;
  function Bs(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vs, ei, Hs, Ws, Qs, co = false, ar = [], lt = null, ot = null, it = null, Dn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), et = [], hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function bi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        lt = null;
        break;
      case "dragenter":
      case "dragleave":
        ot = null;
        break;
      case "mouseover":
      case "mouseout":
        it = null;
        break;
      case "pointerover":
      case "pointerout":
        Dn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        An.delete(t.pointerId);
    }
  }
  function mn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = bn(t), t !== null && ei(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function gf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return lt = mn(lt, e, t, n, r, l), true;
      case "dragenter":
        return ot = mn(ot, e, t, n, r, l), true;
      case "mouseover":
        return it = mn(it, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return Dn.set(o, mn(Dn.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, An.set(o, mn(An.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function Gs(e) {
    var t = xt(e.target);
    if (t !== null) {
      var n = Ot(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ms(n), t !== null) {
            e.blockedOn = t, Qs(e.priority, function() {
              Hs(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function kr(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        oo = r, n.target.dispatchEvent(r), oo = null;
      } else return t = bn(n), t !== null && ei(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function eu(e, t, n) {
    kr(e) && n.delete(t);
  }
  function vf() {
    co = false, lt !== null && kr(lt) && (lt = null), ot !== null && kr(ot) && (ot = null), it !== null && kr(it) && (it = null), Dn.forEach(eu), An.forEach(eu);
  }
  function hn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = true, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, vf)));
  }
  function Fn(e) {
    function t(l) {
      return hn(l, e);
    }
    if (0 < ar.length) {
      hn(ar[0], e);
      for (var n = 1; n < ar.length; n++) {
        var r = ar[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (lt !== null && hn(lt, e), ot !== null && hn(ot, e), it !== null && hn(it, e), Dn.forEach(t), An.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null); ) Gs(n), n.blockedOn === null && et.shift();
  }
  var Zt = Xe.ReactCurrentBatchConfig, Ar = true;
  function yf(e, t, n, r) {
    var l = I, o = Zt.transition;
    Zt.transition = null;
    try {
      I = 1, ti(e, t, n, r);
    } finally {
      I = l, Zt.transition = o;
    }
  }
  function wf(e, t, n, r) {
    var l = I, o = Zt.transition;
    Zt.transition = null;
    try {
      I = 4, ti(e, t, n, r);
    } finally {
      I = l, Zt.transition = o;
    }
  }
  function ti(e, t, n, r) {
    if (Ar) {
      var l = fo(e, t, n, r);
      if (l === null) Dl(e, t, r, Fr, n), bi(e, r);
      else if (gf(l, e, t, n, r)) r.stopPropagation();
      else if (bi(e, r), t & 4 && -1 < hf.indexOf(e)) {
        for (; l !== null; ) {
          var o = bn(l);
          if (o !== null && Vs(o), o = fo(e, t, n, r), o === null && Dl(e, t, r, Fr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Dl(e, t, r, null, n);
    }
  }
  var Fr = null;
  function fo(e, t, n, r) {
    if (Fr = null, e = Jo(r), e = xt(e), e !== null) if (t = Ot(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ms(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Fr = e, null;
  }
  function Ks(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (of()) {
          case qo:
            return 1;
          case Fs:
            return 4;
          case Ir:
          case uf:
            return 16;
          case $s:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var nt = null, ni = null, Er = null;
  function Ys() {
    if (Er) return Er;
    var e, t = ni, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Er = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Cr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function cr() {
    return true;
  }
  function tu() {
    return false;
  }
  function Se(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? cr : tu, this.isPropagationStopped = tu, this;
    }
    return V(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = cr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = cr);
      },
      persist: function() {
      },
      isPersistent: cr
    }), t;
  }
  var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ri = Se(sn), qn = V({}, sn, {
    view: 0,
    detail: 0
  }), Sf = Se(qn), Nl, Pl, gn, ll = V({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: li,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Nl = e.screenX - gn.screenX, Pl = e.screenY - gn.screenY) : Pl = Nl = 0, gn = e), Nl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Pl;
    }
  }), nu = Se(ll), xf = V({}, ll, {
    dataTransfer: 0
  }), kf = Se(xf), Ef = V({}, qn, {
    relatedTarget: 0
  }), jl = Se(Ef), Cf = V({}, sn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _f = Se(Cf), Tf = V({}, sn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Nf = Se(Tf), Pf = V({}, sn, {
    data: 0
  }), ru = Se(Pf), jf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Rf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Lf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : false;
  }
  function li() {
    return Lf;
  }
  var Of = V({}, qn, {
    key: function(e) {
      if (e.key) {
        var t = jf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rf[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: li,
    charCode: function(e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Mf = Se(Of), If = V({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), lu = Se(If), Df = V({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: li
  }), Af = Se(Df), Ff = V({}, sn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $f = Se(Ff), Uf = V({}, ll, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bf = Se(Uf), Vf = [
    9,
    13,
    27,
    32
  ], oi = Qe && "CompositionEvent" in window, Tn = null;
  Qe && "documentMode" in document && (Tn = document.documentMode);
  var Hf = Qe && "TextEvent" in window && !Tn, Xs = Qe && (!oi || Tn && 8 < Tn && 11 >= Tn), ou = " ", iu = false;
  function Zs(e, t) {
    switch (e) {
      case "keyup":
        return Vf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Js(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var At = false;
  function Wf(e, t) {
    switch (e) {
      case "compositionend":
        return Js(t);
      case "keypress":
        return t.which !== 32 ? null : (iu = true, ou);
      case "textInput":
        return e = t.data, e === ou && iu ? null : e;
      default:
        return null;
    }
  }
  function Qf(e, t) {
    if (At) return e === "compositionend" || !oi && Zs(e, t) ? (e = Ys(), Er = ni = nt = null, At = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Xs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function qs(e, t, n, r) {
    js(r), t = $r(t, "onChange"), 0 < t.length && (n = new ri("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Nn = null, $n = null;
  function Kf(e) {
    aa(e, 0);
  }
  function ol(e) {
    var t = Ut(e);
    if (ks(t)) return e;
  }
  function Yf(e, t) {
    if (e === "change") return t;
  }
  var bs = false;
  if (Qe) {
    var Rl;
    if (Qe) {
      var zl = "oninput" in document;
      if (!zl) {
        var su = document.createElement("div");
        su.setAttribute("oninput", "return;"), zl = typeof su.oninput == "function";
      }
      Rl = zl;
    } else Rl = false;
    bs = Rl && (!document.documentMode || 9 < document.documentMode);
  }
  function au() {
    Nn && (Nn.detachEvent("onpropertychange", ea), $n = Nn = null);
  }
  function ea(e) {
    if (e.propertyName === "value" && ol($n)) {
      var t = [];
      qs(t, $n, e, Jo(e)), Os(Kf, t);
    }
  }
  function Xf(e, t, n) {
    e === "focusin" ? (au(), Nn = t, $n = n, Nn.attachEvent("onpropertychange", ea)) : e === "focusout" && au();
  }
  function Zf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol($n);
  }
  function Jf(e, t) {
    if (e === "click") return ol(t);
  }
  function qf(e, t) {
    if (e === "input" || e === "change") return ol(t);
  }
  function bf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Me = typeof Object.is == "function" ? Object.is : bf;
  function Un(e, t) {
    if (Me(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Kl.call(t, l) || !Me(e[l], t[l])) return false;
    }
    return true;
  }
  function cu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fu(e, t) {
    var n = cu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = cu(n);
    }
  }
  function ta(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? ta(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function na() {
    for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Lr(e.document);
    }
    return t;
  }
  function ii(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ed(e) {
    var t = na(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ta(n.ownerDocument.documentElement, n)) {
      if (r !== null && ii(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = fu(n, o);
          var i = fu(n, r);
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var td = Qe && "documentMode" in document && 11 >= document.documentMode, Ft = null, po = null, Pn = null, mo = false;
  function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || Ft == null || Ft !== Lr(r) || (r = Ft, "selectionStart" in r && ii(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), Pn && Un(Pn, r) || (Pn = r, r = $r(po, "onSelect"), 0 < r.length && (t = new ri("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Ft)));
  }
  function fr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $t = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd")
  }, Ll = {}, ra = {};
  Qe && (ra = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
  function il(e) {
    if (Ll[e]) return Ll[e];
    if (!$t[e]) return e;
    var t = $t[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ra) return Ll[e] = t[n];
    return e;
  }
  var la = il("animationend"), oa = il("animationiteration"), ia = il("animationstart"), ua = il("transitionend"), sa = /* @__PURE__ */ new Map(), pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mt(e, t) {
    sa.set(e, t), Lt(t, [
      e
    ]);
  }
  for (var Ol = 0; Ol < pu.length; Ol++) {
    var Ml = pu[Ol], nd = Ml.toLowerCase(), rd = Ml[0].toUpperCase() + Ml.slice(1);
    mt(nd, "on" + rd);
  }
  mt(la, "onAnimationEnd");
  mt(oa, "onAnimationIteration");
  mt(ia, "onAnimationStart");
  mt("dblclick", "onDoubleClick");
  mt("focusin", "onFocus");
  mt("focusout", "onBlur");
  mt(ua, "onTransitionEnd");
  bt("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  bt("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  bt("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  bt("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Lt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ld = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
  function mu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, tf(r, t, void 0, e), e.currentTarget = null;
  }
  function aa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          mu(l, u, a), o = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          mu(l, u, a), o = s;
        }
      }
    }
    if (Mr) throw e = so, Mr = false, so = null, e;
  }
  function A(e, t) {
    var n = t[wo];
    n === void 0 && (n = t[wo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ca(t, e, 2, false), n.add(r));
  }
  function Il(e, t, n) {
    var r = 0;
    t && (r |= 4), ca(n, e, r, t);
  }
  var dr = "_reactListening" + Math.random().toString(36).slice(2);
  function Bn(e) {
    if (!e[dr]) {
      e[dr] = true, vs.forEach(function(n) {
        n !== "selectionchange" && (ld.has(n) || Il(n, false, e), Il(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[dr] || (t[dr] = true, Il("selectionchange", false, t));
    }
  }
  function ca(e, t, n, r) {
    switch (Ks(t)) {
      case 1:
        var l = yf;
        break;
      case 4:
        l = wf;
        break;
      default:
        l = ti;
    }
    n = l.bind(null, t, n, e), l = void 0, !uo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function Dl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = xt(u), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Os(function() {
      var a = o, c = Jo(n), d = [];
      e: {
        var p = sa.get(e);
        if (p !== void 0) {
          var v = ri, y = e;
          switch (e) {
            case "keypress":
              if (Cr(n) === 0) break e;
            case "keydown":
            case "keyup":
              v = Mf;
              break;
            case "focusin":
              y = "focus", v = jl;
              break;
            case "focusout":
              y = "blur", v = jl;
              break;
            case "beforeblur":
            case "afterblur":
              v = jl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = nu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = kf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = Af;
              break;
            case la:
            case oa:
            case ia:
              v = _f;
              break;
            case ua:
              v = $f;
              break;
            case "scroll":
              v = Sf;
              break;
            case "wheel":
              v = Bf;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Nf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = lu;
          }
          var x = (t & 4) !== 0, j = !x && e === "scroll", m = x ? p !== null ? p + "Capture" : null : p;
          x = [];
          for (var f = a, h; f !== null; ) {
            h = f;
            var w = h.stateNode;
            if (h.tag === 5 && w !== null && (h = w, m !== null && (w = In(f, m), w != null && x.push(Vn(f, w, h)))), j) break;
            f = f.return;
          }
          0 < x.length && (p = new v(p, y, null, n, c), d.push({
            event: p,
            listeners: x
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== oo && (y = n.relatedTarget || n.fromElement) && (xt(y) || y[Ge])) break e;
          if ((v || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? xt(y) : null, y !== null && (j = Ot(y), y !== j || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
            if (x = nu, w = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (x = lu, w = "onPointerLeave", m = "onPointerEnter", f = "pointer"), j = v == null ? p : Ut(v), h = y == null ? p : Ut(y), p = new x(w, f + "leave", v, n, c), p.target = j, p.relatedTarget = h, w = null, xt(c) === a && (x = new x(m, f + "enter", y, n, c), x.target = h, x.relatedTarget = j, w = x), j = w, v && y) t: {
              for (x = v, m = y, f = 0, h = x; h; h = Mt(h)) f++;
              for (h = 0, w = m; w; w = Mt(w)) h++;
              for (; 0 < f - h; ) x = Mt(x), f--;
              for (; 0 < h - f; ) m = Mt(m), h--;
              for (; f--; ) {
                if (x === m || m !== null && x === m.alternate) break t;
                x = Mt(x), m = Mt(m);
              }
              x = null;
            }
            else x = null;
            v !== null && hu(d, p, v, x, false), y !== null && j !== null && hu(d, j, y, x, true);
          }
        }
        e: {
          if (p = a ? Ut(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var k = Yf;
          else if (uu(p)) if (bs) k = qf;
          else {
            k = Zf;
            var E = Xf;
          }
          else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = Jf);
          if (k && (k = k(e, a))) {
            qs(d, k, n, c);
            break e;
          }
          E && E(e, p, a), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && eo(p, "number", p.value);
        }
        switch (E = a ? Ut(a) : window, e) {
          case "focusin":
            (uu(E) || E.contentEditable === "true") && (Ft = E, po = a, Pn = null);
            break;
          case "focusout":
            Pn = po = Ft = null;
            break;
          case "mousedown":
            mo = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mo = false, du(d, n, c);
            break;
          case "selectionchange":
            if (td) break;
          case "keydown":
          case "keyup":
            du(d, n, c);
        }
        var T;
        if (oi) e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
        else At ? Zs(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
        N && (Xs && n.locale !== "ko" && (At || N !== "onCompositionStart" ? N === "onCompositionEnd" && At && (T = Ys()) : (nt = c, ni = "value" in nt ? nt.value : nt.textContent, At = true)), E = $r(a, N), 0 < E.length && (N = new ru(N, e, null, n, c), d.push({
          event: N,
          listeners: E
        }), T ? N.data = T : (T = Js(n), T !== null && (N.data = T)))), (T = Hf ? Wf(e, n) : Qf(e, n)) && (a = $r(a, "onBeforeInput"), 0 < a.length && (c = new ru("onBeforeInput", "beforeinput", null, n, c), d.push({
          event: c,
          listeners: a
        }), c.data = T));
      }
      aa(d, t);
    });
  }
  function Vn(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = In(e, n), o != null && r.unshift(Vn(e, o, l)), o = In(e, t), o != null && r.push(Vn(e, o, l))), e = e.return;
    }
    return r;
  }
  function Mt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function hu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, s = u.alternate, a = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && a !== null && (u = a, l ? (s = In(n, o), s != null && i.unshift(Vn(n, s, u))) : l || (s = In(n, o), s != null && i.push(Vn(n, s, u)))), n = n.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var od = /\r\n?/g, id = /\u0000|\uFFFD/g;
  function gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(od, `
`).replace(id, "");
  }
  function pr(e, t, n) {
    if (t = gu(t), gu(e) !== t && n) throw Error(S(425));
  }
  function Ur() {
  }
  var ho = null, go = null;
  function vo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, ud = typeof clearTimeout == "function" ? clearTimeout : void 0, vu = typeof Promise == "function" ? Promise : void 0, sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
    return vu.resolve(null).then(e).catch(ad);
  } : yo;
  function ad(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Al(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Fn(t);
  }
  function ut(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var an = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + an, Hn = "__reactProps$" + an, Ge = "__reactContainer$" + an, wo = "__reactEvents$" + an, cd = "__reactListeners$" + an, fd = "__reactHandles$" + an;
  function xt(e) {
    var t = e[Ae];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ge] || n[Ae]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yu(e); e !== null; ) {
          if (n = e[Ae]) return n;
          e = yu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function bn(e) {
    return e = e[Ae] || e[Ge], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ut(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
  }
  function ul(e) {
    return e[Hn] || null;
  }
  var So = [], Bt = -1;
  function ht(e) {
    return {
      current: e
    };
  }
  function F(e) {
    0 > Bt || (e.current = So[Bt], So[Bt] = null, Bt--);
  }
  function D(e, t) {
    Bt++, So[Bt] = e.current, e.current = t;
  }
  var pt = {}, oe = ht(pt), de = ht(false), Nt = pt;
  function en(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function pe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Br() {
    F(de), F(oe);
  }
  function wu(e, t, n) {
    if (oe.current !== pt) throw Error(S(168));
    D(oe, t), D(de, n);
  }
  function fa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, Yc(e) || "Unknown", l));
    return V({}, n, r);
  }
  function Vr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Nt = oe.current, D(oe, e), D(de, de.current), true;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n ? (e = fa(e, t, Nt), r.__reactInternalMemoizedMergedChildContext = e, F(de), F(oe), D(oe, e)) : F(de), D(de, n);
  }
  var Be = null, sl = false, Fl = false;
  function da(e) {
    Be === null ? Be = [
      e
    ] : Be.push(e);
  }
  function dd(e) {
    sl = true, da(e);
  }
  function gt() {
    if (!Fl && Be !== null) {
      Fl = true;
      var e = 0, t = I;
      try {
        var n = Be;
        for (I = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        Be = null, sl = false;
      } catch (l) {
        throw Be !== null && (Be = Be.slice(e + 1)), As(qo, gt), l;
      } finally {
        I = t, Fl = false;
      }
    }
    return null;
  }
  var Vt = [], Ht = 0, Hr = null, Wr = 0, xe = [], ke = 0, Pt = null, Ve = 1, He = "";
  function wt(e, t) {
    Vt[Ht++] = Wr, Vt[Ht++] = Hr, Hr = e, Wr = t;
  }
  function pa(e, t, n) {
    xe[ke++] = Ve, xe[ke++] = He, xe[ke++] = Pt, Pt = e;
    var r = Ve;
    e = He;
    var l = 32 - Le(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Le(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Le(t) + l | n << l | r, He = o + e;
    } else Ve = 1 << o | n << l | r, He = e;
  }
  function ui(e) {
    e.return !== null && (wt(e, 1), pa(e, 1, 0));
  }
  function si(e) {
    for (; e === Hr; ) Hr = Vt[--Ht], Vt[Ht] = null, Wr = Vt[--Ht], Vt[Ht] = null;
    for (; e === Pt; ) Pt = xe[--ke], xe[ke] = null, He = xe[--ke], xe[ke] = null, Ve = xe[--ke], xe[ke] = null;
  }
  var ve = null, ge = null, $ = false, ze = null;
  function ma(e, t) {
    var n = Ee(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function xu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = ut(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pt !== null ? {
          id: Ve,
          overflow: He
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ge = null, true) : false;
      default:
        return false;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ko(e) {
    if ($) {
      var t = ge;
      if (t) {
        var n = t;
        if (!xu(e, t)) {
          if (xo(e)) throw Error(S(418));
          t = ut(n.nextSibling);
          var r = ve;
          t && xu(e, t) ? ma(r, n) : (e.flags = e.flags & -4097 | 2, $ = false, ve = e);
        }
      } else {
        if (xo(e)) throw Error(S(418));
        e.flags = e.flags & -4097 | 2, $ = false, ve = e;
      }
    }
  }
  function ku(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ve = e;
  }
  function mr(e) {
    if (e !== ve) return false;
    if (!$) return ku(e), $ = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps)), t && (t = ge)) {
      if (xo(e)) throw ha(), Error(S(418));
      for (; t; ) ma(e, t), t = ut(t.nextSibling);
    }
    if (ku(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ge = ut(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ge = null;
      }
    } else ge = ve ? ut(e.stateNode.nextSibling) : null;
    return true;
  }
  function ha() {
    for (var e = ge; e; ) e = ut(e.nextSibling);
  }
  function tn() {
    ge = ve = null, $ = false;
  }
  function ai(e) {
    ze === null ? ze = [
      e
    ] : ze.push(e);
  }
  var pd = Xe.ReactCurrentBatchConfig;
  function vn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(S(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(S(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(S(284));
      if (!n._owner) throw Error(S(290, e));
    }
    return e;
  }
  function hr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Eu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ga(e) {
    function t(m, f) {
      if (e) {
        var h = m.deletions;
        h === null ? (m.deletions = [
          f
        ], m.flags |= 16) : h.push(f);
      }
    }
    function n(m, f) {
      if (!e) return null;
      for (; f !== null; ) t(m, f), f = f.sibling;
      return null;
    }
    function r(m, f) {
      for (m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
      return m;
    }
    function l(m, f) {
      return m = ft(m, f), m.index = 0, m.sibling = null, m;
    }
    function o(m, f, h) {
      return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < f ? (m.flags |= 2, f) : h) : (m.flags |= 2, f)) : (m.flags |= 1048576, f);
    }
    function i(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function u(m, f, h, w) {
      return f === null || f.tag !== 6 ? (f = Ql(h, m.mode, w), f.return = m, f) : (f = l(f, h), f.return = m, f);
    }
    function s(m, f, h, w) {
      var k = h.type;
      return k === Dt ? c(m, f, h.props.children, w, h.key) : f !== null && (f.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Eu(k) === f.type) ? (w = l(f, h.props), w.ref = vn(m, f, h), w.return = m, w) : (w = zr(h.type, h.key, h.props, null, m.mode, w), w.ref = vn(m, f, h), w.return = m, w);
    }
    function a(m, f, h, w) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Gl(h, m.mode, w), f.return = m, f) : (f = l(f, h.children || []), f.return = m, f);
    }
    function c(m, f, h, w, k) {
      return f === null || f.tag !== 7 ? (f = Tt(h, m.mode, w, k), f.return = m, f) : (f = l(f, h), f.return = m, f);
    }
    function d(m, f, h) {
      if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ql("" + f, m.mode, h), f.return = m, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case lr:
            return h = zr(f.type, f.key, f.props, null, m.mode, h), h.ref = vn(m, null, f), h.return = m, h;
          case It:
            return f = Gl(f, m.mode, h), f.return = m, f;
          case qe:
            var w = f._init;
            return d(m, w(f._payload), h);
        }
        if (xn(f) || dn(f)) return f = Tt(f, m.mode, h, null), f.return = m, f;
        hr(m, f);
      }
      return null;
    }
    function p(m, f, h, w) {
      var k = f !== null ? f.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : u(m, f, "" + h, w);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case lr:
            return h.key === k ? s(m, f, h, w) : null;
          case It:
            return h.key === k ? a(m, f, h, w) : null;
          case qe:
            return k = h._init, p(m, f, k(h._payload), w);
        }
        if (xn(h) || dn(h)) return k !== null ? null : c(m, f, h, w, null);
        hr(m, h);
      }
      return null;
    }
    function v(m, f, h, w, k) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(h) || null, u(f, m, "" + w, k);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case lr:
            return m = m.get(w.key === null ? h : w.key) || null, s(f, m, w, k);
          case It:
            return m = m.get(w.key === null ? h : w.key) || null, a(f, m, w, k);
          case qe:
            var E = w._init;
            return v(m, f, h, E(w._payload), k);
        }
        if (xn(w) || dn(w)) return m = m.get(h) || null, c(f, m, w, k, null);
        hr(f, w);
      }
      return null;
    }
    function y(m, f, h, w) {
      for (var k = null, E = null, T = f, N = f = 0, W = null; T !== null && N < h.length; N++) {
        T.index > N ? (W = T, T = null) : W = T.sibling;
        var L = p(m, T, h[N], w);
        if (L === null) {
          T === null && (T = W);
          break;
        }
        e && T && L.alternate === null && t(m, T), f = o(L, f, N), E === null ? k = L : E.sibling = L, E = L, T = W;
      }
      if (N === h.length) return n(m, T), $ && wt(m, N), k;
      if (T === null) {
        for (; N < h.length; N++) T = d(m, h[N], w), T !== null && (f = o(T, f, N), E === null ? k = T : E.sibling = T, E = T);
        return $ && wt(m, N), k;
      }
      for (T = r(m, T); N < h.length; N++) W = v(T, m, N, h[N], w), W !== null && (e && W.alternate !== null && T.delete(W.key === null ? N : W.key), f = o(W, f, N), E === null ? k = W : E.sibling = W, E = W);
      return e && T.forEach(function(Ne) {
        return t(m, Ne);
      }), $ && wt(m, N), k;
    }
    function x(m, f, h, w) {
      var k = dn(h);
      if (typeof k != "function") throw Error(S(150));
      if (h = k.call(h), h == null) throw Error(S(151));
      for (var E = k = null, T = f, N = f = 0, W = null, L = h.next(); T !== null && !L.done; N++, L = h.next()) {
        T.index > N ? (W = T, T = null) : W = T.sibling;
        var Ne = p(m, T, L.value, w);
        if (Ne === null) {
          T === null && (T = W);
          break;
        }
        e && T && Ne.alternate === null && t(m, T), f = o(Ne, f, N), E === null ? k = Ne : E.sibling = Ne, E = Ne, T = W;
      }
      if (L.done) return n(m, T), $ && wt(m, N), k;
      if (T === null) {
        for (; !L.done; N++, L = h.next()) L = d(m, L.value, w), L !== null && (f = o(L, f, N), E === null ? k = L : E.sibling = L, E = L);
        return $ && wt(m, N), k;
      }
      for (T = r(m, T); !L.done; N++, L = h.next()) L = v(T, m, N, L.value, w), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? N : L.key), f = o(L, f, N), E === null ? k = L : E.sibling = L, E = L);
      return e && T.forEach(function(cn) {
        return t(m, cn);
      }), $ && wt(m, N), k;
    }
    function j(m, f, h, w) {
      if (typeof h == "object" && h !== null && h.type === Dt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case lr:
            e: {
              for (var k = h.key, E = f; E !== null; ) {
                if (E.key === k) {
                  if (k = h.type, k === Dt) {
                    if (E.tag === 7) {
                      n(m, E.sibling), f = l(E, h.props.children), f.return = m, m = f;
                      break e;
                    }
                  } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Eu(k) === E.type) {
                    n(m, E.sibling), f = l(E, h.props), f.ref = vn(m, E, h), f.return = m, m = f;
                    break e;
                  }
                  n(m, E);
                  break;
                } else t(m, E);
                E = E.sibling;
              }
              h.type === Dt ? (f = Tt(h.props.children, m.mode, w, h.key), f.return = m, m = f) : (w = zr(h.type, h.key, h.props, null, m.mode, w), w.ref = vn(m, f, h), w.return = m, m = w);
            }
            return i(m);
          case It:
            e: {
              for (E = h.key; f !== null; ) {
                if (f.key === E) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                  n(m, f.sibling), f = l(f, h.children || []), f.return = m, m = f;
                  break e;
                } else {
                  n(m, f);
                  break;
                }
                else t(m, f);
                f = f.sibling;
              }
              f = Gl(h, m.mode, w), f.return = m, m = f;
            }
            return i(m);
          case qe:
            return E = h._init, j(m, f, E(h._payload), w);
        }
        if (xn(h)) return y(m, f, h, w);
        if (dn(h)) return x(m, f, h, w);
        hr(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(m, f.sibling), f = l(f, h), f.return = m, m = f) : (n(m, f), f = Ql(h, m.mode, w), f.return = m, m = f), i(m)) : n(m, f);
    }
    return j;
  }
  var nn = ga(true), va = ga(false), Qr = ht(null), Gr = null, Wt = null, ci = null;
  function fi() {
    ci = Wt = Gr = null;
  }
  function di(e) {
    var t = Qr.current;
    F(Qr), e._currentValue = t;
  }
  function Eo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Jt(e, t) {
    Gr = e, ci = Wt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = true), e.firstContext = null);
  }
  function _e(e) {
    var t = e._currentValue;
    if (ci !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, Wt === null) {
      if (Gr === null) throw Error(S(308));
      Wt = e, Gr.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else Wt = Wt.next = e;
    return t;
  }
  var kt = null;
  function pi(e) {
    kt === null ? kt = [
      e
    ] : kt.push(e);
  }
  function ya(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ke(e, r);
  }
  function Ke(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var be = false;
  function mi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function wa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function We(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ke(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ke(e, n);
  }
  function _r(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, bo(e, n);
    }
  }
  function Cu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = false;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, a = s.next;
      s.next = null, i === null ? o = a : i.next = a, i = s;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== i && (u === null ? c.firstBaseUpdate = a : u.next = a, c.lastBaseUpdate = s));
    }
    if (o !== null) {
      var d = l.baseState;
      i = 0, c = a = s = null, u = o;
      do {
        var p = u.lane, v = u.eventTime;
        if ((r & p) === p) {
          c !== null && (c = c.next = {
            eventTime: v,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var y = e, x = u;
            switch (p = t, v = n, x.tag) {
              case 1:
                if (y = x.payload, typeof y == "function") {
                  d = y.call(v, d, p);
                  break e;
                }
                d = y;
                break e;
              case 3:
                y.flags = y.flags & -65537 | 128;
              case 0:
                if (y = x.payload, p = typeof y == "function" ? y.call(v, d, p) : y, p == null) break e;
                d = V({}, d, p);
                break e;
              case 2:
                be = true;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [
            u
          ] : p.push(u));
        } else v = {
          eventTime: v,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, c === null ? (a = c = v, s = d) : c = c.next = v, i |= p;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
        }
      } while (true);
      if (c === null && (s = d), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Rt |= i, e.lanes = i, e.memoizedState = d;
    }
  }
  function _u(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
        l.call(r);
      }
    }
  }
  var er = {}, $e = ht(er), Wn = ht(er), Qn = ht(er);
  function Et(e) {
    if (e === er) throw Error(S(174));
    return e;
  }
  function hi(e, t) {
    switch (D(Qn, t), D(Wn, e), D($e, er), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e);
    }
    F($e), D($e, t);
  }
  function rn() {
    F($e), F(Wn), F(Qn);
  }
  function Sa(e) {
    Et(Qn.current);
    var t = Et($e.current), n = no(t, e.type);
    t !== n && (D(Wn, e), D($e, n));
  }
  function gi(e) {
    Wn.current === e && (F($e), F(Wn));
  }
  var U = ht(0);
  function Yr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var $l = [];
  function vi() {
    for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
    $l.length = 0;
  }
  var Tr = Xe.ReactCurrentDispatcher, Ul = Xe.ReactCurrentBatchConfig, jt = 0, B = null, Y = null, J = null, Xr = false, jn = false, Gn = 0, md = 0;
  function ne() {
    throw Error(S(321));
  }
  function yi(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Me(e[n], t[n])) return false;
    return true;
  }
  function wi(e, t, n, r, l, o) {
    if (jt = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tr.current = e === null || e.memoizedState === null ? yd : wd, e = n(r, l), jn) {
      o = 0;
      do {
        if (jn = false, Gn = 0, 25 <= o) throw Error(S(301));
        o += 1, J = Y = null, t.updateQueue = null, Tr.current = Sd, e = n(r, l);
      } while (jn);
    }
    if (Tr.current = Zr, t = Y !== null && Y.next !== null, jt = 0, J = Y = B = null, Xr = false, t) throw Error(S(300));
    return e;
  }
  function Si() {
    var e = Gn !== 0;
    return Gn = 0, e;
  }
  function De() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return J === null ? B.memoizedState = J = e : J = J.next = e, J;
  }
  function Te() {
    if (Y === null) {
      var e = B.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Y.next;
    var t = J === null ? B.memoizedState : J.next;
    if (t !== null) J = t, Y = e;
    else {
      if (e === null) throw Error(S(310));
      Y = e, e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null
      }, J === null ? B.memoizedState = J = e : J = J.next = e;
    }
    return J;
  }
  function Kn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bl(e) {
    var t = Te(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = Y, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, a = o;
      do {
        var c = a.lane;
        if ((jt & c) === c) s !== null && (s = s.next = {
          lane: 0,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
        else {
          var d = {
            lane: c,
            action: a.action,
            hasEagerState: a.hasEagerState,
            eagerState: a.eagerState,
            next: null
          };
          s === null ? (u = s = d, i = r) : s = s.next = d, B.lanes |= c, Rt |= c;
        }
        a = a.next;
      } while (a !== null && a !== o);
      s === null ? i = r : s.next = u, Me(r, t.memoizedState) || (fe = true), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, B.lanes |= o, Rt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function Vl(e) {
    var t = Te(), n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      Me(o, t.memoizedState) || (fe = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function xa() {
  }
  function ka(e, t) {
    var n = B, r = Te(), l = t(), o = !Me(r.memoizedState, l);
    if (o && (r.memoizedState = l, fe = true), r = r.queue, xi(_a.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
      if (n.flags |= 2048, Yn(9, Ca.bind(null, n, r, l, t), void 0, null), q === null) throw Error(S(349));
      jt & 30 || Ea(n, t, l);
    }
    return l;
  }
  function Ea(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = B.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, B.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function Ca(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ta(t) && Na(e);
  }
  function _a(e, t, n) {
    return n(function() {
      Ta(t) && Na(e);
    });
  }
  function Ta(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Me(e, n);
    } catch {
      return true;
    }
  }
  function Na(e) {
    var t = Ke(e, 1);
    t !== null && Oe(t, e, 1, -1);
  }
  function Tu(e) {
    var t = De();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = vd.bind(null, B, e), [
      t.memoizedState,
      e
    ];
  }
  function Yn(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = B.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Pa() {
    return Te().memoizedState;
  }
  function Nr(e, t, n, r) {
    var l = De();
    B.flags |= e, l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function al(e, t, n, r) {
    var l = Te();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) {
      var i = Y.memoizedState;
      if (o = i.destroy, r !== null && yi(r, i.deps)) {
        l.memoizedState = Yn(t, n, o, r);
        return;
      }
    }
    B.flags |= e, l.memoizedState = Yn(1 | t, n, o, r);
  }
  function Nu(e, t) {
    return Nr(8390656, 8, e, t);
  }
  function xi(e, t) {
    return al(2048, 8, e, t);
  }
  function ja(e, t) {
    return al(4, 2, e, t);
  }
  function Ra(e, t) {
    return al(4, 4, e, t);
  }
  function za(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function La(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, al(4, 4, za.bind(null, t, e), n);
  }
  function ki() {
  }
  function Oa(e, t) {
    var n = Te();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yi(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function Ma(e, t) {
    var n = Te();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && yi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function Ia(e, t, n) {
    return jt & 21 ? (Me(n, t) || (n = Us(), B.lanes |= n, Rt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, fe = true), e.memoizedState = n);
  }
  function hd(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(true);
    var r = Ul.transition;
    Ul.transition = {};
    try {
      e(false), t();
    } finally {
      I = n, Ul.transition = r;
    }
  }
  function Da() {
    return Te().memoizedState;
  }
  function gd(e, t, n) {
    var r = ct(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Aa(e)) Fa(t, n);
    else if (n = ya(e, t, n, r), n !== null) {
      var l = ue();
      Oe(n, e, r, l), $a(n, t, r);
    }
  }
  function vd(e, t, n) {
    var r = ct(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Aa(e)) Fa(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = true, l.eagerState = u, Me(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = ya(e, t, l, r), n !== null && (l = ue(), Oe(n, e, r, l), $a(n, t, r));
    }
  }
  function Aa(e) {
    var t = e.alternate;
    return e === B || t !== null && t === B;
  }
  function Fa(e, t) {
    jn = Xr = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $a(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, bo(e, n);
    }
  }
  var Zr = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: false
  }, yd = {
    readContext: _e,
    useCallback: function(e, t) {
      return De().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: _e,
    useEffect: Nu,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, Nr(4194308, 4, za.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return Nr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return Nr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = De();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = De();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = gd.bind(null, B, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = De();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: Tu,
    useDebugValue: ki,
    useDeferredValue: function(e) {
      return De().memoizedState = e;
    },
    useTransition: function() {
      var e = Tu(false), t = e[0];
      return e = hd.bind(null, e[1]), De().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = B, l = De();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (n = t(), q === null) throw Error(S(349));
        jt & 30 || Ea(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, Nu(_a.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, Yn(9, Ca.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = De(), t = q.identifierPrefix;
      if ($) {
        var n = He, r = Ve;
        n = (r & ~(1 << 32 - Le(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = md++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, wd = {
    readContext: _e,
    useCallback: Oa,
    useContext: _e,
    useEffect: xi,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Ra,
    useMemo: Ma,
    useReducer: Bl,
    useRef: Pa,
    useState: function() {
      return Bl(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function(e) {
      var t = Te();
      return Ia(t, Y.memoizedState, e);
    },
    useTransition: function() {
      var e = Bl(Kn)[0], t = Te().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: xa,
    useSyncExternalStore: ka,
    useId: Da,
    unstable_isNewReconciler: false
  }, Sd = {
    readContext: _e,
    useCallback: Oa,
    useContext: _e,
    useEffect: xi,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Ra,
    useMemo: Ma,
    useReducer: Vl,
    useRef: Pa,
    useState: function() {
      return Vl(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function(e) {
      var t = Te();
      return Y === null ? t.memoizedState = e : Ia(t, Y.memoizedState, e);
    },
    useTransition: function() {
      var e = Vl(Kn)[0], t = Te().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: xa,
    useSyncExternalStore: ka,
    useId: Da,
    unstable_isNewReconciler: false
  };
  function je(e, t) {
    if (e && e.defaultProps) {
      t = V({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Co(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var cl = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? Ot(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ue(), l = ct(e), o = We(r, l);
      o.payload = t, n != null && (o.callback = n), t = st(e, o, l), t !== null && (Oe(t, e, l, r), _r(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ue(), l = ct(e), o = We(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = st(e, o, l), t !== null && (Oe(t, e, l, r), _r(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ue(), r = ct(e), l = We(n, r);
      l.tag = 2, t != null && (l.callback = t), t = st(e, l, r), t !== null && (Oe(t, e, r, n), _r(t, e, r));
    }
  };
  function Pu(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, o) : true;
  }
  function Ua(e, t, n) {
    var r = false, l = pt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = _e(o) : (l = pe(t) ? Nt : oe.current, r = t.contextTypes, o = (r = r != null) ? en(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ju(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null);
  }
  function _o(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, mi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = _e(o) : (o = pe(t) ? Nt : oe.current, l.context = en(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Co(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && cl.enqueueReplaceState(l, l.state, null), Kr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ln(e, t) {
    try {
      var n = "", r = t;
      do
        n += Kc(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null
    };
  }
  function Hl(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function To(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var xd = typeof WeakMap == "function" ? WeakMap : Map;
  function Ba(e, t, n) {
    n = We(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      qr || (qr = true, Do = r), To(e, t);
    }, n;
  }
  function Va(e, t, n) {
    n = We(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        To(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      To(e, t), typeof r != "function" && (at === null ? at = /* @__PURE__ */ new Set([
        this
      ]) : at.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : ""
      });
    }), n;
  }
  function Ru(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new xd();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Id.bind(null, e, t, n), t.then(e, e));
  }
  function zu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1), t.tag = 2, st(n, t, 1))), n.lanes |= 1), e);
  }
  var kd = Xe.ReactCurrentOwner, fe = false;
  function ie(e, t, n, r) {
    t.child = e === null ? va(t, null, n, r) : nn(t, e.child, n, r);
  }
  function Ou(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Jt(t, l), r = wi(e, t, n, r, o, l), n = Si(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : ($ && n && ui(t), t.flags |= 1, ie(e, t, r, l), t.child);
  }
  function Mu(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ri(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ha(e, t, o, r, l)) : (e = zr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Un, n(i, r) && e.ref === t.ref) return Ye(e, t, l);
    }
    return t.flags |= 1, e = ft(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ha(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Un(o, r) && e.ref === t.ref) if (fe = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = true);
      else return t.lanes = e.lanes, Ye(e, t, l);
    }
    return No(e, t, n, r, l);
  }
  function Wa(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, D(Gt, he), he |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, D(Gt, he), he |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, D(Gt, he), he |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(Gt, he), he |= r;
    return ie(e, t, l, n), t.child;
  }
  function Qa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function No(e, t, n, r, l) {
    var o = pe(n) ? Nt : oe.current;
    return o = en(t, o), Jt(t, l), n = wi(e, t, n, r, o, l), r = Si(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : ($ && r && ui(t), t.flags |= 1, ie(e, t, n, l), t.child);
  }
  function Iu(e, t, n, r, l) {
    if (pe(n)) {
      var o = true;
      Vr(t);
    } else o = false;
    if (Jt(t, l), t.stateNode === null) Pr(e, t), Ua(t, n, r), _o(t, n, r, l), r = true;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var s = i.context, a = n.contextType;
      typeof a == "object" && a !== null ? a = _e(a) : (a = pe(n) ? Nt : oe.current, a = en(t, a));
      var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ju(t, i, r, a), be = false;
      var p = t.memoizedState;
      i.state = p, Kr(t, r, i, l), s = t.memoizedState, u !== r || p !== s || de.current || be ? (typeof c == "function" && (Co(t, n, c, r), s = t.memoizedState), (u = be || Pu(t, n, u, r, p, s, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      i = t.stateNode, wa(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : je(t.type, u), i.props = a, d = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? Nt : oe.current, s = en(t, s));
      var v = n.getDerivedStateFromProps;
      (c = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || p !== s) && ju(t, i, r, s), be = false, p = t.memoizedState, i.state = p, Kr(t, r, i, l);
      var y = t.memoizedState;
      u !== d || p !== y || de.current || be ? (typeof v == "function" && (Co(t, n, v, r), y = t.memoizedState), (a = be || Pu(t, n, a, r, p, y, s) || false) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return Po(e, t, n, r, o, l);
  }
  function Po(e, t, n, r, l, o) {
    Qa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Su(t, n, false), Ye(e, t, o);
    r = t.stateNode, kd.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = nn(t, e.child, null, o), t.child = nn(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && Su(t, n, true), t.child;
  }
  function Ga(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, false), hi(e, t.containerInfo);
  }
  function Du(e, t, n, r, l) {
    return tn(), ai(l), t.flags |= 256, ie(e, t, n, r), t.child;
  }
  var jo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Ro(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function Ka(e, t, n) {
    var r = t.pendingProps, l = U.current, o = false, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(U, l & 1), e === null) return ko(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = pl(i, r, 0, null), e = Tt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ro(n), t.memoizedState = jo, e) : Ei(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Ed(e, t, i, r, u, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var s = {
        mode: "hidden",
        children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = ft(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = ft(u, o) : (o = Tt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ro(n) : {
        baseLanes: i.baseLanes | n,
        cachePool: null,
        transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = jo, r;
    }
    return o = e.child, e = o.sibling, r = ft(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ei(e, t) {
    return t = pl({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function gr(e, t, n, r) {
    return r !== null && ai(r), nn(t, e.child, null, n), e = Ei(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ed(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(S(422))), gr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = pl({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Tt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && nn(t, e.child, null, i), t.child.memoizedState = Ro(i), t.memoizedState = jo, o);
    if (!(t.mode & 1)) return gr(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(S(419)), r = Hl(o, r, void 0), gr(e, t, i, r);
    }
    if (u = (i & e.childLanes) !== 0, fe || u) {
      if (r = q, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Oe(r, e, l, -1));
      }
      return ji(), r = Hl(Error(S(421))), gr(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = ut(l.nextSibling), ve = t, $ = true, ze = null, e !== null && (xe[ke++] = Ve, xe[ke++] = He, xe[ke++] = Pt, Ve = e.id, He = e.overflow, Pt = t), t = Ei(t, r.children), t.flags |= 4096, t);
  }
  function Au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Eo(e.return, t, n);
  }
  function Wl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function Ya(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ie(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
        else if (e.tag === 19) Au(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (D(U, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Yr(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wl(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Yr(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Wl(t, true, n, null, o);
        break;
      case "together":
        Wl(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ye(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
      for (e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ft(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Cd(e, t, n) {
    switch (t.tag) {
      case 3:
        Ga(t), tn();
        break;
      case 5:
        Sa(t);
        break;
      case 1:
        pe(t.type) && Vr(t);
        break;
      case 4:
        hi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        D(Qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D(U, U.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ka(e, t, n) : (D(U, U.current & 1), e = Ye(e, t, n), e !== null ? e.sibling : null);
        D(U, U.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Ya(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(U, U.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Wa(e, t, n);
    }
    return Ye(e, t, n);
  }
  var Xa, zo, Za, Ja;
  Xa = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  zo = function() {
  };
  Za = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Et($e.current);
      var o = null;
      switch (n) {
        case "input":
          l = ql(e, l), r = ql(e, r), o = [];
          break;
        case "select":
          l = V({}, l, {
            value: void 0
          }), r = V({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = to(e, l), r = to(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur);
      }
      ro(n, r);
      var i;
      n = null;
      for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
        var u = l[a];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (On.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
      for (a in r) {
        var s = r[a];
        if (u = l == null ? void 0 : l[a], r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
        } else n || (o || (o = []), o.push(a, n)), n = s;
        else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (On.hasOwnProperty(a) ? (s != null && a === "onScroll" && A("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
      }
      n && (o = o || []).push("style", n);
      var a = o;
      (t.updateQueue = a) && (t.flags |= 4);
    }
  };
  Ja = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yn(e, t) {
    if (!$) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function _d(e, t, n) {
    var r = t.pendingProps;
    switch (si(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return re(t), null;
      case 1:
        return pe(t.type) && Br(), re(t), null;
      case 3:
        return r = t.stateNode, rn(), F(de), F(oe), vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ze !== null && ($o(ze), ze = null))), zo(e, t), re(t), null;
      case 5:
        gi(t);
        var l = Et(Qn.current);
        if (n = t.type, e !== null && t.stateNode != null) Za(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(S(166));
            return re(t), null;
          }
          if (e = Et($e.current), mr(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ae] = t, r[Hn] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                A("cancel", r), A("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) A(En[l], r);
                break;
              case "source":
                A("error", r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", r), A("load", r);
                break;
              case "details":
                A("toggle", r);
                break;
              case "input":
                Gi(r, o), A("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, A("invalid", r);
                break;
              case "textarea":
                Yi(r, o), A("invalid", r);
            }
            ro(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && pr(r.textContent, u, e), l = [
                "children",
                u
              ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && pr(r.textContent, u, e), l = [
                "children",
                "" + u
              ]) : On.hasOwnProperty(i) && u != null && i === "onScroll" && A("scroll", r);
            }
            switch (n) {
              case "input":
                or(r), Ki(r, o, true);
                break;
              case "textarea":
                or(r), Xi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ur);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _s(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
              is: r.is
            }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ae] = t, e[Hn] = r, Xa(e, t, false, false), t.stateNode = e;
            e: {
              switch (i = lo(n, r), n) {
                case "dialog":
                  A("cancel", e), A("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  A("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < En.length; l++) A(En[l], e);
                  l = r;
                  break;
                case "source":
                  A("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  A("error", e), A("load", e), l = r;
                  break;
                case "details":
                  A("toggle", e), l = r;
                  break;
                case "input":
                  Gi(e, r), l = ql(e, r), A("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, l = V({}, r, {
                    value: void 0
                  }), A("invalid", e);
                  break;
                case "textarea":
                  Yi(e, r), l = to(e, r), A("invalid", e);
                  break;
                default:
                  l = r;
              }
              ro(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Ps(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ts(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (On.hasOwnProperty(o) ? s != null && o === "onScroll" && A("scroll", e) : s != null && Ko(e, o, s, i));
              }
              switch (n) {
                case "input":
                  or(e), Ki(e, r, false);
                  break;
                case "textarea":
                  or(e), Xi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + dt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Kt(e, !!r.multiple, o, false) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ur);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return re(t), null;
      case 6:
        if (e && t.stateNode != null) Ja(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
          if (n = Et(Qn.current), Et($e.current), mr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, (o = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r;
        }
        return re(t), null;
      case 13:
        if (F(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($ && ge !== null && t.mode & 1 && !(t.flags & 128)) ha(), tn(), t.flags |= 98560, o = false;
          else if (o = mr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(S(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
              o[Ae] = t;
            } else tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            re(t), o = false;
          } else ze !== null && ($o(ze), ze = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || U.current & 1 ? X === 0 && (X = 3) : ji())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
      case 4:
        return rn(), zo(e, t), e === null && Bn(t.stateNode.containerInfo), re(t), null;
      case 10:
        return di(t.type._context), re(t), null;
      case 17:
        return pe(t.type) && Br(), re(t), null;
      case 19:
        if (F(U), o = t.memoizedState, o === null) return re(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) yn(o, false);
        else {
          if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = Yr(e), i !== null) {
              for (t.flags |= 128, yn(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return D(U, U.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && G() > on && (t.flags |= 128, r = true, yn(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Yr(i), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yn(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return re(t), null;
          } else 2 * G() - o.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = true, yn(o, false), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = G(), t.sibling = null, n = U.current, D(U, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
      case 22:
      case 23:
        return Pi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Td(e, t) {
    switch (si(t), t.tag) {
      case 1:
        return pe(t.type) && Br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return rn(), F(de), F(oe), vi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return gi(t), null;
      case 13:
        if (F(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          tn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return F(U), null;
      case 4:
        return rn(), null;
      case 10:
        return di(t.type._context), null;
      case 22:
      case 23:
        return Pi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vr = false, le = false, Nd = typeof WeakSet == "function" ? WeakSet : Set, C = null;
  function Qt(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      H(e, t, r);
    }
    else n.current = null;
  }
  function Lo(e, t, n) {
    try {
      n();
    } catch (r) {
      H(e, t, r);
    }
  }
  var Fu = false;
  function Pd(e, t) {
    if (ho = Ar, e = na(), ii(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, c = 0, d = e, p = null;
          t: for (; ; ) {
            for (var v; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (s = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (v = d.firstChild) !== null; ) p = d, d = v;
            for (; ; ) {
              if (d === e) break t;
              if (p === n && ++a === l && (u = i), p === o && ++c === r && (s = i), (v = d.nextSibling) !== null) break;
              d = p, p = d.parentNode;
            }
            d = v;
          }
          n = u === -1 || s === -1 ? null : {
            start: u,
            end: s
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (go = {
      focusedElem: e,
      selectionRange: n
    }, Ar = false, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
    else for (; C !== null; ) {
      t = C;
      try {
        var y = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (y !== null) {
              var x = y.memoizedProps, j = y.memoizedState, m = t.stateNode, f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : je(t.type, x), j);
              m.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          case 3:
            var h = t.stateNode.containerInfo;
            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(S(163));
        }
      } catch (w) {
        H(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, C = e;
        break;
      }
      C = t.return;
    }
    return y = Fu, Fu = false, y;
  }
  function Rn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Lo(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function qa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ae], delete t[Hn], delete t[wo], delete t[cd], delete t[fd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ba(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $u(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ba(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Mo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ur));
    else if (r !== 4 && (e = e.child, e !== null)) for (Mo(e, t, n), e = e.sibling; e !== null; ) Mo(e, t, n), e = e.sibling;
  }
  function Io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), e = e.sibling;
  }
  var b = null, Re = false;
  function Ze(e, t, n) {
    for (n = n.child; n !== null; ) ec(e, t, n), n = n.sibling;
  }
  function ec(e, t, n) {
    if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
      Fe.onCommitFiberUnmount(rl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        le || Qt(n, t);
      case 6:
        var r = b, l = Re;
        b = null, Ze(e, t, n), b = r, Re = l, b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
      case 18:
        b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? Al(e.parentNode, n) : e.nodeType === 1 && Al(e, n), Fn(e)) : Al(b, n.stateNode));
        break;
      case 4:
        r = b, l = Re, b = n.stateNode.containerInfo, Re = true, Ze(e, t, n), b = r, Re = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && Lo(n, t, i), l = l.next;
          } while (l !== r);
        }
        Ze(e, t, n);
        break;
      case 1:
        if (!le && (Qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
        Ze(e, t, n);
        break;
      case 21:
        Ze(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Ze(e, t, n), le = r) : Ze(e, t, n);
        break;
      default:
        Ze(e, t, n);
    }
  }
  function Uu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Nd()), t.forEach(function(r) {
        var l = Ad.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Pe(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              b = u.stateNode, Re = false;
              break e;
            case 3:
              b = u.stateNode.containerInfo, Re = true;
              break e;
            case 4:
              b = u.stateNode.containerInfo, Re = true;
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(S(160));
        ec(o, i, l), b = null, Re = false;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        H(l, t, a);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) tc(t, e), t = t.sibling;
  }
  function tc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Pe(t, e), Ie(e), r & 4) {
          try {
            Rn(3, e, e.return), fl(3, e);
          } catch (x) {
            H(e, e.return, x);
          }
          try {
            Rn(5, e, e.return);
          } catch (x) {
            H(e, e.return, x);
          }
        }
        break;
      case 1:
        Pe(t, e), Ie(e), r & 512 && n !== null && Qt(n, n.return);
        break;
      case 5:
        if (Pe(t, e), Ie(e), r & 512 && n !== null && Qt(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mn(l, "");
          } catch (x) {
            H(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && Es(l, o), lo(u, i);
            var a = lo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var c = s[i], d = s[i + 1];
              c === "style" ? Ps(l, d) : c === "dangerouslySetInnerHTML" ? Ts(l, d) : c === "children" ? Mn(l, d) : Ko(l, c, d, a);
            }
            switch (u) {
              case "input":
                bl(l, o);
                break;
              case "textarea":
                Cs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? Kt(l, !!o.multiple, v, false) : p !== !!o.multiple && (o.defaultValue != null ? Kt(l, !!o.multiple, o.defaultValue, true) : Kt(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[Hn] = o;
          } catch (x) {
            H(e, e.return, x);
          }
        }
        break;
      case 6:
        if (Pe(t, e), Ie(e), r & 4) {
          if (e.stateNode === null) throw Error(S(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (x) {
            H(e, e.return, x);
          }
        }
        break;
      case 3:
        if (Pe(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Fn(t.containerInfo);
        } catch (x) {
          H(e, e.return, x);
        }
        break;
      case 4:
        Pe(t, e), Ie(e);
        break;
      case 13:
        Pe(t, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = G())), r & 4 && Uu(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (a = le) || c, Pe(t, e), le = a) : Pe(t, e), Ie(e), r & 8192) {
          if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (C = e, c = e.child; c !== null; ) {
            for (d = C = c; C !== null; ) {
              switch (p = C, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, p, p.return);
                  break;
                case 1:
                  Qt(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (x) {
                      H(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Qt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vu(d);
                    continue;
                  }
              }
              v !== null ? (v.return = p, C = v) : Vu(d);
            }
            c = c.sibling;
          }
          e: for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  l = d.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ns("display", i));
                } catch (x) {
                  H(e, e.return, x);
                }
              }
            } else if (d.tag === 6) {
              if (c === null) try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (x) {
                H(e, e.return, x);
              }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
        }
        break;
      case 19:
        Pe(t, e), Ie(e), r & 4 && Uu(e);
        break;
      case 21:
        break;
      default:
        Pe(t, e), Ie(e);
    }
  }
  function Ie(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ba(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(S(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mn(l, ""), r.flags &= -33);
            var o = $u(e);
            Io(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = $u(e);
            Mo(e, u, i);
            break;
          default:
            throw Error(S(161));
        }
      } catch (s) {
        H(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jd(e, t, n) {
    C = e, nc(e);
  }
  function nc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || vr;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || le;
          u = vr;
          var a = le;
          if (vr = i, (le = s) && !a) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Hu(l) : s !== null ? (s.return = i, C = s) : Hu(l);
          for (; o !== null; ) C = o, nc(o), o = o.sibling;
          C = l, vr = u, le = a;
        }
        Bu(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Bu(e);
    }
  }
  function Bu(e) {
    for (; C !== null; ) {
      var t = C;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && _u(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                _u(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Fn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
          le || t.flags & 512 && Oo(t);
        } catch (p) {
          H(t, t.return, p);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function Vu(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, C = n;
        break;
      }
      C = t.return;
    }
  }
  function Hu(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              fl(4, t);
            } catch (s) {
              H(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                H(t, l, s);
              }
            }
            var o = t.return;
            try {
              Oo(t);
            } catch (s) {
              H(t, o, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Oo(t);
            } catch (s) {
              H(t, i, s);
            }
        }
      } catch (s) {
        H(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, C = u;
        break;
      }
      C = t.return;
    }
  }
  var Rd = Math.ceil, Jr = Xe.ReactCurrentDispatcher, Ci = Xe.ReactCurrentOwner, Ce = Xe.ReactCurrentBatchConfig, M = 0, q = null, K = null, ee = 0, he = 0, Gt = ht(0), X = 0, Xn = null, Rt = 0, dl = 0, _i = 0, zn = null, ce = null, Ti = 0, on = 1 / 0, Ue = null, qr = false, Do = null, at = null, yr = false, rt = null, br = 0, Ln = 0, Ao = null, jr = -1, Rr = 0;
  function ue() {
    return M & 6 ? G() : jr !== -1 ? jr : jr = G();
  }
  function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : pd.transition !== null ? (Rr === 0 && (Rr = Us()), Rr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ks(e.type)), e) : 1;
  }
  function Oe(e, t, n, r) {
    if (50 < Ln) throw Ln = 0, Ao = null, Error(S(185));
    Jn(e, n, r), (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (dl |= n), X === 4 && tt(e, ee)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (on = G() + 500, sl && gt()));
  }
  function me(e, t) {
    var n = e.callbackNode;
    pf(e, t);
    var r = Dr(e, e === q ? ee : 0);
    if (r === 0) n !== null && qi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && qi(n), t === 1) e.tag === 0 ? dd(Wu.bind(null, e)) : da(Wu.bind(null, e)), sd(function() {
        !(M & 6) && gt();
      }), n = null;
      else {
        switch (Bs(r)) {
          case 1:
            n = qo;
            break;
          case 4:
            n = Fs;
            break;
          case 16:
            n = Ir;
            break;
          case 536870912:
            n = $s;
            break;
          default:
            n = Ir;
        }
        n = cc(n, rc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function rc(e, t) {
    if (jr = -1, Rr = 0, M & 6) throw Error(S(327));
    var n = e.callbackNode;
    if (qt() && e.callbackNode !== n) return null;
    var r = Dr(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
    else {
      t = r;
      var l = M;
      M |= 2;
      var o = oc();
      (q !== e || ee !== t) && (Ue = null, on = G() + 500, _t(e, t));
      do
        try {
          Od();
          break;
        } catch (u) {
          lc(e, u);
        }
      while (true);
      fi(), Jr.current = o, M = l, K !== null ? t = 0 : (q = null, ee = 0, t = X);
    }
    if (t !== 0) {
      if (t === 2 && (l = ao(e), l !== 0 && (r = l, t = Fo(e, l))), t === 1) throw n = Xn, _t(e, 0), tt(e, r), me(e, G()), n;
      if (t === 6) tt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !zd(l) && (t = el(e, r), t === 2 && (o = ao(e), o !== 0 && (r = o, t = Fo(e, o))), t === 1)) throw n = Xn, _t(e, 0), tt(e, r), me(e, G()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            St(e, ce, Ue);
            break;
          case 3:
            if (tt(e, r), (r & 130023424) === r && (t = Ti + 500 - G(), 10 < t)) {
              if (Dr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ue(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = yo(St.bind(null, e, ce, Ue), t);
              break;
            }
            St(e, ce, Ue);
            break;
          case 4:
            if (tt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Le(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = yo(St.bind(null, e, ce, Ue), r);
              break;
            }
            St(e, ce, Ue);
            break;
          case 5:
            St(e, ce, Ue);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return me(e, G()), e.callbackNode === n ? rc.bind(null, e) : null;
  }
  function Fo(e, t) {
    var n = zn;
    return e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256), e = el(e, t), e !== 2 && (t = ce, ce = n, t !== null && $o(t)), e;
  }
  function $o(e) {
    ce === null ? ce = e : ce.push.apply(ce, e);
  }
  function zd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function tt(e, t) {
    for (t &= ~_i, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Le(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Wu(e) {
    if (M & 6) throw Error(S(327));
    qt();
    var t = Dr(e, 0);
    if (!(t & 1)) return me(e, G()), null;
    var n = el(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && (t = r, n = Fo(e, r));
    }
    if (n === 1) throw n = Xn, _t(e, 0), tt(e, t), me(e, G()), n;
    if (n === 6) throw Error(S(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ce, Ue), me(e, G()), null;
  }
  function Ni(e, t) {
    var n = M;
    M |= 1;
    try {
      return e(t);
    } finally {
      M = n, M === 0 && (on = G() + 500, sl && gt());
    }
  }
  function zt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && qt();
    var t = M;
    M |= 1;
    var n = Ce.transition, r = I;
    try {
      if (Ce.transition = null, I = 1, e) return e();
    } finally {
      I = r, Ce.transition = n, M = t, !(M & 6) && gt();
    }
  }
  function Pi() {
    he = Gt.current, F(Gt);
  }
  function _t(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ud(n)), K !== null) for (n = K.return; n !== null; ) {
      var r = n;
      switch (si(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Br();
          break;
        case 3:
          rn(), F(de), F(oe), vi();
          break;
        case 5:
          gi(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          di(r.type._context);
          break;
        case 22:
        case 23:
          Pi();
      }
      n = n.return;
    }
    if (q = e, K = e = ft(e.current, null), ee = he = t, X = 0, Xn = null, _i = dl = Rt = 0, ce = zn = null, kt !== null) {
      for (t = 0; t < kt.length; t++) if (n = kt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      kt = null;
    }
    return e;
  }
  function lc(e, t) {
    do {
      var n = K;
      try {
        if (fi(), Tr.current = Zr, Xr) {
          for (var r = B.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Xr = false;
        }
        if (jt = 0, J = Y = B = null, jn = false, Gn = 0, Ci.current = null, n === null || n.return === null) {
          X = 1, Xn = t, K = null;
          break;
        }
        e: {
          var o = e, i = n.return, u = n, s = t;
          if (t = ee, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var a = s, c = u, d = c.tag;
            if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var p = c.alternate;
              p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var v = zu(i);
            if (v !== null) {
              v.flags &= -257, Lu(v, i, u, o, t), v.mode & 1 && Ru(o, a, t), t = v, s = a;
              var y = t.updateQueue;
              if (y === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), t.updateQueue = x;
              } else y.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Ru(o, a, t), ji();
                break e;
              }
              s = Error(S(426));
            }
          } else if ($ && u.mode & 1) {
            var j = zu(i);
            if (j !== null) {
              !(j.flags & 65536) && (j.flags |= 256), Lu(j, i, u, o, t), ai(ln(s, u));
              break e;
            }
          }
          o = s = ln(s, u), X !== 4 && (X = 2), zn === null ? zn = [
            o
          ] : zn.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var m = Ba(o, s, t);
                Cu(o, m);
                break e;
              case 1:
                u = s;
                var f = o.type, h = o.stateNode;
                if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (at === null || !at.has(h)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var w = Va(o, u, t);
                  Cu(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        uc(n);
      } catch (k) {
        t = k, K === n && n !== null && (K = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function oc() {
    var e = Jr.current;
    return Jr.current = Zr, e === null ? Zr : e;
  }
  function ji() {
    (X === 0 || X === 3 || X === 2) && (X = 4), q === null || !(Rt & 268435455) && !(dl & 268435455) || tt(q, ee);
  }
  function el(e, t) {
    var n = M;
    M |= 2;
    var r = oc();
    (q !== e || ee !== t) && (Ue = null, _t(e, t));
    do
      try {
        Ld();
        break;
      } catch (l) {
        lc(e, l);
      }
    while (true);
    if (fi(), M = n, Jr.current = r, K !== null) throw Error(S(261));
    return q = null, ee = 0, X;
  }
  function Ld() {
    for (; K !== null; ) ic(K);
  }
  function Od() {
    for (; K !== null && !rf(); ) ic(K);
  }
  function ic(e) {
    var t = ac(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, t === null ? uc(e) : K = t, Ci.current = null;
  }
  function uc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Td(n, t), n !== null) {
          n.flags &= 32767, K = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          X = 6, K = null;
          return;
        }
      } else if (n = _d(n, t, he), n !== null) {
        K = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        K = t;
        return;
      }
      K = t = e;
    } while (t !== null);
    X === 0 && (X = 5);
  }
  function St(e, t, n) {
    var r = I, l = Ce.transition;
    try {
      Ce.transition = null, I = 1, Md(e, t, n, r);
    } finally {
      Ce.transition = l, I = r;
    }
    return null;
  }
  function Md(e, t, n, r) {
    do
      qt();
    while (rt !== null);
    if (M & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (mf(e, o), e === q && (K = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yr || (yr = true, cc(Ir, function() {
      return qt(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Ce.transition, Ce.transition = null;
      var i = I;
      I = 1;
      var u = M;
      M |= 4, Ci.current = null, Pd(e, n), tc(n, e), ed(go), Ar = !!ho, go = ho = null, e.current = n, jd(n), lf(), M = u, I = i, Ce.transition = o;
    } else e.current = n;
    if (yr && (yr = false, rt = e, br = l), o = e.pendingLanes, o === 0 && (at = null), sf(n.stateNode), me(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (qr) throw qr = false, e = Do, Do = null, e;
    return br & 1 && e.tag !== 0 && qt(), o = e.pendingLanes, o & 1 ? e === Ao ? Ln++ : (Ln = 0, Ao = e) : Ln = 0, gt(), null;
  }
  function qt() {
    if (rt !== null) {
      var e = Bs(br), t = Ce.transition, n = I;
      try {
        if (Ce.transition = null, I = 16 > e ? 16 : e, rt === null) var r = false;
        else {
          if (e = rt, rt = null, br = 0, M & 6) throw Error(S(331));
          var l = M;
          for (M |= 4, C = e.current; C !== null; ) {
            var o = C, i = o.child;
            if (C.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var a = u[s];
                  for (C = a; C !== null; ) {
                    var c = C;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rn(8, c, o);
                    }
                    var d = c.child;
                    if (d !== null) d.return = c, C = d;
                    else for (; C !== null; ) {
                      c = C;
                      var p = c.sibling, v = c.return;
                      if (qa(c), c === a) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, C = p;
                        break;
                      }
                      C = v;
                    }
                  }
                }
                var y = o.alternate;
                if (y !== null) {
                  var x = y.child;
                  if (x !== null) {
                    y.child = null;
                    do {
                      var j = x.sibling;
                      x.sibling = null, x = j;
                    } while (x !== null);
                  }
                }
                C = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
            else e: for (; C !== null; ) {
              if (o = C, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Rn(9, o, o.return);
              }
              var m = o.sibling;
              if (m !== null) {
                m.return = o.return, C = m;
                break e;
              }
              C = o.return;
            }
          }
          var f = e.current;
          for (C = f; C !== null; ) {
            i = C;
            var h = i.child;
            if (i.subtreeFlags & 2064 && h !== null) h.return = i, C = h;
            else e: for (i = f; C !== null; ) {
              if (u = C, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fl(9, u);
                }
              } catch (k) {
                H(u, u.return, k);
              }
              if (u === i) {
                C = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                w.return = u.return, C = w;
                break e;
              }
              C = u.return;
            }
          }
          if (M = l, gt(), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
            Fe.onPostCommitFiberRoot(rl, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        I = n, Ce.transition = t;
      }
    }
    return false;
  }
  function Qu(e, t, n) {
    t = ln(n, t), t = Ba(e, t, 1), e = st(e, t, 1), t = ue(), e !== null && (Jn(e, 1, t), me(e, t));
  }
  function H(e, t, n) {
    if (e.tag === 3) Qu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Qu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
          e = ln(n, e), e = Va(t, e, 1), t = st(t, e, 1), e = ue(), t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Id(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > G() - Ti ? _t(e, 0) : _i |= n), me(e, t);
  }
  function sc(e, t) {
    t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
    var n = ue();
    e = Ke(e, t), e !== null && (Jn(e, t, n), me(e, n));
  }
  function Dd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), sc(e, n);
  }
  function Ad(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    r !== null && r.delete(t), sc(e, n);
  }
  var ac;
  ac = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return fe = false, Cd(e, t, n);
      fe = !!(e.flags & 131072);
    }
    else fe = false, $ && t.flags & 1048576 && pa(t, Wr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Pr(e, t), e = t.pendingProps;
        var l = en(t, oe.current);
        Jt(t, n), l = wi(null, t, r, e, l, n);
        var o = Si();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = true, Vr(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mi(t), l.updater = cl, t.stateNode = l, l._reactInternals = t, _o(t, r, e, n), t = Po(null, t, r, true, o, n)) : (t.tag = 0, $ && o && ui(t), ie(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Pr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = $d(r), e = je(r, e), l) {
            case 0:
              t = No(null, t, r, e, n);
              break e;
            case 1:
              t = Iu(null, t, r, e, n);
              break e;
            case 11:
              t = Ou(null, t, r, e, n);
              break e;
            case 14:
              t = Mu(null, t, r, je(r.type, e), n);
              break e;
          }
          throw Error(S(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), No(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Iu(e, t, r, l, n);
      case 3:
        e: {
          if (Ga(t), e === null) throw Error(S(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, wa(e, t), Kr(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: i.cache,
            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
            transitions: i.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = ln(Error(S(423)), t), t = Du(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = ln(Error(S(424)), t), t = Du(e, t, r, n, l);
            break e;
          } else for (ge = ut(t.stateNode.containerInfo.firstChild), ve = t, $ = true, ze = null, n = va(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (tn(), r === l) {
              t = Ye(e, t, n);
              break e;
            }
            ie(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Sa(t), e === null && ko(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, vo(r, l) ? i = null : o !== null && vo(r, o) && (t.flags |= 32), Qa(e, t), ie(e, t, i, n), t.child;
      case 6:
        return e === null && ko(t), null;
      case 13:
        return Ka(e, t, n);
      case 4:
        return hi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nn(t, null, r, n) : ie(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ou(e, t, r, l, n);
      case 7:
        return ie(e, t, t.pendingProps, n), t.child;
      case 8:
        return ie(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ie(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(Qr, r._currentValue), r._currentValue = i, o !== null) if (Me(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = We(-1, n & -n), s.tag = 2;
                    var a = o.updateQueue;
                    if (a !== null) {
                      a = a.shared;
                      var c = a.pending;
                      c === null ? s.next = s : (s.next = c.next, c.next = s), a.pending = s;
                    }
                  }
                  o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Eo(o.return, n, t), u.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(S(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Eo(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          ie(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Jt(t, n), l = _e(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), Mu(e, t, r, l, n);
      case 15:
        return Ha(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Pr(e, t), t.tag = 1, pe(r) ? (e = true, Vr(t)) : e = false, Jt(t, n), Ua(t, r, l), _o(t, r, l, n), Po(null, t, r, true, e, n);
      case 19:
        return Ya(e, t, n);
      case 22:
        return Wa(e, t, n);
    }
    throw Error(S(156, t.tag));
  };
  function cc(e, t) {
    return As(e, t);
  }
  function Fd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(e, t, n, r) {
    return new Fd(e, t, n, r);
  }
  function Ri(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $d(e) {
    if (typeof e == "function") return Ri(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Xo) return 11;
      if (e === Zo) return 14;
    }
    return 2;
  }
  function ft(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function zr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Ri(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Dt:
        return Tt(n.children, l, o, t);
      case Yo:
        i = 8, l |= 8;
        break;
      case Yl:
        return e = Ee(12, n, t, l | 2), e.elementType = Yl, e.lanes = o, e;
      case Xl:
        return e = Ee(13, n, t, l), e.elementType = Xl, e.lanes = o, e;
      case Zl:
        return e = Ee(19, n, t, l), e.elementType = Zl, e.lanes = o, e;
      case Ss:
        return pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ys:
            i = 10;
            break e;
          case ws:
            i = 9;
            break e;
          case Xo:
            i = 11;
            break e;
          case Zo:
            i = 14;
            break e;
          case qe:
            i = 16, r = null;
            break e;
        }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
    return t = Ee(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Tt(e, t, n, r) {
    return e = Ee(7, e, r, t), e.lanes = n, e;
  }
  function pl(e, t, n, r) {
    return e = Ee(22, e, r, t), e.elementType = Ss, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function Ql(e, t, n) {
    return e = Ee(6, e, null, t), e.lanes = n, e;
  }
  function Gl(e, t, n) {
    return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function Ud(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function zi(e, t, n, r, l, o, i, u, s) {
    return e = new Ud(e, t, n, u, s), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, mi(o), e;
  }
  function Bd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: It,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function fc(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
      if (Ot(e) !== e || e.tag !== 1) throw Error(S(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(S(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pe(n)) return fa(e, n, t);
    }
    return t;
  }
  function dc(e, t, n, r, l, o, i, u, s) {
    return e = zi(n, r, true, e, l, o, i, u, s), e.context = fc(null), n = e.current, r = ue(), l = ct(n), o = We(r, l), o.callback = t ?? null, st(n, o, l), e.current.lanes = l, Jn(e, l, r), me(e, r), e;
  }
  function ml(e, t, n, r) {
    var l = t.current, o = ue(), i = ct(l);
    return n = fc(n), t.context === null ? t.context = n : t.pendingContext = n, t = We(o, i), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = st(l, t, i), e !== null && (Oe(e, l, i, o), _r(e, l, i)), i;
  }
  function tl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Li(e, t) {
    Gu(e, t), (e = e.alternate) && Gu(e, t);
  }
  function Vd() {
    return null;
  }
  var pc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Oi(e) {
    this._internalRoot = e;
  }
  hl.prototype.render = Oi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    ml(e, t, null, null);
  };
  hl.prototype.unmount = Oi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zt(function() {
        ml(null, e, null, null);
      }), t[Ge] = null;
    }
  };
  function hl(e) {
    this._internalRoot = e;
  }
  hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ws();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++) ;
      et.splice(n, 0, e), n === 0 && Gs(e);
    }
  };
  function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ku() {
  }
  function Hd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var a = tl(i);
          o.call(a);
        };
      }
      var i = dc(t, r, e, 0, null, false, false, "", Ku);
      return e._reactRootContainer = i, e[Ge] = i.current, Bn(e.nodeType === 8 ? e.parentNode : e), zt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var a = tl(s);
        u.call(a);
      };
    }
    var s = zi(e, 0, false, null, null, false, false, "", Ku);
    return e._reactRootContainer = s, e[Ge] = s.current, Bn(e.nodeType === 8 ? e.parentNode : e), zt(function() {
      ml(t, s, n, r);
    }), s;
  }
  function vl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = tl(i);
          u.call(s);
        };
      }
      ml(t, i, e, l);
    } else i = Hd(n, t, e, l, r);
    return tl(i);
  }
  Vs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kn(t.pendingLanes);
          n !== 0 && (bo(t, n | 1), me(t, G()), !(M & 6) && (on = G() + 500, gt()));
        }
        break;
      case 13:
        zt(function() {
          var r = Ke(e, 1);
          if (r !== null) {
            var l = ue();
            Oe(r, e, 1, l);
          }
        }), Li(e, 1);
    }
  };
  ei = function(e) {
    if (e.tag === 13) {
      var t = Ke(e, 134217728);
      if (t !== null) {
        var n = ue();
        Oe(t, e, 134217728, n);
      }
      Li(e, 134217728);
    }
  };
  Hs = function(e) {
    if (e.tag === 13) {
      var t = ct(e), n = Ke(e, t);
      if (n !== null) {
        var r = ue();
        Oe(n, e, t, r);
      }
      Li(e, t);
    }
  };
  Ws = function() {
    return I;
  };
  Qs = function(e, t) {
    var n = I;
    try {
      return I = e, t();
    } finally {
      I = n;
    }
  };
  io = function(e, t, n) {
    switch (t) {
      case "input":
        if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = ul(r);
              if (!l) throw Error(S(90));
              ks(r), bl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Cs(e, n);
        break;
      case "select":
        t = n.value, t != null && Kt(e, !!n.multiple, t, false);
    }
  };
  zs = Ni;
  Ls = zt;
  var Wd = {
    usingClientEntryPoint: false,
    Events: [
      bn,
      Ut,
      ul,
      js,
      Rs,
      Ni
    ]
  }, wn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Qd = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Is(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Vd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wr.isDisabled && wr.supportsFiber) try {
      rl = wr.inject(Qd), Fe = wr;
    } catch {
    }
  }
  we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd;
  we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(t)) throw Error(S(200));
    return Bd(e, t, null, n);
  };
  we.createRoot = function(e, t) {
    if (!Mi(e)) throw Error(S(299));
    var n = false, r = "", l = pc;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = zi(e, 1, false, null, null, n, false, r, l), e[Ge] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), new Oi(t);
  };
  we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
    return e = Is(t), e = e === null ? null : e.stateNode, e;
  };
  we.flushSync = function(e) {
    return zt(e);
  };
  we.hydrate = function(e, t, n) {
    if (!gl(t)) throw Error(S(200));
    return vl(null, e, t, true, n);
  };
  we.hydrateRoot = function(e, t, n) {
    if (!Mi(e)) throw Error(S(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", i = pc;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = dc(t, null, e, 1, n ?? null, l, false, o, i), e[Ge] = t.current, Bn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new hl(t);
  };
  we.render = function(e, t, n) {
    if (!gl(t)) throw Error(S(200));
    return vl(null, e, t, false, n);
  };
  we.unmountComponentAtNode = function(e) {
    if (!gl(e)) throw Error(S(40));
    return e._reactRootContainer ? (zt(function() {
      vl(null, null, e, false, function() {
        e._reactRootContainer = null, e[Ge] = null;
      });
    }), true) : false;
  };
  we.unstable_batchedUpdates = Ni;
  we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return vl(e, t, n, false, r);
  };
  we.version = "18.3.1-next-f1338f8080-20240426";
  function mc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc);
    } catch (e) {
      console.error(e);
    }
  }
  mc(), ms.exports = we;
  var Gd = ms.exports, hc, Yu = Gd;
  hc = Yu.createRoot, Yu.hydrateRoot;
  const gc = O.createContext(null), Kd = "";
  function Yd({ children: e }) {
    const [t, n] = O.useState(null), [r, l] = O.useState(null), [o, i] = O.useState(true), [u, s] = O.useState(null), a = O.useCallback(async (y) => {
    }, []);
    O.useEffect(() => {
      {
        i(false);
        return;
      }
    }, []), O.useCallback((y) => {
      const x = y.credential;
      try {
        const j = JSON.parse(atob(x.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))), m = {
          email: j.email,
          name: j.name || j.email,
          picture: j.picture || null,
          idToken: x
        };
        n(m), s(null), localStorage.setItem("converter_user", JSON.stringify({
          email: m.email,
          name: m.name,
          picture: m.picture
        })), a(x);
      } catch {
        s("Failed to parse sign-in response");
      }
    }, [
      a
    ]);
    const c = O.useCallback(() => {
      {
        s("Google Sign-In not configured");
        return;
      }
    }, []), d = O.useCallback(() => {
      var _a2, _b;
      ((_b = (_a2 = window.google) == null ? void 0 : _a2.accounts) == null ? void 0 : _b.id) && window.google.accounts.id.disableAutoSelect(), n(null), l(null), localStorage.removeItem("converter_user");
    }, []), p = O.useCallback((y) => {
      y && l(y);
    }, []), v = {
      user: t,
      usage: r,
      loading: o,
      error: u,
      signIn: c,
      signOut: d,
      fetchUsage: a,
      updateUsageFromResponse: p,
      workerUrl: Kd
    };
    return g.jsx(gc.Provider, {
      value: v,
      children: e
    });
  }
  function Ii() {
    const e = O.useContext(gc);
    if (!e) throw new Error("useAuth must be used within AuthProvider");
    return e;
  }
  function Xd({ onImageSelect: e, imageUrl: t }) {
    const n = O.useRef(null), [r, l] = O.useState(false), o = O.useCallback((a) => {
      a && a.type.startsWith("image/") && e(a);
    }, [
      e
    ]), i = O.useCallback((a) => {
      a.preventDefault(), l(false);
      const c = a.dataTransfer.files[0];
      o(c);
    }, [
      o
    ]), u = O.useCallback((a) => {
      a.preventDefault(), l(true);
    }, []), s = O.useCallback(() => {
      l(false);
    }, []);
    return g.jsxs("div", {
      children: [
        g.jsx("h2", {
          children: "Upload Image"
        }),
        g.jsx("div", {
          className: `drop-zone ${r ? "drag-over" : ""}`,
          onClick: () => {
            var _a2;
            return (_a2 = n.current) == null ? void 0 : _a2.click();
          },
          onDrop: i,
          onDragOver: u,
          onDragLeave: s,
          children: t ? g.jsx("img", {
            src: t,
            alt: "Uploaded",
            style: {
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "6px"
            }
          }) : g.jsxs(g.Fragment, {
            children: [
              g.jsx("p", {
                style: {
                  fontSize: "2rem",
                  marginBottom: "0.5rem"
                },
                children: "\u{1F4F7}"
              }),
              g.jsx("p", {
                children: "Drop an image here or click to browse"
              }),
              g.jsx("p", {
                style: {
                  fontSize: "0.7rem",
                  color: "var(--txt3)",
                  marginTop: "0.3rem"
                },
                children: "PNG, JPG \u2014 photos of industrial equipment work best"
              })
            ]
          })
        }),
        g.jsx("input", {
          ref: n,
          type: "file",
          accept: "image/*",
          style: {
            display: "none"
          },
          onChange: (a) => o(a.target.files[0])
        })
      ]
    });
  }
  const Zd = "modulepreload", Jd = function(e) {
    return "/Converter/image-to-component/dist/" + e;
  }, Xu = {}, qd = function(t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), u = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      l = Promise.allSettled(n.map((s) => {
        if (s = Jd(s), s in Xu) return;
        Xu[s] = true;
        const a = s.endsWith(".css"), c = a ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${c}`)) return;
        const d = document.createElement("link");
        if (d.rel = a ? "stylesheet" : Zd, a || (d.as = "script"), d.crossOrigin = "", d.href = s, u && d.setAttribute("nonce", u), document.head.appendChild(d), a) return new Promise((p, v) => {
          d.addEventListener("load", p), d.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${s}`)));
        });
      }));
    }
    function o(i) {
      const u = new Event("vite:preloadError", {
        cancelable: true
      });
      if (u.payload = i, window.dispatchEvent(u), !u.defaultPrevented) throw i;
    }
    return l.then((i) => {
      for (const u of i || []) u.status === "rejected" && o(u.reason);
      return t().catch(o);
    });
  }, Ct = {
    photograph: {
      label: "Equipment Photo",
      description: "High-res photo of real equipment",
      filterSpeckle: 4,
      colorPrecision: 6,
      layerDifference: 16,
      cornerThreshold: 60,
      lengthThreshold: 4,
      maxIterations: 10,
      spliceThreshold: 45,
      pathPrecision: 3,
      mode: "spline"
    },
    diagram: {
      label: "Technical Diagram",
      description: "Clean illustration or P&ID symbol",
      filterSpeckle: 2,
      colorPrecision: 4,
      layerDifference: 24,
      cornerThreshold: 90,
      lengthThreshold: 3,
      maxIterations: 5,
      spliceThreshold: 60,
      pathPrecision: 2,
      mode: "spline"
    },
    highContrast: {
      label: "High Contrast / Icon",
      description: "Simple shapes, few colors, crisp edges",
      filterSpeckle: 8,
      colorPrecision: 3,
      layerDifference: 32,
      cornerThreshold: 120,
      lengthThreshold: 5,
      maxIterations: 4,
      spliceThreshold: 90,
      pathPrecision: 2,
      mode: "polygon"
    }
  };
  async function bd(e, t = Ct.photograph) {
    var _a2;
    const n = await createImageBitmap(e), r = document.createElement("canvas");
    r.width = n.width, r.height = n.height;
    const l = r.getContext("2d");
    l.drawImage(n, 0, 0);
    const o = l.getImageData(0, 0, r.width, r.height);
    let i;
    try {
      const u = await qd(() => import("./vectortracer-DEnhkgcU.js").then(async (m) => {
        await m.__tla;
        return m;
      }), []);
      i = u.BinaryImageConverter || ((_a2 = u.default) == null ? void 0 : _a2.BinaryImageConverter);
    } catch (u) {
      console.error("Failed to load vectortracer WASM:", u);
    }
    if (!i) throw new Error("VTracer WASM module failed to load. The vectortracer package may not be installed correctly.");
    return ep(o, r.width, r.height, t, i);
  }
  function ep(e, t, n, r, l) {
    const { data: o } = e, i = Math.pow(2, Math.min(r.colorPrecision || 6, 8)), u = r.layerDifference || 16, s = lp(o, t, n, i, u);
    console.log(`\u{1F3A8} Quantized to ${s.length} color layers`);
    const a = [];
    for (let c = 0; c < s.length; c++) {
      const d = s[c], p = tp(o, t, n, d, u);
      try {
        const v = np(p, t, n, r, l, d);
        v && a.push(v);
      } catch (v) {
        console.warn(`\u26A0\uFE0F Failed to trace layer ${c} (${Di(d)}):`, v.message);
      }
    }
    return console.log(`\u2705 VTracer traced ${a.length} color layers`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${n}" width="${t}" height="${n}">
${a.join(`
`)}
</svg>`;
  }
  function tp(e, t, n, r, l) {
    const o = new ImageData(t, n), i = o.data;
    for (let u = 0; u < e.length; u += 4) {
      const s = Math.abs(e[u] - r.r), a = Math.abs(e[u + 1] - r.g), c = Math.abs(e[u + 2] - r.b);
      e[u + 3] > 128 && s <= l && a <= l && c <= l ? (i[u] = 255, i[u + 1] = 255, i[u + 2] = 255, i[u + 3] = 255) : (i[u] = 0, i[u + 1] = 0, i[u + 2] = 0, i[u + 3] = 255);
    }
    return o;
  }
  function np(e, t, n, r, l, o) {
    const i = {
      mode: r.mode || "spline",
      cornerThreshold: r.cornerThreshold ?? 60,
      lengthThreshold: r.lengthThreshold ?? 4,
      maxIterations: r.maxIterations ?? 10,
      spliceThreshold: r.spliceThreshold ?? 45,
      filterSpeckle: r.filterSpeckle ?? 4,
      pathPrecision: r.pathPrecision ?? 3
    }, u = {
      invert: false,
      pathFill: Di(o)
    }, s = new l(e, i, u);
    s.init();
    let a = 1e4;
    for (; !s.tick() && a-- > 0; ) ;
    const c = s.getResult();
    return s.free(), !c || c.trim().length === 0 ? null : rp(c, o);
  }
  function rp(e, t) {
    const n = Di(t), o = new DOMParser().parseFromString(e, "image/svg+xml").querySelector("svg");
    if (!o) return `<g fill="${n}">${e}</g>`;
    const i = o.querySelectorAll("path, polygon, polyline, rect, circle, ellipse");
    if (i.length === 0) return null;
    const u = [];
    for (const s of i) s.setAttribute("fill", n), s.removeAttribute("stroke"), u.push(s.outerHTML);
    return `<g fill="${n}">
${u.join(`
`)}
</g>`;
  }
  function lp(e, t, n, r, l) {
    const o = Math.max(1, Math.floor(t * n / 5e4)), i = [];
    for (let s = 0; s < e.length; s += 4 * o) e[s + 3] > 128 && i.push({
      r: e[s],
      g: e[s + 1],
      b: e[s + 2]
    });
    if (i.length === 0) return [];
    let u = [
      i
    ];
    for (; u.length < r; ) {
      let s = 0, a = -1;
      for (let v = 0; v < u.length; v++) {
        const y = Zu(u[v]);
        y.maxRange > a && u[v].length > 1 && (a = y.maxRange, s = v);
      }
      if (a <= l) break;
      const c = u[s], d = Zu(c);
      c.sort((v, y) => v[d.channel] - y[d.channel]);
      const p = Math.floor(c.length / 2);
      u.splice(s, 1, c.slice(0, p), c.slice(p));
    }
    return u.filter((s) => s.length > 0).map((s) => {
      const a = s.reduce((c, d) => ({
        r: c.r + d.r,
        g: c.g + d.g,
        b: c.b + d.b
      }), {
        r: 0,
        g: 0,
        b: 0
      });
      return {
        r: Math.round(a.r / s.length),
        g: Math.round(a.g / s.length),
        b: Math.round(a.b / s.length),
        count: s.length
      };
    }).sort((s, a) => a.count - s.count);
  }
  function Zu(e) {
    let t = 255, n = 0, r = 255, l = 0, o = 255, i = 0;
    for (const p of e) p.r < t && (t = p.r), p.r > n && (n = p.r), p.g < r && (r = p.g), p.g > l && (l = p.g), p.b < o && (o = p.b), p.b > i && (i = p.b);
    const u = n - t, s = l - r, a = i - o, c = Math.max(u, s, a);
    return {
      maxRange: c,
      channel: c === u ? "r" : c === s ? "g" : "b"
    };
  }
  function Di(e) {
    return `rgb(${e.r},${e.g},${e.b})`;
  }
  async function op(e) {
    return new Promise((t, n) => {
      const r = new FileReader();
      r.onload = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
    });
  }
  async function ip(e) {
    return (await op(e)).split(",")[1];
  }
  const up = Object.keys(Ct), sp = {
    quick: {
      label: "Quick Trace",
      description: "Fast geometry extraction \u2014 outlines, curves, and colors only"
    },
    smart: {
      label: "Smart Trace",
      description: "Geometry + AI part identification, detail cleanup, and refinement"
    }
  };
  function ap({ pipelineMode: e, onModeChange: t, preset: n, onPresetChange: r, onSettingsChange: l, apiKey: o, onApiKeyChange: i, isAuthenticated: u }) {
    const [s, a] = O.useState(false), [c, d] = O.useState(Ct[n]);
    O.useEffect(() => {
      d(Ct[n]), l(null);
    }, [
      n
    ]);
    const p = (v, y) => {
      const x = {
        ...c,
        [v]: y
      };
      d(x), l(x);
    };
    return g.jsxs("div", {
      children: [
        g.jsx("h2", {
          children: "Settings"
        }),
        g.jsx("div", {
          className: "panel-label mb-sm",
          children: "Pipeline Mode"
        }),
        g.jsx("div", {
          className: "preset-selector",
          style: {
            marginBottom: "1.25rem"
          },
          children: Object.entries(sp).map(([v, y]) => g.jsxs("button", {
            className: `preset-btn ${e === v ? "active" : ""}`,
            onClick: () => t(v),
            children: [
              g.jsx("span", {
                className: "preset-label",
                children: y.label
              }),
              g.jsx("span", {
                className: "preset-desc",
                children: y.description
              })
            ]
          }, v))
        }),
        e === "smart" && g.jsx(g.Fragment, {
          children: u ? g.jsx("div", {
            className: "api-notice",
            style: {
              borderColor: "rgba(46, 204, 113, 0.3)",
              background: "rgba(46, 204, 113, 0.08)"
            },
            children: "You're signed in \u2014 Smart Trace is ready. AI vision will identify parts, clean up details, and enable refinement."
          }) : g.jsxs(g.Fragment, {
            children: [
              g.jsx("div", {
                className: "api-notice",
                children: "Sign in with Google above to use Smart Trace, or enter your own API key below."
              }),
              g.jsxs("div", {
                className: "setting-item mb-md",
                children: [
                  g.jsx("label", {
                    children: "API Key (optional if signed in)"
                  }),
                  g.jsx("input", {
                    type: "password",
                    value: o,
                    onChange: (v) => i(v.target.value),
                    placeholder: "sk-ant-..."
                  })
                ]
              })
            ]
          })
        }),
        g.jsx("div", {
          className: "panel-label mb-sm",
          children: "Image Type"
        }),
        g.jsx("div", {
          className: "preset-selector",
          children: up.map((v) => g.jsxs("button", {
            className: `preset-btn ${n === v ? "active" : ""}`,
            onClick: () => r(v),
            children: [
              g.jsx("span", {
                className: "preset-label",
                children: Ct[v].label
              }),
              g.jsx("span", {
                className: "preset-desc",
                children: Ct[v].description
              })
            ]
          }, v))
        }),
        g.jsxs("button", {
          className: "btn btn-sm",
          onClick: () => a(!s),
          style: {
            marginBottom: "0.75rem"
          },
          children: [
            s ? "\u25BE Hide" : "\u25B8 Show",
            " Advanced Settings"
          ]
        }),
        s && g.jsxs("div", {
          className: "settings-grid",
          children: [
            g.jsx(Je, {
              label: "Filter Speckle",
              value: c.filterSpeckle,
              min: 0,
              max: 20,
              step: 1,
              onChange: (v) => p("filterSpeckle", v)
            }),
            g.jsx(Je, {
              label: "Color Precision",
              value: c.colorPrecision,
              min: 1,
              max: 10,
              step: 1,
              onChange: (v) => p("colorPrecision", v)
            }),
            g.jsx(Je, {
              label: "Layer Difference",
              value: c.layerDifference,
              min: 1,
              max: 64,
              step: 1,
              onChange: (v) => p("layerDifference", v)
            }),
            g.jsx(Je, {
              label: "Corner Threshold",
              value: c.cornerThreshold,
              min: 0,
              max: 180,
              step: 5,
              onChange: (v) => p("cornerThreshold", v)
            }),
            g.jsx(Je, {
              label: "Length Threshold",
              value: c.lengthThreshold,
              min: 1,
              max: 10,
              step: 0.5,
              onChange: (v) => p("lengthThreshold", v)
            }),
            g.jsx(Je, {
              label: "Max Iterations",
              value: c.maxIterations,
              min: 1,
              max: 20,
              step: 1,
              onChange: (v) => p("maxIterations", v)
            }),
            g.jsx(Je, {
              label: "Splice Threshold",
              value: c.spliceThreshold,
              min: 0,
              max: 180,
              step: 5,
              onChange: (v) => p("spliceThreshold", v)
            }),
            g.jsx(Je, {
              label: "Path Precision",
              value: c.pathPrecision,
              min: 1,
              max: 8,
              step: 1,
              onChange: (v) => p("pathPrecision", v)
            })
          ]
        })
      ]
    });
  }
  function Je({ label: e, value: t, min: n, max: r, step: l, onChange: o }) {
    return g.jsxs("div", {
      className: "setting-item",
      children: [
        g.jsxs("label", {
          children: [
            e,
            ": ",
            t
          ]
        }),
        g.jsx("input", {
          type: "range",
          min: n,
          max: r,
          step: l,
          value: t,
          onChange: (i) => o(parseFloat(i.target.value))
        })
      ]
    });
  }
  function cp({ imageUrl: e, svgString: t, manifest: n }) {
    return g.jsxs("div", {
      className: "card",
      children: [
        g.jsx("h2", {
          children: "Processing"
        }),
        g.jsxs("div", {
          className: "split-view",
          children: [
            g.jsxs("div", {
              className: "panel",
              children: [
                g.jsx("div", {
                  className: "panel-label",
                  children: "Original Image"
                }),
                e && g.jsx("img", {
                  src: e,
                  alt: "Original"
                })
              ]
            }),
            g.jsxs("div", {
              className: "panel",
              children: [
                g.jsx("div", {
                  className: "panel-label",
                  children: "Traced Output"
                }),
                t && g.jsx("div", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })
              ]
            })
          ]
        }),
        n && g.jsxs("p", {
          style: {
            fontSize: "0.75rem",
            color: "var(--teal)",
            marginTop: "0.75rem",
            textAlign: "center"
          },
          children: [
            "\u2713 Identified ",
            n.length,
            " parts"
          ]
        })
      ]
    });
  }
  const fp = "https://api.anthropic.com/v1/messages", Ai = "claude-sonnet-4-20250514", dp = "";
  async function pp(e, t, n = null, r = null) {
    const s = (await Fi({
      model: Ai,
      max_tokens: 4096,
      system: "You are an industrial equipment SVG component engineer. You analyze photographs of industrial instruments and equipment to identify their parts for creating interactive SVG components.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: t,
                data: e
              }
            },
            {
              type: "text",
              text: `I have a photograph of industrial equipment and I need to create an interactive SVG component from it.

Analyze this image and identify every distinct functional part. For each part, provide:

1. "name" \u2014 descriptive identifier (e.g., "terminal_screw_positive", "lcd_display", "conduit_hub_left", "ground_symbol")
2. "type" \u2014 category: "structural", "terminal", "display", "fastener", "label", "connector", "indicator"
3. "bbox" \u2014 approximate bounding box as percentage of image dimensions: {"x": 0-100, "y": 0-100, "w": 0-100, "h": 0-100}
4. "description" \u2014 what it looks like and what it does
5. "interactive" \u2014 boolean, whether a user might need to click/drag to/from this element
6. "dynamic" \u2014 boolean, whether this element changes based on a prop (e.g., LCD reading changes, liquid level changes)
7. "detail_quality" \u2014 "high", "medium", "low" \u2014 how well a simple auto-tracer would capture this element (screws = low, large colored regions = high)

Respond with ONLY a JSON array. No markdown, no explanation.`
            }
          ]
        }
      ]
    }, n, 3, r)).content[0].text;
    try {
      return JSON.parse(s);
    } catch {
      const a = s.match(/\[[\s\S]*\]/);
      if (a) return JSON.parse(a[0]);
      throw new Error("Failed to parse parts manifest from Claude response");
    }
  }
  async function mp(e, t, n, r = null, l = null) {
    const o = [
      {
        type: "image",
        source: {
          type: "base64",
          media_type: t,
          data: e
        }
      },
      {
        type: "text",
        text: `This is a photograph containing a "${n.name}" (${n.description}) from an industrial instrument. The element is located at approximately x:${n.bbox.x}%, y:${n.bbox.y}%, width:${n.bbox.w}%, height:${n.bbox.h}% of the image.

An auto-tracer produced a blobby, low-detail version of this element.

Write clean SVG code for JUST this element. Requirements:
- Use proper geometric shapes (circles for screws, rects for terminals)
- Use realistic colors sampled from the photo
- Include appropriate detail (cross-hatch on screws, slot lines, text labels)
- Output should be a single <g> element with id="${n.name}"
- Coordinate space: use a viewBox that matches the bounding box dimensions proportionally
- Keep it compact \u2014 under 20 SVG elements for this part

Respond with ONLY the SVG <g> element. No markdown fences, no explanation.`
      }
    ];
    let s = (await Fi({
      model: Ai,
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: o
        }
      ]
    }, r, 3, l)).content[0].text.trim();
    return s = s.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/i, "").trim(), s;
  }
  async function hp(e, t, n, r, l, o, i = null, u = null) {
    const s = [
      {
        type: "image",
        source: {
          type: "base64",
          media_type: t,
          data: e
        }
      },
      {
        type: "text",
        text: `The user clicked on a region at approximately (${r.toFixed(1)}%, ${l.toFixed(1)}%) of the SVG and said: "${o}"

The part in that region is currently:
${n}

Regenerate the SVG for this specific part, addressing the user's feedback. Keep the same coordinate space and group id. Respond with ONLY the replacement <g> element. No markdown fences, no explanation.`
      }
    ];
    let d = (await Fi({
      model: Ai,
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: s
        }
      ]
    }, i, 3, u)).content[0].text.trim();
    return d = d.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/i, "").trim(), d;
  }
  let Uo = null;
  function Ju(e) {
    Uo = e;
  }
  async function Fi(e, t, n = 3, r = null) {
    var _a2;
    for (let l = 0; l <= n; l++) try {
      let o;
      if (r && dp || (t ? o = await fetch(fp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": t,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify(e)
      }) : o = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      })), o.status === 429 && l < n) {
        if (((_a2 = await o.json().catch(() => null)) == null ? void 0 : _a2.code) === "LIMIT_REACHED") throw new Error("Daily conversion limit reached. Upgrade for unlimited access.");
        const s = Math.pow(2, l + 1) * 1e3;
        console.log(`\u23F3 Rate limited, retrying in ${s / 1e3}s...`), await new Promise((a) => setTimeout(a, s));
        continue;
      }
      if (!o.ok) {
        const u = await o.text();
        throw new Error(`Claude API error ${o.status}: ${u}`);
      }
      const i = await o.json();
      return i._usage && Uo && (Uo(i._usage), delete i._usage), i;
    } catch (o) {
      if (l === n || o.message.includes("Daily conversion limit")) throw o;
      const i = Math.pow(2, l + 1) * 1e3;
      console.log(`\u23F3 Request failed, retrying in ${i / 1e3}s...`), await new Promise((u) => setTimeout(u, i));
    }
  }
  function gp(e) {
    const r = new DOMParser().parseFromString(e, "image/svg+xml").querySelector("svg");
    if (!r) throw new Error("No <svg> element found in input");
    const l = r.getAttribute("viewBox");
    let o = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };
    if (l) {
      const a = l.split(/[\s,]+/).map(Number);
      o = {
        x: a[0],
        y: a[1],
        w: a[2],
        h: a[3]
      };
    } else o.w = parseFloat(r.getAttribute("width")) || 100, o.h = parseFloat(r.getAttribute("height")) || 100;
    const i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    i.setAttribute("viewBox", `${o.x} ${o.y} ${o.w} ${o.h}`), i.style.position = "absolute", i.style.left = "-9999px", i.style.top = "-9999px", i.style.width = o.w + "px", i.style.height = o.h + "px", document.body.appendChild(i);
    const u = r.querySelectorAll("path, rect, circle, ellipse, polygon, polyline, line"), s = [];
    for (const a of u) {
      const c = a.cloneNode(true);
      i.appendChild(c);
      let d = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      };
      try {
        const p = c.getBBox();
        d = {
          x: p.x,
          y: p.y,
          w: p.width,
          h: p.height
        };
      } catch {
      }
      i.removeChild(c), s.push({
        element: a.outerHTML,
        d: a.getAttribute("d") || "",
        fill: a.getAttribute("fill") || "none",
        stroke: a.getAttribute("stroke") || "none",
        bbox: d
      });
    }
    return document.body.removeChild(i), {
      paths: s,
      viewBox: o,
      width: o.w,
      height: o.h
    };
  }
  function vp(e, t) {
    return {
      x: t.x + e.x / 100 * t.w,
      y: t.y + e.y / 100 * t.h,
      w: e.w / 100 * t.w,
      h: e.h / 100 * t.h
    };
  }
  function yp(e, t) {
    const n = e.x + e.w, r = e.y + e.h, l = t.x + t.w, o = t.y + t.h, i = Math.max(e.x, t.x), u = Math.max(e.y, t.y), s = Math.min(n, l), a = Math.min(r, o);
    if (s <= i || a <= u) return 0;
    const c = (s - i) * (a - u), d = e.w * e.h, p = t.w * t.h, v = d + p - c;
    return v === 0 ? 0 : c / v;
  }
  function wp(e, t) {
    const n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), l = Math.min(e.x + e.w, t.x + t.w), o = Math.min(e.y + e.h, t.y + t.h);
    if (l <= n || o <= r) return 0;
    const i = (l - n) * (o - r), u = e.w * e.h;
    return u === 0 ? 0 : i / u;
  }
  function Sp(e, t, n = 0.3, r = 0.6) {
    const l = [];
    for (let o = 0; o < e.length; o++) {
      const i = yp(e[o].bbox, t), u = wp(e[o].bbox, t);
      (i >= n || u >= r) && l.push(o);
    }
    return l;
  }
  function xp(e, t, n = 5e-3) {
    const l = t.w * t.h * n, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    o.setAttribute("viewBox", `${t.x} ${t.y} ${t.w} ${t.h}`), o.style.position = "absolute", o.style.left = "-9999px", o.style.top = "-9999px", o.style.width = t.w + "px", o.style.height = t.h + "px", document.body.appendChild(o);
    const i = new DOMParser(), u = [];
    for (const s of e) try {
      const c = i.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${s}</svg>`, "image/svg+xml").querySelector("svg > *");
      if (!c) {
        u.push(s);
        continue;
      }
      const d = o.ownerDocument.importNode(c, true);
      o.appendChild(d);
      try {
        const p = d.getBBox();
        p.width * p.height >= l && u.push(s);
      } catch {
        u.push(s);
      }
      o.removeChild(d);
    } catch {
      u.push(s);
    }
    return document.body.removeChild(o), u;
  }
  function kp(e, t, n = {}) {
    const { paths: r, viewBox: l } = gp(e), o = /* @__PURE__ */ new Set(), i = {};
    for (const c of t) {
      const d = vp(c.bbox, l), v = Sp(r, d).filter((y) => !o.has(y));
      if (v.forEach((y) => o.add(y)), c.detail_quality === "low" && n[c.name]) i[c.name] = {
        svg: n[c.name],
        type: c.type,
        interactive: c.interactive,
        dynamic: c.dynamic,
        replaced: true
      };
      else {
        const y = v.map((x) => r[x].element);
        i[c.name] = {
          svg: qu(y, c.name, c.type, c.interactive, c.dynamic),
          type: c.type,
          interactive: c.interactive,
          dynamic: c.dynamic,
          replaced: false
        };
      }
    }
    const u = r.filter((c, d) => !o.has(d)).map((c) => c.element), s = xp(u, l);
    return i.background = {
      svg: qu(s, "background", "structural", false, false),
      type: "structural",
      interactive: false,
      dynamic: false,
      replaced: false
    }, {
      svg: Cp(i, l),
      groups: i
    };
  }
  function Ep(e, t, n) {
    const r = new DOMParser(), l = r.parseFromString(e, "image/svg+xml"), o = l.getElementById(t);
    if (o) {
      const s = r.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${n}</svg>`, "image/svg+xml").querySelector("svg > *");
      s && (s.getAttribute("id") || s.setAttribute("id", t), o.parentNode.replaceChild(l.importNode(s, true), o));
    }
    return new XMLSerializer().serializeToString(l.documentElement);
  }
  function qu(e, t, n, r, l) {
    const o = [
      `id="${t}"`,
      `class="${n}"`
    ];
    return r && o.push('data-interactive="true"'), l && o.push('data-dynamic="true"'), `<g ${o.join(" ")}>
  ${e.join(`
  `)}
</g>`;
  }
  function Cp(e, t) {
    const n = Object.values(e).map((r) => r.svg).join(`
`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t.x} ${t.y} ${t.w} ${t.h}">
${n}
</svg>`;
  }
  function _p(e, t, n) {
    let r = null, l = 1 / 0;
    for (const o of e) {
      const i = o.bbox.x + o.bbox.w / 2, u = o.bbox.y + o.bbox.h / 2;
      if (t >= o.bbox.x && t <= o.bbox.x + o.bbox.w && n >= o.bbox.y && n <= o.bbox.y + o.bbox.h) {
        const s = Math.hypot(t - i, n - u);
        s < l && (l = s, r = o);
      }
    }
    if (!r) for (const o of e) {
      const i = o.bbox.x + o.bbox.w / 2, u = o.bbox.y + o.bbox.h / 2, s = Math.hypot(t - i, n - u);
      s < l && (l = s, r = o);
    }
    return r;
  }
  function Tp(e, t) {
    const l = new DOMParser().parseFromString(e, "image/svg+xml").getElementById(t);
    return l ? l.outerHTML : "";
  }
  async function Np(e, t, n, r, l, o = null, i = null) {
    const u = Tp(n, r.name), s = r.bbox.x + r.bbox.w / 2, a = r.bbox.y + r.bbox.h / 2, c = await hp(e, t, u, s, a, l, o, i);
    return Ep(n, r.name, c);
  }
  function Pp({ imageUrl: e, svgString: t, manifest: n, selectedPart: r, onPartSelect: l }) {
    const [o, i] = O.useState(0.7), u = O.useRef(null), s = O.useCallback((c) => {
      if (!n || n.length === 0) return;
      const d = u.current;
      if (!d) return;
      const p = d.getBoundingClientRect(), v = (c.clientX - p.left) / p.width * 100, y = (c.clientY - p.top) / p.height * 100, x = _p(n, v, y);
      x && l(x);
    }, [
      n,
      l
    ]), a = O.useCallback(() => {
      if (!t || !r) return t;
      const d = new DOMParser().parseFromString(t, "image/svg+xml");
      if (d.getElementById(r.name)) {
        const y = d.querySelector("svg"), x = y.getAttribute("viewBox");
        if (x) {
          const [, , j, m] = x.split(/[\s,]+/).map(Number), f = r.bbox.x / 100 * j, h = r.bbox.y / 100 * m, w = r.bbox.w / 100 * j, k = r.bbox.h / 100 * m, E = d.createElementNS("http://www.w3.org/2000/svg", "rect");
          E.setAttribute("x", f), E.setAttribute("y", h), E.setAttribute("width", w), E.setAttribute("height", k), E.setAttribute("fill", "none"), E.setAttribute("stroke", "#f5a623"), E.setAttribute("stroke-width", Math.max(j, m) * 5e-3), E.setAttribute("stroke-dasharray", `${Math.max(j, m) * 0.01}`), E.setAttribute("opacity", "0.9"), y.appendChild(E);
        }
      }
      return new XMLSerializer().serializeToString(d.documentElement);
    }, [
      t,
      r
    ]);
    return g.jsxs("div", {
      children: [
        g.jsx("h2", {
          children: "Review"
        }),
        g.jsxs("div", {
          className: "opacity-control",
          children: [
            g.jsx("span", {
              children: "Overlay:"
            }),
            g.jsx("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              value: o,
              onChange: (c) => i(parseFloat(c.target.value))
            }),
            g.jsxs("span", {
              children: [
                Math.round(o * 100),
                "%"
              ]
            })
          ]
        }),
        g.jsxs("div", {
          className: "overlay-container",
          ref: u,
          onClick: s,
          children: [
            e && g.jsx("img", {
              src: e,
              alt: "Original"
            }),
            t && g.jsx("div", {
              className: "svg-overlay interactive",
              style: {
                opacity: o
              },
              dangerouslySetInnerHTML: {
                __html: a() || ""
              }
            })
          ]
        }),
        r && g.jsxs("p", {
          style: {
            fontSize: "0.7rem",
            color: "var(--amber)",
            marginTop: "0.5rem"
          },
          children: [
            "Selected: ",
            r.name,
            " (",
            r.type,
            ")"
          ]
        })
      ]
    });
  }
  function jp({ manifest: e, groups: t, selectedPart: n, onPartSelect: r }) {
    return !e || e.length === 0 ? g.jsxs("div", {
      children: [
        g.jsx("h2", {
          children: "Parts"
        }),
        g.jsx("p", {
          style: {
            fontSize: "0.75rem",
            color: "var(--txt3)"
          },
          children: "No parts identified. Use Smart Trace mode with an API key to enable part detection."
        })
      ]
    }) : g.jsxs("div", {
      children: [
        g.jsxs("h2", {
          children: [
            "Parts (",
            e.length,
            ")"
          ]
        }),
        g.jsx("div", {
          className: "parts-list",
          children: e.map((l) => {
            var _a2;
            const o = (n == null ? void 0 : n.name) === l.name, i = (_a2 = t == null ? void 0 : t[l.name]) == null ? void 0 : _a2.replaced;
            return g.jsxs("div", {
              className: `part-item ${o ? "selected" : ""}`,
              onClick: () => r(l),
              children: [
                g.jsx("span", {
                  style: {
                    fontSize: "0.7rem"
                  },
                  children: i ? "\u{1F504}" : l.detail_quality === "high" ? "\u2705" : (l.detail_quality === "medium", "\u26A0\uFE0F")
                }),
                g.jsx("span", {
                  style: {
                    flex: 1,
                    fontSize: "0.72rem"
                  },
                  children: l.name.replace(/_/g, " ")
                }),
                g.jsx("span", {
                  className: `part-badge ${l.detail_quality}`,
                  children: l.detail_quality
                }),
                g.jsx("span", {
                  className: "part-type",
                  children: l.type
                })
              ]
            }, l.name);
          })
        })
      ]
    });
  }
  function Rp({ part: e, onRefine: t, isRefining: n }) {
    const [r, l] = O.useState(""), o = () => {
      !r.trim() || n || (t(e, r.trim()), l(""));
    };
    return g.jsxs("div", {
      style: {
        marginTop: "1rem"
      },
      children: [
        g.jsxs("h2", {
          style: {
            fontSize: "1.1rem"
          },
          children: [
            "Refine: ",
            e.name.replace(/_/g, " ")
          ]
        }),
        g.jsx("p", {
          style: {
            fontSize: "0.7rem",
            color: "var(--txt2)",
            marginBottom: "0.5rem"
          },
          children: e.description
        }),
        g.jsxs("div", {
          className: "refine-input",
          children: [
            g.jsx("input", {
              type: "text",
              placeholder: "What's wrong with this part?",
              value: r,
              onChange: (i) => l(i.target.value),
              onKeyDown: (i) => i.key === "Enter" && o(),
              disabled: n
            }),
            g.jsx("button", {
              className: "btn btn-sm btn-primary",
              onClick: o,
              disabled: !r.trim() || n,
              children: n ? "Refining..." : "Fix"
            })
          ]
        })
      ]
    });
  }
  function zp({ componentCode: e, componentName: t, onNameChange: n, svgString: r }) {
    const [l, o] = O.useState(false), i = async () => {
      try {
        await navigator.clipboard.writeText(e), o(true), setTimeout(() => o(false), 2e3);
      } catch {
        const a = document.createElement("textarea");
        a.value = e, document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a), o(true), setTimeout(() => o(false), 2e3);
      }
    }, u = () => {
      const a = t ? t.replace(/([A-Z])/g, (c, d, p) => (p ? "-" : "") + d.toLowerCase()) + ".jsx" : "component.jsx";
      bu(e, a, "text/javascript");
    }, s = () => {
      if (r) {
        const a = t ? t.replace(/([A-Z])/g, (c, d, p) => (p ? "-" : "") + d.toLowerCase()) + ".svg" : "component.svg";
        bu(r, a, "image/svg+xml");
      }
    };
    return g.jsxs("div", {
      className: "card",
      children: [
        g.jsx("h2", {
          children: "Export Component"
        }),
        g.jsx("div", {
          className: "export-options",
          children: g.jsxs("div", {
            className: "setting-item",
            children: [
              g.jsx("label", {
                children: "Component Name"
              }),
              g.jsx("input", {
                type: "text",
                value: t,
                onChange: (a) => n(a.target.value),
                placeholder: "MyComponent"
              })
            ]
          })
        }),
        g.jsxs("div", {
          style: {
            marginTop: "1rem"
          },
          children: [
            g.jsx("div", {
              className: "panel-label",
              children: "Generated React Component"
            }),
            g.jsx("div", {
              className: "code-preview",
              children: g.jsx("pre", {
                children: e
              })
            })
          ]
        }),
        g.jsxs("div", {
          className: "flex gap-sm mt-md",
          style: {
            flexWrap: "wrap"
          },
          children: [
            g.jsx("button", {
              className: "btn btn-primary",
              onClick: u,
              children: "Download .jsx"
            }),
            g.jsx("button", {
              className: "btn",
              onClick: i,
              children: l ? "\u2713 Copied!" : "Copy to Clipboard"
            }),
            g.jsx("button", {
              className: "btn",
              onClick: s,
              children: "Download .svg"
            })
          ]
        })
      ]
    });
  }
  function bu(e, t, n) {
    const r = new Blob([
      e
    ], {
      type: n
    }), l = URL.createObjectURL(r), o = document.createElement("a");
    o.href = l, o.download = t, o.click(), URL.revokeObjectURL(l);
  }
  function Lp() {
    const { user: e, usage: t, loading: n, signIn: r, signOut: l, workerUrl: o } = Ii();
    return o ? n ? g.jsx("div", {
      className: "auth-bar",
      children: g.jsx("span", {
        className: "auth-loading",
        children: "Loading..."
      })
    }) : e ? g.jsxs("div", {
      className: "auth-bar",
      children: [
        g.jsxs("div", {
          className: "auth-user",
          children: [
            e.picture && g.jsx("img", {
              src: e.picture,
              alt: "",
              className: "auth-avatar",
              referrerPolicy: "no-referrer"
            }),
            g.jsx("span", {
              className: "auth-name",
              children: e.name
            })
          ]
        }),
        t && g.jsxs("div", {
          className: "auth-usage",
          children: [
            t.unlimited ? g.jsx("span", {
              className: "usage-badge unlimited",
              children: "Unlimited"
            }) : g.jsxs("span", {
              className: "usage-badge",
              children: [
                t.remaining,
                "/",
                t.limit,
                " conversions today"
              ]
            }),
            !t.unlimited && t.remaining === 0 && g.jsx(Op, {})
          ]
        }),
        g.jsx("button", {
          className: "btn btn-sm",
          onClick: l,
          children: "Sign out"
        })
      ]
    }) : g.jsxs("div", {
      className: "auth-bar",
      children: [
        g.jsx("span", {
          className: "auth-message",
          children: "Sign in to use Smart Trace"
        }),
        g.jsx("button", {
          className: "btn btn-sm btn-google",
          onClick: r,
          children: "Sign in with Google"
        })
      ]
    }) : null;
  }
  function Op() {
    const { user: e, workerUrl: t } = Ii(), [n, r] = ds.useState(false), l = async () => {
      r(true);
      try {
        const i = await (await fetch(`${t}/api/checkout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${e.idToken}`,
            "Content-Type": "application/json"
          }
        })).json();
        i.url && (window.location.href = i.url);
      } catch (o) {
        console.error("Checkout error:", o);
      } finally {
        r(false);
      }
    };
    return g.jsx("button", {
      className: "btn btn-sm btn-upgrade",
      onClick: l,
      disabled: n,
      children: n ? "Loading..." : "Upgrade"
    });
  }
  function Mp(e, t, n, r) {
    const l = t.filter((c) => c.dynamic), o = t.filter((c) => c.interactive), i = [
      "x = 0",
      "y = 0",
      "scale = 1"
    ];
    l.forEach((c) => {
      i.push(`${Ip(c.name)}_value = ""`);
    }), o.length && i.push("onPartClick = () => {}");
    let u = "";
    o.length && (u = `
  const handleClick = (e) => {
    const group = e.target.closest('[data-interactive="true"]');
    if (group) {
      onPartClick(group.id, e);
    }
  };`);
    let s = "";
    l.length && (s = `
  // Dynamic parts: ${l.map((c) => c.name).join(", ")}`, s += `
  // Use the _value props to update these elements dynamically`);
    const a = o.length ? 'onClick={handleClick} style={{ cursor: "pointer" }}' : "";
    return `import React from "react";

/**
 * ${n} \u2014 auto-generated SVG component
 *
 * Parts: ${t.map((c) => c.name).join(", ")}
 * Interactive: ${o.map((c) => c.name).join(", ") || "none"}
 * Dynamic: ${l.map((c) => c.name).join(", ") || "none"}
 */
export function ${n}({
  ${i.join(`,
  `)},
}) {${u}${s}

  return (
    <g transform={\`translate(\${x}, \${y}) scale(\${scale})\`}>
      <svg viewBox="${r}" ${a}>
        ${Dp(e, 8)}
      </svg>
    </g>
  );
}

export default ${n};
`;
  }
  function Ip(e) {
    return e.replace(/[^a-zA-Z0-9_]/g, "_");
  }
  function Dp(e, t) {
    const n = " ".repeat(t);
    return e.split(`
`).map((r, l) => l === 0 ? r : n + r).join(`
`);
  }
  function es(e, t, n) {
    const r = Ap(e), l = $p(r), o = Fp(e);
    return Mp(l, t, n, o);
  }
  function Ap(e) {
    const t = e.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    return t ? t[1].trim() : e;
  }
  function Fp(e) {
    const t = e.match(/viewBox="([^"]+)"/);
    return t ? t[1] : "0 0 100 100";
  }
  function $p(e) {
    const t = {
      "clip-path": "clipPath",
      "clip-rule": "clipRule",
      "fill-opacity": "fillOpacity",
      "fill-rule": "fillRule",
      "flood-color": "floodColor",
      "flood-opacity": "floodOpacity",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "letter-spacing": "letterSpacing",
      "lighting-color": "lightingColor",
      "marker-end": "markerEnd",
      "marker-mid": "markerMid",
      "marker-start": "markerStart",
      "paint-order": "paintOrder",
      "pointer-events": "pointerEvents",
      "shape-rendering": "shapeRendering",
      "stop-color": "stopColor",
      "stop-opacity": "stopOpacity",
      "stroke-dasharray": "strokeDasharray",
      "stroke-dashoffset": "strokeDashoffset",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "stroke-miterlimit": "strokeMiterlimit",
      "stroke-opacity": "strokeOpacity",
      "stroke-width": "strokeWidth",
      "text-anchor": "textAnchor",
      "text-decoration": "textDecoration",
      "transform-origin": "transformOrigin",
      "word-spacing": "wordSpacing",
      "writing-mode": "writingMode",
      "xmlns:xlink": "xmlnsXlink",
      "xlink:href": "xlinkHref",
      "xml:space": "xmlSpace",
      "data-interactive": "data-interactive",
      "data-dynamic": "data-dynamic"
    };
    let n = e;
    n = n.replace(/\bclass="/g, 'className="');
    for (const [r, l] of Object.entries(t)) {
      const o = new RegExp(`\\b${r.replace(/[-/]/g, "\\$&")}=`, "g");
      n = n.replace(o, `${l}=`);
    }
    return n;
  }
  const ts = [
    "upload",
    "tracing",
    "analyzing",
    "review",
    "export"
  ], vc = {
    stage: "upload",
    pipelineMode: "smart",
    imageFile: null,
    imageUrl: null,
    imageBase64: null,
    mediaType: null,
    preset: "photograph",
    customSettings: null,
    vtracerSvg: null,
    manifest: null,
    replacements: {},
    mergedSvg: null,
    groups: null,
    selectedPart: null,
    componentName: "",
    componentCode: null,
    error: null,
    progress: "",
    apiKey: localStorage.getItem("anthropic_api_key") || ""
  };
  function Up(e, t) {
    switch (t.type) {
      case "SET_IMAGE":
        return {
          ...e,
          imageFile: t.file,
          imageUrl: URL.createObjectURL(t.file),
          mediaType: t.file.type,
          componentName: Bp(t.file.name.replace(/\.[^.]+$/, "")),
          error: null
        };
      case "SET_PIPELINE_MODE":
        return {
          ...e,
          pipelineMode: t.mode
        };
      case "SET_PRESET":
        return {
          ...e,
          preset: t.preset
        };
      case "SET_CUSTOM_SETTINGS":
        return {
          ...e,
          customSettings: t.settings
        };
      case "SET_API_KEY":
        return localStorage.setItem("anthropic_api_key", t.key), {
          ...e,
          apiKey: t.key
        };
      case "SET_STAGE":
        return {
          ...e,
          stage: t.stage,
          error: null
        };
      case "SET_PROGRESS":
        return {
          ...e,
          progress: t.progress
        };
      case "SET_VTRACER_SVG":
        return {
          ...e,
          vtracerSvg: t.svg
        };
      case "SET_IMAGE_BASE64":
        return {
          ...e,
          imageBase64: t.base64
        };
      case "SET_MANIFEST":
        return {
          ...e,
          manifest: t.manifest
        };
      case "SET_REPLACEMENTS":
        return {
          ...e,
          replacements: t.replacements
        };
      case "SET_MERGED":
        return {
          ...e,
          mergedSvg: t.svg,
          groups: t.groups
        };
      case "SET_SELECTED_PART":
        return {
          ...e,
          selectedPart: t.part
        };
      case "UPDATE_MERGED_SVG":
        return {
          ...e,
          mergedSvg: t.svg
        };
      case "SET_COMPONENT_NAME":
        return {
          ...e,
          componentName: t.name
        };
      case "SET_COMPONENT_CODE":
        return {
          ...e,
          componentCode: t.code
        };
      case "SET_ERROR":
        return {
          ...e,
          error: t.error,
          progress: ""
        };
      case "RESET":
        return {
          ...vc,
          apiKey: e.apiKey
        };
      default:
        return e;
    }
  }
  function Bp(e) {
    return e.replace(/[^a-zA-Z0-9]+/g, " ").split(" ").filter(Boolean).map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join("");
  }
  function Vp() {
    const [e, t] = O.useReducer(Up, vc), { user: n, updateUsageFromResponse: r, workerUrl: l } = Ii();
    O.useEffect(() => (Ju(r), () => Ju(null)), [
      r
    ]);
    const o = (n == null ? void 0 : n.idToken) || null, i = !!(o && l) || !!e.apiKey, u = O.useCallback(async () => {
      if (e.imageFile) try {
        const d = e.pipelineMode === "smart" && i;
        t({
          type: "SET_STAGE",
          stage: "tracing"
        }), t({
          type: "SET_PROGRESS",
          progress: "Extracting geometry..."
        });
        const p = e.customSettings || Ct[e.preset], v = await bd(e.imageFile, p);
        t({
          type: "SET_VTRACER_SVG",
          svg: v
        }), console.log("\u2705 Geometry extraction complete");
        const y = await ip(e.imageFile);
        if (t({
          type: "SET_IMAGE_BASE64",
          base64: y
        }), !d) {
          t({
            type: "SET_STAGE",
            stage: "review"
          }), t({
            type: "SET_PROGRESS",
            progress: ""
          }), t({
            type: "SET_MANIFEST",
            manifest: []
          }), t({
            type: "SET_MERGED",
            svg: v,
            groups: {}
          });
          return;
        }
        t({
          type: "SET_STAGE",
          stage: "analyzing"
        }), t({
          type: "SET_PROGRESS",
          progress: "Identifying parts..."
        });
        const x = await pp(y, e.mediaType, e.apiKey, o);
        t({
          type: "SET_MANIFEST",
          manifest: x
        }), console.log(`\u2705 Identified ${x.length} parts`);
        const j = x.filter((w) => w.detail_quality === "low"), m = {};
        for (let w = 0; w < j.length; w++) {
          const k = j[w];
          t({
            type: "SET_PROGRESS",
            progress: `Improving detail ${w + 1}/${j.length}: ${k.name.replace(/_/g, " ")}...`
          });
          try {
            m[k.name] = await mp(y, e.mediaType, k, e.apiKey, o), console.log(`\u2705 Improved ${k.name}`);
          } catch (E) {
            console.log(`\u274C Failed to improve ${k.name}: ${E.message}`);
          }
        }
        t({
          type: "SET_REPLACEMENTS",
          replacements: m
        }), t({
          type: "SET_PROGRESS",
          progress: "Assembling component..."
        });
        const { svg: f, groups: h } = kp(v, x, m);
        t({
          type: "SET_MERGED",
          svg: f,
          groups: h
        }), console.log("\u2705 Assembly complete"), t({
          type: "SET_STAGE",
          stage: "review"
        }), t({
          type: "SET_PROGRESS",
          progress: ""
        });
      } catch (d) {
        console.log("\u274C Pipeline error:", d.message), t({
          type: "SET_ERROR",
          error: d.message
        });
      }
    }, [
      e.imageFile,
      e.preset,
      e.customSettings,
      e.apiKey,
      e.mediaType,
      e.pipelineMode,
      i,
      o
    ]), s = O.useCallback(async (d, p) => {
      if (!(!i || !e.mergedSvg)) {
        t({
          type: "SET_PROGRESS",
          progress: `Refining ${d.name.replace(/_/g, " ")}...`
        });
        try {
          const v = await Np(e.imageBase64, e.mediaType, e.mergedSvg, d, p, e.apiKey, o);
          t({
            type: "UPDATE_MERGED_SVG",
            svg: v
          }), t({
            type: "SET_PROGRESS",
            progress: ""
          }), console.log(`\u2705 Refined ${d.name}`);
        } catch (v) {
          console.log(`\u274C Refinement failed: ${v.message}`), t({
            type: "SET_ERROR",
            error: v.message
          });
        }
      }
    }, [
      i,
      e.apiKey,
      o,
      e.mergedSvg,
      e.imageBase64,
      e.mediaType
    ]), a = O.useCallback(() => {
      t({
        type: "SET_STAGE",
        stage: "export"
      });
      const d = es(e.mergedSvg || e.vtracerSvg, e.manifest || [], e.componentName || "GeneratedComponent");
      t({
        type: "SET_COMPONENT_CODE",
        code: d
      });
    }, [
      e.mergedSvg,
      e.vtracerSvg,
      e.manifest,
      e.componentName
    ]), c = ts.indexOf(e.stage);
    return g.jsxs("div", {
      className: "app-container",
      children: [
        g.jsx(Lp, {}),
        g.jsx("h1", {
          children: "Image-to-Component Studio"
        }),
        g.jsx("p", {
          className: "subtitle",
          children: "Convert photographs into interactive React SVG components"
        }),
        g.jsx("div", {
          className: "stage-bar",
          children: ts.map((d, p) => g.jsxs(ds.Fragment, {
            children: [
              p > 0 && g.jsx("span", {
                className: "stage-arrow",
                children: "\u2192"
              }),
              g.jsxs("div", {
                className: `stage-step ${p === c ? "active" : ""} ${p < c ? "completed" : ""}`,
                children: [
                  p < c ? "\u2713 " : "",
                  d.charAt(0).toUpperCase() + d.slice(1)
                ]
              })
            ]
          }, d))
        }),
        e.error && g.jsxs("div", {
          className: "card",
          style: {
            borderColor: "var(--red)",
            marginBottom: "1rem"
          },
          children: [
            g.jsxs("p", {
              style: {
                color: "var(--red)",
                fontSize: "0.8rem"
              },
              children: [
                "\u274C ",
                e.error
              ]
            }),
            g.jsx("button", {
              className: "btn btn-sm mt-sm",
              onClick: () => t({
                type: "SET_ERROR",
                error: null
              }),
              children: "Dismiss"
            })
          ]
        }),
        e.progress && g.jsx("div", {
          className: "card",
          style: {
            textAlign: "center",
            marginBottom: "1rem"
          },
          children: g.jsxs("div", {
            className: "flex gap-sm",
            style: {
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              g.jsx("span", {
                className: "spinner"
              }),
              g.jsx("span", {
                style: {
                  fontSize: "0.8rem",
                  color: "var(--txt2)"
                },
                children: e.progress
              })
            ]
          })
        }),
        e.stage === "upload" && g.jsxs("div", {
          children: [
            g.jsx("div", {
              className: "card",
              children: g.jsx(Xd, {
                onImageSelect: (d) => t({
                  type: "SET_IMAGE",
                  file: d
                }),
                imageUrl: e.imageUrl
              })
            }),
            g.jsx("div", {
              className: "card",
              children: g.jsx(ap, {
                pipelineMode: e.pipelineMode,
                onModeChange: (d) => t({
                  type: "SET_PIPELINE_MODE",
                  mode: d
                }),
                preset: e.preset,
                onPresetChange: (d) => t({
                  type: "SET_PRESET",
                  preset: d
                }),
                onSettingsChange: (d) => t({
                  type: "SET_CUSTOM_SETTINGS",
                  settings: d
                }),
                apiKey: e.apiKey,
                onApiKeyChange: (d) => t({
                  type: "SET_API_KEY",
                  key: d
                }),
                isAuthenticated: !!(o && l)
              })
            }),
            g.jsx("div", {
              style: {
                textAlign: "center",
                marginTop: "1rem"
              },
              children: g.jsx("button", {
                className: "btn btn-primary",
                disabled: !e.imageFile,
                onClick: u,
                children: "Process Image"
              })
            })
          ]
        }),
        (e.stage === "tracing" || e.stage === "analyzing") && e.vtracerSvg && g.jsx(cp, {
          imageUrl: e.imageUrl,
          svgString: e.vtracerSvg,
          manifest: e.manifest
        }),
        e.stage === "review" && g.jsxs("div", {
          children: [
            g.jsx("div", {
              className: "card",
              children: g.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 300px",
                  gap: "1rem"
                },
                children: [
                  g.jsx(Pp, {
                    imageUrl: e.imageUrl,
                    svgString: e.mergedSvg || e.vtracerSvg,
                    manifest: e.manifest || [],
                    selectedPart: e.selectedPart,
                    onPartSelect: (d) => t({
                      type: "SET_SELECTED_PART",
                      part: d
                    })
                  }),
                  g.jsxs("div", {
                    children: [
                      g.jsx(jp, {
                        manifest: e.manifest || [],
                        groups: e.groups,
                        selectedPart: e.selectedPart,
                        onPartSelect: (d) => t({
                          type: "SET_SELECTED_PART",
                          part: d
                        })
                      }),
                      e.selectedPart && i && g.jsx(Rp, {
                        part: e.selectedPart,
                        onRefine: s,
                        isRefining: !!e.progress
                      })
                    ]
                  })
                ]
              })
            }),
            g.jsxs("div", {
              style: {
                textAlign: "center",
                marginTop: "1rem"
              },
              children: [
                g.jsx("button", {
                  className: "btn",
                  onClick: () => {
                    t({
                      type: "SET_STAGE",
                      stage: "upload"
                    });
                  },
                  style: {
                    marginRight: "0.5rem"
                  },
                  children: "\u2190 Back"
                }),
                g.jsx("button", {
                  className: "btn btn-primary",
                  onClick: a,
                  children: "Accept & Export \u2192"
                })
              ]
            })
          ]
        }),
        e.stage === "export" && g.jsxs("div", {
          children: [
            g.jsx(zp, {
              componentCode: e.componentCode,
              componentName: e.componentName,
              onNameChange: (d) => {
                t({
                  type: "SET_COMPONENT_NAME",
                  name: d
                });
                const p = es(e.mergedSvg || e.vtracerSvg, e.manifest || [], d || "GeneratedComponent");
                t({
                  type: "SET_COMPONENT_CODE",
                  code: p
                });
              },
              svgString: e.mergedSvg || e.vtracerSvg
            }),
            g.jsxs("div", {
              style: {
                textAlign: "center",
                marginTop: "1rem"
              },
              children: [
                g.jsx("button", {
                  className: "btn",
                  onClick: () => t({
                    type: "SET_STAGE",
                    stage: "review"
                  }),
                  children: "\u2190 Back to Review"
                }),
                g.jsx("button", {
                  className: "btn",
                  onClick: () => t({
                    type: "RESET"
                  }),
                  style: {
                    marginLeft: "0.5rem"
                  },
                  children: "Start Over"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const Hp = hc(document.getElementById("root"));
  Hp.render(g.jsx(Yd, {
    children: g.jsx(Vp, {})
  }));
})();

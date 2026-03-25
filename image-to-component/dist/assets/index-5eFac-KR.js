var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
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
      function Ic(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
      }
      var gs = {
        exports: {}
      }, gl = {}, ys = {
        exports: {}
      }, O = {};
      var ir = Symbol.for("react.element"), Dc = Symbol.for("react.portal"), Ac = Symbol.for("react.fragment"), Fc = Symbol.for("react.strict_mode"), Uc = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), Bc = Symbol.for("react.context"), Vc = Symbol.for("react.forward_ref"), Wc = Symbol.for("react.suspense"), Hc = Symbol.for("react.memo"), Gc = Symbol.for("react.lazy"), nu = Symbol.iterator;
      function Qc(e) {
        return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var vs = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      }, ws = Object.assign, _s = {};
      function hn(e, t, n) {
        this.props = e, this.context = t, this.refs = _s, this.updater = n || vs;
      }
      hn.prototype.isReactComponent = {};
      hn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      };
      hn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      function Ss() {
      }
      Ss.prototype = hn.prototype;
      function ni(e, t, n) {
        this.props = e, this.context = t, this.refs = _s, this.updater = n || vs;
      }
      var ri = ni.prototype = new Ss();
      ri.constructor = ni;
      ws(ri, hn.prototype);
      ri.isPureReactComponent = true;
      var ru = Array.isArray, xs = Object.prototype.hasOwnProperty, li = {
        current: null
      }, ks = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function Es(e, t, n) {
        var r, l = {}, o = null, i = null;
        if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) xs.call(t, r) && !ks.hasOwnProperty(r) && (l[r] = t[r]);
        var u = arguments.length - 2;
        if (u === 1) l.children = n;
        else if (1 < u) {
          for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
          l.children = s;
        }
        if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
        return {
          $$typeof: ir,
          type: e,
          key: o,
          ref: i,
          props: l,
          _owner: li.current
        };
      }
      function Kc(e, t) {
        return {
          $$typeof: ir,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }
      function oi(e) {
        return typeof e == "object" && e !== null && e.$$typeof === ir;
      }
      function Yc(e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
          return t[n];
        });
      }
      var lu = /\/+/g;
      function Il(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Yc("" + e.key) : t.toString(36);
      }
      function Or(e, t, n, r, l) {
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
              case ir:
              case Dc:
                i = true;
            }
        }
        if (i) return i = e, l = l(i), e = r === "" ? "." + Il(i, 0) : r, ru(l) ? (n = "", e != null && (n = e.replace(lu, "$&/") + "/"), Or(l, t, n, "", function(a) {
          return a;
        })) : l != null && (oi(l) && (l = Kc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(lu, "$&/") + "/") + e)), t.push(l)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", ru(e)) for (var u = 0; u < e.length; u++) {
          o = e[u];
          var s = r + Il(o, u);
          i += Or(o, t, n, s, l);
        }
        else if (s = Qc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Il(o, u++), i += Or(o, t, n, s, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
      }
      function pr(e, t, n) {
        if (e == null) return e;
        var r = [], l = 0;
        return Or(e, r, "", "", function(o) {
          return t.call(n, o, l++);
        }), r;
      }
      function Xc(e) {
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
      var ce = {
        current: null
      }, Lr = {
        transition: null
      }, Zc = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: Lr,
        ReactCurrentOwner: li
      };
      function Cs() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      O.Children = {
        map: pr,
        forEach: function(e, t, n) {
          pr(e, function() {
            t.apply(this, arguments);
          }, n);
        },
        count: function(e) {
          var t = 0;
          return pr(e, function() {
            t++;
          }), t;
        },
        toArray: function(e) {
          return pr(e, function(t) {
            return t;
          }) || [];
        },
        only: function(e) {
          if (!oi(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        }
      };
      O.Component = hn;
      O.Fragment = Ac;
      O.Profiler = Uc;
      O.PureComponent = ni;
      O.StrictMode = Fc;
      O.Suspense = Wc;
      O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc;
      O.act = Cs;
      O.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = ws({}, e.props), l = e.key, o = e.ref, i = e._owner;
        if (t != null) {
          if (t.ref !== void 0 && (o = t.ref, i = li.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
          for (s in t) xs.call(t, s) && !ks.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (s === 1) r.children = n;
        else if (1 < s) {
          u = Array(s);
          for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
          r.children = u;
        }
        return {
          $$typeof: ir,
          type: e.type,
          key: l,
          ref: o,
          props: r,
          _owner: i
        };
      };
      O.createContext = function(e) {
        return e = {
          $$typeof: Bc,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, e.Provider = {
          $$typeof: $c,
          _context: e
        }, e.Consumer = e;
      };
      O.createElement = Es;
      O.createFactory = function(e) {
        var t = Es.bind(null, e);
        return t.type = e, t;
      };
      O.createRef = function() {
        return {
          current: null
        };
      };
      O.forwardRef = function(e) {
        return {
          $$typeof: Vc,
          render: e
        };
      };
      O.isValidElement = oi;
      O.lazy = function(e) {
        return {
          $$typeof: Gc,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: Xc
        };
      };
      O.memo = function(e, t) {
        return {
          $$typeof: Hc,
          type: e,
          compare: t === void 0 ? null : t
        };
      };
      O.startTransition = function(e) {
        var t = Lr.transition;
        Lr.transition = {};
        try {
          e();
        } finally {
          Lr.transition = t;
        }
      };
      O.unstable_act = Cs;
      O.useCallback = function(e, t) {
        return ce.current.useCallback(e, t);
      };
      O.useContext = function(e) {
        return ce.current.useContext(e);
      };
      O.useDebugValue = function() {
      };
      O.useDeferredValue = function(e) {
        return ce.current.useDeferredValue(e);
      };
      O.useEffect = function(e, t) {
        return ce.current.useEffect(e, t);
      };
      O.useId = function() {
        return ce.current.useId();
      };
      O.useImperativeHandle = function(e, t, n) {
        return ce.current.useImperativeHandle(e, t, n);
      };
      O.useInsertionEffect = function(e, t) {
        return ce.current.useInsertionEffect(e, t);
      };
      O.useLayoutEffect = function(e, t) {
        return ce.current.useLayoutEffect(e, t);
      };
      O.useMemo = function(e, t) {
        return ce.current.useMemo(e, t);
      };
      O.useReducer = function(e, t, n) {
        return ce.current.useReducer(e, t, n);
      };
      O.useRef = function(e) {
        return ce.current.useRef(e);
      };
      O.useState = function(e) {
        return ce.current.useState(e);
      };
      O.useSyncExternalStore = function(e, t, n) {
        return ce.current.useSyncExternalStore(e, t, n);
      };
      O.useTransition = function() {
        return ce.current.useTransition();
      };
      O.version = "18.3.1";
      ys.exports = O;
      var M = ys.exports;
      const Ts = Ic(M);
      var Jc = M, qc = Symbol.for("react.element"), bc = Symbol.for("react.fragment"), ef = Object.prototype.hasOwnProperty, tf = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nf = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function Ns(e, t, n) {
        var r, l = {}, o = null, i = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for (r in t) ef.call(t, r) && !nf.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
        return {
          $$typeof: qc,
          type: e,
          key: o,
          ref: i,
          props: l,
          _owner: tf.current
        };
      }
      gl.Fragment = bc;
      gl.jsx = Ns;
      gl.jsxs = Ns;
      gs.exports = gl;
      var g = gs.exports, Ps = {
        exports: {}
      }, xe = {}, js = {
        exports: {}
      }, Rs = {};
      (function(e) {
        function t(C, j) {
          var z = C.length;
          C.push(j);
          e: for (; 0 < z; ) {
            var Q = z - 1 >>> 1, J = C[Q];
            if (0 < l(J, j)) C[Q] = j, C[z] = J, z = Q;
            else break e;
          }
        }
        function n(C) {
          return C.length === 0 ? null : C[0];
        }
        function r(C) {
          if (C.length === 0) return null;
          var j = C[0], z = C.pop();
          if (z !== j) {
            C[0] = z;
            e: for (var Q = 0, J = C.length, fr = J >>> 1; Q < fr; ) {
              var kt = 2 * (Q + 1) - 1, Ml = C[kt], Et = kt + 1, dr = C[Et];
              if (0 > l(Ml, z)) Et < J && 0 > l(dr, Ml) ? (C[Q] = dr, C[Et] = z, Q = Et) : (C[Q] = Ml, C[kt] = z, Q = kt);
              else if (Et < J && 0 > l(dr, z)) C[Q] = dr, C[Et] = z, Q = Et;
              else break e;
            }
          }
          return j;
        }
        function l(C, j) {
          var z = C.sortIndex - j.sortIndex;
          return z !== 0 ? z : C.id - j.id;
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
        var s = [], a = [], d = 1, p = null, m = 3, y = false, w = false, S = false, R = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function h(C) {
          for (var j = n(a); j !== null; ) {
            if (j.callback === null) r(a);
            else if (j.startTime <= C) r(a), j.sortIndex = j.expirationTime, t(s, j);
            else break;
            j = n(a);
          }
        }
        function v(C) {
          if (S = false, h(C), !w) if (n(s) !== null) w = true, Ol(x);
          else {
            var j = n(a);
            j !== null && Ll(v, j.startTime - C);
          }
        }
        function x(C, j) {
          w = false, S && (S = false, f(N), N = -1), y = true;
          var z = m;
          try {
            for (h(j), p = n(s); p !== null && (!(p.expirationTime > j) || C && !Re()); ) {
              var Q = p.callback;
              if (typeof Q == "function") {
                p.callback = null, m = p.priorityLevel;
                var J = Q(p.expirationTime <= j);
                j = e.unstable_now(), typeof J == "function" ? p.callback = J : p === n(s) && r(s), h(j);
              } else r(s);
              p = n(s);
            }
            if (p !== null) var fr = true;
            else {
              var kt = n(a);
              kt !== null && Ll(v, kt.startTime - j), fr = false;
            }
            return fr;
          } finally {
            p = null, m = z, y = false;
          }
        }
        var k = false, T = null, N = -1, G = 5, L = -1;
        function Re() {
          return !(e.unstable_now() - L < G);
        }
        function vn() {
          if (T !== null) {
            var C = e.unstable_now();
            L = C;
            var j = true;
            try {
              j = T(true, C);
            } finally {
              j ? wn() : (k = false, T = null);
            }
          } else k = false;
        }
        var wn;
        if (typeof c == "function") wn = function() {
          c(vn);
        };
        else if (typeof MessageChannel < "u") {
          var tu = new MessageChannel(), Mc = tu.port2;
          tu.port1.onmessage = vn, wn = function() {
            Mc.postMessage(null);
          };
        } else wn = function() {
          R(vn, 0);
        };
        function Ol(C) {
          T = C, k || (k = true, wn());
        }
        function Ll(C, j) {
          N = R(function() {
            C(e.unstable_now());
          }, j);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
          C.callback = null;
        }, e.unstable_continueExecution = function() {
          w || y || (w = true, Ol(x));
        }, e.unstable_forceFrameRate = function(C) {
          0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < C ? Math.floor(1e3 / C) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
          return m;
        }, e.unstable_getFirstCallbackNode = function() {
          return n(s);
        }, e.unstable_next = function(C) {
          switch (m) {
            case 1:
            case 2:
            case 3:
              var j = 3;
              break;
            default:
              j = m;
          }
          var z = m;
          m = j;
          try {
            return C();
          } finally {
            m = z;
          }
        }, e.unstable_pauseExecution = function() {
        }, e.unstable_requestPaint = function() {
        }, e.unstable_runWithPriority = function(C, j) {
          switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              C = 3;
          }
          var z = m;
          m = C;
          try {
            return j();
          } finally {
            m = z;
          }
        }, e.unstable_scheduleCallback = function(C, j, z) {
          var Q = e.unstable_now();
          switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, C) {
            case 1:
              var J = -1;
              break;
            case 2:
              J = 250;
              break;
            case 5:
              J = 1073741823;
              break;
            case 4:
              J = 1e4;
              break;
            default:
              J = 5e3;
          }
          return J = z + J, C = {
            id: d++,
            callback: j,
            priorityLevel: C,
            startTime: z,
            expirationTime: J,
            sortIndex: -1
          }, z > Q ? (C.sortIndex = z, t(a, C), n(s) === null && C === n(a) && (S ? (f(N), N = -1) : S = true, Ll(v, z - Q))) : (C.sortIndex = J, t(s, C), w || y || (w = true, Ol(x))), C;
        }, e.unstable_shouldYield = Re, e.unstable_wrapCallback = function(C) {
          var j = m;
          return function() {
            var z = m;
            m = j;
            try {
              return C.apply(this, arguments);
            } finally {
              m = z;
            }
          };
        };
      })(Rs);
      js.exports = Rs;
      var rf = js.exports;
      var lf = M, Se = rf;
      function _(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var zs = /* @__PURE__ */ new Set(), Wn = {};
      function Ut(e, t) {
        un(e, t), un(e + "Capture", t);
      }
      function un(e, t) {
        for (Wn[e] = t, e = 0; e < t.length; e++) zs.add(t[e]);
      }
      var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uo = Object.prototype.hasOwnProperty, of = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ou = {}, iu = {};
      function uf(e) {
        return uo.call(iu, e) ? true : uo.call(ou, e) ? false : of.test(e) ? iu[e] = true : (ou[e] = true, false);
      }
      function sf(e, t, n, r) {
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
      function af(e, t, n, r) {
        if (t === null || typeof t > "u" || sf(e, t, n, r)) return true;
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
      function fe(e, t, n, r, l, o, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
      }
      var re = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        re[e] = new fe(e, 0, false, e, null, false, false);
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
        re[t] = new fe(t, 1, false, e[1], null, false, false);
      });
      [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
      ].forEach(function(e) {
        re[e] = new fe(e, 2, false, e.toLowerCase(), null, false, false);
      });
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        re[e] = new fe(e, 2, false, e, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        re[e] = new fe(e, 3, false, e.toLowerCase(), null, false, false);
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(e) {
        re[e] = new fe(e, 3, true, e, null, false, false);
      });
      [
        "capture",
        "download"
      ].forEach(function(e) {
        re[e] = new fe(e, 4, false, e, null, false, false);
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(e) {
        re[e] = new fe(e, 6, false, e, null, false, false);
      });
      [
        "rowSpan",
        "start"
      ].forEach(function(e) {
        re[e] = new fe(e, 5, false, e.toLowerCase(), null, false, false);
      });
      var ii = /[\-:]([a-z])/g;
      function ui(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ii, ui);
        re[t] = new fe(t, 1, false, e, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ii, ui);
        re[t] = new fe(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(e) {
        var t = e.replace(ii, ui);
        re[t] = new fe(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      [
        "tabIndex",
        "crossOrigin"
      ].forEach(function(e) {
        re[e] = new fe(e, 1, false, e.toLowerCase(), null, false, false);
      });
      re.xlinkHref = new fe("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      [
        "src",
        "href",
        "action",
        "formAction"
      ].forEach(function(e) {
        re[e] = new fe(e, 1, false, e.toLowerCase(), null, true, true);
      });
      function si(e, t, n, r) {
        var l = re.hasOwnProperty(t) ? re[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (af(t, n, l, r) && (n = null), r || l === null ? uf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      var tt = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), ai = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), Os = Symbol.for("react.provider"), Ls = Symbol.for("react.context"), ci = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), co = Symbol.for("react.suspense_list"), fi = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Ms = Symbol.for("react.offscreen"), uu = Symbol.iterator;
      function _n(e) {
        return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var W = Object.assign, Dl;
      function Pn(e) {
        if (Dl === void 0) try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Dl = t && t[1] || "";
        }
        return `
` + Dl + e;
      }
      var Al = false;
      function Fl(e, t) {
        if (!e || Al) return "";
        Al = true;
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
          Al = false, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
      }
      function cf(e) {
        switch (e.tag) {
          case 5:
            return Pn(e.type);
          case 16:
            return Pn("Lazy");
          case 13:
            return Pn("Suspense");
          case 19:
            return Pn("SuspenseList");
          case 0:
          case 2:
          case 15:
            return e = Fl(e.type, false), e;
          case 11:
            return e = Fl(e.type.render, false), e;
          case 1:
            return e = Fl(e.type, true), e;
          default:
            return "";
        }
      }
      function fo(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Wt:
            return "Fragment";
          case Vt:
            return "Portal";
          case so:
            return "Profiler";
          case ai:
            return "StrictMode";
          case ao:
            return "Suspense";
          case co:
            return "SuspenseList";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Ls:
            return (e.displayName || "Context") + ".Consumer";
          case Os:
            return (e._context.displayName || "Context") + ".Provider";
          case ci:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case fi:
            return t = e.displayName || null, t !== null ? t : fo(e.type) || "Memo";
          case lt:
            t = e._payload, e = e._init;
            try {
              return fo(e(t));
            } catch {
            }
        }
        return null;
      }
      function ff(e) {
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
            return fo(t);
          case 8:
            return t === ai ? "StrictMode" : "Mode";
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
      function vt(e) {
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
      function Is(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
      }
      function df(e) {
        var t = Is(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
      function hr(e) {
        e._valueTracker || (e._valueTracker = df(e));
      }
      function Ds(e) {
        if (!e) return false;
        var t = e._valueTracker;
        if (!t) return true;
        var n = t.getValue(), r = "";
        return e && (r = Is(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
      }
      function Gr(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function po(e, t) {
        var n = t.checked;
        return W({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: n ?? e._wrapperState.initialChecked
        });
      }
      function su(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = vt(t.value != null ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
      }
      function As(e, t) {
        t = t.checked, t != null && si(e, "checked", t, false);
      }
      function mo(e, t) {
        As(e, t);
        var n = vt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
        }
        t.hasOwnProperty("value") ? ho(e, t.type, n) : t.hasOwnProperty("defaultValue") && ho(e, t.type, vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
      }
      function au(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
      }
      function ho(e, t, n) {
        (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var jn = Array.isArray;
      function en(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
          for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
        } else {
          for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
              e[l].selected = true, r && (e[l].defaultSelected = true);
              return;
            }
            t !== null || e[l].disabled || (t = e[l]);
          }
          t !== null && (t.selected = true);
        }
      }
      function go(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
        return W({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }
      function cu(e, t) {
        var n = t.value;
        if (n == null) {
          if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(_(92));
            if (jn(n)) {
              if (1 < n.length) throw Error(_(93));
              n = n[0];
            }
            t = n;
          }
          t == null && (t = ""), n = t;
        }
        e._wrapperState = {
          initialValue: vt(n)
        };
      }
      function Fs(e, t) {
        var n = vt(t.value), r = vt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
      }
      function fu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
      }
      function Us(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function yo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Us(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
      }
      var gr, $s = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l);
          });
        } : e;
      }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
          for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
      function Hn(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      var On = {
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
      }, pf = [
        "Webkit",
        "ms",
        "Moz",
        "O"
      ];
      Object.keys(On).forEach(function(e) {
        pf.forEach(function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
        });
      });
      function Bs(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
      }
      function Vs(e, t) {
        e = e.style;
        for (var n in t) if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0, l = Bs(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
      }
      var mf = W({
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
      function vo(e, t) {
        if (t) {
          if (mf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
          }
          if (t.style != null && typeof t.style != "object") throw Error(_(62));
        }
      }
      function wo(e, t) {
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
      var _o = null;
      function di(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
      }
      var So = null, tn = null, nn = null;
      function du(e) {
        if (e = ar(e)) {
          if (typeof So != "function") throw Error(_(280));
          var t = e.stateNode;
          t && (t = Sl(t), So(e.stateNode, e.type, t));
        }
      }
      function Ws(e) {
        tn ? nn ? nn.push(e) : nn = [
          e
        ] : tn = e;
      }
      function Hs() {
        if (tn) {
          var e = tn, t = nn;
          if (nn = tn = null, du(e), t) for (e = 0; e < t.length; e++) du(t[e]);
        }
      }
      function Gs(e, t) {
        return e(t);
      }
      function Qs() {
      }
      var Ul = false;
      function Ks(e, t, n) {
        if (Ul) return e(t, n);
        Ul = true;
        try {
          return Gs(e, t, n);
        } finally {
          Ul = false, (tn !== null || nn !== null) && (Qs(), Hs());
        }
      }
      function Gn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Sl(n);
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
        if (n && typeof n != "function") throw Error(_(231, t, typeof n));
        return n;
      }
      var xo = false;
      if (Je) try {
        var Sn = {};
        Object.defineProperty(Sn, "passive", {
          get: function() {
            xo = true;
          }
        }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
      } catch {
        xo = false;
      }
      function hf(e, t, n, r, l, o, i, u, s) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, a);
        } catch (d) {
          this.onError(d);
        }
      }
      var Ln = false, Qr = null, Kr = false, ko = null, gf = {
        onError: function(e) {
          Ln = true, Qr = e;
        }
      };
      function yf(e, t, n, r, l, o, i, u, s) {
        Ln = false, Qr = null, hf.apply(gf, arguments);
      }
      function vf(e, t, n, r, l, o, i, u, s) {
        if (yf.apply(this, arguments), Ln) {
          if (Ln) {
            var a = Qr;
            Ln = false, Qr = null;
          } else throw Error(_(198));
          Kr || (Kr = true, ko = a);
        }
      }
      function $t(e) {
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
      function Ys(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
      }
      function pu(e) {
        if ($t(e) !== e) throw Error(_(188));
      }
      function wf(e) {
        var t = e.alternate;
        if (!t) {
          if (t = $t(e), t === null) throw Error(_(188));
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
              if (o === n) return pu(l), e;
              if (o === r) return pu(l), t;
              o = o.sibling;
            }
            throw Error(_(188));
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
              if (!i) throw Error(_(189));
            }
          }
          if (n.alternate !== r) throw Error(_(190));
        }
        if (n.tag !== 3) throw Error(_(188));
        return n.stateNode.current === n ? e : t;
      }
      function Xs(e) {
        return e = wf(e), e !== null ? Zs(e) : null;
      }
      function Zs(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
          var t = Zs(e);
          if (t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      var Js = Se.unstable_scheduleCallback, mu = Se.unstable_cancelCallback, _f = Se.unstable_shouldYield, Sf = Se.unstable_requestPaint, K = Se.unstable_now, xf = Se.unstable_getCurrentPriorityLevel, pi = Se.unstable_ImmediatePriority, qs = Se.unstable_UserBlockingPriority, Yr = Se.unstable_NormalPriority, kf = Se.unstable_LowPriority, bs = Se.unstable_IdlePriority, yl = null, Be = null;
      function Ef(e) {
        if (Be && typeof Be.onCommitFiberRoot == "function") try {
          Be.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
      }
      var Ie = Math.clz32 ? Math.clz32 : Nf, Cf = Math.log, Tf = Math.LN2;
      function Nf(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Cf(e) / Tf | 0) | 0;
      }
      var yr = 64, vr = 4194304;
      function Rn(e) {
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
      function Xr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
          var u = i & ~l;
          u !== 0 ? r = Rn(u) : (o &= i, o !== 0 && (r = Rn(o)));
        } else i = n & ~l, i !== 0 ? r = Rn(i) : o !== 0 && (r = Rn(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
        return r;
      }
      function Pf(e, t) {
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
      function jf(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
          var i = 31 - Ie(o), u = 1 << i, s = l[i];
          s === -1 ? (!(u & n) || u & r) && (l[i] = Pf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
        }
      }
      function Eo(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
      }
      function ea() {
        var e = yr;
        return yr <<= 1, !(yr & 4194240) && (yr = 64), e;
      }
      function $l(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function ur(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
      }
      function Rf(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
          var l = 31 - Ie(n), o = 1 << l;
          t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
        }
      }
      function mi(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
          var r = 31 - Ie(n), l = 1 << r;
          l & t | e[r] & t && (e[r] |= t), n &= ~l;
        }
      }
      var D = 0;
      function ta(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
      }
      var na, hi, ra, la, oa, Co = false, wr = [], ct = null, ft = null, dt = null, Qn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), it = [], zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function hu(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            ct = null;
            break;
          case "dragenter":
          case "dragleave":
            ft = null;
            break;
          case "mouseover":
          case "mouseout":
            dt = null;
            break;
          case "pointerover":
          case "pointerout":
            Qn.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Kn.delete(t.pointerId);
        }
      }
      function xn(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [
            l
          ]
        }, t !== null && (t = ar(t), t !== null && hi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
      }
      function Of(e, t, n, r, l) {
        switch (t) {
          case "focusin":
            return ct = xn(ct, e, t, n, r, l), true;
          case "dragenter":
            return ft = xn(ft, e, t, n, r, l), true;
          case "mouseover":
            return dt = xn(dt, e, t, n, r, l), true;
          case "pointerover":
            var o = l.pointerId;
            return Qn.set(o, xn(Qn.get(o) || null, e, t, n, r, l)), true;
          case "gotpointercapture":
            return o = l.pointerId, Kn.set(o, xn(Kn.get(o) || null, e, t, n, r, l)), true;
        }
        return false;
      }
      function ia(e) {
        var t = Nt(e.target);
        if (t !== null) {
          var n = $t(t);
          if (n !== null) {
            if (t = n.tag, t === 13) {
              if (t = Ys(n), t !== null) {
                e.blockedOn = t, oa(e.priority, function() {
                  ra(n);
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
      function Mr(e) {
        if (e.blockedOn !== null) return false;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            _o = r, n.target.dispatchEvent(r), _o = null;
          } else return t = ar(n), t !== null && hi(t), e.blockedOn = n, false;
          t.shift();
        }
        return true;
      }
      function gu(e, t, n) {
        Mr(e) && n.delete(t);
      }
      function Lf() {
        Co = false, ct !== null && Mr(ct) && (ct = null), ft !== null && Mr(ft) && (ft = null), dt !== null && Mr(dt) && (dt = null), Qn.forEach(gu), Kn.forEach(gu);
      }
      function kn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Co || (Co = true, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Lf)));
      }
      function Yn(e) {
        function t(l) {
          return kn(l, e);
        }
        if (0 < wr.length) {
          kn(wr[0], e);
          for (var n = 1; n < wr.length; n++) {
            var r = wr[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (ct !== null && kn(ct, e), ft !== null && kn(ft, e), dt !== null && kn(dt, e), Qn.forEach(t), Kn.forEach(t), n = 0; n < it.length; n++) r = it[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < it.length && (n = it[0], n.blockedOn === null); ) ia(n), n.blockedOn === null && it.shift();
      }
      var rn = tt.ReactCurrentBatchConfig, Zr = true;
      function Mf(e, t, n, r) {
        var l = D, o = rn.transition;
        rn.transition = null;
        try {
          D = 1, gi(e, t, n, r);
        } finally {
          D = l, rn.transition = o;
        }
      }
      function If(e, t, n, r) {
        var l = D, o = rn.transition;
        rn.transition = null;
        try {
          D = 4, gi(e, t, n, r);
        } finally {
          D = l, rn.transition = o;
        }
      }
      function gi(e, t, n, r) {
        if (Zr) {
          var l = To(e, t, n, r);
          if (l === null) Zl(e, t, r, Jr, n), hu(e, r);
          else if (Of(l, e, t, n, r)) r.stopPropagation();
          else if (hu(e, r), t & 4 && -1 < zf.indexOf(e)) {
            for (; l !== null; ) {
              var o = ar(l);
              if (o !== null && na(o), o = To(e, t, n, r), o === null && Zl(e, t, r, Jr, n), o === l) break;
              l = o;
            }
            l !== null && r.stopPropagation();
          } else Zl(e, t, r, null, n);
        }
      }
      var Jr = null;
      function To(e, t, n, r) {
        if (Jr = null, e = di(r), e = Nt(e), e !== null) if (t = $t(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
          if (e = Ys(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
        return Jr = e, null;
      }
      function ua(e) {
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
            switch (xf()) {
              case pi:
                return 1;
              case qs:
                return 4;
              case Yr:
              case kf:
                return 16;
              case bs:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var st = null, yi = null, Ir = null;
      function sa() {
        if (Ir) return Ir;
        var e, t = yi, n = t.length, r, l = "value" in st ? st.value : st.textContent, o = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++) ;
        var i = n - e;
        for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
        return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
      }
      function Dr(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
      }
      function _r() {
        return true;
      }
      function yu() {
        return false;
      }
      function ke(e) {
        function t(n, r, l, o, i) {
          this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
          for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
          return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? _r : yu, this.isPropagationStopped = yu, this;
        }
        return W(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = _r);
          },
          stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = _r);
          },
          persist: function() {
          },
          isPersistent: _r
        }), t;
      }
      var gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      }, vi = ke(gn), sr = W({}, gn, {
        view: 0,
        detail: 0
      }), Df = ke(sr), Bl, Vl, En, vl = W({}, sr, {
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
        getModifierState: wi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Bl = e.screenX - En.screenX, Vl = e.screenY - En.screenY) : Vl = Bl = 0, En = e), Bl);
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : Vl;
        }
      }), vu = ke(vl), Af = W({}, vl, {
        dataTransfer: 0
      }), Ff = ke(Af), Uf = W({}, sr, {
        relatedTarget: 0
      }), Wl = ke(Uf), $f = W({}, gn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Bf = ke($f), Vf = W({}, gn, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }), Wf = ke(Vf), Hf = W({}, gn, {
        data: 0
      }), wu = ke(Hf), Gf = {
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
      }, Qf = {
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
      }, Kf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Yf(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Kf[e]) ? !!t[e] : false;
      }
      function wi() {
        return Yf;
      }
      var Xf = W({}, sr, {
        key: function(e) {
          if (e.key) {
            var t = Gf[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qf[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: wi,
        charCode: function(e) {
          return e.type === "keypress" ? Dr(e) : 0;
        },
        keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
          return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
      }), Zf = ke(Xf), Jf = W({}, vl, {
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
      }), _u = ke(Jf), qf = W({}, sr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: wi
      }), bf = ke(qf), ed = W({}, gn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), td = ke(ed), nd = W({}, vl, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }), rd = ke(nd), ld = [
        9,
        13,
        27,
        32
      ], _i = Je && "CompositionEvent" in window, Mn = null;
      Je && "documentMode" in document && (Mn = document.documentMode);
      var od = Je && "TextEvent" in window && !Mn, aa = Je && (!_i || Mn && 8 < Mn && 11 >= Mn), Su = " ", xu = false;
      function ca(e, t) {
        switch (e) {
          case "keyup":
            return ld.indexOf(t.keyCode) !== -1;
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
      function fa(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
      }
      var Ht = false;
      function id(e, t) {
        switch (e) {
          case "compositionend":
            return fa(t);
          case "keypress":
            return t.which !== 32 ? null : (xu = true, Su);
          case "textInput":
            return e = t.data, e === Su && xu ? null : e;
          default:
            return null;
        }
      }
      function ud(e, t) {
        if (Ht) return e === "compositionend" || !_i && ca(e, t) ? (e = sa(), Ir = yi = st = null, Ht = false, e) : null;
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
            return aa && t.locale !== "ko" ? null : t.data;
          default:
            return null;
        }
      }
      var sd = {
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
      function ku(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!sd[e.type] : t === "textarea";
      }
      function da(e, t, n, r) {
        Ws(r), t = qr(t, "onChange"), 0 < t.length && (n = new vi("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }));
      }
      var In = null, Xn = null;
      function ad(e) {
        ka(e, 0);
      }
      function wl(e) {
        var t = Kt(e);
        if (Ds(t)) return e;
      }
      function cd(e, t) {
        if (e === "change") return t;
      }
      var pa = false;
      if (Je) {
        var Hl;
        if (Je) {
          var Gl = "oninput" in document;
          if (!Gl) {
            var Eu = document.createElement("div");
            Eu.setAttribute("oninput", "return;"), Gl = typeof Eu.oninput == "function";
          }
          Hl = Gl;
        } else Hl = false;
        pa = Hl && (!document.documentMode || 9 < document.documentMode);
      }
      function Cu() {
        In && (In.detachEvent("onpropertychange", ma), Xn = In = null);
      }
      function ma(e) {
        if (e.propertyName === "value" && wl(Xn)) {
          var t = [];
          da(t, Xn, e, di(e)), Ks(ad, t);
        }
      }
      function fd(e, t, n) {
        e === "focusin" ? (Cu(), In = t, Xn = n, In.attachEvent("onpropertychange", ma)) : e === "focusout" && Cu();
      }
      function dd(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(Xn);
      }
      function pd(e, t) {
        if (e === "click") return wl(t);
      }
      function md(e, t) {
        if (e === "input" || e === "change") return wl(t);
      }
      function hd(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      var Ae = typeof Object.is == "function" ? Object.is : hd;
      function Zn(e, t) {
        if (Ae(e, t)) return true;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return false;
        for (r = 0; r < n.length; r++) {
          var l = n[r];
          if (!uo.call(t, l) || !Ae(e[l], t[l])) return false;
        }
        return true;
      }
      function Tu(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Nu(e, t) {
        var n = Tu(e);
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
          n = Tu(n);
        }
      }
      function ha(e, t) {
        return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? ha(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
      }
      function ga() {
        for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href == "string";
          } catch {
            n = false;
          }
          if (n) e = t.contentWindow;
          else break;
          t = Gr(e.document);
        }
        return t;
      }
      function Si(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
      }
      function gd(e) {
        var t = ga(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ha(n.ownerDocument.documentElement, n)) {
          if (r !== null && Si(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
              e = e.getSelection();
              var l = n.textContent.length, o = Math.min(r.start, l);
              r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Nu(n, o);
              var i = Nu(n, r);
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
      var yd = Je && "documentMode" in document && 11 >= document.documentMode, Gt = null, No = null, Dn = null, Po = false;
      function Pu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Po || Gt == null || Gt !== Gr(r) || (r = Gt, "selectionStart" in r && Si(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }), Dn && Zn(Dn, r) || (Dn = r, r = qr(No, "onSelect"), 0 < r.length && (t = new vi("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = Gt)));
      }
      function Sr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
      }
      var Qt = {
        animationend: Sr("Animation", "AnimationEnd"),
        animationiteration: Sr("Animation", "AnimationIteration"),
        animationstart: Sr("Animation", "AnimationStart"),
        transitionend: Sr("Transition", "TransitionEnd")
      }, Ql = {}, ya = {};
      Je && (ya = document.createElement("div").style, "AnimationEvent" in window || (delete Qt.animationend.animation, delete Qt.animationiteration.animation, delete Qt.animationstart.animation), "TransitionEvent" in window || delete Qt.transitionend.transition);
      function _l(e) {
        if (Ql[e]) return Ql[e];
        if (!Qt[e]) return e;
        var t = Qt[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in ya) return Ql[e] = t[n];
        return e;
      }
      var va = _l("animationend"), wa = _l("animationiteration"), _a = _l("animationstart"), Sa = _l("transitionend"), xa = /* @__PURE__ */ new Map(), ju = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function _t(e, t) {
        xa.set(e, t), Ut(t, [
          e
        ]);
      }
      for (var Kl = 0; Kl < ju.length; Kl++) {
        var Yl = ju[Kl], vd = Yl.toLowerCase(), wd = Yl[0].toUpperCase() + Yl.slice(1);
        _t(vd, "on" + wd);
      }
      _t(va, "onAnimationEnd");
      _t(wa, "onAnimationIteration");
      _t(_a, "onAnimationStart");
      _t("dblclick", "onDoubleClick");
      _t("focusin", "onFocus");
      _t("focusout", "onBlur");
      _t(Sa, "onTransitionEnd");
      un("onMouseEnter", [
        "mouseout",
        "mouseover"
      ]);
      un("onMouseLeave", [
        "mouseout",
        "mouseover"
      ]);
      un("onPointerEnter", [
        "pointerout",
        "pointerover"
      ]);
      un("onPointerLeave", [
        "pointerout",
        "pointerover"
      ]);
      Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      Ut("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]);
      Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _d = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
      function Ru(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, vf(r, t, void 0, e), e.currentTarget = null;
      }
      function ka(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
          var r = e[n], l = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t) for (var i = r.length - 1; 0 <= i; i--) {
              var u = r[i], s = u.instance, a = u.currentTarget;
              if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
              Ru(l, u, a), o = s;
            }
            else for (i = 0; i < r.length; i++) {
              if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
              Ru(l, u, a), o = s;
            }
          }
        }
        if (Kr) throw e = ko, Kr = false, ko = null, e;
      }
      function F(e, t) {
        var n = t[Lo];
        n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
        var r = e + "__bubble";
        n.has(r) || (Ea(t, e, 2, false), n.add(r));
      }
      function Xl(e, t, n) {
        var r = 0;
        t && (r |= 4), Ea(n, e, r, t);
      }
      var xr = "_reactListening" + Math.random().toString(36).slice(2);
      function Jn(e) {
        if (!e[xr]) {
          e[xr] = true, zs.forEach(function(n) {
            n !== "selectionchange" && (_d.has(n) || Xl(n, false, e), Xl(n, true, e));
          });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[xr] || (t[xr] = true, Xl("selectionchange", false, t));
        }
      }
      function Ea(e, t, n, r) {
        switch (ua(t)) {
          case 1:
            var l = Mf;
            break;
          case 4:
            l = If;
            break;
          default:
            l = gi;
        }
        n = l.bind(null, t, n, e), l = void 0, !xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
          capture: true,
          passive: l
        }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
          passive: l
        }) : e.addEventListener(t, n, false);
      }
      function Zl(e, t, n, r, l) {
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
              if (i = Nt(u), i === null) return;
              if (s = i.tag, s === 5 || s === 6) {
                r = o = i;
                continue e;
              }
              u = u.parentNode;
            }
          }
          r = r.return;
        }
        Ks(function() {
          var a = o, d = di(n), p = [];
          e: {
            var m = xa.get(e);
            if (m !== void 0) {
              var y = vi, w = e;
              switch (e) {
                case "keypress":
                  if (Dr(n) === 0) break e;
                case "keydown":
                case "keyup":
                  y = Zf;
                  break;
                case "focusin":
                  w = "focus", y = Wl;
                  break;
                case "focusout":
                  w = "blur", y = Wl;
                  break;
                case "beforeblur":
                case "afterblur":
                  y = Wl;
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
                  y = vu;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  y = Ff;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  y = bf;
                  break;
                case va:
                case wa:
                case _a:
                  y = Bf;
                  break;
                case Sa:
                  y = td;
                  break;
                case "scroll":
                  y = Df;
                  break;
                case "wheel":
                  y = rd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  y = Wf;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  y = _u;
              }
              var S = (t & 4) !== 0, R = !S && e === "scroll", f = S ? m !== null ? m + "Capture" : null : m;
              S = [];
              for (var c = a, h; c !== null; ) {
                h = c;
                var v = h.stateNode;
                if (h.tag === 5 && v !== null && (h = v, f !== null && (v = Gn(c, f), v != null && S.push(qn(c, v, h)))), R) break;
                c = c.return;
              }
              0 < S.length && (m = new y(m, w, null, n, d), p.push({
                event: m,
                listeners: S
              }));
            }
          }
          if (!(t & 7)) {
            e: {
              if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== _o && (w = n.relatedTarget || n.fromElement) && (Nt(w) || w[qe])) break e;
              if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = a, w = w ? Nt(w) : null, w !== null && (R = $t(w), w !== R || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = a), y !== w)) {
                if (S = vu, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = _u, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), R = y == null ? m : Kt(y), h = w == null ? m : Kt(w), m = new S(v, c + "leave", y, n, d), m.target = R, m.relatedTarget = h, v = null, Nt(d) === a && (S = new S(f, c + "enter", w, n, d), S.target = h, S.relatedTarget = R, v = S), R = v, y && w) t: {
                  for (S = y, f = w, c = 0, h = S; h; h = Bt(h)) c++;
                  for (h = 0, v = f; v; v = Bt(v)) h++;
                  for (; 0 < c - h; ) S = Bt(S), c--;
                  for (; 0 < h - c; ) f = Bt(f), h--;
                  for (; c--; ) {
                    if (S === f || f !== null && S === f.alternate) break t;
                    S = Bt(S), f = Bt(f);
                  }
                  S = null;
                }
                else S = null;
                y !== null && zu(p, m, y, S, false), w !== null && R !== null && zu(p, R, w, S, true);
              }
            }
            e: {
              if (m = a ? Kt(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var x = cd;
              else if (ku(m)) if (pa) x = md;
              else {
                x = dd;
                var k = fd;
              }
              else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = pd);
              if (x && (x = x(e, a))) {
                da(p, x, n, d);
                break e;
              }
              k && k(e, m, a), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && ho(m, "number", m.value);
            }
            switch (k = a ? Kt(a) : window, e) {
              case "focusin":
                (ku(k) || k.contentEditable === "true") && (Gt = k, No = a, Dn = null);
                break;
              case "focusout":
                Dn = No = Gt = null;
                break;
              case "mousedown":
                Po = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Po = false, Pu(p, n, d);
                break;
              case "selectionchange":
                if (yd) break;
              case "keydown":
              case "keyup":
                Pu(p, n, d);
            }
            var T;
            if (_i) e: {
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
            else Ht ? ca(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (aa && n.locale !== "ko" && (Ht || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ht && (T = sa()) : (st = d, yi = "value" in st ? st.value : st.textContent, Ht = true)), k = qr(a, N), 0 < k.length && (N = new wu(N, e, null, n, d), p.push({
              event: N,
              listeners: k
            }), T ? N.data = T : (T = fa(n), T !== null && (N.data = T)))), (T = od ? id(e, n) : ud(e, n)) && (a = qr(a, "onBeforeInput"), 0 < a.length && (d = new wu("onBeforeInput", "beforeinput", null, n, d), p.push({
              event: d,
              listeners: a
            }), d.data = T));
          }
          ka(p, t);
        });
      }
      function qn(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        };
      }
      function qr(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
          var l = e, o = l.stateNode;
          l.tag === 5 && o !== null && (l = o, o = Gn(e, n), o != null && r.unshift(qn(e, o, l)), o = Gn(e, t), o != null && r.push(qn(e, o, l))), e = e.return;
        }
        return r;
      }
      function Bt(e) {
        if (e === null) return null;
        do
          e = e.return;
        while (e && e.tag !== 5);
        return e || null;
      }
      function zu(e, t, n, r, l) {
        for (var o = t._reactName, i = []; n !== null && n !== r; ) {
          var u = n, s = u.alternate, a = u.stateNode;
          if (s !== null && s === r) break;
          u.tag === 5 && a !== null && (u = a, l ? (s = Gn(n, o), s != null && i.unshift(qn(n, s, u))) : l || (s = Gn(n, o), s != null && i.push(qn(n, s, u)))), n = n.return;
        }
        i.length !== 0 && e.push({
          event: t,
          listeners: i
        });
      }
      var Sd = /\r\n?/g, xd = /\u0000|\uFFFD/g;
      function Ou(e) {
        return (typeof e == "string" ? e : "" + e).replace(Sd, `
`).replace(xd, "");
      }
      function kr(e, t, n) {
        if (t = Ou(t), Ou(e) !== t && n) throw Error(_(425));
      }
      function br() {
      }
      var jo = null, Ro = null;
      function zo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
      }
      var Oo = typeof setTimeout == "function" ? setTimeout : void 0, kd = typeof clearTimeout == "function" ? clearTimeout : void 0, Lu = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lu < "u" ? function(e) {
        return Lu.resolve(null).then(e).catch(Cd);
      } : Oo;
      function Cd(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function Jl(e, t) {
        var n = t, r = 0;
        do {
          var l = n.nextSibling;
          if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
            if (r === 0) {
              e.removeChild(l), Yn(t);
              return;
            }
            r--;
          } else n !== "$" && n !== "$?" && n !== "$!" || r++;
          n = l;
        } while (n);
        Yn(t);
      }
      function pt(e) {
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
      function Mu(e) {
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
      var yn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + yn, bn = "__reactProps$" + yn, qe = "__reactContainer$" + yn, Lo = "__reactEvents$" + yn, Td = "__reactListeners$" + yn, Nd = "__reactHandles$" + yn;
      function Nt(e) {
        var t = e[$e];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if (t = n[qe] || n[$e]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mu(e); e !== null; ) {
              if (n = e[$e]) return n;
              e = Mu(e);
            }
            return t;
          }
          e = n, n = e.parentNode;
        }
        return null;
      }
      function ar(e) {
        return e = e[$e] || e[qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
      }
      function Kt(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(_(33));
      }
      function Sl(e) {
        return e[bn] || null;
      }
      var Mo = [], Yt = -1;
      function St(e) {
        return {
          current: e
        };
      }
      function U(e) {
        0 > Yt || (e.current = Mo[Yt], Mo[Yt] = null, Yt--);
      }
      function A(e, t) {
        Yt++, Mo[Yt] = e.current, e.current = t;
      }
      var wt = {}, ue = St(wt), he = St(false), Lt = wt;
      function sn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return wt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, o;
        for (o in n) l[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
      }
      function ge(e) {
        return e = e.childContextTypes, e != null;
      }
      function el() {
        U(he), U(ue);
      }
      function Iu(e, t, n) {
        if (ue.current !== wt) throw Error(_(168));
        A(ue, t), A(he, n);
      }
      function Ca(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r) if (!(l in t)) throw Error(_(108, ff(e) || "Unknown", l));
        return W({}, n, r);
      }
      function tl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wt, Lt = ue.current, A(ue, e), A(he, he.current), true;
      }
      function Du(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(_(169));
        n ? (e = Ca(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, U(he), U(ue), A(ue, e)) : U(he), A(he, n);
      }
      var Qe = null, xl = false, ql = false;
      function Ta(e) {
        Qe === null ? Qe = [
          e
        ] : Qe.push(e);
      }
      function Pd(e) {
        xl = true, Ta(e);
      }
      function xt() {
        if (!ql && Qe !== null) {
          ql = true;
          var e = 0, t = D;
          try {
            var n = Qe;
            for (D = 1; e < n.length; e++) {
              var r = n[e];
              do
                r = r(true);
              while (r !== null);
            }
            Qe = null, xl = false;
          } catch (l) {
            throw Qe !== null && (Qe = Qe.slice(e + 1)), Js(pi, xt), l;
          } finally {
            D = t, ql = false;
          }
        }
        return null;
      }
      var Xt = [], Zt = 0, nl = null, rl = 0, Ee = [], Ce = 0, Mt = null, Ye = 1, Xe = "";
      function Ct(e, t) {
        Xt[Zt++] = rl, Xt[Zt++] = nl, nl = e, rl = t;
      }
      function Na(e, t, n) {
        Ee[Ce++] = Ye, Ee[Ce++] = Xe, Ee[Ce++] = Mt, Mt = e;
        var r = Ye;
        e = Xe;
        var l = 32 - Ie(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - Ie(t) + l;
        if (30 < o) {
          var i = l - l % 5;
          o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ye = 1 << 32 - Ie(t) + l | n << l | r, Xe = o + e;
        } else Ye = 1 << o | n << l | r, Xe = e;
      }
      function xi(e) {
        e.return !== null && (Ct(e, 1), Na(e, 1, 0));
      }
      function ki(e) {
        for (; e === nl; ) nl = Xt[--Zt], Xt[Zt] = null, rl = Xt[--Zt], Xt[Zt] = null;
        for (; e === Mt; ) Mt = Ee[--Ce], Ee[Ce] = null, Xe = Ee[--Ce], Ee[Ce] = null, Ye = Ee[--Ce], Ee[Ce] = null;
      }
      var _e = null, we = null, $ = false, Me = null;
      function Pa(e, t) {
        var n = Te(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
          n
        ], e.flags |= 16) : t.push(n);
      }
      function Au(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, we = pt(t.firstChild), true) : false;
          case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _e = e, we = null, true) : false;
          case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mt !== null ? {
              id: Ye,
              overflow: Xe
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _e = e, we = null, true) : false;
          default:
            return false;
        }
      }
      function Io(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
      }
      function Do(e) {
        if ($) {
          var t = we;
          if (t) {
            var n = t;
            if (!Au(e, t)) {
              if (Io(e)) throw Error(_(418));
              t = pt(n.nextSibling);
              var r = _e;
              t && Au(e, t) ? Pa(r, n) : (e.flags = e.flags & -4097 | 2, $ = false, _e = e);
            }
          } else {
            if (Io(e)) throw Error(_(418));
            e.flags = e.flags & -4097 | 2, $ = false, _e = e;
          }
        }
      }
      function Fu(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        _e = e;
      }
      function Er(e) {
        if (e !== _e) return false;
        if (!$) return Fu(e), $ = true, false;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps)), t && (t = we)) {
          if (Io(e)) throw ja(), Error(_(418));
          for (; t; ) Pa(e, t), t = pt(t.nextSibling);
        }
        if (Fu(e), e.tag === 13) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                  if (t === 0) {
                    we = pt(e.nextSibling);
                    break e;
                  }
                  t--;
                } else n !== "$" && n !== "$!" && n !== "$?" || t++;
              }
              e = e.nextSibling;
            }
            we = null;
          }
        } else we = _e ? pt(e.stateNode.nextSibling) : null;
        return true;
      }
      function ja() {
        for (var e = we; e; ) e = pt(e.nextSibling);
      }
      function an() {
        we = _e = null, $ = false;
      }
      function Ei(e) {
        Me === null ? Me = [
          e
        ] : Me.push(e);
      }
      var jd = tt.ReactCurrentBatchConfig;
      function Cn(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
          if (n._owner) {
            if (n = n._owner, n) {
              if (n.tag !== 1) throw Error(_(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var l = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
              var u = l.refs;
              i === null ? delete u[o] : u[o] = i;
            }, t._stringRef = o, t);
          }
          if (typeof e != "string") throw Error(_(284));
          if (!n._owner) throw Error(_(290, e));
        }
        return e;
      }
      function Cr(e, t) {
        throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
      }
      function Uu(e) {
        var t = e._init;
        return t(e._payload);
      }
      function Ra(e) {
        function t(f, c) {
          if (e) {
            var h = f.deletions;
            h === null ? (f.deletions = [
              c
            ], f.flags |= 16) : h.push(c);
          }
        }
        function n(f, c) {
          if (!e) return null;
          for (; c !== null; ) t(f, c), c = c.sibling;
          return null;
        }
        function r(f, c) {
          for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
          return f;
        }
        function l(f, c) {
          return f = yt(f, c), f.index = 0, f.sibling = null, f;
        }
        function o(f, c, h) {
          return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
        }
        function i(f) {
          return e && f.alternate === null && (f.flags |= 2), f;
        }
        function u(f, c, h, v) {
          return c === null || c.tag !== 6 ? (c = oo(h, f.mode, v), c.return = f, c) : (c = l(c, h), c.return = f, c);
        }
        function s(f, c, h, v) {
          var x = h.type;
          return x === Wt ? d(f, c, h.props.children, v, h.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === lt && Uu(x) === c.type) ? (v = l(c, h.props), v.ref = Cn(f, c, h), v.return = f, v) : (v = Wr(h.type, h.key, h.props, null, f.mode, v), v.ref = Cn(f, c, h), v.return = f, v);
        }
        function a(f, c, h, v) {
          return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = io(h, f.mode, v), c.return = f, c) : (c = l(c, h.children || []), c.return = f, c);
        }
        function d(f, c, h, v, x) {
          return c === null || c.tag !== 7 ? (c = Ot(h, f.mode, v, x), c.return = f, c) : (c = l(c, h), c.return = f, c);
        }
        function p(f, c, h) {
          if (typeof c == "string" && c !== "" || typeof c == "number") return c = oo("" + c, f.mode, h), c.return = f, c;
          if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
              case mr:
                return h = Wr(c.type, c.key, c.props, null, f.mode, h), h.ref = Cn(f, null, c), h.return = f, h;
              case Vt:
                return c = io(c, f.mode, h), c.return = f, c;
              case lt:
                var v = c._init;
                return p(f, v(c._payload), h);
            }
            if (jn(c) || _n(c)) return c = Ot(c, f.mode, h, null), c.return = f, c;
            Cr(f, c);
          }
          return null;
        }
        function m(f, c, h, v) {
          var x = c !== null ? c.key : null;
          if (typeof h == "string" && h !== "" || typeof h == "number") return x !== null ? null : u(f, c, "" + h, v);
          if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case mr:
                return h.key === x ? s(f, c, h, v) : null;
              case Vt:
                return h.key === x ? a(f, c, h, v) : null;
              case lt:
                return x = h._init, m(f, c, x(h._payload), v);
            }
            if (jn(h) || _n(h)) return x !== null ? null : d(f, c, h, v, null);
            Cr(f, h);
          }
          return null;
        }
        function y(f, c, h, v, x) {
          if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(h) || null, u(c, f, "" + v, x);
          if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
              case mr:
                return f = f.get(v.key === null ? h : v.key) || null, s(c, f, v, x);
              case Vt:
                return f = f.get(v.key === null ? h : v.key) || null, a(c, f, v, x);
              case lt:
                var k = v._init;
                return y(f, c, h, k(v._payload), x);
            }
            if (jn(v) || _n(v)) return f = f.get(h) || null, d(c, f, v, x, null);
            Cr(c, v);
          }
          return null;
        }
        function w(f, c, h, v) {
          for (var x = null, k = null, T = c, N = c = 0, G = null; T !== null && N < h.length; N++) {
            T.index > N ? (G = T, T = null) : G = T.sibling;
            var L = m(f, T, h[N], v);
            if (L === null) {
              T === null && (T = G);
              break;
            }
            e && T && L.alternate === null && t(f, T), c = o(L, c, N), k === null ? x = L : k.sibling = L, k = L, T = G;
          }
          if (N === h.length) return n(f, T), $ && Ct(f, N), x;
          if (T === null) {
            for (; N < h.length; N++) T = p(f, h[N], v), T !== null && (c = o(T, c, N), k === null ? x = T : k.sibling = T, k = T);
            return $ && Ct(f, N), x;
          }
          for (T = r(f, T); N < h.length; N++) G = y(T, f, N, h[N], v), G !== null && (e && G.alternate !== null && T.delete(G.key === null ? N : G.key), c = o(G, c, N), k === null ? x = G : k.sibling = G, k = G);
          return e && T.forEach(function(Re) {
            return t(f, Re);
          }), $ && Ct(f, N), x;
        }
        function S(f, c, h, v) {
          var x = _n(h);
          if (typeof x != "function") throw Error(_(150));
          if (h = x.call(h), h == null) throw Error(_(151));
          for (var k = x = null, T = c, N = c = 0, G = null, L = h.next(); T !== null && !L.done; N++, L = h.next()) {
            T.index > N ? (G = T, T = null) : G = T.sibling;
            var Re = m(f, T, L.value, v);
            if (Re === null) {
              T === null && (T = G);
              break;
            }
            e && T && Re.alternate === null && t(f, T), c = o(Re, c, N), k === null ? x = Re : k.sibling = Re, k = Re, T = G;
          }
          if (L.done) return n(f, T), $ && Ct(f, N), x;
          if (T === null) {
            for (; !L.done; N++, L = h.next()) L = p(f, L.value, v), L !== null && (c = o(L, c, N), k === null ? x = L : k.sibling = L, k = L);
            return $ && Ct(f, N), x;
          }
          for (T = r(f, T); !L.done; N++, L = h.next()) L = y(T, f, N, L.value, v), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? N : L.key), c = o(L, c, N), k === null ? x = L : k.sibling = L, k = L);
          return e && T.forEach(function(vn) {
            return t(f, vn);
          }), $ && Ct(f, N), x;
        }
        function R(f, c, h, v) {
          if (typeof h == "object" && h !== null && h.type === Wt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
              case mr:
                e: {
                  for (var x = h.key, k = c; k !== null; ) {
                    if (k.key === x) {
                      if (x = h.type, x === Wt) {
                        if (k.tag === 7) {
                          n(f, k.sibling), c = l(k, h.props.children), c.return = f, f = c;
                          break e;
                        }
                      } else if (k.elementType === x || typeof x == "object" && x !== null && x.$$typeof === lt && Uu(x) === k.type) {
                        n(f, k.sibling), c = l(k, h.props), c.ref = Cn(f, k, h), c.return = f, f = c;
                        break e;
                      }
                      n(f, k);
                      break;
                    } else t(f, k);
                    k = k.sibling;
                  }
                  h.type === Wt ? (c = Ot(h.props.children, f.mode, v, h.key), c.return = f, f = c) : (v = Wr(h.type, h.key, h.props, null, f.mode, v), v.ref = Cn(f, c, h), v.return = f, f = v);
                }
                return i(f);
              case Vt:
                e: {
                  for (k = h.key; c !== null; ) {
                    if (c.key === k) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                      n(f, c.sibling), c = l(c, h.children || []), c.return = f, f = c;
                      break e;
                    } else {
                      n(f, c);
                      break;
                    }
                    else t(f, c);
                    c = c.sibling;
                  }
                  c = io(h, f.mode, v), c.return = f, f = c;
                }
                return i(f);
              case lt:
                return k = h._init, R(f, c, k(h._payload), v);
            }
            if (jn(h)) return w(f, c, h, v);
            if (_n(h)) return S(f, c, h, v);
            Cr(f, h);
          }
          return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, h), c.return = f, f = c) : (n(f, c), c = oo(h, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
        }
        return R;
      }
      var cn = Ra(true), za = Ra(false), ll = St(null), ol = null, Jt = null, Ci = null;
      function Ti() {
        Ci = Jt = ol = null;
      }
      function Ni(e) {
        var t = ll.current;
        U(ll), e._currentValue = t;
      }
      function Ao(e, t, n) {
        for (; e !== null; ) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return;
        }
      }
      function ln(e, t) {
        ol = e, Ci = Jt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = true), e.firstContext = null);
      }
      function Pe(e) {
        var t = e._currentValue;
        if (Ci !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, Jt === null) {
          if (ol === null) throw Error(_(308));
          Jt = e, ol.dependencies = {
            lanes: 0,
            firstContext: e
          };
        } else Jt = Jt.next = e;
        return t;
      }
      var Pt = null;
      function Pi(e) {
        Pt === null ? Pt = [
          e
        ] : Pt.push(e);
      }
      function Oa(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, Pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, be(e, r);
      }
      function be(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
      }
      var ot = false;
      function ji(e) {
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
      function La(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
      }
      function Ze(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function mt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, I & 2) {
          var l = r.pending;
          return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, be(e, n);
        }
        return l = r.interleaved, l === null ? (t.next = t, Pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, be(e, n);
      }
      function Ar(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, mi(e, n);
        }
      }
      function $u(e, t) {
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
      function il(e, t, n, r) {
        var l = e.updateQueue;
        ot = false;
        var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
        if (u !== null) {
          l.shared.pending = null;
          var s = u, a = s.next;
          s.next = null, i === null ? o = a : i.next = a, i = s;
          var d = e.alternate;
          d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== i && (u === null ? d.firstBaseUpdate = a : u.next = a, d.lastBaseUpdate = s));
        }
        if (o !== null) {
          var p = l.baseState;
          i = 0, d = a = s = null, u = o;
          do {
            var m = u.lane, y = u.eventTime;
            if ((r & m) === m) {
              d !== null && (d = d.next = {
                eventTime: y,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
              });
              e: {
                var w = e, S = u;
                switch (m = t, y = n, S.tag) {
                  case 1:
                    if (w = S.payload, typeof w == "function") {
                      p = w.call(y, p, m);
                      break e;
                    }
                    p = w;
                    break e;
                  case 3:
                    w.flags = w.flags & -65537 | 128;
                  case 0:
                    if (w = S.payload, m = typeof w == "function" ? w.call(y, p, m) : w, m == null) break e;
                    p = W({}, p, m);
                    break e;
                  case 2:
                    ot = true;
                }
              }
              u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [
                u
              ] : m.push(u));
            } else y = {
              eventTime: y,
              lane: m,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null
            }, d === null ? (a = d = y, s = p) : d = d.next = y, i |= m;
            if (u = u.next, u === null) {
              if (u = l.shared.pending, u === null) break;
              m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
            }
          } while (true);
          if (d === null && (s = p), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do
              i |= l.lane, l = l.next;
            while (l !== t);
          } else o === null && (l.shared.lanes = 0);
          Dt |= i, e.lanes = i, e.memoizedState = p;
        }
      }
      function Bu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
          var r = e[t], l = r.callback;
          if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function") throw Error(_(191, l));
            l.call(r);
          }
        }
      }
      var cr = {}, Ve = St(cr), er = St(cr), tr = St(cr);
      function jt(e) {
        if (e === cr) throw Error(_(174));
        return e;
      }
      function Ri(e, t) {
        switch (A(tr, t), A(er, e), A(Ve, cr), e = t.nodeType, e) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
            break;
          default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yo(t, e);
        }
        U(Ve), A(Ve, t);
      }
      function fn() {
        U(Ve), U(er), U(tr);
      }
      function Ma(e) {
        jt(tr.current);
        var t = jt(Ve.current), n = yo(t, e.type);
        t !== n && (A(er, e), A(Ve, n));
      }
      function zi(e) {
        er.current === e && (U(Ve), U(er));
      }
      var B = St(0);
      function ul(e) {
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
      var bl = [];
      function Oi() {
        for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
        bl.length = 0;
      }
      var Fr = tt.ReactCurrentDispatcher, eo = tt.ReactCurrentBatchConfig, It = 0, V = null, X = null, q = null, sl = false, An = false, nr = 0, Rd = 0;
      function le() {
        throw Error(_(321));
      }
      function Li(e, t) {
        if (t === null) return false;
        for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return false;
        return true;
      }
      function Mi(e, t, n, r, l, o) {
        if (It = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fr.current = e === null || e.memoizedState === null ? Md : Id, e = n(r, l), An) {
          o = 0;
          do {
            if (An = false, nr = 0, 25 <= o) throw Error(_(301));
            o += 1, q = X = null, t.updateQueue = null, Fr.current = Dd, e = n(r, l);
          } while (An);
        }
        if (Fr.current = al, t = X !== null && X.next !== null, It = 0, q = X = V = null, sl = false, t) throw Error(_(300));
        return e;
      }
      function Ii() {
        var e = nr !== 0;
        return nr = 0, e;
      }
      function Ue() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return q === null ? V.memoizedState = q = e : q = q.next = e, q;
      }
      function je() {
        if (X === null) {
          var e = V.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = X.next;
        var t = q === null ? V.memoizedState : q.next;
        if (t !== null) q = t, X = e;
        else {
          if (e === null) throw Error(_(310));
          X = e, e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
          }, q === null ? V.memoizedState = q = e : q = q.next = e;
        }
        return q;
      }
      function rr(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function to(e) {
        var t = je(), n = t.queue;
        if (n === null) throw Error(_(311));
        n.lastRenderedReducer = e;
        var r = X, l = r.baseQueue, o = n.pending;
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
            var d = a.lane;
            if ((It & d) === d) s !== null && (s = s.next = {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
              var p = {
                lane: d,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
              };
              s === null ? (u = s = p, i = r) : s = s.next = p, V.lanes |= d, Dt |= d;
            }
            a = a.next;
          } while (a !== null && a !== o);
          s === null ? i = r : s.next = u, Ae(r, t.memoizedState) || (me = true), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
          l = e;
          do
            o = l.lane, V.lanes |= o, Dt |= o, l = l.next;
          while (l !== e);
        } else l === null && (n.lanes = 0);
        return [
          t.memoizedState,
          n.dispatch
        ];
      }
      function no(e) {
        var t = je(), n = t.queue;
        if (n === null) throw Error(_(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, l = n.pending, o = t.memoizedState;
        if (l !== null) {
          n.pending = null;
          var i = l = l.next;
          do
            o = e(o, i.action), i = i.next;
          while (i !== l);
          Ae(o, t.memoizedState) || (me = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
        }
        return [
          o,
          r
        ];
      }
      function Ia() {
      }
      function Da(e, t) {
        var n = V, r = je(), l = t(), o = !Ae(r.memoizedState, l);
        if (o && (r.memoizedState = l, me = true), r = r.queue, Di(Ua.bind(null, n, r, e), [
          e
        ]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
          if (n.flags |= 2048, lr(9, Fa.bind(null, n, r, l, t), void 0, null), b === null) throw Error(_(349));
          It & 30 || Aa(n, t, l);
        }
        return l;
      }
      function Aa(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, t = V.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, V.updateQueue = t, t.stores = [
          e
        ]) : (n = t.stores, n === null ? t.stores = [
          e
        ] : n.push(e));
      }
      function Fa(e, t, n, r) {
        t.value = n, t.getSnapshot = r, $a(t) && Ba(e);
      }
      function Ua(e, t, n) {
        return n(function() {
          $a(t) && Ba(e);
        });
      }
      function $a(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !Ae(e, n);
        } catch {
          return true;
        }
      }
      function Ba(e) {
        var t = be(e, 1);
        t !== null && De(t, e, 1, -1);
      }
      function Vu(e) {
        var t = Ue();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rr,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Ld.bind(null, V, e), [
          t.memoizedState,
          e
        ];
      }
      function lr(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, t = V.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
      }
      function Va() {
        return je().memoizedState;
      }
      function Ur(e, t, n, r) {
        var l = Ue();
        V.flags |= e, l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r);
      }
      function kl(e, t, n, r) {
        var l = je();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (X !== null) {
          var i = X.memoizedState;
          if (o = i.destroy, r !== null && Li(r, i.deps)) {
            l.memoizedState = lr(t, n, o, r);
            return;
          }
        }
        V.flags |= e, l.memoizedState = lr(1 | t, n, o, r);
      }
      function Wu(e, t) {
        return Ur(8390656, 8, e, t);
      }
      function Di(e, t) {
        return kl(2048, 8, e, t);
      }
      function Wa(e, t) {
        return kl(4, 2, e, t);
      }
      function Ha(e, t) {
        return kl(4, 4, e, t);
      }
      function Ga(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
          t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
          t.current = null;
        };
      }
      function Qa(e, t, n) {
        return n = n != null ? n.concat([
          e
        ]) : null, kl(4, 4, Ga.bind(null, t, e), n);
      }
      function Ai() {
      }
      function Ka(e, t) {
        var n = je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Li(t, r[1]) ? r[0] : (n.memoizedState = [
          e,
          t
        ], e);
      }
      function Ya(e, t) {
        var n = je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Li(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
          e,
          t
        ], e);
      }
      function Xa(e, t, n) {
        return It & 21 ? (Ae(n, t) || (n = ea(), V.lanes |= n, Dt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, me = true), e.memoizedState = n);
      }
      function zd(e, t) {
        var n = D;
        D = n !== 0 && 4 > n ? n : 4, e(true);
        var r = eo.transition;
        eo.transition = {};
        try {
          e(false), t();
        } finally {
          D = n, eo.transition = r;
        }
      }
      function Za() {
        return je().memoizedState;
      }
      function Od(e, t, n) {
        var r = gt(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, Ja(e)) qa(t, n);
        else if (n = Oa(e, t, n, r), n !== null) {
          var l = ae();
          De(n, e, r, l), ba(n, t, r);
        }
      }
      function Ld(e, t, n) {
        var r = gt(e), l = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (Ja(e)) qa(t, l);
        else {
          var o = e.alternate;
          if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState, u = o(i, n);
            if (l.hasEagerState = true, l.eagerState = u, Ae(u, i)) {
              var s = t.interleaved;
              s === null ? (l.next = l, Pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
              return;
            }
          } catch {
          } finally {
          }
          n = Oa(e, t, l, r), n !== null && (l = ae(), De(n, e, r, l), ba(n, t, r));
        }
      }
      function Ja(e) {
        var t = e.alternate;
        return e === V || t !== null && t === V;
      }
      function qa(e, t) {
        An = sl = true;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }
      function ba(e, t, n) {
        if (n & 4194240) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, mi(e, n);
        }
      }
      var al = {
        readContext: Pe,
        useCallback: le,
        useContext: le,
        useEffect: le,
        useImperativeHandle: le,
        useInsertionEffect: le,
        useLayoutEffect: le,
        useMemo: le,
        useReducer: le,
        useRef: le,
        useState: le,
        useDebugValue: le,
        useDeferredValue: le,
        useTransition: le,
        useMutableSource: le,
        useSyncExternalStore: le,
        useId: le,
        unstable_isNewReconciler: false
      }, Md = {
        readContext: Pe,
        useCallback: function(e, t) {
          return Ue().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: Pe,
        useEffect: Wu,
        useImperativeHandle: function(e, t, n) {
          return n = n != null ? n.concat([
            e
          ]) : null, Ur(4194308, 4, Ga.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
          return Ur(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          return Ur(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var n = Ue();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
            e,
            t
          ], e;
        },
        useReducer: function(e, t, n) {
          var r = Ue();
          return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = Od.bind(null, V, e), [
            r.memoizedState,
            e
          ];
        },
        useRef: function(e) {
          var t = Ue();
          return e = {
            current: e
          }, t.memoizedState = e;
        },
        useState: Vu,
        useDebugValue: Ai,
        useDeferredValue: function(e) {
          return Ue().memoizedState = e;
        },
        useTransition: function() {
          var e = Vu(false), t = e[0];
          return e = zd.bind(null, e[1]), Ue().memoizedState = e, [
            t,
            e
          ];
        },
        useMutableSource: function() {
        },
        useSyncExternalStore: function(e, t, n) {
          var r = V, l = Ue();
          if ($) {
            if (n === void 0) throw Error(_(407));
            n = n();
          } else {
            if (n = t(), b === null) throw Error(_(349));
            It & 30 || Aa(r, t, n);
          }
          l.memoizedState = n;
          var o = {
            value: n,
            getSnapshot: t
          };
          return l.queue = o, Wu(Ua.bind(null, r, o, e), [
            e
          ]), r.flags |= 2048, lr(9, Fa.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function() {
          var e = Ue(), t = b.identifierPrefix;
          if ($) {
            var n = Xe, r = Ye;
            n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
          } else n = Rd++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t;
        },
        unstable_isNewReconciler: false
      }, Id = {
        readContext: Pe,
        useCallback: Ka,
        useContext: Pe,
        useEffect: Di,
        useImperativeHandle: Qa,
        useInsertionEffect: Wa,
        useLayoutEffect: Ha,
        useMemo: Ya,
        useReducer: to,
        useRef: Va,
        useState: function() {
          return to(rr);
        },
        useDebugValue: Ai,
        useDeferredValue: function(e) {
          var t = je();
          return Xa(t, X.memoizedState, e);
        },
        useTransition: function() {
          var e = to(rr)[0], t = je().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: Ia,
        useSyncExternalStore: Da,
        useId: Za,
        unstable_isNewReconciler: false
      }, Dd = {
        readContext: Pe,
        useCallback: Ka,
        useContext: Pe,
        useEffect: Di,
        useImperativeHandle: Qa,
        useInsertionEffect: Wa,
        useLayoutEffect: Ha,
        useMemo: Ya,
        useReducer: no,
        useRef: Va,
        useState: function() {
          return no(rr);
        },
        useDebugValue: Ai,
        useDeferredValue: function(e) {
          var t = je();
          return X === null ? t.memoizedState = e : Xa(t, X.memoizedState, e);
        },
        useTransition: function() {
          var e = no(rr)[0], t = je().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: Ia,
        useSyncExternalStore: Da,
        useId: Za,
        unstable_isNewReconciler: false
      };
      function Oe(e, t) {
        if (e && e.defaultProps) {
          t = W({}, t), e = e.defaultProps;
          for (var n in e) t[n] === void 0 && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function Fo(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
      }
      var El = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? $t(e) === e : false;
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = ae(), l = gt(e), o = Ze(r, l);
          o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (De(t, e, l, r), Ar(t, e, l));
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = ae(), l = gt(e), o = Ze(r, l);
          o.tag = 1, o.payload = t, n != null && (o.callback = n), t = mt(e, o, l), t !== null && (De(t, e, l, r), Ar(t, e, l));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = ae(), r = gt(e), l = Ze(n, r);
          l.tag = 2, t != null && (l.callback = t), t = mt(e, l, r), t !== null && (De(t, e, r, n), Ar(t, e, r));
        }
      };
      function Hu(e, t, n, r, l, o, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Zn(n, r) || !Zn(l, o) : true;
      }
      function ec(e, t, n) {
        var r = false, l = wt, o = t.contextType;
        return typeof o == "object" && o !== null ? o = Pe(o) : (l = ge(t) ? Lt : ue.current, r = t.contextTypes, o = (r = r != null) ? sn(e, l) : wt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
      }
      function Gu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null);
      }
      function Uo(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, ji(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = Pe(o) : (o = ge(t) ? Lt : ue.current, l.context = sn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && El.enqueueReplaceState(l, l.state, null), il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
      }
      function dn(e, t) {
        try {
          var n = "", r = t;
          do
            n += cf(r), r = r.return;
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
      function ro(e, t, n) {
        return {
          value: e,
          source: null,
          stack: n ?? null,
          digest: t ?? null
        };
      }
      function $o(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function() {
            throw n;
          });
        }
      }
      var Ad = typeof WeakMap == "function" ? WeakMap : Map;
      function tc(e, t, n) {
        n = Ze(-1, n), n.tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          fl || (fl = true, Zo = r), $o(e, t);
        }, n;
      }
      function nc(e, t, n) {
        n = Ze(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var l = t.value;
          n.payload = function() {
            return r(l);
          }, n.callback = function() {
            $o(e, t);
          };
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
          $o(e, t), typeof r != "function" && (ht === null ? ht = /* @__PURE__ */ new Set([
            this
          ]) : ht.add(this));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
          });
        }), n;
      }
      function Qu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new Ad();
          var l = /* @__PURE__ */ new Set();
          r.set(t, l);
        } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
        l.has(n) || (l.add(n), e = Jd.bind(null, e, t, n), t.then(e, e));
      }
      function Ku(e) {
        do {
          var t;
          if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function Yu(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1), t.tag = 2, mt(n, t, 1))), n.lanes |= 1), e);
      }
      var Fd = tt.ReactCurrentOwner, me = false;
      function se(e, t, n, r) {
        t.child = e === null ? za(t, null, n, r) : cn(t, e.child, n, r);
      }
      function Xu(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return ln(t, l), r = Mi(e, t, n, r, o, l), n = Ii(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, et(e, t, l)) : ($ && n && xi(t), t.flags |= 1, se(e, t, r, l), t.child);
      }
      function Zu(e, t, n, r, l) {
        if (e === null) {
          var o = n.type;
          return typeof o == "function" && !Gi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, rc(e, t, o, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (o = e.child, !(e.lanes & l)) {
          var i = o.memoizedProps;
          if (n = n.compare, n = n !== null ? n : Zn, n(i, r) && e.ref === t.ref) return et(e, t, l);
        }
        return t.flags |= 1, e = yt(o, r), e.ref = t.ref, e.return = t, t.child = e;
      }
      function rc(e, t, n, r, l) {
        if (e !== null) {
          var o = e.memoizedProps;
          if (Zn(o, r) && e.ref === t.ref) if (me = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = true);
          else return t.lanes = e.lanes, et(e, t, l);
        }
        return Bo(e, t, n, r, l);
      }
      function lc(e, t, n) {
        var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, A(bt, ve), ve |= n;
        else {
          if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, A(bt, ve), ve |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, r = o !== null ? o.baseLanes : n, A(bt, ve), ve |= r;
        }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, A(bt, ve), ve |= r;
        return se(e, t, l, n), t.child;
      }
      function oc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
      }
      function Bo(e, t, n, r, l) {
        var o = ge(n) ? Lt : ue.current;
        return o = sn(t, o), ln(t, l), n = Mi(e, t, n, r, o, l), r = Ii(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, et(e, t, l)) : ($ && r && xi(t), t.flags |= 1, se(e, t, n, l), t.child);
      }
      function Ju(e, t, n, r, l) {
        if (ge(n)) {
          var o = true;
          tl(t);
        } else o = false;
        if (ln(t, l), t.stateNode === null) $r(e, t), ec(t, n, r), Uo(t, n, r, l), r = true;
        else if (e === null) {
          var i = t.stateNode, u = t.memoizedProps;
          i.props = u;
          var s = i.context, a = n.contextType;
          typeof a == "object" && a !== null ? a = Pe(a) : (a = ge(n) ? Lt : ue.current, a = sn(t, a));
          var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
          p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Gu(t, i, r, a), ot = false;
          var m = t.memoizedState;
          i.state = m, il(t, r, i, l), s = t.memoizedState, u !== r || m !== s || he.current || ot ? (typeof d == "function" && (Fo(t, n, d, r), s = t.memoizedState), (u = ot || Hu(t, n, u, r, m, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = false);
        } else {
          i = t.stateNode, La(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Oe(t.type, u), i.props = a, p = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = ge(n) ? Lt : ue.current, s = sn(t, s));
          var y = n.getDerivedStateFromProps;
          (d = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && Gu(t, i, r, s), ot = false, m = t.memoizedState, i.state = m, il(t, r, i, l);
          var w = t.memoizedState;
          u !== p || m !== w || he.current || ot ? (typeof y == "function" && (Fo(t, n, y, r), w = t.memoizedState), (a = ot || Hu(t, n, a, r, m, w, s) || false) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
        }
        return Vo(e, t, n, r, o, l);
      }
      function Vo(e, t, n, r, l, o) {
        oc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && Du(t, n, false), et(e, t, o);
        r = t.stateNode, Fd.current = t;
        var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = cn(t, e.child, null, o), t.child = cn(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && Du(t, n, true), t.child;
      }
      function ic(e) {
        var t = e.stateNode;
        t.pendingContext ? Iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iu(e, t.context, false), Ri(e, t.containerInfo);
      }
      function qu(e, t, n, r, l) {
        return an(), Ei(l), t.flags |= 256, se(e, t, n, r), t.child;
      }
      var Wo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function Ho(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
      }
      function uc(e, t, n) {
        var r = t.pendingProps, l = B.current, o = false, i = (t.flags & 128) !== 0, u;
        if ((u = i) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(B, l & 1), e === null) return Do(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
          mode: "hidden",
          children: i
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ho(n), t.memoizedState = Wo, e) : Fi(t, i));
        if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Ud(e, t, i, r, u, l, n);
        if (o) {
          o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
          var s = {
            mode: "hidden",
            children: r.children
          };
          return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = yt(u, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ho(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
          }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Wo, r;
        }
        return o = e.child, e = o.sibling, r = yt(o, {
          mode: "visible",
          children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
          e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
      }
      function Fi(e, t) {
        return t = Nl({
          mode: "visible",
          children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
      }
      function Tr(e, t, n, r) {
        return r !== null && Ei(r), cn(t, e.child, null, n), e = Fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
      }
      function Ud(e, t, n, r, l, o, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = ro(Error(_(422))), Tr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({
          mode: "visible",
          children: r.children
        }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && cn(t, e.child, null, i), t.child.memoizedState = Ho(i), t.memoizedState = Wo, o);
        if (!(t.mode & 1)) return Tr(e, t, i, null);
        if (l.data === "$!") {
          if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
          return r = u, o = Error(_(419)), r = ro(o, r, void 0), Tr(e, t, i, r);
        }
        if (u = (i & e.childLanes) !== 0, me || u) {
          if (r = b, r !== null) {
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
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, be(e, l), De(r, e, l, -1));
          }
          return Hi(), r = ro(Error(_(421))), Tr(e, t, i, r);
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = pt(l.nextSibling), _e = t, $ = true, Me = null, e !== null && (Ee[Ce++] = Ye, Ee[Ce++] = Xe, Ee[Ce++] = Mt, Ye = e.id, Xe = e.overflow, Mt = t), t = Fi(t, r.children), t.flags |= 4096, t);
      }
      function bu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Ao(e.return, t, n);
      }
      function lo(e, t, n, r, l) {
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
      function sc(e, t, n) {
        var r = t.pendingProps, l = r.revealOrder, o = r.tail;
        if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
            else if (e.tag === 19) bu(e, n, t);
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
        if (A(B, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
          case "forwards":
            for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), lo(t, false, l, n, o);
            break;
          case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null; ) {
              if (e = l.alternate, e !== null && ul(e) === null) {
                t.child = l;
                break;
              }
              e = l.sibling, l.sibling = n, n = l, l = e;
            }
            lo(t, true, n, null, o);
            break;
          case "together":
            lo(t, false, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function $r(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
      }
      function et(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Dt |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(_(153));
        if (t.child !== null) {
          for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = yt(e, e.pendingProps), n.return = t;
          n.sibling = null;
        }
        return t.child;
      }
      function $d(e, t, n) {
        switch (t.tag) {
          case 3:
            ic(t), an();
            break;
          case 5:
            Ma(t);
            break;
          case 1:
            ge(t.type) && tl(t);
            break;
          case 4:
            Ri(t, t.stateNode.containerInfo);
            break;
          case 10:
            var r = t.type._context, l = t.memoizedProps.value;
            A(ll, r._currentValue), r._currentValue = l;
            break;
          case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (A(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? uc(e, t, n) : (A(B, B.current & 1), e = et(e, t, n), e !== null ? e.sibling : null);
            A(B, B.current & 1);
            break;
          case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
              if (r) return sc(e, t, n);
              t.flags |= 128;
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(B, B.current), r) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, lc(e, t, n);
        }
        return et(e, t, n);
      }
      var ac, Go, cc, fc;
      ac = function(e, t) {
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
      Go = function() {
      };
      cc = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
          e = t.stateNode, jt(Ve.current);
          var o = null;
          switch (n) {
            case "input":
              l = po(e, l), r = po(e, r), o = [];
              break;
            case "select":
              l = W({}, l, {
                value: void 0
              }), r = W({}, r, {
                value: void 0
              }), o = [];
              break;
            case "textarea":
              l = go(e, l), r = go(e, r), o = [];
              break;
            default:
              typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
          }
          vo(n, r);
          var i;
          n = null;
          for (a in l) if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
            var u = l[a];
            for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
          } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Wn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
          for (a in r) {
            var s = r[a];
            if (u = l == null ? void 0 : l[a], r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
              for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
              for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
            } else n || (o || (o = []), o.push(a, n)), n = s;
            else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Wn.hasOwnProperty(a) ? (s != null && a === "onScroll" && F("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
          }
          n && (o = o || []).push("style", n);
          var a = o;
          (t.updateQueue = a) && (t.flags |= 4);
        }
      };
      fc = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
      function Tn(e, t) {
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
      function oe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
      }
      function Bd(e, t, n) {
        var r = t.pendingProps;
        switch (ki(t), t.tag) {
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
            return oe(t), null;
          case 1:
            return ge(t.type) && el(), oe(t), null;
          case 3:
            return r = t.stateNode, fn(), U(he), U(ue), Oi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Er(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (bo(Me), Me = null))), Go(e, t), oe(t), null;
          case 5:
            zi(t);
            var l = jt(tr.current);
            if (n = t.type, e !== null && t.stateNode != null) cc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(_(166));
                return oe(t), null;
              }
              if (e = jt(Ve.current), Er(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[$e] = t, r[bn] = o, e = (t.mode & 1) !== 0, n) {
                  case "dialog":
                    F("cancel", r), F("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    F("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < zn.length; l++) F(zn[l], r);
                    break;
                  case "source":
                    F("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    F("error", r), F("load", r);
                    break;
                  case "details":
                    F("toggle", r);
                    break;
                  case "input":
                    su(r, o), F("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!o.multiple
                    }, F("invalid", r);
                    break;
                  case "textarea":
                    cu(r, o), F("invalid", r);
                }
                vo(n, o), l = null;
                for (var i in o) if (o.hasOwnProperty(i)) {
                  var u = o[i];
                  i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && kr(r.textContent, u, e), l = [
                    "children",
                    u
                  ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && kr(r.textContent, u, e), l = [
                    "children",
                    "" + u
                  ]) : Wn.hasOwnProperty(i) && u != null && i === "onScroll" && F("scroll", r);
                }
                switch (n) {
                  case "input":
                    hr(r), au(r, o, true);
                    break;
                  case "textarea":
                    hr(r), fu(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof o.onClick == "function" && (r.onclick = br);
                }
                r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
              } else {
                i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Us(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                  is: r.is
                }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[$e] = t, e[bn] = r, ac(e, t, false, false), t.stateNode = e;
                e: {
                  switch (i = wo(n, r), n) {
                    case "dialog":
                      F("cancel", e), F("close", e), l = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      F("load", e), l = r;
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < zn.length; l++) F(zn[l], e);
                      l = r;
                      break;
                    case "source":
                      F("error", e), l = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      F("error", e), F("load", e), l = r;
                      break;
                    case "details":
                      F("toggle", e), l = r;
                      break;
                    case "input":
                      su(e, r), l = po(e, r), F("invalid", e);
                      break;
                    case "option":
                      l = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, l = W({}, r, {
                        value: void 0
                      }), F("invalid", e);
                      break;
                    case "textarea":
                      cu(e, r), l = go(e, r), F("invalid", e);
                      break;
                    default:
                      l = r;
                  }
                  vo(n, l), u = l;
                  for (o in u) if (u.hasOwnProperty(o)) {
                    var s = u[o];
                    o === "style" ? Vs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $s(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Hn(e, s) : typeof s == "number" && Hn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wn.hasOwnProperty(o) ? s != null && o === "onScroll" && F("scroll", e) : s != null && si(e, o, s, i));
                  }
                  switch (n) {
                    case "input":
                      hr(e), au(e, r, false);
                      break;
                    case "textarea":
                      hr(e), fu(e);
                      break;
                    case "option":
                      r.value != null && e.setAttribute("value", "" + vt(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, o = r.value, o != null ? en(e, !!r.multiple, o, false) : r.defaultValue != null && en(e, !!r.multiple, r.defaultValue, true);
                      break;
                    default:
                      typeof l.onClick == "function" && (e.onclick = br);
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
            return oe(t), null;
          case 6:
            if (e && t.stateNode != null) fc(e, t, e.memoizedProps, r);
            else {
              if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
              if (n = jt(tr.current), jt(Ve.current), Er(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (o = r.nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
                  case 3:
                    kr(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== true && kr(r.nodeValue, n, (e.mode & 1) !== 0);
                }
                o && (t.flags |= 4);
              } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
            }
            return oe(t), null;
          case 13:
            if (U(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) ja(), an(), t.flags |= 98560, o = false;
              else if (o = Er(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                  if (!o) throw Error(_(318));
                  if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(_(317));
                  o[$e] = t;
                } else an(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                oe(t), o = false;
              } else Me !== null && (bo(Me), Me = null), o = true;
              if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Hi())), t.updateQueue !== null && (t.flags |= 4), oe(t), null);
          case 4:
            return fn(), Go(e, t), e === null && Jn(t.stateNode.containerInfo), oe(t), null;
          case 10:
            return Ni(t.type._context), oe(t), null;
          case 17:
            return ge(t.type) && el(), oe(t), null;
          case 19:
            if (U(B), o = t.memoizedState, o === null) return oe(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tn(o, false);
            else {
              if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
                if (i = ul(e), i !== null) {
                  for (t.flags |= 128, Tn(o, false), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return A(B, B.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
              o.tail !== null && K() > pn && (t.flags |= 128, r = true, Tn(o, false), t.lanes = 4194304);
            }
            else {
              if (!r) if (e = ul(i), e !== null) {
                if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, true), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return oe(t), null;
              } else 2 * K() - o.renderingStartTime > pn && n !== 1073741824 && (t.flags |= 128, r = true, Tn(o, false), t.lanes = 4194304);
              o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, A(B, r ? n & 1 | 2 : n & 1), t) : (oe(t), null);
          case 22:
          case 23:
            return Wi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oe(t), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(_(156, t.tag));
      }
      function Vd(e, t) {
        switch (ki(t), t.tag) {
          case 1:
            return ge(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return fn(), U(he), U(ue), Oi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
          case 5:
            return zi(t), null;
          case 13:
            if (U(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null) throw Error(_(340));
              an();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return U(B), null;
          case 4:
            return fn(), null;
          case 10:
            return Ni(t.type._context), null;
          case 22:
          case 23:
            return Wi(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Nr = false, ie = false, Wd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
      function qt(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
          n(null);
        } catch (r) {
          H(e, t, r);
        }
        else n.current = null;
      }
      function Qo(e, t, n) {
        try {
          n();
        } catch (r) {
          H(e, t, r);
        }
      }
      var es = false;
      function Hd(e, t) {
        if (jo = Zr, e = ga(), Si(e)) {
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
              var i = 0, u = -1, s = -1, a = 0, d = 0, p = e, m = null;
              t: for (; ; ) {
                for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; ) m = p, p = y;
                for (; ; ) {
                  if (p === e) break t;
                  if (m === n && ++a === l && (u = i), m === o && ++d === r && (s = i), (y = p.nextSibling) !== null) break;
                  p = m, m = p.parentNode;
                }
                p = y;
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
        for (Ro = {
          focusedElem: e,
          selectionRange: n
        }, Zr = false, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
        else for (; E !== null; ) {
          t = E;
          try {
            var w = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps, R = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Oe(t.type, S), R);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(_(163));
            }
          } catch (v) {
            H(t, t.return, v);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, E = e;
            break;
          }
          E = t.return;
        }
        return w = es, es = false, w;
      }
      function Fn(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
          var l = r = r.next;
          do {
            if ((l.tag & e) === e) {
              var o = l.destroy;
              l.destroy = void 0, o !== void 0 && Qo(t, n, o);
            }
            l = l.next;
          } while (l !== r);
        }
      }
      function Cl(e, t) {
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
      function Ko(e) {
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
      function dc(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[bn], delete t[Lo], delete t[Td], delete t[Nd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function pc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function ts(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || pc(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Yo(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = br));
        else if (r !== 4 && (e = e.child, e !== null)) for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), e = e.sibling;
      }
      function Xo(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
      }
      var ee = null, Le = false;
      function nt(e, t, n) {
        for (n = n.child; n !== null; ) mc(e, t, n), n = n.sibling;
      }
      function mc(e, t, n) {
        if (Be && typeof Be.onCommitFiberUnmount == "function") try {
          Be.onCommitFiberUnmount(yl, n);
        } catch {
        }
        switch (n.tag) {
          case 5:
            ie || qt(n, t);
          case 6:
            var r = ee, l = Le;
            ee = null, nt(e, t, n), ee = r, Le = l, ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
            break;
          case 18:
            ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), Yn(e)) : Jl(ee, n.stateNode));
            break;
          case 4:
            r = ee, l = Le, ee = n.stateNode.containerInfo, Le = true, nt(e, t, n), ee = r, Le = l;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
              l = r = r.next;
              do {
                var o = l, i = o.destroy;
                o = o.tag, i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i), l = l.next;
              } while (l !== r);
            }
            nt(e, t, n);
            break;
          case 1:
            if (!ie && (qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (u) {
              H(n, t, u);
            }
            nt(e, t, n);
            break;
          case 21:
            nt(e, t, n);
            break;
          case 22:
            n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, nt(e, t, n), ie = r) : nt(e, t, n);
            break;
          default:
            nt(e, t, n);
        }
      }
      function ns(e) {
        var t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          var n = e.stateNode;
          n === null && (n = e.stateNode = new Wd()), t.forEach(function(r) {
            var l = bd.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l));
          });
        }
      }
      function ze(e, t) {
        var n = t.deletions;
        if (n !== null) for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
            var o = e, i = t, u = i;
            e: for (; u !== null; ) {
              switch (u.tag) {
                case 5:
                  ee = u.stateNode, Le = false;
                  break e;
                case 3:
                  ee = u.stateNode.containerInfo, Le = true;
                  break e;
                case 4:
                  ee = u.stateNode.containerInfo, Le = true;
                  break e;
              }
              u = u.return;
            }
            if (ee === null) throw Error(_(160));
            mc(o, i, l), ee = null, Le = false;
            var s = l.alternate;
            s !== null && (s.return = null), l.return = null;
          } catch (a) {
            H(l, t, a);
          }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hc(t, e), t = t.sibling;
      }
      function hc(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (ze(t, e), Fe(e), r & 4) {
              try {
                Fn(3, e, e.return), Cl(3, e);
              } catch (S) {
                H(e, e.return, S);
              }
              try {
                Fn(5, e, e.return);
              } catch (S) {
                H(e, e.return, S);
              }
            }
            break;
          case 1:
            ze(t, e), Fe(e), r & 512 && n !== null && qt(n, n.return);
            break;
          case 5:
            if (ze(t, e), Fe(e), r & 512 && n !== null && qt(n, n.return), e.flags & 32) {
              var l = e.stateNode;
              try {
                Hn(l, "");
              } catch (S) {
                H(e, e.return, S);
              }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
              var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
              if (e.updateQueue = null, s !== null) try {
                u === "input" && o.type === "radio" && o.name != null && As(l, o), wo(u, i);
                var a = wo(u, o);
                for (i = 0; i < s.length; i += 2) {
                  var d = s[i], p = s[i + 1];
                  d === "style" ? Vs(l, p) : d === "dangerouslySetInnerHTML" ? $s(l, p) : d === "children" ? Hn(l, p) : si(l, d, p, a);
                }
                switch (u) {
                  case "input":
                    mo(l, o);
                    break;
                  case "textarea":
                    Fs(l, o);
                    break;
                  case "select":
                    var m = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!o.multiple;
                    var y = o.value;
                    y != null ? en(l, !!o.multiple, y, false) : m !== !!o.multiple && (o.defaultValue != null ? en(l, !!o.multiple, o.defaultValue, true) : en(l, !!o.multiple, o.multiple ? [] : "", false));
                }
                l[bn] = o;
              } catch (S) {
                H(e, e.return, S);
              }
            }
            break;
          case 6:
            if (ze(t, e), Fe(e), r & 4) {
              if (e.stateNode === null) throw Error(_(162));
              l = e.stateNode, o = e.memoizedProps;
              try {
                l.nodeValue = o;
              } catch (S) {
                H(e, e.return, S);
              }
            }
            break;
          case 3:
            if (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
              Yn(t.containerInfo);
            } catch (S) {
              H(e, e.return, S);
            }
            break;
          case 4:
            ze(t, e), Fe(e);
            break;
          case 13:
            ze(t, e), Fe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Bi = K())), r & 4 && ns(e);
            break;
          case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (a = ie) || d, ze(t, e), ie = a) : ze(t, e), Fe(e), r & 8192) {
              if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (E = e, d = e.child; d !== null; ) {
                for (p = E = d; E !== null; ) {
                  switch (m = E, y = m.child, m.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Fn(4, m, m.return);
                      break;
                    case 1:
                      qt(m, m.return);
                      var w = m.stateNode;
                      if (typeof w.componentWillUnmount == "function") {
                        r = m, n = m.return;
                        try {
                          t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                        } catch (S) {
                          H(r, n, S);
                        }
                      }
                      break;
                    case 5:
                      qt(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        ls(p);
                        continue;
                      }
                  }
                  y !== null ? (y.return = m, E = y) : ls(p);
                }
                d = d.sibling;
              }
              e: for (d = null, p = e; ; ) {
                if (p.tag === 5) {
                  if (d === null) {
                    d = p;
                    try {
                      l = p.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Bs("display", i));
                    } catch (S) {
                      H(e, e.return, S);
                    }
                  }
                } else if (p.tag === 6) {
                  if (d === null) try {
                    p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                  } catch (S) {
                    H(e, e.return, S);
                  }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                  p.child.return = p, p = p.child;
                  continue;
                }
                if (p === e) break e;
                for (; p.sibling === null; ) {
                  if (p.return === null || p.return === e) break e;
                  d === p && (d = null), p = p.return;
                }
                d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
              }
            }
            break;
          case 19:
            ze(t, e), Fe(e), r & 4 && ns(e);
            break;
          case 21:
            break;
          default:
            ze(t, e), Fe(e);
        }
      }
      function Fe(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            e: {
              for (var n = e.return; n !== null; ) {
                if (pc(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(_(160));
            }
            switch (r.tag) {
              case 5:
                var l = r.stateNode;
                r.flags & 32 && (Hn(l, ""), r.flags &= -33);
                var o = ts(e);
                Xo(e, o, l);
                break;
              case 3:
              case 4:
                var i = r.stateNode.containerInfo, u = ts(e);
                Yo(e, u, i);
                break;
              default:
                throw Error(_(161));
            }
          } catch (s) {
            H(e, e.return, s);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function Gd(e, t, n) {
        E = e, gc(e);
      }
      function gc(e, t, n) {
        for (var r = (e.mode & 1) !== 0; E !== null; ) {
          var l = E, o = l.child;
          if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Nr;
            if (!i) {
              var u = l.alternate, s = u !== null && u.memoizedState !== null || ie;
              u = Nr;
              var a = ie;
              if (Nr = i, (ie = s) && !a) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? os(l) : s !== null ? (s.return = i, E = s) : os(l);
              for (; o !== null; ) E = o, gc(o), o = o.sibling;
              E = l, Nr = u, ie = a;
            }
            rs(e);
          } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : rs(e);
        }
      }
      function rs(e) {
        for (; E !== null; ) {
          var t = E;
          if (t.flags & 8772) {
            var n = t.alternate;
            try {
              if (t.flags & 8772) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ie || Cl(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                  var o = t.updateQueue;
                  o !== null && Bu(t, o, r);
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
                    Bu(t, i, n);
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
                      var d = a.memoizedState;
                      if (d !== null) {
                        var p = d.dehydrated;
                        p !== null && Yn(p);
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
                  throw Error(_(163));
              }
              ie || t.flags & 512 && Ko(t);
            } catch (m) {
              H(t, t.return, m);
            }
          }
          if (t === e) {
            E = null;
            break;
          }
          if (n = t.sibling, n !== null) {
            n.return = t.return, E = n;
            break;
          }
          E = t.return;
        }
      }
      function ls(e) {
        for (; E !== null; ) {
          var t = E;
          if (t === e) {
            E = null;
            break;
          }
          var n = t.sibling;
          if (n !== null) {
            n.return = t.return, E = n;
            break;
          }
          E = t.return;
        }
      }
      function os(e) {
        for (; E !== null; ) {
          var t = E;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  Cl(4, t);
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
                  Ko(t);
                } catch (s) {
                  H(t, o, s);
                }
                break;
              case 5:
                var i = t.return;
                try {
                  Ko(t);
                } catch (s) {
                  H(t, i, s);
                }
            }
          } catch (s) {
            H(t, t.return, s);
          }
          if (t === e) {
            E = null;
            break;
          }
          var u = t.sibling;
          if (u !== null) {
            u.return = t.return, E = u;
            break;
          }
          E = t.return;
        }
      }
      var Qd = Math.ceil, cl = tt.ReactCurrentDispatcher, Ui = tt.ReactCurrentOwner, Ne = tt.ReactCurrentBatchConfig, I = 0, b = null, Y = null, ne = 0, ve = 0, bt = St(0), Z = 0, or = null, Dt = 0, Tl = 0, $i = 0, Un = null, pe = null, Bi = 0, pn = 1 / 0, Ge = null, fl = false, Zo = null, ht = null, Pr = false, at = null, dl = 0, $n = 0, Jo = null, Br = -1, Vr = 0;
      function ae() {
        return I & 6 ? K() : Br !== -1 ? Br : Br = K();
      }
      function gt(e) {
        return e.mode & 1 ? I & 2 && ne !== 0 ? ne & -ne : jd.transition !== null ? (Vr === 0 && (Vr = ea()), Vr) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ua(e.type)), e) : 1;
      }
      function De(e, t, n, r) {
        if (50 < $n) throw $n = 0, Jo = null, Error(_(185));
        ur(e, n, r), (!(I & 2) || e !== b) && (e === b && (!(I & 2) && (Tl |= n), Z === 4 && ut(e, ne)), ye(e, r), n === 1 && I === 0 && !(t.mode & 1) && (pn = K() + 500, xl && xt()));
      }
      function ye(e, t) {
        var n = e.callbackNode;
        jf(e, t);
        var r = Xr(e, e === b ? ne : 0);
        if (r === 0) n !== null && mu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (n != null && mu(n), t === 1) e.tag === 0 ? Pd(is.bind(null, e)) : Ta(is.bind(null, e)), Ed(function() {
            !(I & 6) && xt();
          }), n = null;
          else {
            switch (ta(r)) {
              case 1:
                n = pi;
                break;
              case 4:
                n = qs;
                break;
              case 16:
                n = Yr;
                break;
              case 536870912:
                n = bs;
                break;
              default:
                n = Yr;
            }
            n = Ec(n, yc.bind(null, e));
          }
          e.callbackPriority = t, e.callbackNode = n;
        }
      }
      function yc(e, t) {
        if (Br = -1, Vr = 0, I & 6) throw Error(_(327));
        var n = e.callbackNode;
        if (on() && e.callbackNode !== n) return null;
        var r = Xr(e, e === b ? ne : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
        else {
          t = r;
          var l = I;
          I |= 2;
          var o = wc();
          (b !== e || ne !== t) && (Ge = null, pn = K() + 500, zt(e, t));
          do
            try {
              Xd();
              break;
            } catch (u) {
              vc(e, u);
            }
          while (true);
          Ti(), cl.current = o, I = l, Y !== null ? t = 0 : (b = null, ne = 0, t = Z);
        }
        if (t !== 0) {
          if (t === 2 && (l = Eo(e), l !== 0 && (r = l, t = qo(e, l))), t === 1) throw n = or, zt(e, 0), ut(e, r), ye(e, K()), n;
          if (t === 6) ut(e, r);
          else {
            if (l = e.current.alternate, !(r & 30) && !Kd(l) && (t = pl(e, r), t === 2 && (o = Eo(e), o !== 0 && (r = o, t = qo(e, o))), t === 1)) throw n = or, zt(e, 0), ut(e, r), ye(e, K()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(_(345));
              case 2:
                Tt(e, pe, Ge);
                break;
              case 3:
                if (ut(e, r), (r & 130023424) === r && (t = Bi + 500 - K(), 10 < t)) {
                  if (Xr(e, 0) !== 0) break;
                  if (l = e.suspendedLanes, (l & r) !== r) {
                    ae(), e.pingedLanes |= e.suspendedLanes & l;
                    break;
                  }
                  e.timeoutHandle = Oo(Tt.bind(null, e, pe, Ge), t);
                  break;
                }
                Tt(e, pe, Ge);
                break;
              case 4:
                if (ut(e, r), (r & 4194240) === r) break;
                for (t = e.eventTimes, l = -1; 0 < r; ) {
                  var i = 31 - Ie(r);
                  o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
                }
                if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qd(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = Oo(Tt.bind(null, e, pe, Ge), r);
                  break;
                }
                Tt(e, pe, Ge);
                break;
              case 5:
                Tt(e, pe, Ge);
                break;
              default:
                throw Error(_(329));
            }
          }
        }
        return ye(e, K()), e.callbackNode === n ? yc.bind(null, e) : null;
      }
      function qo(e, t) {
        var n = Un;
        return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = pl(e, t), e !== 2 && (t = pe, pe = n, t !== null && bo(t)), e;
      }
      function bo(e) {
        pe === null ? pe = e : pe.push.apply(pe, e);
      }
      function Kd(e) {
        for (var t = e; ; ) {
          if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
              var l = n[r], o = l.getSnapshot;
              l = l.value;
              try {
                if (!Ae(o(), l)) return false;
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
      function ut(e, t) {
        for (t &= ~$i, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Ie(t), r = 1 << n;
          e[n] = -1, t &= ~r;
        }
      }
      function is(e) {
        if (I & 6) throw Error(_(327));
        on();
        var t = Xr(e, 0);
        if (!(t & 1)) return ye(e, K()), null;
        var n = pl(e, t);
        if (e.tag !== 0 && n === 2) {
          var r = Eo(e);
          r !== 0 && (t = r, n = qo(e, r));
        }
        if (n === 1) throw n = or, zt(e, 0), ut(e, t), ye(e, K()), n;
        if (n === 6) throw Error(_(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, pe, Ge), ye(e, K()), null;
      }
      function Vi(e, t) {
        var n = I;
        I |= 1;
        try {
          return e(t);
        } finally {
          I = n, I === 0 && (pn = K() + 500, xl && xt());
        }
      }
      function At(e) {
        at !== null && at.tag === 0 && !(I & 6) && on();
        var t = I;
        I |= 1;
        var n = Ne.transition, r = D;
        try {
          if (Ne.transition = null, D = 1, e) return e();
        } finally {
          D = r, Ne.transition = n, I = t, !(I & 6) && xt();
        }
      }
      function Wi() {
        ve = bt.current, U(bt);
      }
      function zt(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, kd(n)), Y !== null) for (n = Y.return; n !== null; ) {
          var r = n;
          switch (ki(r), r.tag) {
            case 1:
              r = r.type.childContextTypes, r != null && el();
              break;
            case 3:
              fn(), U(he), U(ue), Oi();
              break;
            case 5:
              zi(r);
              break;
            case 4:
              fn();
              break;
            case 13:
              U(B);
              break;
            case 19:
              U(B);
              break;
            case 10:
              Ni(r.type._context);
              break;
            case 22:
            case 23:
              Wi();
          }
          n = n.return;
        }
        if (b = e, Y = e = yt(e.current, null), ne = ve = t, Z = 0, or = null, $i = Tl = Dt = 0, pe = Un = null, Pt !== null) {
          for (t = 0; t < Pt.length; t++) if (n = Pt[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, o = n.pending;
            if (o !== null) {
              var i = o.next;
              o.next = l, r.next = i;
            }
            n.pending = r;
          }
          Pt = null;
        }
        return e;
      }
      function vc(e, t) {
        do {
          var n = Y;
          try {
            if (Ti(), Fr.current = al, sl) {
              for (var r = V.memoizedState; r !== null; ) {
                var l = r.queue;
                l !== null && (l.pending = null), r = r.next;
              }
              sl = false;
            }
            if (It = 0, q = X = V = null, An = false, nr = 0, Ui.current = null, n === null || n.return === null) {
              Z = 1, or = t, Y = null;
              break;
            }
            e: {
              var o = e, i = n.return, u = n, s = t;
              if (t = ne, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                var a = s, d = u, p = d.tag;
                if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                  var m = d.alternate;
                  m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
                }
                var y = Ku(i);
                if (y !== null) {
                  y.flags &= -257, Yu(y, i, u, o, t), y.mode & 1 && Qu(o, a, t), t = y, s = a;
                  var w = t.updateQueue;
                  if (w === null) {
                    var S = /* @__PURE__ */ new Set();
                    S.add(s), t.updateQueue = S;
                  } else w.add(s);
                  break e;
                } else {
                  if (!(t & 1)) {
                    Qu(o, a, t), Hi();
                    break e;
                  }
                  s = Error(_(426));
                }
              } else if ($ && u.mode & 1) {
                var R = Ku(i);
                if (R !== null) {
                  !(R.flags & 65536) && (R.flags |= 256), Yu(R, i, u, o, t), Ei(dn(s, u));
                  break e;
                }
              }
              o = s = dn(s, u), Z !== 4 && (Z = 2), Un === null ? Un = [
                o
              ] : Un.push(o), o = i;
              do {
                switch (o.tag) {
                  case 3:
                    o.flags |= 65536, t &= -t, o.lanes |= t;
                    var f = tc(o, s, t);
                    $u(o, f);
                    break e;
                  case 1:
                    u = s;
                    var c = o.type, h = o.stateNode;
                    if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (ht === null || !ht.has(h)))) {
                      o.flags |= 65536, t &= -t, o.lanes |= t;
                      var v = nc(o, u, t);
                      $u(o, v);
                      break e;
                    }
                }
                o = o.return;
              } while (o !== null);
            }
            Sc(n);
          } catch (x) {
            t = x, Y === n && n !== null && (Y = n = n.return);
            continue;
          }
          break;
        } while (true);
      }
      function wc() {
        var e = cl.current;
        return cl.current = al, e === null ? al : e;
      }
      function Hi() {
        (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || !(Dt & 268435455) && !(Tl & 268435455) || ut(b, ne);
      }
      function pl(e, t) {
        var n = I;
        I |= 2;
        var r = wc();
        (b !== e || ne !== t) && (Ge = null, zt(e, t));
        do
          try {
            Yd();
            break;
          } catch (l) {
            vc(e, l);
          }
        while (true);
        if (Ti(), I = n, cl.current = r, Y !== null) throw Error(_(261));
        return b = null, ne = 0, Z;
      }
      function Yd() {
        for (; Y !== null; ) _c(Y);
      }
      function Xd() {
        for (; Y !== null && !_f(); ) _c(Y);
      }
      function _c(e) {
        var t = kc(e.alternate, e, ve);
        e.memoizedProps = e.pendingProps, t === null ? Sc(e) : Y = t, Ui.current = null;
      }
      function Sc(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, t.flags & 32768) {
            if (n = Vd(n, t), n !== null) {
              n.flags &= 32767, Y = n;
              return;
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
              Z = 6, Y = null;
              return;
            }
          } else if (n = Bd(n, t, ve), n !== null) {
            Y = n;
            return;
          }
          if (t = t.sibling, t !== null) {
            Y = t;
            return;
          }
          Y = t = e;
        } while (t !== null);
        Z === 0 && (Z = 5);
      }
      function Tt(e, t, n) {
        var r = D, l = Ne.transition;
        try {
          Ne.transition = null, D = 1, Zd(e, t, n, r);
        } finally {
          Ne.transition = l, D = r;
        }
        return null;
      }
      function Zd(e, t, n, r) {
        do
          on();
        while (at !== null);
        if (I & 6) throw Error(_(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (Rf(e, o), e === b && (Y = b = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = true, Ec(Yr, function() {
          return on(), null;
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
          o = Ne.transition, Ne.transition = null;
          var i = D;
          D = 1;
          var u = I;
          I |= 4, Ui.current = null, Hd(e, n), hc(n, e), gd(Ro), Zr = !!jo, Ro = jo = null, e.current = n, Gd(n), Sf(), I = u, D = i, Ne.transition = o;
        } else e.current = n;
        if (Pr && (Pr = false, at = e, dl = l), o = e.pendingLanes, o === 0 && (ht = null), Ef(n.stateNode), ye(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
        if (fl) throw fl = false, e = Zo, Zo = null, e;
        return dl & 1 && e.tag !== 0 && on(), o = e.pendingLanes, o & 1 ? e === Jo ? $n++ : ($n = 0, Jo = e) : $n = 0, xt(), null;
      }
      function on() {
        if (at !== null) {
          var e = ta(dl), t = Ne.transition, n = D;
          try {
            if (Ne.transition = null, D = 16 > e ? 16 : e, at === null) var r = false;
            else {
              if (e = at, at = null, dl = 0, I & 6) throw Error(_(331));
              var l = I;
              for (I |= 4, E = e.current; E !== null; ) {
                var o = E, i = o.child;
                if (E.flags & 16) {
                  var u = o.deletions;
                  if (u !== null) {
                    for (var s = 0; s < u.length; s++) {
                      var a = u[s];
                      for (E = a; E !== null; ) {
                        var d = E;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Fn(8, d, o);
                        }
                        var p = d.child;
                        if (p !== null) p.return = d, E = p;
                        else for (; E !== null; ) {
                          d = E;
                          var m = d.sibling, y = d.return;
                          if (dc(d), d === a) {
                            E = null;
                            break;
                          }
                          if (m !== null) {
                            m.return = y, E = m;
                            break;
                          }
                          E = y;
                        }
                      }
                    }
                    var w = o.alternate;
                    if (w !== null) {
                      var S = w.child;
                      if (S !== null) {
                        w.child = null;
                        do {
                          var R = S.sibling;
                          S.sibling = null, S = R;
                        } while (S !== null);
                      }
                    }
                    E = o;
                  }
                }
                if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
                else e: for (; E !== null; ) {
                  if (o = E, o.flags & 2048) switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(9, o, o.return);
                  }
                  var f = o.sibling;
                  if (f !== null) {
                    f.return = o.return, E = f;
                    break e;
                  }
                  E = o.return;
                }
              }
              var c = e.current;
              for (E = c; E !== null; ) {
                i = E;
                var h = i.child;
                if (i.subtreeFlags & 2064 && h !== null) h.return = i, E = h;
                else e: for (i = c; E !== null; ) {
                  if (u = E, u.flags & 2048) try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cl(9, u);
                    }
                  } catch (x) {
                    H(u, u.return, x);
                  }
                  if (u === i) {
                    E = null;
                    break e;
                  }
                  var v = u.sibling;
                  if (v !== null) {
                    v.return = u.return, E = v;
                    break e;
                  }
                  E = u.return;
                }
              }
              if (I = l, xt(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
                Be.onPostCommitFiberRoot(yl, e);
              } catch {
              }
              r = true;
            }
            return r;
          } finally {
            D = n, Ne.transition = t;
          }
        }
        return false;
      }
      function us(e, t, n) {
        t = dn(n, t), t = tc(e, t, 1), e = mt(e, t, 1), t = ae(), e !== null && (ur(e, 1, t), ye(e, t));
      }
      function H(e, t, n) {
        if (e.tag === 3) us(e, e, n);
        else for (; t !== null; ) {
          if (t.tag === 3) {
            us(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
              e = dn(n, e), e = nc(t, e, 1), t = mt(t, e, 1), e = ae(), t !== null && (ur(t, 1, e), ye(t, e));
              break;
            }
          }
          t = t.return;
        }
      }
      function Jd(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, b === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > K() - Bi ? zt(e, 0) : $i |= n), ye(e, t);
      }
      function xc(e, t) {
        t === 0 && (e.mode & 1 ? (t = vr, vr <<= 1, !(vr & 130023424) && (vr = 4194304)) : t = 1);
        var n = ae();
        e = be(e, t), e !== null && (ur(e, t, n), ye(e, n));
      }
      function qd(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), xc(e, n);
      }
      function bd(e, t) {
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
            throw Error(_(314));
        }
        r !== null && r.delete(t), xc(e, n);
      }
      var kc;
      kc = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = true;
        else {
          if (!(e.lanes & n) && !(t.flags & 128)) return me = false, $d(e, t, n);
          me = !!(e.flags & 131072);
        }
        else me = false, $ && t.flags & 1048576 && Na(t, rl, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            $r(e, t), e = t.pendingProps;
            var l = sn(t, ue.current);
            ln(t, n), l = Mi(null, t, r, e, l, n);
            var o = Ii();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (o = true, tl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = El, t.stateNode = l, l._reactInternals = t, Uo(t, r, e, n), t = Vo(null, t, r, true, o, n)) : (t.tag = 0, $ && o && xi(t), se(null, t, l, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = tp(r), e = Oe(r, e), l) {
                case 0:
                  t = Bo(null, t, r, e, n);
                  break e;
                case 1:
                  t = Ju(null, t, r, e, n);
                  break e;
                case 11:
                  t = Xu(null, t, r, e, n);
                  break e;
                case 14:
                  t = Zu(null, t, r, Oe(r.type, e), n);
                  break e;
              }
              throw Error(_(306, r, ""));
            }
            return t;
          case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Bo(e, t, r, l, n);
          case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ju(e, t, r, l, n);
          case 3:
            e: {
              if (ic(t), e === null) throw Error(_(387));
              r = t.pendingProps, o = t.memoizedState, l = o.element, La(e, t), il(t, r, null, n);
              var i = t.memoizedState;
              if (r = i.element, o.isDehydrated) if (o = {
                element: r,
                isDehydrated: false,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                l = dn(Error(_(423)), t), t = qu(e, t, r, n, l);
                break e;
              } else if (r !== l) {
                l = dn(Error(_(424)), t), t = qu(e, t, r, n, l);
                break e;
              } else for (we = pt(t.stateNode.containerInfo.firstChild), _e = t, $ = true, Me = null, n = za(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
              else {
                if (an(), r === l) {
                  t = et(e, t, n);
                  break e;
                }
                se(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return Ma(t), e === null && Do(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zo(r, l) ? i = null : o !== null && zo(r, o) && (t.flags |= 32), oc(e, t), se(e, t, i, n), t.child;
          case 6:
            return e === null && Do(t), null;
          case 13:
            return uc(e, t, n);
          case 4:
            return Ri(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cn(t, null, r, n) : se(e, t, r, n), t.child;
          case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Xu(e, t, r, l, n);
          case 7:
            return se(e, t, t.pendingProps, n), t.child;
          case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
          case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, A(ll, r._currentValue), r._currentValue = i, o !== null) if (Ae(o.value, i)) {
                if (o.children === l.children && !he.current) {
                  t = et(e, t, n);
                  break e;
                }
              } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        s = Ze(-1, n & -n), s.tag = 2;
                        var a = o.updateQueue;
                        if (a !== null) {
                          a = a.shared;
                          var d = a.pending;
                          d === null ? s.next = s : (s.next = d.next, d.next = s), a.pending = s;
                        }
                      }
                      o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ao(o.return, n, t), u.lanes |= n;
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (i = o.return, i === null) throw Error(_(341));
                  i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ao(i, n, t), i = o.sibling;
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
              se(e, t, l.children, n), t = t.child;
            }
            return t;
          case 9:
            return l = t.type, r = t.pendingProps.children, ln(t, n), l = Pe(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
          case 14:
            return r = t.type, l = Oe(r, t.pendingProps), l = Oe(r.type, l), Zu(e, t, r, l, n);
          case 15:
            return rc(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), $r(e, t), t.tag = 1, ge(r) ? (e = true, tl(t)) : e = false, ln(t, n), ec(t, r, l), Uo(t, r, l, n), Vo(null, t, r, true, e, n);
          case 19:
            return sc(e, t, n);
          case 22:
            return lc(e, t, n);
        }
        throw Error(_(156, t.tag));
      };
      function Ec(e, t) {
        return Js(e, t);
      }
      function ep(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Te(e, t, n, r) {
        return new ep(e, t, n, r);
      }
      function Gi(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function tp(e) {
        if (typeof e == "function") return Gi(e) ? 1 : 0;
        if (e != null) {
          if (e = e.$$typeof, e === ci) return 11;
          if (e === fi) return 14;
        }
        return 2;
      }
      function yt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
      }
      function Wr(e, t, n, r, l, o) {
        var i = 2;
        if (r = e, typeof e == "function") Gi(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch (e) {
          case Wt:
            return Ot(n.children, l, o, t);
          case ai:
            i = 8, l |= 8;
            break;
          case so:
            return e = Te(12, n, t, l | 2), e.elementType = so, e.lanes = o, e;
          case ao:
            return e = Te(13, n, t, l), e.elementType = ao, e.lanes = o, e;
          case co:
            return e = Te(19, n, t, l), e.elementType = co, e.lanes = o, e;
          case Ms:
            return Nl(n, l, o, t);
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case Os:
                i = 10;
                break e;
              case Ls:
                i = 9;
                break e;
              case ci:
                i = 11;
                break e;
              case fi:
                i = 14;
                break e;
              case lt:
                i = 16, r = null;
                break e;
            }
            throw Error(_(130, e == null ? e : typeof e, ""));
        }
        return t = Te(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
      }
      function Ot(e, t, n, r) {
        return e = Te(7, e, r, t), e.lanes = n, e;
      }
      function Nl(e, t, n, r) {
        return e = Te(22, e, r, t), e.elementType = Ms, e.lanes = n, e.stateNode = {
          isHidden: false
        }, e;
      }
      function oo(e, t, n) {
        return e = Te(6, e, null, t), e.lanes = n, e;
      }
      function io(e, t, n) {
        return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function np(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
      }
      function Qi(e, t, n, r, l, o, i, u, s) {
        return e = new np(e, t, n, u, s), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Te(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, ji(o), e;
      }
      function rp(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Vt,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      }
      function Cc(e) {
        if (!e) return wt;
        e = e._reactInternals;
        e: {
          if ($t(e) !== e || e.tag !== 1) throw Error(_(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (ge(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (t !== null);
          throw Error(_(171));
        }
        if (e.tag === 1) {
          var n = e.type;
          if (ge(n)) return Ca(e, n, t);
        }
        return t;
      }
      function Tc(e, t, n, r, l, o, i, u, s) {
        return e = Qi(n, r, true, e, l, o, i, u, s), e.context = Cc(null), n = e.current, r = ae(), l = gt(n), o = Ze(r, l), o.callback = t ?? null, mt(n, o, l), e.current.lanes = l, ur(e, l, r), ye(e, r), e;
      }
      function Pl(e, t, n, r) {
        var l = t.current, o = ae(), i = gt(l);
        return n = Cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ze(o, i), t.payload = {
          element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mt(l, t, i), e !== null && (De(e, l, i, o), Ar(e, l, i)), i;
      }
      function ml(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 5:
            return e.child.stateNode;
          default:
            return e.child.stateNode;
        }
      }
      function ss(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function Ki(e, t) {
        ss(e, t), (e = e.alternate) && ss(e, t);
      }
      function lp() {
        return null;
      }
      var Nc = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
      };
      function Yi(e) {
        this._internalRoot = e;
      }
      jl.prototype.render = Yi.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(_(409));
        Pl(e, t, null, null);
      };
      jl.prototype.unmount = Yi.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          At(function() {
            Pl(null, e, null, null);
          }), t[qe] = null;
        }
      };
      function jl(e) {
        this._internalRoot = e;
      }
      jl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = la();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++) ;
          it.splice(n, 0, e), n === 0 && ia(e);
        }
      };
      function Xi(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
      }
      function Rl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
      }
      function as() {
      }
      function op(e, t, n, r, l) {
        if (l) {
          if (typeof r == "function") {
            var o = r;
            r = function() {
              var a = ml(i);
              o.call(a);
            };
          }
          var i = Tc(t, r, e, 0, null, false, false, "", as);
          return e._reactRootContainer = i, e[qe] = i.current, Jn(e.nodeType === 8 ? e.parentNode : e), At(), i;
        }
        for (; l = e.lastChild; ) e.removeChild(l);
        if (typeof r == "function") {
          var u = r;
          r = function() {
            var a = ml(s);
            u.call(a);
          };
        }
        var s = Qi(e, 0, false, null, null, false, false, "", as);
        return e._reactRootContainer = s, e[qe] = s.current, Jn(e.nodeType === 8 ? e.parentNode : e), At(function() {
          Pl(t, s, n, r);
        }), s;
      }
      function zl(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
          var i = o;
          if (typeof l == "function") {
            var u = l;
            l = function() {
              var s = ml(i);
              u.call(s);
            };
          }
          Pl(t, i, e, l);
        } else i = op(n, t, e, l, r);
        return ml(i);
      }
      na = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = Rn(t.pendingLanes);
              n !== 0 && (mi(t, n | 1), ye(t, K()), !(I & 6) && (pn = K() + 500, xt()));
            }
            break;
          case 13:
            At(function() {
              var r = be(e, 1);
              if (r !== null) {
                var l = ae();
                De(r, e, 1, l);
              }
            }), Ki(e, 1);
        }
      };
      hi = function(e) {
        if (e.tag === 13) {
          var t = be(e, 134217728);
          if (t !== null) {
            var n = ae();
            De(t, e, 134217728, n);
          }
          Ki(e, 134217728);
        }
      };
      ra = function(e) {
        if (e.tag === 13) {
          var t = gt(e), n = be(e, t);
          if (n !== null) {
            var r = ae();
            De(n, e, t, r);
          }
          Ki(e, t);
        }
      };
      la = function() {
        return D;
      };
      oa = function(e, t) {
        var n = D;
        try {
          return D = e, t();
        } finally {
          D = n;
        }
      };
      So = function(e, t, n) {
        switch (t) {
          case "input":
            if (mo(e, n), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var l = Sl(r);
                  if (!l) throw Error(_(90));
                  Ds(r), mo(r, l);
                }
              }
            }
            break;
          case "textarea":
            Fs(e, n);
            break;
          case "select":
            t = n.value, t != null && en(e, !!n.multiple, t, false);
        }
      };
      Gs = Vi;
      Qs = At;
      var ip = {
        usingClientEntryPoint: false,
        Events: [
          ar,
          Kt,
          Sl,
          Ws,
          Hs,
          Vi
        ]
      }, Nn = {
        findFiberByHostInstance: Nt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      }, up = {
        bundleType: Nn.bundleType,
        version: Nn.version,
        rendererPackageName: Nn.rendererPackageName,
        rendererConfig: Nn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: tt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return e = Xs(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Nn.findFiberByHostInstance || lp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!jr.isDisabled && jr.supportsFiber) try {
          yl = jr.inject(up), Be = jr;
        } catch {
        }
      }
      xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
      xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Xi(t)) throw Error(_(200));
        return rp(e, t, null, n);
      };
      xe.createRoot = function(e, t) {
        if (!Xi(e)) throw Error(_(299));
        var n = false, r = "", l = Nc;
        return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Qi(e, 1, false, null, null, n, false, r, l), e[qe] = t.current, Jn(e.nodeType === 8 ? e.parentNode : e), new Yi(t);
      };
      xe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
        return e = Xs(t), e = e === null ? null : e.stateNode, e;
      };
      xe.flushSync = function(e) {
        return At(e);
      };
      xe.hydrate = function(e, t, n) {
        if (!Rl(t)) throw Error(_(200));
        return zl(null, e, t, true, n);
      };
      xe.hydrateRoot = function(e, t, n) {
        if (!Xi(e)) throw Error(_(405));
        var r = n != null && n.hydratedSources || null, l = false, o = "", i = Nc;
        if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Tc(t, null, e, 1, n ?? null, l, false, o, i), e[qe] = t.current, Jn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
          n,
          l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
        return new jl(t);
      };
      xe.render = function(e, t, n) {
        if (!Rl(t)) throw Error(_(200));
        return zl(null, e, t, false, n);
      };
      xe.unmountComponentAtNode = function(e) {
        if (!Rl(e)) throw Error(_(40));
        return e._reactRootContainer ? (At(function() {
          zl(null, null, e, false, function() {
            e._reactRootContainer = null, e[qe] = null;
          });
        }), true) : false;
      };
      xe.unstable_batchedUpdates = Vi;
      xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Rl(n)) throw Error(_(200));
        if (e == null || e._reactInternals === void 0) throw Error(_(38));
        return zl(e, t, n, false, r);
      };
      xe.version = "18.3.1-next-f1338f8080-20240426";
      function Pc() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc);
        } catch (e) {
          console.error(e);
        }
      }
      Pc(), Ps.exports = xe;
      var sp = Ps.exports, jc, cs = sp;
      jc = cs.createRoot, cs.hydrateRoot;
      const Rc = M.createContext(null), ap = "";
      function cp({ children: e }) {
        const [t, n] = M.useState(null), [r, l] = M.useState(null), [o, i] = M.useState(true), [u, s] = M.useState(null), a = M.useCallback(async (w) => {
        }, []);
        M.useEffect(() => {
          {
            i(false);
            return;
          }
        }, []), M.useCallback((w) => {
          const S = w.credential;
          try {
            const R = JSON.parse(atob(S.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))), f = {
              email: R.email,
              name: R.name || R.email,
              picture: R.picture || null,
              idToken: S
            };
            n(f), s(null), localStorage.setItem("converter_user", JSON.stringify({
              email: f.email,
              name: f.name,
              picture: f.picture
            })), a(S);
          } catch {
            s("Failed to parse sign-in response");
          }
        }, [
          a
        ]);
        const d = M.useCallback(() => {
          {
            s("Google Sign-In not configured");
            return;
          }
        }, []), p = M.useCallback(() => {
          var _a2, _b;
          ((_b = (_a2 = window.google) == null ? void 0 : _a2.accounts) == null ? void 0 : _b.id) && window.google.accounts.id.disableAutoSelect(), n(null), l(null), localStorage.removeItem("converter_user");
        }, []), m = M.useCallback((w) => {
          w && l(w);
        }, []), y = {
          user: t,
          usage: r,
          loading: o,
          error: u,
          signIn: d,
          signOut: p,
          fetchUsage: a,
          updateUsageFromResponse: m,
          workerUrl: ap
        };
        return g.jsx(Rc.Provider, {
          value: y,
          children: e
        });
      }
      function Zi() {
        const e = M.useContext(Rc);
        if (!e) throw new Error("useAuth must be used within AuthProvider");
        return e;
      }
      function fp({ onImageSelect: e, imageUrl: t }) {
        const n = M.useRef(null), [r, l] = M.useState(false), o = M.useCallback((a) => {
          a && a.type.startsWith("image/") && e(a);
        }, [
          e
        ]), i = M.useCallback((a) => {
          a.preventDefault(), l(false);
          const d = a.dataTransfer.files[0];
          o(d);
        }, [
          o
        ]), u = M.useCallback((a) => {
          a.preventDefault(), l(true);
        }, []), s = M.useCallback(() => {
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
      const dp = "/Converter/image-to-component/dist/assets/vtracer_webapp_bg-Bj9ds5iO.wasm", pp = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const r = t.replace(/^data:.*?base64,/, "");
          let l;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") l = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const o = atob(r);
            l = new Uint8Array(o.length);
            for (let i = 0; i < o.length; i++) l[i] = o.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(l, e);
        } else {
          const r = await fetch(t), l = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
          else {
            const o = await r.arrayBuffer();
            n = await WebAssembly.instantiate(o, e);
          }
        }
        return n.instance.exports;
      };
      let te;
      function mp(e) {
        te = e;
      }
      const Ke = new Array(128).fill(void 0);
      Ke.push(void 0, null, true, false);
      function P(e) {
        return Ke[e];
      }
      let Bn = Ke.length;
      function hp(e) {
        e < 132 || (Ke[e] = Bn, Bn = e);
      }
      function gp(e) {
        const t = P(e);
        return hp(e), t;
      }
      const yp = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let zc = new yp("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      zc.decode();
      let Rr = null;
      function Vn() {
        return (Rr === null || Rr.byteLength === 0) && (Rr = new Uint8Array(te.memory.buffer)), Rr;
      }
      function We(e, t) {
        return e = e >>> 0, zc.decode(Vn().subarray(e, e + t));
      }
      function de(e) {
        Bn === Ke.length && Ke.push(Ke.length + 1);
        const t = Bn;
        return Bn = Ke[t], Ke[t] = e, t;
      }
      function ei(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
          const l = e.description;
          return l == null ? "Symbol" : `Symbol(${l})`;
        }
        if (t == "function") {
          const l = e.name;
          return typeof l == "string" && l.length > 0 ? `Function(${l})` : "Function";
        }
        if (Array.isArray(e)) {
          const l = e.length;
          let o = "[";
          l > 0 && (o += ei(e[0]));
          for (let i = 1; i < l; i++) o += ", " + ei(e[i]);
          return o += "]", o;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch {
          return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
      }
      let Ft = 0;
      const vp = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let Hr = new vp("utf-8");
      const wp = typeof Hr.encodeInto == "function" ? function(e, t) {
        return Hr.encodeInto(e, t);
      } : function(e, t) {
        const n = Hr.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function Ji(e, t, n) {
        if (n === void 0) {
          const u = Hr.encode(e), s = t(u.length, 1) >>> 0;
          return Vn().subarray(s, s + u.length).set(u), Ft = u.length, s;
        }
        let r = e.length, l = t(r, 1) >>> 0;
        const o = Vn();
        let i = 0;
        for (; i < r; i++) {
          const u = e.charCodeAt(i);
          if (u > 127) break;
          o[l + i] = u;
        }
        if (i !== r) {
          i !== 0 && (e = e.slice(i)), l = n(l, r, r = i + e.length * 3, 1) >>> 0;
          const u = Vn().subarray(l + i, l + r), s = wp(e, u);
          i += s.written;
        }
        return Ft = i, l;
      }
      let zr = null;
      function mn() {
        return (zr === null || zr.byteLength === 0) && (zr = new Int32Array(te.memory.buffer)), zr;
      }
      function He(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          te.__wbindgen_exn_store(de(n));
        }
      }
      function qi(e) {
        return e == null;
      }
      function _p(e, t) {
        const n = t(e.length * 1, 1) >>> 0;
        return Vn().set(e, n / 1), Ft = e.length, n;
      }
      class hl {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(hl.prototype);
          return n.__wbg_ptr = t, n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          te.__wbg_colorimageconverter_free(t);
        }
        static new_with_string(t) {
          const n = Ji(t, te.__wbindgen_malloc, te.__wbindgen_realloc), r = Ft, l = te.colorimageconverter_new_with_string(n, r);
          return hl.__wrap(l);
        }
        init() {
          te.colorimageconverter_init(this.__wbg_ptr);
        }
        tick() {
          return te.colorimageconverter_tick(this.__wbg_ptr) !== 0;
        }
        progress() {
          return te.colorimageconverter_progress(this.__wbg_ptr);
        }
      }
      function Sp(e) {
        gp(e);
      }
      function xp(e, t) {
        const n = We(e, t);
        return de(n);
      }
      function kp() {
        const e = new Error();
        return de(e);
      }
      function Ep(e, t) {
        const n = P(t).stack, r = Ji(n, te.__wbindgen_malloc, te.__wbindgen_realloc), l = Ft;
        mn()[e / 4 + 1] = l, mn()[e / 4 + 0] = r;
      }
      function Cp(e, t) {
        let n, r;
        try {
          n = e, r = t, console.error(We(e, t));
        } finally {
          te.__wbindgen_free(n, r, 1);
        }
      }
      function Tp() {
        return He(function(e, t, n, r, l) {
          const o = P(e).createElementNS(t === 0 ? void 0 : We(t, n), We(r, l));
          return de(o);
        }, arguments);
      }
      function Np(e, t, n) {
        const r = P(e).getElementById(We(t, n));
        return qi(r) ? 0 : de(r);
      }
      function Pp(e) {
        let t;
        try {
          t = P(e) instanceof Window;
        } catch {
          t = false;
        }
        return t;
      }
      function jp(e) {
        const t = P(e).document;
        return qi(t) ? 0 : de(t);
      }
      function Rp() {
        return He(function(e, t, n, r, l) {
          P(e).setAttribute(We(t, n), We(r, l));
        }, arguments);
      }
      function zp() {
        return He(function(e, t) {
          P(e).prepend(P(t));
        }, arguments);
      }
      function Op(e) {
        let t;
        try {
          t = P(e) instanceof CanvasRenderingContext2D;
        } catch {
          t = false;
        }
        return t;
      }
      function Lp() {
        return He(function(e, t, n, r, l) {
          const o = P(e).getImageData(t, n, r, l);
          return de(o);
        }, arguments);
      }
      function Mp(e, t, n, r) {
        console.debug(P(e), P(t), P(n), P(r));
      }
      function Ip(e, t, n, r) {
        console.error(P(e), P(t), P(n), P(r));
      }
      function Dp(e, t, n, r) {
        console.info(P(e), P(t), P(n), P(r));
      }
      function Ap(e) {
        console.log(P(e));
      }
      function Fp(e, t, n, r) {
        console.log(P(e), P(t), P(n), P(r));
      }
      function Up(e, t, n, r) {
        console.warn(P(e), P(t), P(n), P(r));
      }
      function $p(e, t) {
        const n = P(t).data, r = _p(n, te.__wbindgen_malloc), l = Ft;
        mn()[e / 4 + 1] = l, mn()[e / 4 + 0] = r;
      }
      function Bp(e) {
        let t;
        try {
          t = P(e) instanceof HTMLCanvasElement;
        } catch {
          t = false;
        }
        return t;
      }
      function Vp(e) {
        return P(e).width;
      }
      function Wp(e) {
        return P(e).height;
      }
      function Hp() {
        return He(function(e, t, n) {
          const r = P(e).getContext(We(t, n));
          return qi(r) ? 0 : de(r);
        }, arguments);
      }
      function Gp(e, t) {
        const n = new Function(We(e, t));
        return de(n);
      }
      function Qp() {
        return He(function(e, t) {
          const n = P(e).call(P(t));
          return de(n);
        }, arguments);
      }
      function Kp(e) {
        const t = P(e);
        return de(t);
      }
      function Yp() {
        return He(function() {
          const e = self.self;
          return de(e);
        }, arguments);
      }
      function Xp() {
        return He(function() {
          const e = window.window;
          return de(e);
        }, arguments);
      }
      function Zp() {
        return He(function() {
          const e = globalThis.globalThis;
          return de(e);
        }, arguments);
      }
      function Jp() {
        return He(function() {
          const e = global.global;
          return de(e);
        }, arguments);
      }
      function qp(e) {
        return P(e) === void 0;
      }
      function bp(e, t) {
        const n = ei(P(t)), r = Ji(n, te.__wbindgen_malloc, te.__wbindgen_realloc), l = Ft;
        mn()[e / 4 + 1] = l, mn()[e / 4 + 0] = r;
      }
      function em(e, t) {
        throw new Error(We(e, t));
      }
      URL = globalThis.URL;
      const tm = await pp({
        "./vtracer_webapp_bg.js": {
          __wbindgen_object_drop_ref: Sp,
          __wbindgen_string_new: xp,
          __wbg_new_abda76e883ba8a5f: kp,
          __wbg_stack_658279fe44541cf6: Ep,
          __wbg_error_f851667af71bcfc6: Cp,
          __wbg_createElementNS_6a08d8f33e767e18: Tp,
          __wbg_getElementById_328f8c4a5bb51ba8: Np,
          __wbg_instanceof_Window_cde2416cf5126a72: Pp,
          __wbg_document_183cf1eecfdbffee: jp,
          __wbg_setAttribute_aebcae2169f2f869: Rp,
          __wbg_prepend_78bb3ef0d1f21108: zp,
          __wbg_instanceof_CanvasRenderingContext2d_e264df6db9ec5a3d: Op,
          __wbg_getImageData_f55fb8cd70493ea6: Lp,
          __wbg_debug_8f9a97dc395d342f: Mp,
          __wbg_error_94a25ece8eeb7bca: Ip,
          __wbg_info_1d035e3d63b89260: Dp,
          __wbg_log_7811587c4c6d2844: Ap,
          __wbg_log_00bb83da94eb9ca8: Fp,
          __wbg_warn_fab4b297e5c436a0: Up,
          __wbg_data_f2cf019dc3a2c762: $p,
          __wbg_instanceof_HtmlCanvasElement_838d8b92f3c55028: Bp,
          __wbg_width_b813b325b323728a: Vp,
          __wbg_height_646e862bac72cff1: Wp,
          __wbg_getContext_a29bad1d160bec3d: Hp,
          __wbg_newnoargs_ccdcae30fd002262: Gp,
          __wbg_call_669127b9d730c650: Qp,
          __wbindgen_object_clone_ref: Kp,
          __wbg_self_3fad056edded10bd: Yp,
          __wbg_window_a4f46c98a61d4089: Xp,
          __wbg_globalThis_17eff828815f7d84: Zp,
          __wbg_global_46f939f6541643c5: Jp,
          __wbindgen_is_undefined: qp,
          __wbindgen_debug_string: bp,
          __wbindgen_throw: em
        }
      }, dp), { memory: nm, __wbg_binaryimageconverter_free: rm, binaryimageconverter_new_with_string: lm, binaryimageconverter_init: om, binaryimageconverter_tick: im, binaryimageconverter_progress: um, main: sm, __wbg_colorimageconverter_free: am, colorimageconverter_new_with_string: cm, colorimageconverter_init: fm, colorimageconverter_tick: dm, colorimageconverter_progress: pm, __wbindgen_malloc: mm, __wbindgen_realloc: hm, __wbindgen_free: gm, __wbindgen_exn_store: ym, __wbindgen_start: Oc } = tm, vm = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_binaryimageconverter_free: rm,
        __wbg_colorimageconverter_free: am,
        __wbindgen_exn_store: ym,
        __wbindgen_free: gm,
        __wbindgen_malloc: mm,
        __wbindgen_realloc: hm,
        __wbindgen_start: Oc,
        binaryimageconverter_init: om,
        binaryimageconverter_new_with_string: lm,
        binaryimageconverter_progress: um,
        binaryimageconverter_tick: im,
        colorimageconverter_init: fm,
        colorimageconverter_new_with_string: cm,
        colorimageconverter_progress: pm,
        colorimageconverter_tick: dm,
        main: sm,
        memory: nm
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      mp(vm);
      Oc();
      const Rt = {
        photograph: {
          label: "Equipment Photo",
          description: "High-res photo of real equipment",
          mode: "spline",
          filterSpeckle: 4,
          colorPrecision: 6,
          layerDifference: 16,
          cornerThreshold: 60,
          lengthThreshold: 4,
          maxIterations: 10,
          spliceThreshold: 45,
          pathPrecision: 3
        },
        diagram: {
          label: "Technical Diagram",
          description: "Clean illustration or P&ID symbol",
          mode: "spline",
          filterSpeckle: 2,
          colorPrecision: 4,
          layerDifference: 24,
          cornerThreshold: 90,
          lengthThreshold: 3,
          maxIterations: 5,
          spliceThreshold: 60,
          pathPrecision: 2
        },
        highContrast: {
          label: "High Contrast / Icon",
          description: "Simple shapes, few colors, crisp edges",
          mode: "polygon",
          filterSpeckle: 8,
          colorPrecision: 3,
          layerDifference: 32,
          cornerThreshold: 120,
          lengthThreshold: 5,
          maxIterations: 4,
          spliceThreshold: 90,
          pathPrecision: 2
        }
      };
      async function wm(e, t = Rt.photograph) {
        const n = await createImageBitmap(e), r = "__vtracer_canvas_" + Date.now(), l = "__vtracer_svg_" + Date.now(), o = document.createElement("canvas");
        o.id = r, o.width = n.width, o.height = n.height, o.style.position = "absolute", o.style.left = "-9999px", o.style.top = "-9999px", document.body.appendChild(o), o.getContext("2d").drawImage(n, 0, 0);
        const u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        u.id = l, u.style.position = "absolute", u.style.left = "-9999px", u.style.top = "-9999px", document.body.appendChild(u);
        try {
          const s = JSON.stringify({
            canvas_id: r,
            svg_id: l,
            mode: t.mode || "spline",
            clustering_mode: "color",
            hierarchical: "stacked",
            filter_speckle: (t.filterSpeckle ?? 4) * (t.filterSpeckle ?? 4),
            color_precision: 8 - (t.colorPrecision ?? 6),
            layer_difference: t.layerDifference ?? 16,
            corner_threshold: (t.cornerThreshold ?? 60) * Math.PI / 180,
            splice_threshold: (t.spliceThreshold ?? 45) * Math.PI / 180,
            length_threshold: t.lengthThreshold ?? 4,
            max_iterations: t.maxIterations ?? 10,
            path_precision: t.pathPrecision ?? 3
          }), a = hl.new_with_string(s);
          a.init();
          let d = false;
          for (; !d; ) {
            const m = performance.now();
            for (; !(d = a.tick()) && performance.now() - m < 25; ) ;
            d || await new Promise((y) => setTimeout(y, 1));
          }
          const p = new XMLSerializer().serializeToString(u);
          return a.free(), console.log("\u2705 VTracer color trace complete"), p;
        } finally {
          document.body.removeChild(o), document.body.removeChild(u);
        }
      }
      async function _m(e) {
        return new Promise((t, n) => {
          const r = new FileReader();
          r.onload = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
        });
      }
      async function Sm(e) {
        return (await _m(e)).split(",")[1];
      }
      const xm = Object.keys(Rt), km = {
        quick: {
          label: "Quick Trace",
          description: "Fast geometry extraction \u2014 outlines, curves, and colors only"
        },
        smart: {
          label: "Smart Trace",
          description: "Geometry + AI part identification, detail cleanup, and refinement"
        }
      };
      function Em({ pipelineMode: e, onModeChange: t, preset: n, onPresetChange: r, onSettingsChange: l, apiKey: o, onApiKeyChange: i, isAuthenticated: u }) {
        const [s, a] = M.useState(false), [d, p] = M.useState(Rt[n]);
        M.useEffect(() => {
          p(Rt[n]), l(null);
        }, [
          n
        ]);
        const m = (y, w) => {
          const S = {
            ...d,
            [y]: w
          };
          p(S), l(S);
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
              children: Object.entries(km).map(([y, w]) => g.jsxs("button", {
                className: `preset-btn ${e === y ? "active" : ""}`,
                onClick: () => t(y),
                children: [
                  g.jsx("span", {
                    className: "preset-label",
                    children: w.label
                  }),
                  g.jsx("span", {
                    className: "preset-desc",
                    children: w.description
                  })
                ]
              }, y))
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
                        onChange: (y) => i(y.target.value),
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
              children: xm.map((y) => g.jsxs("button", {
                className: `preset-btn ${n === y ? "active" : ""}`,
                onClick: () => r(y),
                children: [
                  g.jsx("span", {
                    className: "preset-label",
                    children: Rt[y].label
                  }),
                  g.jsx("span", {
                    className: "preset-desc",
                    children: Rt[y].description
                  })
                ]
              }, y))
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
                g.jsx(rt, {
                  label: "Filter Speckle",
                  value: d.filterSpeckle,
                  min: 0,
                  max: 20,
                  step: 1,
                  onChange: (y) => m("filterSpeckle", y)
                }),
                g.jsx(rt, {
                  label: "Color Precision",
                  value: d.colorPrecision,
                  min: 1,
                  max: 10,
                  step: 1,
                  onChange: (y) => m("colorPrecision", y)
                }),
                g.jsx(rt, {
                  label: "Layer Difference",
                  value: d.layerDifference,
                  min: 1,
                  max: 64,
                  step: 1,
                  onChange: (y) => m("layerDifference", y)
                }),
                g.jsx(rt, {
                  label: "Corner Threshold",
                  value: d.cornerThreshold,
                  min: 0,
                  max: 180,
                  step: 5,
                  onChange: (y) => m("cornerThreshold", y)
                }),
                g.jsx(rt, {
                  label: "Length Threshold",
                  value: d.lengthThreshold,
                  min: 1,
                  max: 10,
                  step: 0.5,
                  onChange: (y) => m("lengthThreshold", y)
                }),
                g.jsx(rt, {
                  label: "Max Iterations",
                  value: d.maxIterations,
                  min: 1,
                  max: 20,
                  step: 1,
                  onChange: (y) => m("maxIterations", y)
                }),
                g.jsx(rt, {
                  label: "Splice Threshold",
                  value: d.spliceThreshold,
                  min: 0,
                  max: 180,
                  step: 5,
                  onChange: (y) => m("spliceThreshold", y)
                }),
                g.jsx(rt, {
                  label: "Path Precision",
                  value: d.pathPrecision,
                  min: 1,
                  max: 8,
                  step: 1,
                  onChange: (y) => m("pathPrecision", y)
                })
              ]
            })
          ]
        });
      }
      function rt({ label: e, value: t, min: n, max: r, step: l, onChange: o }) {
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
      function Cm({ imageUrl: e, svgString: t, manifest: n }) {
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
      const Tm = "https://api.anthropic.com/v1/messages", bi = "claude-sonnet-4-20250514", Nm = "";
      async function Pm(e, t, n = null, r = null) {
        const s = (await eu({
          model: bi,
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
      async function jm(e, t, n, r = null, l = null) {
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
        let s = (await eu({
          model: bi,
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
      async function Rm(e, t, n, r, l, o, i = null, u = null) {
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
        let p = (await eu({
          model: bi,
          max_tokens: 2048,
          messages: [
            {
              role: "user",
              content: s
            }
          ]
        }, i, 3, u)).content[0].text.trim();
        return p = p.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/i, "").trim(), p;
      }
      let ti = null;
      function fs(e) {
        ti = e;
      }
      async function eu(e, t, n = 3, r = null) {
        var _a2;
        for (let l = 0; l <= n; l++) try {
          let o;
          if (r && Nm || (t ? o = await fetch(Tm, {
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
          return i._usage && ti && (ti(i._usage), delete i._usage), i;
        } catch (o) {
          if (l === n || o.message.includes("Daily conversion limit")) throw o;
          const i = Math.pow(2, l + 1) * 1e3;
          console.log(`\u23F3 Request failed, retrying in ${i / 1e3}s...`), await new Promise((u) => setTimeout(u, i));
        }
      }
      function zm(e) {
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
          const d = a.cloneNode(true);
          i.appendChild(d);
          let p = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          };
          try {
            const m = d.getBBox();
            p = {
              x: m.x,
              y: m.y,
              w: m.width,
              h: m.height
            };
          } catch {
          }
          i.removeChild(d), s.push({
            element: a.outerHTML,
            d: a.getAttribute("d") || "",
            fill: a.getAttribute("fill") || "none",
            stroke: a.getAttribute("stroke") || "none",
            bbox: p
          });
        }
        return document.body.removeChild(i), {
          paths: s,
          viewBox: o,
          width: o.w,
          height: o.h
        };
      }
      function Om(e, t) {
        return {
          x: t.x + e.x / 100 * t.w,
          y: t.y + e.y / 100 * t.h,
          w: e.w / 100 * t.w,
          h: e.h / 100 * t.h
        };
      }
      function Lm(e, t) {
        const n = e.x + e.w, r = e.y + e.h, l = t.x + t.w, o = t.y + t.h, i = Math.max(e.x, t.x), u = Math.max(e.y, t.y), s = Math.min(n, l), a = Math.min(r, o);
        if (s <= i || a <= u) return 0;
        const d = (s - i) * (a - u), p = e.w * e.h, m = t.w * t.h, y = p + m - d;
        return y === 0 ? 0 : d / y;
      }
      function Mm(e, t) {
        const n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), l = Math.min(e.x + e.w, t.x + t.w), o = Math.min(e.y + e.h, t.y + t.h);
        if (l <= n || o <= r) return 0;
        const i = (l - n) * (o - r), u = e.w * e.h;
        return u === 0 ? 0 : i / u;
      }
      function Im(e, t, n = 0.3, r = 0.6) {
        const l = [];
        for (let o = 0; o < e.length; o++) {
          const i = Lm(e[o].bbox, t), u = Mm(e[o].bbox, t);
          (i >= n || u >= r) && l.push(o);
        }
        return l;
      }
      function Dm(e, t, n = 5e-3) {
        const l = t.w * t.h * n, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        o.setAttribute("viewBox", `${t.x} ${t.y} ${t.w} ${t.h}`), o.style.position = "absolute", o.style.left = "-9999px", o.style.top = "-9999px", o.style.width = t.w + "px", o.style.height = t.h + "px", document.body.appendChild(o);
        const i = new DOMParser(), u = [];
        for (const s of e) try {
          const d = i.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${s}</svg>`, "image/svg+xml").querySelector("svg > *");
          if (!d) {
            u.push(s);
            continue;
          }
          const p = o.ownerDocument.importNode(d, true);
          o.appendChild(p);
          try {
            const m = p.getBBox();
            m.width * m.height >= l && u.push(s);
          } catch {
            u.push(s);
          }
          o.removeChild(p);
        } catch {
          u.push(s);
        }
        return document.body.removeChild(o), u;
      }
      function Am(e, t, n = {}) {
        const { paths: r, viewBox: l } = zm(e), o = /* @__PURE__ */ new Set(), i = {};
        for (const d of t) {
          const p = Om(d.bbox, l), y = Im(r, p).filter((w) => !o.has(w));
          if (y.forEach((w) => o.add(w)), d.detail_quality === "low" && n[d.name]) i[d.name] = {
            svg: n[d.name],
            type: d.type,
            interactive: d.interactive,
            dynamic: d.dynamic,
            replaced: true
          };
          else {
            const w = y.map((S) => r[S].element);
            i[d.name] = {
              svg: ds(w, d.name, d.type, d.interactive, d.dynamic),
              type: d.type,
              interactive: d.interactive,
              dynamic: d.dynamic,
              replaced: false
            };
          }
        }
        const u = r.filter((d, p) => !o.has(p)).map((d) => d.element), s = Dm(u, l);
        return i.background = {
          svg: ds(s, "background", "structural", false, false),
          type: "structural",
          interactive: false,
          dynamic: false,
          replaced: false
        }, {
          svg: Um(i, l),
          groups: i
        };
      }
      function Fm(e, t, n) {
        const r = new DOMParser(), l = r.parseFromString(e, "image/svg+xml"), o = l.getElementById(t);
        if (o) {
          const s = r.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${n}</svg>`, "image/svg+xml").querySelector("svg > *");
          s && (s.getAttribute("id") || s.setAttribute("id", t), o.parentNode.replaceChild(l.importNode(s, true), o));
        }
        return new XMLSerializer().serializeToString(l.documentElement);
      }
      function ds(e, t, n, r, l) {
        const o = [
          `id="${t}"`,
          `class="${n}"`
        ];
        return r && o.push('data-interactive="true"'), l && o.push('data-dynamic="true"'), `<g ${o.join(" ")}>
  ${e.join(`
  `)}
</g>`;
      }
      function Um(e, t) {
        const n = Object.values(e).map((r) => r.svg).join(`
`);
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t.x} ${t.y} ${t.w} ${t.h}">
${n}
</svg>`;
      }
      function $m(e, t, n) {
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
      function Bm(e, t) {
        const l = new DOMParser().parseFromString(e, "image/svg+xml").getElementById(t);
        return l ? l.outerHTML : "";
      }
      async function Vm(e, t, n, r, l, o = null, i = null) {
        const u = Bm(n, r.name), s = r.bbox.x + r.bbox.w / 2, a = r.bbox.y + r.bbox.h / 2, d = await Rm(e, t, u, s, a, l, o, i);
        return Fm(n, r.name, d);
      }
      function Wm({ imageUrl: e, svgString: t, manifest: n, selectedPart: r, onPartSelect: l }) {
        const [o, i] = M.useState(0.7), u = M.useRef(null), s = M.useCallback((d) => {
          if (!n || n.length === 0) return;
          const p = u.current;
          if (!p) return;
          const m = p.getBoundingClientRect(), y = (d.clientX - m.left) / m.width * 100, w = (d.clientY - m.top) / m.height * 100, S = $m(n, y, w);
          S && l(S);
        }, [
          n,
          l
        ]), a = M.useCallback(() => {
          if (!t || !r) return t;
          const p = new DOMParser().parseFromString(t, "image/svg+xml");
          if (p.getElementById(r.name)) {
            const w = p.querySelector("svg"), S = w.getAttribute("viewBox");
            if (S) {
              const [, , R, f] = S.split(/[\s,]+/).map(Number), c = r.bbox.x / 100 * R, h = r.bbox.y / 100 * f, v = r.bbox.w / 100 * R, x = r.bbox.h / 100 * f, k = p.createElementNS("http://www.w3.org/2000/svg", "rect");
              k.setAttribute("x", c), k.setAttribute("y", h), k.setAttribute("width", v), k.setAttribute("height", x), k.setAttribute("fill", "none"), k.setAttribute("stroke", "#f5a623"), k.setAttribute("stroke-width", Math.max(R, f) * 5e-3), k.setAttribute("stroke-dasharray", `${Math.max(R, f) * 0.01}`), k.setAttribute("opacity", "0.9"), w.appendChild(k);
            }
          }
          return new XMLSerializer().serializeToString(p.documentElement);
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
                  onChange: (d) => i(parseFloat(d.target.value))
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
      function Hm({ manifest: e, groups: t, selectedPart: n, onPartSelect: r }) {
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
      function Gm({ part: e, onRefine: t, isRefining: n }) {
        const [r, l] = M.useState(""), o = () => {
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
      function Qm({ componentCode: e, componentName: t, onNameChange: n, svgString: r }) {
        const [l, o] = M.useState(false), i = async () => {
          try {
            await navigator.clipboard.writeText(e), o(true), setTimeout(() => o(false), 2e3);
          } catch {
            const a = document.createElement("textarea");
            a.value = e, document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a), o(true), setTimeout(() => o(false), 2e3);
          }
        }, u = () => {
          const a = t ? t.replace(/([A-Z])/g, (d, p, m) => (m ? "-" : "") + p.toLowerCase()) + ".jsx" : "component.jsx";
          ps(e, a, "text/javascript");
        }, s = () => {
          if (r) {
            const a = t ? t.replace(/([A-Z])/g, (d, p, m) => (m ? "-" : "") + p.toLowerCase()) + ".svg" : "component.svg";
            ps(r, a, "image/svg+xml");
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
      function ps(e, t, n) {
        const r = new Blob([
          e
        ], {
          type: n
        }), l = URL.createObjectURL(r), o = document.createElement("a");
        o.href = l, o.download = t, o.click(), URL.revokeObjectURL(l);
      }
      function Km() {
        const { user: e, usage: t, loading: n, signIn: r, signOut: l, workerUrl: o } = Zi();
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
                !t.unlimited && t.remaining === 0 && g.jsx(Ym, {})
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
      function Ym() {
        const { user: e, workerUrl: t } = Zi(), [n, r] = Ts.useState(false), l = async () => {
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
      function Xm(e, t, n, r) {
        const l = t.filter((d) => d.dynamic), o = t.filter((d) => d.interactive), i = [
          "x = 0",
          "y = 0",
          "scale = 1"
        ];
        l.forEach((d) => {
          i.push(`${Zm(d.name)}_value = ""`);
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
  // Dynamic parts: ${l.map((d) => d.name).join(", ")}`, s += `
  // Use the _value props to update these elements dynamically`);
        const a = o.length ? 'onClick={handleClick} style={{ cursor: "pointer" }}' : "";
        return `import React from "react";

/**
 * ${n} \u2014 auto-generated SVG component
 *
 * Parts: ${t.map((d) => d.name).join(", ")}
 * Interactive: ${o.map((d) => d.name).join(", ") || "none"}
 * Dynamic: ${l.map((d) => d.name).join(", ") || "none"}
 */
export function ${n}({
  ${i.join(`,
  `)},
}) {${u}${s}

  return (
    <g transform={\`translate(\${x}, \${y}) scale(\${scale})\`}>
      <svg viewBox="${r}" ${a}>
        ${Jm(e, 8)}
      </svg>
    </g>
  );
}

export default ${n};
`;
      }
      function Zm(e) {
        return e.replace(/[^a-zA-Z0-9_]/g, "_");
      }
      function Jm(e, t) {
        const n = " ".repeat(t);
        return e.split(`
`).map((r, l) => l === 0 ? r : n + r).join(`
`);
      }
      function ms(e, t, n) {
        const r = qm(e), l = eh(r), o = bm(e);
        return Xm(l, t, n, o);
      }
      function qm(e) {
        const t = e.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
        return t ? t[1].trim() : e;
      }
      function bm(e) {
        const t = e.match(/viewBox="([^"]+)"/);
        return t ? t[1] : "0 0 100 100";
      }
      function eh(e) {
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
      const hs = [
        "upload",
        "tracing",
        "analyzing",
        "review",
        "export"
      ], Lc = {
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
      function th(e, t) {
        switch (t.type) {
          case "SET_IMAGE":
            return {
              ...e,
              imageFile: t.file,
              imageUrl: URL.createObjectURL(t.file),
              mediaType: t.file.type,
              componentName: nh(t.file.name.replace(/\.[^.]+$/, "")),
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
              ...Lc,
              apiKey: e.apiKey
            };
          default:
            return e;
        }
      }
      function nh(e) {
        return e.replace(/[^a-zA-Z0-9]+/g, " ").split(" ").filter(Boolean).map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join("");
      }
      function rh() {
        const [e, t] = M.useReducer(th, Lc), { user: n, updateUsageFromResponse: r, workerUrl: l } = Zi();
        M.useEffect(() => (fs(r), () => fs(null)), [
          r
        ]);
        const o = (n == null ? void 0 : n.idToken) || null, i = !!(o && l) || !!e.apiKey, u = M.useCallback(async () => {
          if (e.imageFile) try {
            const p = e.pipelineMode === "smart" && i;
            t({
              type: "SET_STAGE",
              stage: "tracing"
            }), t({
              type: "SET_PROGRESS",
              progress: "Extracting geometry..."
            });
            const m = e.customSettings || Rt[e.preset], y = await wm(e.imageFile, m);
            t({
              type: "SET_VTRACER_SVG",
              svg: y
            }), console.log("\u2705 Geometry extraction complete");
            const w = await Sm(e.imageFile);
            if (t({
              type: "SET_IMAGE_BASE64",
              base64: w
            }), !p) {
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
                svg: y,
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
            const S = await Pm(w, e.mediaType, e.apiKey, o);
            t({
              type: "SET_MANIFEST",
              manifest: S
            }), console.log(`\u2705 Identified ${S.length} parts`);
            const R = S.filter((v) => v.detail_quality === "low"), f = {};
            for (let v = 0; v < R.length; v++) {
              const x = R[v];
              t({
                type: "SET_PROGRESS",
                progress: `Improving detail ${v + 1}/${R.length}: ${x.name.replace(/_/g, " ")}...`
              });
              try {
                f[x.name] = await jm(w, e.mediaType, x, e.apiKey, o), console.log(`\u2705 Improved ${x.name}`);
              } catch (k) {
                console.log(`\u274C Failed to improve ${x.name}: ${k.message}`);
              }
            }
            t({
              type: "SET_REPLACEMENTS",
              replacements: f
            }), t({
              type: "SET_PROGRESS",
              progress: "Assembling component..."
            });
            const { svg: c, groups: h } = Am(y, S, f);
            t({
              type: "SET_MERGED",
              svg: c,
              groups: h
            }), console.log("\u2705 Assembly complete"), t({
              type: "SET_STAGE",
              stage: "review"
            }), t({
              type: "SET_PROGRESS",
              progress: ""
            });
          } catch (p) {
            console.log("\u274C Pipeline error:", p.message), t({
              type: "SET_ERROR",
              error: p.message
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
        ]), s = M.useCallback(async (p, m) => {
          if (!(!i || !e.mergedSvg)) {
            t({
              type: "SET_PROGRESS",
              progress: `Refining ${p.name.replace(/_/g, " ")}...`
            });
            try {
              const y = await Vm(e.imageBase64, e.mediaType, e.mergedSvg, p, m, e.apiKey, o);
              t({
                type: "UPDATE_MERGED_SVG",
                svg: y
              }), t({
                type: "SET_PROGRESS",
                progress: ""
              }), console.log(`\u2705 Refined ${p.name}`);
            } catch (y) {
              console.log(`\u274C Refinement failed: ${y.message}`), t({
                type: "SET_ERROR",
                error: y.message
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
        ]), a = M.useCallback(() => {
          t({
            type: "SET_STAGE",
            stage: "export"
          });
          const p = ms(e.mergedSvg || e.vtracerSvg, e.manifest || [], e.componentName || "GeneratedComponent");
          t({
            type: "SET_COMPONENT_CODE",
            code: p
          });
        }, [
          e.mergedSvg,
          e.vtracerSvg,
          e.manifest,
          e.componentName
        ]), d = hs.indexOf(e.stage);
        return g.jsxs("div", {
          className: "app-container",
          children: [
            g.jsx(Km, {}),
            g.jsx("h1", {
              children: "Image-to-Component Studio"
            }),
            g.jsx("p", {
              className: "subtitle",
              children: "Convert photographs into interactive React SVG components"
            }),
            g.jsx("div", {
              className: "stage-bar",
              children: hs.map((p, m) => g.jsxs(Ts.Fragment, {
                children: [
                  m > 0 && g.jsx("span", {
                    className: "stage-arrow",
                    children: "\u2192"
                  }),
                  g.jsxs("div", {
                    className: `stage-step ${m === d ? "active" : ""} ${m < d ? "completed" : ""}`,
                    children: [
                      m < d ? "\u2713 " : "",
                      p.charAt(0).toUpperCase() + p.slice(1)
                    ]
                  })
                ]
              }, p))
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
                  children: g.jsx(fp, {
                    onImageSelect: (p) => t({
                      type: "SET_IMAGE",
                      file: p
                    }),
                    imageUrl: e.imageUrl
                  })
                }),
                g.jsx("div", {
                  className: "card",
                  children: g.jsx(Em, {
                    pipelineMode: e.pipelineMode,
                    onModeChange: (p) => t({
                      type: "SET_PIPELINE_MODE",
                      mode: p
                    }),
                    preset: e.preset,
                    onPresetChange: (p) => t({
                      type: "SET_PRESET",
                      preset: p
                    }),
                    onSettingsChange: (p) => t({
                      type: "SET_CUSTOM_SETTINGS",
                      settings: p
                    }),
                    apiKey: e.apiKey,
                    onApiKeyChange: (p) => t({
                      type: "SET_API_KEY",
                      key: p
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
            (e.stage === "tracing" || e.stage === "analyzing") && e.vtracerSvg && g.jsx(Cm, {
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
                      g.jsx(Wm, {
                        imageUrl: e.imageUrl,
                        svgString: e.mergedSvg || e.vtracerSvg,
                        manifest: e.manifest || [],
                        selectedPart: e.selectedPart,
                        onPartSelect: (p) => t({
                          type: "SET_SELECTED_PART",
                          part: p
                        })
                      }),
                      g.jsxs("div", {
                        children: [
                          g.jsx(Hm, {
                            manifest: e.manifest || [],
                            groups: e.groups,
                            selectedPart: e.selectedPart,
                            onPartSelect: (p) => t({
                              type: "SET_SELECTED_PART",
                              part: p
                            })
                          }),
                          e.selectedPart && i && g.jsx(Gm, {
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
                g.jsx(Qm, {
                  componentCode: e.componentCode,
                  componentName: e.componentName,
                  onNameChange: (p) => {
                    t({
                      type: "SET_COMPONENT_NAME",
                      name: p
                    });
                    const m = ms(e.mergedSvg || e.vtracerSvg, e.manifest || [], p || "GeneratedComponent");
                    t({
                      type: "SET_COMPONENT_CODE",
                      code: m
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
      const lh = jc(document.getElementById("root"));
      lh.render(g.jsx(cp, {
        children: g.jsx(rh, {})
      }));
    })();
  }
});
export default require_stdin();

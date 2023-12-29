/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/paxify-llc/builds@master/reelife/paxify-reelife.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && typeof module < "u"
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self).ReelsInitializer =
        t());
})(this, function () {
  "use strict";
  var e = { exports: {} },
    t = {},
    n = { exports: {} },
    r = {},
    i = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy"),
    m = Symbol.iterator;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    y = {};
  function b(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = y),
      (this.updater = n || v);
  }
  function w() {}
  function x(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = y),
      (this.updater = n || v);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (b.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (w.prototype = b.prototype);
  var S = (x.prototype = new w());
  (S.constructor = x), g(S, b.prototype), (S.isPureReactComponent = !0);
  var E = Array.isArray,
    k = Object.prototype.hasOwnProperty,
    C = { current: null },
    T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(e, t, n) {
    var r,
      a = {},
      o = null,
      l = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (l = t.ref),
      void 0 !== t.key && (o = "" + t.key),
      t))
        k.call(t, r) && !T.hasOwnProperty(r) && (a[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) a.children = n;
    else if (1 < s) {
      for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
      a.children = u;
    }
    if (e && e.defaultProps)
      for (r in (s = e.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
    return {
      $$typeof: i,
      type: e,
      key: o,
      ref: l,
      props: a,
      _owner: C.current,
    };
  }
  function _(e) {
    return "object" == typeof e && null !== e && e.$$typeof === i;
  }
  var O = /\/+/g;
  function L(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function N(e, t, n, r, o) {
    var l = typeof e;
    ("undefined" === l || "boolean" === l) && (e = null);
    var s = !1;
    if (null === e) s = !0;
    else
      switch (l) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case i:
            case a:
              s = !0;
          }
      }
    if (s)
      return (
        (o = o((s = e))),
        (e = "" === r ? "." + L(s, 0) : r),
        E(o)
          ? ((n = ""),
            null != e && (n = e.replace(O, "$&/") + "/"),
            N(o, t, n, "", function (e) {
              return e;
            }))
          : null != o &&
            (_(o) &&
              (o = (function (e, t) {
                return {
                  $$typeof: i,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                o,
                n +
                  (!o.key || (s && s.key === o.key)
                    ? ""
                    : ("" + o.key).replace(O, "$&/") + "/") +
                  e
              )),
            t.push(o)),
        1
      );
    if (((s = 0), (r = "" === r ? "." : r + ":"), E(e)))
      for (var u = 0; u < e.length; u++) {
        var c = r + L((l = e[u]), u);
        s += N(l, t, n, c, o);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (m && e[m]) || e["@@iterator"])
          ? e
          : null;
      })(e)),
      "function" == typeof c)
    )
      for (e = c.call(e), u = 0; !(l = e.next()).done; )
        s += N((l = l.value), t, n, (c = r + L(l, u++)), o);
    else if ("object" === l)
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === t
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function M(e, t, n) {
    if (null == e) return e;
    var r = [],
      i = 0;
    return (
      N(e, r, "", "", function (e) {
        return t.call(n, e, i++);
      }),
      r
    );
  }
  function z(e) {
    if (-1 === e._status) {
      var t = e._result;
      (t = t()).then(
        function (t) {
          (0 === e._status || -1 === e._status) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 === e._status || -1 === e._status) &&
            ((e._status = 2), (e._result = t));
        }
      ),
        -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var I = { current: null },
    j = { transition: null },
    R = {
      ReactCurrentDispatcher: I,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: C,
    };
  (r.Children = {
    map: M,
    forEach: function (e, t, n) {
      M(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        M(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        M(e, function (e) {
          return e;
        }) || []
      );
    },
    only: function (e) {
      if (!_(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (r.Component = b),
    (r.Fragment = o),
    (r.Profiler = s),
    (r.PureComponent = x),
    (r.StrictMode = l),
    (r.Suspense = f),
    (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (r.cloneElement = function (e, t, n) {
      if (null == e)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = g({}, e.props),
        a = e.key,
        o = e.ref,
        l = e._owner;
      if (null != t) {
        if (
          (void 0 !== t.ref && ((o = t.ref), (l = C.current)),
          void 0 !== t.key && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps;
        for (u in t)
          k.call(t, u) &&
            !T.hasOwnProperty(u) &&
            (r[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
      }
      var u = arguments.length - 2;
      if (1 === u) r.children = n;
      else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        r.children = s;
      }
      return { $$typeof: i, type: e.type, key: a, ref: o, props: r, _owner: l };
    }),
    (r.createContext = function (e) {
      return (
        ((e = {
          $$typeof: c,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: u, _context: e }),
        (e.Consumer = e)
      );
    }),
    (r.createElement = P),
    (r.createFactory = function (e) {
      var t = P.bind(null, e);
      return (t.type = e), t;
    }),
    (r.createRef = function () {
      return { current: null };
    }),
    (r.forwardRef = function (e) {
      return { $$typeof: d, render: e };
    }),
    (r.isValidElement = _),
    (r.lazy = function (e) {
      return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: z };
    }),
    (r.memo = function (e, t) {
      return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
    }),
    (r.startTransition = function (e) {
      var t = j.transition;
      j.transition = {};
      try {
        e();
      } finally {
        j.transition = t;
      }
    }),
    (r.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (r.useCallback = function (e, t) {
      return I.current.useCallback(e, t);
    }),
    (r.useContext = function (e) {
      return I.current.useContext(e);
    }),
    (r.useDebugValue = function () {}),
    (r.useDeferredValue = function (e) {
      return I.current.useDeferredValue(e);
    }),
    (r.useEffect = function (e, t) {
      return I.current.useEffect(e, t);
    }),
    (r.useId = function () {
      return I.current.useId();
    }),
    (r.useImperativeHandle = function (e, t, n) {
      return I.current.useImperativeHandle(e, t, n);
    }),
    (r.useInsertionEffect = function (e, t) {
      return I.current.useInsertionEffect(e, t);
    }),
    (r.useLayoutEffect = function (e, t) {
      return I.current.useLayoutEffect(e, t);
    }),
    (r.useMemo = function (e, t) {
      return I.current.useMemo(e, t);
    }),
    (r.useReducer = function (e, t, n) {
      return I.current.useReducer(e, t, n);
    }),
    (r.useRef = function (e) {
      return I.current.useRef(e);
    }),
    (r.useState = function (e) {
      return I.current.useState(e);
    }),
    (r.useSyncExternalStore = function (e, t, n) {
      return I.current.useSyncExternalStore(e, t, n);
    }),
    (r.useTransition = function () {
      return I.current.useTransition();
    }),
    (r.version = "18.2.0"),
    (n.exports = r);
  var A = n.exports;
  const D =
    ($ = A) &&
    $.__esModule &&
    Object.prototype.hasOwnProperty.call($, "default")
      ? $.default
      : $;
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var $,
    F = A,
    B = Symbol.for("react.element"),
    U = Symbol.for("react.fragment"),
    V = Object.prototype.hasOwnProperty,
    H = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(e, t, n) {
    var r,
      i = {},
      a = null,
      o = null;
    for (r in (void 0 !== n && (a = "" + n),
    void 0 !== t.key && (a = "" + t.key),
    void 0 !== t.ref && (o = t.ref),
    t))
      V.call(t, r) && !W.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
    return {
      $$typeof: B,
      type: e,
      key: a,
      ref: o,
      props: i,
      _owner: H.current,
    };
  }
  (t.Fragment = U), (t.jsx = G), (t.jsxs = G), (e.exports = t);
  var q = e.exports,
    Y = {},
    Q = { exports: {} },
    X = {},
    K = { exports: {} },
    J = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (!(0 < i(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function n(e) {
      return 0 === e.length ? null : e[0];
    }
    function r(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var l = 2 * (r + 1) - 1,
            s = e[l],
            u = l + 1,
            c = e[u];
          if (0 > i(s, n))
            u < a && 0 > i(c, s)
              ? ((e[r] = c), (e[u] = n), (r = u))
              : ((e[r] = s), (e[l] = n), (r = l));
          else {
            if (!(u < a && 0 > i(c, n))) break e;
            (e[r] = c), (e[u] = n), (r = u);
          }
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      "object" == typeof performance &&
      "function" == typeof performance.now
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        l = o.now();
      e.unstable_now = function () {
        return o.now() - l;
      };
    }
    var s = [],
      u = [],
      c = 1,
      d = null,
      f = 3,
      p = !1,
      h = !1,
      m = !1,
      v = "function" == typeof setTimeout ? setTimeout : null,
      g = "function" == typeof clearTimeout ? clearTimeout : null,
      y = typeof setImmediate < "u" ? setImmediate : null;
    function b(e) {
      for (var i = n(u); null !== i; ) {
        if (null === i.callback) r(u);
        else {
          if (!(i.startTime <= e)) break;
          r(u), (i.sortIndex = i.expirationTime), t(s, i);
        }
        i = n(u);
      }
    }
    function w(e) {
      if (((m = !1), b(e), !h))
        if (null !== n(s)) (h = !0), M(x);
        else {
          var t = n(u);
          null !== t && z(w, t.startTime - e);
        }
    }
    function x(t, i) {
      (h = !1), m && ((m = !1), g(C), (C = -1)), (p = !0);
      var a = f;
      try {
        for (
          b(i), d = n(s);
          null !== d && (!(d.expirationTime > i) || (t && !_()));

        ) {
          var o = d.callback;
          if ("function" == typeof o) {
            (d.callback = null), (f = d.priorityLevel);
            var l = o(d.expirationTime <= i);
            (i = e.unstable_now()),
              "function" == typeof l ? (d.callback = l) : d === n(s) && r(s),
              b(i);
          } else r(s);
          d = n(s);
        }
        if (null !== d) var c = !0;
        else {
          var v = n(u);
          null !== v && z(w, v.startTime - i), (c = !1);
        }
        return c;
      } finally {
        (d = null), (f = a), (p = !1);
      }
    }
    typeof navigator < "u" &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
      E = !1,
      k = null,
      C = -1,
      T = 5,
      P = -1;
    function _() {
      return !(e.unstable_now() - P < T);
    }
    function O() {
      if (null !== k) {
        var t = e.unstable_now();
        P = t;
        var n = !0;
        try {
          n = k(!0, t);
        } finally {
          n ? S() : ((E = !1), (k = null));
        }
      } else E = !1;
    }
    if ("function" == typeof y)
      S = function () {
        y(O);
      };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(),
        N = L.port2;
      (L.port1.onmessage = O),
        (S = function () {
          N.postMessage(null);
        });
    } else
      S = function () {
        v(O, 0);
      };
    function M(e) {
      (k = e), E || ((E = !0), S());
    }
    function z(t, n) {
      C = v(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        h || p || ((h = !0), M(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (T = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(s);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          ("object" == typeof a && null !== a
            ? (a = "number" == typeof (a = a.delay) && 0 < a ? o + a : o)
            : (a = o),
          r)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (r = {
            id: c++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: (l = a + l),
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(u, r),
              null === n(s) &&
                r === n(u) &&
                (m ? (g(C), (C = -1)) : (m = !0), z(w, a - o)))
            : ((r.sortIndex = l), t(s, r), h || p || ((h = !0), M(x))),
          r
        );
      }),
      (e.unstable_shouldYield = _),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  })(J),
    (K.exports = J);
  var Z = K.exports,
    ee = A,
    te = Z;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function ne(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var re = new Set(),
    ie = {};
  function ae(e, t) {
    oe(e, t), oe(e + "Capture", t);
  }
  function oe(e, t) {
    for (ie[e] = t, e = 0; e < t.length; e++) re.add(t[e]);
  }
  var le = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    se = Object.prototype.hasOwnProperty,
    ue =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ce = {},
    de = {};
  function fe(e, t, n, r, i, a, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = o);
  }
  var pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      pe[e] = new fe(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      pe[t] = new fe(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      pe[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      pe[e] = new fe(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        pe[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      pe[e] = new fe(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      pe[e] = new fe(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      pe[e] = new fe(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      pe[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var he = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  function ve(e, t, n, r) {
    var i = pe.hasOwnProperty(t) ? pe[t] : null;
    (null !== i
      ? 0 !== i.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null === t ||
          typeof t > "u" ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, i, r) && (n = null),
      r || null === i
        ? (function (e) {
            return (
              !!se.call(de, e) ||
              (!se.call(ce, e) &&
                (ue.test(e) ? (de[e] = !0) : ((ce[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(he, me);
      pe[t] = new fe(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(he, me);
        pe[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(he, me);
      pe[t] = new fe(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      pe[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (pe.xlinkHref = new fe(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      pe[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  var ge = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ye = Symbol.for("react.element"),
    be = Symbol.for("react.portal"),
    we = Symbol.for("react.fragment"),
    xe = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Ee = Symbol.for("react.provider"),
    ke = Symbol.for("react.context"),
    Ce = Symbol.for("react.forward_ref"),
    Te = Symbol.for("react.suspense"),
    Pe = Symbol.for("react.suspense_list"),
    _e = Symbol.for("react.memo"),
    Oe = Symbol.for("react.lazy"),
    Le = Symbol.for("react.offscreen"),
    Ne = Symbol.iterator;
  function Me(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (Ne && e[Ne]) || e["@@iterator"])
      ? e
      : null;
  }
  var ze,
    Ie = Object.assign;
  function je(e) {
    if (void 0 === ze)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ze = (t && t[1]) || "";
      }
    return "\n" + ze + e;
  }
  var Re = !1;
  function Ae(e, t) {
    if (!e || Re) return "";
    Re = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (t) {
      if (t && r && "string" == typeof t.stack) {
        for (
          var i = t.stack.split("\n"),
            a = r.stack.split("\n"),
            o = i.length - 1,
            l = a.length - 1;
          1 <= o && 0 <= l && i[o] !== a[l];

        )
          l--;
        for (; 1 <= o && 0 <= l; o--, l--)
          if (i[o] !== a[l]) {
            if (1 !== o || 1 !== l)
              do {
                if ((o--, 0 > --l || i[o] !== a[l])) {
                  var s = "\n" + i[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              } while (1 <= o && 0 <= l);
            break;
          }
      }
    } finally {
      (Re = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? je(e) : "";
  }
  function De(e) {
    switch (e.tag) {
      case 5:
        return je(e.type);
      case 16:
        return je("Lazy");
      case 13:
        return je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ae(e.type, !1));
      case 11:
        return (e = Ae(e.type.render, !1));
      case 1:
        return (e = Ae(e.type, !0));
      default:
        return "";
    }
  }
  function $e(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case we:
        return "Fragment";
      case be:
        return "Portal";
      case Se:
        return "Profiler";
      case xe:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case ke:
          return (e.displayName || "Context") + ".Consumer";
        case Ee:
          return (e._context.displayName || "Context") + ".Provider";
        case Ce:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case _e:
          return null !== (t = e.displayName || null)
            ? t
            : $e(e.type) || "Memo";
        case Oe:
          (t = e._payload), (e = e._init);
          try {
            return $e(e(t));
          } catch {}
      }
    return null;
  }
  function Fe(e) {
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
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
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
        return $e(t);
      case 8:
        return t === xe ? "StrictMode" : "Mode";
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
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function Be(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ue(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function Ve(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = Ue(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          typeof n < "u" &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var i = n.get,
            a = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return i.call(this);
              },
              set: function (e) {
                (r = "" + e), a.call(this, e);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      })(e));
  }
  function He(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ue(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function We(e) {
    if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ge(e, t) {
    var n = t.checked;
    return Ie({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function qe(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Be(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function Ye(e, t) {
    null != (t = t.checked) && ve(e, "checked", t, !1);
  }
  function Qe(e, t) {
    Ye(e, t);
    var n = Be(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? Ke(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ke(e, t.type, Be(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Xe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    "" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n);
  }
  function Ke(e, t, n) {
    ("number" !== t || We(e.ownerDocument) !== e) &&
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Je = Array.isArray;
  function Ze(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Be(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n)
          return (e[i].selected = !0), void (r && (e[i].defaultSelected = !0));
        null !== t || e[i].disabled || (t = e[i]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function et(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ne(91));
    return Ie({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function tt(e, t) {
    var n = t.value;
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(ne(92));
        if (Je(n)) {
          if (1 < n.length) throw Error(ne(93));
          n = n[0];
        }
        t = n;
      }
      null == t && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Be(n) };
  }
  function nt(e, t) {
    var n = Be(t.value),
      r = Be(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function rt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function it(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function at(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? it(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ot,
    lt = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n);
            });
          }
        : e;
    })(function (e, t) {
      if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          (ot = ot || document.createElement("div")).innerHTML =
            "<svg>" + t.valueOf().toString() + "</svg>",
            t = ot.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function st(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var ut = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ct = ["Webkit", "ms", "Moz", "O"];
  function dt(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (ut.hasOwnProperty(e) && ut[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ft(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          i = dt(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  Object.keys(ut).forEach(function (e) {
    ct.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ut[t] = ut[e]);
    });
  });
  var pt = Ie(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ht(e, t) {
    if (t) {
      if (pt[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(ne(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(ne(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(ne(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(ne(62));
    }
  }
  function mt(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vt = null;
  function gt(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var yt = null,
    bt = null,
    wt = null;
  function xt(e) {
    if ((e = ma(e))) {
      if ("function" != typeof yt) throw Error(ne(280));
      var t = e.stateNode;
      t && ((t = ga(t)), yt(e.stateNode, e.type, t));
    }
  }
  function St(e) {
    bt ? (wt ? wt.push(e) : (wt = [e])) : (bt = e);
  }
  function Et() {
    if (bt) {
      var e = bt,
        t = wt;
      if (((wt = bt = null), xt(e), t)) for (e = 0; e < t.length; e++) xt(t[e]);
    }
  }
  function kt(e, t) {
    return e(t);
  }
  function Ct() {}
  var Tt = !1;
  function Pt(e, t, n) {
    if (Tt) return e(t, n);
    Tt = !0;
    try {
      return kt(e, t, n);
    } finally {
      (Tt = !1), (null !== bt || null !== wt) && (Ct(), Et());
    }
  }
  function _t(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = ga(n);
    if (null === r) return null;
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
        (r = !r.disabled) ||
          (r = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(ne(231, t, typeof n));
    return n;
  }
  var Ot = !1;
  if (le)
    try {
      var Lt = {};
      Object.defineProperty(Lt, "passive", {
        get: function () {
          Ot = !0;
        },
      }),
        window.addEventListener("test", Lt, Lt),
        window.removeEventListener("test", Lt, Lt);
    } catch {
      Ot = !1;
    }
  function Nt(e, t, n, r, i, a, o, l, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (e) {
      this.onError(e);
    }
  }
  var Mt = !1,
    zt = null,
    It = !1,
    jt = null,
    Rt = {
      onError: function (e) {
        (Mt = !0), (zt = e);
      },
    };
  function At(e, t, n, r, i, a, o, l, s) {
    (Mt = !1), (zt = null), Nt.apply(Rt, arguments);
  }
  function Dt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        4098 & (t = e).flags && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function $t(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ft(e) {
    if (Dt(e) !== e) throw Error(ne(188));
  }
  function Bt(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Dt(e))) throw Error(ne(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var i = n.return;
          if (null === i) break;
          var a = i.alternate;
          if (null === a) {
            if (null !== (r = i.return)) {
              n = r;
              continue;
            }
            break;
          }
          if (i.child === a.child) {
            for (a = i.child; a; ) {
              if (a === n) return Ft(i), e;
              if (a === r) return Ft(i), t;
              a = a.sibling;
            }
            throw Error(ne(188));
          }
          if (n.return !== r.return) (n = i), (r = a);
          else {
            for (var o = !1, l = i.child; l; ) {
              if (l === n) {
                (o = !0), (n = i), (r = a);
                break;
              }
              if (l === r) {
                (o = !0), (r = i), (n = a);
                break;
              }
              l = l.sibling;
            }
            if (!o) {
              for (l = a.child; l; ) {
                if (l === n) {
                  (o = !0), (n = a), (r = i);
                  break;
                }
                if (l === r) {
                  (o = !0), (r = a), (n = i);
                  break;
                }
                l = l.sibling;
              }
              if (!o) throw Error(ne(189));
            }
          }
          if (n.alternate !== r) throw Error(ne(190));
        }
        if (3 !== n.tag) throw Error(ne(188));
        return n.stateNode.current === n ? e : t;
      })(e))
      ? Ut(e)
      : null;
  }
  function Ut(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = Ut(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vt = te.unstable_scheduleCallback,
    Ht = te.unstable_cancelCallback,
    Wt = te.unstable_shouldYield,
    Gt = te.unstable_requestPaint,
    qt = te.unstable_now,
    Yt = te.unstable_getCurrentPriorityLevel,
    Qt = te.unstable_ImmediatePriority,
    Xt = te.unstable_UserBlockingPriority,
    Kt = te.unstable_NormalPriority,
    Jt = te.unstable_LowPriority,
    Zt = te.unstable_IdlePriority,
    en = null,
    tn = null;
  var nn = Math.clz32
      ? Math.clz32
      : function (e) {
          return (e >>>= 0), 0 === e ? 32 : (31 - ((rn(e) / an) | 0)) | 0;
        },
    rn = Math.log,
    an = Math.LN2;
  var on = 64,
    ln = 4194304;
  function sn(e) {
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
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
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
  function un(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      i = e.suspendedLanes,
      a = e.pingedLanes,
      o = 268435455 & n;
    if (0 !== o) {
      var l = o & ~i;
      0 !== l ? (r = sn(l)) : 0 !== (a &= o) && (r = sn(a));
    } else 0 !== (o = n & ~i) ? (r = sn(o)) : 0 !== a && (r = sn(a));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r) >= (a = t & -t) || (16 === i && 0 != (4194240 & a)))
    )
      return t;
    if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        (i = 1 << (n = 31 - nn(t))), (r |= e[n]), (t &= ~i);
    return r;
  }
  function cn(e, t) {
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
      default:
        return -1;
    }
  }
  function dn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function fn() {
    var e = on;
    return !(4194240 & (on <<= 1)) && (on = 64), e;
  }
  function pn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function hn(e, t, n) {
    (e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - nn(t))] = n);
  }
  function mn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - nn(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var vn = 0;
  function gn(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
  }
  var yn,
    bn,
    wn,
    xn,
    Sn,
    En = !1,
    kn = [],
    Cn = null,
    Tn = null,
    Pn = null,
    _n = new Map(),
    On = new Map(),
    Ln = [],
    Nn =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Mn(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        On.delete(t.pointerId);
    }
  }
  function zn(e, t, n, r, i, a) {
    return null === e || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [i],
        }),
        null !== t && null !== (t = ma(t)) && bn(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== i && -1 === t.indexOf(i) && t.push(i),
        e);
  }
  function In(e) {
    var t = ha(e.target);
    if (null !== t) {
      var n = Dt(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = $t(n)))
            return (
              (e.blockedOn = t),
              void Sn(e.priority, function () {
                wn(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function jn(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Gn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = ma(n)) && bn(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (vt = r), n.target.dispatchEvent(r), (vt = null), t.shift();
    }
    return !0;
  }
  function Rn(e, t, n) {
    jn(e) && n.delete(t);
  }
  function An() {
    (En = !1),
      null !== Cn && jn(Cn) && (Cn = null),
      null !== Tn && jn(Tn) && (Tn = null),
      null !== Pn && jn(Pn) && (Pn = null),
      _n.forEach(Rn),
      On.forEach(Rn);
  }
  function Dn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      En ||
        ((En = !0),
        te.unstable_scheduleCallback(te.unstable_NormalPriority, An)));
  }
  function $n(e) {
    function t(t) {
      return Dn(t, e);
    }
    if (0 < kn.length) {
      Dn(kn[0], e);
      for (var n = 1; n < kn.length; n++) {
        var r = kn[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== Cn && Dn(Cn, e),
        null !== Tn && Dn(Tn, e),
        null !== Pn && Dn(Pn, e),
        _n.forEach(t),
        On.forEach(t),
        n = 0;
      n < Ln.length;
      n++
    )
      (r = Ln[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && null === (n = Ln[0]).blockedOn; )
      In(n), null === n.blockedOn && Ln.shift();
  }
  var Fn = ge.ReactCurrentBatchConfig,
    Bn = !0;
  function Un(e, t, n, r) {
    var i = vn,
      a = Fn.transition;
    Fn.transition = null;
    try {
      (vn = 1), Hn(e, t, n, r);
    } finally {
      (vn = i), (Fn.transition = a);
    }
  }
  function Vn(e, t, n, r) {
    var i = vn,
      a = Fn.transition;
    Fn.transition = null;
    try {
      (vn = 4), Hn(e, t, n, r);
    } finally {
      (vn = i), (Fn.transition = a);
    }
  }
  function Hn(e, t, n, r) {
    if (Bn) {
      var i = Gn(e, t, n, r);
      if (null === i) Fi(e, t, r, Wn, n), Mn(e, r);
      else if (
        (function (e, t, n, r, i) {
          switch (t) {
            case "focusin":
              return (Cn = zn(Cn, e, t, n, r, i)), !0;
            case "dragenter":
              return (Tn = zn(Tn, e, t, n, r, i)), !0;
            case "mouseover":
              return (Pn = zn(Pn, e, t, n, r, i)), !0;
            case "pointerover":
              var a = i.pointerId;
              return _n.set(a, zn(_n.get(a) || null, e, t, n, r, i)), !0;
            case "gotpointercapture":
              return (
                (a = i.pointerId),
                On.set(a, zn(On.get(a) || null, e, t, n, r, i)),
                !0
              );
          }
          return !1;
        })(i, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Mn(e, r), 4 & t && -1 < Nn.indexOf(e))) {
        for (; null !== i; ) {
          var a = ma(i);
          if (
            (null !== a && yn(a),
            null === (a = Gn(e, t, n, r)) && Fi(e, t, r, Wn, n),
            a === i)
          )
            break;
          i = a;
        }
        null !== i && r.stopPropagation();
      } else Fi(e, t, r, null, n);
    }
  }
  var Wn = null;
  function Gn(e, t, n, r) {
    if (((Wn = null), null !== (e = ha((e = gt(r))))))
      if (null === (t = Dt(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = $t(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Wn = e), null;
  }
  function qn(e) {
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
        switch (Yt()) {
          case Qt:
            return 1;
          case Xt:
            return 4;
          case Kt:
          case Jt:
            return 16;
          case Zt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yn = null,
    Qn = null,
    Xn = null;
  function Kn() {
    if (Xn) return Xn;
    var e,
      t,
      n = Qn,
      r = n.length,
      i = "value" in Yn ? Yn.value : Yn.textContent,
      a = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
    return (Xn = i.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Jn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function Zn() {
    return !0;
  }
  function er() {
    return !1;
  }
  function tr(e) {
    function t(t, n, r, i, a) {
      for (var o in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue
        )
          ? Zn
          : er),
        (this.isPropagationStopped = er),
        this
      );
    }
    return (
      Ie(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Zn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Zn));
        },
        persist: function () {},
        isPersistent: Zn,
      }),
      t
    );
  }
  var nr,
    rr,
    ir,
    ar = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    or = tr(ar),
    lr = Ie({}, ar, { view: 0, detail: 0 }),
    sr = tr(lr),
    ur = Ie({}, lr, {
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
      getModifierState: xr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ir &&
              (ir && "mousemove" === e.type
                ? ((nr = e.screenX - ir.screenX), (rr = e.screenY - ir.screenY))
                : (rr = nr = 0),
              (ir = e)),
            nr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : rr;
      },
    }),
    cr = tr(ur),
    dr = tr(Ie({}, ur, { dataTransfer: 0 })),
    fr = tr(Ie({}, lr, { relatedTarget: 0 })),
    pr = tr(Ie({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    hr = Ie({}, ar, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mr = tr(hr),
    vr = tr(Ie({}, ar, { data: 0 })),
    gr = {
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
      MozPrintableKey: "Unidentified",
    },
    yr = {
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
      224: "Meta",
    },
    br = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = br[e]) && !!t[e];
  }
  function xr() {
    return wr;
  }
  var Sr = Ie({}, lr, {
      key: function (e) {
        if (e.key) {
          var t = gr[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = Jn(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
          ? yr[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xr,
      charCode: function (e) {
        return "keypress" === e.type ? Jn(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? Jn(e)
          : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
      },
    }),
    Er = tr(Sr),
    kr = tr(
      Ie({}, ur, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      })
    ),
    Cr = tr(
      Ie({}, lr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xr,
      })
    ),
    Tr = tr(Ie({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Pr = Ie({}, ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _r = tr(Pr),
    Or = [9, 13, 27, 32],
    Lr = le && "CompositionEvent" in window,
    Nr = null;
  le && "documentMode" in document && (Nr = document.documentMode);
  var Mr = le && "TextEvent" in window && !Nr,
    zr = le && (!Lr || (Nr && 8 < Nr && 11 >= Nr)),
    Ir = String.fromCharCode(32),
    jr = !1;
  function Rr(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Or.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ar(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Dr = !1;
  var $r = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Fr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!$r[e.type] : "textarea" === t;
  }
  function Br(e, t, n, r) {
    St(r),
      0 < (t = Ui(t, "onChange")).length &&
        ((n = new or("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Ur = null,
    Vr = null;
  function Hr(e) {
    Ii(e, 0);
  }
  function Wr(e) {
    if (He(va(e))) return e;
  }
  function Gr(e, t) {
    if ("change" === e) return t;
  }
  var qr = !1;
  if (le) {
    var Yr;
    if (le) {
      var Qr = "oninput" in document;
      if (!Qr) {
        var Xr = document.createElement("div");
        Xr.setAttribute("oninput", "return;"),
          (Qr = "function" == typeof Xr.oninput);
      }
      Yr = Qr;
    } else Yr = !1;
    qr = Yr && (!document.documentMode || 9 < document.documentMode);
  }
  function Kr() {
    Ur && (Ur.detachEvent("onpropertychange", Jr), (Vr = Ur = null));
  }
  function Jr(e) {
    if ("value" === e.propertyName && Wr(Vr)) {
      var t = [];
      Br(t, Vr, e, gt(e)), Pt(Hr, t);
    }
  }
  function Zr(e, t, n) {
    "focusin" === e
      ? (Kr(), (Vr = n), (Ur = t).attachEvent("onpropertychange", Jr))
      : "focusout" === e && Kr();
  }
  function ei(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Wr(Vr);
  }
  function ti(e, t) {
    if ("click" === e) return Wr(t);
  }
  function ni(e, t) {
    if ("input" === e || "change" === e) return Wr(t);
  }
  var ri =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function ii(e, t) {
    if (ri(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!se.call(t, i) || !ri(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ai(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function oi(e, t) {
    var n,
      r = ai(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = ai(r);
    }
  }
  function li(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? li(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function si() {
    for (var e = window, t = We(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch {
        n = !1;
      }
      if (!n) break;
      t = We((e = t.contentWindow).document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function ci(e) {
    var t = si(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      li(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && ui(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            a = Math.min(r.start, i);
          (r = void 0 === r.end ? a : Math.min(r.end, i)),
            !e.extend && a > r && ((i = r), (r = a), (a = i)),
            (i = oi(n, a));
          var o = oi(n, r);
          i &&
            o &&
            (1 !== e.rangeCount ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()).setStart(i.node, i.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var di = le && "documentMode" in document && 11 >= document.documentMode,
    fi = null,
    pi = null,
    hi = null,
    mi = !1;
  function vi(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    mi ||
      null == fi ||
      fi !== We(r) ||
      ("selectionStart" in (r = fi) && ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (hi && ii(hi, r)) ||
        ((hi = r),
        0 < (r = Ui(pi, "onSelect")).length &&
          ((t = new or("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = fi))));
  }
  function gi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yi = {
      animationend: gi("Animation", "AnimationEnd"),
      animationiteration: gi("Animation", "AnimationIteration"),
      animationstart: gi("Animation", "AnimationStart"),
      transitionend: gi("Transition", "TransitionEnd"),
    },
    bi = {},
    wi = {};
  function xi(e) {
    if (bi[e]) return bi[e];
    if (!yi[e]) return e;
    var t,
      n = yi[e];
    for (t in n) if (n.hasOwnProperty(t) && t in wi) return (bi[e] = n[t]);
    return e;
  }
  le &&
    ((wi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yi.animationend.animation,
      delete yi.animationiteration.animation,
      delete yi.animationstart.animation),
    "TransitionEvent" in window || delete yi.transitionend.transition);
  var Si = xi("animationend"),
    Ei = xi("animationiteration"),
    ki = xi("animationstart"),
    Ci = xi("transitionend"),
    Ti = new Map(),
    Pi =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function _i(e, t) {
    Ti.set(e, t), ae(t, [e]);
  }
  for (var Oi = 0; Oi < Pi.length; Oi++) {
    var Li = Pi[Oi];
    _i(Li.toLowerCase(), "on" + (Li[0].toUpperCase() + Li.slice(1)));
  }
  _i(Si, "onAnimationEnd"),
    _i(Ei, "onAnimationIteration"),
    _i(ki, "onAnimationStart"),
    _i("dblclick", "onDoubleClick"),
    _i("focusin", "onFocus"),
    _i("focusout", "onBlur"),
    _i(Ci, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    ae(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ae(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ae(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ae(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ae(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ni =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Mi = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ni)
    );
  function zi(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n),
      (function (e, t, n, r, i, a, o, l, s) {
        if ((At.apply(this, arguments), Mt)) {
          if (!Mt) throw Error(ne(198));
          var u = zt;
          (Mt = !1), (zt = null), It || ((It = !0), (jt = u));
        }
      })(r, t, void 0, e),
      (e.currentTarget = null);
  }
  function Ii(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var l = r[o],
              s = l.instance,
              u = l.currentTarget;
            if (((l = l.listener), s !== a && i.isPropagationStopped()))
              break e;
            zi(i, l, u), (a = s);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((s = (l = r[o]).instance),
              (u = l.currentTarget),
              (l = l.listener),
              s !== a && i.isPropagationStopped())
            )
              break e;
            zi(i, l, u), (a = s);
          }
      }
    }
    if (It) throw ((e = jt), (It = !1), (jt = null), e);
  }
  function ji(e, t) {
    var n = t[da];
    void 0 === n && (n = t[da] = new Set());
    var r = e + "__bubble";
    n.has(r) || ($i(t, e, 2, !1), n.add(r));
  }
  function Ri(e, t, n) {
    var r = 0;
    t && (r |= 4), $i(n, e, r, t);
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Di(e) {
    if (!e[Ai]) {
      (e[Ai] = !0),
        re.forEach(function (t) {
          "selectionchange" !== t && (Mi.has(t) || Ri(t, !1, e), Ri(t, !0, e));
        });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[Ai] || ((t[Ai] = !0), Ri("selectionchange", !1, t));
    }
  }
  function $i(e, t, n, r) {
    switch (qn(t)) {
      case 1:
        var i = Un;
        break;
      case 4:
        i = Vn;
        break;
      default:
        i = Hn;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Ot ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (i = !0),
      r
        ? void 0 !== i
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : void 0 !== i
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Fi(e, t, n, r, i) {
    var a = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var o = r.tag;
        if (3 === o || 4 === o) {
          var l = r.stateNode.containerInfo;
          if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
          if (4 === o)
            for (o = r.return; null !== o; ) {
              var s = o.tag;
              if (
                (3 === s || 4 === s) &&
                ((s = o.stateNode.containerInfo) === i ||
                  (8 === s.nodeType && s.parentNode === i))
              )
                return;
              o = o.return;
            }
          for (; null !== l; ) {
            if (null === (o = ha(l))) return;
            if (5 === (s = o.tag) || 6 === s) {
              r = a = o;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
    Pt(function () {
      var r = a,
        i = gt(n),
        o = [];
      e: {
        var l = Ti.get(e);
        if (void 0 !== l) {
          var s = or,
            u = e;
          switch (e) {
            case "keypress":
              if (0 === Jn(n)) break e;
            case "keydown":
            case "keyup":
              s = Er;
              break;
            case "focusin":
              (u = "focus"), (s = fr);
              break;
            case "focusout":
              (u = "blur"), (s = fr);
              break;
            case "beforeblur":
            case "afterblur":
              s = fr;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              s = cr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              s = dr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              s = Cr;
              break;
            case Si:
            case Ei:
            case ki:
              s = pr;
              break;
            case Ci:
              s = Tr;
              break;
            case "scroll":
              s = sr;
              break;
            case "wheel":
              s = _r;
              break;
            case "copy":
            case "cut":
            case "paste":
              s = mr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              s = kr;
          }
          var c = 0 != (4 & t),
            d = !c && "scroll" === e,
            f = c ? (null !== l ? l + "Capture" : null) : l;
          c = [];
          for (var p, h = r; null !== h; ) {
            var m = (p = h).stateNode;
            if (
              (5 === p.tag &&
                null !== m &&
                ((p = m),
                null !== f && null != (m = _t(h, f)) && c.push(Bi(h, m, p))),
              d)
            )
              break;
            h = h.return;
          }
          0 < c.length &&
            ((l = new s(l, u, null, n, i)), o.push({ event: l, listeners: c }));
        }
      }
      if (!(7 & t)) {
        if (
          ((s = "mouseout" === e || "pointerout" === e),
          (!(l = "mouseover" === e || "pointerover" === e) ||
            n === vt ||
            !(u = n.relatedTarget || n.fromElement) ||
            (!ha(u) && !u[ca])) &&
            (s || l) &&
            ((l =
              i.window === i
                ? i
                : (l = i.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
            s
              ? ((s = r),
                null !==
                  (u = (u = n.relatedTarget || n.toElement) ? ha(u) : null) &&
                  (u !== (d = Dt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                  (u = null))
              : ((s = null), (u = r)),
            s !== u))
        ) {
          if (
            ((c = cr),
            (m = "onMouseLeave"),
            (f = "onMouseEnter"),
            (h = "mouse"),
            ("pointerout" === e || "pointerover" === e) &&
              ((c = kr),
              (m = "onPointerLeave"),
              (f = "onPointerEnter"),
              (h = "pointer")),
            (d = null == s ? l : va(s)),
            (p = null == u ? l : va(u)),
            ((l = new c(m, h + "leave", s, n, i)).target = d),
            (l.relatedTarget = p),
            (m = null),
            ha(i) === r &&
              (((c = new c(f, h + "enter", u, n, i)).target = p),
              (c.relatedTarget = d),
              (m = c)),
            (d = m),
            s && u)
          )
            e: {
              for (f = u, h = 0, p = c = s; p; p = Vi(p)) h++;
              for (p = 0, m = f; m; m = Vi(m)) p++;
              for (; 0 < h - p; ) (c = Vi(c)), h--;
              for (; 0 < p - h; ) (f = Vi(f)), p--;
              for (; h--; ) {
                if (c === f || (null !== f && c === f.alternate)) break e;
                (c = Vi(c)), (f = Vi(f));
              }
              c = null;
            }
          else c = null;
          null !== s && Hi(o, l, s, c, !1),
            null !== u && null !== d && Hi(o, d, u, c, !0);
        }
        if (
          "select" ===
            (s =
              (l = r ? va(r) : window).nodeName && l.nodeName.toLowerCase()) ||
          ("input" === s && "file" === l.type)
        )
          var v = Gr;
        else if (Fr(l))
          if (qr) v = ni;
          else {
            v = ei;
            var g = Zr;
          }
        else
          (s = l.nodeName) &&
            "input" === s.toLowerCase() &&
            ("checkbox" === l.type || "radio" === l.type) &&
            (v = ti);
        switch (
          (v && (v = v(e, r))
            ? Br(o, v, n, i)
            : (g && g(e, l, r),
              "focusout" === e &&
                (g = l._wrapperState) &&
                g.controlled &&
                "number" === l.type &&
                Ke(l, "number", l.value)),
          (g = r ? va(r) : window),
          e)
        ) {
          case "focusin":
            (Fr(g) || "true" === g.contentEditable) &&
              ((fi = g), (pi = r), (hi = null));
            break;
          case "focusout":
            hi = pi = fi = null;
            break;
          case "mousedown":
            mi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (mi = !1), vi(o, n, i);
            break;
          case "selectionchange":
            if (di) break;
          case "keydown":
          case "keyup":
            vi(o, n, i);
        }
        var y;
        if (Lr)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Dr
            ? Rr(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        b &&
          (zr &&
            "ko" !== n.locale &&
            (Dr || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Dr && (y = Kn())
              : ((Qn = "value" in (Yn = i) ? Yn.value : Yn.textContent),
                (Dr = !0))),
          0 < (g = Ui(r, b)).length &&
            ((b = new vr(b, e, null, n, i)),
            o.push({ event: b, listeners: g }),
            y ? (b.data = y) : null !== (y = Ar(n)) && (b.data = y))),
          (y = Mr
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Ar(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((jr = !0), Ir);
                  case "textInput":
                    return (e = t.data) === Ir && jr ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Dr)
                  return "compositionend" === e || (!Lr && Rr(e, t))
                    ? ((e = Kn()), (Xn = Qn = Yn = null), (Dr = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return zr && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = Ui(r, "onBeforeInput")).length &&
            ((i = new vr("onBeforeInput", "beforeinput", null, n, i)),
            o.push({ event: i, listeners: r }),
            (i.data = y));
      }
      Ii(o, t);
    });
  }
  function Bi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ui(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var i = e,
        a = i.stateNode;
      5 === i.tag &&
        null !== a &&
        ((i = a),
        null != (a = _t(e, n)) && r.unshift(Bi(e, a, i)),
        null != (a = _t(e, t)) && r.push(Bi(e, a, i))),
        (e = e.return);
    }
    return r;
  }
  function Vi(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Hi(e, t, n, r, i) {
    for (var a = t._reactName, o = []; null !== n && n !== r; ) {
      var l = n,
        s = l.alternate,
        u = l.stateNode;
      if (null !== s && s === r) break;
      5 === l.tag &&
        null !== u &&
        ((l = u),
        i
          ? null != (s = _t(n, a)) && o.unshift(Bi(n, s, l))
          : i || (null != (s = _t(n, a)) && o.push(Bi(n, s, l)))),
        (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
  }
  var Wi = /\r\n?/g,
    Gi = /\u0000|\uFFFD/g;
  function qi(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Wi, "\n")
      .replace(Gi, "");
  }
  function Yi(e, t, n) {
    if (((t = qi(t)), qi(e) !== t && n)) throw Error(ne(425));
  }
  function Qi() {}
  var Xi = null,
    Ki = null;
  function Ji(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var Zi = "function" == typeof setTimeout ? setTimeout : void 0,
    ea = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ta = "function" == typeof Promise ? Promise : void 0,
    na =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : typeof ta < "u"
        ? function (e) {
            return ta.resolve(null).then(e).catch(ra);
          }
        : Zi;
  function ra(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ia(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && 8 === i.nodeType))
        if ("/$" === (n = i.data)) {
          if (0 === r) return e.removeChild(i), void $n(t);
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = i;
    } while (n);
    $n(t);
  }
  function aa(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function oa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var la = Math.random().toString(36).slice(2),
    sa = "__reactFiber$" + la,
    ua = "__reactProps$" + la,
    ca = "__reactContainer$" + la,
    da = "__reactEvents$" + la,
    fa = "__reactListeners$" + la,
    pa = "__reactHandles$" + la;
  function ha(e) {
    var t = e[sa];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[ca] || n[sa])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = oa(e); null !== e; ) {
            if ((n = e[sa])) return n;
            e = oa(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function ma(e) {
    return !(e = e[sa] || e[ca]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function va(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ne(33));
  }
  function ga(e) {
    return e[ua] || null;
  }
  var ya = [],
    ba = -1;
  function wa(e) {
    return { current: e };
  }
  function xa(e) {
    0 > ba || ((e.current = ya[ba]), (ya[ba] = null), ba--);
  }
  function Sa(e, t) {
    ba++, (ya[ba] = e.current), (e.current = t);
  }
  var Ea = {},
    ka = wa(Ea),
    Ca = wa(!1),
    Ta = Ea;
  function Pa(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ea;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i,
      a = {};
    for (i in n) a[i] = t[i];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function _a(e) {
    return null != (e = e.childContextTypes);
  }
  function Oa() {
    xa(Ca), xa(ka);
  }
  function La(e, t, n) {
    if (ka.current !== Ea) throw Error(ne(168));
    Sa(ka, t), Sa(Ca, n);
  }
  function Na(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
      return n;
    for (var i in (r = r.getChildContext()))
      if (!(i in t)) throw Error(ne(108, Fe(e) || "Unknown", i));
    return Ie({}, n, r);
  }
  function Ma(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ea),
      (Ta = ka.current),
      Sa(ka, e),
      Sa(Ca, Ca.current),
      !0
    );
  }
  function za(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ne(169));
    n
      ? ((e = Na(e, t, Ta)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        xa(Ca),
        xa(ka),
        Sa(ka, e))
      : xa(Ca),
      Sa(Ca, n);
  }
  var Ia = null,
    ja = !1,
    Ra = !1;
  function Aa(e) {
    null === Ia ? (Ia = [e]) : Ia.push(e);
  }
  function Da() {
    if (!Ra && null !== Ia) {
      Ra = !0;
      var e = 0,
        t = vn;
      try {
        var n = Ia;
        for (vn = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        (Ia = null), (ja = !1);
      } catch (t) {
        throw (null !== Ia && (Ia = Ia.slice(e + 1)), Vt(Qt, Da), t);
      } finally {
        (vn = t), (Ra = !1);
      }
    }
    return null;
  }
  var $a = [],
    Fa = 0,
    Ba = null,
    Ua = 0,
    Va = [],
    Ha = 0,
    Wa = null,
    Ga = 1,
    qa = "";
  function Ya(e, t) {
    ($a[Fa++] = Ua), ($a[Fa++] = Ba), (Ba = e), (Ua = t);
  }
  function Qa(e, t, n) {
    (Va[Ha++] = Ga), (Va[Ha++] = qa), (Va[Ha++] = Wa), (Wa = e);
    var r = Ga;
    e = qa;
    var i = 32 - nn(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var a = 32 - nn(t) + i;
    if (30 < a) {
      var o = i - (i % 5);
      (a = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (Ga = (1 << (32 - nn(t) + i)) | (n << i) | r),
        (qa = a + e);
    } else (Ga = (1 << a) | (n << i) | r), (qa = e);
  }
  function Xa(e) {
    null !== e.return && (Ya(e, 1), Qa(e, 1, 0));
  }
  function Ka(e) {
    for (; e === Ba; )
      (Ba = $a[--Fa]), ($a[Fa] = null), (Ua = $a[--Fa]), ($a[Fa] = null);
    for (; e === Wa; )
      (Wa = Va[--Ha]),
        (Va[Ha] = null),
        (qa = Va[--Ha]),
        (Va[Ha] = null),
        (Ga = Va[--Ha]),
        (Va[Ha] = null);
  }
  var Ja = null,
    Za = null,
    eo = !1,
    to = null;
  function no(e, t) {
    var n = _c(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n);
  }
  function ro(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (Ja = e), (Za = aa(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (Ja = e), (Za = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Wa ? { id: Ga, overflow: qa } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = _c(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (Ja = e),
          (Za = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function io(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
  }
  function ao(e) {
    if (eo) {
      var t = Za;
      if (t) {
        var n = t;
        if (!ro(e, t)) {
          if (io(e)) throw Error(ne(418));
          t = aa(n.nextSibling);
          var r = Ja;
          t && ro(e, t)
            ? no(r, n)
            : ((e.flags = (-4097 & e.flags) | 2), (eo = !1), (Ja = e));
        }
      } else {
        if (io(e)) throw Error(ne(418));
        (e.flags = (-4097 & e.flags) | 2), (eo = !1), (Ja = e);
      }
    }
  }
  function oo(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    Ja = e;
  }
  function lo(e) {
    if (e !== Ja) return !1;
    if (!eo) return oo(e), (eo = !0), !1;
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !Ji(e.type, e.memoizedProps)),
      t && (t = Za))
    ) {
      if (io(e)) throw (so(), Error(ne(418)));
      for (; t; ) no(e, t), (t = aa(t.nextSibling));
    }
    if ((oo(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(ne(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n) {
              if (0 === t) {
                Za = aa(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
          }
          e = e.nextSibling;
        }
        Za = null;
      }
    } else Za = Ja ? aa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function so() {
    for (var e = Za; e; ) e = aa(e.nextSibling);
  }
  function uo() {
    (Za = Ja = null), (eo = !1);
  }
  function co(e) {
    null === to ? (to = [e]) : to.push(e);
  }
  var fo = ge.ReactCurrentBatchConfig;
  function po(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = Ie({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var ho = wa(null),
    mo = null,
    vo = null,
    go = null;
  function yo() {
    go = vo = mo = null;
  }
  function bo(e) {
    var t = ho.current;
    xa(ho), (e._currentValue = t);
  }
  function wo(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function xo(e, t) {
    (mo = e),
      (go = vo = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (e.lanes & t && (vs = !0), (e.firstContext = null));
  }
  function So(e) {
    var t = e._currentValue;
    if (go !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === vo)) {
        if (null === mo) throw Error(ne(308));
        (vo = e), (mo.dependencies = { lanes: 0, firstContext: e });
      } else vo = vo.next = e;
    return t;
  }
  var Eo = null;
  function ko(e) {
    null === Eo ? (Eo = [e]) : Eo.push(e);
  }
  function Co(e, t, n, r) {
    var i = t.interleaved;
    return (
      null === i ? ((n.next = n), ko(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      To(e, r)
    );
  }
  function To(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  var Po = !1;
  function _o(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Oo(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lo(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function No(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & Cu)) {
      var i = r.pending;
      return (
        null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        To(e, n)
      );
    }
    return (
      null === (i = r.interleaved)
        ? ((t.next = t), ko(r))
        : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      To(e, n)
    );
  }
  function Mo(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), mn(e, n);
    }
  }
  function zo(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var i = null,
        a = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
        } while (null !== n);
        null === a ? (i = a = t) : (a = a.next = t);
      } else i = a = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Io(e, t, n, r) {
    var i = e.updateQueue;
    Po = !1;
    var a = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      l = i.shared.pending;
    if (null !== l) {
      i.shared.pending = null;
      var s = l,
        u = s.next;
      (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
      var c = e.alternate;
      null !== c &&
        (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
        (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s));
    }
    if (null !== a) {
      var d = i.baseState;
      for (o = 0, c = u = s = null, l = a; ; ) {
        var f = l.lane,
          p = l.eventTime;
        if ((r & f) === f) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              });
          e: {
            var h = e,
              m = l;
            switch (((f = t), (p = n), m.tag)) {
              case 1:
                if ("function" == typeof (h = m.payload)) {
                  d = h.call(p, d, f);
                  break e;
                }
                d = h;
                break e;
              case 3:
                h.flags = (-65537 & h.flags) | 128;
              case 0:
                if (
                  null ==
                  (f =
                    "function" == typeof (h = m.payload) ? h.call(p, d, f) : h)
                )
                  break e;
                d = Ie({}, d, f);
                break e;
              case 2:
                Po = !0;
            }
          }
          null !== l.callback &&
            0 !== l.lane &&
            ((e.flags |= 64),
            null === (f = i.effects) ? (i.effects = [l]) : f.push(l));
        } else
          (p = {
            eventTime: p,
            lane: f,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }),
            null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
            (o |= f);
        if (null === (l = l.next)) {
          if (null === (l = i.shared.pending)) break;
          (l = (f = l).next),
            (f.next = null),
            (i.lastBaseUpdate = f),
            (i.shared.pending = null);
        }
      }
      if (
        (null === c && (s = d),
        (i.baseState = s),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        null !== (t = i.shared.interleaved))
      ) {
        i = t;
        do {
          (o |= i.lane), (i = i.next);
        } while (i !== t);
      } else null === a && (i.shared.lanes = 0);
      (zu |= o), (e.lanes = o), (e.memoizedState = d);
    }
  }
  function jo(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (null !== i) {
          if (((r.callback = null), (r = n), "function" != typeof i))
            throw Error(ne(191, i));
          i.call(r);
        }
      }
  }
  var Ro = new ee.Component().refs;
  function Ao(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Ie({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  var Do = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Dt(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ku(),
        i = Ju(e),
        a = Lo(r, i);
      (a.payload = t),
        null != n && (a.callback = n),
        null !== (t = No(e, a, i)) && (Zu(t, e, i, r), Mo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ku(),
        i = Ju(e),
        a = Lo(r, i);
      (a.tag = 1),
        (a.payload = t),
        null != n && (a.callback = n),
        null !== (t = No(e, a, i)) && (Zu(t, e, i, r), Mo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ku(),
        r = Ju(e),
        i = Lo(n, r);
      (i.tag = 2),
        null != t && (i.callback = t),
        null !== (t = No(e, i, r)) && (Zu(t, e, r, n), Mo(t, e, r));
    },
  };
  function $o(e, t, n, r, i, a, o) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, a, o)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !ii(n, r) ||
          !ii(i, a);
  }
  function Fo(e, t, n) {
    var r = !1,
      i = Ea,
      a = t.contextType;
    return (
      "object" == typeof a && null !== a
        ? (a = So(a))
        : ((i = _a(t) ? Ta : ka.current),
          (a = (r = null != (r = t.contextTypes)) ? Pa(e, i) : Ea)),
      (t = new t(n, a)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Do),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function Bo(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Do.enqueueReplaceState(t, t.state, null);
  }
  function Uo(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Ro), _o(e);
    var a = t.contextType;
    "object" == typeof a && null !== a
      ? (i.context = So(a))
      : ((a = _a(t) ? Ta : ka.current), (i.context = Pa(e, a))),
      (i.state = e.memoizedState),
      "function" == typeof (a = t.getDerivedStateFromProps) &&
        (Ao(e, t, a, n), (i.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof i.getSnapshotBeforeUpdate ||
        ("function" != typeof i.UNSAFE_componentWillMount &&
          "function" != typeof i.componentWillMount) ||
        ((t = i.state),
        "function" == typeof i.componentWillMount && i.componentWillMount(),
        "function" == typeof i.UNSAFE_componentWillMount &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Do.enqueueReplaceState(i, i.state, null),
        Io(e, n, i, r),
        (i.state = e.memoizedState)),
      "function" == typeof i.componentDidMount && (e.flags |= 4194308);
  }
  function Vo(e, t, n) {
    if (
      null !== (e = n.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(ne(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(ne(147, e));
        var i = r,
          a = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === a
          ? t.ref
          : (((t = function (e) {
              var t = i.refs;
              t === Ro && (t = i.refs = {}),
                null === e ? delete t[a] : (t[a] = e);
            })._stringRef = a),
            t);
      }
      if ("string" != typeof e) throw Error(ne(284));
      if (!n._owner) throw Error(ne(290, e));
    }
    return e;
  }
  function Ho(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        ne(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Wo(e) {
    return (0, e._init)(e._payload);
  }
  function Go(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
    }
    function r(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
    }
    function i(e, t) {
      return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
    }
    function a(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function o(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
    }
    function l(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Ic(n, e.mode, r)).return = e), t)
        : (((t = i(t, n)).return = e), t);
    }
    function s(e, t, n, r) {
      var a = n.type;
      return a === we
        ? c(e, t, n.props.children, r, n.key)
        : null !== t &&
          (t.elementType === a ||
            ("object" == typeof a &&
              null !== a &&
              a.$$typeof === Oe &&
              Wo(a) === t.type))
        ? (((r = i(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
        : (((r = Nc(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
            e,
            t,
            n
          )),
          (r.return = e),
          r);
    }
    function u(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = jc(n, e.mode, r)).return = e), t)
        : (((t = i(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Mc(n, e.mode, r, a)).return = e), t)
        : (((t = i(t, n)).return = e), t);
    }
    function d(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return ((t = Ic("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case ye:
            return (
              ((n = Nc(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case be:
            return ((t = jc(t, e.mode, n)).return = e), t;
          case Oe:
            return d(e, (0, t._init)(t._payload), n);
        }
        if (Je(t) || Me(t)) return ((t = Mc(t, e.mode, n, null)).return = e), t;
        Ho(e, t);
      }
      return null;
    }
    function f(e, t, n, r) {
      var i = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== i ? null : l(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case ye:
            return n.key === i ? s(e, t, n, r) : null;
          case be:
            return n.key === i ? u(e, t, n, r) : null;
          case Oe:
            return f(e, t, (i = n._init)(n._payload), r);
        }
        if (Je(n) || Me(n)) return null !== i ? null : c(e, t, n, r, null);
        Ho(e, n);
      }
      return null;
    }
    function p(e, t, n, r, i) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return l(t, (e = e.get(n) || null), "" + r, i);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case ye:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
          case be:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
          case Oe:
            return p(e, t, n, (0, r._init)(r._payload), i);
        }
        if (Je(r) || Me(r)) return c(t, (e = e.get(n) || null), r, i, null);
        Ho(t, r);
      }
      return null;
    }
    return function l(s, u, c, h) {
      if (
        ("object" == typeof c &&
          null !== c &&
          c.type === we &&
          null === c.key &&
          (c = c.props.children),
        "object" == typeof c && null !== c)
      ) {
        switch (c.$$typeof) {
          case ye:
            e: {
              for (var m = c.key, v = u; null !== v; ) {
                if (v.key === m) {
                  if ((m = c.type) === we) {
                    if (7 === v.tag) {
                      n(s, v.sibling),
                        ((u = i(v, c.props.children)).return = s),
                        (s = u);
                      break e;
                    }
                  } else if (
                    v.elementType === m ||
                    ("object" == typeof m &&
                      null !== m &&
                      m.$$typeof === Oe &&
                      Wo(m) === v.type)
                  ) {
                    n(s, v.sibling),
                      ((u = i(v, c.props)).ref = Vo(s, v, c)),
                      (u.return = s),
                      (s = u);
                    break e;
                  }
                  n(s, v);
                  break;
                }
                t(s, v), (v = v.sibling);
              }
              c.type === we
                ? (((u = Mc(c.props.children, s.mode, h, c.key)).return = s),
                  (s = u))
                : (((h = Nc(c.type, c.key, c.props, null, s.mode, h)).ref = Vo(
                    s,
                    u,
                    c
                  )),
                  (h.return = s),
                  (s = h));
            }
            return o(s);
          case be:
            e: {
              for (v = c.key; null !== u; ) {
                if (u.key === v) {
                  if (
                    4 === u.tag &&
                    u.stateNode.containerInfo === c.containerInfo &&
                    u.stateNode.implementation === c.implementation
                  ) {
                    n(s, u.sibling),
                      ((u = i(u, c.children || [])).return = s),
                      (s = u);
                    break e;
                  }
                  n(s, u);
                  break;
                }
                t(s, u), (u = u.sibling);
              }
              ((u = jc(c, s.mode, h)).return = s), (s = u);
            }
            return o(s);
          case Oe:
            return l(s, u, (v = c._init)(c._payload), h);
        }
        if (Je(c))
          return (function (i, o, l, s) {
            for (
              var u = null, c = null, h = o, m = (o = 0), v = null;
              null !== h && m < l.length;
              m++
            ) {
              h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
              var g = f(i, h, l[m], s);
              if (null === g) {
                null === h && (h = v);
                break;
              }
              e && h && null === g.alternate && t(i, h),
                (o = a(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (h = v);
            }
            if (m === l.length) return n(i, h), eo && Ya(i, m), u;
            if (null === h) {
              for (; m < l.length; m++)
                null !== (h = d(i, l[m], s)) &&
                  ((o = a(h, o, m)),
                  null === c ? (u = h) : (c.sibling = h),
                  (c = h));
              return eo && Ya(i, m), u;
            }
            for (h = r(i, h); m < l.length; m++)
              null !== (v = p(h, i, m, l[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? m : v.key),
                (o = a(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(i, e);
                }),
              eo && Ya(i, m),
              u
            );
          })(s, u, c, h);
        if (Me(c))
          return (function (i, o, l, s) {
            var u = Me(l);
            if ("function" != typeof u) throw Error(ne(150));
            if (null == (l = u.call(l))) throw Error(ne(151));
            for (
              var c = (u = null), h = o, m = (o = 0), v = null, g = l.next();
              null !== h && !g.done;
              m++, g = l.next()
            ) {
              h.index > m ? ((v = h), (h = null)) : (v = h.sibling);
              var y = f(i, h, g.value, s);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(i, h),
                (o = a(y, o, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (h = v);
            }
            if (g.done) return n(i, h), eo && Ya(i, m), u;
            if (null === h) {
              for (; !g.done; m++, g = l.next())
                null !== (g = d(i, g.value, s)) &&
                  ((o = a(g, o, m)),
                  null === c ? (u = g) : (c.sibling = g),
                  (c = g));
              return eo && Ya(i, m), u;
            }
            for (h = r(i, h); !g.done; m++, g = l.next())
              null !== (g = p(h, i, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  h.delete(null === g.key ? m : g.key),
                (o = a(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                h.forEach(function (e) {
                  return t(i, e);
                }),
              eo && Ya(i, m),
              u
            );
          })(s, u, c, h);
        Ho(s, c);
      }
      return ("string" == typeof c && "" !== c) || "number" == typeof c
        ? ((c = "" + c),
          null !== u && 6 === u.tag
            ? (n(s, u.sibling), ((u = i(u, c)).return = s), (s = u))
            : (n(s, u), ((u = Ic(c, s.mode, h)).return = s), (s = u)),
          o(s))
        : n(s, u);
    };
  }
  var qo = Go(!0),
    Yo = Go(!1),
    Qo = {},
    Xo = wa(Qo),
    Ko = wa(Qo),
    Jo = wa(Qo);
  function Zo(e) {
    if (e === Qo) throw Error(ne(174));
    return e;
  }
  function el(e, t) {
    switch ((Sa(Jo, t), Sa(Ko, e), Sa(Xo, Qo), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : at(null, "");
        break;
      default:
        t = at(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    xa(Xo), Sa(Xo, t);
  }
  function tl() {
    xa(Xo), xa(Ko), xa(Jo);
  }
  function nl(e) {
    Zo(Jo.current);
    var t = Zo(Xo.current),
      n = at(t, e.type);
    t !== n && (Sa(Ko, e), Sa(Xo, n));
  }
  function rl(e) {
    Ko.current === e && (xa(Xo), xa(Ko));
  }
  var il = wa(0);
  function al(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
      } else if (null !== t.child) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ol = [];
  function ll() {
    for (var e = 0; e < ol.length; e++)
      ol[e]._workInProgressVersionPrimary = null;
    ol.length = 0;
  }
  var sl = ge.ReactCurrentDispatcher,
    ul = ge.ReactCurrentBatchConfig,
    cl = 0,
    dl = null,
    fl = null,
    pl = null,
    hl = !1,
    ml = !1,
    vl = 0,
    gl = 0;
  function yl() {
    throw Error(ne(321));
  }
  function bl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ri(e[n], t[n])) return !1;
    return !0;
  }
  function wl(e, t, n, r, i, a) {
    if (
      ((cl = a),
      (dl = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (sl.current = null === e || null === e.memoizedState ? rs : is),
      (e = n(r, i)),
      ml)
    ) {
      a = 0;
      do {
        if (((ml = !1), (vl = 0), 25 <= a)) throw Error(ne(301));
        (a += 1),
          (pl = fl = null),
          (t.updateQueue = null),
          (sl.current = as),
          (e = n(r, i));
      } while (ml);
    }
    if (
      ((sl.current = ns),
      (t = null !== fl && null !== fl.next),
      (cl = 0),
      (pl = fl = dl = null),
      (hl = !1),
      t)
    )
      throw Error(ne(300));
    return e;
  }
  function xl() {
    var e = 0 !== vl;
    return (vl = 0), e;
  }
  function Sl() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === pl ? (dl.memoizedState = pl = e) : (pl = pl.next = e), pl;
  }
  function El() {
    if (null === fl) {
      var e = dl.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = fl.next;
    var t = null === pl ? dl.memoizedState : pl.next;
    if (null !== t) (pl = t), (fl = e);
    else {
      if (null === e) throw Error(ne(310));
      (e = {
        memoizedState: (fl = e).memoizedState,
        baseState: fl.baseState,
        baseQueue: fl.baseQueue,
        queue: fl.queue,
        next: null,
      }),
        null === pl ? (dl.memoizedState = pl = e) : (pl = pl.next = e);
    }
    return pl;
  }
  function kl(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Cl(e) {
    var t = El(),
      n = t.queue;
    if (null === n) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = fl,
      i = r.baseQueue,
      a = n.pending;
    if (null !== a) {
      if (null !== i) {
        var o = i.next;
        (i.next = a.next), (a.next = o);
      }
      (r.baseQueue = i = a), (n.pending = null);
    }
    if (null !== i) {
      (a = i.next), (r = r.baseState);
      var l = (o = null),
        s = null,
        u = a;
      do {
        var c = u.lane;
        if ((cl & c) === c)
          null !== s &&
            (s = s.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var d = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
            (dl.lanes |= c),
            (zu |= c);
        }
        u = u.next;
      } while (null !== u && u !== a);
      null === s ? (o = r) : (s.next = l),
        ri(r, t.memoizedState) || (vs = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
      i = e;
      do {
        (a = i.lane), (dl.lanes |= a), (zu |= a), (i = i.next);
      } while (i !== e);
    } else null === i && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Tl(e) {
    var t = El(),
      n = t.queue;
    if (null === n) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      a = t.memoizedState;
    if (null !== i) {
      n.pending = null;
      var o = (i = i.next);
      do {
        (a = e(a, o.action)), (o = o.next);
      } while (o !== i);
      ri(a, t.memoizedState) || (vs = !0),
        (t.memoizedState = a),
        null === t.baseQueue && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function Pl() {}
  function _l(e, t) {
    var n = dl,
      r = El(),
      i = t(),
      a = !ri(r.memoizedState, i);
    if (
      (a && ((r.memoizedState = i), (vs = !0)),
      (r = r.queue),
      Fl(Nl.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (null !== pl && 1 & pl.memoizedState.tag))
    ) {
      if (
        ((n.flags |= 2048),
        jl(9, Ll.bind(null, n, r, i, t), void 0, null),
        null === Tu)
      )
        throw Error(ne(349));
      30 & cl || Ol(n, t, i);
    }
    return i;
  }
  function Ol(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = dl.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (dl.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
  }
  function Ll(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ml(t) && zl(e);
  }
  function Nl(e, t, n) {
    return n(function () {
      Ml(t) && zl(e);
    });
  }
  function Ml(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ri(e, n);
    } catch {
      return !0;
    }
  }
  function zl(e) {
    var t = To(e, 1);
    null !== t && Zu(t, e, 1, -1);
  }
  function Il(e) {
    var t = Sl();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kl,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Jl.bind(null, dl, e)),
      [t.memoizedState, e]
    );
  }
  function jl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = dl.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (dl.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Rl() {
    return El().memoizedState;
  }
  function Al(e, t, n, r) {
    var i = Sl();
    (dl.flags |= e),
      (i.memoizedState = jl(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function Dl(e, t, n, r) {
    var i = El();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== fl) {
      var o = fl.memoizedState;
      if (((a = o.destroy), null !== r && bl(r, o.deps)))
        return void (i.memoizedState = jl(t, n, a, r));
    }
    (dl.flags |= e), (i.memoizedState = jl(1 | t, n, a, r));
  }
  function $l(e, t) {
    return Al(8390656, 8, e, t);
  }
  function Fl(e, t) {
    return Dl(2048, 8, e, t);
  }
  function Bl(e, t) {
    return Dl(4, 2, e, t);
  }
  function Ul(e, t) {
    return Dl(4, 4, e, t);
  }
  function Vl(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
  }
  function Hl(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), Dl(4, 4, Vl.bind(null, t, e), n)
    );
  }
  function Wl() {}
  function Gl(e, t) {
    var n = El();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && bl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ql(e, t) {
    var n = El();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && bl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Yl(e, t, n) {
    return 21 & cl
      ? (ri(n, t) ||
          ((n = fn()), (dl.lanes |= n), (zu |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (vs = !0)), (e.memoizedState = n));
  }
  function Ql(e, t) {
    var n = vn;
    (vn = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = ul.transition;
    ul.transition = {};
    try {
      e(!1), t();
    } finally {
      (vn = n), (ul.transition = r);
    }
  }
  function Xl() {
    return El().memoizedState;
  }
  function Kl(e, t, n) {
    var r = Ju(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Zl(e))
    )
      es(t, n);
    else if (null !== (n = Co(e, t, n, r))) {
      Zu(n, e, r, Ku()), ts(n, t, r);
    }
  }
  function Jl(e, t, n) {
    var r = Ju(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Zl(e)) es(t, i);
    else {
      var a = e.alternate;
      if (
        0 === e.lanes &&
        (null === a || 0 === a.lanes) &&
        null !== (a = t.lastRenderedReducer)
      )
        try {
          var o = t.lastRenderedState,
            l = a(o, n);
          if (((i.hasEagerState = !0), (i.eagerState = l), ri(l, o))) {
            var s = t.interleaved;
            return (
              null === s
                ? ((i.next = i), ko(t))
                : ((i.next = s.next), (s.next = i)),
              void (t.interleaved = i)
            );
          }
        } catch {}
      null !== (n = Co(e, t, i, r)) && (Zu(n, e, r, (i = Ku())), ts(n, t, r));
    }
  }
  function Zl(e) {
    var t = e.alternate;
    return e === dl || (null !== t && t === dl);
  }
  function es(e, t) {
    ml = hl = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ts(e, t, n) {
    if (4194240 & n) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), mn(e, n);
    }
  }
  var ns = {
      readContext: So,
      useCallback: yl,
      useContext: yl,
      useEffect: yl,
      useImperativeHandle: yl,
      useInsertionEffect: yl,
      useLayoutEffect: yl,
      useMemo: yl,
      useReducer: yl,
      useRef: yl,
      useState: yl,
      useDebugValue: yl,
      useDeferredValue: yl,
      useTransition: yl,
      useMutableSource: yl,
      useSyncExternalStore: yl,
      useId: yl,
      unstable_isNewReconciler: !1,
    },
    rs = {
      readContext: So,
      useCallback: function (e, t) {
        return (Sl().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: So,
      useEffect: $l,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Al(4194308, 4, Vl.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Al(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Al(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Sl();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Sl();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Kl.bind(null, dl, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (Sl().memoizedState = e);
      },
      useState: Il,
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        return (Sl().memoizedState = e);
      },
      useTransition: function () {
        var e = Il(!1),
          t = e[0];
        return (e = Ql.bind(null, e[1])), (Sl().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = dl,
          i = Sl();
        if (eo) {
          if (void 0 === n) throw Error(ne(407));
          n = n();
        } else {
          if (((n = t()), null === Tu)) throw Error(ne(349));
          30 & cl || Ol(r, t, n);
        }
        i.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (i.queue = a),
          $l(Nl.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          jl(9, Ll.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Sl(),
          t = Tu.identifierPrefix;
        if (eo) {
          var n = qa;
          (t =
            ":" +
            t +
            "R" +
            (n = (Ga & ~(1 << (32 - nn(Ga) - 1))).toString(32) + n)),
            0 < (n = vl++) && (t += "H" + n.toString(32)),
            (t += ":");
        } else t = ":" + t + "r" + (n = gl++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    is = {
      readContext: So,
      useCallback: Gl,
      useContext: So,
      useEffect: Fl,
      useImperativeHandle: Hl,
      useInsertionEffect: Bl,
      useLayoutEffect: Ul,
      useMemo: ql,
      useReducer: Cl,
      useRef: Rl,
      useState: function () {
        return Cl(kl);
      },
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        return Yl(El(), fl.memoizedState, e);
      },
      useTransition: function () {
        return [Cl(kl)[0], El().memoizedState];
      },
      useMutableSource: Pl,
      useSyncExternalStore: _l,
      useId: Xl,
      unstable_isNewReconciler: !1,
    },
    as = {
      readContext: So,
      useCallback: Gl,
      useContext: So,
      useEffect: Fl,
      useImperativeHandle: Hl,
      useInsertionEffect: Bl,
      useLayoutEffect: Ul,
      useMemo: ql,
      useReducer: Tl,
      useRef: Rl,
      useState: function () {
        return Tl(kl);
      },
      useDebugValue: Wl,
      useDeferredValue: function (e) {
        var t = El();
        return null === fl ? (t.memoizedState = e) : Yl(t, fl.memoizedState, e);
      },
      useTransition: function () {
        return [Tl(kl)[0], El().memoizedState];
      },
      useMutableSource: Pl,
      useSyncExternalStore: _l,
      useId: Xl,
      unstable_isNewReconciler: !1,
    };
  function os(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += De(r)), (r = r.return);
      } while (r);
      var i = n;
    } catch (e) {
      i = "\nError generating stack: " + e.message + "\n" + e.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function ls(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ss(e, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  var us = "function" == typeof WeakMap ? WeakMap : Map;
  function cs(e, t, n) {
    ((n = Lo(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Bu || ((Bu = !0), (Uu = r)), ss(0, t);
      }),
      n
    );
  }
  function ds(e, t, n) {
    (n = Lo(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          ss(0, t);
        });
    }
    var a = e.stateNode;
    return (
      null !== a &&
        "function" == typeof a.componentDidCatch &&
        (n.callback = function () {
          ss(0, t),
            "function" != typeof r &&
              (null === Vu ? (Vu = new Set([this])) : Vu.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function fs(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new us();
      var i = new Set();
      r.set(t, i);
    } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Sc.bind(null, e, t, n)), t.then(e, e));
  }
  function ps(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function hs(e, t, n, r, i) {
    return 1 & e.mode
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Lo(-1, 1)).tag = 2), No(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var ms = ge.ReactCurrentOwner,
    vs = !1;
  function gs(e, t, n, r) {
    t.child = null === e ? Yo(t, null, n, r) : qo(t, e.child, n, r);
  }
  function ys(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return (
      xo(t, i),
      (r = wl(e, t, n, r, a, i)),
      (n = xl()),
      null === e || vs
        ? (eo && n && Xa(t), (t.flags |= 1), gs(e, t, r, i), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Bs(e, t, i))
    );
  }
  function bs(e, t, n, r, i) {
    if (null === e) {
      var a = n.type;
      return "function" != typeof a ||
        Oc(a) ||
        void 0 !== a.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Nc(n.type, null, r, t, t.mode, i)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = a), ws(e, t, a, r, i));
    }
    if (((a = e.child), !(e.lanes & i))) {
      var o = a.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : ii)(o, r) && e.ref === t.ref)
        return Bs(e, t, i);
    }
    return (
      (t.flags |= 1),
      ((e = Lc(a, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ws(e, t, n, r, i) {
    if (null !== e) {
      var a = e.memoizedProps;
      if (ii(a, r) && e.ref === t.ref) {
        if (((vs = !1), (t.pendingProps = r = a), 0 == (e.lanes & i)))
          return (t.lanes = e.lanes), Bs(e, t, i);
        131072 & e.flags && (vs = !0);
      }
    }
    return Es(e, t, n, r, i);
  }
  function xs(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (1 & t.mode) {
        if (!(1073741824 & n))
          return (
            (e = null !== a ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Sa(Lu, Ou),
            (Ou |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== a ? a.baseLanes : n),
          Sa(Lu, Ou),
          (Ou |= r);
      } else
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Sa(Lu, Ou),
          (Ou |= n);
    else
      null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Sa(Lu, Ou),
        (Ou |= r);
    return gs(e, t, i, n), t.child;
  }
  function Ss(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Es(e, t, n, r, i) {
    var a = _a(n) ? Ta : ka.current;
    return (
      (a = Pa(t, a)),
      xo(t, i),
      (n = wl(e, t, n, r, a, i)),
      (r = xl()),
      null === e || vs
        ? (eo && r && Xa(t), (t.flags |= 1), gs(e, t, n, i), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Bs(e, t, i))
    );
  }
  function ks(e, t, n, r, i) {
    if (_a(n)) {
      var a = !0;
      Ma(t);
    } else a = !1;
    if ((xo(t, i), null === t.stateNode))
      Fs(e, t), Fo(t, n, r), Uo(t, n, r, i), (r = !0);
    else if (null === e) {
      var o = t.stateNode,
        l = t.memoizedProps;
      o.props = l;
      var s = o.context,
        u = n.contextType;
      "object" == typeof u && null !== u
        ? (u = So(u))
        : (u = Pa(t, (u = _a(n) ? Ta : ka.current)));
      var c = n.getDerivedStateFromProps,
        d =
          "function" == typeof c ||
          "function" == typeof o.getSnapshotBeforeUpdate;
      d ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((l !== r || s !== u) && Bo(t, o, r, u)),
        (Po = !1);
      var f = t.memoizedState;
      (o.state = f),
        Io(t, r, o, i),
        (s = t.memoizedState),
        l !== r || f !== s || Ca.current || Po
          ? ("function" == typeof c && (Ao(t, n, c, r), (s = t.memoizedState)),
            (l = Po || $o(t, n, l, r, f, s, u))
              ? (d ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ("function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount()),
                "function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = u),
            (r = l))
          : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        Oo(e, t),
        (l = t.memoizedProps),
        (u = t.type === t.elementType ? l : po(t.type, l)),
        (o.props = u),
        (d = t.pendingProps),
        (f = o.context),
        "object" == typeof (s = n.contextType) && null !== s
          ? (s = So(s))
          : (s = Pa(t, (s = _a(n) ? Ta : ka.current)));
      var p = n.getDerivedStateFromProps;
      (c =
        "function" == typeof p ||
        "function" == typeof o.getSnapshotBeforeUpdate) ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((l !== d || f !== s) && Bo(t, o, r, s)),
        (Po = !1),
        (f = t.memoizedState),
        (o.state = f),
        Io(t, r, o, i);
      var h = t.memoizedState;
      l !== d || f !== h || Ca.current || Po
        ? ("function" == typeof p && (Ao(t, n, p, r), (h = t.memoizedState)),
          (u = Po || $o(t, n, u, r, f, h, s) || !1)
            ? (c ||
                ("function" != typeof o.UNSAFE_componentWillUpdate &&
                  "function" != typeof o.componentWillUpdate) ||
                ("function" == typeof o.componentWillUpdate &&
                  o.componentWillUpdate(r, h, s),
                "function" == typeof o.UNSAFE_componentWillUpdate &&
                  o.UNSAFE_componentWillUpdate(r, h, s)),
              "function" == typeof o.componentDidUpdate && (t.flags |= 4),
              "function" == typeof o.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof o.componentDidUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (o.props = r),
          (o.state = h),
          (o.context = s),
          (r = u))
        : ("function" != typeof o.componentDidUpdate ||
            (l === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof o.getSnapshotBeforeUpdate ||
            (l === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Cs(e, t, n, r, a, i);
  }
  function Cs(e, t, n, r, i, a) {
    Ss(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return i && za(t, n, !1), Bs(e, t, a);
    (r = t.stateNode), (ms.current = t);
    var l =
      o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && o
        ? ((t.child = qo(t, e.child, null, a)), (t.child = qo(t, null, l, a)))
        : gs(e, t, l, a),
      (t.memoizedState = r.state),
      i && za(t, n, !0),
      t.child
    );
  }
  function Ts(e) {
    var t = e.stateNode;
    t.pendingContext
      ? La(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && La(0, t.context, !1),
      el(e, t.containerInfo);
  }
  function Ps(e, t, n, r, i) {
    return uo(), co(i), (t.flags |= 256), gs(e, t, n, r), t.child;
  }
  var _s,
    Os,
    Ls,
    Ns,
    Ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Is(e, t, n) {
    var r,
      i = t.pendingProps,
      a = il.current,
      o = !1,
      l = 0 != (128 & t.flags);
    if (
      ((r = l) ||
        (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
      r
        ? ((o = !0), (t.flags &= -129))
        : (null === e || null !== e.memoizedState) && (a |= 1),
      Sa(il, 1 & a),
      null === e)
    )
      return (
        ao(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (1 & t.mode
              ? "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((l = i.children),
            (e = i.fallback),
            o
              ? ((i = t.mode),
                (o = t.child),
                (l = { mode: "hidden", children: l }),
                1 & i || null === o
                  ? (o = zc(l, i, 0, null))
                  : ((o.childLanes = 0), (o.pendingProps = l)),
                (e = Mc(e, i, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = zs(n)),
                (t.memoizedState = Ms),
                e)
              : js(t, l))
      );
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
      return (function (e, t, n, r, i, a, o) {
        if (n)
          return 256 & t.flags
            ? ((t.flags &= -257), (r = ls(Error(ne(422)))), Rs(e, t, o, r))
            : null !== t.memoizedState
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((a = r.fallback),
              (i = t.mode),
              (r = zc({ mode: "visible", children: r.children }, i, 0, null)),
              (a = Mc(a, i, o, null)),
              (a.flags |= 2),
              (r.return = t),
              (a.return = t),
              (r.sibling = a),
              (t.child = r),
              1 & t.mode && qo(t, e.child, null, o),
              (t.child.memoizedState = zs(o)),
              (t.memoizedState = Ms),
              a);
        if (!(1 & t.mode)) return Rs(e, t, o, null);
        if ("$!" === i.data) {
          if ((r = i.nextSibling && i.nextSibling.dataset)) var l = r.dgst;
          return (
            (r = l), Rs(e, t, o, (r = ls((a = Error(ne(419))), r, void 0)))
          );
        }
        if (((l = 0 != (o & e.childLanes)), vs || l)) {
          if (null !== (r = Tu)) {
            switch (o & -o) {
              case 4:
                i = 2;
                break;
              case 16:
                i = 8;
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
                i = 32;
                break;
              case 536870912:
                i = 268435456;
                break;
              default:
                i = 0;
            }
            0 !== (i = i & (r.suspendedLanes | o) ? 0 : i) &&
              i !== a.retryLane &&
              ((a.retryLane = i), To(e, i), Zu(r, e, i, -1));
          }
          return fc(), Rs(e, t, o, (r = ls(Error(ne(421)))));
        }
        return "$?" === i.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = kc.bind(null, e)),
            (i._reactRetry = t),
            null)
          : ((e = a.treeContext),
            (Za = aa(i.nextSibling)),
            (Ja = t),
            (eo = !0),
            (to = null),
            null !== e &&
              ((Va[Ha++] = Ga),
              (Va[Ha++] = qa),
              (Va[Ha++] = Wa),
              (Ga = e.id),
              (qa = e.overflow),
              (Wa = t)),
            (t = js(t, r.children)),
            (t.flags |= 4096),
            t);
      })(e, t, l, i, r, a, n);
    if (o) {
      (o = i.fallback), (l = t.mode), (r = (a = e.child).sibling);
      var s = { mode: "hidden", children: i.children };
      return (
        1 & l || t.child === a
          ? ((i = Lc(a, s)).subtreeFlags = 14680064 & a.subtreeFlags)
          : (((i = t.child).childLanes = 0),
            (i.pendingProps = s),
            (t.deletions = null)),
        null !== r ? (o = Lc(r, o)) : ((o = Mc(o, l, n, null)).flags |= 2),
        (o.return = t),
        (i.return = t),
        (i.sibling = o),
        (t.child = i),
        (i = o),
        (o = t.child),
        (l =
          null === (l = e.child.memoizedState)
            ? zs(n)
            : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              }),
        (o.memoizedState = l),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ms),
        i
      );
    }
    return (
      (e = (o = e.child).sibling),
      (i = Lc(o, { mode: "visible", children: i.children })),
      !(1 & t.mode) && (i.lanes = n),
      (i.return = t),
      (i.sibling = null),
      null !== e &&
        (null === (n = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : n.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function js(e, t) {
    return (
      ((t = zc({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Rs(e, t, n, r) {
    return (
      null !== r && co(r),
      qo(t, e.child, null, n),
      ((e = js(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function As(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), wo(e.return, t, n);
  }
  function Ds(e, t, n, r, i) {
    var a = e.memoizedState;
    null === a
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = i));
  }
  function $s(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      a = r.tail;
    if ((gs(e, t, r.children, n), 2 & (r = il.current)))
      (r = (1 & r) | 2), (t.flags |= 128);
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && As(e, n, t);
          else if (19 === e.tag) As(e, n, t);
          else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Sa(il, r), 1 & t.mode))
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; null !== n; )
            null !== (e = n.alternate) && null === al(e) && (i = n),
              (n = n.sibling);
          null === (n = i)
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
            Ds(t, !1, i, n, a);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; null !== i; ) {
            if (null !== (e = i.alternate) && null === al(e)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Ds(t, !0, n, null, a);
          break;
        case "together":
          Ds(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    else t.memoizedState = null;
    return t.child;
  }
  function Fs(e, t) {
    !(1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Bs(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (zu |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(ne(153));
    if (null !== t.child) {
      for (
        n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Us(e, t) {
    if (!eo)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Vs(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; null !== i; )
        (n |= i.lanes | i.childLanes),
          (r |= 14680064 & i.subtreeFlags),
          (r |= 14680064 & i.flags),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; null !== i; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Hs(e, t, n) {
    var r = t.pendingProps;
    switch ((Ka(t), t.tag)) {
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
        return Vs(t), null;
      case 1:
      case 17:
        return _a(t.type) && Oa(), Vs(t), null;
      case 3:
        return (
          (r = t.stateNode),
          tl(),
          xa(Ca),
          xa(ka),
          ll(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null === e || null === e.child) &&
            (lo(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), null !== to && (rc(to), (to = null)))),
          Os(e, t),
          Vs(t),
          null
        );
      case 5:
        rl(t);
        var i = Zo(Jo.current);
        if (((n = t.type), null !== e && null != t.stateNode))
          Ls(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(ne(166));
            return Vs(t), null;
          }
          if (((e = Zo(Xo.current)), lo(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[sa] = t), (r[ua] = a), (e = 0 != (1 & t.mode)), n)) {
              case "dialog":
                ji("cancel", r), ji("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ji("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ni.length; i++) ji(Ni[i], r);
                break;
              case "source":
                ji("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ji("error", r), ji("load", r);
                break;
              case "details":
                ji("toggle", r);
                break;
              case "input":
                qe(r, a), ji("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!a.multiple }),
                  ji("invalid", r);
                break;
              case "textarea":
                tt(r, a), ji("invalid", r);
            }
            for (var o in (ht(n, a), (i = null), a))
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                "children" === o
                  ? "string" == typeof l
                    ? r.textContent !== l &&
                      (!0 !== a.suppressHydrationWarning &&
                        Yi(r.textContent, l, e),
                      (i = ["children", l]))
                    : "number" == typeof l &&
                      r.textContent !== "" + l &&
                      (!0 !== a.suppressHydrationWarning &&
                        Yi(r.textContent, l, e),
                      (i = ["children", "" + l]))
                  : ie.hasOwnProperty(o) &&
                    null != l &&
                    "onScroll" === o &&
                    ji("scroll", r);
              }
            switch (n) {
              case "input":
                Ve(r), Xe(r, a, !0);
                break;
              case "textarea":
                Ve(r), rt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof a.onClick && (r.onclick = Qi);
            }
            (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
          } else {
            (o = 9 === i.nodeType ? i : i.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = it(n)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === n
                  ? (((e = o.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof r.is
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    "select" === n &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[sa] = t),
              (e[ua] = r),
              _s(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = mt(n, r)), n)) {
                case "dialog":
                  ji("cancel", e), ji("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ji("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Ni.length; i++) ji(Ni[i], e);
                  i = r;
                  break;
                case "source":
                  ji("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ji("error", e), ji("load", e), (i = r);
                  break;
                case "details":
                  ji("toggle", e), (i = r);
                  break;
                case "input":
                  qe(e, r), (i = Ge(e, r)), ji("invalid", e);
                  break;
                case "option":
                default:
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = Ie({}, r, { value: void 0 })),
                    ji("invalid", e);
                  break;
                case "textarea":
                  tt(e, r), (i = et(e, r)), ji("invalid", e);
              }
              for (a in (ht(n, i), (l = i)))
                if (l.hasOwnProperty(a)) {
                  var s = l[a];
                  "style" === a
                    ? ft(e, s)
                    : "dangerouslySetInnerHTML" === a
                    ? null != (s = s ? s.__html : void 0) && lt(e, s)
                    : "children" === a
                    ? "string" == typeof s
                      ? ("textarea" !== n || "" !== s) && st(e, s)
                      : "number" == typeof s && st(e, "" + s)
                    : "suppressContentEditableWarning" !== a &&
                      "suppressHydrationWarning" !== a &&
                      "autoFocus" !== a &&
                      (ie.hasOwnProperty(a)
                        ? null != s && "onScroll" === a && ji("scroll", e)
                        : null != s && ve(e, a, s, o));
                }
              switch (n) {
                case "input":
                  Ve(e), Xe(e, r, !1);
                  break;
                case "textarea":
                  Ve(e), rt(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + Be(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (a = r.value)
                      ? Ze(e, !!r.multiple, a, !1)
                      : null != r.defaultValue &&
                        Ze(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof i.onClick && (e.onclick = Qi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Vs(t), null;
      case 6:
        if (e && null != t.stateNode) Ns(e, t, e.memoizedProps, r);
        else {
          if ("string" != typeof r && null === t.stateNode)
            throw Error(ne(166));
          if (((n = Zo(Jo.current)), Zo(Xo.current), lo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[sa] = t),
              (a = r.nodeValue !== n) && null !== (e = Ja))
            )
              switch (e.tag) {
                case 3:
                  Yi(r.nodeValue, n, 0 != (1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    Yi(r.nodeValue, n, 0 != (1 & e.mode));
              }
            a && (t.flags |= 4);
          } else
            ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
              sa
            ] = t),
              (t.stateNode = r);
        }
        return Vs(t), null;
      case 13:
        if (
          (xa(il),
          (r = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (eo && null !== Za && 1 & t.mode && !(128 & t.flags))
            so(), uo(), (t.flags |= 98560), (a = !1);
          else if (((a = lo(t)), null !== r && null !== r.dehydrated)) {
            if (null === e) {
              if (!a) throw Error(ne(318));
              if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                throw Error(ne(317));
              a[sa] = t;
            } else
              uo(),
                !(128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4);
            Vs(t), (a = !1);
          } else null !== to && (rc(to), (to = null)), (a = !0);
          if (!a) return 65536 & t.flags ? t : null;
        }
        return 128 & t.flags
          ? ((t.lanes = n), t)
          : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
              r &&
              ((t.child.flags |= 8192),
              1 & t.mode &&
                (null === e || 1 & il.current ? 0 === Nu && (Nu = 3) : fc())),
            null !== t.updateQueue && (t.flags |= 4),
            Vs(t),
            null);
      case 4:
        return (
          tl(),
          Os(e, t),
          null === e && Di(t.stateNode.containerInfo),
          Vs(t),
          null
        );
      case 10:
        return bo(t.type._context), Vs(t), null;
      case 19:
        if ((xa(il), null === (a = t.memoizedState))) return Vs(t), null;
        if (((r = 0 != (128 & t.flags)), null === (o = a.rendering)))
          if (r) Us(a, !1);
          else {
            if (0 !== Nu || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e; ) {
                if (null !== (o = al(e))) {
                  for (
                    t.flags |= 128,
                      Us(a, !1),
                      null !== (r = o.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (e = r),
                      ((a = n).flags &= 14680066),
                      null === (o = a.alternate)
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = o.childLanes),
                          (a.lanes = o.lanes),
                          (a.child = o.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = o.memoizedProps),
                          (a.memoizedState = o.memoizedState),
                          (a.updateQueue = o.updateQueue),
                          (a.type = o.type),
                          (e = o.dependencies),
                          (a.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Sa(il, (1 & il.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== a.tail &&
              qt() > $u &&
              ((t.flags |= 128), (r = !0), Us(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (null !== (e = al(o))) {
              if (
                ((t.flags |= 128),
                (r = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Us(a, !0),
                null === a.tail &&
                  "hidden" === a.tailMode &&
                  !o.alternate &&
                  !eo)
              )
                return Vs(t), null;
            } else
              2 * qt() - a.renderingStartTime > $u &&
                1073741824 !== n &&
                ((t.flags |= 128), (r = !0), Us(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : (null !== (n = a.last) ? (n.sibling = o) : (t.child = o),
              (a.last = o));
        }
        return null !== a.tail
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = qt()),
            (t.sibling = null),
            (n = il.current),
            Sa(il, r ? (1 & n) | 2 : 1 & n),
            t)
          : (Vs(t), null);
      case 22:
      case 23:
        return (
          sc(),
          (r = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
          r && 1 & t.mode
            ? 1073741824 & Ou &&
              (Vs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : Vs(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(ne(156, t.tag));
  }
  function Ws(e, t) {
    switch ((Ka(t), t.tag)) {
      case 1:
        return (
          _a(t.type) && Oa(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          tl(),
          xa(Ca),
          xa(ka),
          ll(),
          65536 & (e = t.flags) && !(128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return rl(t), null;
      case 13:
        if ((xa(il), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(ne(340));
          uo();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return xa(il), null;
      case 4:
        return tl(), null;
      case 10:
        return bo(t.type._context), null;
      case 22:
      case 23:
        return sc(), null;
      default:
        return null;
    }
  }
  (_s = function (e, t) {
    for (var n = t.child; null !== n; ) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Os = function () {}),
    (Ls = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), Zo(Xo.current);
        var a,
          o = null;
        switch (n) {
          case "input":
            (i = Ge(e, i)), (r = Ge(e, r)), (o = []);
            break;
          case "select":
            (i = Ie({}, i, { value: void 0 })),
              (r = Ie({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (i = et(e, i)), (r = et(e, r)), (o = []);
            break;
          default:
            "function" != typeof i.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = Qi);
        }
        for (u in (ht(n, r), (n = null), i))
          if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
            if ("style" === u) {
              var l = i[u];
              for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              "dangerouslySetInnerHTML" !== u &&
                "children" !== u &&
                "suppressContentEditableWarning" !== u &&
                "suppressHydrationWarning" !== u &&
                "autoFocus" !== u &&
                (ie.hasOwnProperty(u)
                  ? o || (o = [])
                  : (o = o || []).push(u, null));
        for (u in r) {
          var s = r[u];
          if (
            ((l = null != i ? i[u] : void 0),
            r.hasOwnProperty(u) && s !== l && (null != s || null != l))
          )
            if ("style" === u)
              if (l) {
                for (a in l)
                  !l.hasOwnProperty(a) ||
                    (s && s.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in s)
                  s.hasOwnProperty(a) &&
                    l[a] !== s[a] &&
                    (n || (n = {}), (n[a] = s[a]));
              } else n || (o || (o = []), o.push(u, n)), (n = s);
            else
              "dangerouslySetInnerHTML" === u
                ? ((s = s ? s.__html : void 0),
                  (l = l ? l.__html : void 0),
                  null != s && l !== s && (o = o || []).push(u, s))
                : "children" === u
                ? ("string" != typeof s && "number" != typeof s) ||
                  (o = o || []).push(u, "" + s)
                : "suppressContentEditableWarning" !== u &&
                  "suppressHydrationWarning" !== u &&
                  (ie.hasOwnProperty(u)
                    ? (null != s && "onScroll" === u && ji("scroll", e),
                      o || l === s || (o = []))
                    : (o = o || []).push(u, s));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (Ns = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  var Gs = !1,
    qs = !1,
    Ys = "function" == typeof WeakSet ? WeakSet : Set,
    Qs = null;
  function Xs(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (n) {
          xc(e, t, n);
        }
      else n.current = null;
  }
  function Ks(e, t, n) {
    try {
      n();
    } catch (n) {
      xc(e, t, n);
    }
  }
  var Js = !1;
  function Zs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var a = i.destroy;
          (i.destroy = void 0), void 0 !== a && Ks(t, n, a);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function eu(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function tu(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
    }
  }
  function nu(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), nu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[sa], delete t[ua], delete t[da], delete t[fa], delete t[pa]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ru(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function iu(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || ru(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function au(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = Qi));
    else if (4 !== r && null !== (e = e.child))
      for (au(e, t, n), e = e.sibling; null !== e; )
        au(e, t, n), (e = e.sibling);
  }
  function ou(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (ou(e, t, n), e = e.sibling; null !== e; )
        ou(e, t, n), (e = e.sibling);
  }
  var lu = null,
    su = !1;
  function uu(e, t, n) {
    for (n = n.child; null !== n; ) cu(e, t, n), (n = n.sibling);
  }
  function cu(e, t, n) {
    if (tn && "function" == typeof tn.onCommitFiberUnmount)
      try {
        tn.onCommitFiberUnmount(en, n);
      } catch {}
    switch (n.tag) {
      case 5:
        qs || Xs(n, t);
      case 6:
        var r = lu,
          i = su;
        (lu = null),
          uu(e, t, n),
          (su = i),
          null !== (lu = r) &&
            (su
              ? ((e = lu),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : lu.removeChild(n.stateNode));
        break;
      case 18:
        null !== lu &&
          (su
            ? ((e = lu),
              (n = n.stateNode),
              8 === e.nodeType
                ? ia(e.parentNode, n)
                : 1 === e.nodeType && ia(e, n),
              $n(e))
            : ia(lu, n.stateNode));
        break;
      case 4:
        (r = lu),
          (i = su),
          (lu = n.stateNode.containerInfo),
          (su = !0),
          uu(e, t, n),
          (lu = r),
          (su = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !qs &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          i = r = r.next;
          do {
            var a = i,
              o = a.destroy;
            (a = a.tag),
              void 0 !== o && (2 & a || 4 & a) && Ks(n, t, o),
              (i = i.next);
          } while (i !== r);
        }
        uu(e, t, n);
        break;
      case 1:
        if (
          !qs &&
          (Xs(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (e) {
            xc(n, t, e);
          }
        uu(e, t, n);
        break;
      case 21:
        uu(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((qs = (r = qs) || null !== n.memoizedState), uu(e, t, n), (qs = r))
          : uu(e, t, n);
        break;
      default:
        uu(e, t, n);
    }
  }
  function du(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new Ys()),
        t.forEach(function (t) {
          var r = Cc.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function fu(e, t) {
    var n = t.deletions;
    if (null !== n)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var a = e,
            o = t,
            l = o;
          e: for (; null !== l; ) {
            switch (l.tag) {
              case 5:
                (lu = l.stateNode), (su = !1);
                break e;
              case 3:
              case 4:
                (lu = l.stateNode.containerInfo), (su = !0);
                break e;
            }
            l = l.return;
          }
          if (null === lu) throw Error(ne(160));
          cu(a, o, i), (lu = null), (su = !1);
          var s = i.alternate;
          null !== s && (s.return = null), (i.return = null);
        } catch (e) {
          xc(i, t, e);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) pu(t, e), (t = t.sibling);
  }
  function pu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((fu(t, e), hu(e), 4 & r)) {
          try {
            Zs(3, e, e.return), eu(3, e);
          } catch (t) {
            xc(e, e.return, t);
          }
          try {
            Zs(5, e, e.return);
          } catch (t) {
            xc(e, e.return, t);
          }
        }
        break;
      case 1:
        fu(t, e), hu(e), 512 & r && null !== n && Xs(n, n.return);
        break;
      case 5:
        if (
          (fu(t, e),
          hu(e),
          512 & r && null !== n && Xs(n, n.return),
          32 & e.flags)
        ) {
          var i = e.stateNode;
          try {
            st(i, "");
          } catch (t) {
            xc(e, e.return, t);
          }
        }
        if (4 & r && null != (i = e.stateNode)) {
          var a = e.memoizedProps,
            o = null !== n ? n.memoizedProps : a,
            l = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), null !== s))
            try {
              "input" === l && "radio" === a.type && null != a.name && Ye(i, a),
                mt(l, o);
              var u = mt(l, a);
              for (o = 0; o < s.length; o += 2) {
                var c = s[o],
                  d = s[o + 1];
                "style" === c
                  ? ft(i, d)
                  : "dangerouslySetInnerHTML" === c
                  ? lt(i, d)
                  : "children" === c
                  ? st(i, d)
                  : ve(i, c, d, u);
              }
              switch (l) {
                case "input":
                  Qe(i, a);
                  break;
                case "textarea":
                  nt(i, a);
                  break;
                case "select":
                  var f = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!a.multiple;
                  var p = a.value;
                  null != p
                    ? Ze(i, !!a.multiple, p, !1)
                    : f !== !!a.multiple &&
                      (null != a.defaultValue
                        ? Ze(i, !!a.multiple, a.defaultValue, !0)
                        : Ze(i, !!a.multiple, a.multiple ? [] : "", !1));
              }
              i[ua] = a;
            } catch (t) {
              xc(e, e.return, t);
            }
        }
        break;
      case 6:
        if ((fu(t, e), hu(e), 4 & r)) {
          if (null === e.stateNode) throw Error(ne(162));
          (i = e.stateNode), (a = e.memoizedProps);
          try {
            i.nodeValue = a;
          } catch (t) {
            xc(e, e.return, t);
          }
        }
        break;
      case 3:
        if (
          (fu(t, e), hu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
        )
          try {
            $n(t.containerInfo);
          } catch (t) {
            xc(e, e.return, t);
          }
        break;
      case 4:
      default:
        fu(t, e), hu(e);
        break;
      case 13:
        fu(t, e),
          hu(e),
          8192 & (i = e.child).flags &&
            ((a = null !== i.memoizedState),
            (i.stateNode.isHidden = a),
            !a ||
              (null !== i.alternate && null !== i.alternate.memoizedState) ||
              (Du = qt())),
          4 & r && du(e);
        break;
      case 22:
        if (
          ((c = null !== n && null !== n.memoizedState),
          1 & e.mode ? ((qs = (u = qs) || c), fu(t, e), (qs = u)) : fu(t, e),
          hu(e),
          8192 & r)
        ) {
          if (
            ((u = null !== e.memoizedState),
            (e.stateNode.isHidden = u) && !c && 1 & e.mode)
          )
            for (Qs = e, c = e.child; null !== c; ) {
              for (d = Qs = c; null !== Qs; ) {
                switch (((p = (f = Qs).child), f.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Zs(4, f, f.return);
                    break;
                  case 1:
                    Xs(f, f.return);
                    var h = f.stateNode;
                    if ("function" == typeof h.componentWillUnmount) {
                      (r = f), (n = f.return);
                      try {
                        (t = r),
                          (h.props = t.memoizedProps),
                          (h.state = t.memoizedState),
                          h.componentWillUnmount();
                      } catch (e) {
                        xc(r, n, e);
                      }
                    }
                    break;
                  case 5:
                    Xs(f, f.return);
                    break;
                  case 22:
                    if (null !== f.memoizedState) {
                      yu(d);
                      continue;
                    }
                }
                null !== p ? ((p.return = f), (Qs = p)) : yu(d);
              }
              c = c.sibling;
            }
          e: for (c = null, d = e; ; ) {
            if (5 === d.tag) {
              if (null === c) {
                c = d;
                try {
                  (i = d.stateNode),
                    u
                      ? "function" == typeof (a = i.style).setProperty
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none")
                      : ((l = d.stateNode),
                        (o =
                          null != (s = d.memoizedProps.style) &&
                          s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (l.style.display = dt("display", o)));
                } catch (t) {
                  xc(e, e.return, t);
                }
              }
            } else if (6 === d.tag) {
              if (null === c)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (t) {
                  xc(e, e.return, t);
                }
            } else if (
              ((22 !== d.tag && 23 !== d.tag) ||
                null === d.memoizedState ||
                d === e) &&
              null !== d.child
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === e) break e;
            for (; null === d.sibling; ) {
              if (null === d.return || d.return === e) break e;
              c === d && (c = null), (d = d.return);
            }
            c === d && (c = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        fu(t, e), hu(e), 4 & r && du(e);
      case 21:
    }
  }
  function hu(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var n = e.return; null !== n; ) {
            if (ru(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(ne(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            32 & r.flags && (st(i, ""), (r.flags &= -33)), ou(e, iu(e), i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo;
            au(e, iu(e), a);
            break;
          default:
            throw Error(ne(161));
        }
      } catch (t) {
        xc(e, e.return, t);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function mu(e, t, n) {
    (Qs = e), vu(e);
  }
  function vu(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Qs; ) {
      var i = Qs,
        a = i.child;
      if (22 === i.tag && r) {
        var o = null !== i.memoizedState || Gs;
        if (!o) {
          var l = i.alternate,
            s = (null !== l && null !== l.memoizedState) || qs;
          l = Gs;
          var u = qs;
          if (((Gs = o), (qs = s) && !u))
            for (Qs = i; null !== Qs; )
              (s = (o = Qs).child),
                22 === o.tag && null !== o.memoizedState
                  ? bu(i)
                  : null !== s
                  ? ((s.return = o), (Qs = s))
                  : bu(i);
          for (; null !== a; ) (Qs = a), vu(a), (a = a.sibling);
          (Qs = i), (Gs = l), (qs = u);
        }
        gu(e);
      } else
        8772 & i.subtreeFlags && null !== a
          ? ((a.return = i), (Qs = a))
          : gu(e);
    }
  }
  function gu(e) {
    for (; null !== Qs; ) {
      var t = Qs;
      if (8772 & t.flags) {
        var n = t.alternate;
        try {
          if (8772 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qs || eu(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (4 & t.flags && !qs)
                  if (null === n) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : po(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                null !== a && jo(t, a, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (null !== o) {
                  if (((n = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode;
                    }
                  jo(t, o, n);
                }
                break;
              case 5:
                var l = t.stateNode;
                if (null === n && 4 & t.flags) {
                  n = l;
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
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var u = t.alternate;
                  if (null !== u) {
                    var c = u.memoizedState;
                    if (null !== c) {
                      var d = c.dehydrated;
                      null !== d && $n(d);
                    }
                  }
                }
                break;
              default:
                throw Error(ne(163));
            }
          qs || (512 & t.flags && tu(t));
        } catch (e) {
          xc(t, t.return, e);
        }
      }
      if (t === e) {
        Qs = null;
        break;
      }
      if (null !== (n = t.sibling)) {
        (n.return = t.return), (Qs = n);
        break;
      }
      Qs = t.return;
    }
  }
  function yu(e) {
    for (; null !== Qs; ) {
      var t = Qs;
      if (t === e) {
        Qs = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        (n.return = t.return), (Qs = n);
        break;
      }
      Qs = t.return;
    }
  }
  function bu(e) {
    for (; null !== Qs; ) {
      var t = Qs;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              eu(4, t);
            } catch (e) {
              xc(t, n, e);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (e) {
                xc(t, i, e);
              }
            }
            var a = t.return;
            try {
              tu(t);
            } catch (e) {
              xc(t, a, e);
            }
            break;
          case 5:
            var o = t.return;
            try {
              tu(t);
            } catch (e) {
              xc(t, o, e);
            }
        }
      } catch (e) {
        xc(t, t.return, e);
      }
      if (t === e) {
        Qs = null;
        break;
      }
      var l = t.sibling;
      if (null !== l) {
        (l.return = t.return), (Qs = l);
        break;
      }
      Qs = t.return;
    }
  }
  var wu,
    xu = Math.ceil,
    Su = ge.ReactCurrentDispatcher,
    Eu = ge.ReactCurrentOwner,
    ku = ge.ReactCurrentBatchConfig,
    Cu = 0,
    Tu = null,
    Pu = null,
    _u = 0,
    Ou = 0,
    Lu = wa(0),
    Nu = 0,
    Mu = null,
    zu = 0,
    Iu = 0,
    ju = 0,
    Ru = null,
    Au = null,
    Du = 0,
    $u = 1 / 0,
    Fu = null,
    Bu = !1,
    Uu = null,
    Vu = null,
    Hu = !1,
    Wu = null,
    Gu = 0,
    qu = 0,
    Yu = null,
    Qu = -1,
    Xu = 0;
  function Ku() {
    return 6 & Cu ? qt() : -1 !== Qu ? Qu : (Qu = qt());
  }
  function Ju(e) {
    return 1 & e.mode
      ? 2 & Cu && 0 !== _u
        ? _u & -_u
        : null !== fo.transition
        ? (0 === Xu && (Xu = fn()), Xu)
        : (0 !== (e = vn) ||
            (e = void 0 === (e = window.event) ? 16 : qn(e.type)),
          e)
      : 1;
  }
  function Zu(e, t, n, r) {
    if (50 < qu) throw ((qu = 0), (Yu = null), Error(ne(185)));
    hn(e, n, r),
      (!(2 & Cu) || e !== Tu) &&
        (e === Tu && (!(2 & Cu) && (Iu |= n), 4 === Nu && ic(e, _u)),
        ec(e, r),
        1 === n &&
          0 === Cu &&
          !(1 & t.mode) &&
          (($u = qt() + 500), ja && Da()));
  }
  function ec(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;

      ) {
        var o = 31 - nn(a),
          l = 1 << o,
          s = i[o];
        -1 === s
          ? (!(l & n) || l & r) && (i[o] = cn(l, t))
          : s <= t && (e.expiredLanes |= l),
          (a &= ~l);
      }
    })(e, t);
    var r = un(e, e === Tu ? _u : 0);
    if (0 === r)
      null !== n && Ht(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Ht(n), 1 === t))
        0 === e.tag
          ? (function (e) {
              (ja = !0), Aa(e);
            })(ac.bind(null, e))
          : Aa(ac.bind(null, e)),
          na(function () {
            !(6 & Cu) && Da();
          }),
          (n = null);
      else {
        switch (gn(r)) {
          case 1:
            n = Qt;
            break;
          case 4:
            n = Xt;
            break;
          case 16:
          default:
            n = Kt;
            break;
          case 536870912:
            n = Zt;
        }
        n = Tc(n, tc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function tc(e, t) {
    if (((Qu = -1), (Xu = 0), 6 & Cu)) throw Error(ne(327));
    var n = e.callbackNode;
    if (bc() && e.callbackNode !== n) return null;
    var r = un(e, e === Tu ? _u : 0);
    if (0 === r) return null;
    if (30 & r || r & e.expiredLanes || t) t = pc(e, r);
    else {
      t = r;
      var i = Cu;
      Cu |= 2;
      var a = dc();
      for (
        (Tu !== e || _u !== t) && ((Fu = null), ($u = qt() + 500), uc(e, t));
        ;

      )
        try {
          mc();
          break;
        } catch (t) {
          cc(e, t);
        }
      yo(),
        (Su.current = a),
        (Cu = i),
        null !== Pu ? (t = 0) : ((Tu = null), (_u = 0), (t = Nu));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (i = dn(e)) && ((r = i), (t = nc(e, i))), 1 === t))
        throw ((n = Mu), uc(e, 0), ic(e, r), ec(e, qt()), n);
      if (6 === t) ic(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(
            30 & r ||
            (function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var i = n[r],
                        a = i.getSnapshot;
                      i = i.value;
                      try {
                        if (!ri(a(), i)) return !1;
                      } catch {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  (n.return = t), (t = n);
                else {
                  if (t === e) break;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return !0;
            })(i) ||
            ((t = pc(e, r)),
            2 === t && ((a = dn(e)), 0 !== a && ((r = a), (t = nc(e, a)))),
            1 !== t)
          ))
        )
          throw ((n = Mu), uc(e, 0), ic(e, r), ec(e, qt()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(ne(345));
          case 2:
          case 5:
            yc(e, Au, Fu);
            break;
          case 3:
            if (
              (ic(e, r), (130023424 & r) === r && 10 < (t = Du + 500 - qt()))
            ) {
              if (0 !== un(e, 0)) break;
              if (((i = e.suspendedLanes) & r) !== r) {
                Ku(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Zi(yc.bind(null, e, Au, Fu), t);
              break;
            }
            yc(e, Au, Fu);
            break;
          case 4:
            if ((ic(e, r), (4194240 & r) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - nn(r);
              (a = 1 << o), (o = t[o]) > i && (i = o), (r &= ~a);
            }
            if (
              ((r = i),
              10 <
                (r =
                  (120 > (r = qt() - r)
                    ? 120
                    : 480 > r
                    ? 480
                    : 1080 > r
                    ? 1080
                    : 1920 > r
                    ? 1920
                    : 3e3 > r
                    ? 3e3
                    : 4320 > r
                    ? 4320
                    : 1960 * xu(r / 1960)) - r))
            ) {
              e.timeoutHandle = Zi(yc.bind(null, e, Au, Fu), r);
              break;
            }
            yc(e, Au, Fu);
            break;
          default:
            throw Error(ne(329));
        }
      }
    }
    return ec(e, qt()), e.callbackNode === n ? tc.bind(null, e) : null;
  }
  function nc(e, t) {
    var n = Ru;
    return (
      e.current.memoizedState.isDehydrated && (uc(e, t).flags |= 256),
      2 !== (e = pc(e, t)) && ((t = Au), (Au = n), null !== t && rc(t)),
      e
    );
  }
  function rc(e) {
    null === Au ? (Au = e) : Au.push.apply(Au, e);
  }
  function ic(e, t) {
    for (
      t &= ~ju,
        t &= ~Iu,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - nn(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function ac(e) {
    if (6 & Cu) throw Error(ne(327));
    bc();
    var t = un(e, 0);
    if (!(1 & t)) return ec(e, qt()), null;
    var n = pc(e, t);
    if (0 !== e.tag && 2 === n) {
      var r = dn(e);
      0 !== r && ((t = r), (n = nc(e, r)));
    }
    if (1 === n) throw ((n = Mu), uc(e, 0), ic(e, t), ec(e, qt()), n);
    if (6 === n) throw Error(ne(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      yc(e, Au, Fu),
      ec(e, qt()),
      null
    );
  }
  function oc(e, t) {
    var n = Cu;
    Cu |= 1;
    try {
      return e(t);
    } finally {
      0 === (Cu = n) && (($u = qt() + 500), ja && Da());
    }
  }
  function lc(e) {
    null !== Wu && 0 === Wu.tag && !(6 & Cu) && bc();
    var t = Cu;
    Cu |= 1;
    var n = ku.transition,
      r = vn;
    try {
      if (((ku.transition = null), (vn = 1), e)) return e();
    } finally {
      (vn = r), (ku.transition = n), !(6 & (Cu = t)) && Da();
    }
  }
  function sc() {
    (Ou = Lu.current), xa(Lu);
  }
  function uc(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), ea(n)), null !== Pu))
      for (n = Pu.return; null !== n; ) {
        var r = n;
        switch ((Ka(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Oa();
            break;
          case 3:
            tl(), xa(Ca), xa(ka), ll();
            break;
          case 5:
            rl(r);
            break;
          case 4:
            tl();
            break;
          case 13:
          case 19:
            xa(il);
            break;
          case 10:
            bo(r.type._context);
            break;
          case 22:
          case 23:
            sc();
        }
        n = n.return;
      }
    if (
      ((Tu = e),
      (Pu = e = Lc(e.current, null)),
      (_u = Ou = t),
      (Nu = 0),
      (Mu = null),
      (ju = Iu = zu = 0),
      (Au = Ru = null),
      null !== Eo)
    ) {
      for (t = 0; t < Eo.length; t++)
        if (null !== (r = (n = Eo[t]).interleaved)) {
          n.interleaved = null;
          var i = r.next,
            a = n.pending;
          if (null !== a) {
            var o = a.next;
            (a.next = i), (r.next = o);
          }
          n.pending = r;
        }
      Eo = null;
    }
    return e;
  }
  function cc(e, t) {
    for (;;) {
      var n = Pu;
      try {
        if ((yo(), (sl.current = ns), hl)) {
          for (var r = dl.memoizedState; null !== r; ) {
            var i = r.queue;
            null !== i && (i.pending = null), (r = r.next);
          }
          hl = !1;
        }
        if (
          ((cl = 0),
          (pl = fl = dl = null),
          (ml = !1),
          (vl = 0),
          (Eu.current = null),
          null === n || null === n.return)
        ) {
          (Nu = 1), (Mu = t), (Pu = null);
          break;
        }
        e: {
          var a = e,
            o = n.return,
            l = n,
            s = t;
          if (
            ((t = _u),
            (l.flags |= 32768),
            null !== s && "object" == typeof s && "function" == typeof s.then)
          ) {
            var u = s,
              c = l,
              d = c.tag;
            if (!(1 & c.mode || (0 !== d && 11 !== d && 15 !== d))) {
              var f = c.alternate;
              f
                ? ((c.updateQueue = f.updateQueue),
                  (c.memoizedState = f.memoizedState),
                  (c.lanes = f.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = ps(o);
            if (null !== p) {
              (p.flags &= -257),
                hs(p, o, l, 0, t),
                1 & p.mode && fs(a, u, t),
                (s = u);
              var h = (t = p).updateQueue;
              if (null === h) {
                var m = new Set();
                m.add(s), (t.updateQueue = m);
              } else h.add(s);
              break e;
            }
            if (!(1 & t)) {
              fs(a, u, t), fc();
              break e;
            }
            s = Error(ne(426));
          } else if (eo && 1 & l.mode) {
            var v = ps(o);
            if (null !== v) {
              !(65536 & v.flags) && (v.flags |= 256),
                hs(v, o, l, 0, t),
                co(os(s, l));
              break e;
            }
          }
          (a = s = os(s, l)),
            4 !== Nu && (Nu = 2),
            null === Ru ? (Ru = [a]) : Ru.push(a),
            (a = o);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536),
                  (t &= -t),
                  (a.lanes |= t),
                  zo(a, cs(0, s, t));
                break e;
              case 1:
                l = s;
                var g = a.type,
                  y = a.stateNode;
                if (
                  !(
                    128 & a.flags ||
                    ("function" != typeof g.getDerivedStateFromError &&
                      (null === y ||
                        "function" != typeof y.componentDidCatch ||
                        (null !== Vu && Vu.has(y))))
                  )
                ) {
                  (a.flags |= 65536),
                    (t &= -t),
                    (a.lanes |= t),
                    zo(a, ds(a, l, t));
                  break e;
                }
            }
            a = a.return;
          } while (null !== a);
        }
        gc(n);
      } catch (e) {
        (t = e), Pu === n && null !== n && (Pu = n = n.return);
        continue;
      }
      break;
    }
  }
  function dc() {
    var e = Su.current;
    return (Su.current = ns), null === e ? ns : e;
  }
  function fc() {
    (0 === Nu || 3 === Nu || 2 === Nu) && (Nu = 4),
      null === Tu || (!(268435455 & zu) && !(268435455 & Iu)) || ic(Tu, _u);
  }
  function pc(e, t) {
    var n = Cu;
    Cu |= 2;
    var r = dc();
    for ((Tu !== e || _u !== t) && ((Fu = null), uc(e, t)); ; )
      try {
        hc();
        break;
      } catch (t) {
        cc(e, t);
      }
    if ((yo(), (Cu = n), (Su.current = r), null !== Pu)) throw Error(ne(261));
    return (Tu = null), (_u = 0), Nu;
  }
  function hc() {
    for (; null !== Pu; ) vc(Pu);
  }
  function mc() {
    for (; null !== Pu && !Wt(); ) vc(Pu);
  }
  function vc(e) {
    var t = wu(e.alternate, e, Ou);
    (e.memoizedProps = e.pendingProps),
      null === t ? gc(e) : (Pu = t),
      (Eu.current = null);
  }
  function gc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 32768 & t.flags)) {
        if (null !== (n = Ws(n, t))) return (n.flags &= 32767), void (Pu = n);
        if (null === e) return (Nu = 6), void (Pu = null);
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      } else if (null !== (n = Hs(n, t, Ou))) return void (Pu = n);
      if (null !== (t = t.sibling)) return void (Pu = t);
      Pu = t = e;
    } while (null !== t);
    0 === Nu && (Nu = 5);
  }
  function yc(e, t, n) {
    var r = vn,
      i = ku.transition;
    try {
      (ku.transition = null),
        (vn = 1),
        (function (e, t, n, r) {
          do {
            bc();
          } while (null !== Wu);
          if (6 & Cu) throw Error(ne(327));
          n = e.finishedWork;
          var i = e.finishedLanes;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(ne(177));
          (e.callbackNode = null), (e.callbackPriority = 0);
          var a = n.lanes | n.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              (e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements);
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n; ) {
                var i = 31 - nn(n),
                  a = 1 << i;
                (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
              }
            })(e, a),
            e === Tu && ((Pu = Tu = null), (_u = 0)),
            (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
              Hu ||
              ((Hu = !0),
              Tc(Kt, function () {
                return bc(), null;
              })),
            (a = 0 != (15990 & n.flags)),
            15990 & n.subtreeFlags || a)
          ) {
            (a = ku.transition), (ku.transition = null);
            var o = vn;
            vn = 1;
            var l = Cu;
            (Cu |= 4),
              (Eu.current = null),
              (function (e, t) {
                if (((Xi = Bn), ui((e = si())))) {
                  if ("selectionStart" in e)
                    var n = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var r =
                        (n = ((n = e.ownerDocument) && n.defaultView) || window)
                          .getSelection && n.getSelection();
                      if (r && 0 !== r.rangeCount) {
                        n = r.anchorNode;
                        var i = r.anchorOffset,
                          a = r.focusNode;
                        r = r.focusOffset;
                        try {
                          n.nodeType, a.nodeType;
                        } catch {
                          n = null;
                          break e;
                        }
                        var o = 0,
                          l = -1,
                          s = -1,
                          u = 0,
                          c = 0,
                          d = e,
                          f = null;
                        t: for (;;) {
                          for (
                            var p;
                            d !== n ||
                              (0 !== i && 3 !== d.nodeType) ||
                              (l = o + i),
                              d !== a ||
                                (0 !== r && 3 !== d.nodeType) ||
                                (s = o + r),
                              3 === d.nodeType && (o += d.nodeValue.length),
                              null !== (p = d.firstChild);

                          )
                            (f = d), (d = p);
                          for (;;) {
                            if (d === e) break t;
                            if (
                              (f === n && ++u === i && (l = o),
                              f === a && ++c === r && (s = o),
                              null !== (p = d.nextSibling))
                            )
                              break;
                            f = (d = f).parentNode;
                          }
                          d = p;
                        }
                        n = -1 === l || -1 === s ? null : { start: l, end: s };
                      } else n = null;
                    }
                  n = n || { start: 0, end: 0 };
                } else n = null;
                for (
                  Ki = { focusedElem: e, selectionRange: n }, Bn = !1, Qs = t;
                  null !== Qs;

                )
                  if (
                    ((e = (t = Qs).child),
                    0 != (1028 & t.subtreeFlags) && null !== e)
                  )
                    (e.return = t), (Qs = e);
                  else
                    for (; null !== Qs; ) {
                      t = Qs;
                      try {
                        var h = t.alternate;
                        if (1024 & t.flags)
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (null !== h) {
                                var m = h.memoizedProps,
                                  v = h.memoizedState,
                                  g = t.stateNode,
                                  y = g.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? m
                                      : po(t.type, m),
                                    v
                                  );
                                g.__reactInternalSnapshotBeforeUpdate = y;
                              }
                              break;
                            case 3:
                              var b = t.stateNode.containerInfo;
                              1 === b.nodeType
                                ? (b.textContent = "")
                                : 9 === b.nodeType &&
                                  b.documentElement &&
                                  b.removeChild(b.documentElement);
                              break;
                            default:
                              throw Error(ne(163));
                          }
                      } catch (e) {
                        xc(t, t.return, e);
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Qs = e);
                        break;
                      }
                      Qs = t.return;
                    }
                (h = Js), (Js = !1);
              })(e, n),
              pu(n, e),
              ci(Ki),
              (Bn = !!Xi),
              (Ki = Xi = null),
              (e.current = n),
              mu(n),
              Gt(),
              (Cu = l),
              (vn = o),
              (ku.transition = a);
          } else e.current = n;
          if (
            (Hu && ((Hu = !1), (Wu = e), (Gu = i)),
            (a = e.pendingLanes),
            0 === a && (Vu = null),
            (function (e) {
              if (tn && "function" == typeof tn.onCommitFiberRoot)
                try {
                  tn.onCommitFiberRoot(
                    en,
                    e,
                    void 0,
                    128 == (128 & e.current.flags)
                  );
                } catch {}
            })(n.stateNode),
            ec(e, qt()),
            null !== t)
          )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
              (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
          if (Bu) throw ((Bu = !1), (e = Uu), (Uu = null), e);
          1 & Gu && 0 !== e.tag && bc(),
            (a = e.pendingLanes),
            1 & a ? (e === Yu ? qu++ : ((qu = 0), (Yu = e))) : (qu = 0),
            Da();
        })(e, t, n, r);
    } finally {
      (ku.transition = i), (vn = r);
    }
    return null;
  }
  function bc() {
    if (null !== Wu) {
      var e = gn(Gu),
        t = ku.transition,
        n = vn;
      try {
        if (((ku.transition = null), (vn = 16 > e ? 16 : e), null === Wu))
          var r = !1;
        else {
          if (((e = Wu), (Wu = null), (Gu = 0), 6 & Cu)) throw Error(ne(331));
          var i = Cu;
          for (Cu |= 4, Qs = e.current; null !== Qs; ) {
            var a = Qs,
              o = a.child;
            if (16 & Qs.flags) {
              var l = a.deletions;
              if (null !== l) {
                for (var s = 0; s < l.length; s++) {
                  var u = l[s];
                  for (Qs = u; null !== Qs; ) {
                    var c = Qs;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zs(8, c, a);
                    }
                    var d = c.child;
                    if (null !== d) (d.return = c), (Qs = d);
                    else
                      for (; null !== Qs; ) {
                        var f = (c = Qs).sibling,
                          p = c.return;
                        if ((nu(c), c === u)) {
                          Qs = null;
                          break;
                        }
                        if (null !== f) {
                          (f.return = p), (Qs = f);
                          break;
                        }
                        Qs = p;
                      }
                  }
                }
                var h = a.alternate;
                if (null !== h) {
                  var m = h.child;
                  if (null !== m) {
                    h.child = null;
                    do {
                      var v = m.sibling;
                      (m.sibling = null), (m = v);
                    } while (null !== m);
                  }
                }
                Qs = a;
              }
            }
            if (2064 & a.subtreeFlags && null !== o) (o.return = a), (Qs = o);
            else
              e: for (; null !== Qs; ) {
                if (2048 & (a = Qs).flags)
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zs(9, a, a.return);
                  }
                var g = a.sibling;
                if (null !== g) {
                  (g.return = a.return), (Qs = g);
                  break e;
                }
                Qs = a.return;
              }
          }
          var y = e.current;
          for (Qs = y; null !== Qs; ) {
            var b = (o = Qs).child;
            if (2064 & o.subtreeFlags && null !== b) (b.return = o), (Qs = b);
            else
              e: for (o = y; null !== Qs; ) {
                if (2048 & (l = Qs).flags)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        eu(9, l);
                    }
                  } catch (e) {
                    xc(l, l.return, e);
                  }
                if (l === o) {
                  Qs = null;
                  break e;
                }
                var w = l.sibling;
                if (null !== w) {
                  (w.return = l.return), (Qs = w);
                  break e;
                }
                Qs = l.return;
              }
          }
          if (
            ((Cu = i),
            Da(),
            tn && "function" == typeof tn.onPostCommitFiberRoot)
          )
            try {
              tn.onPostCommitFiberRoot(en, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (vn = n), (ku.transition = t);
      }
    }
    return !1;
  }
  function wc(e, t, n) {
    (e = No(e, (t = cs(0, (t = os(n, t)), 1)), 1)),
      (t = Ku()),
      null !== e && (hn(e, 1, t), ec(e, t));
  }
  function xc(e, t, n) {
    if (3 === e.tag) wc(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          wc(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Vu || !Vu.has(r)))
          ) {
            (t = No(t, (e = ds(t, (e = os(n, e)), 1)), 1)),
              (e = Ku()),
              null !== t && (hn(t, 1, e), ec(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sc(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = Ku()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Tu === e &&
        (_u & n) === n &&
        (4 === Nu || (3 === Nu && (130023424 & _u) === _u && 500 > qt() - Du)
          ? uc(e, 0)
          : (ju |= n)),
      ec(e, t);
  }
  function Ec(e, t) {
    0 === t &&
      (1 & e.mode
        ? ((t = ln), !(130023424 & (ln <<= 1)) && (ln = 4194304))
        : (t = 1));
    var n = Ku();
    null !== (e = To(e, t)) && (hn(e, t, n), ec(e, n));
  }
  function kc(e) {
    var t = e.memoizedState,
      n = 0;
    null !== t && (n = t.retryLane), Ec(e, n);
  }
  function Cc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        null !== i && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(ne(314));
    }
    null !== r && r.delete(t), Ec(e, n);
  }
  function Tc(e, t) {
    return Vt(e, t);
  }
  function Pc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _c(e, t, n, r) {
    return new Pc(e, t, n, r);
  }
  function Oc(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Lc(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = _c(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Nc(e, t, n, r, i, a) {
    var o = 2;
    if (((r = e), "function" == typeof e)) Oc(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else
      e: switch (e) {
        case we:
          return Mc(n.children, i, a, t);
        case xe:
          (o = 8), (i |= 8);
          break;
        case Se:
          return ((e = _c(12, n, t, 2 | i)).elementType = Se), (e.lanes = a), e;
        case Te:
          return ((e = _c(13, n, t, i)).elementType = Te), (e.lanes = a), e;
        case Pe:
          return ((e = _c(19, n, t, i)).elementType = Pe), (e.lanes = a), e;
        case Le:
          return zc(n, i, a, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case Ee:
                o = 10;
                break e;
              case ke:
                o = 9;
                break e;
              case Ce:
                o = 11;
                break e;
              case _e:
                o = 14;
                break e;
              case Oe:
                (o = 16), (r = null);
                break e;
            }
          throw Error(ne(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = _c(o, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t
    );
  }
  function Mc(e, t, n, r) {
    return ((e = _c(7, e, r, t)).lanes = n), e;
  }
  function zc(e, t, n, r) {
    return (
      ((e = _c(22, e, r, t)).elementType = Le),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ic(e, t, n) {
    return ((e = _c(6, e, null, t)).lanes = n), e;
  }
  function jc(e, t, n) {
    return (
      ((t = _c(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Rc(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = pn(0)),
      (this.expirationTimes = pn(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pn(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ac(e, t, n, r, i, a, o, l, s) {
    return (
      (e = new Rc(e, t, n, l, s)),
      1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
      (a = _c(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      _o(a),
      e
    );
  }
  function Dc(e) {
    if (!e) return Ea;
    e: {
      if (Dt((e = e._reactInternals)) !== e || 1 !== e.tag)
        throw Error(ne(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (_a(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(ne(171));
    }
    if (1 === e.tag) {
      var n = e.type;
      if (_a(n)) return Na(e, n, t);
    }
    return t;
  }
  function $c(e, t, n, r, i, a, o, l, s) {
    return (
      ((e = Ac(n, r, !0, e, 0, a, 0, l, s)).context = Dc(null)),
      (n = e.current),
      ((a = Lo((r = Ku()), (i = Ju(n)))).callback = t ?? null),
      No(n, a, i),
      (e.current.lanes = i),
      hn(e, i, r),
      ec(e, r),
      e
    );
  }
  function Fc(e, t, n, r) {
    var i = t.current,
      a = Ku(),
      o = Ju(i);
    return (
      (n = Dc(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Lo(a, o)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = No(i, t, o)) && (Zu(e, i, o, a), Mo(e, i, o)),
      o
    );
  }
  function Bc(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Uc(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Vc(e, t) {
    Uc(e, t), (e = e.alternate) && Uc(e, t);
  }
  wu = function (e, t, n) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || Ca.current) vs = !0;
      else {
        if (!(e.lanes & n || 128 & t.flags))
          return (
            (vs = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  Ts(t), uo();
                  break;
                case 5:
                  nl(t);
                  break;
                case 1:
                  _a(t.type) && Ma(t);
                  break;
                case 4:
                  el(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    i = t.memoizedProps.value;
                  Sa(ho, r._currentValue), (r._currentValue = i);
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (Sa(il, 1 & il.current), (t.flags |= 128), null)
                      : n & t.child.childLanes
                      ? Is(e, t, n)
                      : (Sa(il, 1 & il.current),
                        null !== (e = Bs(e, t, n)) ? e.sibling : null);
                  Sa(il, 1 & il.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 128 & e.flags)) {
                    if (r) return $s(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (i = t.memoizedState) &&
                      ((i.rendering = null),
                      (i.tail = null),
                      (i.lastEffect = null)),
                    Sa(il, il.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return (t.lanes = 0), xs(e, t, n);
              }
              return Bs(e, t, n);
            })(e, t, n)
          );
        vs = !!(131072 & e.flags);
      }
    else (vs = !1), eo && 1048576 & t.flags && Qa(t, Ua, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Fs(e, t), (e = t.pendingProps);
        var i = Pa(t, ka.current);
        xo(t, n), (i = wl(null, t, r, e, i, n));
        var a = xl();
        return (
          (t.flags |= 1),
          "object" == typeof i &&
          null !== i &&
          "function" == typeof i.render &&
          void 0 === i.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              _a(r) ? ((a = !0), Ma(t)) : (a = !1),
              (t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null),
              _o(t),
              (i.updater = Do),
              (t.stateNode = i),
              (i._reactInternals = t),
              Uo(t, r, e, n),
              (t = Cs(null, t, r, !0, a, n)))
            : ((t.tag = 0), eo && a && Xa(t), gs(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Fs(e, t),
            (e = t.pendingProps),
            (r = (i = r._init)(r._payload)),
            (t.type = r),
            (i = t.tag =
              (function (e) {
                if ("function" == typeof e) return Oc(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === Ce) return 11;
                  if (e === _e) return 14;
                }
                return 2;
              })(r)),
            (e = po(r, e)),
            i)
          ) {
            case 0:
              t = Es(null, t, r, e, n);
              break e;
            case 1:
              t = ks(null, t, r, e, n);
              break e;
            case 11:
              t = ys(null, t, r, e, n);
              break e;
            case 14:
              t = bs(null, t, r, po(r.type, e), n);
              break e;
          }
          throw Error(ne(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          Es(e, t, r, (i = t.elementType === r ? i : po(r, i)), n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          ks(e, t, r, (i = t.elementType === r ? i : po(r, i)), n)
        );
      case 3:
        e: {
          if ((Ts(t), null === e)) throw Error(ne(387));
          (r = t.pendingProps),
            (i = (a = t.memoizedState).element),
            Oo(e, t),
            Io(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), a.isDehydrated)) {
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              256 & t.flags)
            ) {
              t = Ps(e, t, r, n, (i = os(Error(ne(423)), t)));
              break e;
            }
            if (r !== i) {
              t = Ps(e, t, r, n, (i = os(Error(ne(424)), t)));
              break e;
            }
            for (
              Za = aa(t.stateNode.containerInfo.firstChild),
                Ja = t,
                eo = !0,
                to = null,
                n = Yo(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
          } else {
            if ((uo(), r === i)) {
              t = Bs(e, t, n);
              break e;
            }
            gs(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          nl(t),
          null === e && ao(t),
          (r = t.type),
          (i = t.pendingProps),
          (a = null !== e ? e.memoizedProps : null),
          (o = i.children),
          Ji(r, i) ? (o = null) : null !== a && Ji(r, a) && (t.flags |= 32),
          Ss(e, t),
          gs(e, t, o, n),
          t.child
        );
      case 6:
        return null === e && ao(t), null;
      case 13:
        return Is(e, t, n);
      case 4:
        return (
          el(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          null === e ? (t.child = qo(t, null, r, n)) : gs(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          ys(e, t, r, (i = t.elementType === r ? i : po(r, i)), n)
        );
      case 7:
        return gs(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return gs(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (a = t.memoizedProps),
            (o = i.value),
            Sa(ho, r._currentValue),
            (r._currentValue = o),
            null !== a)
          )
            if (ri(a.value, o)) {
              if (a.children === i.children && !Ca.current) {
                t = Bs(e, t, n);
                break e;
              }
            } else
              for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                var l = a.dependencies;
                if (null !== l) {
                  o = a.child;
                  for (var s = l.firstContext; null !== s; ) {
                    if (s.context === r) {
                      if (1 === a.tag) {
                        (s = Lo(-1, n & -n)).tag = 2;
                        var u = a.updateQueue;
                        if (null !== u) {
                          var c = (u = u.shared).pending;
                          null === c
                            ? (s.next = s)
                            : ((s.next = c.next), (c.next = s)),
                            (u.pending = s);
                        }
                      }
                      (a.lanes |= n),
                        null !== (s = a.alternate) && (s.lanes |= n),
                        wo(a.return, n, t),
                        (l.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (10 === a.tag) o = a.type === t.type ? null : a.child;
                else if (18 === a.tag) {
                  if (null === (o = a.return)) throw Error(ne(341));
                  (o.lanes |= n),
                    null !== (l = o.alternate) && (l.lanes |= n),
                    wo(o, n, t),
                    (o = a.sibling);
                } else o = a.child;
                if (null !== o) o.return = a;
                else
                  for (o = a; null !== o; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (null !== (a = o.sibling)) {
                      (a.return = o.return), (o = a);
                      break;
                    }
                    o = o.return;
                  }
                a = o;
              }
          gs(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          xo(t, n),
          (r = r((i = So(i)))),
          (t.flags |= 1),
          gs(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (i = po((r = t.type), t.pendingProps)),
          bs(e, t, r, (i = po(r.type, i)), n)
        );
      case 15:
        return ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : po(r, i)),
          Fs(e, t),
          (t.tag = 1),
          _a(r) ? ((e = !0), Ma(t)) : (e = !1),
          xo(t, n),
          Fo(t, r, i),
          Uo(t, r, i, n),
          Cs(null, t, r, !0, e, n)
        );
      case 19:
        return $s(e, t, n);
      case 22:
        return xs(e, t, n);
    }
    throw Error(ne(156, t.tag));
  };
  var Hc =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Wc(e) {
    this._internalRoot = e;
  }
  function Gc(e) {
    this._internalRoot = e;
  }
  function qc(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Yc(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Qc() {}
  function Xc(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var o = a;
      if ("function" == typeof i) {
        var l = i;
        i = function () {
          var e = Bc(o);
          l.call(e);
        };
      }
      Fc(t, o, e, i);
    } else
      o = (function (e, t, n, r, i) {
        if (i) {
          if ("function" == typeof r) {
            var a = r;
            r = function () {
              var e = Bc(o);
              a.call(e);
            };
          }
          var o = $c(t, r, e, 0, null, !1, 0, "", Qc);
          return (
            (e._reactRootContainer = o),
            (e[ca] = o.current),
            Di(8 === e.nodeType ? e.parentNode : e),
            lc(),
            o
          );
        }
        for (; (i = e.lastChild); ) e.removeChild(i);
        if ("function" == typeof r) {
          var l = r;
          r = function () {
            var e = Bc(s);
            l.call(e);
          };
        }
        var s = Ac(e, 0, !1, null, 0, !1, 0, "", Qc);
        return (
          (e._reactRootContainer = s),
          (e[ca] = s.current),
          Di(8 === e.nodeType ? e.parentNode : e),
          lc(function () {
            Fc(t, s, n, r);
          }),
          s
        );
      })(n, t, e, i, r);
    return Bc(o);
  }
  (Gc.prototype.render = Wc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(ne(409));
      Fc(e, t, null, null);
    }),
    (Gc.prototype.unmount = Wc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          lc(function () {
            Fc(null, e, null, null);
          }),
            (t[ca] = null);
        }
      }),
    (Gc.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = xn();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ln.length && 0 !== t && t < Ln[n].priority; n++);
        Ln.splice(n, 0, e), 0 === n && In(e);
      }
    }),
    (yn = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = sn(t.pendingLanes);
            0 !== n &&
              (mn(t, 1 | n),
              ec(t, qt()),
              !(6 & Cu) && (($u = qt() + 500), Da()));
          }
          break;
        case 13:
          lc(function () {
            var t = To(e, 1);
            if (null !== t) {
              var n = Ku();
              Zu(t, e, 1, n);
            }
          }),
            Vc(e, 1);
      }
    }),
    (bn = function (e) {
      if (13 === e.tag) {
        var t = To(e, 134217728);
        if (null !== t) Zu(t, e, 134217728, Ku());
        Vc(e, 134217728);
      }
    }),
    (wn = function (e) {
      if (13 === e.tag) {
        var t = Ju(e),
          n = To(e, t);
        if (null !== n) Zu(n, e, t, Ku());
        Vc(e, t);
      }
    }),
    (xn = function () {
      return vn;
    }),
    (Sn = function (e, t) {
      var n = vn;
      try {
        return (vn = e), t();
      } finally {
        vn = n;
      }
    }),
    (yt = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Qe(e, n), (t = n.name), "radio" === n.type && null != t)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = ga(r);
                if (!i) throw Error(ne(90));
                He(r), Qe(r, i);
              }
            }
          }
          break;
        case "textarea":
          nt(e, n);
          break;
        case "select":
          null != (t = n.value) && Ze(e, !!n.multiple, t, !1);
      }
    }),
    (kt = oc),
    (Ct = lc);
  var Kc = { usingClientEntryPoint: !1, Events: [ma, va, ga, St, Et, oc] },
    Jc = {
      findFiberByHostInstance: ha,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Zc = {
      bundleType: Jc.bundleType,
      version: Jc.version,
      rendererPackageName: Jc.rendererPackageName,
      rendererConfig: Jc.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ge.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = Bt(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
        Jc.findFiberByHostInstance ||
        function () {
          return null;
        },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ed = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ed.isDisabled && ed.supportsFiber)
      try {
        (en = ed.inject(Zc)), (tn = ed);
      } catch {}
  }
  (X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc),
    (X.createPortal = function (e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!qc(t)) throw Error(ne(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: be,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, n);
    }),
    (X.createRoot = function (e, t) {
      if (!qc(e)) throw Error(ne(299));
      var n = !1,
        r = "",
        i = Hc;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
        (t = Ac(e, 1, !1, null, 0, n, 0, r, i)),
        (e[ca] = t.current),
        Di(8 === e.nodeType ? e.parentNode : e),
        new Wc(t)
      );
    }),
    (X.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t)
        throw "function" == typeof e.render
          ? Error(ne(188))
          : ((e = Object.keys(e).join(",")), Error(ne(268, e)));
      return (e = null === (e = Bt(t)) ? null : e.stateNode);
    }),
    (X.flushSync = function (e) {
      return lc(e);
    }),
    (X.hydrate = function (e, t, n) {
      if (!Yc(t)) throw Error(ne(200));
      return Xc(null, e, t, !0, n);
    }),
    (X.hydrateRoot = function (e, t, n) {
      if (!qc(e)) throw Error(ne(405));
      var r = (null != n && n.hydratedSources) || null,
        i = !1,
        a = "",
        o = Hc;
      if (
        (null != n &&
          (!0 === n.unstable_strictMode && (i = !0),
          void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
          void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
        (t = $c(t, null, e, 1, n ?? null, i, 0, a, o)),
        (e[ca] = t.current),
        Di(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (i = (i = (n = r[e])._getVersion)(n._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new Gc(t);
    }),
    (X.render = function (e, t, n) {
      if (!Yc(t)) throw Error(ne(200));
      return Xc(null, e, t, !1, n);
    }),
    (X.unmountComponentAtNode = function (e) {
      if (!Yc(e)) throw Error(ne(40));
      return (
        !!e._reactRootContainer &&
        (lc(function () {
          Xc(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[ca] = null);
          });
        }),
        !0)
      );
    }),
    (X.unstable_batchedUpdates = oc),
    (X.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Yc(n)) throw Error(ne(200));
      if (null == e || void 0 === e._reactInternals) throw Error(ne(38));
      return Xc(e, t, n, !1, r);
    }),
    (X.version = "18.2.0-next-9e3b772b8-20220608"),
    (function e() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
    (Q.exports = X);
  var td = Q.exports;
  (Y.createRoot = td.createRoot), (Y.hydrateRoot = td.hydrateRoot);
  var nd = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0,
  };
  function rd(e) {
    var t = (function (e) {
      if ("number" == typeof e) return { value: e, unit: "px" };
      var t,
        n = (e.match(/^[0-9.]*/) || "").toString();
      t = n.includes(".") ? parseFloat(n) : parseInt(n, 10);
      var r = (e.match(/[^0-9]*$/) || "").toString();
      return nd[r]
        ? { value: t, unit: r }
        : (console.warn(
            "React Spinners: "
              .concat(e, " is not a valid css value. Defaulting to ")
              .concat(t, "px.")
          ),
          { value: t, unit: "px" });
    })(e);
    return "".concat(t.value).concat(t.unit);
  }
  var id = function (e, t, n) {
      var r = "react-spinners-".concat(e, "-").concat(n);
      if (typeof window > "u" || !window.document) return r;
      var i = document.createElement("style");
      document.head.appendChild(i);
      var a = i.sheet,
        o = "\n    @keyframes "
          .concat(r, " {\n      ")
          .concat(t, "\n    }\n  ");
      return a && a.insertRule(o, 0), r;
    },
    ad =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (ad =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          ad.apply(this, arguments)
        );
      },
    od =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      },
    ld = [
      id(
        "PuffLoader",
        "0% {transform: scale(0)} 100% {transform: scale(1.0)}",
        "puff-1"
      ),
      id("PuffLoader", "0% {opacity: 1} 100% {opacity: 0}", "puff-2"),
    ];
  function sd(e) {
    var t = e.loading,
      n = void 0 === t || t,
      r = e.color,
      i = void 0 === r ? "#000000" : r,
      a = e.speedMultiplier,
      o = void 0 === a ? 1 : a,
      l = e.cssOverride,
      s = void 0 === l ? {} : l,
      u = e.size,
      c = void 0 === u ? 60 : u,
      d = od(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
      f = ad(
        {
          display: "inherit",
          position: "relative",
          width: rd(c),
          height: rd(c),
        },
        s
      ),
      p = function (e) {
        return {
          position: "absolute",
          height: rd(c),
          width: rd(c),
          border: "thick solid ".concat(i),
          borderRadius: "50%",
          opacity: "1",
          top: "0",
          left: "0",
          animationFillMode: "both",
          animation: "".concat(ld[0], ", ").concat(ld[1]),
          animationDuration: "".concat(2 / o, "s"),
          animationIterationCount: "infinite",
          animationTimingFunction:
            "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",
          animationDelay: 1 === e ? "-1s" : "0s",
        };
      };
    return n
      ? A.createElement(
          "span",
          ad({ style: f }, d),
          A.createElement("span", { style: p(1) }),
          A.createElement("span", { style: p(2) })
        )
      : null;
  }
  const ud = "Left",
    cd = "Right",
    dd = "Up",
    fd = "Down",
    pd = {
      delta: 10,
      preventScrollOnSwipe: !1,
      rotationAngle: 0,
      trackMouse: !1,
      trackTouch: !0,
      swipeDuration: 1 / 0,
      touchEventOptions: { passive: !0 },
    },
    hd = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
    md = "mousemove",
    vd = "mouseup",
    gd = "touchend",
    yd = "touchmove",
    bd = "touchstart";
  function wd(e, t) {
    if (0 === t) return e;
    const n = (Math.PI / 180) * t;
    return [
      e[0] * Math.cos(n) + e[1] * Math.sin(n),
      e[1] * Math.cos(n) - e[0] * Math.sin(n),
    ];
  }
  function xd(e, t) {
    const n = (t) => {
        const n = "touches" in t;
        (n && t.touches.length > 1) ||
          e((e, i) => {
            i.trackMouse &&
              !n &&
              (document.addEventListener(md, r),
              document.addEventListener(vd, a));
            const { clientX: o, clientY: l } = n ? t.touches[0] : t,
              s = wd([o, l], i.rotationAngle);
            return (
              i.onTouchStartOrOnMouseDown &&
                i.onTouchStartOrOnMouseDown({ event: t }),
              Object.assign(Object.assign(Object.assign({}, e), hd), {
                initial: s.slice(),
                xy: s,
                start: t.timeStamp || 0,
              })
            );
          });
      },
      r = (t) => {
        e((e, n) => {
          const r = "touches" in t;
          if (r && t.touches.length > 1) return e;
          if (t.timeStamp - e.start > n.swipeDuration)
            return e.swiping
              ? Object.assign(Object.assign({}, e), { swiping: !1 })
              : e;
          const { clientX: i, clientY: a } = r ? t.touches[0] : t,
            [o, l] = wd([i, a], n.rotationAngle),
            s = o - e.xy[0],
            u = l - e.xy[1],
            c = Math.abs(s),
            d = Math.abs(u),
            f = (t.timeStamp || 0) - e.start,
            p = Math.sqrt(c * c + d * d) / (f || 1),
            h = [s / (f || 1), u / (f || 1)],
            m = (function (e, t, n, r) {
              return e > t ? (n > 0 ? cd : ud) : r > 0 ? fd : dd;
            })(c, d, s, u),
            v =
              "number" == typeof n.delta
                ? n.delta
                : n.delta[m.toLowerCase()] || pd.delta;
          if (c < v && d < v && !e.swiping) return e;
          const g = {
            absX: c,
            absY: d,
            deltaX: s,
            deltaY: u,
            dir: m,
            event: t,
            first: e.first,
            initial: e.initial,
            velocity: p,
            vxvy: h,
          };
          g.first && n.onSwipeStart && n.onSwipeStart(g),
            n.onSwiping && n.onSwiping(g);
          let y = !1;
          return (
            (n.onSwiping || n.onSwiped || n[`onSwiped${m}`]) && (y = !0),
            y &&
              n.preventScrollOnSwipe &&
              n.trackTouch &&
              t.cancelable &&
              t.preventDefault(),
            Object.assign(Object.assign({}, e), {
              first: !1,
              eventData: g,
              swiping: !0,
            })
          );
        });
      },
      i = (t) => {
        e((e, n) => {
          let r;
          if (e.swiping && e.eventData) {
            if (t.timeStamp - e.start < n.swipeDuration) {
              (r = Object.assign(Object.assign({}, e.eventData), { event: t })),
                n.onSwiped && n.onSwiped(r);
              const i = n[`onSwiped${r.dir}`];
              i && i(r);
            }
          } else n.onTap && n.onTap({ event: t });
          return (
            n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({ event: t }),
            Object.assign(Object.assign(Object.assign({}, e), hd), {
              eventData: r,
            })
          );
        });
      },
      a = (e) => {
        document.removeEventListener(md, r),
          document.removeEventListener(vd, a),
          i(e);
      },
      o = (e, t) => {
        let a = () => {};
        if (e && e.addEventListener) {
          const o = Object.assign(
              Object.assign({}, pd.touchEventOptions),
              t.touchEventOptions
            ),
            l = [
              [bd, n, o],
              [
                yd,
                r,
                Object.assign(
                  Object.assign({}, o),
                  t.preventScrollOnSwipe ? { passive: !1 } : {}
                ),
              ],
              [gd, i, o],
            ];
          l.forEach(([t, n, r]) => e.addEventListener(t, n, r)),
            (a = () => l.forEach(([t, n]) => e.removeEventListener(t, n)));
        }
        return a;
      },
      l = {
        ref: (t) => {
          null !== t &&
            e((e, n) => {
              if (e.el === t) return e;
              const r = {};
              return (
                e.el &&
                  e.el !== t &&
                  e.cleanUpTouch &&
                  (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                n.trackTouch && t && (r.cleanUpTouch = o(t, n)),
                Object.assign(Object.assign(Object.assign({}, e), { el: t }), r)
              );
            });
        },
      };
    return t.trackMouse && (l.onMouseDown = n), [l, o];
  }
  function Sd(e) {
    const { trackMouse: t } = e,
      n = A.useRef(Object.assign({}, hd)),
      r = A.useRef(Object.assign({}, pd)),
      i = A.useRef(Object.assign({}, r.current));
    let a;
    for (a in ((i.current = Object.assign({}, r.current)),
    (r.current = Object.assign(Object.assign({}, pd), e)),
    pd))
      void 0 === r.current[a] && (r.current[a] = pd[a]);
    const [o, l] = A.useMemo(
      () => xd((e) => (n.current = e(n.current, r.current)), { trackMouse: t }),
      [t]
    );
    return (
      (n.current = (function (e, t, n, r) {
        return t.trackTouch && e.el
          ? e.cleanUpTouch
            ? t.preventScrollOnSwipe !== n.preventScrollOnSwipe ||
              t.touchEventOptions.passive !== n.touchEventOptions.passive
              ? (e.cleanUpTouch(),
                Object.assign(Object.assign({}, e), {
                  cleanUpTouch: r(e.el, t),
                }))
              : e
            : Object.assign(Object.assign({}, e), { cleanUpTouch: r(e.el, t) })
          : (e.cleanUpTouch && e.cleanUpTouch(),
            Object.assign(Object.assign({}, e), { cleanUpTouch: void 0 }));
      })(n.current, r.current, i.current, l)),
      o
    );
  }
  var Ed = function () {
    return (
      (Ed =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      Ed.apply(this, arguments)
    );
  };
  function kd(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, a = t.length; i < a; i++)
        (r || !(i in t)) &&
          (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  var Cd = "-ms-",
    Td = "-moz-",
    Pd = "-webkit-",
    _d = "comm",
    Od = "rule",
    Ld = "decl",
    Nd = "@import",
    Md = "@keyframes",
    zd = "@layer",
    Id = Math.abs,
    jd = String.fromCharCode,
    Rd = Object.assign;
  function Ad(e) {
    return e.trim();
  }
  function Dd(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function $d(e, t, n) {
    return e.replace(t, n);
  }
  function Fd(e, t) {
    return e.indexOf(t);
  }
  function Bd(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function Ud(e, t, n) {
    return e.slice(t, n);
  }
  function Vd(e) {
    return e.length;
  }
  function Hd(e) {
    return e.length;
  }
  function Wd(e, t) {
    return t.push(e), e;
  }
  var Gd = 1,
    qd = 1,
    Yd = 0,
    Qd = 0,
    Xd = 0,
    Kd = "";
  function Jd(e, t, n, r, i, a, o) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: a,
      line: Gd,
      column: qd,
      length: o,
      return: "",
    };
  }
  function Zd(e, t) {
    return Rd(
      Jd("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function ef() {
    return (
      (Xd = Qd < Yd ? Bd(Kd, Qd++) : 0), qd++, 10 === Xd && ((qd = 1), Gd++), Xd
    );
  }
  function tf() {
    return Bd(Kd, Qd);
  }
  function nf() {
    return Qd;
  }
  function rf(e, t) {
    return Ud(Kd, e, t);
  }
  function af(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function of(e) {
    return Ad(rf(Qd - 1, uf(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function lf(e) {
    for (; (Xd = tf()) && Xd < 33; ) ef();
    return af(e) > 2 || af(Xd) > 3 ? "" : " ";
  }
  function sf(e, t) {
    for (
      ;
      --t &&
      ef() &&
      !(Xd < 48 || Xd > 102 || (Xd > 57 && Xd < 65) || (Xd > 70 && Xd < 97));

    );
    return rf(e, nf() + (t < 6 && 32 == tf() && 32 == ef()));
  }
  function uf(e) {
    for (; ef(); )
      switch (Xd) {
        case e:
          return Qd;
        case 34:
        case 39:
          34 !== e && 39 !== e && uf(Xd);
          break;
        case 40:
          41 === e && uf(e);
          break;
        case 92:
          ef();
      }
    return Qd;
  }
  function cf(e, t) {
    for (; ef() && e + Xd !== 57 && (e + Xd !== 84 || 47 !== tf()); );
    return "/*" + rf(t, Qd - 1) + "*" + jd(47 === e ? e : ef());
  }
  function df(e) {
    for (; !af(tf()); ) ef();
    return rf(e, Qd);
  }
  function ff(e) {
    return (function (e) {
      return (Kd = ""), e;
    })(
      pf(
        "",
        null,
        null,
        null,
        [""],
        (e = (function (e) {
          return (Gd = qd = 1), (Yd = Vd((Kd = e))), (Qd = 0), [];
        })(e)),
        0,
        [0],
        e
      )
    );
  }
  function pf(e, t, n, r, i, a, o, l, s) {
    for (
      var u = 0,
        c = 0,
        d = o,
        f = 0,
        p = 0,
        h = 0,
        m = 1,
        v = 1,
        g = 1,
        y = 0,
        b = "",
        w = i,
        x = a,
        S = r,
        E = b;
      v;

    )
      switch (((h = y), (y = ef()))) {
        case 40:
          if (108 != h && 58 == Bd(E, d - 1)) {
            -1 != Fd((E += $d(of(y), "&", "&\f")), "&\f") && (g = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          E += of(y);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          E += lf(h);
          break;
        case 92:
          E += sf(nf() - 1, 7);
          continue;
        case 47:
          switch (tf()) {
            case 42:
            case 47:
              Wd(mf(cf(ef(), nf()), t, n), s);
              break;
            default:
              E += "/";
          }
          break;
        case 123 * m:
          l[u++] = Vd(E) * g;
        case 125 * m:
        case 59:
        case 0:
          switch (y) {
            case 0:
            case 125:
              v = 0;
            case 59 + c:
              -1 == g && (E = $d(E, /\f/g, "")),
                p > 0 &&
                  Vd(E) - d &&
                  Wd(
                    p > 32
                      ? vf(E + ";", r, n, d - 1)
                      : vf($d(E, " ", "") + ";", r, n, d - 2),
                    s
                  );
              break;
            case 59:
              E += ";";
            default:
              if (
                (Wd((S = hf(E, t, n, u, c, i, l, b, (w = []), (x = []), d)), a),
                123 === y)
              )
                if (0 === c) pf(E, t, S, S, w, a, d, l, x);
                else
                  switch (99 === f && 110 === Bd(E, 3) ? 100 : f) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      pf(
                        e,
                        S,
                        S,
                        r && Wd(hf(e, S, S, 0, 0, i, l, b, i, (w = []), d), x),
                        i,
                        x,
                        d,
                        l,
                        r ? w : x
                      );
                      break;
                    default:
                      pf(E, S, S, S, [""], x, 0, l, x);
                  }
          }
          (u = c = p = 0), (m = g = 1), (b = E = ""), (d = o);
          break;
        case 58:
          (d = 1 + Vd(E)), (p = h);
        default:
          if (m < 1)
            if (123 == y) --m;
            else if (
              125 == y &&
              0 == m++ &&
              125 ==
                ((Xd = Qd > 0 ? Bd(Kd, --Qd) : 0),
                qd--,
                10 === Xd && ((qd = 1), Gd--),
                Xd)
            )
              continue;
          switch (((E += jd(y)), y * m)) {
            case 38:
              g = c > 0 ? 1 : ((E += "\f"), -1);
              break;
            case 44:
              (l[u++] = (Vd(E) - 1) * g), (g = 1);
              break;
            case 64:
              45 === tf() && (E += of(ef())),
                (f = tf()),
                (c = d = Vd((b = E += df(nf())))),
                y++;
              break;
            case 45:
              45 === h && 2 == Vd(E) && (m = 0);
          }
      }
    return a;
  }
  function hf(e, t, n, r, i, a, o, l, s, u, c) {
    for (
      var d = i - 1, f = 0 === i ? a : [""], p = Hd(f), h = 0, m = 0, v = 0;
      h < r;
      ++h
    )
      for (var g = 0, y = Ud(e, d + 1, (d = Id((m = o[h])))), b = e; g < p; ++g)
        (b = Ad(m > 0 ? f[g] + " " + y : $d(y, /&\f/g, f[g]))) && (s[v++] = b);
    return Jd(e, t, n, 0 === i ? Od : l, s, u, c);
  }
  function mf(e, t, n) {
    return Jd(e, t, n, _d, jd(Xd), Ud(e, 2, -2), 0);
  }
  function vf(e, t, n, r) {
    return Jd(e, t, n, Ld, Ud(e, 0, r), Ud(e, r + 1, -1), r);
  }
  function gf(e, t, n) {
    switch (
      (function (e, t) {
        return 45 ^ Bd(e, 0)
          ? (((((((t << 2) ^ Bd(e, 0)) << 2) ^ Bd(e, 1)) << 2) ^ Bd(e, 2)) <<
              2) ^
              Bd(e, 3)
          : 0;
      })(e, t)
    ) {
      case 5103:
        return Pd + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Pd + e + e;
      case 4789:
        return Td + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Pd + e + Td + e + Cd + e + e;
      case 5936:
        switch (Bd(e, t + 11)) {
          case 114:
            return Pd + e + Cd + $d(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Pd + e + Cd + $d(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Pd + e + Cd + $d(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
      case 6828:
      case 4268:
      case 2903:
        return Pd + e + Cd + e + e;
      case 6165:
        return Pd + e + Cd + "flex-" + e + e;
      case 5187:
        return (
          Pd +
          e +
          $d(e, /(\w+).+(:[^]+)/, Pd + "box-$1$2" + Cd + "flex-$1$2") +
          e
        );
      case 5443:
        return (
          Pd +
          e +
          Cd +
          "flex-item-" +
          $d(e, /flex-|-self/g, "") +
          (Dd(e, /flex-|baseline/)
            ? ""
            : Cd + "grid-row-" + $d(e, /flex-|-self/g, "")) +
          e
        );
      case 4675:
        return (
          Pd +
          e +
          Cd +
          "flex-line-pack" +
          $d(e, /align-content|flex-|-self/g, "") +
          e
        );
      case 5548:
        return Pd + e + Cd + $d(e, "shrink", "negative") + e;
      case 5292:
        return Pd + e + Cd + $d(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Pd +
          "box-" +
          $d(e, "-grow", "") +
          Pd +
          e +
          Cd +
          $d(e, "grow", "positive") +
          e
        );
      case 4554:
        return Pd + $d(e, /([^-])(transform)/g, "$1" + Pd + "$2") + e;
      case 6187:
        return (
          $d(
            $d($d(e, /(zoom-|grab)/, Pd + "$1"), /(image-set)/, Pd + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return $d(e, /(image-set\([^]*)/, Pd + "$1$`$1");
      case 4968:
        return (
          $d(
            $d(
              e,
              /(.+:)(flex-)?(.*)/,
              Pd + "box-pack:$3" + Cd + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Pd +
          e +
          e
        );
      case 4200:
        if (!Dd(e, /flex-|baseline/))
          return Cd + "grid-column-align" + Ud(e, t) + e;
        break;
      case 2592:
      case 3360:
        return Cd + $d(e, "template-", "") + e;
      case 4384:
      case 3616:
        return n &&
          n.some(function (e, n) {
            return (t = n), Dd(e.props, /grid-\w+-end/);
          })
          ? ~Fd(e + (n = n[t].value), "span")
            ? e
            : Cd +
              $d(e, "-start", "") +
              e +
              Cd +
              "grid-row-span:" +
              (~Fd(n, "span") ? Dd(n, /\d+/) : +Dd(n, /\d+/) - +Dd(e, /\d+/)) +
              ";"
          : Cd + $d(e, "-start", "") + e;
      case 4896:
      case 4128:
        return n &&
          n.some(function (e) {
            return Dd(e.props, /grid-\w+-start/);
          })
          ? e
          : Cd + $d($d(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return $d(e, /(.+)-inline(.+)/, Pd + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Vd(e) - 1 - t > 6)
          switch (Bd(e, t + 1)) {
            case 109:
              if (45 !== Bd(e, t + 4)) break;
            case 102:
              return (
                $d(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Pd +
                    "$2-$3$1" +
                    Td +
                    (108 == Bd(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Fd(e, "stretch")
                ? gf($d(e, "stretch", "fill-available"), t, n) + e
                : e;
          }
        break;
      case 5152:
      case 5920:
        return $d(
          e,
          /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
          function (t, n, r, i, a, o, l) {
            return (
              Cd +
              n +
              ":" +
              r +
              l +
              (i ? Cd + n + "-span:" + (a ? o : +o - +r) + l : "") +
              e
            );
          }
        );
      case 4949:
        if (121 === Bd(e, t + 6)) return $d(e, ":", ":" + Pd) + e;
        break;
      case 6444:
        switch (Bd(e, 45 === Bd(e, 14) ? 18 : 11)) {
          case 120:
            return (
              $d(
                e,
                /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                "$1" +
                  Pd +
                  (45 === Bd(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  Pd +
                  "$2$3$1" +
                  Cd +
                  "$2box$3"
              ) + e
            );
          case 100:
            return $d(e, ":", ":" + Cd) + e;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return $d(e, "scroll-", "scroll-snap-") + e;
    }
    return e;
  }
  function yf(e, t) {
    for (var n = "", r = Hd(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
    return n;
  }
  function bf(e, t, n, r) {
    switch (e.type) {
      case zd:
        if (e.children.length) break;
      case Nd:
      case Ld:
        return (e.return = e.return || e.value);
      case _d:
        return "";
      case Md:
        return (e.return = e.value + "{" + yf(e.children, r) + "}");
      case Od:
        e.value = e.props.join(",");
    }
    return Vd((n = yf(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function wf(e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Ld:
          return void (e.return = gf(e.value, e.length, n));
        case Md:
          return yf([Zd(e, { value: $d(e.value, "@", "@" + Pd) })], r);
        case Od:
          if (e.length)
            return (function (e, t) {
              return e.map(t).join("");
            })(e.props, function (t) {
              switch (Dd(t, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return yf(
                    [Zd(e, { props: [$d(t, /:(read-\w+)/, ":" + Td + "$1")] })],
                    r
                  );
                case "::placeholder":
                  return yf(
                    [
                      Zd(e, {
                        props: [$d(t, /:(plac\w+)/, ":" + Pd + "input-$1")],
                      }),
                      Zd(e, { props: [$d(t, /:(plac\w+)/, ":" + Td + "$1")] }),
                      Zd(e, { props: [$d(t, /:(plac\w+)/, Cd + "input-$1")] }),
                    ],
                    r
                  );
              }
              return "";
            });
      }
  }
  var xf = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Sf =
      (typeof process < "u" &&
        void 0 !== process.env &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    Ef = typeof window < "u" && "HTMLElement" in window,
    kf = !!("boolean" == typeof SC_DISABLE_SPEEDY
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        void 0 !== process.env &&
        void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
      ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        void 0 !== process.env &&
        void 0 !== process.env.SC_DISABLE_SPEEDY &&
        "" !== process.env.SC_DISABLE_SPEEDY &&
        "false" !== process.env.SC_DISABLE_SPEEDY &&
        process.env.SC_DISABLE_SPEEDY),
    Cf = Object.freeze([]),
    Tf = Object.freeze({});
  var Pf = new Set([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "use",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ]),
    _f = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Of = /(^-|-$)/g;
  function Lf(e) {
    return e.replace(_f, "-").replace(Of, "");
  }
  var Nf = /(a)(d)/gi,
    Mf = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function zf(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Mf(t % 52) + n;
    return (Mf(t % 52) + n).replace(Nf, "$1-$2");
  }
  var If,
    jf = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    Rf = function (e) {
      return jf(5381, e);
    };
  function Af(e) {
    return "string" == typeof e && !0;
  }
  var Df = "function" == typeof Symbol && Symbol.for,
    $f = Df ? Symbol.for("react.memo") : 60115,
    Ff = Df ? Symbol.for("react.forward_ref") : 60112,
    Bf = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    Uf = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Vf = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Hf =
      (((If = {})[Ff] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
      (If[$f] = Vf),
      If);
  function Wf(e) {
    return ("type" in (t = e) && t.type.$$typeof) === $f
      ? Vf
      : "$$typeof" in e
      ? Hf[e.$$typeof]
      : Bf;
    var t;
  }
  var Gf = Object.defineProperty,
    qf = Object.getOwnPropertyNames,
    Yf = Object.getOwnPropertySymbols,
    Qf = Object.getOwnPropertyDescriptor,
    Xf = Object.getPrototypeOf,
    Kf = Object.prototype;
  function Jf(e, t, n) {
    if ("string" != typeof t) {
      if (Kf) {
        var r = Xf(t);
        r && r !== Kf && Jf(e, r, n);
      }
      var i = qf(t);
      Yf && (i = i.concat(Yf(t)));
      for (var a = Wf(e), o = Wf(t), l = 0; l < i.length; ++l) {
        var s = i[l];
        if (!(s in Uf || (n && n[s]) || (o && s in o) || (a && s in a))) {
          var u = Qf(t, s);
          try {
            Gf(e, s, u);
          } catch {}
        }
      }
    }
    return e;
  }
  function Zf(e) {
    return "function" == typeof e;
  }
  function ep(e) {
    return "object" == typeof e && "styledComponentId" in e;
  }
  function tp(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function np(e, t) {
    if (0 === e.length) return "";
    for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
    return n;
  }
  function rp(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
    );
  }
  function ip(e, t, n) {
    if ((void 0 === n && (n = !1), !n && !rp(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r++) e[r] = ip(e[r], t[r]);
    else if (rp(t)) for (var r in t) e[r] = ip(e[r], t[r]);
    return e;
  }
  function ap(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
        .concat(e, " for more information.")
        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
    );
  }
  var op = (function () {
      function e(e) {
        (this.groupSizes = new Uint32Array(512)),
          (this.length = 512),
          (this.tag = e);
      }
      return (
        (e.prototype.indexOfGroup = function (e) {
          for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
          return t;
        }),
        (e.prototype.insertRules = function (e, t) {
          if (e >= this.groupSizes.length) {
            for (var n = this.groupSizes, r = n.length, i = r; e >= i; )
              if ((i <<= 1) < 0) throw ap(16, "".concat(e));
            (this.groupSizes = new Uint32Array(i)),
              this.groupSizes.set(n),
              (this.length = i);
            for (var a = r; a < i; a++) this.groupSizes[a] = 0;
          }
          for (
            var o = this.indexOfGroup(e + 1), l = ((a = 0), t.length);
            a < l;
            a++
          )
            this.tag.insertRule(o, t[a]) && (this.groupSizes[e]++, o++);
        }),
        (e.prototype.clearGroup = function (e) {
          if (e < this.length) {
            var t = this.groupSizes[e],
              n = this.indexOfGroup(e),
              r = n + t;
            this.groupSizes[e] = 0;
            for (var i = n; i < r; i++) this.tag.deleteRule(n);
          }
        }),
        (e.prototype.getGroup = function (e) {
          var t = "";
          if (e >= this.length || 0 === this.groupSizes[e]) return t;
          for (
            var n = this.groupSizes[e],
              r = this.indexOfGroup(e),
              i = r + n,
              a = r;
            a < i;
            a++
          )
            t += "".concat(this.tag.getRule(a)).concat("/*!sc*/\n");
          return t;
        }),
        e
      );
    })(),
    lp = new Map(),
    sp = new Map(),
    up = 1,
    cp = function (e) {
      if (lp.has(e)) return lp.get(e);
      for (; sp.has(up); ) up++;
      var t = up++;
      return lp.set(e, t), sp.set(t, e), t;
    },
    dp = function (e, t) {
      lp.set(e, t), sp.set(t, e);
    },
    fp = "style["
      .concat(Sf, "][")
      .concat("data-styled-version", '="')
      .concat("6.0.0-rc.3", '"]'),
    pp = new RegExp(
      "^".concat(Sf, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
    ),
    hp = function (e, t, n) {
      for (var r, i = n.split(","), a = 0, o = i.length; a < o; a++)
        (r = i[a]) && e.registerName(t, r);
    },
    mp = function (e, t) {
      for (
        var n,
          r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
            "/*!sc*/\n"
          ),
          i = [],
          a = 0,
          o = r.length;
        a < o;
        a++
      ) {
        var l = r[a].trim();
        if (l) {
          var s = l.match(pp);
          if (s) {
            var u = 0 | parseInt(s[1], 10),
              c = s[2];
            0 !== u && (dp(c, u), hp(e, c, s[3]), e.getTag().insertRules(u, i)),
              (i.length = 0);
          } else i.push(l);
        }
      }
    };
  var vp = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        i = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(Sf)) return r;
          }
        })(n),
        a = void 0 !== i ? i.nextSibling : null;
      r.setAttribute(Sf, "active"),
        r.setAttribute("data-styled-version", "6.0.0-rc.3");
      var o = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
      return o && r.setAttribute("nonce", o), n.insertBefore(r, a), r;
    },
    gp = (function () {
      function e(e) {
        (this.element = vp(e)),
          this.element.appendChild(document.createTextNode("")),
          (this.sheet = (function (e) {
            if (e.sheet) return e.sheet;
            for (
              var t = document.styleSheets, n = 0, r = t.length;
              n < r;
              n++
            ) {
              var i = t[n];
              if (i.ownerNode === e) return i;
            }
            throw ap(17);
          })(this.element)),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (e, t) {
          try {
            return this.sheet.insertRule(t, e), this.length++, !0;
          } catch {
            return !1;
          }
        }),
        (e.prototype.deleteRule = function (e) {
          this.sheet.deleteRule(e), this.length--;
        }),
        (e.prototype.getRule = function (e) {
          var t = this.sheet.cssRules[e];
          return t && t.cssText ? t.cssText : "";
        }),
        e
      );
    })(),
    yp = (function () {
      function e(e) {
        (this.element = vp(e)),
          (this.nodes = this.element.childNodes),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (e, t) {
          if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t);
            return (
              this.element.insertBefore(n, this.nodes[e] || null),
              this.length++,
              !0
            );
          }
          return !1;
        }),
        (e.prototype.deleteRule = function (e) {
          this.element.removeChild(this.nodes[e]), this.length--;
        }),
        (e.prototype.getRule = function (e) {
          return e < this.length ? this.nodes[e].textContent : "";
        }),
        e
      );
    })(),
    bp = (function () {
      function e(e) {
        (this.rules = []), (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (e, t) {
          return (
            e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
          );
        }),
        (e.prototype.deleteRule = function (e) {
          this.rules.splice(e, 1), this.length--;
        }),
        (e.prototype.getRule = function (e) {
          return e < this.length ? this.rules[e] : "";
        }),
        e
      );
    })(),
    wp = Ef,
    xp = { isServer: !Ef, useCSSOMInjection: !kf },
    Sp = (function () {
      function e(e, t, n) {
        void 0 === e && (e = Tf),
          void 0 === t && (t = {}),
          (this.options = Ed(Ed({}, xp), e)),
          (this.gs = t),
          (this.names = new Map(n)),
          (this.server = !!e.isServer),
          !this.server &&
            Ef &&
            wp &&
            ((wp = !1),
            (function (e) {
              for (
                var t = document.querySelectorAll(fp), n = 0, r = t.length;
                n < r;
                n++
              ) {
                var i = t[n];
                i &&
                  "active" !== i.getAttribute(Sf) &&
                  (mp(e, i), i.parentNode && i.parentNode.removeChild(i));
              }
            })(this));
      }
      return (
        (e.registerId = function (e) {
          return cp(e);
        }),
        (e.prototype.reconstructWithOptions = function (t, n) {
          return (
            void 0 === n && (n = !0),
            new e(
              Ed(Ed({}, this.options), t),
              this.gs,
              (n && this.names) || void 0
            )
          );
        }),
        (e.prototype.allocateGSInstance = function (e) {
          return (this.gs[e] = (this.gs[e] || 0) + 1);
        }),
        (e.prototype.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((e = this.options),
              (t = e.useCSSOMInjection),
              (n = e.target),
              (r = e.isServer ? new bp(n) : t ? new gp(n) : new yp(n)),
              new op(r)))
          );
          var e, t, n, r;
        }),
        (e.prototype.hasNameForId = function (e, t) {
          return this.names.has(e) && this.names.get(e).has(t);
        }),
        (e.prototype.registerName = function (e, t) {
          if ((cp(e), this.names.has(e))) this.names.get(e).add(t);
          else {
            var n = new Set();
            n.add(t), this.names.set(e, n);
          }
        }),
        (e.prototype.insertRules = function (e, t, n) {
          this.registerName(e, t), this.getTag().insertRules(cp(e), n);
        }),
        (e.prototype.clearNames = function (e) {
          this.names.has(e) && this.names.get(e).clear();
        }),
        (e.prototype.clearRules = function (e) {
          this.getTag().clearGroup(cp(e)), this.clearNames(e);
        }),
        (e.prototype.clearTag = function () {
          this.tag = void 0;
        }),
        (e.prototype.toString = function () {
          return (function (e) {
            for (
              var t = e.getTag(),
                n = t.length,
                r = "",
                i = function (n) {
                  var i,
                    a = ((i = n), sp.get(i));
                  if (void 0 === a) return "continue";
                  var o = e.names.get(a),
                    l = t.getGroup(n);
                  if (void 0 === o || 0 === l.length) return "continue";
                  var s = ""
                      .concat(Sf, ".g")
                      .concat(n, '[id="')
                      .concat(a, '"]'),
                    u = "";
                  void 0 !== o &&
                    o.forEach(function (e) {
                      e.length > 0 && (u += "".concat(e, ","));
                    }),
                    (r += ""
                      .concat(l)
                      .concat(s, '{content:"')
                      .concat(u, '"}')
                      .concat("/*!sc*/\n"));
                },
                a = 0;
              a < n;
              a++
            )
              i(a);
            return r;
          })(this);
        }),
        e
      );
    })(),
    Ep = /&/g,
    kp = /^\s*\/\/.*$/gm;
  function Cp(e, t) {
    return e.map(function (e) {
      return (
        "rule" === e.type &&
          ((e.value = "".concat(t, " ").concat(e.value)),
          (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
          (e.props = e.props.map(function (e) {
            return "".concat(t, " ").concat(e);
          }))),
        Array.isArray(e.children) &&
          "@keyframes" !== e.type &&
          (e.children = Cp(e.children, t)),
        e
      );
    });
  }
  var Tp = new Sp(),
    Pp = (function (e) {
      var t,
        n,
        r,
        i = void 0 === e ? Tf : e,
        a = i.options,
        o = void 0 === a ? Tf : a,
        l = i.plugins,
        s = void 0 === l ? Cf : l,
        u = function (e, r, i) {
          return i === n ||
            (i.startsWith(n) && i.endsWith(n) && i.replaceAll(n, "").length > 0)
            ? ".".concat(t)
            : e;
        },
        c = s.slice();
      c.push(function (e) {
        e.type === Od &&
          e.value.includes("&") &&
          (e.props[0] = e.props[0].replace(Ep, n).replace(r, u));
      }),
        o.prefix && c.push(wf),
        c.push(bf);
      var d = function (e, i, a, l) {
        void 0 === i && (i = ""),
          void 0 === a && (a = ""),
          void 0 === l && (l = "&"),
          (t = l),
          (n = i),
          (r = new RegExp("\\".concat(n, "\\b"), "g"));
        var s = e.replace(kp, ""),
          u = ff(
            a || i ? "".concat(a, " ").concat(i, " { ").concat(s, " }") : s
          );
        o.namespace && (u = Cp(u, o.namespace));
        var d = [];
        return (
          yf(
            u,
            (function (e) {
              var t = Hd(e);
              return function (n, r, i, a) {
                for (var o = "", l = 0; l < t; l++) o += e[l](n, r, i, a) || "";
                return o;
              };
            })(
              c.concat(
                (function (e) {
                  return function (t) {
                    t.root || ((t = t.return) && e(t));
                  };
                })(function (e) {
                  return d.push(e);
                })
              )
            )
          ),
          d
        );
      };
      return (
        (d.hash = s.length
          ? s
              .reduce(function (e, t) {
                return t.name || ap(15), jf(e, t.name);
              }, 5381)
              .toString()
          : ""),
        d
      );
    })(),
    _p = D.createContext({
      shouldForwardProp: void 0,
      styleSheet: Tp,
      stylis: Pp,
    });
  function Op() {
    return A.useContext(_p);
  }
  _p.Consumer, D.createContext(void 0);
  var Lp = (function () {
      function e(e, t) {
        var n = this;
        (this.inject = function (e, t) {
          void 0 === t && (t = Pp);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) ||
            e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }),
          (this.toString = function () {
            throw ap(12, String(n.name));
          }),
          (this.name = e),
          (this.id = "sc-keyframes-".concat(e)),
          (this.rules = t);
      }
      return (
        (e.prototype.getName = function (e) {
          return void 0 === e && (e = Pp), this.name + e.hash;
        }),
        e
      );
    })(),
    Np = function (e) {
      return e >= "A" && e <= "Z";
    };
  function Mp(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e[n];
      if (1 === n && "-" === r && "-" === e[0]) return e;
      Np(r) ? (t += "-" + r.toLowerCase()) : (t += r);
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var zp = function (e) {
      return null == e || !1 === e || "" === e;
    },
    Ip = function (e) {
      var t,
        n,
        r = [];
      for (var i in e) {
        var a = e[i];
        e.hasOwnProperty(i) &&
          !zp(a) &&
          ((Array.isArray(a) && a.isCss) || Zf(a)
            ? r.push("".concat(Mp(i), ":"), a, ";")
            : rp(a)
            ? r.push.apply(
                r,
                kd(kd(["".concat(i, " {")], Ip(a), !1), ["}"], !1)
              )
            : r.push(
                ""
                  .concat(Mp(i), ": ")
                  .concat(
                    ((t = i),
                    null == (n = a) || "boolean" == typeof n || "" === n
                      ? ""
                      : "number" != typeof n ||
                        0 === n ||
                        t in xf ||
                        t.startsWith("--")
                      ? String(n).trim()
                      : "".concat(n, "px")),
                    ";"
                  )
              ));
      }
      return r;
    };
  function jp(e, t, n, r) {
    return zp(e)
      ? []
      : ep(e)
      ? [".".concat(e.styledComponentId)]
      : Zf(e)
      ? !Zf((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t
        ? [e]
        : jp(e(t), t, n, r)
      : e instanceof Lp
      ? n
        ? (e.inject(n, r), [e.getName(r)])
        : [e]
      : rp(e)
      ? Ip(e)
      : Array.isArray(e)
      ? e.flatMap(function (e) {
          return jp(e, t, n, r);
        })
      : [e.toString()];
    var i;
  }
  var Rp = Rf("6.0.0-rc.3"),
    Ap = (function () {
      function e(e, t, n) {
        (this.rules = e),
          (this.staticRulesId = ""),
          (this.isStatic =
            (void 0 === n || n.isStatic) &&
            (function (e) {
              for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (Zf(n) && !ep(n)) return !1;
              }
              return !0;
            })(e)),
          (this.componentId = t),
          (this.baseHash = jf(Rp, t)),
          (this.baseStyle = n),
          Sp.registerId(t);
      }
      return (
        (e.prototype.generateAndInjectStyles = function (e, t, n) {
          var r = this.baseStyle
            ? this.baseStyle.generateAndInjectStyles(e, t, n)
            : "";
          if (this.isStatic && !n.hash)
            if (
              this.staticRulesId &&
              t.hasNameForId(this.componentId, this.staticRulesId)
            )
              r = tp(r, this.staticRulesId);
            else {
              var i = np(jp(this.rules, e, t, n)),
                a = zf(jf(this.baseHash, i) >>> 0);
              if (!t.hasNameForId(this.componentId, a)) {
                var o = n(i, ".".concat(a), void 0, this.componentId);
                t.insertRules(this.componentId, a, o);
              }
              (r = tp(r, a)), (this.staticRulesId = a);
            }
          else {
            for (
              var l = jf(this.baseHash, n.hash), s = "", u = 0;
              u < this.rules.length;
              u++
            ) {
              var c = this.rules[u];
              if ("string" == typeof c) s += c;
              else if (c) {
                var d = np(jp(c, e, t, n));
                (l = jf(l, d)), (s += d);
              }
            }
            if (s) {
              var f = zf(l >>> 0);
              t.hasNameForId(this.componentId, f) ||
                t.insertRules(
                  this.componentId,
                  f,
                  n(s, ".".concat(f), void 0, this.componentId)
                ),
                (r = tp(r, f));
            }
          }
          return r;
        }),
        e
      );
    })(),
    Dp = D.createContext(void 0);
  Dp.Consumer;
  var $p = {};
  function Fp(e, t, n) {
    var r,
      i,
      a = ep(e),
      o = e,
      l = !Af(e),
      s = t.componentId,
      u =
        void 0 === s
          ? (function (e, t) {
              var n = "string" != typeof e ? "sc" : Lf(e);
              $p[n] = ($p[n] || 0) + 1;
              var r = "".concat(n, "-").concat(
                (function (e) {
                  return zf(Rf(e) >>> 0);
                })("6.0.0-rc.3" + n + $p[n])
              );
              return t ? "".concat(t, "-").concat(r) : r;
            })(t.displayName, t.parentComponentId)
          : s,
      c = t.displayName,
      d =
        void 0 === c
          ? Af((i = e))
            ? "styled.".concat(i)
            : "Styled(".concat(
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(i),
                ")"
              )
          : c,
      f = null !== (r = t.attrs) && void 0 !== r ? r : [],
      p =
        t.displayName && t.componentId
          ? "".concat(Lf(t.displayName), "-").concat(t.componentId)
          : t.componentId || u,
      h = a && o.attrs ? o.attrs.concat(f).filter(Boolean) : f,
      m = t.shouldForwardProp;
    if (a && o.shouldForwardProp) {
      var v = o.shouldForwardProp;
      if (t.shouldForwardProp) {
        var g = t.shouldForwardProp;
        m = function (e, t) {
          return v(e, t) && g(e, t);
        };
      } else m = v;
    }
    var y = new Ap(n, p, a ? o.componentStyle : void 0),
      b = y.isStatic && 0 === f.length;
    function w(e, t) {
      return (function (e, t, n, r) {
        var i = e.attrs,
          a = e.componentStyle,
          o = e.defaultProps,
          l = e.foldedComponentIds,
          s = e.styledComponentId,
          u = e.target,
          c = A.useContext(Dp),
          d = Op(),
          f = e.shouldForwardProp || d.shouldForwardProp,
          p = (function (e, t, n) {
            for (
              var r, i = Ed(Ed({}, t), { className: void 0, theme: n }), a = 0;
              a < e.length;
              a += 1
            ) {
              var o = Zf((r = e[a])) ? r(i) : r;
              for (var l in o)
                i[l] =
                  "className" === l
                    ? tp(i[l], o[l])
                    : "style" === l
                    ? Ed(Ed({}, i[l]), o[l])
                    : o[l];
            }
            return (
              t.className && (i.className = tp(i.className, t.className)), i
            );
          })(
            i,
            t,
            (function (e, t, n) {
              return (
                void 0 === n && (n = Tf),
                (e.theme !== n.theme && e.theme) || t || n.theme
              );
            })(t, c, o) || Tf
          ),
          h = p.as || u,
          m = {};
        for (var v in p)
          void 0 === p[v] ||
            "$" === v[0] ||
            "as" === v ||
            "theme" === v ||
            ("forwardedAs" === v
              ? (m.as = p.forwardedAs)
              : (f && !f(v, h)) || (m[v] = p[v]));
        var g,
          y,
          b,
          w,
          x =
            ((g = a),
            (y = r),
            (b = p),
            (w = Op()),
            g.generateAndInjectStyles(y ? Tf : b, w.styleSheet, w.stylis)),
          S = tp(l, s);
        return (
          x && (S += " " + x),
          p.className && (S += " " + p.className),
          (m[Af(h) && !Pf.has(h) ? "class" : "className"] = S),
          (m.ref = n),
          A.createElement(h, m)
        );
      })(x, e, t, b);
    }
    w.displayName = d;
    var x = D.forwardRef(w);
    return (
      (x.attrs = h),
      (x.componentStyle = y),
      (x.displayName = d),
      (x.shouldForwardProp = m),
      (x.foldedComponentIds = a
        ? tp(o.foldedComponentIds, o.styledComponentId)
        : ""),
      (x.styledComponentId = p),
      (x.target = a ? o.target : e),
      Object.defineProperty(x, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (e) {
          this._foldedDefaultProps = a
            ? (function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                for (var r = 0, i = t; r < i.length; r++) ip(e, i[r], !0);
                return e;
              })({}, o.defaultProps, e)
            : e;
        },
      }),
      Object.defineProperty(x, "toString", {
        value: function () {
          return ".".concat(x.styledComponentId);
        },
      }),
      l &&
        Jf(x, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
        }),
      x
    );
  }
  function Bp(e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  }
  var Up = function (e) {
    return Object.assign(e, { isCss: !0 });
  };
  function Vp(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (Zf(e) || rp(e)) return Up(jp(Bp(Cf, kd([e], t, !0))));
    var r = e;
    return 0 === t.length && 1 === r.length && "string" == typeof r[0]
      ? jp(r)
      : Up(jp(Bp(r, t)));
  }
  function Hp(e, t, n) {
    if ((void 0 === n && (n = Tf), !t)) throw ap(1, t);
    var r = function (r) {
      for (var i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      return e(t, n, Vp.apply(void 0, kd([r], i, !1)));
    };
    return (
      (r.attrs = function (r) {
        return Hp(
          e,
          t,
          Ed(Ed({}, n), {
            attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
          })
        );
      }),
      (r.withConfig = function (r) {
        return Hp(e, t, Ed(Ed({}, n), r));
      }),
      r
    );
  }
  function Wp(e) {
    return Hp(Fp, e);
  }
  var Gp = Wp;
  Pf.forEach(function (e) {
    Gp[e] = Wp(e);
  });
  function qp(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function Yp(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : qp(t[n]) &&
            qp(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            Yp(e[n], t[n]);
      });
  }
  const Qp = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function Xp() {
    const e = typeof document < "u" ? document : {};
    return Yp(e, Qp), e;
  }
  const Kp = {
    document: Qp,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function Jp() {
    const e = typeof window < "u" ? window : {};
    return Yp(e, Kp), e;
  }
  function Zp(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function eh() {
    return Date.now();
  }
  function th(e, t) {
    void 0 === t && (t = "x");
    const n = Jp();
    let r, i, a;
    const o = (function (e) {
      const t = Jp();
      let n;
      return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
      );
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((i = o.transform || o.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (a = new n.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((a =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = a.toString().split(","))),
      "x" === t &&
        (i = n.WebKitCSSMatrix
          ? a.m41
          : 16 === r.length
          ? parseFloat(r[12])
          : parseFloat(r[4])),
      "y" === t &&
        (i = n.WebKitCSSMatrix
          ? a.m42
          : 16 === r.length
          ? parseFloat(r[13])
          : parseFloat(r[5])),
      i || 0
    );
  }
  function nh(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function rh(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function ih() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (null != r && !rh(r)) {
        const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = n.length; t < i; t += 1) {
          const i = n[t],
            a = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== a &&
            a.enumerable &&
            (nh(e[i]) && nh(r[i])
              ? r[i].__swiper__
                ? (e[i] = r[i])
                : ih(e[i], r[i])
              : !nh(e[i]) && nh(r[i])
              ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : ih(e[i], r[i]))
              : (e[i] = r[i]));
        }
      }
    }
    return e;
  }
  function ah(e, t, n) {
    e.style.setProperty(t, n);
  }
  function oh(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Jp(),
      a = -t.translate;
    let o,
      l = null;
    const s = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > a ? "next" : "prev",
      c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
      d = () => {
        (o = new Date().getTime()), null === l && (l = o);
        const e = Math.max(Math.min((o - l) / s, 1), 0),
          u = 0.5 - Math.cos(e * Math.PI) / 2;
        let f = a + u * (n - a);
        if ((c(f, n) && (f = n), t.wrapperEl.scrollTo({ [r]: f }), c(f, n)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: f });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  function lh(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function sh(e, t) {
    return Jp().getComputedStyle(e, null).getPropertyValue(t);
  }
  function uh(e) {
    let t,
      n = e;
    if (n) {
      for (t = 0; null !== (n = n.previousSibling); )
        1 === n.nodeType && (t += 1);
      return t;
    }
  }
  function ch(e, t, n) {
    const r = Jp();
    return n
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let dh, fh, ph;
  function hh() {
    return (
      dh ||
        (dh = (function () {
          const e = Jp(),
            t = Xp();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      dh
    );
  }
  function mh(e) {
    return (
      void 0 === e && (e = {}),
      fh ||
        (fh = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const n = hh(),
            r = Jp(),
            i = r.navigator.platform,
            a = t || r.navigator.userAgent,
            o = { ios: !1, android: !1 },
            l = r.screen.width,
            s = r.screen.height,
            u = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = a.match(/(iPad).*OS\s([\d_]+)/);
          const d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            p = "Win32" === i;
          let h = "MacIntel" === i;
          return (
            !c &&
              h &&
              n.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${s}`) >= 0 &&
              ((c = a.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (h = !1)),
            u && !p && ((o.os = "android"), (o.android = !0)),
            (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      fh
    );
  }
  function vh() {
    return (
      ph ||
        (ph = (function () {
          const e = Jp();
          let t = !1;
          function n() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (n()) {
            const n = String(e.navigator.userAgent);
            if (n.includes("Version/")) {
              const [e, r] = n
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && r < 2);
            }
          }
          return {
            isSafari: t || n(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      ph
    );
  }
  var gh = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
      const i = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          r.eventsListeners[e] || (r.eventsListeners[e] = []),
            r.eventsListeners[e][i](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
      function i() {
        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
          a[o] = arguments[o];
        t.apply(r, a);
      }
      return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || "function" != typeof e) return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((e) => {
            typeof t > "u"
              ? (n.eventsListeners[e] = [])
              : n.eventsListeners[e] &&
                n.eventsListeners[e].forEach((r, i) => {
                  (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                    n.eventsListeners[e].splice(i, 1);
                });
          }),
        n
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, n, r;
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        "string" == typeof a[0] || Array.isArray(a[0])
          ? ((t = a[0]), (n = a.slice(1, a.length)), (r = e))
          : ((t = a[0].events), (n = a[0].data), (r = a[0].context || e)),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(r, [t, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(r, n);
              });
        }),
        e
      );
    },
  };
  const yh = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (n) {
        const t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    bh = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute("loading");
    },
    wh = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const n = e.slides.length;
      if (!n || !t || t < 0) return;
      t = Math.min(t, n);
      const r =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const n = i,
          a = [n - t];
        return (
          a.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
          void e.slides.forEach((t, n) => {
            a.includes(t.column) && bh(e, n);
          })
        );
      }
      const a = i + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let r = i - t; r <= a + t; r += 1) {
          const t = ((r % n) + n) % n;
          (t < i || t > a) && bh(e, t);
        }
      else
        for (let r = Math.max(i - t, 0); r <= Math.min(a + t, n - 1); r += 1)
          r !== i && (r > a || r < i) && bh(e, r);
    };
  var xh = {
    updateSize: function () {
      const e = this;
      let t, n;
      const r = e.el;
      (t =
        typeof e.params.width < "u" && null !== e.params.width
          ? e.params.width
          : r.clientWidth),
        (n =
          typeof e.params.height < "u" && null !== e.params.height
            ? e.params.height
            : r.clientHeight),
        !((0 === t && e.isHorizontal()) || (0 === n && e.isVertical())) &&
          ((t =
            t -
            parseInt(sh(r, "padding-left") || 0, 10) -
            parseInt(sh(r, "padding-right") || 0, 10)),
          (n =
            n -
            parseInt(sh(r, "padding-top") || 0, 10) -
            parseInt(sh(r, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(n) && (n = 0),
          Object.assign(e, {
            width: t,
            height: n,
            size: e.isHorizontal() ? t : n,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function n(e, n) {
        return parseFloat(e.getPropertyValue(t(n)) || 0);
      }
      const r = e.params,
        {
          wrapperEl: i,
          slidesEl: a,
          size: o,
          rtlTranslate: l,
          wrongRTL: s,
        } = e,
        u = e.virtual && r.virtual.enabled,
        c = u ? e.virtual.slides.length : e.slides.length,
        d = lh(a, `.${e.params.slideClass}, swiper-slide`),
        f = u ? e.virtual.slides.length : d.length;
      let p = [];
      const h = [],
        m = [];
      let v = r.slidesOffsetBefore;
      "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
      let g = r.slidesOffsetAfter;
      "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
      const y = e.snapGrid.length,
        b = e.slidesGrid.length;
      let w = r.spaceBetween,
        x = -v,
        S = 0,
        E = 0;
      if (typeof o > "u") return;
      "string" == typeof w && w.indexOf("%") >= 0
        ? (w = (parseFloat(w.replace("%", "")) / 100) * o)
        : "string" == typeof w && (w = parseFloat(w)),
        (e.virtualSize = -w),
        d.forEach((e) => {
          l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        r.centeredSlides &&
          r.cssMode &&
          (ah(i, "--swiper-centered-offset-before", ""),
          ah(i, "--swiper-centered-offset-after", ""));
      const k = r.grid && r.grid.rows > 1 && e.grid;
      let C;
      k && e.grid.initSlides(f);
      const T =
        "auto" === r.slidesPerView &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (e) => typeof r.breakpoints[e].slidesPerView < "u"
        ).length > 0;
      for (let i = 0; i < f; i += 1) {
        let a;
        if (
          ((C = 0),
          d[i] && (a = d[i]),
          k && e.grid.updateSlide(i, a, f, t),
          !d[i] || "none" !== sh(a, "display"))
        ) {
          if ("auto" === r.slidesPerView) {
            T && (d[i].style[t("width")] = "");
            const o = getComputedStyle(a),
              l = a.style.transform,
              s = a.style.webkitTransform;
            if (
              (l && (a.style.transform = "none"),
              s && (a.style.webkitTransform = "none"),
              r.roundLengths)
            )
              C = e.isHorizontal() ? ch(a, "width", !0) : ch(a, "height", !0);
            else {
              const e = n(o, "width"),
                t = n(o, "padding-left"),
                r = n(o, "padding-right"),
                i = n(o, "margin-left"),
                l = n(o, "margin-right"),
                s = o.getPropertyValue("box-sizing");
              if (s && "border-box" === s) C = e + i + l;
              else {
                const { clientWidth: n, offsetWidth: o } = a;
                C = e + t + r + i + l + (o - n);
              }
            }
            l && (a.style.transform = l),
              s && (a.style.webkitTransform = s),
              r.roundLengths && (C = Math.floor(C));
          } else
            (C = (o - (r.slidesPerView - 1) * w) / r.slidesPerView),
              r.roundLengths && (C = Math.floor(C)),
              d[i] && (d[i].style[t("width")] = `${C}px`);
          d[i] && (d[i].swiperSlideSize = C),
            m.push(C),
            r.centeredSlides
              ? ((x = x + C / 2 + S / 2 + w),
                0 === S && 0 !== i && (x = x - o / 2 - w),
                0 === i && (x = x - o / 2 - w),
                Math.abs(x) < 0.001 && (x = 0),
                r.roundLengths && (x = Math.floor(x)),
                E % r.slidesPerGroup == 0 && p.push(x),
                h.push(x))
              : (r.roundLengths && (x = Math.floor(x)),
                (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(x),
                h.push(x),
                (x = x + C + w)),
            (e.virtualSize += C + w),
            (S = C),
            (E += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, o) + g),
        l &&
          s &&
          ("slide" === r.effect || "coverflow" === r.effect) &&
          (i.style.width = `${e.virtualSize + w}px`),
        r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + w}px`),
        k && e.grid.updateWrapperSize(C, p, t),
        !r.centeredSlides)
      ) {
        const t = [];
        for (let n = 0; n < p.length; n += 1) {
          let i = p[n];
          r.roundLengths && (i = Math.floor(i)),
            p[n] <= e.virtualSize - o && t.push(i);
        }
        (p = t),
          Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - o);
      }
      if (u && r.loop) {
        const t = m[0] + w;
        if (r.slidesPerGroup > 1) {
          const n = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                r.slidesPerGroup
            ),
            i = t * r.slidesPerGroup;
          for (let e = 0; e < n; e += 1) p.push(p[p.length - 1] + i);
        }
        for (
          let n = 0;
          n < e.virtual.slidesBefore + e.virtual.slidesAfter;
          n += 1
        )
          1 === r.slidesPerGroup && p.push(p[p.length - 1] + t),
            h.push(h[h.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === p.length && (p = [0]), 0 !== w)) {
        const n = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        d.filter(
          (e, t) => !(r.cssMode && !r.loop) || t !== d.length - 1
        ).forEach((e) => {
          e.style[n] = `${w}px`;
        });
      }
      if (r.centeredSlides && r.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (w || 0);
        }),
          (e -= w);
        const t = e - o;
        p = p.map((e) => (e <= 0 ? -v : e > t ? t + g : e));
      }
      if (r.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (w || 0);
          }),
          (e -= w),
          e < o)
        ) {
          const t = (o - e) / 2;
          p.forEach((e, n) => {
            p[n] = e - t;
          }),
            h.forEach((e, n) => {
              h[n] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: p,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
      ) {
        ah(i, "--swiper-centered-offset-before", -p[0] + "px"),
          ah(
            i,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          n = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + n));
      }
      if (
        (f !== c && e.emit("slidesLengthChange"),
        p.length !== y &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== b && e.emit("slidesGridLengthChange"),
        r.watchSlidesProgress && e.updateSlidesOffset(),
        !(u || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
      ) {
        const t = `${r.containerModifierClass}backface-hidden`,
          n = e.el.classList.contains(t);
        f <= r.maxBackfaceHiddenSlides
          ? n || e.el.classList.add(t)
          : n && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled;
      let i,
        a = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            n.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !r) break;
            n.push(o(e));
          }
      else n.push(o(t.activeIndex));
      for (i = 0; i < n.length; i += 1)
        if (typeof n[i] < "u") {
          const e = n[i].offsetHeight;
          a = e > a ? e : a;
        }
      (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        n = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset =
          (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
          n -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        n = t.params,
        { slides: r, rtlTranslate: i, snapGrid: a } = t;
      if (0 === r.length) return;
      typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
      let o = -e;
      i && (o = e),
        r.forEach((e) => {
          e.classList.remove(n.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = n.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < r.length; e += 1) {
        const s = r[e];
        let u = s.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
        const c =
            (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
            (s.swiperSlideSize + l),
          d =
            (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
            (s.swiperSlideSize + l),
          f = -(o - u),
          p = f + t.slidesSizesGrid[e];
        ((f >= 0 && f < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (f <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(s),
          t.visibleSlidesIndexes.push(e),
          r[e].classList.add(n.slideVisibleClass)),
          (s.progress = i ? -c : c),
          (s.originalProgress = i ? -d : d);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (typeof e > "u") {
        const n = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * n) || 0;
      }
      const n = t.params,
        r = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: a, isEnd: o, progressLoop: l } = t;
      const s = a,
        u = o;
      if (0 === r) (i = 0), (a = !0), (o = !0);
      else {
        i = (e - t.minTranslate()) / r;
        const n = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (a = n || i <= 0), (o = l || i >= 1), n && (i = 0), l && (i = 1);
      }
      if (n.loop) {
        const n = t.getSlideIndexByData(0),
          r = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[n],
          a = t.slidesGrid[r],
          o = t.slidesGrid[t.slidesGrid.length - 1],
          s = Math.abs(e);
        (l = s >= i ? (s - i) / o : (s + o - a) / o), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: a,
        isEnd: o,
      }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
          t.updateSlidesProgress(e),
        a && !s && t.emit("reachBeginning toEdge"),
        o && !u && t.emit("reachEnd toEdge"),
        ((s && !a) || (u && !o)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
        a = e.virtual && n.virtual.enabled,
        o = (e) => lh(r, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            n.slideActiveClass,
            n.slideNextClass,
            n.slidePrevClass
          );
        }),
        a)
      )
        if (n.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = o(`[data-swiper-slide-index="${t}"]`));
        } else l = o(`[data-swiper-slide-index="${i}"]`);
      else l = t[i];
      if (l) {
        l.classList.add(n.slideActiveClass);
        let e = (function (e, t) {
          const n = [];
          for (; e.nextElementSibling; ) {
            const r = e.nextElementSibling;
            t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
          }
          return n;
        })(l, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !e && (e = t[0]), e && e.classList.add(n.slideNextClass);
        let r = (function (e, t) {
          const n = [];
          for (; e.previousElementSibling; ) {
            const r = e.previousElementSibling;
            t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
          }
          return n;
        })(l, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && 0 === !r && (r = t[t.length - 1]),
          r && r.classList.add(n.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: r,
          params: i,
          activeIndex: a,
          realIndex: o,
          snapIndex: l,
        } = t;
      let s,
        u = e;
      const c = (e) => {
        let n = e - t.virtual.slidesBefore;
        return (
          n < 0 && (n = t.virtual.slides.length + n),
          n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
          n
        );
      };
      if (
        (typeof u > "u" &&
          (u = (function (e) {
            const { slidesGrid: t, params: n } = e,
              r = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              typeof t[e + 1] < "u"
                ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (i = e)
                  : r >= t[e] && r < t[e + 1] && (i = e + 1)
                : r >= t[e] && (i = e);
            return (
              n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i
            );
          })(t)),
        r.indexOf(n) >= 0)
      )
        s = r.indexOf(n);
      else {
        const e = Math.min(i.slidesPerGroupSkip, u);
        s = e + Math.floor((u - e) / i.slidesPerGroup);
      }
      if ((s >= r.length && (s = r.length - 1), u === a))
        return (
          s !== l && ((t.snapIndex = s), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(u))
          )
        );
      let d;
      (d =
        t.virtual && i.virtual.enabled && i.loop
          ? c(u)
          : t.slides[u]
          ? parseInt(
              t.slides[u].getAttribute("data-swiper-slide-index") || u,
              10
            )
          : u),
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: s,
          previousRealIndex: o,
          realIndex: d,
          previousIndex: a,
          activeIndex: u,
        }),
        t.initialized && wh(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        o !== d && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        n = t.params,
        r = e.closest(`.${n.slideClass}, swiper-slide`);
      let i,
        a = !1;
      if (r)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === r) {
            (a = !0), (i = e);
            break;
          }
      if (!r || !a)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = i),
        n.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var Sh = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: n, translate: r, wrapperEl: i } = this;
      if (t.virtualTranslate) return n ? -r : r;
      if (t.cssMode) return r;
      let a = th(i, e);
      return (a += this.cssOverflowAdjustment()), n && (a = -a), a || 0;
    },
    setTranslate: function (e, t) {
      const n = this,
        { rtlTranslate: r, params: i, wrapperEl: a, progress: o } = n;
      let l,
        s = 0,
        u = 0;
      n.isHorizontal() ? (s = r ? -e : e) : (u = e),
        i.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? s : u),
        i.cssMode
          ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
              ? -s
              : -u)
          : i.virtualTranslate ||
            (n.isHorizontal()
              ? (s -= n.cssOverflowAdjustment())
              : (u -= n.cssOverflowAdjustment()),
            (a.style.transform = `translate3d(${s}px, ${u}px, 0px)`));
      const c = n.maxTranslate() - n.minTranslate();
      (l = 0 === c ? 0 : (e - n.minTranslate()) / c),
        l !== o && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, n, r, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        void 0 === r && (r = !0);
      const a = this,
        { params: o, wrapperEl: l } = a;
      if (a.animating && o.preventInteractionOnTransition) return !1;
      const s = a.minTranslate(),
        u = a.maxTranslate();
      let c;
      if (
        ((c = r && e > s ? s : r && e < u ? u : e),
        a.updateProgress(c),
        o.cssMode)
      ) {
        const e = a.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!a.support.smoothScroll)
            return (
              oh({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }),
              !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (a.setTransition(0),
            a.setTranslate(c),
            n &&
              (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd")))
          : (a.setTransition(t),
            a.setTranslate(c),
            n &&
              (a.emit("beforeTransitionStart", t, i),
              a.emit("transitionStart")),
            a.animating ||
              ((a.animating = !0),
              a.onTranslateToWrapperTransitionEnd ||
                (a.onTranslateToWrapperTransitionEnd = function (e) {
                  !a ||
                    a.destroyed ||
                    (e.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      n && a.emit("transitionEnd")));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function Eh(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: a, previousIndex: o } = t;
    let l = r;
    if (
      (l || (l = a > o ? "next" : a < o ? "prev" : "reset"),
      t.emit(`transition${i}`),
      n && a !== o)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var kh = {
    setTransition: function (e, t) {
      const n = this;
      n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
        n.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      const n = this,
        { params: r } = n;
      r.cssMode ||
        (r.autoHeight && n.updateAutoHeight(),
        Eh({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      const n = this,
        { params: r } = n;
      (n.animating = !1),
        !r.cssMode &&
          (n.setTransition(0),
          Eh({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
    },
  };
  var Ch = {
    slideTo: function (e, t, n, r, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const a = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: l,
        snapGrid: s,
        slidesGrid: u,
        previousIndex: c,
        activeIndex: d,
        rtlTranslate: f,
        wrapperEl: p,
        enabled: h,
      } = a;
      if ((a.animating && l.preventInteractionOnTransition) || (!h && !r && !i))
        return !1;
      const m = Math.min(a.params.slidesPerGroupSkip, o);
      let v = m + Math.floor((o - m) / a.params.slidesPerGroup);
      v >= s.length && (v = s.length - 1);
      const g = -s[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < u.length; e += 1) {
          const t = -Math.floor(100 * g),
            n = Math.floor(100 * u[e]),
            r = Math.floor(100 * u[e + 1]);
          typeof u[e + 1] < "u"
            ? t >= n && t < r - (r - n) / 2
              ? (o = e)
              : t >= n && t < r && (o = e + 1)
            : t >= n && (o = e);
        }
      if (
        a.initialized &&
        o !== d &&
        ((!a.allowSlideNext &&
          (f
            ? g > a.translate && g > a.minTranslate()
            : g < a.translate && g < a.minTranslate())) ||
          (!a.allowSlidePrev &&
            g > a.translate &&
            g > a.maxTranslate() &&
            (d || 0) !== o))
      )
        return !1;
      let y;
      if (
        (o !== (c || 0) && n && a.emit("beforeSlideChangeStart"),
        a.updateProgress(g),
        (y = o > d ? "next" : o < d ? "prev" : "reset"),
        (f && -g === a.translate) || (!f && g === a.translate))
      )
        return (
          a.updateActiveIndex(o),
          l.autoHeight && a.updateAutoHeight(),
          a.updateSlidesClasses(),
          "slide" !== l.effect && a.setTranslate(g),
          "reset" !== y && (a.transitionStart(n, y), a.transitionEnd(n, y)),
          !1
        );
      if (l.cssMode) {
        const e = a.isHorizontal(),
          n = f ? g : -g;
        if (0 === t) {
          const t = a.virtual && a.params.virtual.enabled;
          t &&
            ((a.wrapperEl.style.scrollSnapType = "none"),
            (a._immediateVirtual = !0)),
            t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
              ? ((a._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  p[e ? "scrollLeft" : "scrollTop"] = n;
                }))
              : (p[e ? "scrollLeft" : "scrollTop"] = n),
            t &&
              requestAnimationFrame(() => {
                (a.wrapperEl.style.scrollSnapType = ""),
                  (a._immediateVirtual = !1);
              });
        } else {
          if (!a.support.smoothScroll)
            return (
              oh({ swiper: a, targetPosition: n, side: e ? "left" : "top" }), !0
            );
          p.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
        }
        return !0;
      }
      return (
        a.setTransition(t),
        a.setTranslate(g),
        a.updateActiveIndex(o),
        a.updateSlidesClasses(),
        a.emit("beforeTransitionStart", t, r),
        a.transitionStart(n, y),
        0 === t
          ? a.transitionEnd(n, y)
          : a.animating ||
            ((a.animating = !0),
            a.onSlideToWrapperTransitionEnd ||
              (a.onSlideToWrapperTransitionEnd = function (e) {
                !a ||
                  a.destroyed ||
                  (e.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(n, y)));
              }),
            a.wrapperEl.addEventListener(
              "transitionend",
              a.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, n, r) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const i = this;
      let a = e;
      return (
        i.params.loop &&
          (i.virtual && i.params.virtual.enabled
            ? (a += i.virtual.slidesBefore)
            : (a = i.getSlideIndexByData(a))),
        i.slideTo(a, t, n, r)
      );
    },
    slideNext: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const r = this,
        { enabled: i, params: a, animating: o } = r;
      if (!i) return r;
      let l = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
      const s = r.activeIndex < a.slidesPerGroupSkip ? 1 : l,
        u = r.virtual && a.virtual.enabled;
      if (a.loop) {
        if (o && !u && a.loopPreventsSliding) return !1;
        r.loopFix({ direction: "next" }),
          (r._clientLeft = r.wrapperEl.clientLeft);
      }
      return a.rewind && r.isEnd
        ? r.slideTo(0, e, t, n)
        : r.slideTo(r.activeIndex + s, e, t, n);
    },
    slidePrev: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const r = this,
        {
          params: i,
          snapGrid: a,
          slidesGrid: o,
          rtlTranslate: l,
          enabled: s,
          animating: u,
        } = r;
      if (!s) return r;
      const c = r.virtual && i.virtual.enabled;
      if (i.loop) {
        if (u && !c && i.loopPreventsSliding) return !1;
        r.loopFix({ direction: "prev" }),
          (r._clientLeft = r.wrapperEl.clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const f = d(l ? r.translate : -r.translate),
        p = a.map((e) => d(e));
      let h = a[p.indexOf(f) - 1];
      if (typeof h > "u" && i.cssMode) {
        let e;
        a.forEach((t, n) => {
          f >= t && (e = n);
        }),
          typeof e < "u" && (h = a[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (typeof h < "u" &&
          ((m = o.indexOf(h)),
          m < 0 && (m = r.activeIndex - 1),
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((m = m - r.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        i.rewind && r.isBeginning)
      ) {
        const i =
          r.params.virtual && r.params.virtual.enabled && r.virtual
            ? r.virtual.slides.length - 1
            : r.slides.length - 1;
        return r.slideTo(i, e, t, n);
      }
      return r.slideTo(m, e, t, n);
    },
    slideReset: function (e, t, n) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, n)
      );
    },
    slideToClosest: function (e, t, n, r) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === r && (r = 0.5);
      const i = this;
      let a = i.activeIndex;
      const o = Math.min(i.params.slidesPerGroupSkip, a),
        l = o + Math.floor((a - o) / i.params.slidesPerGroup),
        s = i.rtlTranslate ? i.translate : -i.translate;
      if (s >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        s - e > (i.snapGrid[l + 1] - e) * r && (a += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        s - e <= (i.snapGrid[l] - e) * r && (a -= i.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, i.slidesGrid.length - 1)),
        i.slideTo(a, e, t, n)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: n } = e,
        r =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        a = e.clickedIndex;
      const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? a < e.loopedSlides - r / 2 ||
              a > e.slides.length - e.loopedSlides + r / 2
              ? (e.loopFix(),
                (a = e.getSlideIndex(
                  lh(n, `${o}[data-swiper-slide-index="${i}"]`)[0]
                )),
                Zp(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a)
            : a > e.slides.length - r
            ? (e.loopFix(),
              (a = e.getSlideIndex(
                lh(n, `${o}[data-swiper-slide-index="${i}"]`)[0]
              )),
              Zp(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a);
      } else e.slideTo(a);
    },
  };
  var Th = {
    loopCreate: function (e) {
      const t = this,
        { params: n, slidesEl: r } = t;
      !n.loop ||
        (t.virtual && t.params.virtual.enabled) ||
        (lh(r, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
        t.loopFix({
          slideRealIndex: e,
          direction: n.centeredSlides ? void 0 : "next",
        }));
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: n = !0,
        direction: r,
        setTranslate: i,
        activeSlideIndex: a,
        byController: o,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const s = this;
      if (!s.params.loop) return;
      s.emit("beforeLoopFix");
      const {
        slides: u,
        allowSlidePrev: c,
        allowSlideNext: d,
        slidesEl: f,
        params: p,
      } = s;
      if (
        ((s.allowSlidePrev = !0),
        (s.allowSlideNext = !0),
        s.virtual && p.virtual.enabled)
      )
        return (
          n &&
            (p.centeredSlides || 0 !== s.snapIndex
              ? p.centeredSlides && s.snapIndex < p.slidesPerView
                ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
                : s.snapIndex === s.snapGrid.length - 1 &&
                  s.slideTo(s.virtual.slidesBefore, 0, !1, !0)
              : s.slideTo(s.virtual.slides.length, 0, !1, !0)),
          (s.allowSlidePrev = c),
          (s.allowSlideNext = d),
          void s.emit("loopFix")
        );
      const h =
        "auto" === p.slidesPerView
          ? s.slidesPerViewDynamic()
          : Math.ceil(parseFloat(p.slidesPerView, 10));
      let m = p.loopedSlides || h;
      m % p.slidesPerGroup != 0 &&
        (m += p.slidesPerGroup - (m % p.slidesPerGroup)),
        (s.loopedSlides = m);
      const v = [],
        g = [];
      let y = s.activeIndex;
      typeof a > "u"
        ? (a = s.getSlideIndex(
            s.slides.filter((e) => e.classList.contains(p.slideActiveClass))[0]
          ))
        : (y = a);
      const b = "next" === r || !r,
        w = "prev" === r || !r;
      let x = 0,
        S = 0;
      if (a < m) {
        x = Math.max(m - a, p.slidesPerGroup);
        for (let e = 0; e < m - a; e += 1) {
          const t = e - Math.floor(e / u.length) * u.length;
          v.push(u.length - t - 1);
        }
      } else if (a > s.slides.length - 2 * m) {
        S = Math.max(a - (s.slides.length - 2 * m), p.slidesPerGroup);
        for (let e = 0; e < S; e += 1) {
          const t = e - Math.floor(e / u.length) * u.length;
          g.push(t);
        }
      }
      if (
        (w &&
          v.forEach((e) => {
            (s.slides[e].swiperLoopMoveDOM = !0),
              f.prepend(s.slides[e]),
              (s.slides[e].swiperLoopMoveDOM = !1);
          }),
        b &&
          g.forEach((e) => {
            (s.slides[e].swiperLoopMoveDOM = !0),
              f.append(s.slides[e]),
              (s.slides[e].swiperLoopMoveDOM = !1);
          }),
        s.recalcSlides(),
        "auto" === p.slidesPerView && s.updateSlides(),
        p.watchSlidesProgress && s.updateSlidesOffset(),
        n)
      )
        if (v.length > 0 && w)
          if (typeof t > "u") {
            const e = s.slidesGrid[y],
              t = s.slidesGrid[y + x] - e;
            l
              ? s.setTranslate(s.translate - t)
              : (s.slideTo(y + x, 0, !1, !0),
                i && (s.touches[s.isHorizontal() ? "startX" : "startY"] += t));
          } else i && s.slideToLoop(t, 0, !1, !0);
        else if (g.length > 0 && b)
          if (typeof t > "u") {
            const e = s.slidesGrid[y],
              t = s.slidesGrid[y - S] - e;
            l
              ? s.setTranslate(s.translate - t)
              : (s.slideTo(y - S, 0, !1, !0),
                i && (s.touches[s.isHorizontal() ? "startX" : "startY"] += t));
          } else s.slideToLoop(t, 0, !1, !0);
      if (
        ((s.allowSlidePrev = c),
        (s.allowSlideNext = d),
        s.controller && s.controller.control && !o)
      ) {
        const e = {
          slideRealIndex: t,
          slideTo: !1,
          direction: r,
          setTranslate: i,
          activeSlideIndex: a,
          byController: !0,
        };
        Array.isArray(s.controller.control)
          ? s.controller.control.forEach((t) => {
              !t.destroyed && t.params.loop && t.loopFix(e);
            })
          : s.controller.control instanceof s.constructor &&
            s.controller.control.params.loop &&
            s.controller.control.loopFix(e);
      }
      s.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: n } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const r = [];
      e.slides.forEach((e) => {
        const t =
          typeof e.swiperSlideIndex > "u"
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        r[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        r.forEach((e) => {
          n.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  var Ph = {
    setGrabCursor: function (e) {
      const t = this;
      if (
        !t.params.simulateTouch ||
        (t.params.watchOverflow && t.isLocked) ||
        t.params.cssMode
      )
        return;
      const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
      t.isElement && (t.__preventObserver__ = !0),
        (n.style.cursor = "move"),
        (n.style.cursor = e ? "grabbing" : "grab"),
        t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
    },
    unsetGrabCursor: function () {
      const e = this;
      (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e[
          "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
        ].style.cursor = ""),
        e.isElement &&
          requestAnimationFrame(() => {
            e.__preventObserver__ = !1;
          }));
    },
  };
  function _h(e) {
    const t = this,
      n = Xp(),
      r = Jp(),
      i = t.touchEventsData;
    i.evCache.push(e);
    const { params: a, touches: o, enabled: l } = t;
    if (
      !l ||
      (!a.simulateTouch && "mouse" === e.pointerType) ||
      (t.animating && a.preventInteractionOnTransition)
    )
      return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let s = e;
    s.originalEvent && (s = s.originalEvent);
    let u = s.target;
    if (
      ("wrapper" === a.touchEventsTarget && !t.wrapperEl.contains(u)) ||
      ("which" in s && 3 === s.which) ||
      ("button" in s && s.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const c = !!a.noSwipingClass && "" !== a.noSwipingClass,
      d = e.composedPath ? e.composedPath() : e.path;
    c && s.target && s.target.shadowRoot && d && (u = d[0]);
    const f = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      p = !(!s.target || !s.target.shadowRoot);
    if (
      a.noSwiping &&
      (p
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(n) {
                if (!n || n === Xp() || n === Jp()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const r = n.closest(e);
                return r || n.getRootNode ? r || t(n.getRootNode().host) : null;
              })(t)
            );
          })(f, u)
        : u.closest(f))
    )
      return void (t.allowClick = !0);
    if (a.swipeHandler && !u.closest(a.swipeHandler)) return;
    (o.currentX = s.pageX), (o.currentY = s.pageY);
    const h = o.currentX,
      m = o.currentY,
      v = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      g = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (v && (h <= g || h >= r.innerWidth - g)) {
      if ("prevent" !== v) return;
      e.preventDefault();
    }
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = h),
      (o.startY = m),
      (i.touchStartTime = eh()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (i.allowThresholdMove = !1);
    let y = !0;
    u.matches(i.focusableElements) &&
      ((y = !1), "SELECT" === u.nodeName && (i.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(i.focusableElements) &&
        n.activeElement !== u &&
        n.activeElement.blur();
    const b = y && t.allowTouchMove && a.touchStartPreventDefault;
    (a.touchStartForcePreventDefault || b) &&
      !u.isContentEditable &&
      s.preventDefault(),
      a.freeMode &&
        a.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !a.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", s);
  }
  function Oh(e) {
    const t = Xp(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: a, rtlTranslate: o, enabled: l } = n;
    if (!l || (!i.simulateTouch && "mouse" === e.pointerType)) return;
    let s = e;
    if ((s.originalEvent && (s = s.originalEvent), !r.isTouched))
      return void (
        r.startMoving &&
        r.isScrolling &&
        n.emit("touchMoveOpposite", s)
      );
    const u = r.evCache.findIndex((e) => e.pointerId === s.pointerId);
    u >= 0 && (r.evCache[u] = s);
    const c = r.evCache.length > 1 ? r.evCache[0] : s,
      d = c.pageX,
      f = c.pageY;
    if (s.preventedByNestedSwiper) return (a.startX = d), void (a.startY = f);
    if (!n.allowTouchMove)
      return (
        s.target.matches(r.focusableElements) || (n.allowClick = !1),
        void (
          r.isTouched &&
          (Object.assign(a, {
            startX: d,
            startY: f,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: d,
            currentY: f,
          }),
          (r.touchStartTime = eh()))
        )
      );
    if (i.touchReleaseOnEdges && !i.loop)
      if (n.isVertical()) {
        if (
          (f < a.startY && n.translate <= n.maxTranslate()) ||
          (f > a.startY && n.translate >= n.minTranslate())
        )
          return (r.isTouched = !1), void (r.isMoved = !1);
      } else if (
        (d < a.startX && n.translate <= n.maxTranslate()) ||
        (d > a.startX && n.translate >= n.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      s.target === t.activeElement &&
      s.target.matches(r.focusableElements)
    )
      return (r.isMoved = !0), void (n.allowClick = !1);
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", s),
      s.targetTouches && s.targetTouches.length > 1)
    )
      return;
    (a.currentX = d), (a.currentY = f);
    const p = a.currentX - a.startX,
      h = a.currentY - a.startY;
    if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let e;
      (n.isHorizontal() && a.currentY === a.startY) ||
      (n.isVertical() && a.currentX === a.startX)
        ? (r.isScrolling = !1)
        : p * p + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? e > i.touchAngle
            : 90 - e > i.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", s),
      typeof r.startMoving > "u" &&
        (a.currentX !== a.startX || a.currentY !== a.startY) &&
        (r.startMoving = !0),
      r.isScrolling ||
        (n.zoom &&
          n.params.zoom &&
          n.params.zoom.enabled &&
          r.evCache.length > 1))
    )
      return void (r.isTouched = !1);
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !i.cssMode && s.cancelable && s.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
    let m = n.isHorizontal() ? p : h,
      v = n.isHorizontal()
        ? a.currentX - a.previousX
        : a.currentY - a.previousY;
    i.oneWayMovement &&
      ((m = Math.abs(m) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
      (a.diff = m),
      (m *= i.touchRatio),
      o && ((m = -m), (v = -v));
    const g = n.touchesDirection;
    (n.swipeDirection = m > 0 ? "prev" : "next"),
      (n.touchesDirection = v > 0 ? "prev" : "next");
    const y = n.params.loop && !i.cssMode;
    if (!r.isMoved) {
      if (
        (y && n.loopFix({ direction: n.swipeDirection }),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        n.wrapperEl.dispatchEvent(e);
      }
      (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", s);
    }
    let b;
    r.isMoved &&
      g !== n.touchesDirection &&
      y &&
      Math.abs(m) >= 1 &&
      (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (b = !0)),
      n.emit("sliderMove", s),
      (r.isMoved = !0),
      (r.currentTranslate = m + r.startTranslate);
    let w = !0,
      x = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (x = 0),
      m > 0
        ? (y &&
            !b &&
            r.currentTranslate >
              (i.centeredSlides
                ? n.minTranslate() - n.size / 2
                : n.minTranslate()) &&
            n.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > n.minTranslate() &&
            ((w = !1),
            i.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + m) ** x)))
        : m < 0 &&
          (y &&
            !b &&
            r.currentTranslate <
              (i.centeredSlides
                ? n.maxTranslate() + n.size / 2
                : n.maxTranslate()) &&
            n.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                n.slides.length -
                ("auto" === i.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(i.slidesPerView, 10))),
            }),
          r.currentTranslate < n.maxTranslate() &&
            ((w = !1),
            i.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - m) ** x))),
      w && (s.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        "next" === n.swipeDirection &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        "prev" === n.swipeDirection &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      i.threshold > 0)
    ) {
      if (!(Math.abs(m) > i.threshold || r.allowThresholdMove))
        return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove)
        return (
          (r.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (r.currentTranslate = r.startTranslate),
          void (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
        i.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      i.freeMode &&
        i.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function Lh(e) {
    const t = this,
      n = t.touchEventsData,
      r = n.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (r >= 0 && n.evCache.splice(r, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
        ("pointercancel" !== e.type ||
          (!t.browser.isSafari && !t.browser.isWebView)))
    )
      return;
    const {
      params: i,
      touches: a,
      rtlTranslate: o,
      slidesGrid: l,
      enabled: s,
    } = t;
    if (!s || (!i.simulateTouch && "mouse" === e.pointerType)) return;
    let u = e;
    if (
      (u.originalEvent && (u = u.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", u),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = eh(),
      d = c - n.touchStartTime;
    if (t.allowClick) {
      const e = u.path || (u.composedPath && u.composedPath());
      t.updateClickedSlide((e && e[0]) || u.target),
        t.emit("tap click", u),
        d < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", u);
    }
    if (
      ((n.lastClickTime = eh()),
      Zp(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    let f;
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (f = i.followFinger
        ? o
          ? t.translate
          : -t.translate
        : -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (i.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: f });
    let p = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < l.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof l[e + t] < "u"
        ? f >= l[e] && f < l[e + t] && ((p = e), (h = l[e + t] - l[e]))
        : f >= l[e] && ((p = e), (h = l[l.length - 1] - l[l.length - 2]));
    }
    let m = null,
      v = null;
    i.rewind &&
      (t.isBeginning
        ? (v =
            i.virtual && i.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (m = 0));
    const g = (f - l[p]) / h,
      y = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (g >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? m : p + y)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (g > 1 - i.longSwipesRatio
            ? t.slideTo(p + y)
            : null !== v && g < 0 && Math.abs(g) > i.longSwipesRatio
            ? t.slideTo(v)
            : t.slideTo(p));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation ||
      (u.target !== t.navigation.nextEl && u.target !== t.navigation.prevEl)
        ? ("next" === t.swipeDirection && t.slideTo(null !== m ? m : p + y),
          "prev" === t.swipeDirection && t.slideTo(null !== v ? v : p))
        : u.target === t.navigation.nextEl
        ? t.slideTo(p + y)
        : t.slideTo(p);
    }
  }
  function Nh() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: a } = e,
      o = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = o && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !o
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = r),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function Mh(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function zh() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const a = e.maxTranslate() - e.minTranslate();
    (i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
      i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function Ih(e) {
    const t = this;
    yh(t, e.target),
      !t.params.cssMode &&
        ("auto" === t.params.slidesPerView || t.params.autoHeight) &&
        t.update();
  }
  let jh = !1;
  function Rh() {}
  const Ah = (e, t) => {
    const n = Xp(),
      { params: r, el: i, wrapperEl: a, device: o } = e,
      l = !!r.nested,
      s = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    i[s]("pointerdown", e.onTouchStart, { passive: !1 }),
      n[s]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
      n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
      n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
      n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) &&
        i[s]("click", e.onClick, !0),
      r.cssMode && a[s]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Nh,
            !0
          )
        : e[u]("observerUpdate", Nh, !0),
      i[s]("load", e.onLoad, { capture: !0 });
  };
  var Dh = {
    attachEvents: function () {
      const e = this,
        t = Xp(),
        { params: n } = e;
      (e.onTouchStart = _h.bind(e)),
        (e.onTouchMove = Oh.bind(e)),
        (e.onTouchEnd = Lh.bind(e)),
        n.cssMode && (e.onScroll = zh.bind(e)),
        (e.onClick = Mh.bind(e)),
        (e.onLoad = Ih.bind(e)),
        jh || (t.addEventListener("touchstart", Rh), (jh = !0)),
        Ah(e, "on");
    },
    detachEvents: function () {
      Ah(this, "off");
    },
  };
  const $h = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var Fh = {
    setBreakpoint: function () {
      const e = this,
        { realIndex: t, initialized: n, params: r, el: i } = e,
        a = r.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
      if (!o || e.currentBreakpoint === o) return;
      const l = (o in a ? a[o] : void 0) || e.originalParams,
        s = $h(e, r),
        u = $h(e, l),
        c = r.enabled;
      s && !u
        ? (i.classList.remove(
            `${r.containerModifierClass}grid`,
            `${r.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !s &&
          u &&
          (i.classList.add(`${r.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === r.grid.fill)) &&
            i.classList.add(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach((t) => {
          if (typeof l[t] > "u") return;
          const n = r[t] && r[t].enabled,
            i = l[t] && l[t].enabled;
          n && !i && e[t].disable(), !n && i && e[t].enable();
        });
      const d = l.direction && l.direction !== r.direction,
        f = r.loop && (l.slidesPerView !== r.slidesPerView || d);
      d && n && e.changeDirection(), ih(e.params, l);
      const p = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        c && !p ? e.disable() : !c && p && e.enable(),
        (e.currentBreakpoint = o),
        e.emit("_beforeBreakpoint", l),
        f && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, n) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
        return;
      let r = !1;
      const i = Jp(),
        a = "window" === t ? i.innerHeight : n.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: a * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: a, value: l } = o[e];
        "window" === t
          ? i.matchMedia(`(min-width: ${l}px)`).matches && (r = a)
          : l <= n.clientWidth && (r = a);
      }
      return r || "max";
    },
  };
  var Bh = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: n, rtl: r, el: i, device: a } = e,
        o = (function (e, t) {
          const n = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((r) => {
                    e[r] && n.push(t + r);
                  })
                : "string" == typeof e && n.push(t + e);
            }),
            n
          );
        })(
          [
            "initialized",
            n.direction,
            { "free-mode": e.params.freeMode && n.freeMode.enabled },
            { autoheight: n.autoHeight },
            { rtl: r },
            { grid: n.grid && n.grid.rows > 1 },
            {
              "grid-column":
                n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
            },
            { android: a.android },
            { ios: a.ios },
            { "css-mode": n.cssMode },
            { centered: n.cssMode && n.centeredSlides },
            { "watch-progress": n.watchSlidesProgress },
          ],
          n.containerModifierClass
        );
      t.push(...o), i.classList.add(...t), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { el: e, classNames: t } = this;
      e.classList.remove(...t), this.emitContainerClasses();
    },
  };
  var Uh = {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: n } = e,
          { slidesOffsetBefore: r } = n;
        if (r) {
          const t = e.slides.length - 1,
            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
          e.isLocked = e.size > n;
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      },
    },
    Vh = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function Hh(e, t) {
    return function (n) {
      void 0 === n && (n = {});
      const r = Object.keys(n)[0],
        i = n[r];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
            !0 === e[r] &&
            (e[r] = { auto: !0 }),
          r in e && "enabled" in i
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "object" == typeof e[r] &&
                !("enabled" in e[r]) &&
                (e[r].enabled = !0),
              e[r] || (e[r] = { enabled: !1 }),
              ih(t, n))
            : ih(t, n))
        : ih(t, n);
    };
  }
  const Wh = {
      eventsEmitter: gh,
      update: xh,
      translate: Sh,
      transition: kh,
      slide: Ch,
      loop: Th,
      grabCursor: Ph,
      events: Dh,
      breakpoints: Fh,
      checkOverflow: Uh,
      classes: Bh,
    },
    Gh = {};
  let qh = class e {
    constructor() {
      let t, n;
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      1 === i.length &&
      i[0].constructor &&
      "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (n = i[0])
        : ([t, n] = i),
        n || (n = {}),
        (n = ih({}, n)),
        t && !n.el && (n.el = t);
      const o = Xp();
      if (
        n.el &&
        "string" == typeof n.el &&
        o.querySelectorAll(n.el).length > 1
      ) {
        const t = [];
        return (
          o.querySelectorAll(n.el).forEach((r) => {
            const i = ih({}, n, { el: r });
            t.push(new e(i));
          }),
          t
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = hh()),
        (l.device = mh({ userAgent: n.userAgent })),
        (l.browser = vh()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
      const s = {};
      l.modules.forEach((e) => {
        e({
          params: n,
          swiper: l,
          extendParams: Hh(n, s),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const u = ih({}, Vh, s);
      return (
        (l.params = ih({}, u, Gh, n)),
        (l.originalParams = ih({}, l.params)),
        (l.passedParams = ih({}, n)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((e) => {
            l.on(e, l.params.on[e]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: n } = this,
        r = uh(lh(t, `.${n.slideClass}, swiper-slide`)[0]);
      return uh(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = lh(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = n.minTranslate(),
        i = (n.maxTranslate() - r) * e + r;
      n.translateTo(i, typeof t > "u" ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((n) => {
        const r = e.getSlideClasses(n);
        t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: n,
        slides: r,
        slidesGrid: i,
        slidesSizesGrid: a,
        size: o,
        activeIndex: l,
      } = this;
      let s = 1;
      if (n.centeredSlides) {
        let e,
          t = r[l] ? r[l].swiperSlideSize : 0;
        for (let n = l + 1; n < r.length; n += 1)
          r[n] &&
            !e &&
            ((t += r[n].swiperSlideSize), (s += 1), t > o && (e = !0));
        for (let n = l - 1; n >= 0; n -= 1)
          r[n] &&
            !e &&
            ((t += r[n].swiperSlideSize), (s += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < r.length; e += 1)
          (t ? i[e] + a[e] - i[l] < o : i[e] - i[l] < o) && (s += 1);
      else for (let e = l - 1; e >= 0; e -= 1) i[l] - i[e] < o && (s += 1);
      return s;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function r() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (
        (n.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && yh(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        n.freeMode && n.freeMode.enabled && !n.cssMode)
      )
        r(), n.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
          e.isEnd &&
          !n.centeredSlides
        ) {
          const t =
            e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || r();
      }
      n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const n = this,
        r = n.params.direction;
      return (
        e || (e = "horizontal" === r ? "vertical" : "horizontal"),
        e === r ||
          ("horizontal" !== e && "vertical" !== e) ||
          (n.el.classList.remove(`${n.params.containerModifierClass}${r}`),
          n.el.classList.add(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          n.emit("changeDirection"),
          t && n.update()),
        n
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let n = e || t.params.el;
      if (("string" == typeof n && (n = document.querySelector(n)), !n))
        return !1;
      (n.swiper = t), n.parentNode && n.parentNode.host && (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i =
        n && n.shadowRoot && n.shadowRoot.querySelector
          ? n.shadowRoot.querySelector(r())
          : lh(n, r())[0];
      return (
        !i &&
          t.params.createElements &&
          ((i = (function (e, t) {
            void 0 === t && (t = []);
            const n = document.createElement(e);
            return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
          })("div", t.params.wrapperClass)),
          n.append(i),
          lh(n, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: n,
          wrapperEl: i,
          slidesEl: t.isElement ? n.parentNode.host : i,
          hostEl: t.isElement ? n.parentNode.host : n,
          mounted: !0,
          rtl: "rtl" === n.dir.toLowerCase() || "rtl" === sh(n, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === n.dir.toLowerCase() || "rtl" === sh(n, "direction")),
          wrongRTL: "-webkit-box" === sh(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      return (
        t.initialized ||
          !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? yh(t, e)
              : e.addEventListener("load", (e) => {
                  yh(t, e.target);
                });
          }),
          wh(t),
          (t.initialized = !0),
          wh(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const n = this,
        { params: r, el: i, wrapperEl: a, slides: o } = n;
      return (
        typeof n.params > "u" ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            i.removeAttribute("style"),
            a.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((e) => {
                e.classList.remove(
                  r.slideVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            ((n.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch {}
                try {
                  delete t[e];
                } catch {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      ih(Gh, e);
    }
    static get extendedDefaults() {
      return Gh;
    }
    static get defaults() {
      return Vh;
    }
    static installModule(t) {
      e.prototype.__modules__ || (e.prototype.__modules__ = []);
      const n = e.prototype.__modules__;
      "function" == typeof t && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((t) => e.installModule(t)), e)
        : (e.installModule(t), e);
    }
  };
  Object.keys(Wh).forEach((e) => {
    Object.keys(Wh[e]).forEach((t) => {
      qh.prototype[t] = Wh[e][t];
    });
  }),
    qh.use([
      function (e) {
        let { swiper: t, on: n, emit: r } = e;
        const i = Jp();
        let a = null,
          o = null;
        const l = () => {
            !t ||
              t.destroyed ||
              !t.initialized ||
              (r("beforeResize"), r("resize"));
          },
          s = () => {
            !t || t.destroyed || !t.initialized || r("orientationchange");
          };
        n("init", () => {
          t.params.resizeObserver && typeof i.ResizeObserver < "u"
            ? !t ||
              t.destroyed ||
              !t.initialized ||
              ((a = new ResizeObserver((e) => {
                o = i.requestAnimationFrame(() => {
                  const { width: n, height: r } = t;
                  let i = n,
                    a = r;
                  e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: r, target: o } = e;
                    (o && o !== t.el) ||
                      ((i = r ? r.width : (n[0] || n).inlineSize),
                      (a = r ? r.height : (n[0] || n).blockSize));
                  }),
                    (i !== n || a !== r) && l();
                });
              })),
              a.observe(t.el))
            : (i.addEventListener("resize", l),
              i.addEventListener("orientationchange", s));
        }),
          n("destroy", () => {
            o && i.cancelAnimationFrame(o),
              a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
              i.removeEventListener("resize", l),
              i.removeEventListener("orientationchange", s);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r, emit: i } = e;
        const a = [],
          o = Jp(),
          l = function (e, n) {
            void 0 === n && (n = {});
            const r = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const n = function () {
                  i("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(n)
                  : o.setTimeout(n, 0);
              }
            );
            r.observe(e, {
              attributes: typeof n.attributes > "u" || n.attributes,
              childList: typeof n.childList > "u" || n.childList,
              characterData: typeof n.characterData > "u" || n.characterData,
            }),
              a.push(r);
          };
        n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          r("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = (function (e, t) {
                  const n = [];
                  let r = e.parentElement;
                  for (; r; )
                    t ? r.matches(t) && n.push(r) : n.push(r),
                      (r = r.parentElement);
                  return n;
                })(t.el);
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.el, { childList: t.params.observeSlideChildren }),
                l(t.wrapperEl, { attributes: !1 });
            }
          }),
          r("destroy", () => {
            a.forEach((e) => {
              e.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const Yh = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopedSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
  ];
  function Qh(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function Xh(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((e) => n.indexOf(e) < 0)
      .forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : Qh(t[n]) && Qh(e[n]) && Object.keys(t[n]).length > 0
          ? t[n].__swiper__
            ? (e[n] = t[n])
            : Xh(e[n], t[n])
          : (e[n] = t[n]);
      });
  }
  function Kh(e) {
    return (
      void 0 === e && (e = {}),
      e.navigation &&
        typeof e.navigation.nextEl > "u" &&
        typeof e.navigation.prevEl > "u"
    );
  }
  function Jh(e) {
    return (
      void 0 === e && (e = {}), e.pagination && typeof e.pagination.el > "u"
    );
  }
  function Zh(e) {
    return void 0 === e && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
  }
  function em(e) {
    void 0 === e && (e = "");
    const t = e
        .split(" ")
        .map((e) => e.trim())
        .filter((e) => !!e),
      n = [];
    return (
      t.forEach((e) => {
        n.indexOf(e) < 0 && n.push(e);
      }),
      n.join(" ")
    );
  }
  function tm(e) {
    return (
      void 0 === e && (e = ""),
      e
        ? e.includes("swiper-wrapper")
          ? e
          : `swiper-wrapper ${e}`
        : "swiper-wrapper"
    );
  }
  function nm() {
    return (
      (nm = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      nm.apply(this, arguments)
    );
  }
  function rm(e) {
    return (
      e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    );
  }
  function im(e) {
    const t = [];
    return (
      D.Children.toArray(e).forEach((e) => {
        rm(e)
          ? t.push(e)
          : e.props &&
            e.props.children &&
            im(e.props.children).forEach((e) => t.push(e));
      }),
      t
    );
  }
  function am(e) {
    const t = [],
      n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": [],
      };
    return (
      D.Children.toArray(e).forEach((e) => {
        if (rm(e)) t.push(e);
        else if (e.props && e.props.slot && n[e.props.slot])
          n[e.props.slot].push(e);
        else if (e.props && e.props.children) {
          const r = im(e.props.children);
          r.length > 0
            ? r.forEach((e) => t.push(e))
            : n["container-end"].push(e);
        } else n["container-end"].push(e);
      }),
      { slides: t, slots: n }
    );
  }
  function om(e, t) {
    return typeof window > "u" ? A.useEffect(e, t) : A.useLayoutEffect(e, t);
  }
  const lm = A.createContext(null),
    sm = A.createContext(null),
    um = A.forwardRef(function (e, t) {
      let {
          className: n,
          tag: r = "div",
          wrapperTag: i = "div",
          children: a,
          onSwiper: o,
          ...l
        } = void 0 === e ? {} : e,
        s = !1;
      const [u, c] = A.useState("swiper"),
        [d, f] = A.useState(null),
        [p, h] = A.useState(!1),
        m = A.useRef(!1),
        v = A.useRef(null),
        g = A.useRef(null),
        y = A.useRef(null),
        b = A.useRef(null),
        w = A.useRef(null),
        x = A.useRef(null),
        S = A.useRef(null),
        E = A.useRef(null),
        {
          params: k,
          passedParams: C,
          rest: T,
          events: P,
        } = (function (e, t) {
          void 0 === e && (e = {}), void 0 === t && (t = !0);
          const n = { on: {} },
            r = {},
            i = {};
          Xh(n, qh.defaults),
            Xh(n, qh.extendedDefaults),
            (n._emitClasses = !0),
            (n.init = !1);
          const a = {},
            o = Yh.map((e) => e.replace(/_/, "")),
            l = Object.assign({}, e);
          return (
            Object.keys(l).forEach((l) => {
              typeof e[l] > "u" ||
                (o.indexOf(l) >= 0
                  ? Qh(e[l])
                    ? ((n[l] = {}), (i[l] = {}), Xh(n[l], e[l]), Xh(i[l], e[l]))
                    : ((n[l] = e[l]), (i[l] = e[l]))
                  : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l]
                  ? t
                    ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                    : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                  : (a[l] = e[l]));
            }),
            ["navigation", "pagination", "scrollbar"].forEach((e) => {
              !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
            }),
            { params: n, passedParams: i, rest: a, events: r }
          );
        })(l),
        { slides: _, slots: O } = am(a),
        L = () => {
          h(!p);
        };
      Object.assign(k.on, {
        _containerClasses(e, t) {
          c(t);
        },
      });
      const N = () => {
        Object.assign(k.on, P), (s = !0);
        const e = { ...k };
        if (
          (delete e.wrapperClass,
          (g.current = new qh(e)),
          g.current.virtual && g.current.params.virtual.enabled)
        ) {
          g.current.virtual.slides = _;
          const e = {
            cache: !1,
            slides: _,
            renderExternal: f,
            renderExternalUpdate: !1,
          };
          Xh(g.current.params.virtual, e),
            Xh(g.current.originalParams.virtual, e);
        }
      };
      v.current || N(), g.current && g.current.on("_beforeBreakpoint", L);
      return (
        A.useEffect(() => () => {
          g.current && g.current.off("_beforeBreakpoint", L);
        }),
        A.useEffect(() => {
          !m.current &&
            g.current &&
            (g.current.emitSlidesClasses(), (m.current = !0));
        }),
        om(() => {
          if ((t && (t.current = v.current), v.current))
            return (
              g.current.destroyed && N(),
              (function (e, t) {
                let {
                  el: n,
                  nextEl: r,
                  prevEl: i,
                  paginationEl: a,
                  scrollbarEl: o,
                  swiper: l,
                } = e;
                Kh(t) &&
                  r &&
                  i &&
                  ((l.params.navigation.nextEl = r),
                  (l.originalParams.navigation.nextEl = r),
                  (l.params.navigation.prevEl = i),
                  (l.originalParams.navigation.prevEl = i)),
                  Jh(t) &&
                    a &&
                    ((l.params.pagination.el = a),
                    (l.originalParams.pagination.el = a)),
                  Zh(t) &&
                    o &&
                    ((l.params.scrollbar.el = o),
                    (l.originalParams.scrollbar.el = o)),
                  l.init(n);
              })(
                {
                  el: v.current,
                  nextEl: w.current,
                  prevEl: x.current,
                  paginationEl: S.current,
                  scrollbarEl: E.current,
                  swiper: g.current,
                },
                k
              ),
              o && o(g.current),
              () => {
                g.current && !g.current.destroyed && g.current.destroy(!0, !1);
              }
            );
        }, []),
        om(() => {
          s ||
            !P ||
            !g.current ||
            Object.keys(P).forEach((e) => {
              g.current.on(e, P[e]);
            });
          const e = (function (e, t, n, r, i) {
            const a = [];
            if (!t) return a;
            const o = (e) => {
              a.indexOf(e) < 0 && a.push(e);
            };
            if (n && r) {
              const e = r.map(i),
                t = n.map(i);
              e.join("") !== t.join("") && o("children"),
                r.length !== n.length && o("children");
            }
            return (
              Yh.filter((e) => "_" === e[0])
                .map((e) => e.replace(/_/, ""))
                .forEach((n) => {
                  if (n in e && n in t)
                    if (Qh(e[n]) && Qh(t[n])) {
                      const r = Object.keys(e[n]),
                        i = Object.keys(t[n]);
                      r.length !== i.length
                        ? o(n)
                        : (r.forEach((r) => {
                            e[n][r] !== t[n][r] && o(n);
                          }),
                          i.forEach((r) => {
                            e[n][r] !== t[n][r] && o(n);
                          }));
                    } else e[n] !== t[n] && o(n);
                }),
              a
            );
          })(C, y.current, _, b.current, (e) => e.key);
          return (
            (y.current = C),
            (b.current = _),
            e.length &&
              g.current &&
              !g.current.destroyed &&
              (function (e) {
                let {
                  swiper: t,
                  slides: n,
                  passedParams: r,
                  changedParams: i,
                  nextEl: a,
                  prevEl: o,
                  scrollbarEl: l,
                  paginationEl: s,
                } = e;
                const u = i.filter(
                    (e) =>
                      "children" !== e &&
                      "direction" !== e &&
                      "wrapperClass" !== e
                  ),
                  {
                    params: c,
                    pagination: d,
                    navigation: f,
                    scrollbar: p,
                    virtual: h,
                    thumbs: m,
                  } = t;
                let v, g, y, b, w, x, S, E;
                i.includes("thumbs") &&
                  r.thumbs &&
                  r.thumbs.swiper &&
                  c.thumbs &&
                  !c.thumbs.swiper &&
                  (v = !0),
                  i.includes("controller") &&
                    r.controller &&
                    r.controller.control &&
                    c.controller &&
                    !c.controller.control &&
                    (g = !0),
                  i.includes("pagination") &&
                    r.pagination &&
                    (r.pagination.el || s) &&
                    (c.pagination || !1 === c.pagination) &&
                    d &&
                    !d.el &&
                    (y = !0),
                  i.includes("scrollbar") &&
                    r.scrollbar &&
                    (r.scrollbar.el || l) &&
                    (c.scrollbar || !1 === c.scrollbar) &&
                    p &&
                    !p.el &&
                    (b = !0),
                  i.includes("navigation") &&
                    r.navigation &&
                    (r.navigation.prevEl || o) &&
                    (r.navigation.nextEl || a) &&
                    (c.navigation || !1 === c.navigation) &&
                    f &&
                    !f.prevEl &&
                    !f.nextEl &&
                    (w = !0);
                const k = (e) => {
                  t[e] &&
                    (t[e].destroy(),
                    "navigation" === e
                      ? (t.isElement &&
                          (t[e].prevEl.remove(), t[e].nextEl.remove()),
                        (c[e].prevEl = void 0),
                        (c[e].nextEl = void 0),
                        (t[e].prevEl = void 0),
                        (t[e].nextEl = void 0))
                      : (t.isElement && t[e].el.remove(),
                        (c[e].el = void 0),
                        (t[e].el = void 0)));
                };
                i.includes("loop") &&
                  t.isElement &&
                  (c.loop && !r.loop
                    ? (x = !0)
                    : !c.loop && r.loop
                    ? (S = !0)
                    : (E = !0)),
                  u.forEach((e) => {
                    if (Qh(c[e]) && Qh(r[e]))
                      Xh(c[e], r[e]),
                        ("navigation" === e ||
                          "pagination" === e ||
                          "scrollbar" === e) &&
                          "enabled" in r[e] &&
                          !r[e].enabled &&
                          k(e);
                    else {
                      const t = r[e];
                      (!0 !== t && !1 !== t) ||
                      ("navigation" !== e &&
                        "pagination" !== e &&
                        "scrollbar" !== e)
                        ? (c[e] = r[e])
                        : !1 === t && k(e);
                    }
                  }),
                  u.includes("controller") &&
                    !g &&
                    t.controller &&
                    t.controller.control &&
                    c.controller &&
                    c.controller.control &&
                    (t.controller.control = c.controller.control),
                  i.includes("children") &&
                    n &&
                    h &&
                    c.virtual.enabled &&
                    ((h.slides = n), h.update(!0)),
                  i.includes("children") && n && c.loop && (E = !0),
                  v && m.init() && m.update(!0),
                  g && (t.controller.control = c.controller.control),
                  y &&
                    (t.isElement &&
                      (!s || "string" == typeof s) &&
                      ((s = document.createElement("div")),
                      s.classList.add("swiper-pagination"),
                      t.el.appendChild(s)),
                    s && (c.pagination.el = s),
                    d.init(),
                    d.render(),
                    d.update()),
                  b &&
                    (t.isElement &&
                      (!l || "string" == typeof l) &&
                      ((l = document.createElement("div")),
                      l.classList.add("swiper-scrollbar"),
                      t.el.appendChild(l)),
                    l && (c.scrollbar.el = l),
                    p.init(),
                    p.updateSize(),
                    p.setTranslate()),
                  w &&
                    (t.isElement &&
                      ((!a || "string" == typeof a) &&
                        ((a = document.createElement("div")),
                        a.classList.add("swiper-button-next"),
                        (a.innerHTML = t.hostEl.nextButtonSvg),
                        t.el.appendChild(a)),
                      (!o || "string" == typeof o) &&
                        ((o = document.createElement("div")),
                        o.classList.add("swiper-button-prev"),
                        (a.innerHTML = t.hostEl.prevButtonSvg),
                        t.el.appendChild(o))),
                    a && (c.navigation.nextEl = a),
                    o && (c.navigation.prevEl = o),
                    f.init(),
                    f.update()),
                  i.includes("allowSlideNext") &&
                    (t.allowSlideNext = r.allowSlideNext),
                  i.includes("allowSlidePrev") &&
                    (t.allowSlidePrev = r.allowSlidePrev),
                  i.includes("direction") && t.changeDirection(r.direction, !1),
                  (x || E) && t.loopDestroy(),
                  (S || E) && t.loopCreate(),
                  t.update();
              })({
                swiper: g.current,
                slides: _,
                passedParams: C,
                changedParams: e,
                nextEl: w.current,
                prevEl: x.current,
                scrollbarEl: E.current,
                paginationEl: S.current,
              }),
            () => {
              !P ||
                !g.current ||
                Object.keys(P).forEach((e) => {
                  g.current.off(e, P[e]);
                });
            }
          );
        }),
        om(() => {
          ((e) => {
            !e ||
              e.destroyed ||
              !e.params.virtual ||
              (e.params.virtual && !e.params.virtual.enabled) ||
              (e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.parallax &&
                e.params.parallax &&
                e.params.parallax.enabled &&
                e.parallax.setTranslate());
          })(g.current);
        }, [d]),
        D.createElement(
          r,
          nm({ ref: v, className: em(`${u}${n ? ` ${n}` : ""}`) }, T),
          D.createElement(
            sm.Provider,
            { value: g.current },
            O["container-start"],
            D.createElement(
              i,
              { className: tm(k.wrapperClass) },
              O["wrapper-start"],
              k.virtual
                ? (function (e, t, n) {
                    if (!n) return null;
                    const r = (e) => {
                        let n = e;
                        return (
                          e < 0
                            ? (n = t.length + e)
                            : n >= t.length && (n -= t.length),
                          n
                        );
                      },
                      i = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${n.offset}px`,
                          }
                        : { top: `${n.offset}px` },
                      { from: a, to: o } = n,
                      l = e.params.loop ? -t.length : 0,
                      s = e.params.loop ? 2 * t.length : t.length,
                      u = [];
                    for (let e = l; e < s; e += 1)
                      e >= a && e <= o && u.push(t[r(e)]);
                    return u.map((t, n) =>
                      D.cloneElement(t, {
                        swiper: e,
                        style: i,
                        key: `slide-${n}`,
                      })
                    );
                  })(g.current, _, d)
                : _.map((e, t) =>
                    D.cloneElement(e, {
                      swiper: g.current,
                      swiperSlideIndex: t,
                    })
                  ),
              O["wrapper-end"]
            ),
            Kh(k) &&
              D.createElement(
                D.Fragment,
                null,
                D.createElement("div", {
                  ref: x,
                  className: "swiper-button-prev",
                }),
                D.createElement("div", {
                  ref: w,
                  className: "swiper-button-next",
                })
              ),
            Zh(k) &&
              D.createElement("div", { ref: E, className: "swiper-scrollbar" }),
            Jh(k) &&
              D.createElement("div", {
                ref: S,
                className: "swiper-pagination",
              }),
            O["container-end"]
          )
        )
      );
    });
  um.displayName = "Swiper";
  const cm = A.forwardRef(function (e, t) {
    let {
      tag: n = "div",
      children: r,
      className: i = "",
      swiper: a,
      zoom: o,
      lazy: l,
      virtualIndex: s,
      swiperSlideIndex: u,
      ...c
    } = void 0 === e ? {} : e;
    const d = A.useRef(null),
      [f, p] = A.useState("swiper-slide"),
      [h, m] = A.useState(!1);
    function v(e, t, n) {
      t === d.current && p(n);
    }
    om(() => {
      if (
        (typeof u < "u" && (d.current.swiperSlideIndex = u),
        t && (t.current = d.current),
        d.current && a)
      )
        return a.destroyed
          ? void ("swiper-slide" !== f && p("swiper-slide"))
          : (a.on("_slideClass", v),
            () => {
              a && a.off("_slideClass", v);
            });
    }),
      om(() => {
        a && d.current && !a.destroyed && p(a.getSlideClasses(d.current));
      }, [a]);
    const g = {
        isActive: f.indexOf("swiper-slide-active") >= 0,
        isVisible: f.indexOf("swiper-slide-visible") >= 0,
        isPrev: f.indexOf("swiper-slide-prev") >= 0,
        isNext: f.indexOf("swiper-slide-next") >= 0,
      },
      y = () => ("function" == typeof r ? r(g) : r);
    return D.createElement(
      n,
      nm(
        {
          ref: d,
          className: em(`${f}${i ? ` ${i}` : ""}`),
          "data-swiper-slide-index": s,
          onLoad: () => {
            m(!0);
          },
        },
        c
      ),
      o &&
        D.createElement(
          lm.Provider,
          { value: g },
          D.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": "number" == typeof o ? o : void 0,
            },
            y(),
            l &&
              !h &&
              D.createElement("div", { className: "swiper-lazy-preloader" })
          )
        ),
      !o &&
        D.createElement(
          lm.Provider,
          { value: g },
          y(),
          l &&
            !h &&
            D.createElement("div", { className: "swiper-lazy-preloader" })
        )
    );
  });
  function dm(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  cm.displayName = "SwiperSlide";
  const { toString: fm } = Object.prototype,
    { getPrototypeOf: pm } = Object,
    hm = ((e) => (t) => {
      const n = fm.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    mm = (e) => ((e = e.toLowerCase()), (t) => hm(t) === e),
    vm = (e) => (t) => typeof t === e,
    { isArray: gm } = Array,
    ym = vm("undefined");
  const bm = mm("ArrayBuffer");
  const wm = vm("string"),
    xm = vm("function"),
    Sm = vm("number"),
    Em = (e) => null !== e && "object" == typeof e,
    km = (e) => {
      if ("object" !== hm(e)) return !1;
      const t = pm(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    Cm = mm("Date"),
    Tm = mm("File"),
    Pm = mm("Blob"),
    _m = mm("FileList"),
    Om = mm("URLSearchParams");
  function Lm(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null === e || typeof e > "u") return;
    let r, i;
    if (("object" != typeof e && (e = [e]), gm(e)))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
      const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = i.length;
      let o;
      for (r = 0; r < a; r++) (o = i[r]), t.call(null, e[o], o, e);
    }
  }
  function Nm(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      i = n.length;
    for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r;
    return null;
  }
  const Mm =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global,
    zm = (e) => !ym(e) && e !== Mm;
  const Im = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && pm(Uint8Array)),
    jm = mm("HTMLFormElement"),
    Rm = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    Am = mm("RegExp"),
    Dm = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Lm(n, (n, i) => {
        !1 !== t(n, i, e) && (r[i] = n);
      }),
        Object.defineProperties(e, r);
    },
    $m = "abcdefghijklmnopqrstuvwxyz",
    Fm = "0123456789",
    Bm = { DIGIT: Fm, ALPHA: $m, ALPHA_DIGIT: $m + $m.toUpperCase() + Fm };
  const Um = mm("AsyncFunction"),
    Vm = {
      isArray: gm,
      isArrayBuffer: bm,
      isBuffer: function (e) {
        return (
          null !== e &&
          !ym(e) &&
          null !== e.constructor &&
          !ym(e.constructor) &&
          xm(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (xm(e.append) &&
              ("formdata" === (t = hm(e)) ||
                ("object" === t &&
                  xm(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            typeof ArrayBuffer < "u" && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && bm(e.buffer)),
          t
        );
      },
      isString: wm,
      isNumber: Sm,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: Em,
      isPlainObject: km,
      isUndefined: ym,
      isDate: Cm,
      isFile: Tm,
      isBlob: Pm,
      isRegExp: Am,
      isFunction: xm,
      isStream: (e) => Em(e) && xm(e.pipe),
      isURLSearchParams: Om,
      isTypedArray: Im,
      isFileList: _m,
      forEach: Lm,
      merge: function e() {
        const { caseless: t } = (zm(this) && this) || {},
          n = {},
          r = (r, i) => {
            const a = (t && Nm(n, i)) || i;
            km(n[a]) && km(r)
              ? (n[a] = e(n[a], r))
              : km(r)
              ? (n[a] = e({}, r))
              : gm(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let e = 0, t = arguments.length; e < t; e++)
          arguments[e] && Lm(arguments[e], r);
        return n;
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (
        Lm(
          t,
          (t, r) => {
            n && xm(t) ? (e[r] = dm(t, n)) : (e[r] = t);
          },
          { allOwnKeys: r }
        ),
        e
      ),
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let i, a, o;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
            (o = i[a]),
              (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
          e = !1 !== n && pm(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: hm,
      kindOfTest: mm,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (gm(e)) return e;
        let t = e.length;
        if (!Sm(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: jm,
      hasOwnProperty: Rm,
      hasOwnProp: Rm,
      reduceDescriptors: Dm,
      freezeMethods: (e) => {
        Dm(e, (t, n) => {
          if (xm(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          if (xm(r)) {
            if (((t.enumerable = !1), "writable" in t))
              return void (t.writable = !1);
            t.set ||
              (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              });
          }
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return gm(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
      findKey: Nm,
      global: Mm,
      isContextDefined: zm,
      ALPHABET: Bm,
      generateString: (e = 16, t = Bm.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          xm(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (Em(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const i = gm(e) ? [] : {};
                return (
                  Lm(e, (e, t) => {
                    const a = n(e, r + 1);
                    !ym(a) && (i[t] = a);
                  }),
                  (t[r] = void 0),
                  i
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: Um,
      isThenable: (e) => e && (Em(e) || xm(e)) && xm(e.then) && xm(e.catch),
    };
  function Hm(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i);
  }
  Vm.inherits(Hm, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Vm.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const Wm = Hm.prototype,
    Gm = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Gm[e] = { value: e };
  }),
    Object.defineProperties(Hm, Gm),
    Object.defineProperty(Wm, "isAxiosError", { value: !0 }),
    (Hm.from = (e, t, n, r, i, a) => {
      const o = Object.create(Wm);
      return (
        Vm.toFlatObject(
          e,
          o,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        Hm.call(o, e.message, t, n, r, i),
        (o.cause = e),
        (o.name = e.name),
        a && Object.assign(o, a),
        o
      );
    });
  function qm(e) {
    return Vm.isPlainObject(e) || Vm.isArray(e);
  }
  function Ym(e) {
    return Vm.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Qm(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = Ym(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const Xm = Vm.toFlatObject(Vm, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function Km(e, t, n) {
    if (!Vm.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = Vm.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Vm.isUndefined(t[e]);
        }
      )).metaTokens,
      i = n.visitor || u,
      a = n.dots,
      o = n.indexes,
      l = (n.Blob || (typeof Blob < "u" && Blob)) && Vm.isSpecCompliantForm(t);
    if (!Vm.isFunction(i)) throw new TypeError("visitor must be a function");
    function s(e) {
      if (null === e) return "";
      if (Vm.isDate(e)) return e.toISOString();
      if (!l && Vm.isBlob(e))
        throw new Hm("Blob is not supported. Use a Buffer instead.");
      return Vm.isArrayBuffer(e) || Vm.isTypedArray(e)
        ? l && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, i) {
      let l = e;
      if (e && !i && "object" == typeof e)
        if (Vm.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (Vm.isArray(e) &&
            (function (e) {
              return Vm.isArray(e) && !e.some(qm);
            })(e)) ||
          ((Vm.isFileList(e) || Vm.endsWith(n, "[]")) && (l = Vm.toArray(e)))
        )
          return (
            (n = Ym(n)),
            l.forEach(function (e, r) {
              !Vm.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === o ? Qm([n], r, a) : null === o ? n : n + "[]",
                  s(e)
                );
            }),
            !1
          );
      return !!qm(e) || (t.append(Qm(i, n, a), s(e)), !1);
    }
    const c = [],
      d = Object.assign(Xm, {
        defaultVisitor: u,
        convertValue: s,
        isVisitable: qm,
      });
    if (!Vm.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!Vm.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            Vm.forEach(n, function (n, a) {
              !0 ===
                (!(Vm.isUndefined(n) || null === n) &&
                  i.call(t, n, Vm.isString(a) ? a.trim() : a, r, d)) &&
                e(n, r ? r.concat(a) : [a]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  }
  function Jm(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Zm(e, t) {
    (this._pairs = []), e && Km(e, this, t);
  }
  const ev = Zm.prototype;
  function tv(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function nv(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || tv,
      i = n && n.serialize;
    let a;
    if (
      ((a = i
        ? i(t, n)
        : Vm.isURLSearchParams(t)
        ? t.toString()
        : new Zm(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  (ev.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (ev.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Jm);
          }
        : Jm;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const rv = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        Vm.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    iv = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    av = typeof URLSearchParams < "u" ? URLSearchParams : Zm,
    ov = typeof FormData < "u" ? FormData : null,
    lv = typeof Blob < "u" ? Blob : null,
    sv = (() => {
      let e;
      return (
        (!(typeof navigator < "u") ||
          ("ReactNative" !== (e = navigator.product) &&
            "NativeScript" !== e &&
            "NS" !== e)) &&
        typeof window < "u" &&
        typeof document < "u"
      );
    })(),
    uv = {
      isBrowser: !0,
      classes: { URLSearchParams: av, FormData: ov, Blob: lv },
      isStandardBrowserEnv: sv,
      isStandardBrowserWebWorkerEnv:
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function cv(e) {
    function t(e, n, r, i) {
      let a = e[i++];
      const o = Number.isFinite(+a),
        l = i >= e.length;
      return (
        (a = !a && Vm.isArray(r) ? r.length : a),
        l
          ? (Vm.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !o)
          : ((!r[a] || !Vm.isObject(r[a])) && (r[a] = []),
            t(e, n, r[a], i) &&
              Vm.isArray(r[a]) &&
              (r[a] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const i = n.length;
                let a;
                for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
                return t;
              })(r[a])),
            !o)
      );
    }
    if (Vm.isFormData(e) && Vm.isFunction(e.entries)) {
      const n = {};
      return (
        Vm.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return Vm.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                "[]" === e[0] ? "" : e[1] || e[0]
              );
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  }
  const dv = { "Content-Type": void 0 };
  const fv = {
    transitional: iv,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          i = Vm.isObject(e);
        if ((i && Vm.isHTMLForm(e) && (e = new FormData(e)), Vm.isFormData(e)))
          return r && r ? JSON.stringify(cv(e)) : e;
        if (
          Vm.isArrayBuffer(e) ||
          Vm.isBuffer(e) ||
          Vm.isStream(e) ||
          Vm.isFile(e) ||
          Vm.isBlob(e)
        )
          return e;
        if (Vm.isArrayBufferView(e)) return e.buffer;
        if (Vm.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let a;
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Km(
                e,
                new uv.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return uv.isNode && Vm.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((a = Vm.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Km(
              a ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return i || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (Vm.isString(e))
                try {
                  return (t || JSON.parse)(e), Vm.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || fv.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (e && Vm.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (n)
              throw "SyntaxError" === e.name
                ? Hm.from(e, Hm.ERR_BAD_RESPONSE, this, null, this.response)
                : e;
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: uv.classes.FormData, Blob: uv.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Vm.forEach(["delete", "get", "head"], function (e) {
    fv.headers[e] = {};
  }),
    Vm.forEach(["post", "put", "patch"], function (e) {
      fv.headers[e] = Vm.merge(dv);
    });
  const pv = fv,
    hv = Vm.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    mv = Symbol("internals");
  function vv(e) {
    return e && String(e).trim().toLowerCase();
  }
  function gv(e) {
    return !1 === e || null == e ? e : Vm.isArray(e) ? e.map(gv) : String(e);
  }
  function yv(e, t, n, r, i) {
    if (Vm.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), Vm.isString(t))) {
      if (Vm.isString(r)) return -1 !== t.indexOf(r);
      if (Vm.isRegExp(r)) return r.test(t);
    }
  }
  class bv {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function i(e, t, n) {
        const i = vv(t);
        if (!i) throw new Error("header name must be a non-empty string");
        const a = Vm.findKey(r, i);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = gv(e));
      }
      const a = (e, t) => Vm.forEach(e, (e, n) => i(e, n, t));
      return (
        Vm.isPlainObject(e) || e instanceof this.constructor
          ? a(e, t)
          : Vm.isString(e) &&
            (e = e.trim()) &&
            !((e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))(e)
          ? a(
              ((e) => {
                const t = {};
                let n, r, i;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (i = e.indexOf(":")),
                        (n = e.substring(0, i).trim().toLowerCase()),
                        (r = e.substring(i + 1).trim()),
                        !(!n || (t[n] && hv[n])) &&
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t
            )
          : null != e && i(t, e, n),
        this
      );
    }
    get(e, t) {
      if ((e = vv(e))) {
        const n = Vm.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (Vm.isFunction(t)) return t.call(this, e, n);
          if (Vm.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = vv(e))) {
        const n = Vm.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !yv(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function i(e) {
        if ((e = vv(e))) {
          const i = Vm.findKey(n, e);
          i && (!t || yv(0, n[i], i, t)) && (delete n[i], (r = !0));
        }
      }
      return Vm.isArray(e) ? e.forEach(i) : i(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const i = t[n];
        (!e || yv(0, this[i], i, e, !0)) && (delete this[i], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        Vm.forEach(this, (r, i) => {
          const a = Vm.findKey(n, i);
          if (a) return (t[a] = gv(r)), void delete t[i];
          const o = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(i)
            : String(i).trim();
          o !== i && delete t[i], (t[o] = gv(r)), (n[o] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Vm.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && Vm.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ": " + t)
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return t.forEach((e) => n.set(e)), n;
    }
    static accessor(e) {
      const t = (this[mv] = this[mv] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = vv(e);
        t[r] ||
          ((function (e, t) {
            const n = Vm.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, i) {
                  return this[r].call(this, t, e, n, i);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return Vm.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  bv.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Vm.freezeMethods(bv.prototype),
    Vm.freezeMethods(bv);
  const wv = bv;
  function xv(e, t) {
    const n = this || pv,
      r = t || n,
      i = wv.from(r.headers);
    let a = r.data;
    return (
      Vm.forEach(e, function (e) {
        a = e.call(n, a, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      a
    );
  }
  function Sv(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Ev(e, t, n) {
    Hm.call(this, e ?? "canceled", Hm.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  Vm.inherits(Ev, Hm, { __CANCEL__: !0 });
  const kv = uv.isStandardBrowserEnv
    ? {
        write: function (e, t, n, r, i, a) {
          const o = [];
          o.push(e + "=" + encodeURIComponent(t)),
            Vm.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            Vm.isString(r) && o.push("path=" + r),
            Vm.isString(i) && o.push("domain=" + i),
            !0 === a && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read: function (e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function Cv(e, t) {
    return e &&
      !(function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      })(t)
      ? (function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const Tv = uv.isStandardBrowserEnv
    ? (function () {
        const e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement("a");
        let n;
        function r(n) {
          let r = n;
          return (
            e && (t.setAttribute("href", r), (r = t.href)),
            t.setAttribute("href", r),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname:
                "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
            }
          );
        }
        return (
          (n = r(window.location.href)),
          function (e) {
            const t = Vm.isString(e) ? r(e) : e;
            return t.protocol === n.protocol && t.host === n.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  function Pv(e, t) {
    let n = 0;
    const r = (function (e, t) {
      e = e || 10;
      const n = new Array(e),
        r = new Array(e);
      let i,
        a = 0,
        o = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (l) {
          const s = Date.now(),
            u = r[o];
          i || (i = s), (n[a] = l), (r[a] = s);
          let c = o,
            d = 0;
          for (; c !== a; ) (d += n[c++]), (c %= e);
          if (((a = (a + 1) % e), a === o && (o = (o + 1) % e), s - i < t))
            return;
          const f = u && s - u;
          return f ? Math.round((1e3 * d) / f) : void 0;
        }
      );
    })(50, 250);
    return (i) => {
      const a = i.loaded,
        o = i.lengthComputable ? i.total : void 0,
        l = a - n,
        s = r(l);
      n = a;
      const u = {
        loaded: a,
        total: o,
        progress: o ? a / o : void 0,
        bytes: l,
        rate: s || void 0,
        estimated: s && o && a <= o ? (o - a) / s : void 0,
        event: i,
      };
      (u[t ? "download" : "upload"] = !0), e(u);
    };
  }
  const _v = {
    http: null,
    xhr:
      typeof XMLHttpRequest < "u" &&
      function (e) {
        return new Promise(function (t, n) {
          let r = e.data;
          const i = wv.from(e.headers).normalize(),
            a = e.responseType;
          let o;
          function l() {
            e.cancelToken && e.cancelToken.unsubscribe(o),
              e.signal && e.signal.removeEventListener("abort", o);
          }
          Vm.isFormData(r) &&
            (uv.isStandardBrowserEnv || uv.isStandardBrowserWebWorkerEnv
              ? i.setContentType(!1)
              : i.setContentType("multipart/form-data;", !1));
          let s = new XMLHttpRequest();
          if (e.auth) {
            const t = e.auth.username || "",
              n = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            i.set("Authorization", "Basic " + btoa(t + ":" + n));
          }
          const u = Cv(e.baseURL, e.url);
          function c() {
            if (!s) return;
            const r = wv.from(
              "getAllResponseHeaders" in s && s.getAllResponseHeaders()
            );
            (function (e, t, n) {
              const r = n.config.validateStatus;
              n.status && r && !r(n.status)
                ? t(
                    new Hm(
                      "Request failed with status code " + n.status,
                      [Hm.ERR_BAD_REQUEST, Hm.ERR_BAD_RESPONSE][
                        Math.floor(n.status / 100) - 4
                      ],
                      n.config,
                      n.request,
                      n
                    )
                  )
                : e(n);
            })(
              function (e) {
                t(e), l();
              },
              function (e) {
                n(e), l();
              },
              {
                data:
                  a && "text" !== a && "json" !== a
                    ? s.response
                    : s.responseText,
                status: s.status,
                statusText: s.statusText,
                headers: r,
                config: e,
                request: s,
              }
            ),
              (s = null);
          }
          if (
            (s.open(
              e.method.toUpperCase(),
              nv(u, e.params, e.paramsSerializer),
              !0
            ),
            (s.timeout = e.timeout),
            "onloadend" in s
              ? (s.onloadend = c)
              : (s.onreadystatechange = function () {
                  !s ||
                    4 !== s.readyState ||
                    (0 === s.status &&
                      (!s.responseURL ||
                        0 !== s.responseURL.indexOf("file:"))) ||
                    setTimeout(c);
                }),
            (s.onabort = function () {
              s &&
                (n(new Hm("Request aborted", Hm.ECONNABORTED, e, s)),
                (s = null));
            }),
            (s.onerror = function () {
              n(new Hm("Network Error", Hm.ERR_NETWORK, e, s)), (s = null);
            }),
            (s.ontimeout = function () {
              let t = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const r = e.transitional || iv;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  new Hm(
                    t,
                    r.clarifyTimeoutError ? Hm.ETIMEDOUT : Hm.ECONNABORTED,
                    e,
                    s
                  )
                ),
                (s = null);
            }),
            uv.isStandardBrowserEnv)
          ) {
            const t =
              (e.withCredentials || Tv(u)) &&
              e.xsrfCookieName &&
              kv.read(e.xsrfCookieName);
            t && i.set(e.xsrfHeaderName, t);
          }
          void 0 === r && i.setContentType(null),
            "setRequestHeader" in s &&
              Vm.forEach(i.toJSON(), function (e, t) {
                s.setRequestHeader(t, e);
              }),
            Vm.isUndefined(e.withCredentials) ||
              (s.withCredentials = !!e.withCredentials),
            a && "json" !== a && (s.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              s.addEventListener("progress", Pv(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
              s.upload &&
              s.upload.addEventListener("progress", Pv(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((o = (t) => {
                s &&
                  (n(!t || t.type ? new Ev(null, e, s) : t),
                  s.abort(),
                  (s = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(o),
              e.signal &&
                (e.signal.aborted
                  ? o()
                  : e.signal.addEventListener("abort", o)));
          const d = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(u);
          d && -1 === uv.protocols.indexOf(d)
            ? n(
                new Hm("Unsupported protocol " + d + ":", Hm.ERR_BAD_REQUEST, e)
              )
            : s.send(r || null);
        });
      },
  };
  Vm.forEach(_v, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Ov = (e) => {
    e = Vm.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = Vm.isString(n) ? _v[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw !1 === r
        ? new Hm(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            Vm.hasOwnProp(_v, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!Vm.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  };
  function Lv(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Ev(null, e);
  }
  function Nv(e) {
    return (
      Lv(e),
      (e.headers = wv.from(e.headers)),
      (e.data = xv.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Ov(e.adapter || pv.adapter)(e).then(
        function (t) {
          return (
            Lv(e),
            (t.data = xv.call(e, e.transformResponse, t)),
            (t.headers = wv.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            Sv(t) ||
              (Lv(e),
              t &&
                t.response &&
                ((t.response.data = xv.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = wv.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  const Mv = (e) => (e instanceof wv ? e.toJSON() : e);
  function zv(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return Vm.isPlainObject(e) && Vm.isPlainObject(t)
        ? Vm.merge.call({ caseless: n }, e, t)
        : Vm.isPlainObject(t)
        ? Vm.merge({}, t)
        : Vm.isArray(t)
        ? t.slice()
        : t;
    }
    function i(e, t, n) {
      return Vm.isUndefined(t)
        ? Vm.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function a(e, t) {
      if (!Vm.isUndefined(t)) return r(void 0, t);
    }
    function o(e, t) {
      return Vm.isUndefined(t)
        ? Vm.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, i, a) {
      return a in t ? r(n, i) : a in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: a,
      method: a,
      data: a,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: l,
      headers: (e, t) => i(Mv(e), Mv(t), !0),
    };
    return (
      Vm.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = s[r] || i,
          o = a(e[r], t[r], r);
        (Vm.isUndefined(o) && a !== l) || (n[r] = o);
      }),
      n
    );
  }
  const Iv = "1.4.0",
    jv = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      jv[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Rv = {};
  jv.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.4.0] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, i, a) => {
      if (!1 === e)
        throw new Hm(
          r(i, " has been removed" + (t ? " in " + t : "")),
          Hm.ERR_DEPRECATED
        );
      return (
        t &&
          !Rv[i] &&
          ((Rv[i] = !0),
          console.warn(
            r(
              i,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, i, a)
      );
    };
  };
  const Av = {
      assertOptions: function (e, t, n) {
        if ("object" != typeof e)
          throw new Hm("options must be an object", Hm.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0; ) {
          const a = r[i],
            o = t[a];
          if (o) {
            const t = e[a],
              n = void 0 === t || o(t, a, e);
            if (!0 !== n)
              throw new Hm(
                "option " + a + " must be " + n,
                Hm.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new Hm("Unknown option " + a, Hm.ERR_BAD_OPTION);
        }
      },
      validators: jv,
    },
    Dv = Av.validators;
  class $v {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new rv(), response: new rv() });
    }
    request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = zv(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: i } = t;
      let a;
      void 0 !== n &&
        Av.assertOptions(
          n,
          {
            silentJSONParsing: Dv.transitional(Dv.boolean),
            forcedJSONParsing: Dv.transitional(Dv.boolean),
            clarifyTimeoutError: Dv.transitional(Dv.boolean),
          },
          !1
        ),
        null != r &&
          (Vm.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Av.assertOptions(
                r,
                { encode: Dv.function, serialize: Dv.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
        (a = i && Vm.merge(i.common, i[t.method])),
        a &&
          Vm.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (e) => {
              delete i[e];
            }
          ),
        (t.headers = wv.concat(a, i));
      const o = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((l = l && e.synchronous), o.unshift(e.fulfilled, e.rejected));
      });
      const s = [];
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let u,
        c,
        d = 0;
      if (!l) {
        const e = [Nv.bind(this), void 0];
        for (
          e.unshift.apply(e, o),
            e.push.apply(e, s),
            c = e.length,
            u = Promise.resolve(t);
          d < c;

        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = o.length;
      let f = t;
      for (d = 0; d < c; ) {
        const e = o[d++],
          t = o[d++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        u = Nv.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
      return u;
    }
    getUri(e) {
      return nv(
        Cv((e = zv(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  }
  Vm.forEach(["delete", "get", "head", "options"], function (e) {
    $v.prototype[e] = function (t, n) {
      return this.request(
        zv(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    Vm.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, i) {
          return this.request(
            zv(i || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      ($v.prototype[e] = t()), ($v.prototype[e + "Form"] = t(!0));
    });
  const Fv = $v;
  class Bv {
    constructor(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, i) {
          n.reason || ((n.reason = new Ev(e, r, i)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    static source() {
      let e;
      return {
        token: new Bv(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Uv = Bv;
  const Vv = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Vv).forEach(([e, t]) => {
    Vv[t] = e;
  });
  const Hv = Vv;
  const Wv = (function e(t) {
    const n = new Fv(t),
      r = dm(Fv.prototype.request, n);
    return (
      Vm.extend(r, Fv.prototype, n, { allOwnKeys: !0 }),
      Vm.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(zv(t, n));
      }),
      r
    );
  })(pv);
  (Wv.Axios = Fv),
    (Wv.CanceledError = Ev),
    (Wv.CancelToken = Uv),
    (Wv.isCancel = Sv),
    (Wv.VERSION = Iv),
    (Wv.toFormData = Km),
    (Wv.AxiosError = Hm),
    (Wv.Cancel = Wv.CanceledError),
    (Wv.all = function (e) {
      return Promise.all(e);
    }),
    (Wv.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Wv.isAxiosError = function (e) {
      return Vm.isObject(e) && !0 === e.isAxiosError;
    }),
    (Wv.mergeConfig = zv),
    (Wv.AxiosHeaders = wv),
    (Wv.formToJSON = (e) => cv(Vm.isHTMLForm(e) ? new FormData(e) : e)),
    (Wv.HttpStatusCode = Hv),
    (Wv.default = Wv);
  const Gv = Wv,
    qv = "https://backend.paxify.io";
  var Yv = ((e) => (
    (e.INITIALIZED = "reels_init"),
    (e.SLIDE_VIEWED = "reels_slide_viewed"),
    (e.REELS_OPENED = "reels_opened"),
    (e.REELS_CLOSED = "reels_closed"),
    (e.STORY_VIEWED = "reels_story_viewed"),
    (e.INTERACTED = "reels_interacted"),
    (e.SHARED = "reels_shared"),
    (e.LIKED = "reels_liked"),
    (e.CTA_CLICKED = "cta_clicked"),
    e
  ))(Yv || {});
  var Qv = { exports: {} },
    Xv = {},
    Kv = "function" == typeof Symbol && Symbol.for,
    Jv = Kv ? Symbol.for("react.element") : 60103,
    Zv = Kv ? Symbol.for("react.portal") : 60106,
    eg = Kv ? Symbol.for("react.fragment") : 60107,
    tg = Kv ? Symbol.for("react.strict_mode") : 60108,
    ng = Kv ? Symbol.for("react.profiler") : 60114,
    rg = Kv ? Symbol.for("react.provider") : 60109,
    ig = Kv ? Symbol.for("react.context") : 60110,
    ag = Kv ? Symbol.for("react.async_mode") : 60111,
    og = Kv ? Symbol.for("react.concurrent_mode") : 60111,
    lg = Kv ? Symbol.for("react.forward_ref") : 60112,
    sg = Kv ? Symbol.for("react.suspense") : 60113,
    ug = Kv ? Symbol.for("react.suspense_list") : 60120,
    cg = Kv ? Symbol.for("react.memo") : 60115,
    dg = Kv ? Symbol.for("react.lazy") : 60116,
    fg = Kv ? Symbol.for("react.block") : 60121,
    pg = Kv ? Symbol.for("react.fundamental") : 60117,
    hg = Kv ? Symbol.for("react.responder") : 60118,
    mg = Kv ? Symbol.for("react.scope") : 60119;
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function vg(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case Jv:
          switch ((e = e.type)) {
            case ag:
            case og:
            case eg:
            case ng:
            case tg:
            case sg:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case ig:
                case lg:
                case dg:
                case cg:
                case rg:
                  return e;
                default:
                  return t;
              }
          }
        case Zv:
          return t;
      }
    }
  }
  function gg(e) {
    return vg(e) === og;
  }
  (Xv.AsyncMode = ag),
    (Xv.ConcurrentMode = og),
    (Xv.ContextConsumer = ig),
    (Xv.ContextProvider = rg),
    (Xv.Element = Jv),
    (Xv.ForwardRef = lg),
    (Xv.Fragment = eg),
    (Xv.Lazy = dg),
    (Xv.Memo = cg),
    (Xv.Portal = Zv),
    (Xv.Profiler = ng),
    (Xv.StrictMode = tg),
    (Xv.Suspense = sg),
    (Xv.isAsyncMode = function (e) {
      return gg(e) || vg(e) === ag;
    }),
    (Xv.isConcurrentMode = gg),
    (Xv.isContextConsumer = function (e) {
      return vg(e) === ig;
    }),
    (Xv.isContextProvider = function (e) {
      return vg(e) === rg;
    }),
    (Xv.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === Jv;
    }),
    (Xv.isForwardRef = function (e) {
      return vg(e) === lg;
    }),
    (Xv.isFragment = function (e) {
      return vg(e) === eg;
    }),
    (Xv.isLazy = function (e) {
      return vg(e) === dg;
    }),
    (Xv.isMemo = function (e) {
      return vg(e) === cg;
    }),
    (Xv.isPortal = function (e) {
      return vg(e) === Zv;
    }),
    (Xv.isProfiler = function (e) {
      return vg(e) === ng;
    }),
    (Xv.isStrictMode = function (e) {
      return vg(e) === tg;
    }),
    (Xv.isSuspense = function (e) {
      return vg(e) === sg;
    }),
    (Xv.isValidElementType = function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === eg ||
        e === og ||
        e === ng ||
        e === tg ||
        e === sg ||
        e === ug ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === dg ||
            e.$$typeof === cg ||
            e.$$typeof === rg ||
            e.$$typeof === ig ||
            e.$$typeof === lg ||
            e.$$typeof === pg ||
            e.$$typeof === hg ||
            e.$$typeof === mg ||
            e.$$typeof === fg))
      );
    }),
    (Xv.typeOf = vg),
    (Qv.exports = Xv);
  var yg = Qv.exports,
    bg = {};
  (bg[yg.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (bg[yg.Memo] = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    });
  var wg = /[A-Z]|^ms/g,
    xg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Sg = function (e) {
      return 45 === e.charCodeAt(1);
    },
    Eg = function (e) {
      return null != e && "boolean" != typeof e;
    },
    kg = (function (e) {
      var t = Object.create(null);
      return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
      };
    })(function (e) {
      return Sg(e) ? e : e.replace(wg, "-$&").toLowerCase();
    }),
    Cg = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" == typeof t)
            return t.replace(xg, function (e, t, n) {
              return (Pg = { name: t, styles: n, next: Pg }), t;
            });
      }
      return 1 === xf[e] || Sg(e) || "number" != typeof t || 0 === t
        ? t
        : t + "px";
    };
  function Tg(e, t, n) {
    if (null == n) return "";
    if (void 0 !== n.__emotion_styles) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        if (1 === n.anim)
          return (Pg = { name: n.name, styles: n.styles, next: Pg }), n.name;
        if (void 0 !== n.styles) {
          var r = n.next;
          if (void 0 !== r)
            for (; void 0 !== r; )
              (Pg = { name: r.name, styles: r.styles, next: Pg }), (r = r.next);
          return n.styles + ";";
        }
        return (function (e, t, n) {
          var r = "";
          if (Array.isArray(n))
            for (var i = 0; i < n.length; i++) r += Tg(e, t, n[i]) + ";";
          else
            for (var a in n) {
              var o = n[a];
              if ("object" != typeof o)
                null != t && void 0 !== t[o]
                  ? (r += a + "{" + t[o] + "}")
                  : Eg(o) && (r += kg(a) + ":" + Cg(a, o) + ";");
              else if (
                !Array.isArray(o) ||
                "string" != typeof o[0] ||
                (null != t && void 0 !== t[o[0]])
              ) {
                var l = Tg(e, t, o);
                switch (a) {
                  case "animation":
                  case "animationName":
                    r += kg(a) + ":" + l + ";";
                    break;
                  default:
                    r += a + "{" + l + "}";
                }
              } else
                for (var s = 0; s < o.length; s++)
                  Eg(o[s]) && (r += kg(a) + ":" + Cg(a, o[s]) + ";");
            }
          return r;
        })(e, t, n);
      case "function":
        if (void 0 !== e) {
          var i = Pg,
            a = n(e);
          return (Pg = i), Tg(e, t, a);
        }
    }
    if (null == t) return n;
    var o = t[n];
    return void 0 !== o ? o : n;
  }
  var Pg,
    _g = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  function Og() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (function (e, t, n) {
      if (
        1 === e.length &&
        "object" == typeof e[0] &&
        null !== e[0] &&
        void 0 !== e[0].styles
      )
        return e[0];
      var r = !0,
        i = "";
      Pg = void 0;
      var a = e[0];
      null == a || void 0 === a.raw
        ? ((r = !1), (i += Tg(n, t, a)))
        : (i += a[0]);
      for (var o = 1; o < e.length; o++)
        (i += Tg(n, t, e[o])), r && (i += a[o]);
      _g.lastIndex = 0;
      for (var l, s = ""; null !== (l = _g.exec(i)); ) s += "-" + l[1];
      var u =
        (function (e) {
          for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (i) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        })(i) + s;
      return { name: u, styles: i, next: Pg };
    })(t);
  }
  const Lg = {
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200,
    mdpiScreen: 1279,
    largeLaptop: 1439,
    fourK: 2160,
    tallPhone: "(max-width: 360px) and (min-height: 740px)",
  };
  function Ng() {
    return typeof window < "u"
      ? window.matchMedia("(max-width: 440px)").matches
      : null;
  }
  Object.keys(Lg).reduce((e, t) => {
    const n = "string" == typeof Lg[t] ? "" : "min-width:",
      r = "string" == typeof Lg[t] ? "" : "px";
    return (
      (e[t] = (e) => Og`
        @media (${n + Lg[t] + r}) {
          ${e};
        }
      `),
      e
    );
  }, {});
  const Mg = {},
    zg = { device: Ng() ? "mobile" : "desktop", time: new Date().getTime() };
  function Ig(e, t) {
    clearTimeout(Mg[e]),
      null != window[e]
        ? t()
        : (Mg[e] = setTimeout(() => {
            Ig(e, t);
          }, 500));
  }
  function jg(e) {
    Ig("dataLayer", () => {
      null != window.dataLayer
        ? window.dataLayer.push(e)
        : console.error("dataLayer not available");
    });
  }
  const Rg = async (e, t, n) => {
      await (async function (e, t, n) {
        const r = `${qv}/firebase/tracking`;
        return Gv.post(r, { tracking: e, user: { uid: t, storeId: n } })
          .then((e) => e.data)
          .then((e) => Promise.resolve(e))
          .catch((e) => {
            const t = e.result;
            return Promise.reject(t);
          });
      })(e, t, n);
    },
    Ag = "GTM-NP83NW9",
    Dg = `https://www.googletagmanager.com/gtm.js?id=${Ag}`,
    $g = `https://www.googletagmanager.com/ns.html?id=${Ag}`,
    Fg =
      "https://cdn.jsdelivr.net/gh/paxify-llc/builds@latest/reelife/logo.png",
    Bg = (e) => !!("number" == typeof e && e >= 0 && isFinite(e)),
    Ug = (e, t) =>
      "UPDATE_FIELD" === t.type ? { ...e, [t.field]: t.value } : e,
    Vg = (e, t) =>
      "UPDATE_CONFIG" === t.type ? { ...e, [t.field]: t.value } : e,
    Hg = () =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-player-pause-filled",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#000000",
        fill: "#000000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          q.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          q.jsx("path", {
            d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
          q.jsx("path", {
            d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    Wg = () =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-player-play-filled",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#000000",
        fill: "#000000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          q.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          q.jsx("path", {
            d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    Gg = ({ size: e = 50, color: t = "white" }) =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-left",
        viewBox: "0 0 16 16",
        children: [
          " ",
          q.jsx("path", {
            fillRule: "evenodd",
            d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z",
          }),
          " ",
        ],
      }),
    qg = ({ size: e = 50, color: t = "white" }) =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-right",
        viewBox: "0 0 16 16",
        children: [
          " ",
          q.jsx("path", {
            fillRule: "evenodd",
            d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
          }),
          " ",
        ],
      }),
    Yg = Gp("div")`
  display: flex;
  flex-wrap: wrap;
`,
    Qg = Gp(Yg)`
  align-items: center;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    Xg = Gp(Yg)`
  flex-direction: column;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    Kg = () =>
      q.jsxs("svg", {
        fill: "white",
        id: "filledHeart",
        height: "40px",
        width: "40px",
        "data-name": "filledHeart",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 107.39",
        children: [
          q.jsx("title", { children: "red-heart" }),
          q.jsx("path", {
            style: { fill: "#ed1b24", fillRule: "evenodd" },
            d: "M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z",
          }),
        ],
      }),
    Jg = ({ fill: e = "white" }) =>
      q.jsx("svg", {
        fill: e,
        height: "40px",
        width: "40px",
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 471.701 471.701",
        xmlSpace: "preserve",
        children: q.jsx("g", {
          children: q.jsx("path", {
            d: "M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1\r\n\t   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3\r\n\t   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4\r\n\t   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3\r\n\t   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4\r\n\t   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3\r\n\t   C444.801,187.101,434.001,213.101,414.401,232.701z",
          }),
        }),
      }),
    Zg = () =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-share-2",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#fff",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          q.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          q.jsx("path", {
            d: "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1",
          }),
          q.jsx("path", { d: "M12 14v-11" }),
          q.jsx("path", { d: "M9 6l3 -3l3 3" }),
        ],
      }),
    ey = A.createContext({
      style: 1,
      subscription: null,
      isPreview: !1,
      uid: null,
      storeId: null,
    }),
    ty = Gp.div`
  gap: 5px;
  top: -40px;
  left: 15px;
  z-index: 9999;
  display: flex;
  color: #5e92e7;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  align-items: flex-end;
  font-family: "Poppins", sans-serif;

  & > img {
    width: 75px !important;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,
    ny = Gp.img`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
`,
    ry = Gp(Qg)`
  z-index: 100;
  position: absolute;
  bottom: 25px;
  font-family: "Popins", sans-serif;
  font-size: 14px;
  gap: 15px;
  border-radius: 10px;
  width: 100%;

  @media (max-width: 768px) {
    bottom: 75px;
  }
`,
    iy = Gp(Qg)`
  height: 100px;
  width: 100%;
  margin: 10px;
  padding: 10px;

  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`,
    ay = Gp.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: -45px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: -50px;
  }
`,
    oy = Gp(Qg)`
  width: 80%;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex: 1;
  }
`,
    ly = Gp.button`
  border: none;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ textColor: e }) => e || "white"};
  background: ${({ background: e }) => e || "grey"};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }

  @media (max-width: 350px) {
    font-size: 8px;
  }
`,
    sy = Gp(Xg)`
  max-width: 20vw;
  @media (max-width: 440px) {
    max-width: 35vw;
  }

  @media (max-width: 390px) {
    max-width: 28vw;
  }

  @media (max-width: 350px) {
    font-size: 11px;
    max-width: 23vw;
  }

  & p {
    margin: 0;
  }
`,
    uy = Gp.div`
  top: -100px;
  right: 17px;
  cursor: pointer;
  position: absolute;
`,
    cy = Gp.div`
  opacity: ${({ $hover: e }) => (e ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 1;
  }
`,
    dy = Gp.div`
  position: relative;
  bottom: -3px;
`,
    fy = D.memo(
      ({
        story: e,
        handleCTAClick: t,
        toggleStoryLike: n,
        setShareOpen: r,
        handleShare: i,
        handlePromoClick: a,
        shareOpen: o,
        isHovering: l,
        isLiked: s,
      }) => {
        var u, c, d, f, p, h, m, v, g, y, b;
        const { subscription: w } = A.useContext(ey);
        return q.jsxs(ry, {
          children: [
            q.jsxs(cy, {
              $hover: l,
              children: [
                (null == (u = null == e ? void 0 : e.layout)
                  ? void 0
                  : u.likeButton) &&
                  q.jsx(ay, {
                    id: "like",
                    onClick: (e) => {
                      n(e);
                    },
                    children: s ? q.jsx(Kg, {}) : q.jsx(Jg, {}),
                  }),
                q.jsx(uy, {
                  onClick: async (e) => {
                    e.stopPropagation(), r(!o), await i();
                  },
                  children: q.jsx(Zg, {}),
                }),
                "Basic" === (null == w ? void 0 : w.plan) &&
                  q.jsxs(ty, {
                    onClick: a,
                    children: [
                      q.jsx("img", { src: Fg }),
                      q.jsx(dy, { children: "By Paxify" }),
                    ],
                  }),
              ],
            }),
            1 ===
              (null == (c = null == e ? void 0 : e.layout)
                ? void 0
                : c.design) &&
              (null == (d = null == e ? void 0 : e.layout) ? void 0 : d.cta) &&
              e.layout.cta.text &&
              e.layout.cta.link &&
              q.jsxs(iy, {
                gap: "12px",
                children: [
                  q.jsx(ny, {
                    src:
                      null == (f = null == e ? void 0 : e.layout)
                        ? void 0
                        : f.author,
                  }),
                  q.jsxs(oy, {
                    gap: "25px",
                    children: [
                      q.jsx(sy, {
                        children: q.jsx("div", {
                          dangerouslySetInnerHTML: {
                            __html:
                              null == (p = null == e ? void 0 : e.layout)
                                ? void 0
                                : p.title,
                          },
                        }),
                      }),
                      q.jsx(ly, {
                        background:
                          null ==
                          (m =
                            null == (h = null == e ? void 0 : e.layout)
                              ? void 0
                              : h.cta)
                            ? void 0
                            : m.backgroundColor,
                        textColor:
                          null ==
                          (g =
                            null == (v = null == e ? void 0 : e.layout)
                              ? void 0
                              : v.cta)
                            ? void 0
                            : g.textColor,
                        onClick: (n) => {
                          var r, i;
                          t(
                            n,
                            null ==
                              (i =
                                null == (r = null == e ? void 0 : e.layout)
                                  ? void 0
                                  : r.cta)
                              ? void 0
                              : i.link
                          );
                        },
                        children:
                          null ==
                          (b =
                            null == (y = null == e ? void 0 : e.layout)
                              ? void 0
                              : y.cta)
                            ? void 0
                            : b.text,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    ),
    py = Gp.div`
  flex-grow: 1;
  height: 4px;
  width: auto;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`,
    hy = Gp.div`
  height: 100%;
  background-color: white;
  width: ${(e) => e.filled}%;
  max-width: 100%;
  display: block !important;
`,
    my = D.memo(({ filled: e = 0 }) =>
      q.jsx(py, { children: q.jsx(hy, { filled: e }) })
    ),
    vy = ({ fill: e = "#fff" }) =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-volume",
        width: "34",
        height: "34",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: e,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          q.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          q.jsx("path", { d: "M15 8a5 5 0 0 1 0 8" }),
          q.jsx("path", { d: "M17.7 5a9 9 0 0 1 0 14" }),
          q.jsx("path", {
            d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
          }),
        ],
      }),
    gy = ({ fill: e = "#fff" }) =>
      q.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-volume-off",
        width: "34",
        height: "34",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: e,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          q.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          q.jsx("path", {
            d: "M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464",
          }),
          q.jsx("path", {
            d: "M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615",
          }),
          q.jsx("path", {
            d: "M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664",
          }),
          q.jsx("path", { d: "M3 3l18 18" }),
        ],
      }),
    yy = Gp.div`
  gap: 4px;
  top: 0;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  margin-bottom: 5px;
  flex-flow: row wrap;
`,
    by = Gp.div`
  top: 25px;
  left: 10px;
  position: absolute;
  cursor: pointer;
  font-size: 30px;
  font-weight: 900;
  z-index: 99999999999;
  color: ${(e) => e.color};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,
    wy = Gp.div`
  width: 100%;
  position: absolute;
  padding: 10px 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(100, 100, 100, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`,
    xy = Gp.div`
  right: 5px;
  z-index: 50;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: 25px;
  }
`,
    Sy = D.memo(
      ({
        activeStory: e,
        filteredConfig: t,
        isProgressBarFilled: n,
        closeOverlay: r,
        isHovering: i,
        audioRef: a,
        videoRef: o,
      }) => {
        var l, s;
        const [u, c] = A.useState(!1);
        return (
          A.useEffect(() => {
            a.current && (a.current.volume = u ? 0 : 1);
          }, [u, a]),
          A.useEffect(() => {
            o.current && (o.current.volume = u ? 0 : 1);
          }, [u, o]),
          q.jsxs(wy, {
            children: [
              q.jsx(yy, {
                children:
                  null == e
                    ? void 0
                    : e.player.map((e, t) => q.jsx(my, { filled: n(t) }, e.id)),
              }),
              q.jsx(by, {
                color:
                  (null ==
                  (s =
                    null == (l = null == t ? void 0 : t.config)
                      ? void 0
                      : l.close)
                    ? void 0
                    : s.color) ?? "black",
                onClick: (e) => {
                  e.stopPropagation(), r();
                },
                children: "✕",
              }),
              (a || o) &&
                q.jsx(xy, {
                  onClick: (e) => {
                    e.stopPropagation(), c(!u);
                  },
                  $hover: i,
                  children: u ? q.jsx(gy, {}) : q.jsx(vy, {}),
                }),
            ],
          })
        );
      }
    );
  let Ey,
    ky,
    Cy,
    Ty = { data: "" },
    Py = (e) =>
      "object" == typeof window
        ? (
            (e ? e.querySelector("#_goober") : window._goober) ||
            Object.assign(
              (e || document.head).appendChild(document.createElement("style")),
              { innerHTML: " ", id: "_goober" }
            )
          ).firstChild
        : e || Ty,
    _y = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    Oy = /\/\*[^]*?\*\/|  +/g,
    Ly = /\n+/g,
    Ny = (e, t) => {
      let n = "",
        r = "",
        i = "";
      for (let a in e) {
        let o = e[a];
        "@" == a[0]
          ? "i" == a[1]
            ? (n = a + " " + o + ";")
            : (r +=
                "f" == a[1]
                  ? Ny(o, a)
                  : a + "{" + Ny(o, "k" == a[1] ? "" : t) + "}")
          : "object" == typeof o
          ? (r += Ny(
              o,
              t
                ? t.replace(/([^,])+/g, (e) =>
                    a.replace(/(^:.*)|([^,])+/g, (t) =>
                      /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t
                    )
                  )
                : a
            ))
          : null != o &&
            ((a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += Ny.p ? Ny.p(a, o) : a + ":" + o + ";"));
      }
      return n + (t && i ? t + "{" + i + "}" : i) + r;
    },
    My = {},
    zy = (e) => {
      if ("object" == typeof e) {
        let t = "";
        for (let n in e) t += n + zy(e[n]);
        return t;
      }
      return e;
    },
    Iy = (e, t, n, r, i) => {
      let a = zy(e),
        o =
          My[a] ||
          (My[a] = ((e) => {
            let t = 0,
              n = 11;
            for (; t < e.length; ) n = (101 * n + e.charCodeAt(t++)) >>> 0;
            return "go" + n;
          })(a));
      if (!My[o]) {
        let t =
          a !== e
            ? e
            : ((e) => {
                let t,
                  n,
                  r = [{}];
                for (; (t = _y.exec(e.replace(Oy, ""))); )
                  t[4]
                    ? r.shift()
                    : t[3]
                    ? ((n = t[3].replace(Ly, " ").trim()),
                      r.unshift((r[0][n] = r[0][n] || {})))
                    : (r[0][t[1]] = t[2].replace(Ly, " ").trim());
                return r[0];
              })(e);
        My[o] = Ny(i ? { ["@keyframes " + o]: t } : t, n ? "" : "." + o);
      }
      let l = n && My.g ? My.g : null;
      return (
        n && (My.g = My[o]),
        (s = My[o]),
        (u = t),
        (c = r),
        (d = l)
          ? (u.data = u.data.replace(d, s))
          : -1 === u.data.indexOf(s) && (u.data = c ? s + u.data : u.data + s),
        o
      );
      var s, u, c, d;
    },
    jy = (e, t, n) =>
      e.reduce((e, r, i) => {
        let a = t[i];
        if (a && a.call) {
          let e = a(n),
            t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
          a = t
            ? "." + t
            : e && "object" == typeof e
            ? e.props
              ? ""
              : Ny(e, "")
            : !1 === e
            ? ""
            : e;
        }
        return e + r + (a ?? "");
      }, "");
  function Ry(e) {
    let t = this || {},
      n = e.call ? e(t.p) : e;
    return Iy(
      n.unshift
        ? n.raw
          ? jy(n, [].slice.call(arguments, 1), t.p)
          : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {})
        : n,
      Py(t.target),
      t.g,
      t.o,
      t.k
    );
  }
  Ry.bind({ g: 1 });
  let Ay = Ry.bind({ k: 1 });
  function Dy(e, t) {
    let n = this || {};
    return function () {
      let r = arguments;
      function i(a, o) {
        let l = Object.assign({}, a),
          s = l.className || i.className;
        (n.p = Object.assign({ theme: ky && ky() }, l)),
          (n.o = / *go\d+/.test(s)),
          (l.className = Ry.apply(n, r) + (s ? " " + s : "")),
          t && (l.ref = o);
        let u = e;
        return (
          e[0] && ((u = l.as || e), delete l.as), Cy && u[0] && Cy(l), Ey(u, l)
        );
      }
      return t ? t(i) : i;
    };
  }
  var $y = (e, t) => (((e) => "function" == typeof e)(e) ? e(t) : e),
    Fy = (() => {
      let e = 0;
      return () => (++e).toString();
    })(),
    By = (() => {
      let e;
      return () => {
        if (void 0 === e && typeof window < "u") {
          let t = matchMedia("(prefers-reduced-motion: reduce)");
          e = !t || t.matches;
        }
        return e;
      };
    })(),
    Uy = new Map(),
    Vy = (e) => {
      if (Uy.has(e)) return;
      let t = setTimeout(() => {
        Uy.delete(e), qy({ type: 4, toastId: e });
      }, 1e3);
      Uy.set(e, t);
    },
    Hy = (e, t) => {
      switch (t.type) {
        case 0:
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 20) };
        case 1:
          return (
            t.toast.id &&
              ((e) => {
                let t = Uy.get(e);
                t && clearTimeout(t);
              })(t.toast.id),
            {
              ...e,
              toasts: e.toasts.map((e) =>
                e.id === t.toast.id ? { ...e, ...t.toast } : e
              ),
            }
          );
        case 2:
          let { toast: n } = t;
          return e.toasts.find((e) => e.id === n.id)
            ? Hy(e, { type: 1, toast: n })
            : Hy(e, { type: 0, toast: n });
        case 3:
          let { toastId: r } = t;
          return (
            r
              ? Vy(r)
              : e.toasts.forEach((e) => {
                  Vy(e.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((e) =>
                e.id === r || void 0 === r ? { ...e, visible: !1 } : e
              ),
            }
          );
        case 4:
          return void 0 === t.toastId
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
        case 5:
          return { ...e, pausedAt: t.time };
        case 6:
          let i = t.time - (e.pausedAt || 0);
          return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map((e) => ({
              ...e,
              pauseDuration: e.pauseDuration + i,
            })),
          };
      }
    },
    Wy = [],
    Gy = { toasts: [], pausedAt: void 0 },
    qy = (e) => {
      (Gy = Hy(Gy, e)),
        Wy.forEach((e) => {
          e(Gy);
        });
    },
    Yy = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    Qy = (e) => (t, n) => {
      let r = ((e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        type: t,
        ariaProps: { role: "status", "aria-live": "polite" },
        message: e,
        pauseDuration: 0,
        ...n,
        id: (null == n ? void 0 : n.id) || Fy(),
      }))(t, e, n);
      return qy({ type: 2, toast: r }), r.id;
    },
    Xy = (e, t) => Qy("blank")(e, t);
  (Xy.error = Qy("error")),
    (Xy.success = Qy("success")),
    (Xy.loading = Qy("loading")),
    (Xy.custom = Qy("custom")),
    (Xy.dismiss = (e) => {
      qy({ type: 3, toastId: e });
    }),
    (Xy.remove = (e) => qy({ type: 4, toastId: e })),
    (Xy.promise = (e, t, n) => {
      let r = Xy.loading(t.loading, {
        ...n,
        ...(null == n ? void 0 : n.loading),
      });
      return (
        e
          .then(
            (e) => (
              Xy.success($y(t.success, e), {
                id: r,
                ...n,
                ...(null == n ? void 0 : n.success),
              }),
              e
            )
          )
          .catch((e) => {
            Xy.error($y(t.error, e), {
              id: r,
              ...n,
              ...(null == n ? void 0 : n.error),
            });
          }),
        e
      );
    });
  var Ky = (e, t) => {
      qy({ type: 1, toast: { id: e, height: t } });
    },
    Jy = () => {
      qy({ type: 5, time: Date.now() });
    },
    Zy = (e) => {
      let { toasts: t, pausedAt: n } = ((e = {}) => {
        let [t, n] = A.useState(Gy);
        A.useEffect(
          () => (
            Wy.push(n),
            () => {
              let e = Wy.indexOf(n);
              e > -1 && Wy.splice(e, 1);
            }
          ),
          [t]
        );
        let r = t.toasts.map((t) => {
          var n, r;
          return {
            ...e,
            ...e[t.type],
            ...t,
            duration:
              t.duration ||
              (null == (n = e[t.type]) ? void 0 : n.duration) ||
              (null == e ? void 0 : e.duration) ||
              Yy[t.type],
            style: {
              ...e.style,
              ...(null == (r = e[t.type]) ? void 0 : r.style),
              ...t.style,
            },
          };
        });
        return { ...t, toasts: r };
      })(e);
      A.useEffect(() => {
        if (n) return;
        let e = Date.now(),
          r = t.map((t) => {
            if (t.duration === 1 / 0) return;
            let n = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
            if (!(n < 0)) return setTimeout(() => Xy.dismiss(t.id), n);
            t.visible && Xy.dismiss(t.id);
          });
        return () => {
          r.forEach((e) => e && clearTimeout(e));
        };
      }, [t, n]);
      let r = A.useCallback(() => {
          n && qy({ type: 6, time: Date.now() });
        }, [n]),
        i = A.useCallback(
          (e, n) => {
            let {
                reverseOrder: r = !1,
                gutter: i = 8,
                defaultPosition: a,
              } = n || {},
              o = t.filter(
                (t) => (t.position || a) === (e.position || a) && t.height
              ),
              l = o.findIndex((t) => t.id === e.id),
              s = o.filter((e, t) => t < l && e.visible).length;
            return o
              .filter((e) => e.visible)
              .slice(...(r ? [s + 1] : [0, s]))
              .reduce((e, t) => e + (t.height || 0) + i, 0);
          },
          [t]
        );
      return {
        toasts: t,
        handlers: {
          updateHeight: Ky,
          startPause: Jy,
          endPause: r,
          calculateOffset: i,
        },
      };
    },
    eb = Ay`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    tb = Ay`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    nb = Ay`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    rb = Dy("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${nb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    ib = Ay`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    ab = Dy("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ib} 1s linear infinite;
`,
    ob = Ay`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    lb = Ay`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    sb = Dy("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ob} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${lb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    ub = Dy("div")`
  position: absolute;
`,
    cb = Dy("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    db = Ay`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    fb = Dy("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${db} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    pb = ({ toast: e }) => {
      let { icon: t, type: n, iconTheme: r } = e;
      return void 0 !== t
        ? "string" == typeof t
          ? A.createElement(fb, null, t)
          : t
        : "blank" === n
        ? null
        : A.createElement(
            cb,
            null,
            A.createElement(ab, { ...r }),
            "loading" !== n &&
              A.createElement(
                ub,
                null,
                "error" === n
                  ? A.createElement(rb, { ...r })
                  : A.createElement(sb, { ...r })
              )
          );
    },
    hb = (e) =>
      `\n0% {transform: translate3d(0,${
        -200 * e
      }%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
    mb = (e) =>
      `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${
        -150 * e
      }%,-1px) scale(.6); opacity:0;}\n`,
    vb = Dy("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    gb = Dy("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    yb = A.memo(({ toast: e, position: t, style: n, children: r }) => {
      let i = e.height
          ? ((e, t) => {
              let n = e.includes("top") ? 1 : -1,
                [r, i] = By()
                  ? [
                      "0%{opacity:0;} 100%{opacity:1;}",
                      "0%{opacity:1;} 100%{opacity:0;}",
                    ]
                  : [hb(n), mb(n)];
              return {
                animation: t
                  ? `${Ay(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
                  : `${Ay(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
              };
            })(e.position || t || "top-center", e.visible)
          : { opacity: 0 },
        a = A.createElement(pb, { toast: e }),
        o = A.createElement(gb, { ...e.ariaProps }, $y(e.message, e));
      return A.createElement(
        vb,
        { className: e.className, style: { ...i, ...n, ...e.style } },
        "function" == typeof r
          ? r({ icon: a, message: o })
          : A.createElement(A.Fragment, null, a, o)
      );
    });
  !(function (e, t, n, r) {
    (Ny.p = t), (Ey = e), (ky = n), (Cy = r);
  })(A.createElement);
  var bb = ({
      id: e,
      className: t,
      style: n,
      onHeightUpdate: r,
      children: i,
    }) => {
      let a = A.useCallback(
        (t) => {
          if (t) {
            let n = () => {
              let n = t.getBoundingClientRect().height;
              r(e, n);
            };
            n(),
              new MutationObserver(n).observe(t, {
                subtree: !0,
                childList: !0,
                characterData: !0,
              });
          }
        },
        [e, r]
      );
      return A.createElement("div", { ref: a, className: t, style: n }, i);
    },
    wb = Ry`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    xb = ({
      reverseOrder: e,
      position: t = "top-center",
      toastOptions: n,
      gutter: r,
      children: i,
      containerStyle: a,
      containerClassName: o,
    }) => {
      let { toasts: l, handlers: s } = Zy(n);
      return A.createElement(
        "div",
        {
          style: {
            position: "fixed",
            zIndex: 9999,
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            pointerEvents: "none",
            ...a,
          },
          className: o,
          onMouseEnter: s.startPause,
          onMouseLeave: s.endPause,
        },
        l.map((n) => {
          let a = n.position || t,
            o = ((e, t) => {
              let n = e.includes("top"),
                r = n ? { top: 0 } : { bottom: 0 },
                i = e.includes("center")
                  ? { justifyContent: "center" }
                  : e.includes("right")
                  ? { justifyContent: "flex-end" }
                  : {};
              return {
                left: 0,
                right: 0,
                display: "flex",
                position: "absolute",
                transition: By()
                  ? void 0
                  : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                transform: `translateY(${t * (n ? 1 : -1)}px)`,
                ...r,
                ...i,
              };
            })(
              a,
              s.calculateOffset(n, {
                reverseOrder: e,
                gutter: r,
                defaultPosition: t,
              })
            );
          return A.createElement(
            bb,
            {
              id: n.id,
              key: n.id,
              onHeightUpdate: s.updateHeight,
              className: n.visible ? wb : "",
              style: o,
            },
            "custom" === n.type
              ? $y(n.message, n)
              : i
              ? i(n)
              : A.createElement(yb, { toast: n, position: a })
          );
        })
      );
    },
    Sb = Xy;
  const Eb = Gp(Qg)`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: ${({ layout: e }) => (1 === e ? "140px" : "180px")};

  @media (max-width: 768px) {
    min-height: unset;
  }
`,
    kb = Gp.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 2px;
  position: absolute;
  bottom: 10px;
  right: 35px;
  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  transition: all 0.2s;
`,
    Cb = Vp`
  position: relative;
  cursor: pointer;
`,
    Tb = Gp("div")`
  ${Cb}
  width: 120px;
  height: 180px;
  border-radius: 15px;
  background-image: url(${({ background: e }) => e});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 120px;
    height: 180px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  }

  &:hover ${kb} {
    opacity: 0;
  }
`,
    Pb = Gp.div`
  ${Cb}
  padding: 5px;
  border-radius: 50%;
  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  width: fit-content;
`,
    _b = Gp.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  padding: 2px;
  background-image: url(${({ background: e }) => e});
  background-size: cover;
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out;

  &:hover {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 768px) {
    &:hover {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 400px) {
    width: 120px;
    height: 120px;

    &:hover {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 350px) {
    width: 100px;
    height: 100px;

    &:hover {
      width: 100px;
      height: 100px;
    }
  }
`,
    Ob = Gp.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  opacity: ${({ $swipePosition: e }) => {
    const t = 1 - Math.abs(e / 1e3);
    return t > 0 ? t : 0;
  }};
  transform: translateY(${(e) => e.$swipePosition}px);
  transition: transform 0.1s ease-in-out;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.85);
  }
`,
    Lb = Gp(um)`
  position: relative;
  max-height: 95vh;
  max-width: 100vw;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0;
    height: 100vh;
    max-height: unset;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    display: flex;
    justify-content: center;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    z-index: -1;
  }
`,
    Nb = Gp.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.9);
`,
    Mb = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      margin: "0 auto",
    },
    zb = Vp`
  z-index: 10;
  top: 10px;
  width: 30%;
  cursor: pointer;
  position: absolute;
  height: calc(100% - 10px);
  display: block !important;
`,
    Ib = Gp.div`
  left: 0;
  ${zb}
`,
    jb = Gp.div`
  right: 0;
  ${zb}
`,
    Rb = Gp.div`
  position: relative;
  min-height: 350px;
  width: ${(e) => (e.$isActive ? "425px" : "225px")};

  & img {
    width: 100%;
  }

  & video {
    width: 100%;
    height: 756px;
    max-height: 100vh;
  }
`,
    Ab = Vp`
  border-radius: 12px;
  max-height: 100vh;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`,
    Db = Gp.img`
  z-index: -1;
  height: 100%;
  min-height: 85vh;

  ${Ab}
`,
    $b = Gp.img`
  top: 35%;
  left: 30%;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  border-radius: 50%;
  width: 80px !important;
  height: 80px !important;

  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  transition: all 0.2s;

  &:hover {
    opacity: 0;
  }
`,
    Fb = Gp.img`
  cursor: pointer;
  position: relative;
  height: 350px;
  ${Ab}

  &:hover {
    ${$b} {
      opacity: 0;
    }
`,
    Bb = Gp.video`
  z-index: -1;
  object-fit: fill;
  height: 85vh;
  min-height: 85vh;

  ${Ab}
`,
    Ub = Vp`
  top: 45%;
  z-index: 999999;
  cursor: pointer;
  position: absolute;
`,
    Vb = Gp.div`
  left: -80px;
  ${Ub}

  @media (max-width: 768px) {
    left: 0;
  }
`,
    Hb = Gp.div`
  right: -80px;
  ${Ub}

  @media (max-width: 768px) {
    right: 0;
  }
`,
    Wb = Gp(um)`
  height: ${({ layout: e }) => (1 === e ? "400px" : "250px")};
  margin: 0 10px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  overflow: scroll !important;
  position: relative;

  // Scrollbar styles for different browsers
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
    background-color: transparent;
  }
`,
    Gb = Gp.div`
  position: absolute;
  width: 1px;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 10;
  opacity: 0;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.5);
`,
    qb = Gp.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,
    Yb = Gp.div`
  gap: 5px;
  right: 10px;
  bottom: 10px;
  display: flex;
  z-index: 9999;
  color: #5e92e7;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  align-items: flex-end;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    display: none;
  }
`,
    Qb = Gp.div`
  gap: 25px;
  width: 100%;
  display: flex;
  overflow-x: auto;
  max-width: 900px;
  justify-content: ${({ $hasOverflow: e }) => (e ? "unset" : "space-around")};

  @media (max-width: 768px) {
    display: none;
  }
`,
    Xb = Gp(cm)`
  display: flex;
  margin-left: 5px;
  height: fit-content;
  align-items: center;
  justify-content: center;
`,
    Kb = ({ settings: e }) => {
      const { config: t, updateConfig: n } = (() => {
          const [e, t] = D.useReducer(Vg, { parent: null, modified: null });
          return {
            config: e,
            updateConfig: (e, n) => {
              t({ type: "UPDATE_CONFIG", field: e, value: n });
            },
          };
        })(),
        { storyState: r, updateField: i } = (() => {
          const [e, t] = D.useReducer(Ug, {
            isHovering: !1,
            showOverlay: !1,
            overlaySwipePosition: 0,
            activeStory: null,
            activeStoryIndex: 0,
            interactedWithStory: !1,
            contentType: "image",
            activeSlideAudio: null,
            activeSlideProgress: 0,
            activeSlideLoading: !0,
          });
          return {
            storyState: e,
            updateField: (e, n) => {
              t({ type: "UPDATE_FIELD", field: e, value: n });
            },
          };
        })(),
        [a, o] = A.useState(!1),
        {
          uid: l,
          storeId: s,
          subscription: u,
          isPreview: c,
          style: d,
        } = A.useContext(ey),
        f = A.useRef(null),
        p = A.useRef(null),
        [h, m] = A.useState(null),
        [v, g] = A.useState(0),
        [y, b] = A.useState(),
        [w, x] = A.useState(),
        [S, E] = A.useState([]),
        [k, C] = A.useState(!1),
        [T, P] = A.useState(!1),
        [_, O] = A.useState(null),
        L = Sd({
          onSwipedDown: () => ($(), void i("overlaySwipePosition", 0)),
          onSwiping: (e) =>
            ((e) => {
              r.showOverlay &&
                "Down" === e.dir &&
                (P(!0), i("overlaySwipePosition", e.deltaY));
            })(e),
          onSwiped: () => (i("overlaySwipePosition", 0), void P(!1)),
          delta: 30,
          preventScrollOnSwipe: !0,
        }),
        N = document.getElementById("story-container");
      let M = !1;
      N &&
        N.addEventListener("wheel", (e) => {
          M || (M = !0);
        }),
        A.useEffect(() => {
          const t = new URLSearchParams(window.location.search).get("reelife");
          if (t) {
            const n = ((e) => {
                const t = decodeURIComponent(e);
                return atob(t);
              })(t),
              [r, a] = n.split("&"),
              o = parseInt(r.split("story=")[1]) || 0,
              l = parseInt(a.split("slide=")[1]) || 0;
            if (Bg(o) && Bg(l)) {
              if (e && e.stories) {
                const t = e.stories[o];
                i("activeStory", t),
                  i("activeStoryIndex", o),
                  i("activeSlideProgress", 0),
                  i("showOverlay", !0),
                  g(l);
              }
            } else console.error("Invalid link.");
          }
        }, []),
        A.useEffect(() => {
          const e = f.current;
          r.showOverlay
            ? ((document.body.style.overflow = "hidden"),
              null == e || e.pause())
            : (document.body.style.overflow = "visible");
        }, [r.showOverlay]),
        A.useEffect(() => {
          const e = f.current,
            t = () => {
              document.hidden && (P(!0), null == e || e.pause());
            };
          return (
            document.addEventListener("visibilitychange", t),
            () => {
              document.removeEventListener("visibilitychange", t);
            }
          );
        }, []),
        A.useEffect(() => {
          document.getElementById("paxify-analytics") ||
            ((() => {
              const e = document.createElement("script");
              (e.id = "paxify-analytics"),
                (e.src = Dg),
                (e.async = !0),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(e);
            })(),
            (() => {
              const e = document.createElement("noscript"),
                t = document.createElement("iframe");
              (t.src = $g),
                (t.height = "0"),
                (t.width = "0"),
                (t.style.display = "none"),
                (t.style.visibility = "hidden"),
                e.appendChild(t);
              const n =
                document.body || document.getElementsByTagName("body")[0];
              n.insertBefore(e, n.firstChild);
            })());
        }, []),
        A.useEffect(() => {
          var e, t;
          if (
            null != (t = null == (e = r.activeStory) ? void 0 : e.player) &&
            t[v]
          ) {
            const e = ((e) => ({
              event: Yv.SLIDE_VIEWED,
              payload: { slideId: e.id, ...zg },
            }))(r.activeStory);
            jg(e), c || Rg(e, l, s);
          }
        }, [v]),
        A.useEffect(() => {
          const t = e;
          n("parent", t), m(t);
        }, []),
        A.useEffect(() => {
          if (r.activeStory && r.activeStory.player.length === v + 1) {
            const e = ((e) => ({
              event: Yv.STORY_VIEWED,
              payload: { storyId: e.id, ...zg },
            }))(r.activeStory);
            jg(e), c || Rg(e, l, s);
          }
        }, [v, r.activeStory]),
        A.useEffect(() => {
          h &&
            (async () => {
              const e =
                  null == h
                    ? void 0
                    : h.stories.map((e) =>
                        e.player.map((e) => {
                          var t;
                          return (
                            "image" === e.content.type &&
                            (null == (t = null == e ? void 0 : e.content)
                              ? void 0
                              : t.source)
                          );
                        })
                      ),
                t = null == e ? void 0 : e.flat().filter((e) => e);
              await (async (e, t) => {
                const n = [];
                for (const t of e) {
                  const e = new Image();
                  (e.src = t), n.push(e);
                }
                t(n);
              })(t ?? [], E);
            })();
        }, [h]),
        A.useEffect(() => {
          var e, t, n, a;
          if (r.activeStory && null != (e = r.activeStory) && e.player[v]) {
            const e =
              (null ==
              (a =
                null ==
                (n =
                  null == (t = r.activeStory)
                    ? void 0
                    : t.player[v].enhancements)
                  ? void 0
                  : n.audio)
                ? void 0
                : a.src) || null;
            i("activeSlideAudio", e);
          }
        }, [r.activeStory, v]),
        A.useEffect(() => {
          const e = f.current;
          if ("image" === r.contentType) {
            if (!r.activeSlideAudio && e)
              return e.pause(), void (e.currentTime = 0);
            if (e && !T && !r.activeSlideLoading && "image" === r.contentType) {
              const t = null == e ? void 0 : e.play();
              void 0 !== t &&
                t.catch((e) => {
                  console.error("Autoplay error:", e);
                });
            }
          }
          return () => {
            e && (e.pause(), (e.currentTime = 0));
          };
        }, [r.activeSlideAudio, r.contentType, r.activeSlideLoading]),
        A.useEffect(() => {
          const e = f.current;
          "image" === r.contentType &&
            !r.activeSlideLoading &&
            (T ? null == e || e.pause() : null == e || e.play());
        }, [T, r.contentType, r.activeSlideLoading]),
        A.useEffect(() => {
          P(!1);
        }, [r.activeStoryIndex]),
        A.useEffect(() => {
          P(!!k);
        }, [k]),
        A.useEffect(() => {
          r.activeSlideProgress >= 100 &&
            r.activeStory &&
            t.parent &&
            (g((e) => {
              var n, i;
              return (
                e ===
                  (null == (n = r.activeStory) ? void 0 : n.player.length) -
                    1 &&
                  (r.activeStoryIndex !== t.parent.stories.length - 1
                    ? null == w || w.slideNext()
                    : $()),
                (e + 1) %
                  (null == (i = r.activeStory) ? void 0 : i.player.length)
              );
            }),
            i("activeSlideProgress", 0));
        }, [r.activeSlideProgress]),
        A.useEffect(() => {
          if (!T && r.activeStory && !r.activeSlideLoading) {
            const e =
                (1500 / (r.activeStory.player[v].content.timeout || 4500)) * 2,
              t = setInterval(() => {
                r.activeSlideLoading ||
                  i("activeSlideProgress", r.activeSlideProgress + e);
              }, 25);
            return () => {
              clearInterval(t);
            };
          }
        }, [r.activeStory, r.activeSlideProgress, v, r.activeSlideLoading, T]),
        A.useEffect(() => {
          i("activeSlideProgress", 0);
        }, [r.activeStory, v]),
        A.useEffect(() => {
          if (!r.showOverlay) {
            const e = { ...h };
            if (e.stories) {
              const t = e.stories.filter((e) => e.container.isViewed),
                n = e.stories.filter((e) => !e.container.isViewed);
              (e.stories = [...n, ...t]), m((t) => ({ ...t, ...e }));
            }
          }
        }, [r.showOverlay]);
      const z = () => {
          const e = { event: Yv.REELS_OPENED, payload: { ...zg } };
          jg(e), c || Rg(e, l, s);
        },
        I = (e) => {
          const t = ((e, t) => ({
            event: e,
            payload: { storyId: t.id, ...zg },
          }))(e, r.activeStory);
          i("interactedWithStory", !0), jg(t), c || Rg(t, l, s);
        },
        j = () => {
          const e = { event: Yv.REELS_CLOSED, payload: { ...zg } };
          jg(e), c || Rg(e, l, s);
        },
        R = (e) => {
          var n;
          z();
          const r =
            (null == (n = t.parent)
              ? void 0
              : n.stories.findIndex((t) => t.id === e.id)) || 0;
          i("activeStoryIndex", r),
            i("activeSlideProgress", 0),
            g(0),
            i("activeStory", e),
            P(!1),
            i("showOverlay", !0);
        },
        $ = () => {
          j(), i("showOverlay", !1), i("activeStory", null);
        },
        F = (e, t) => {
          switch (e) {
            case 1:
              return ((e) =>
                q.jsx(Pb, {
                  $isViewed: e.container.isViewed,
                  width: e.container.border.width,
                  color: e.container.border.color,
                  children: q.jsx(_b, {
                    background: e.player[0].content.source,
                    onClick: () => R(e),
                  }),
                }))(t);
            case 2:
              return ((e) => {
                var t, n, r;
                return q.jsx(Tb, {
                  background: e.player[0].content.source,
                  onClick: () => R(e),
                  children: q.jsx(kb, {
                    $isViewed: e.container.isViewed,
                    width: e.container.border.width,
                    color: e.container.border.color,
                    src:
                      null ==
                      (r =
                        null ==
                        (n =
                          null == (t = null == e ? void 0 : e.player)
                            ? void 0
                            : t[0])
                          ? void 0
                          : n.layout)
                        ? void 0
                        : r.author,
                    alt: "story",
                  }),
                });
              })(t);
            default:
              return console.error(`No layout exist for id ${e}`), null;
          }
        },
        B = (e) => {
          e.stopPropagation(),
            g(
              (e) => (
                0 === v &&
                  (0 !== r.activeStoryIndex ? null == w || w.slidePrev() : $()),
                e - 1
              )
            );
        },
        U = (e) => {
          e.stopPropagation(),
            r.activeStory &&
              t.parent &&
              g((e) => {
                var n, i;
                return e ===
                  (null == (n = r.activeStory) ? void 0 : n.player.length) - 1
                  ? (r.activeStoryIndex !== t.parent.stories.length - 1
                      ? w.slideNext()
                      : $(),
                    0)
                  : (e + 1) %
                      (null == (i = r.activeStory) ? void 0 : i.player.length);
              });
        },
        V = (e, t) => {
          e.stopPropagation(),
            i("activeSlideLoading", !0),
            "LEFT" === t ? B(e) : U(e);
        };
      A.useEffect(
        () => () => {
          clearTimeout(_);
        },
        [_]
      ),
        A.useEffect(() => {
          var e;
          const t =
            null == (e = r.activeStory) ? void 0 : e.player[v].content.type;
          i("contentType", t);
        }, [r.activeStory, v]);
      A.useEffect(() => {
        T
          ? (() => {
              const e = p.current;
              e && e.pause();
            })()
          : (() => {
              const e = p.current;
              e && e.play();
            })();
      }, [T]);
      const H = () => {
          var e, t;
          P(!0),
            null == (e = f.current) || e.pause(),
            null == (t = p.current) || t.pause(),
            window.open("https://paxify.io", "_blank");
        },
        W = (e) => {
          e.stopPropagation();
          const t = setTimeout(() => {
            const e = document.getElementById("play-pause");
            e &&
              ((e.style.width = "85px"),
              (e.style.height = "85px"),
              (e.style.opacity = "1"),
              setTimeout(() => {
                (e.style.opacity = "0"),
                  (e.style.width = "1px"),
                  (e.style.height = "1px");
              }, 300)),
              P((e) => !e);
          }, 200);
          O(t);
        },
        G = (e) => {
          e.stopPropagation(), clearTimeout(_);
          const t = document.getElementById("like");
          t &&
            ((t.style.transform = "scale(1.5)"),
            setTimeout(() => {
              t.style.transform = "scale(1)";
            }, 300)),
            o((e) => {
              const t = !e;
              return t && I(Yv.LIKED), t;
            });
        },
        Y = {
          setStoryPause: P,
          toggleStoryLike: G,
          setShareOpen: C,
          handleShare: async () => {
            const e = `https://${window.location.host}/?reelife=${((e) => {
              const t = btoa(e);
              return encodeURIComponent(t);
            })(`story=${r.activeStoryIndex}&slide=${v}`)}`;
            I(Yv.SHARED);
            try {
              await navigator.share({
                url: e,
                title: "Paxify Reels",
                text: "Check out this story on Paxify ReeLife!",
              });
            } catch (t) {
              navigator.clipboard.writeText(e),
                console.error(t),
                Sb.success(
                  "Link copied. You can now share it with your friends!"
                );
            }
          },
          shareOpen: k,
          handleCTAClick: (e, t) => {
            e.stopPropagation();
            const n = ((e) => ({
              event: Yv.CTA_CLICKED,
              payload: { storyId: e.id, ...zg },
            }))(r.activeStory);
            if ((c || Rg(n, l, s), P(!0), "video/mp4" === r.contentType)) {
              const e = p.current;
              e && e.pause();
            }
            window.open(t, "_blank");
          },
          handlePromoClick: H,
          isLiked: a,
          ...t,
        },
        Q = {
          filteredConfig: h,
          isProgressBarFilled: (e) =>
            e === v ? r.activeSlideProgress : e < v ? 100 : 0,
          closeOverlay: $,
          audioRef: f,
          videoRef: p,
          ...t,
        };
      return q.jsxs(Eb, {
        layout: d,
        className: "app-container",
        id: "story-container",
        children: [
          Ng() &&
            q.jsx(Wb, {
              onInit: (e) => {
                b(e);
              },
              style: {
                minWidth: Ng() ? "100vw" : "1200px",
                height: "fit-content",
              },
              layout: d,
              slidesPerView: (() => {
                var e, n, r, i, a, o, l, s, u;
                const c = (function () {
                  if (typeof window < "u") {
                    const { innerWidth: e } = window;
                    return e < 350
                      ? "small"
                      : e >= 351 && e <= 400
                      ? "medium"
                      : "large";
                  }
                  return "medium";
                })();
                return h
                  ? window.innerWidth > 768 && window.innerWidth < 1200
                    ? Math.min(
                        null ==
                          (r =
                            null ==
                            (n = null == (e = t.parent) ? void 0 : e.config)
                              ? void 0
                              : n.container.storiesPerView)
                          ? void 0
                          : r.tablet,
                        null == h ? void 0 : h.stories.length
                      )
                    : window.innerWidth >= 1200
                    ? Math.min(
                        null ==
                          (o =
                            null ==
                            (a = null == (i = t.parent) ? void 0 : i.config)
                              ? void 0
                              : a.container.storiesPerView)
                          ? void 0
                          : o.desktop,
                        null == h ? void 0 : h.stories.length
                      )
                    : Math.min(
                        null ==
                          (u =
                            null ==
                            (s = null == (l = t.parent) ? void 0 : l.config)
                              ? void 0
                              : s.container.storiesPerView)
                          ? void 0
                          : u.mobile[c],
                        null == h ? void 0 : h.stories.length
                      )
                  : 1;
              })(),
              children:
                null == h
                  ? void 0
                  : h.stories.map((e) =>
                      q.jsx(Xb, { children: F(d, e) }, e.id)
                    ),
            }),
          q.jsx(Qb, {
            $hasOverflow: !!h && (null == h ? void 0 : h.stories.length) > 5,
            children:
              null == h
                ? void 0
                : h.stories.map((e) =>
                    q.jsx(Qg, { gap: "25px", children: F(d, e) }, e.id)
                  ),
          }),
          r.showOverlay &&
            q.jsxs(Ob, {
              $swipePosition: r.overlaySwipePosition,
              onClick: $,
              ...L,
              children: [
                q.jsx("audio", {
                  ref: f,
                  src: r.activeSlideAudio,
                  autoPlay: !1,
                }),
                q.jsx(Lb, {
                  centeredSlides: !0,
                  onInit: (e) => {
                    x(e);
                  },
                  initialSlide: r.activeStoryIndex,
                  spaceBetween: Ng() ? 30 : 0,
                  slidesPerView:
                    null != (K = null == (X = t.parent) ? void 0 : X.config) &&
                    K.overlay.slidesPerView &&
                    h
                      ? Ng()
                        ? Math.min(
                            null ==
                              (ee =
                                null ==
                                (Z = null == (J = t.parent) ? void 0 : J.config)
                                  ? void 0
                                  : Z.overlay.slidesPerView)
                              ? void 0
                              : ee.mobile,
                            null == h ? void 0 : h.stories.length
                          )
                        : typeof window < "u" &&
                          window.matchMedia(
                            "(max-width: 1200px) and (min-width: 768px)"
                          ).matches
                        ? h.stories.length <= 3
                          ? 1
                          : Math.min(
                              null ==
                                (re =
                                  null ==
                                  (ne =
                                    null == (te = t.parent)
                                      ? void 0
                                      : te.config)
                                    ? void 0
                                    : ne.overlay.slidesPerView)
                                ? void 0
                                : re.tablet,
                              h.stories.length
                            )
                        : h.stories.length <= 3
                        ? 1
                        : Math.min(
                            null ==
                              (oe =
                                null ==
                                (ae =
                                  null == (ie = t.parent) ? void 0 : ie.config)
                                  ? void 0
                                  : ae.overlay.slidesPerView)
                              ? void 0
                              : oe.desktop,
                            h.stories.length
                          )
                      : 1,
                  onSlideChange: (e) => {
                    var n;
                    i(
                      "activeStory",
                      null == (n = t.parent) ? void 0 : n.stories[e.activeIndex]
                    ),
                      i("activeStoryIndex", e.activeIndex),
                      g(0);
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  children:
                    null == h
                      ? void 0
                      : h.stories.map((e, t) => {
                          var a, o, l, s, u, c, d, f, m, g;
                          const y = t === r.activeStoryIndex,
                            b =
                              null == (a = r.activeStory)
                                ? void 0
                                : a.player[v],
                            x = r.activeSlideLoading && y,
                            S =
                              (null ==
                              (l =
                                null == (o = null == h ? void 0 : h.config)
                                  ? void 0
                                  : o.navigation)
                                ? void 0
                                : l.show) ?? !1;
                          return q.jsx(
                            cm,
                            {
                              children: q.jsxs(
                                Rb,
                                {
                                  $isActive: y,
                                  children: [
                                    x &&
                                      q.jsx(Nb, {
                                        onClick: (e) => e.stopPropagation(),
                                        children: q.jsx(sd, {
                                          loading: !0,
                                          color: "#a1f1f1",
                                          cssOverride: Mb,
                                          size: 150,
                                          "aria-label": "Loading Spinner",
                                        }),
                                      }),
                                    y &&
                                      !x &&
                                      q.jsx(Sy, {
                                        activeStory: r.activeStory,
                                        ...Q,
                                      }),
                                    y &&
                                      q.jsxs(qb, {
                                        onMouseEnter: () => n("isHovering", !0),
                                        onMouseLeave: () => n("isHovering", !1),
                                        onClick: (e) => W(e),
                                        onDoubleClick: (e) => G(e),
                                        children: [
                                          q.jsx(Ib, {
                                            onClick: (e) => V(e, "LEFT"),
                                          }),
                                          q.jsx(jb, {
                                            onClick: (e) => V(e, "RIGHT"),
                                          }),
                                          q.jsx(Gb, {
                                            id: "play-pause",
                                            children: T
                                              ? q.jsx(Wg, {})
                                              : q.jsx(Hg, {}),
                                          }),
                                          "image" ===
                                            (null == b
                                              ? void 0
                                              : b.content.type) &&
                                            q.jsx(Db, {
                                              id: "story-image",
                                              onClick: (e) => W(e),
                                              onLoad: () =>
                                                i("activeSlideLoading", !1),
                                              src:
                                                null == b
                                                  ? void 0
                                                  : b.content.source,
                                            }),
                                          "video/mp4" ===
                                            (null == b
                                              ? void 0
                                              : b.content.type) &&
                                            q.jsx(Bb, {
                                              playsInline: !0,
                                              ref: p,
                                              onLoadedData: () => {
                                                P(!1),
                                                  i("activeSlideLoading", !1);
                                              },
                                              autoPlay: !T,
                                              children: q.jsx("source", {
                                                src: b.content.source,
                                                type: "video/mp4",
                                              }),
                                            }),
                                          S &&
                                            q.jsxs(q.Fragment, {
                                              children: [
                                                0 !== r.activeStoryIndex &&
                                                  q.jsx(Vb, {
                                                    onClick: (e) => B(e),
                                                    children: q.jsx(Gg, {
                                                      color:
                                                        (null ==
                                                        (u =
                                                          null ==
                                                          (s =
                                                            null == h
                                                              ? void 0
                                                              : h.config)
                                                            ? void 0
                                                            : s.navigation)
                                                          ? void 0
                                                          : u.color) ?? "white",
                                                    }),
                                                  }),
                                                r.activeStoryIndex !==
                                                  h.stories.length - 1 &&
                                                  q.jsx(Hb, {
                                                    onClick: (e) => U(e),
                                                    children: q.jsx(qg, {
                                                      color:
                                                        (null ==
                                                        (d =
                                                          null ==
                                                          (c =
                                                            null == h
                                                              ? void 0
                                                              : h.config)
                                                            ? void 0
                                                            : c.navigation)
                                                          ? void 0
                                                          : d.color) ?? "white",
                                                    }),
                                                  }),
                                              ],
                                            }),
                                          q.jsx(fy, {
                                            story: b,
                                            activeStory: r,
                                            ...Y,
                                          }),
                                        ],
                                      }),
                                    !y &&
                                      q.jsxs(q.Fragment, {
                                        children: [
                                          q.jsx(Fb, {
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                null == w || w.slideTo(t);
                                            },
                                            src: e.player[0].content.source,
                                          }),
                                          q.jsx($b, {
                                            onClick: (e) => {
                                              e.stopPropagation(),
                                                null == w || w.slideTo(t);
                                            },
                                            $isViewed: e.container.isViewed,
                                            width: e.container.border.width,
                                            color: e.container.border.color,
                                            src:
                                              null ==
                                              (g =
                                                null ==
                                                (m =
                                                  null ==
                                                  (f =
                                                    null == e
                                                      ? void 0
                                                      : e.player)
                                                    ? void 0
                                                    : f[0])
                                                  ? void 0
                                                  : m.layout)
                                                ? void 0
                                                : g.author,
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                e.id
                              ),
                            },
                            e.id
                          );
                        }),
                }),
                "Basic" === (null == u ? void 0 : u.plan) &&
                  q.jsxs(Yb, {
                    onClick: H,
                    children: [
                      q.jsx("img", { width: 150, src: Fg }),
                      " By Paxify",
                    ],
                  }),
                q.jsx(xb, {
                  toastOptions: {
                    className: "",
                    style: {
                      padding: "16px",
                      color: "#713200",
                      fontFamily: "Poppins sans-serif",
                    },
                  },
                }),
              ],
            }),
        ],
      });
      var X, K, J, Z, ee, te, ne, re, ie, ae, oe;
    },
    Jb = ({ settings: e = {} }) => {
      const { uid: t, storeId: n, isPreview: r } = A.useContext(ey);
      if (!r) {
        const e = { event: Yv.INITIALIZED, payload: { ...zg } };
        jg(e), Rg(e, t, n);
      }
      return q.jsx(Kb, { settings: e });
    },
    Zb = [],
    ew = {
      accessKey: "E7jh1uy2srdmxQ7o5ZbzovwUFeA2",
      config: [
        {
          id: "reels-demo-circle",
          config: {
            layout: 2,
            navigation: { show: !0, color: "white" },
            container: {
              storiesPerView: {
                mobile: { small: 2.5, medium: 2.5, large: 2.5 },
                tablet: 3,
                desktop: 3.7,
              },
            },
            overlay: { slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } },
            close: { show: !0, color: "white" },
          },
          stories: [...Zb],
        },
        {
          id: "reels-demo-rectangle",
          config: {
            layout: 1,
            navigation: { show: !0, color: "white" },
            container: {
              storiesPerView: {
                mobile: { small: 1.5, medium: 1.6, large: 1.7 },
                tablet: 3,
                desktop: 4,
              },
            },
            overlay: { slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } },
            close: { show: !0, color: "white" },
          },
          stories: [...Zb],
        },
      ],
    },
    tw = Gp.div`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: sans-serif;
`,
    nw = Gp.div`
  background-color: yellow;
  color: black;
  padding: 10px;
  border-radius: 5px;
  font-family: sans-serif;
`;
  class rw extends A.Component {
    constructor(e) {
      super(e), (this.state = { dataFetched: !1 });
    }
    render() {
      const {
        uid: e,
        storeId: t,
        elementId: n,
        isPreviewMode: r = !1,
        style: i = 1,
      } = this.props;
      return (
        (async function (e, t) {
          return Gv.get(`${qv}/firebase/limit/${e}/${t}`).then((e) => e);
        })(e, t)
          .then((a) =>
            200 !== a.status
              ? Y.createRoot(document.getElementById(n)).render(
                  q.jsx(tw, {
                    children:
                      "Unable to contact Paxify servers. Please try again later.",
                  })
                )
              : a.data.data
              ? void (async function (e, t) {
                  return Gv.get(`${qv}/firebase/analytics/${e}/${t}`).then(
                    (e) => e
                  );
                })(e, t)
                  .then(async (a) => {
                    var o, l;
                    const s = await (async function (e, t) {
                        return Gv.get(`${qv}/auth/store/${e}/${t}`).then(
                          (e) => e
                        );
                      })(e, t),
                      u = await (async function (e) {
                        return Gv.get(`${qv}/auth/plan/${e}`).then((e) => e);
                      })(e),
                      c = (
                        null == (o = null == a ? void 0 : a.data)
                          ? void 0
                          : o.data
                      ).filter((e) => null !== e);
                    if (
                      ((ew.config[0].stories = c),
                      0 === ew.config[0].stories.length)
                    )
                      return Y.createRoot(document.getElementById(n)).render(
                        q.jsx(nw, {
                          children:
                            'No stories found. Please add stories to your store to use Reelife by Paxify. If you have already added them, please double check to see if they are set to "Active".',
                        })
                      );
                    if (200 !== u.status)
                      return Y.createRoot(document.getElementById(n)).render(
                        q.jsx(tw, {
                          children:
                            "Unable to contact Paxify servers. Please try again later.",
                        })
                      );
                    const d =
                      null == (l = null == u ? void 0 : u.data)
                        ? void 0
                        : l.plan;
                    return d.isActive
                      ? ("Basic" === d.plan &&
                          ew.config[0].stories.length > 5 &&
                          (console.log(
                            "You are on Basic plan. Stories will be limited to a maximum of 5."
                          ),
                          (ew.config[0].stories = ew.config[0].stories.slice(
                            0,
                            5
                          ))),
                        200 !== s.status
                          ? Y.createRoot(document.getElementById(n)).render(
                              q.jsx(tw, {
                                children:
                                  "Unable to contact Paxify servers. Please try again later.",
                              })
                            )
                          : s.data.message
                          ? (r &&
                              console.log(
                                "Preview mode is active, analytics will not be tracked for this session."
                              ),
                            n
                              ? Y.createRoot(document.getElementById(n)).render(
                                  q.jsx(D.StrictMode, {
                                    children: q.jsx(ey.Provider, {
                                      value: {
                                        uid: e,
                                        style: i,
                                        storeId: t,
                                        subscription: d,
                                        isPreview: r,
                                      },
                                      children: q.jsx(Jb, {
                                        settings: ew.config[0],
                                      }),
                                    }),
                                  })
                                )
                              : void console.error(
                                  "Please provide an element ID."
                                ))
                          : Y.createRoot(document.getElementById(n)).render(
                              q.jsx(tw, {
                                children:
                                  "Store is not verified. Please verify your store to use this app.",
                              })
                            ))
                      : Y.createRoot(document.getElementById(n)).render(
                          q.jsx(tw, {
                            children:
                              "Your subscription has expired. Please renew your subscription to use Reelife by Paxify.",
                          })
                        );
                  })
                  .catch(
                    (e) => (
                      console.error("Error while verifying:", e),
                      Y.createRoot(document.getElementById(n)).render(
                        q.jsx(nw, {
                          children:
                            "Verification in progress. Stories will be available shortly.",
                        })
                      )
                    )
                  )
              : Y.createRoot(document.getElementById(n)).render(
                  q.jsx(tw, {
                    children:
                      "You have reached the limit of your current plan. Please upgrade to continue using Reelife by Paxify.",
                  })
                )
          )
          .catch((e) =>
            Y.createRoot(document.getElementById(n)).render(
              q.jsx(tw, { children: e.message })
            )
          ),
        null
      );
    }
  }
  return rw;
});
//# sourceMappingURL=/sm/ce9a83e4a077080f2741905b77cf2feca409507cd730117bba406e8361165cc2.map

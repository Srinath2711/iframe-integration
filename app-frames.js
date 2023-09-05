import * as me from "react";
import Ke, { useRef as Wr, useState as st, useMemo as Yt } from "react";
import ur, { flushSync as Zr } from "react-dom";
function Gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Vr(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function t() {
      if (this instanceof t) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(r, o);
        return new a();
      }
      return r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var o = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(n, t, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), n;
}
var dt = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Br() {
  if (Pt)
    return Pe;
  Pt = 1;
  var e = Ke, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, f, I) {
    var d, j = {}, v = null, S = null;
    I !== void 0 && (v = "" + I), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (d in f)
      t.call(f, d) && !a.hasOwnProperty(d) && (j[d] = f[d]);
    if (s && s.defaultProps)
      for (d in f = s.defaultProps, f)
        j[d] === void 0 && (j[d] = f[d]);
    return { $$typeof: r, type: s, key: v, ref: S, props: j, _owner: o.current };
  }
  return Pe.Fragment = n, Pe.jsx = l, Pe.jsxs = l, Pe;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Fr() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ke, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), m = Symbol.iterator, E = "@@iterator";
    function U(i) {
      if (i === null || typeof i != "object")
        return null;
      var y = m && i[m] || i[E];
      return typeof y == "function" ? y : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(i) {
      {
        for (var y = arguments.length, A = new Array(y > 1 ? y - 1 : 0), C = 1; C < y; C++)
          A[C - 1] = arguments[C];
        L("error", i, A);
      }
    }
    function L(i, y, A) {
      {
        var C = k.ReactDebugCurrentFrame, _ = C.getStackAddendum();
        _ !== "" && (y += "%s", A = A.concat([_]));
        var V = A.map(function(Y) {
          return String(Y);
        });
        V.unshift("Warning: " + y), Function.prototype.apply.call(console[i], console, V);
      }
    }
    var b = !1, T = !1, Z = !1, oe = !1, ue = !1, se;
    se = Symbol.for("react.module.reference");
    function Ae(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === t || i === a || ue || i === o || i === I || i === d || oe || i === S || b || T || Z || typeof i == "object" && i !== null && (i.$$typeof === v || i.$$typeof === j || i.$$typeof === l || i.$$typeof === s || i.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === se || i.getModuleId !== void 0));
    }
    function Me(i, y, A) {
      var C = i.displayName;
      if (C)
        return C;
      var _ = y.displayName || y.name || "";
      return _ !== "" ? A + "(" + _ + ")" : A;
    }
    function fe(i) {
      return i.displayName || "Context";
    }
    function q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case I:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case s:
            var y = i;
            return fe(y) + ".Consumer";
          case l:
            var A = i;
            return fe(A._context) + ".Provider";
          case f:
            return Me(i, i.render, "ForwardRef");
          case j:
            var C = i.displayName || null;
            return C !== null ? C : q(i.type) || "Memo";
          case v: {
            var _ = i, V = _._payload, Y = _._init;
            try {
              return q(Y(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Ne = 0, ne, K, ze, Ie, D, z, u;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function c() {
      {
        if (Ne === 0) {
          ne = console.log, K = console.info, ze = console.warn, Ie = console.error, D = console.group, z = console.groupCollapsed, u = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        Ne++;
      }
    }
    function N() {
      {
        if (Ne--, Ne === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, i, {
              value: ne
            }),
            info: B({}, i, {
              value: K
            }),
            warn: B({}, i, {
              value: ze
            }),
            error: B({}, i, {
              value: Ie
            }),
            group: B({}, i, {
              value: D
            }),
            groupCollapsed: B({}, i, {
              value: z
            }),
            groupEnd: B({}, i, {
              value: u
            })
          });
        }
        Ne < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var g = k.ReactCurrentDispatcher, p;
    function x(i, y, A) {
      {
        if (p === void 0)
          try {
            throw Error();
          } catch (_) {
            var C = _.stack.trim().match(/\n( *(at )?)/);
            p = C && C[1] || "";
          }
        return `
` + p + i;
      }
    }
    var w = !1, O;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      O = new F();
    }
    function h(i, y) {
      if (!i || w)
        return "";
      {
        var A = O.get(i);
        if (A !== void 0)
          return A;
      }
      var C;
      w = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = g.current, g.current = null, c();
      try {
        if (y) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Oe) {
              C = Oe;
            }
            Reflect.construct(i, [], Y);
          } else {
            try {
              Y.call();
            } catch (Oe) {
              C = Oe;
            }
            i.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            C = Oe;
          }
          i();
        }
      } catch (Oe) {
        if (Oe && C && typeof Oe.stack == "string") {
          for (var Q = Oe.stack.split(`
`), ie = C.stack.split(`
`), X = Q.length - 1, $ = ie.length - 1; X >= 1 && $ >= 0 && Q[X] !== ie[$]; )
            $--;
          for (; X >= 1 && $ >= 0; X--, $--)
            if (Q[X] !== ie[$]) {
              if (X !== 1 || $ !== 1)
                do
                  if (X--, $--, $ < 0 || Q[X] !== ie[$]) {
                    var De = `
` + Q[X].replace(" at new ", " at ");
                    return i.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", i.displayName)), typeof i == "function" && O.set(i, De), De;
                  }
                while (X >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        w = !1, g.current = V, N(), Error.prepareStackTrace = _;
      }
      var be = i ? i.displayName || i.name : "", Qt = be ? x(be) : "";
      return typeof i == "function" && O.set(i, Qt), Qt;
    }
    function ee(i, y, A) {
      return h(i, !1);
    }
    function ae(i) {
      var y = i.prototype;
      return !!(y && y.isReactComponent);
    }
    function je(i, y, A) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return h(i, ae(i));
      if (typeof i == "string")
        return x(i);
      switch (i) {
        case I:
          return x("Suspense");
        case d:
          return x("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            return ee(i.render);
          case j:
            return je(i.type, y, A);
          case v: {
            var C = i, _ = C._payload, V = C._init;
            try {
              return je(V(_), y, A);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, we = {}, We = k.ReactDebugCurrentFrame;
    function Se(i) {
      if (i) {
        var y = i._owner, A = je(i.type, i._source, y ? y.type : null);
        We.setExtraStackFrame(A);
      } else
        We.setExtraStackFrame(null);
    }
    function Ze(i, y, A, C, _) {
      {
        var V = Function.call.bind(xe);
        for (var Y in i)
          if (V(i, Y)) {
            var Q = void 0;
            try {
              if (typeof i[Y] != "function") {
                var ie = Error((C || "React class") + ": " + A + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              Q = i[Y](y, Y, C, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              Q = X;
            }
            Q && !(Q instanceof Error) && (Se(_), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", A, Y, typeof Q), Se(null)), Q instanceof Error && !(Q.message in we) && (we[Q.message] = !0, Se(_), P("Failed %s type: %s", A, Q.message), Se(null));
          }
      }
    }
    var Ge = Array.isArray;
    function Qe(i) {
      return Ge(i);
    }
    function zr(i) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, A = y && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return A;
      }
    }
    function xr(i) {
      try {
        return Et(i), !1;
      } catch {
        return !0;
      }
    }
    function Et(i) {
      return "" + i;
    }
    function vt(i) {
      if (xr(i))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zr(i)), Et(i);
    }
    var Ye = k.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, St, it;
    it = {};
    function Er(i) {
      if (xe.call(i, "ref")) {
        var y = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function vr(i) {
      if (xe.call(i, "key")) {
        var y = Object.getOwnPropertyDescriptor(i, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function wr(i, y) {
      if (typeof i.ref == "string" && Ye.current && y && Ye.current.stateNode !== y) {
        var A = q(Ye.current.type);
        it[A] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Ye.current.type), i.ref), it[A] = !0);
      }
    }
    function Sr(i, y) {
      {
        var A = function() {
          wt || (wt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        A.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function mr(i, y) {
      {
        var A = function() {
          St || (St = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        A.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Lr = function(i, y, A, C, _, V, Y) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: y,
        ref: A,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function Cr(i, y, A, C, _) {
      {
        var V, Y = {}, Q = null, ie = null;
        A !== void 0 && (vt(A), Q = "" + A), vr(y) && (vt(y.key), Q = "" + y.key), Er(y) && (ie = y.ref, wr(y, _));
        for (V in y)
          xe.call(y, V) && !Or.hasOwnProperty(V) && (Y[V] = y[V]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for (V in X)
            Y[V] === void 0 && (Y[V] = X[V]);
        }
        if (Q || ie) {
          var $ = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          Q && Sr(Y, $), ie && mr(Y, $);
        }
        return Lr(i, Q, ie, _, C, Ye.current, Y);
      }
    }
    var ot = k.ReactCurrentOwner, mt = k.ReactDebugCurrentFrame;
    function Ce(i) {
      if (i) {
        var y = i._owner, A = je(i.type, i._source, y ? y.type : null);
        mt.setExtraStackFrame(A);
      } else
        mt.setExtraStackFrame(null);
    }
    var at;
    at = !1;
    function ut(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function Lt() {
      {
        if (ot.current) {
          var i = q(ot.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function br(i) {
      {
        if (i !== void 0) {
          var y = i.fileName.replace(/^.*[\\\/]/, ""), A = i.lineNumber;
          return `

Check your code at ` + y + ":" + A + ".";
        }
        return "";
      }
    }
    var Ct = {};
    function kr(i) {
      {
        var y = Lt();
        if (!y) {
          var A = typeof i == "string" ? i : i.displayName || i.name;
          A && (y = `

Check the top-level render call using <` + A + ">.");
        }
        return y;
      }
    }
    function bt(i, y) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var A = kr(y);
        if (Ct[A])
          return;
        Ct[A] = !0;
        var C = "";
        i && i._owner && i._owner !== ot.current && (C = " It was passed a child from " + q(i._owner.type) + "."), Ce(i), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, C), Ce(null);
      }
    }
    function kt(i, y) {
      {
        if (typeof i != "object")
          return;
        if (Qe(i))
          for (var A = 0; A < i.length; A++) {
            var C = i[A];
            ut(C) && bt(C, y);
          }
        else if (ut(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var _ = U(i);
          if (typeof _ == "function" && _ !== i.entries)
            for (var V = _.call(i), Y; !(Y = V.next()).done; )
              ut(Y.value) && bt(Y.value, y);
        }
      }
    }
    function Ur(i) {
      {
        var y = i.type;
        if (y == null || typeof y == "string")
          return;
        var A;
        if (typeof y == "function")
          A = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === j))
          A = y.propTypes;
        else
          return;
        if (A) {
          var C = q(y);
          Ze(A, i.props, "prop", C, i);
        } else if (y.PropTypes !== void 0 && !at) {
          at = !0;
          var _ = q(y);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qr(i) {
      {
        for (var y = Object.keys(i.props), A = 0; A < y.length; A++) {
          var C = y[A];
          if (C !== "children" && C !== "key") {
            Ce(i), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Ce(null);
            break;
          }
        }
        i.ref !== null && (Ce(i), P("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Ut(i, y, A, C, _, V) {
      {
        var Y = Ae(i);
        if (!Y) {
          var Q = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = br(_);
          ie ? Q += ie : Q += Lt();
          var X;
          i === null ? X = "null" : Qe(i) ? X = "array" : i !== void 0 && i.$$typeof === r ? (X = "<" + (q(i.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, Q);
        }
        var $ = Cr(i, y, A, _, V);
        if ($ == null)
          return $;
        if (Y) {
          var De = y.children;
          if (De !== void 0)
            if (C)
              if (Qe(De)) {
                for (var be = 0; be < De.length; be++)
                  kt(De[be], i);
                Object.freeze && Object.freeze(De);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(De, i);
        }
        return i === t ? Qr($) : Ur($), $;
      }
    }
    function Yr(i, y, A) {
      return Ut(i, y, A, !0);
    }
    function Pr(i, y, A) {
      return Ut(i, y, A, !1);
    }
    var _r = Pr, Rr = Yr;
    _e.Fragment = t, _e.jsx = _r, _e.jsxs = Rr;
  }()), _e;
}
process.env.NODE_ENV === "production" ? dt.exports = Br() : dt.exports = Fr();
var G = dt.exports, Hr = globalThis && globalThis.__extends || function() {
  var e = function(r, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, o) {
      t.__proto__ = o;
    } || function(t, o) {
      for (var a in o)
        Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }, e(r, n);
  };
  return function(r, n) {
    e(r, n);
    function t() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  };
}(), J = globalThis && globalThis.__assign || function() {
  return J = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, J.apply(this, arguments);
}, Rt = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
}, Wt = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
}, Ve = {
  width: "20px",
  height: "20px",
  position: "absolute"
}, Xr = {
  top: J(J({}, Rt), { top: "-5px" }),
  right: J(J({}, Wt), { left: void 0, right: "-5px" }),
  bottom: J(J({}, Rt), { top: void 0, bottom: "-5px" }),
  left: J(J({}, Wt), { left: "-5px" }),
  topRight: J(J({}, Ve), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: J(J({}, Ve), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: J(J({}, Ve), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: J(J({}, Ve), { left: "-10px", top: "-10px", cursor: "nw-resize" })
}, $r = (
  /** @class */
  function(e) {
    Hr(r, e);
    function r() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.onMouseDown = function(t) {
        n.props.onResizeStart(t, n.props.direction);
      }, n.onTouchStart = function(t) {
        n.props.onResizeStart(t, n.props.direction);
      }, n;
    }
    return r.prototype.render = function() {
      return me.createElement("div", { className: this.props.className || "", style: J(J({ position: "absolute", userSelect: "none" }, Xr[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, r;
  }(me.PureComponent)
), Jr = globalThis && globalThis.__extends || function() {
  var e = function(r, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, o) {
      t.__proto__ = o;
    } || function(t, o) {
      for (var a in o)
        Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }, e(r, n);
  };
  return function(r, n) {
    e(r, n);
    function t() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  };
}(), pe = globalThis && globalThis.__assign || function() {
  return pe = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, pe.apply(this, arguments);
}, qr = {
  width: "auto",
  height: "auto"
}, Be = function(e, r, n) {
  return Math.max(Math.min(e, n), r);
}, Zt = function(e, r) {
  return Math.round(e / r) * r;
}, ke = function(e, r) {
  return new RegExp(e, "i").test(r);
}, Fe = function(e) {
  return !!(e.touches && e.touches.length);
}, Kr = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, Gt = function(e, r, n) {
  n === void 0 && (n = 0);
  var t = r.reduce(function(a, l, s) {
    return Math.abs(l - e) < Math.abs(r[a] - e) ? s : a;
  }, 0), o = Math.abs(r[t] - e);
  return n === 0 || o < n ? r[t] : e;
}, Mt = function(e) {
  return e = e.toString(), e === "auto" || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : e + "px";
}, He = function(e, r, n, t) {
  if (e && typeof e == "string") {
    if (e.endsWith("px"))
      return Number(e.replace("px", ""));
    if (e.endsWith("%")) {
      var o = Number(e.replace("%", "")) / 100;
      return r * o;
    }
    if (e.endsWith("vw")) {
      var o = Number(e.replace("vw", "")) / 100;
      return n * o;
    }
    if (e.endsWith("vh")) {
      var o = Number(e.replace("vh", "")) / 100;
      return t * o;
    }
  }
  return e;
}, en = function(e, r, n, t, o, a, l) {
  return t = He(t, e.width, r, n), o = He(o, e.height, r, n), a = He(a, e.width, r, n), l = He(l, e.height, r, n), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof o > "u" ? void 0 : Number(o),
    minWidth: typeof a > "u" ? void 0 : Number(a),
    minHeight: typeof l > "u" ? void 0 : Number(l)
  };
}, tn = [
  "as",
  "style",
  "className",
  "grid",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], Vt = "__resizable_base__", rn = (
  /** @class */
  function(e) {
    Jr(r, e);
    function r(n) {
      var t = e.call(this, n) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var o = t.parentNode;
        if (!o)
          return null;
        var a = t.window.document.createElement("div");
        return a.style.width = "100%", a.style.height = "100%", a.style.position = "absolute", a.style.transform = "scale(0, 0)", a.style.left = "0", a.style.flex = "0 0 100%", a.classList ? a.classList.add(Vt) : a.className += Vt, o.appendChild(a), a;
      }, t.removeBase = function(o) {
        var a = t.parentNode;
        a && a.removeChild(o);
      }, t.ref = function(o) {
        o && (t.resizable = o);
      }, t.state = {
        isResizing: !1,
        width: typeof (t.propsSize && t.propsSize.width) > "u" ? "auto" : t.propsSize && t.propsSize.width,
        height: typeof (t.propsSize && t.propsSize.height) > "u" ? "auto" : t.propsSize && t.propsSize.height,
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, t.onResizeStart = t.onResizeStart.bind(t), t.onMouseMove = t.onMouseMove.bind(t), t.onMouseUp = t.onMouseUp.bind(t), t;
    }
    return Object.defineProperty(r.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || qr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "size", {
      get: function() {
        var n = 0, t = 0;
        if (this.resizable && this.window) {
          var o = this.resizable.offsetWidth, a = this.resizable.offsetHeight, l = this.resizable.style.position;
          l !== "relative" && (this.resizable.style.position = "relative"), n = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : o, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : a, this.resizable.style.position = l;
        }
        return { width: n, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "sizeStyle", {
      get: function() {
        var n = this, t = this.props.size, o = function(s) {
          if (typeof n.state[s] > "u" || n.state[s] === "auto")
            return "auto";
          if (n.propsSize && n.propsSize[s] && n.propsSize[s].toString().endsWith("%")) {
            if (n.state[s].toString().endsWith("%"))
              return n.state[s].toString();
            var f = n.getParentSize(), I = Number(n.state[s].toString().replace("px", "")), d = I / f[s] * 100;
            return d + "%";
          }
          return Mt(n.state[s]);
        }, a = t && typeof t.width < "u" && !this.state.isResizing ? Mt(t.width) : o("width"), l = t && typeof t.height < "u" && !this.state.isResizing ? Mt(t.height) : o("height");
        return { width: a, height: l };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var n = this.appendBase();
      if (!n)
        return { width: 0, height: 0 };
      var t = !1, o = this.parentNode.style.flexWrap;
      o !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), n.style.position = "relative", n.style.minWidth = "100%", n.style.minHeight = "100%";
      var a = {
        width: n.offsetWidth,
        height: n.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = o), this.removeBase(n), a;
    }, r.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, r.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, r.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var n = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: n.flexBasis !== "auto" ? n.flexBasis : void 0
        });
      }
    }, r.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, r.prototype.createSizeForCssProperty = function(n, t) {
      var o = this.propsSize && this.propsSize[t];
      return this.state[t] === "auto" && this.state.original[t] === n && (typeof o > "u" || o === "auto") ? "auto" : n;
    }, r.prototype.calculateNewMaxFromBoundary = function(n, t) {
      var o = this.props.boundsByDirection, a = this.state.direction, l = o && ke("left", a), s = o && ke("top", a), f, I;
      if (this.props.bounds === "parent") {
        var d = this.parentNode;
        d && (f = l ? this.resizableRight - this.parentLeft : d.offsetWidth + (this.parentLeft - this.resizableLeft), I = s ? this.resizableBottom - this.parentTop : d.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (f = l ? this.resizableRight : this.window.innerWidth - this.resizableLeft, I = s ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (f = l ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), I = s ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return f && Number.isFinite(f) && (n = n && n < f ? n : f), I && Number.isFinite(I) && (t = t && t < I ? t : I), { maxWidth: n, maxHeight: t };
    }, r.prototype.calculateNewSizeFromDirection = function(n, t) {
      var o = this.props.scale || 1, a = this.props.resizeRatio || 1, l = this.state, s = l.direction, f = l.original, I = this.props, d = I.lockAspectRatio, j = I.lockAspectRatioExtraHeight, v = I.lockAspectRatioExtraWidth, S = f.width, m = f.height, E = j || 0, U = v || 0;
      return ke("right", s) && (S = f.width + (n - f.x) * a / o, d && (m = (S - U) / this.ratio + E)), ke("left", s) && (S = f.width - (n - f.x) * a / o, d && (m = (S - U) / this.ratio + E)), ke("bottom", s) && (m = f.height + (t - f.y) * a / o, d && (S = (m - E) * this.ratio + U)), ke("top", s) && (m = f.height - (t - f.y) * a / o, d && (S = (m - E) * this.ratio + U)), { newWidth: S, newHeight: m };
    }, r.prototype.calculateNewSizeFromAspectRatio = function(n, t, o, a) {
      var l = this.props, s = l.lockAspectRatio, f = l.lockAspectRatioExtraHeight, I = l.lockAspectRatioExtraWidth, d = typeof a.width > "u" ? 10 : a.width, j = typeof o.width > "u" || o.width < 0 ? n : o.width, v = typeof a.height > "u" ? 10 : a.height, S = typeof o.height > "u" || o.height < 0 ? t : o.height, m = f || 0, E = I || 0;
      if (s) {
        var U = (v - m) * this.ratio + E, k = (S - m) * this.ratio + E, P = (d - E) / this.ratio + m, L = (j - E) / this.ratio + m, b = Math.max(d, U), T = Math.min(j, k), Z = Math.max(v, P), oe = Math.min(S, L);
        n = Be(n, b, T), t = Be(t, Z, oe);
      } else
        n = Be(n, d, j), t = Be(t, v, S);
      return { newWidth: n, newHeight: t };
    }, r.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var n = this.parentNode;
        if (n) {
          var t = n.getBoundingClientRect();
          this.parentLeft = t.left, this.parentTop = t.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var o = this.props.bounds.getBoundingClientRect();
        this.targetLeft = o.left, this.targetTop = o.top;
      }
      if (this.resizable) {
        var a = this.resizable.getBoundingClientRect(), l = a.left, s = a.top, f = a.right, I = a.bottom;
        this.resizableLeft = l, this.resizableRight = f, this.resizableTop = s, this.resizableBottom = I;
      }
    }, r.prototype.onResizeStart = function(n, t) {
      if (!(!this.resizable || !this.window)) {
        var o = 0, a = 0;
        if (n.nativeEvent && Kr(n.nativeEvent) ? (o = n.nativeEvent.clientX, a = n.nativeEvent.clientY) : n.nativeEvent && Fe(n.nativeEvent) && (o = n.nativeEvent.touches[0].clientX, a = n.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var l = this.props.onResizeStart(n, t, this.resizable);
          if (l === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var s, f = this.window.getComputedStyle(this.resizable);
        if (f.flexBasis !== "auto") {
          var I = this.parentNode;
          if (I) {
            var d = this.window.getComputedStyle(I).flexDirection;
            this.flexDir = d.startsWith("row") ? "row" : "column", s = f.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var j = {
          original: {
            x: o,
            y: a,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: pe(pe({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(n.target).cursor || "auto" }),
          direction: t,
          flexBasis: s
        };
        this.setState(j);
      }
    }, r.prototype.onMouseMove = function(n) {
      var t = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && Fe(n))
          try {
            n.preventDefault(), n.stopPropagation();
          } catch {
          }
        var o = this.props, a = o.maxWidth, l = o.maxHeight, s = o.minWidth, f = o.minHeight, I = Fe(n) ? n.touches[0].clientX : n.clientX, d = Fe(n) ? n.touches[0].clientY : n.clientY, j = this.state, v = j.direction, S = j.original, m = j.width, E = j.height, U = this.getParentSize(), k = en(U, this.window.innerWidth, this.window.innerHeight, a, l, s, f);
        a = k.maxWidth, l = k.maxHeight, s = k.minWidth, f = k.minHeight;
        var P = this.calculateNewSizeFromDirection(I, d), L = P.newHeight, b = P.newWidth, T = this.calculateNewMaxFromBoundary(a, l);
        this.props.snap && this.props.snap.x && (b = Gt(b, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (L = Gt(L, this.props.snap.y, this.props.snapGap));
        var Z = this.calculateNewSizeFromAspectRatio(b, L, { width: T.maxWidth, height: T.maxHeight }, { width: s, height: f });
        if (b = Z.newWidth, L = Z.newHeight, this.props.grid) {
          var oe = Zt(b, this.props.grid[0]), ue = Zt(L, this.props.grid[1]), se = this.props.snapGap || 0;
          b = se === 0 || Math.abs(oe - b) <= se ? oe : b, L = se === 0 || Math.abs(ue - L) <= se ? ue : L;
        }
        var Ae = {
          width: b - S.width,
          height: L - S.height
        };
        if (m && typeof m == "string") {
          if (m.endsWith("%")) {
            var Me = b / U.width * 100;
            b = Me + "%";
          } else if (m.endsWith("vw")) {
            var fe = b / this.window.innerWidth * 100;
            b = fe + "vw";
          } else if (m.endsWith("vh")) {
            var q = b / this.window.innerHeight * 100;
            b = q + "vh";
          }
        }
        if (E && typeof E == "string") {
          if (E.endsWith("%")) {
            var Me = L / U.height * 100;
            L = Me + "%";
          } else if (E.endsWith("vw")) {
            var fe = L / this.window.innerWidth * 100;
            L = fe + "vw";
          } else if (E.endsWith("vh")) {
            var q = L / this.window.innerHeight * 100;
            L = q + "vh";
          }
        }
        var B = {
          width: this.createSizeForCssProperty(b, "width"),
          height: this.createSizeForCssProperty(L, "height")
        };
        this.flexDir === "row" ? B.flexBasis = B.width : this.flexDir === "column" && (B.flexBasis = B.height), Zr(function() {
          t.setState(B);
        }), this.props.onResize && this.props.onResize(n, v, this.resizable, Ae);
      }
    }, r.prototype.onMouseUp = function(n) {
      var t = this.state, o = t.isResizing, a = t.direction, l = t.original;
      if (!(!o || !this.resizable)) {
        var s = {
          width: this.size.width - l.width,
          height: this.size.height - l.height
        };
        this.props.onResizeStop && this.props.onResizeStop(n, a, this.resizable, s), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: pe(pe({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, r.prototype.updateSize = function(n) {
      this.setState({ width: n.width, height: n.height });
    }, r.prototype.renderResizer = function() {
      var n = this, t = this.props, o = t.enable, a = t.handleStyles, l = t.handleClasses, s = t.handleWrapperStyle, f = t.handleWrapperClass, I = t.handleComponent;
      if (!o)
        return null;
      var d = Object.keys(o).map(function(j) {
        return o[j] !== !1 ? me.createElement($r, { key: j, direction: j, onResizeStart: n.onResizeStart, replaceStyles: a && a[j], className: l && l[j] }, I && I[j] ? I[j] : null) : null;
      });
      return me.createElement("div", { className: f, style: s }, d);
    }, r.prototype.render = function() {
      var n = this, t = Object.keys(this.props).reduce(function(l, s) {
        return tn.indexOf(s) !== -1 || (l[s] = n.props[s]), l;
      }, {}), o = pe(pe(pe({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (o.flexBasis = this.state.flexBasis);
      var a = this.props.as || "div";
      return me.createElement(
        a,
        pe({ ref: this.ref, style: o, className: this.props.className }, t),
        this.state.isResizing && me.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, r.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, r;
  }(me.PureComponent)
), et = { exports: {} }, sr = {}, pt = { exports: {} }, Xe = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function nn() {
  if (Bt)
    return R;
  Bt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, I = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, j = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, U = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function L(T) {
    if (typeof T == "object" && T !== null) {
      var Z = T.$$typeof;
      switch (Z) {
        case r:
          switch (T = T.type, T) {
            case f:
            case I:
            case t:
            case a:
            case o:
            case j:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case s:
                case d:
                case m:
                case S:
                case l:
                  return T;
                default:
                  return Z;
              }
          }
        case n:
          return Z;
      }
    }
  }
  function b(T) {
    return L(T) === I;
  }
  return R.AsyncMode = f, R.ConcurrentMode = I, R.ContextConsumer = s, R.ContextProvider = l, R.Element = r, R.ForwardRef = d, R.Fragment = t, R.Lazy = m, R.Memo = S, R.Portal = n, R.Profiler = a, R.StrictMode = o, R.Suspense = j, R.isAsyncMode = function(T) {
    return b(T) || L(T) === f;
  }, R.isConcurrentMode = b, R.isContextConsumer = function(T) {
    return L(T) === s;
  }, R.isContextProvider = function(T) {
    return L(T) === l;
  }, R.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === r;
  }, R.isForwardRef = function(T) {
    return L(T) === d;
  }, R.isFragment = function(T) {
    return L(T) === t;
  }, R.isLazy = function(T) {
    return L(T) === m;
  }, R.isMemo = function(T) {
    return L(T) === S;
  }, R.isPortal = function(T) {
    return L(T) === n;
  }, R.isProfiler = function(T) {
    return L(T) === a;
  }, R.isStrictMode = function(T) {
    return L(T) === o;
  }, R.isSuspense = function(T) {
    return L(T) === j;
  }, R.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === t || T === I || T === a || T === o || T === j || T === v || typeof T == "object" && T !== null && (T.$$typeof === m || T.$$typeof === S || T.$$typeof === l || T.$$typeof === s || T.$$typeof === d || T.$$typeof === U || T.$$typeof === k || T.$$typeof === P || T.$$typeof === E);
  }, R.typeOf = L, R;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function on() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, I = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, j = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, U = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function L(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === t || h === I || h === a || h === o || h === j || h === v || typeof h == "object" && h !== null && (h.$$typeof === m || h.$$typeof === S || h.$$typeof === l || h.$$typeof === s || h.$$typeof === d || h.$$typeof === U || h.$$typeof === k || h.$$typeof === P || h.$$typeof === E);
    }
    function b(h) {
      if (typeof h == "object" && h !== null) {
        var ee = h.$$typeof;
        switch (ee) {
          case r:
            var ae = h.type;
            switch (ae) {
              case f:
              case I:
              case t:
              case a:
              case o:
              case j:
                return ae;
              default:
                var je = ae && ae.$$typeof;
                switch (je) {
                  case s:
                  case d:
                  case m:
                  case S:
                  case l:
                    return je;
                  default:
                    return ee;
                }
            }
          case n:
            return ee;
        }
      }
    }
    var T = f, Z = I, oe = s, ue = l, se = r, Ae = d, Me = t, fe = m, q = S, B = n, Ne = a, ne = o, K = j, ze = !1;
    function Ie(h) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(h) || b(h) === f;
    }
    function D(h) {
      return b(h) === I;
    }
    function z(h) {
      return b(h) === s;
    }
    function u(h) {
      return b(h) === l;
    }
    function M(h) {
      return typeof h == "object" && h !== null && h.$$typeof === r;
    }
    function c(h) {
      return b(h) === d;
    }
    function N(h) {
      return b(h) === t;
    }
    function g(h) {
      return b(h) === m;
    }
    function p(h) {
      return b(h) === S;
    }
    function x(h) {
      return b(h) === n;
    }
    function w(h) {
      return b(h) === a;
    }
    function O(h) {
      return b(h) === o;
    }
    function F(h) {
      return b(h) === j;
    }
    W.AsyncMode = T, W.ConcurrentMode = Z, W.ContextConsumer = oe, W.ContextProvider = ue, W.Element = se, W.ForwardRef = Ae, W.Fragment = Me, W.Lazy = fe, W.Memo = q, W.Portal = B, W.Profiler = Ne, W.StrictMode = ne, W.Suspense = K, W.isAsyncMode = Ie, W.isConcurrentMode = D, W.isContextConsumer = z, W.isContextProvider = u, W.isElement = M, W.isForwardRef = c, W.isFragment = N, W.isLazy = g, W.isMemo = p, W.isPortal = x, W.isProfiler = w, W.isStrictMode = O, W.isSuspense = F, W.isValidElementType = L, W.typeOf = b;
  }()), W;
}
var Ht;
function Mr() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? Xe.exports = nn() : Xe.exports = on()), Xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ct, Xt;
function an() {
  if (Xt)
    return ct;
  Xt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(l).map(function(d) {
        return l[d];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var I = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        I[d] = d;
      }), Object.keys(Object.assign({}, I)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ct = o() ? Object.assign : function(a, l) {
    for (var s, f = t(a), I, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var j in s)
        r.call(s, j) && (f[j] = s[j]);
      if (e) {
        I = e(s);
        for (var v = 0; v < I.length; v++)
          n.call(s, I[v]) && (f[I[v]] = s[I[v]]);
      }
    }
    return f;
  }, ct;
}
var lt, $t;
function At() {
  if ($t)
    return lt;
  $t = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lt = e, lt;
}
var gt, Jt;
function cr() {
  return Jt || (Jt = 1, gt = Function.call.bind(Object.prototype.hasOwnProperty)), gt;
}
var ft, qt;
function un() {
  if (qt)
    return ft;
  qt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = At(), n = {}, t = cr();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(a, l, s, f, I) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (t(a, d)) {
          var j;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (f || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            j = a[d](l, d, f, s, null, r);
          } catch (m) {
            j = m;
          }
          if (j && !(j instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof j + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), j instanceof Error && !(j.message in n)) {
            n[j.message] = !0;
            var S = I ? I() : "";
            e(
              "Failed " + s + " type: " + j.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ft = o, ft;
}
var Nt, Kt;
function sn() {
  if (Kt)
    return Nt;
  Kt = 1;
  var e = Mr(), r = an(), n = At(), t = cr(), o = un(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Nt = function(s, f) {
    var I = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function j(D) {
      var z = D && (I && D[I] || D[d]);
      if (typeof z == "function")
        return z;
    }
    var v = "<<anonymous>>", S = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: P(),
      arrayOf: L,
      element: b(),
      elementType: T(),
      instanceOf: Z,
      node: Ae(),
      objectOf: ue,
      oneOf: oe,
      oneOfType: se,
      shape: fe,
      exact: q
    };
    function m(D, z) {
      return D === z ? D !== 0 || 1 / D === 1 / z : D !== D && z !== z;
    }
    function E(D, z) {
      this.message = D, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    E.prototype = Error.prototype;
    function U(D) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, u = 0;
      function M(N, g, p, x, w, O, F) {
        if (x = x || v, O = O || p, F !== n) {
          if (f) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = x + ":" + p;
            !z[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            u < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[ee] = !0, u++);
          }
        }
        return g[p] == null ? N ? g[p] === null ? new E("The " + w + " `" + O + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new E("The " + w + " `" + O + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : D(g, p, x, w, O);
      }
      var c = M.bind(null, !1);
      return c.isRequired = M.bind(null, !0), c;
    }
    function k(D) {
      function z(u, M, c, N, g, p) {
        var x = u[M], w = ne(x);
        if (w !== D) {
          var O = K(x);
          return new E(
            "Invalid " + N + " `" + g + "` of type " + ("`" + O + "` supplied to `" + c + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return U(z);
    }
    function P() {
      return U(l);
    }
    function L(D) {
      function z(u, M, c, N, g) {
        if (typeof D != "function")
          return new E("Property `" + g + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var p = u[M];
        if (!Array.isArray(p)) {
          var x = ne(p);
          return new E("Invalid " + N + " `" + g + "` of type " + ("`" + x + "` supplied to `" + c + "`, expected an array."));
        }
        for (var w = 0; w < p.length; w++) {
          var O = D(p, w, c, N, g + "[" + w + "]", n);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return U(z);
    }
    function b() {
      function D(z, u, M, c, N) {
        var g = z[u];
        if (!s(g)) {
          var p = ne(g);
          return new E("Invalid " + c + " `" + N + "` of type " + ("`" + p + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(D);
    }
    function T() {
      function D(z, u, M, c, N) {
        var g = z[u];
        if (!e.isValidElementType(g)) {
          var p = ne(g);
          return new E("Invalid " + c + " `" + N + "` of type " + ("`" + p + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(D);
    }
    function Z(D) {
      function z(u, M, c, N, g) {
        if (!(u[M] instanceof D)) {
          var p = D.name || v, x = Ie(u[M]);
          return new E("Invalid " + N + " `" + g + "` of type " + ("`" + x + "` supplied to `" + c + "`, expected ") + ("instance of `" + p + "`."));
        }
        return null;
      }
      return U(z);
    }
    function oe(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function z(u, M, c, N, g) {
        for (var p = u[M], x = 0; x < D.length; x++)
          if (m(p, D[x]))
            return null;
        var w = JSON.stringify(D, function(F, h) {
          var ee = K(h);
          return ee === "symbol" ? String(h) : h;
        });
        return new E("Invalid " + N + " `" + g + "` of value `" + String(p) + "` " + ("supplied to `" + c + "`, expected one of " + w + "."));
      }
      return U(z);
    }
    function ue(D) {
      function z(u, M, c, N, g) {
        if (typeof D != "function")
          return new E("Property `" + g + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var p = u[M], x = ne(p);
        if (x !== "object")
          return new E("Invalid " + N + " `" + g + "` of type " + ("`" + x + "` supplied to `" + c + "`, expected an object."));
        for (var w in p)
          if (t(p, w)) {
            var O = D(p, w, c, N, g + "." + w, n);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return U(z);
    }
    function se(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var z = 0; z < D.length; z++) {
        var u = D[z];
        if (typeof u != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(u) + " at index " + z + "."
          ), l;
      }
      function M(c, N, g, p, x) {
        for (var w = [], O = 0; O < D.length; O++) {
          var F = D[O], h = F(c, N, g, p, x, n);
          if (h == null)
            return null;
          h.data && t(h.data, "expectedType") && w.push(h.data.expectedType);
        }
        var ee = w.length > 0 ? ", expected one of type [" + w.join(", ") + "]" : "";
        return new E("Invalid " + p + " `" + x + "` supplied to " + ("`" + g + "`" + ee + "."));
      }
      return U(M);
    }
    function Ae() {
      function D(z, u, M, c, N) {
        return B(z[u]) ? null : new E("Invalid " + c + " `" + N + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return U(D);
    }
    function Me(D, z, u, M, c) {
      return new E(
        (D || "React class") + ": " + z + " type `" + u + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function fe(D) {
      function z(u, M, c, N, g) {
        var p = u[M], x = ne(p);
        if (x !== "object")
          return new E("Invalid " + N + " `" + g + "` of type `" + x + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var w in D) {
          var O = D[w];
          if (typeof O != "function")
            return Me(c, N, g, w, K(O));
          var F = O(p, w, c, N, g + "." + w, n);
          if (F)
            return F;
        }
        return null;
      }
      return U(z);
    }
    function q(D) {
      function z(u, M, c, N, g) {
        var p = u[M], x = ne(p);
        if (x !== "object")
          return new E("Invalid " + N + " `" + g + "` of type `" + x + "` " + ("supplied to `" + c + "`, expected `object`."));
        var w = r({}, u[M], D);
        for (var O in w) {
          var F = D[O];
          if (t(D, O) && typeof F != "function")
            return Me(c, N, g, O, K(F));
          if (!F)
            return new E(
              "Invalid " + N + " `" + g + "` key `" + O + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(u[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var h = F(p, O, c, N, g + "." + O, n);
          if (h)
            return h;
        }
        return null;
      }
      return U(z);
    }
    function B(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(B);
          if (D === null || s(D))
            return !0;
          var z = j(D);
          if (z) {
            var u = z.call(D), M;
            if (z !== D.entries) {
              for (; !(M = u.next()).done; )
                if (!B(M.value))
                  return !1;
            } else
              for (; !(M = u.next()).done; ) {
                var c = M.value;
                if (c && !B(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ne(D, z) {
      return D === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function ne(D) {
      var z = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : Ne(z, D) ? "symbol" : z;
    }
    function K(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var z = ne(D);
      if (z === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function ze(D) {
      var z = K(D);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function Ie(D) {
      return !D.constructor || !D.constructor.name ? v : D.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, Nt;
}
var Dt, er;
function Mn() {
  if (er)
    return Dt;
  er = 1;
  var e = At();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, Dt = function() {
    function t(l, s, f, I, d, j) {
      if (j !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    t.isRequired = t;
    function o() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: o,
      element: t,
      elementType: t,
      instanceOf: o,
      node: t,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Dt;
}
if (process.env.NODE_ENV !== "production") {
  var cn = Mr(), ln = !0;
  pt.exports = sn()(cn.isElement, ln);
} else
  pt.exports = Mn()();
var lr = pt.exports;
function gr(e) {
  var r, n, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (n = gr(e[r])) && (t && (t += " "), t += n);
    else
      for (r in e)
        e[r] && (t && (t += " "), t += r);
  return t;
}
function tr() {
  for (var e, r, n = 0, t = ""; n < arguments.length; )
    (e = arguments[n++]) && (r = gr(e)) && (t && (t += " "), t += r);
  return t;
}
const gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: tr,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), fn = /* @__PURE__ */ Vr(gn);
var H = {}, Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.dontSetMe = jn;
Te.findInArray = Nn;
Te.int = In;
Te.isFunction = Dn;
Te.isNum = yn;
function Nn(e, r) {
  for (var n = 0, t = e.length; n < t; n++)
    if (r.apply(r, [e[n], n, e]))
      return e[n];
}
function Dn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function yn(e) {
  return typeof e == "number" && !isNaN(e);
}
function In(e) {
  return parseInt(e, 10);
}
function jn(e, r, n) {
  if (e[r])
    return new Error("Invalid prop ".concat(r, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.browserPrefixToKey = Nr;
Le.browserPrefixToStyle = dn;
Le.default = void 0;
Le.getPrefix = fr;
var yt = ["Moz", "Webkit", "O", "ms"];
function fr() {
  var e, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (r = e.documentElement) === null || r === void 0 ? void 0 : r.style;
  if (!t || n in t)
    return "";
  for (var o = 0; o < yt.length; o++)
    if (Nr(n, yt[o]) in t)
      return yt[o];
  return "";
}
function Nr(e, r) {
  return r ? "".concat(r).concat(pn(e)) : e;
}
function dn(e, r) {
  return r ? "-".concat(r.toLowerCase(), "-").concat(e) : e;
}
function pn(e) {
  for (var r = "", n = !0, t = 0; t < e.length; t++)
    n ? (r += e[t].toUpperCase(), n = !1) : e[t] === "-" ? n = !0 : r += e[t];
  return r;
}
var Tn = fr();
Le.default = Tn;
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Tt(e);
}
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.addClassName = dr;
H.addEvent = zn;
H.addUserSelectStyles = kn;
H.createCSSTransform = mn;
H.createSVGTransform = Ln;
H.getTouch = Cn;
H.getTouchIdentifier = bn;
H.getTranslation = zt;
H.innerHeight = vn;
H.innerWidth = wn;
H.matchesSelector = jr;
H.matchesSelectorAndParentsTo = An;
H.offsetXYFromParent = Sn;
H.outerHeight = On;
H.outerWidth = En;
H.removeClassName = pr;
H.removeEvent = xn;
H.removeUserSelectStyles = Un;
var ge = Te, rr = hn(Le);
function Dr(e) {
  if (typeof WeakMap != "function")
    return null;
  var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Dr = function(o) {
    return o ? n : r;
  })(e);
}
function hn(e, r) {
  if (!r && e && e.__esModule)
    return e;
  if (e === null || Tt(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = Dr(r);
  if (n && n.has(e))
    return n.get(e);
  var t = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(t, a, l) : t[a] = e[a];
    }
  return t.default = e, n && n.set(e, t), t;
}
function nr(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function yr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? nr(Object(n), !0).forEach(function(t) {
      Ir(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Ir(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
var $e = "";
function jr(e, r) {
  return $e || ($e = (0, ge.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, ge.isFunction)(e[n]);
  })), (0, ge.isFunction)(e[$e]) ? e[$e](r) : !1;
}
function An(e, r, n) {
  var t = e;
  do {
    if (jr(t, r))
      return !0;
    if (t === n)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function zn(e, r, n, t) {
  if (e) {
    var o = yr({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(r, n, o) : e.attachEvent ? e.attachEvent("on" + r, n) : e["on" + r] = n;
  }
}
function xn(e, r, n, t) {
  if (e) {
    var o = yr({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(r, n, o) : e.detachEvent ? e.detachEvent("on" + r, n) : e["on" + r] = null;
  }
}
function On(e) {
  var r = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return r += (0, ge.int)(n.borderTopWidth), r += (0, ge.int)(n.borderBottomWidth), r;
}
function En(e) {
  var r = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return r += (0, ge.int)(n.borderLeftWidth), r += (0, ge.int)(n.borderRightWidth), r;
}
function vn(e) {
  var r = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return r -= (0, ge.int)(n.paddingTop), r -= (0, ge.int)(n.paddingBottom), r;
}
function wn(e) {
  var r = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return r -= (0, ge.int)(n.paddingLeft), r -= (0, ge.int)(n.paddingRight), r;
}
function Sn(e, r, n) {
  var t = r === r.ownerDocument.body, o = t ? {
    left: 0,
    top: 0
  } : r.getBoundingClientRect(), a = (e.clientX + r.scrollLeft - o.left) / n, l = (e.clientY + r.scrollTop - o.top) / n;
  return {
    x: a,
    y: l
  };
}
function mn(e, r) {
  var n = zt(e, r, "px");
  return Ir({}, (0, rr.browserPrefixToKey)("transform", rr.default), n);
}
function Ln(e, r) {
  var n = zt(e, r, "");
  return n;
}
function zt(e, r, n) {
  var t = e.x, o = e.y, a = "translate(".concat(t).concat(n, ",").concat(o).concat(n, ")");
  if (r) {
    var l = "".concat(typeof r.x == "string" ? r.x : r.x + n), s = "".concat(typeof r.y == "string" ? r.y : r.y + n);
    a = "translate(".concat(l, ", ").concat(s, ")") + a;
  }
  return a;
}
function Cn(e, r) {
  return e.targetTouches && (0, ge.findInArray)(e.targetTouches, function(n) {
    return r === n.identifier;
  }) || e.changedTouches && (0, ge.findInArray)(e.changedTouches, function(n) {
    return r === n.identifier;
  });
}
function bn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function kn(e) {
  if (e) {
    var r = e.getElementById("react-draggable-style-el");
    r || (r = e.createElement("style"), r.type = "text/css", r.id = "react-draggable-style-el", r.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, r.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(r)), e.body && dr(e.body, "react-draggable-transparent-selection");
  }
}
function Un(e) {
  if (e)
    try {
      if (e.body && pr(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var r = (e.defaultView || window).getSelection();
        r && r.type !== "Caret" && r.removeAllRanges();
      }
    } catch {
    }
}
function dr(e, r) {
  e.classList ? e.classList.add(r) : e.className.match(new RegExp("(?:^|\\s)".concat(r, "(?!\\S)"))) || (e.className += " ".concat(r));
}
function pr(e, r) {
  e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(r, "(?!\\S)"), "g"), "");
}
var he = {};
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.canDragX = Pn;
he.canDragY = _n;
he.createCoreData = Wn;
he.createDraggableData = Zn;
he.getBoundPosition = Qn;
he.getControlPosition = Rn;
he.snapToGrid = Yn;
var le = Te, Ue = H;
function Qn(e, r, n) {
  if (!e.props.bounds)
    return [r, n];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : Gn(t);
  var o = xt(e);
  if (typeof t == "string") {
    var a = o.ownerDocument, l = a.defaultView, s;
    if (t === "parent" ? s = o.parentNode : s = a.querySelector(t), !(s instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var f = s, I = l.getComputedStyle(o), d = l.getComputedStyle(f);
    t = {
      left: -o.offsetLeft + (0, le.int)(d.paddingLeft) + (0, le.int)(I.marginLeft),
      top: -o.offsetTop + (0, le.int)(d.paddingTop) + (0, le.int)(I.marginTop),
      right: (0, Ue.innerWidth)(f) - (0, Ue.outerWidth)(o) - o.offsetLeft + (0, le.int)(d.paddingRight) - (0, le.int)(I.marginRight),
      bottom: (0, Ue.innerHeight)(f) - (0, Ue.outerHeight)(o) - o.offsetTop + (0, le.int)(d.paddingBottom) - (0, le.int)(I.marginBottom)
    };
  }
  return (0, le.isNum)(t.right) && (r = Math.min(r, t.right)), (0, le.isNum)(t.bottom) && (n = Math.min(n, t.bottom)), (0, le.isNum)(t.left) && (r = Math.max(r, t.left)), (0, le.isNum)(t.top) && (n = Math.max(n, t.top)), [r, n];
}
function Yn(e, r, n) {
  var t = Math.round(r / e[0]) * e[0], o = Math.round(n / e[1]) * e[1];
  return [t, o];
}
function Pn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function _n(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Rn(e, r, n) {
  var t = typeof r == "number" ? (0, Ue.getTouch)(e, r) : null;
  if (typeof r == "number" && !t)
    return null;
  var o = xt(n), a = n.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, Ue.offsetXYFromParent)(t || e, a, n.props.scale);
}
function Wn(e, r, n) {
  var t = e.state, o = !(0, le.isNum)(t.lastX), a = xt(e);
  return o ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: r,
    lastY: n,
    x: r,
    y: n
  } : {
    node: a,
    deltaX: r - t.lastX,
    deltaY: n - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: r,
    y: n
  };
}
function Zn(e, r) {
  var n = e.props.scale;
  return {
    node: r.node,
    x: e.state.x + r.deltaX / n,
    y: e.state.y + r.deltaY / n,
    deltaX: r.deltaX / n,
    deltaY: r.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Gn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function xt(e) {
  var r = e.findDOMNode();
  if (!r)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return r;
}
var tt = {}, rt = {};
Object.defineProperty(rt, "__esModule", {
  value: !0
});
rt.default = Vn;
function Vn() {
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Je(e);
}
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.default = void 0;
var It = Fn(Ke), ce = Ot(lr), Bn = Ot(ur), te = H, Ee = he, jt = Te, Re = Ot(rt);
function Ot(e) {
  return e && e.__esModule ? e : { default: e };
}
function Tr(e) {
  if (typeof WeakMap != "function")
    return null;
  var r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Tr = function(o) {
    return o ? n : r;
  })(e);
}
function Fn(e, r) {
  if (!r && e && e.__esModule)
    return e;
  if (e === null || Je(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = Tr(r);
  if (n && n.has(e))
    return n.get(e);
  var t = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      l && (l.get || l.set) ? Object.defineProperty(t, a, l) : t[a] = e[a];
    }
  return t.default = e, n && n.set(e, t), t;
}
function ir(e, r) {
  return Jn(e) || $n(e, r) || Xn(e, r) || Hn();
}
function Hn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xn(e, r) {
  if (e) {
    if (typeof e == "string")
      return or(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return or(e, r);
  }
}
function or(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var n = 0, t = new Array(r); n < r; n++)
    t[n] = e[n];
  return t;
}
function $n(e, r) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var t = [], o = !0, a = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (t.push(l.value), !(r && t.length === r)); o = !0)
        ;
    } catch (f) {
      a = !0, s = f;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return t;
  }
}
function Jn(e) {
  if (Array.isArray(e))
    return e;
}
function qn(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ar(e, r) {
  for (var n = 0; n < r.length; n++) {
    var t = r[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function Kn(e, r, n) {
  return r && ar(e.prototype, r), n && ar(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ei(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), r && ht(e, r);
}
function ht(e, r) {
  return ht = Object.setPrototypeOf || function(t, o) {
    return t.__proto__ = o, t;
  }, ht(e, r);
}
function ti(e) {
  var r = ni();
  return function() {
    var t = qe(e), o;
    if (r) {
      var a = qe(this).constructor;
      o = Reflect.construct(t, arguments, a);
    } else
      o = t.apply(this, arguments);
    return ri(this, o);
  };
}
function ri(e, r) {
  if (r && (Je(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return re(e);
}
function re(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ni() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qe(e) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qe(e);
}
function ye(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
var de = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, ve = de.mouse, nt = /* @__PURE__ */ function(e) {
  ei(n, e);
  var r = ti(n);
  function n() {
    var t;
    qn(this, n);
    for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return t = r.call.apply(r, [this].concat(a)), ye(re(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), ye(re(t), "mounted", !1), ye(re(t), "handleDragStart", function(s) {
      if (t.props.onMouseDown(s), !t.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var f = t.findDOMNode();
      if (!f || !f.ownerDocument || !f.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var I = f.ownerDocument;
      if (!(t.props.disabled || !(s.target instanceof I.defaultView.Node) || t.props.handle && !(0, te.matchesSelectorAndParentsTo)(s.target, t.props.handle, f) || t.props.cancel && (0, te.matchesSelectorAndParentsTo)(s.target, t.props.cancel, f))) {
        s.type === "touchstart" && s.preventDefault();
        var d = (0, te.getTouchIdentifier)(s);
        t.setState({
          touchIdentifier: d
        });
        var j = (0, Ee.getControlPosition)(s, d, re(t));
        if (j != null) {
          var v = j.x, S = j.y, m = (0, Ee.createCoreData)(re(t), v, S);
          (0, Re.default)("DraggableCore: handleDragStart: %j", m), (0, Re.default)("calling", t.props.onStart);
          var E = t.props.onStart(s, m);
          E === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, te.addUserSelectStyles)(I), t.setState({
            dragging: !0,
            lastX: v,
            lastY: S
          }), (0, te.addEvent)(I, ve.move, t.handleDrag), (0, te.addEvent)(I, ve.stop, t.handleDragStop));
        }
      }
    }), ye(re(t), "handleDrag", function(s) {
      var f = (0, Ee.getControlPosition)(s, t.state.touchIdentifier, re(t));
      if (f != null) {
        var I = f.x, d = f.y;
        if (Array.isArray(t.props.grid)) {
          var j = I - t.state.lastX, v = d - t.state.lastY, S = (0, Ee.snapToGrid)(t.props.grid, j, v), m = ir(S, 2);
          if (j = m[0], v = m[1], !j && !v)
            return;
          I = t.state.lastX + j, d = t.state.lastY + v;
        }
        var E = (0, Ee.createCoreData)(re(t), I, d);
        (0, Re.default)("DraggableCore: handleDrag: %j", E);
        var U = t.props.onDrag(s, E);
        if (U === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var k = document.createEvent("MouseEvents");
            k.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(k);
          }
          return;
        }
        t.setState({
          lastX: I,
          lastY: d
        });
      }
    }), ye(re(t), "handleDragStop", function(s) {
      if (t.state.dragging) {
        var f = (0, Ee.getControlPosition)(s, t.state.touchIdentifier, re(t));
        if (f != null) {
          var I = f.x, d = f.y;
          if (Array.isArray(t.props.grid)) {
            var j = I - t.state.lastX || 0, v = d - t.state.lastY || 0, S = (0, Ee.snapToGrid)(t.props.grid, j, v), m = ir(S, 2);
            j = m[0], v = m[1], I = t.state.lastX + j, d = t.state.lastY + v;
          }
          var E = (0, Ee.createCoreData)(re(t), I, d), U = t.props.onStop(s, E);
          if (U === !1 || t.mounted === !1)
            return !1;
          var k = t.findDOMNode();
          k && t.props.enableUserSelectHack && (0, te.removeUserSelectStyles)(k.ownerDocument), (0, Re.default)("DraggableCore: handleDragStop: %j", E), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), k && ((0, Re.default)("DraggableCore: Removing handlers"), (0, te.removeEvent)(k.ownerDocument, ve.move, t.handleDrag), (0, te.removeEvent)(k.ownerDocument, ve.stop, t.handleDragStop));
        }
      }
    }), ye(re(t), "onMouseDown", function(s) {
      return ve = de.mouse, t.handleDragStart(s);
    }), ye(re(t), "onMouseUp", function(s) {
      return ve = de.mouse, t.handleDragStop(s);
    }), ye(re(t), "onTouchStart", function(s) {
      return ve = de.touch, t.handleDragStart(s);
    }), ye(re(t), "onTouchEnd", function(s) {
      return ve = de.touch, t.handleDragStop(s);
    }), t;
  }
  return Kn(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var o = this.findDOMNode();
      o && (0, te.addEvent)(o, de.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var o = this.findDOMNode();
      if (o) {
        var a = o.ownerDocument;
        (0, te.removeEvent)(a, de.mouse.move, this.handleDrag), (0, te.removeEvent)(a, de.touch.move, this.handleDrag), (0, te.removeEvent)(a, de.mouse.stop, this.handleDragStop), (0, te.removeEvent)(a, de.touch.stop, this.handleDragStop), (0, te.removeEvent)(o, de.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, te.removeUserSelectStyles)(a);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var o, a, l;
      return (o = this.props) !== null && o !== void 0 && o.nodeRef ? (a = this.props) === null || a === void 0 || (l = a.nodeRef) === null || l === void 0 ? void 0 : l.current : Bn.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ It.cloneElement(It.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), n;
}(It.Component);
tt.default = nt;
ye(nt, "displayName", "DraggableCore");
ye(nt, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: ce.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: ce.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: ce.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(r, n) {
    if (r[n] && r[n].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: ce.default.arrayOf(ce.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: ce.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: ce.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: ce.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: ce.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: ce.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: ce.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: ce.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: ce.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: jt.dontSetMe,
  style: jt.dontSetMe,
  transform: jt.dontSetMe
});
ye(nt, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function r(u) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
      return typeof M;
    } : function(M) {
      return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
    }, r(u);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return I.default;
    }
  }), e.default = void 0;
  var n = m(Ke), t = v(lr), o = v(ur), a = v(fn), l = H, s = he, f = Te, I = v(tt), d = v(rt), j = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function S(u) {
    if (typeof WeakMap != "function")
      return null;
    var M = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (S = function(g) {
      return g ? c : M;
    })(u);
  }
  function m(u, M) {
    if (!M && u && u.__esModule)
      return u;
    if (u === null || r(u) !== "object" && typeof u != "function")
      return { default: u };
    var c = S(M);
    if (c && c.has(u))
      return c.get(u);
    var N = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var p in u)
      if (p !== "default" && Object.prototype.hasOwnProperty.call(u, p)) {
        var x = g ? Object.getOwnPropertyDescriptor(u, p) : null;
        x && (x.get || x.set) ? Object.defineProperty(N, p, x) : N[p] = u[p];
      }
    return N.default = u, c && c.set(u, N), N;
  }
  function E() {
    return E = Object.assign || function(u) {
      for (var M = 1; M < arguments.length; M++) {
        var c = arguments[M];
        for (var N in c)
          Object.prototype.hasOwnProperty.call(c, N) && (u[N] = c[N]);
      }
      return u;
    }, E.apply(this, arguments);
  }
  function U(u, M) {
    if (u == null)
      return {};
    var c = k(u, M), N, g;
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(u);
      for (g = 0; g < p.length; g++)
        N = p[g], !(M.indexOf(N) >= 0) && Object.prototype.propertyIsEnumerable.call(u, N) && (c[N] = u[N]);
    }
    return c;
  }
  function k(u, M) {
    if (u == null)
      return {};
    var c = {}, N = Object.keys(u), g, p;
    for (p = 0; p < N.length; p++)
      g = N[p], !(M.indexOf(g) >= 0) && (c[g] = u[g]);
    return c;
  }
  function P(u, M) {
    var c = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(u);
      M && (N = N.filter(function(g) {
        return Object.getOwnPropertyDescriptor(u, g).enumerable;
      })), c.push.apply(c, N);
    }
    return c;
  }
  function L(u) {
    for (var M = 1; M < arguments.length; M++) {
      var c = arguments[M] != null ? arguments[M] : {};
      M % 2 ? P(Object(c), !0).forEach(function(N) {
        D(u, N, c[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : P(Object(c)).forEach(function(N) {
        Object.defineProperty(u, N, Object.getOwnPropertyDescriptor(c, N));
      });
    }
    return u;
  }
  function b(u, M) {
    return se(u) || ue(u, M) || Z(u, M) || T();
  }
  function T() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Z(u, M) {
    if (u) {
      if (typeof u == "string")
        return oe(u, M);
      var c = Object.prototype.toString.call(u).slice(8, -1);
      if (c === "Object" && u.constructor && (c = u.constructor.name), c === "Map" || c === "Set")
        return Array.from(u);
      if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
        return oe(u, M);
    }
  }
  function oe(u, M) {
    (M == null || M > u.length) && (M = u.length);
    for (var c = 0, N = new Array(M); c < M; c++)
      N[c] = u[c];
    return N;
  }
  function ue(u, M) {
    var c = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
    if (c != null) {
      var N = [], g = !0, p = !1, x, w;
      try {
        for (c = c.call(u); !(g = (x = c.next()).done) && (N.push(x.value), !(M && N.length === M)); g = !0)
          ;
      } catch (O) {
        p = !0, w = O;
      } finally {
        try {
          !g && c.return != null && c.return();
        } finally {
          if (p)
            throw w;
        }
      }
      return N;
    }
  }
  function se(u) {
    if (Array.isArray(u))
      return u;
  }
  function Ae(u, M) {
    if (!(u instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function Me(u, M) {
    for (var c = 0; c < M.length; c++) {
      var N = M[c];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(u, N.key, N);
    }
  }
  function fe(u, M, c) {
    return M && Me(u.prototype, M), c && Me(u, c), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function q(u, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(M && M.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), M && B(u, M);
  }
  function B(u, M) {
    return B = Object.setPrototypeOf || function(N, g) {
      return N.__proto__ = g, N;
    }, B(u, M);
  }
  function Ne(u) {
    var M = ze();
    return function() {
      var N = Ie(u), g;
      if (M) {
        var p = Ie(this).constructor;
        g = Reflect.construct(N, arguments, p);
      } else
        g = N.apply(this, arguments);
      return ne(this, g);
    };
  }
  function ne(u, M) {
    if (M && (r(M) === "object" || typeof M == "function"))
      return M;
    if (M !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(u);
  }
  function K(u) {
    if (u === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u;
  }
  function ze() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function Ie(u) {
    return Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, Ie(u);
  }
  function D(u, M, c) {
    return M in u ? Object.defineProperty(u, M, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : u[M] = c, u;
  }
  var z = /* @__PURE__ */ function(u) {
    q(c, u);
    var M = Ne(c);
    function c(N) {
      var g;
      return Ae(this, c), g = M.call(this, N), D(K(g), "onDragStart", function(p, x) {
        (0, d.default)("Draggable: onDragStart: %j", x);
        var w = g.props.onStart(p, (0, s.createDraggableData)(K(g), x));
        if (w === !1)
          return !1;
        g.setState({
          dragging: !0,
          dragged: !0
        });
      }), D(K(g), "onDrag", function(p, x) {
        if (!g.state.dragging)
          return !1;
        (0, d.default)("Draggable: onDrag: %j", x);
        var w = (0, s.createDraggableData)(K(g), x), O = {
          x: w.x,
          y: w.y
        };
        if (g.props.bounds) {
          var F = O.x, h = O.y;
          O.x += g.state.slackX, O.y += g.state.slackY;
          var ee = (0, s.getBoundPosition)(K(g), O.x, O.y), ae = b(ee, 2), je = ae[0], xe = ae[1];
          O.x = je, O.y = xe, O.slackX = g.state.slackX + (F - O.x), O.slackY = g.state.slackY + (h - O.y), w.x = O.x, w.y = O.y, w.deltaX = O.x - g.state.x, w.deltaY = O.y - g.state.y;
        }
        var we = g.props.onDrag(p, w);
        if (we === !1)
          return !1;
        g.setState(O);
      }), D(K(g), "onDragStop", function(p, x) {
        if (!g.state.dragging)
          return !1;
        var w = g.props.onStop(p, (0, s.createDraggableData)(K(g), x));
        if (w === !1)
          return !1;
        (0, d.default)("Draggable: onDragStop: %j", x);
        var O = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, F = !!g.props.position;
        if (F) {
          var h = g.props.position, ee = h.x, ae = h.y;
          O.x = ee, O.y = ae;
        }
        g.setState(O);
      }), g.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: N.position ? N.position.x : N.defaultPosition.x,
        y: N.position ? N.position.y : N.defaultPosition.y,
        prevPropsPosition: L({}, N.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, N.position && !(N.onDrag || N.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), g;
    }
    return fe(c, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var g, p, x;
        return (g = (p = this.props) === null || p === void 0 || (x = p.nodeRef) === null || x === void 0 ? void 0 : x.current) !== null && g !== void 0 ? g : o.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var g, p = this.props;
        p.axis, p.bounds;
        var x = p.children, w = p.defaultPosition, O = p.defaultClassName, F = p.defaultClassNameDragging, h = p.defaultClassNameDragged, ee = p.position, ae = p.positionOffset;
        p.scale;
        var je = U(p, j), xe = {}, we = null, We = !!ee, Se = !We || this.state.dragging, Ze = ee || w, Ge = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Se ? this.state.x : Ze.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Se ? this.state.y : Ze.y
        };
        this.state.isElementSVG ? we = (0, l.createSVGTransform)(Ge, ae) : xe = (0, l.createCSSTransform)(Ge, ae);
        var Qe = (0, a.default)(x.props.className || "", O, (g = {}, D(g, F, this.state.dragging), D(g, h, this.state.dragged), g));
        return /* @__PURE__ */ n.createElement(I.default, E({}, je, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(x), {
          className: Qe,
          style: L(L({}, x.props.style), xe),
          transform: we
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(g, p) {
          var x = g.position, w = p.prevPropsPosition;
          return x && (!w || x.x !== w.x || x.y !== w.y) ? ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
            position: x,
            prevPropsPosition: w
          }), {
            x: x.x,
            y: x.y,
            prevPropsPosition: L({}, x)
          }) : null;
        }
      )
    }]), c;
  }(n.Component);
  e.default = z, D(z, "displayName", "Draggable"), D(z, "propTypes", L(L({}, I.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: t.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: t.default.oneOfType([t.default.shape({
      left: t.default.number,
      right: t.default.number,
      top: t.default.number,
      bottom: t.default.number
    }), t.default.string, t.default.oneOf([!1])]),
    defaultClassName: t.default.string,
    defaultClassNameDragging: t.default.string,
    defaultClassNameDragged: t.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    positionOffset: t.default.shape({
      x: t.default.oneOfType([t.default.number, t.default.string]),
      y: t.default.oneOfType([t.default.number, t.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: f.dontSetMe,
    style: f.dontSetMe,
    transform: f.dontSetMe
  })), D(z, "defaultProps", L(L({}, I.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(sr);
var hr = sr, Ar = hr.default, ii = hr.DraggableCore;
et.exports = Ar;
et.exports.default = Ar;
et.exports.DraggableCore = ii;
var oi = et.exports;
const ai = /* @__PURE__ */ Gr(oi), ui = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC44NTM2IDUuODUzNTVDMTkuMDQ4OCA1LjY1ODI5IDE5LjA0ODggNS4zNDE3MSAxOC44NTM2IDUuMTQ2NDVDMTguNjU4MyA0Ljk1MTE4IDE4LjM0MTcgNC45NTExOCAxOC4xNDY0IDUuMTQ2NDVMMTIgMTEuMjkyOUw1Ljg1MzU1IDUuMTQ2NDVDNS42NTgyOSA0Ljk1MTE4IDUuMzQxNzEgNC45NTExOCA1LjE0NjQ1IDUuMTQ2NDVDNC45NTExOSA1LjM0MTcxIDQuOTUxMTkgNS42NTgyOSA1LjE0NjQ1IDUuODUzNTVMMTEuMjkyOSAxMkw1LjE0NjQ1IDE4LjE0NjRDNC45NTExOCAxOC4zNDE3IDQuOTUxMTggMTguNjU4MyA1LjE0NjQ1IDE4Ljg1MzZDNS4zNDE3MSAxOS4wNDg4IDUuNjU4MjkgMTkuMDQ4OCA1Ljg1MzU1IDE4Ljg1MzZMMTIgMTIuNzA3MUwxOC4xNDY0IDE4Ljg1MzZDMTguMzQxNyAxOS4wNDg4IDE4LjY1ODMgMTkuMDQ4OCAxOC44NTM2IDE4Ljg1MzZDMTkuMDQ4OCAxOC42NTgzIDE5LjA0ODggMTguMzQxNyAxOC44NTM2IDE4LjE0NjRMMTIuNzA3MSAxMkwxOC44NTM2IDUuODUzNTVaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", si = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDdDOS41NTIyOCA3IDEwIDYuNTUyMjggMTAgNkMxMCA1LjQ0NzcyIDkuNTUyMjggNSA5IDVDOC40NDc3MiA1IDggNS40NDc3MiA4IDZDOCA2LjU1MjI4IDguNDQ3NzIgNyA5IDdaTTE1IDdDMTUuNTUyMyA3IDE2IDYuNTUyMjggMTYgNkMxNiA1LjQ0NzcyIDE1LjU1MjMgNSAxNSA1QzE0LjQ0NzcgNSAxNCA1LjQ0NzcyIDE0IDZDMTQgNi41NTIyOCAxNC40NDc3IDcgMTUgN1pNMTUgMTNDMTUuNTUyMyAxMyAxNiAxMi41NTIzIDE2IDEyQzE2IDExLjQ0NzcgMTUuNTUyMyAxMSAxNSAxMUMxNC40NDc3IDExIDE0IDExLjQ0NzcgMTQgMTJDMTQgMTIuNTUyMyAxNC40NDc3IDEzIDE1IDEzWk0xNiAxOEMxNiAxOC41NTIzIDE1LjU1MjMgMTkgMTUgMTlDMTQuNDQ3NyAxOSAxNCAxOC41NTIzIDE0IDE4QzE0IDE3LjQ0NzcgMTQuNDQ3NyAxNyAxNSAxN0MxNS41NTIzIDE3IDE2IDE3LjQ0NzcgMTYgMThaTTEwIDEyQzEwIDEyLjU1MjMgOS41NTIyOCAxMyA5IDEzQzguNDQ3NzIgMTMgOCAxMi41NTIzIDggMTJDOCAxMS40NDc3IDguNDQ3NzIgMTEgOSAxMUM5LjU1MjI4IDExIDEwIDExLjQ0NzcgMTAgMTJaTTkgMTlDOS41NTIyOCAxOSAxMCAxOC41NTIzIDEwIDE4QzEwIDE3LjQ0NzcgOS41NTIyOCAxNyA5IDE3QzguNDQ3NzIgMTcgOCAxNy40NDc3IDggMThDOCAxOC41NTIzIDguNDQ3NzIgMTkgOSAxOVoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", Mi = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC44OTc0IDQuMDAwMTJMMTkuMjg3NCA0LjAwMDAzTDEzLjE0MDUgMTAuMTQ5NEMxMi45NDUzIDEwLjM0NDcgMTIuOTQ1NCAxMC42NjEzIDEzLjE0MDcgMTAuODU2NUMxMy4zMzYgMTEuMDUxNyAxMy42NTI1IDExLjA1MTcgMTMuODQ3OCAxMC44NTY0TDE5Ljk5NDkgNC43MDY3NUwxOS45OTc1IDkuMTAxNTNDMTkuOTk3NiA5LjM3NzY4IDIwLjIyMTYgOS42MDE0MSAyMC40OTc4IDkuNjAxMjRDMjAuNzczOSA5LjYwMTA4IDIwLjk5NzYgOS4zNzcwOSAyMC45OTc1IDkuMTAwOTRMMjAuOTk0MSAzLjQ5OTcxQzIwLjk5NCAzLjIyMzY4IDIwLjc3MDIgMi45OTk5OSAyMC40OTQxIDNMMTQuODk3NCAzLjAwMDExQzE0LjYyMTIgMy4wMDAxMSAxNC4zOTc0IDMuMjIzOTggMTQuMzk3NCAzLjUwMDEyQzE0LjM5NzQgMy43NzYyNyAxNC42MjEzIDQuMDAwMTIgMTQuODk3NCA0LjAwMDEyWk0xMC44NTE5IDEzLjg1NDRDMTEuMDQ3MSAxMy42NTkxIDExLjA0NyAxMy4zNDI1IDEwLjg1MTcgMTMuMTQ3M0MxMC42NTY0IDEyLjk1MjEgMTAuMzM5OCAxMi45NTIyIDEwLjE0NDYgMTMuMTQ3NUw0LjAwMTk1IDE5LjI5MjVWMTQuODk2NkM0LjAwMTk1IDE0LjYyMDUgMy43NzgxIDE0LjM5NjYgMy41MDE5NSAxNC4zOTY2QzMuMjI1ODEgMTQuMzk2NiAzLjAwMTk1IDE0LjYyMDUgMy4wMDE5NSAxNC44OTY2VjIwLjVDMy4wMDE5NSAyMC43NzYxIDMuMjI1ODEgMjEgMy41MDE5NSAyMUg5LjA4NzRDOS4zNjM1NSAyMSA5LjU4NzQgMjAuNzc2MSA5LjU4NzQgMjAuNUM5LjU4NzQgMjAuMjIzOCA5LjM2MzU1IDIwIDkuMDg3NCAyMEg0LjcwODczTDEwLjg1MTkgMTMuODU0NFoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", ci = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCA5LjVDMTAgOS43NzYxNCA5Ljc3NjE0IDEwIDkuNSAxMEg0LjVDNC4yMjM4NiAxMCA0IDkuNzc2MTQgNCA5LjVDNCA5LjIyMzg2IDQuMjIzODYgOSA0LjUgOUg5VjQuNUM5IDQuMjIzODYgOS4yMjM4NiA0IDkuNSA0QzkuNzc2MTQgNCAxMCA0LjIyMzg2IDEwIDQuNVY5LjVaIiBmaWxsPSIjZmZmIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4xNDY0NSAzLjE0NjQ1QzMuMzQxNzEgMi45NTExOCAzLjY1ODI5IDIuOTUxMTggMy44NTM1NSAzLjE0NjQ1TDkuODUzNTUgOS4xNDY0NUMxMC4wNDg4IDkuMzQxNzEgMTAuMDQ4OCA5LjY1ODI5IDkuODUzNTUgOS44NTM1NUM5LjY1ODI5IDEwLjA0ODggOS4zNDE3MSAxMC4wNDg4IDkuMTQ2NDUgOS44NTM1NUwzLjE0NjQ1IDMuODUzNTVDMi45NTExOCAzLjY1ODI5IDIuOTUxMTggMy4zNDE3MSAzLjE0NjQ1IDMuMTQ2NDVaIiBmaWxsPSIjZmZmIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTQ2NCAxNC4xNDY0QzE0LjM0MTcgMTMuOTUxMiAxNC42NTgzIDEzLjk1MTIgMTQuODUzNiAxNC4xNDY0TDIwLjg1MzYgMjAuMTQ2NEMyMS4wNDg4IDIwLjM0MTcgMjEuMDQ4OCAyMC42NTgzIDIwLjg1MzYgMjAuODUzNkMyMC42NTgzIDIxLjA0ODggMjAuMzQxNyAyMS4wNDg4IDIwLjE0NjQgMjAuODUzNkwxNC4xNDY0IDE0Ljg1MzZDMTMuOTUxMiAxNC42NTgzIDEzLjk1MTIgMTQuMzQxNyAxNC4xNDY0IDE0LjE0NjRaIiBmaWxsPSIjZmZmIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMTQuNUMxNCAxNC4yMjM5IDE0LjIyMzkgMTQgMTQuNSAxNEgxOS41QzE5Ljc3NjEgMTQgMjAgMTQuMjIzOSAyMCAxNC41QzIwIDE0Ljc3NjEgMTkuNzc2MSAxNSAxOS41IDE1SDE1VjE5LjVDMTUgMTkuNzc2MSAxNC43NzYxIDIwIDE0LjUgMjBDMTQuMjIzOSAyMCAxNCAxOS43NzYxIDE0IDE5LjVWMTQuNVoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==", li = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDIuNUM5IDIuMjIzODYgOS4yMjM4NiAyIDkuNSAySDE0LjVDMTQuNzc2MSAyIDE1IDIuMjIzODYgMTUgMi41QzE1IDIuNzc2MTQgMTQuNzc2MSAzIDE0LjUgM0g5LjVDOS4yMjM4NiAzIDkgMi43NzYxNCA5IDIuNVoiIGZpbGw9IiNmZmYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMUMxNi40MTgzIDIxIDIwIDE3LjQxODMgMjAgMTNDMjAgOC41ODE3MiAxNi40MTgzIDUgMTIgNUM3LjU4MTcyIDUgNCA4LjU4MTcyIDQgMTNDNCAxNy40MTgzIDcuNTgxNzIgMjEgMTIgMjFaTTEyIDIyQzE2Ljk3MDYgMjIgMjEgMTcuOTcwNiAyMSAxM0MyMSA4LjAyOTQ0IDE2Ljk3MDYgNCAxMiA0QzcuMDI5NDQgNCAzIDguMDI5NDQgMyAxM0MzIDE3Ljk3MDYgNy4wMjk0NCAyMiAxMiAyMloiIGZpbGw9IiNmZmYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wMzA1IDYuNDk0NzRDMTIuMDUgNi43NzAyIDExLjg0MjUgNy4wMDkzIDExLjU2NyA3LjAyODhDOC40NTMzOCA3LjI0OTIxIDUuOTkzNjUgOS44NTE2NCA1Ljk5MzY1IDEzLjAzMTFDNS45OTM2NSAxNi4zNTU1IDguNjgyMyAxOS4wNDg2IDExLjk5NjUgMTkuMDQ4NkMxMy43ODM4IDE5LjA0ODYgMTUuMzg4MyAxOC4yNjYzIDE2LjQ4ODggMTcuMDIyNkMxNi42NzE4IDE2LjgxNTggMTYuOTg3OCAxNi43OTY1IDE3LjE5NDYgMTYuOTc5NUMxNy40MDE0IDE3LjE2MjUgMTcuNDIwNyAxNy40Nzg1IDE3LjIzNzcgMTcuNjg1M0MxNS45NTU3IDE5LjEzNDEgMTQuMDgyNSAyMC4wNDg2IDExLjk5NjUgMjAuMDQ4NkM4LjEyNzkgMjAuMDQ4NiA0Ljk5MzY1IDE2LjkwNTcgNC45OTM2NSAxMy4wMzExQzQuOTkzNjUgOS4zMjQ5MSA3Ljg2MTAzIDYuMjg4NjQgMTEuNDk2NCA2LjAzMTNDMTEuNzcxOCA2LjAxMTggMTIuMDExIDYuMjE5MjkgMTIuMDMwNSA2LjQ5NDc0WiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjE3ODggMTAuNTM5M0MxMi4xNzg4IDEwLjI2MzIgMTEuOTU0OSAxMC4wMzkzIDExLjY3ODggMTAuMDM5M0MxMS40MDI2IDEwLjAzOTMgMTEuMTc4OCAxMC4yNjMyIDExLjE3ODggMTAuNTM5M1YxMy41MzM4QzExLjE3NTggMTMuNzA2NyAxMS4yNjI3IDEzLjg3NjUgMTEuNDIxNyAxMy45NzE4TDEzLjQyMTcgMTUuMTcxQzEzLjY1ODUgMTUuMzEzIDEzLjk2NTYgMTUuMjM2MSAxNC4xMDc2IDE0Ljk5OTNDMTQuMjQ5NiAxNC43NjI1IDE0LjE3MjcgMTQuNDU1NCAxMy45MzU5IDE0LjMxMzRMMTIuMTc4OCAxMy4yNTk4VjEwLjUzOTNaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=", gi = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41MDAxIDIwLjk4NjNDMTEuNjY1NiAyMC45OTU0IDExLjgzMjMgMjEgMTIuMDAwMSAyMUMxMi4xNjc4IDIxIDEyLjMzNDUgMjAuOTk1NCAxMi41MDAxIDIwLjk4NjNDMTUuNDEwMSAyMC44MjcgMTcuOTUxOSAxOS4yODUxIDE5LjQ4MDEgMTcuMDA2NEMxOS42NjU0IDE2LjczMDEgMTkuODM1OSAxNi40NDMgMTkuOTkwMiAxNi4xNDYyQzIwLjYzNTQgMTQuOTA1NCAyMSAxMy40OTUyIDIxIDExLjk5OTlDMjEgMTAuNTM4OCAyMC42NTE4IDkuMTU4OTkgMjAuMDMzOSA3LjkzODk0QzE5Ljg4MjcgNy42NDA0OCAxOS43MTU0IDcuMzUxNTYgMTkuNTMzMSA3LjA3MzM3QzE5LjIyMTkgNi41OTg0NSAxOC44NjY5IDYuMTU0NzYgMTguNDc0IDUuNzQ3OThDMTguODI4MiA1LjQ1MDQ0IDE5LjEzMDggNS4wODgzOCAxOS4zNjE5IDQuNjg4MDVDMjAuMDUyNSAzLjQ5MTkzIDE5LjY1NTEgMS45NDA5MyAxOC40NTkgMS4yNTAzNUMxNy4yNjI5IDAuNTU5NzczIDE1LjcyMSAwLjk5MTEyOCAxNS4wMzA0IDIuMTg3MjRDMTQuODE4MiAyLjU1NDgxIDE0LjY2NCAyLjk1ODM3IDE0LjU3NzggMy4zNzQ1NUMxMy43NjEyIDMuMTMwODQgMTIuODk1OSAyLjk5OTk1IDEyIDIuOTk5OTVDNy4wMjk0NCAyLjk5OTk1IDMgNy4wMjkzOSAzIDExLjk5OTlDMyAxNi44MDI3IDYuNzYyMDMgMjAuNzI2OSAxMS41MDAxIDIwLjk4NjNaTTE3Ljc2NTIgNS4wMzU4MUwxNS4wMjAyIDcuMjA2NDhMMTUuNTI3NiAzLjc0Mzk1QzE1LjU4MTUgMy4zNzU4NSAxNS43MDg1IDMuMDEyNzUgMTUuODk2NCAyLjY4NzI0QzE2LjMxNzMgMS45NTgyNCAxNy4yNTIzIDEuNzA4MzUgMTcuOTU5IDIuMTE2MzhDMTguNjY1NyAyLjUyNDQgMTguOTE2OCAzLjQ1OTA1IDE4LjQ5NTkgNC4xODgwNUMxOC4zMDc5IDQuNTEzNTUgMTguMDU3IDQuODA1MDUgMTcuNzY1MiA1LjAzNTgxWk0xNC42NTMxIDguNzcxNjVMMTcuNjg2NSA2LjM3MjlDMTguMDUgNi43NDAxOCAxOC4zNzgxIDcuMTQyNSAxOC42NjU0IDcuNTc0MzNMMTIuNTAwMSAxMS4xMzM5VjQuMDE1MzJDMTMuMTY3IDQuMDU2NDUgMTMuODExOCA0LjE3OTI5IDE0LjQyNDYgNC4zNzM5NUwxMy44NDgzIDguMzA2OTZDMTMuNzgyNyA4Ljc1NDcxIDE0LjI5ODIgOS4wNTIzNCAxNC42NTMxIDguNzcxNjVaTTExLjUwMDEgNC4wMTUzMkM4Ljg5MjMxIDQuMTc2MTEgNi42MjI1NyA1LjU4NjE5IDUuMjgxOTkgNy42NTQ0M0wxMS41MDAxIDExLjI0NDRWNC4wMTUzMlpNNC43OTE2IDguNTI2QzQuMjg0MzMgOS41NzY2NCA0IDEwLjc1NTEgNCAxMS45OTk5QzQgMTMuMjc4OSA0LjMwMDEzIDE0LjQ4NzggNC44MzM4MSAxNS41NkwxMC45MDQzIDEyLjA1NTJMNC43OTE2IDguNTI2Wk01LjMzNDYgMTYuNDI1NkM2LjY4MTQ4IDE4LjQ1MDEgOC45MjYxMSAxOS44MjU5IDExLjUwMDEgMTkuOTg0NlYxMi44NjU5TDUuMzM0NiAxNi40MjU2Wk0xOS4xNjYyIDguNDM5OUwxMi45MDQzIDEyLjA1NTJMMTkuMTIzIDE1LjY0NTVDMTkuNjgzNiAxNC41NTIzIDIwIDEzLjMxMzEgMjAgMTEuOTk5OUMyMCAxMC43MjEgMTkuNjk5OSA5LjUxMjA5IDE5LjE2NjIgOC40Mzk5Wk0xOC42MTE4IDE2LjUwNTFMMTIuNTAwMSAxMi45NzY1VjE5Ljk4NDZDMTUuMDQwMSAxOS44Mjc5IDE3LjI1OTQgMTguNDg2IDE4LjYxMTggMTYuNTA1MVoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==";
function fi({
  children: e,
  title: r,
  onClose: n,
  collapsedSize: t = { width: 250, height: 40 },
  defaultSize: o = { width: 500, height: 600 },
  defaultPosition: a = { x: 0, y: 0 },
  minSize: l = { width: 250, height: 250 },
  bounds: s = { top: 60, left: 0, right: 0, bottom: 0 }
}) {
  const f = Wr(null), [I, d] = st(o), [j, v] = st(!0), [S, m] = st({
    x: a.x + s.left,
    y: a.y + s.top
  }), E = Yt(() => ({
    width: j ? I.width : t.width,
    height: j ? I.height : t.height
  }), [j, I, t]), U = Yt(() => ({
    top: s.top,
    left: s.left,
    right: window.innerWidth - E.width - s.right,
    bottom: window.innerHeight - E.height - s.bottom
  }), [s, E, j]), k = (T) => {
    var Z;
    (Z = f.current) == null || Z.setPointerCapture(T.pointerId);
  }, P = (T) => {
    var Z;
    (Z = f.current) == null || Z.releasePointerCapture(T.pointerId);
  }, L = () => {
    const T = window.innerWidth - s.right - I.width, Z = window.innerHeight - s.bottom - I.height;
    (S.x > T || S.y > Z) && m({
      x: Math.min(S.x, T),
      y: Math.min(S.y, Z)
    }), v(!j);
  }, b = r === "timer" ? li : gi;
  return /* @__PURE__ */ G.jsx("div", { className: "draggable-modal-overlay", children: /* @__PURE__ */ G.jsx(
    ai,
    {
      handle: ".header-background",
      position: S,
      bounds: U,
      onStop: (T, Z) => {
        m({ x: Z.x, y: Z.y });
      },
      children: /* @__PURE__ */ G.jsxs(
        rn,
        {
          size: I,
          minWidth: j ? l.width : t.width,
          minHeight: j ? l.height : t.height,
          maxWidth: j ? void 0 : t.width,
          maxHeight: j ? void 0 : t.height,
          className: `draggable-modal ${j ? "expanded" : "collapsed"}`,
          enable: { right: j, bottom: j, bottomRight: j },
          onResizeStop: (T, Z, oe, ue) => {
            d({ width: I.width + ue.width, height: I.height + ue.height });
          },
          children: [
            /* @__PURE__ */ G.jsxs("div", { className: "draggable-header", children: [
              /* @__PURE__ */ G.jsx(
                "div",
                {
                  ref: f,
                  className: "header-background",
                  onPointerDown: k,
                  onPointerUp: P
                }
              ),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  type: "button",
                  className: "btn handle",
                  children: /* @__PURE__ */ G.jsx(
                    "img",
                    {
                      src: j ? si : b,
                      alt: "Drag handle"
                    }
                  )
                }
              ),
              /* @__PURE__ */ G.jsx("div", { className: "header-title", children: r }),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  type: "button",
                  className: "btn collapse",
                  onClick: L,
                  children: /* @__PURE__ */ G.jsx(
                    "img",
                    {
                      src: j ? ci : Mi,
                      alt: j ? "Collapse" : "Expand"
                    }
                  )
                }
              ),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  type: "button",
                  className: "btn close",
                  onClick: () => n(),
                  children: /* @__PURE__ */ G.jsx(
                    "img",
                    {
                      src: ui,
                      alt: "Close modal"
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ G.jsx(
              "div",
              {
                className: "draggable-content",
                children: e
              }
            )
          ]
        }
      )
    }
  ) });
}
const Ni = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5NTBfMTI1ODApIj4KPHBhdGggZD0iTTAgNy45OTk5OUMwIDMuNTgxNzIgMy41ODE3MiAwIDcuOTk5OTkgMEgyOEMzMi40MTgzIDAgMzYgMy41ODE3MiAzNiA3Ljk5OTk5VjI4QzM2IDMyLjQxODMgMzIuNDE4MyAzNiAyOCAzNkg3Ljk5OTk5QzMuNTgxNzIgMzYgMCAzMi40MTgzIDAgMjhWNy45OTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xOTUwXzEyNTgwKSIvPgo8cGF0aCBkPSJNMTUgNC41MzUxNkMxNSA0Ljg1MTU2IDE1IDUuNDg5NDcgMTUgNS43NjU2MUMxNSA2LjA0MTc1IDE1LjIyMzkgNi4yNjU2MSAxNS41IDYuMjY1NjFIMjAuNUMyMC43NzYxIDYuMjY1NjEgMjEgNi4wNDE3NSAyMSA1Ljc2NTYxQzIxIDUuNDg5NDcgMjEgNC45NTcwMyAyMSA0LjUzNTE2SDE1WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwIDE5LjI2NTZDMzAgMjUuODkzIDI0LjYyNzQgMzEuMjY1NiAxOCAzMS4yNjU2QzExLjM3MjYgMzEuMjY1NiA2LjAwMDAxIDI1Ljg5MyA2LjAwMDAxIDE5LjI2NTZDNi4wMDAwMSAxOC41ODI4IDYgMTguMTA1NSA2IDE3LjMzMkM2Ljk1Mzc2IDExLjY1ODUgMTIuMDU1NCA3LjI2NTYxIDE4IDcuMjY1NjFDMjQuMjI0IDcuMjY1NjEgMjkuNDAwMSAxMi4wMzkyIDMwIDE4LjEwNTVDMzAgMTguNTk3NyAzMCAxOC44NjIyIDMwIDE5LjI2NTZaTTE3LjUgMTUuMjY1NkMxNy43NzYxIDE1LjI2NTYgMTggMTUuNDg5NSAxOCAxNS43NjU2VjE5LjU1NDNMMjAuNTMxMSAyMS4wMTU2QzIwLjc3MDIgMjEuMTUzNyAyMC44NTIyIDIxLjQ1OTUgMjAuNzE0MSAyMS42OTg2QzIwLjU3NiAyMS45Mzc4IDIwLjI3MDIgMjIuMDE5NyAyMC4wMzExIDIxLjg4MTZMMTcuNDMzIDIwLjM4MTZDMTcuMzU0MSAyMC4zMzYxIDE3LjI5MjQgMjAuMjcyMyAxNy4yNSAyMC4xOTg3QzE3LjEwMDUgMjAuMTEyMiAxNyAxOS45NTA3IDE3IDE5Ljc2NTZWMTUuNzY1NkMxNyAxNS40ODk1IDE3LjIyMzkgMTUuMjY1NiAxNy41IDE1LjI2NTZaTTE4IDEwLjI2NTZDMTggMTAuNTQxOCAxNy43NzU2IDEwLjc2NDEgMTcuNSAxMC43ODAxQzEzLjAzODMgMTEuMDM4OSA5LjUwMDAxIDE0LjczOTEgOS41MDAwMSAxOS4yNjU2QzkuNTAwMDEgMjMuOTYgMTMuMzA1NiAyNy43NjU2IDE4IDI3Ljc2NTZDMjAuNzc2OCAyNy43NjU2IDIzLjI0MjkgMjYuNDM0NCAyNC43OTQ4IDI0LjM3MzVDMjQuOTYwOSAyNC4xNTI5IDI1LjI3MDEgMjQuMDg5NCAyNS41IDI0LjI0MjNDMjUuNzMgMjQuMzk1MiAyNS43OTM1IDI0LjcwNjUgMjUuNjI4NyAyNC45MjgxQzIzLjg5OCAyNy4yNTYgMjEuMTI1NCAyOC43NjU2IDE4IDI4Ljc2NTZDMTIuNzUzMyAyOC43NjU2IDguNTAwMDEgMjQuNTEyMyA4LjUwMDAxIDE5LjI2NTZDOC41MDAwMSAxNC4xODY2IDEyLjQ4NTggMTAuMDM4NSAxNy41MDAxIDkuNzc4NTRDMTcuNzc1OSA5Ljc2NDI0IDE4IDkuOTg5NDcgMTggMTAuMjY1NloiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTE1IDQuNTM1MTZDMTUgNC44NTE1NiAxNSA1LjEzNzkgMTUgNS40MTQwNUMxNSA1LjY5MDE5IDE1LjIyMzkgNS45MTQwNSAxNS41IDUuOTE0MDVIMjAuNUMyMC43NzYxIDUuOTE0MDUgMjEgNS42OTAxOSAyMSA1LjQxNDA1QzIxIDUuMTM3OSAyMSA0Ljg1MTU2IDIxIDQuNTM1MTZIMTVaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAgMTguOTE0QzMwIDI1LjU0MTUgMjQuNjI3NCAzMC45MTQgMTggMzAuOTE0QzExLjM3MjYgMzAuOTE0IDYgMjUuNTQxNSA2IDE4LjkxNEM2IDEyLjI4NjYgMTEuMzcyNiA2LjkxNDA1IDE4IDYuOTE0MDVDMjQuMjQ4MSA2LjkxNDA1IDI5LjQzMjkgMTEuOTAwMSAzMCAxOEMzMCAxOC4zODY3IDMwIDE4LjUzNDcgMzAgMTguOTE0Wk0xNy41IDE0LjkxNEMxNy43NzYxIDE0LjkxNCAxOCAxNS4xMzc5IDE4IDE1LjQxNFYxOS4yMDI3TDIwLjUzMTEgMjAuNjY0QzIwLjc3MDIgMjAuODAyMSAyMC44NTIyIDIxLjEwNzkgMjAuNzE0MSAyMS4zNDcxQzIwLjU3NiAyMS41ODYyIDIwLjI3MDIgMjEuNjY4MSAyMC4wMzExIDIxLjUzMDFMMTcuNDMzIDIwLjAzMDFDMTcuMzU0MSAxOS45ODQ1IDE3LjI5MjQgMTkuOTIwNyAxNy4yNDk5IDE5Ljg0NzFDMTcuMTAwNSAxOS43NjA3IDE3IDE5LjU5OTEgMTcgMTkuNDE0VjE1LjQxNEMxNyAxNS4xMzc5IDE3LjIyMzkgMTQuOTE0IDE3LjUgMTQuOTE0Wk0xOCA5LjkxNDA1QzE4IDEwLjE5MDIgMTcuNzc1NiAxMC40MTI1IDE3LjUgMTAuNDI4NUMxMy4wMzgzIDEwLjY4NzMgOS41IDE0LjM4NzUgOS41IDE4LjkxNEM5LjUgMjMuNjA4NSAxMy4zMDU2IDI3LjQxNCAxOCAyNy40MTRDMjAuNzc2OCAyNy40MTQgMjMuMjQyOSAyNi4wODI5IDI0Ljc5NDcgMjQuMDIxOUMyNC45NjA4IDIzLjgwMTMgMjUuMjcgMjMuNzM3OSAyNS41IDIzLjg5MDdDMjUuNzMgMjQuMDQzNiAyNS43OTM0IDI0LjM1NDkgMjUuNjI4NyAyNC41NzY1QzIzLjg5OCAyNi45MDQ0IDIxLjEyNTQgMjguNDE0IDE4IDI4LjQxNEMxMi43NTMzIDI4LjQxNCA4LjUgMjQuMTYwOCA4LjUgMTguOTE0QzguNSAxMy44MzUgMTIuNDg1OCA5LjY4NjkyIDE3LjUwMDEgOS40MjY5N0MxNy43NzU5IDkuNDEyNjggMTggOS42Mzc5MSAxOCA5LjkxNDA1WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8cGF0aCBkPSJNMTUgNC40OTIxN0MxNSA0LjgxNjQxIDE1IDQuNzE2MDMgMTUgNC45OTIxN0MxNSA1LjI2ODMxIDE1LjIyMzkgNS40OTIxNyAxNS41IDUuNDkyMTdIMjAuNUMyMC43NzYxIDUuNDkyMTcgMjEgNS4yNjgzMSAyMSA0Ljk5MjE3QzIxIDQuNzE2MDMgMjEgNC42NzU3OCAyMSA0LjQ5MjE3SDE1WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwIDE4LjQ5MjJDMzAgMjUuMTE5NiAyNC42Mjc0IDMwLjQ5MjIgMTggMzAuNDkyMkMxMS4zNzI2IDMwLjQ5MjIgNiAyNS4xMTk2IDYgMTguNDkyMkM2IDExLjg2NDggMTEuMzcyNiA2LjQ5MjE3IDE4IDYuNDkyMTdDMjQuMDY2OCA2LjQ5MjE3IDI5LjE5NSAxMi4wODQyIDMwIDE3LjkyOTdDMzAgMTguMjgxMiAzMCAxNy45MzE2IDMwIDE4LjQ5MjJaTTE3LjUgMTQuNDkyMkMxNy43NzYxIDE0LjQ5MjIgMTggMTQuNzE2IDE4IDE0Ljk5MjJWMTguNzgwOEwyMC41MzExIDIwLjI0MjJDMjAuNzcwMiAyMC4zODAyIDIwLjg1MjIgMjAuNjg2IDIwLjcxNDEgMjAuOTI1MkMyMC41NzYgMjEuMTY0MyAyMC4yNzAyIDIxLjI0NjMgMjAuMDMxMSAyMS4xMDgyTDE3LjQzMyAxOS42MDgyQzE3LjM1NDEgMTkuNTYyNyAxNy4yOTI0IDE5LjQ5ODkgMTcuMjQ5OSAxOS40MjUzQzE3LjEwMDUgMTkuMzM4OCAxNyAxOS4xNzcyIDE3IDE4Ljk5MjJWMTQuOTkyMkMxNyAxNC43MTYgMTcuMjIzOSAxNC40OTIyIDE3LjUgMTQuNDkyMlpNMTggOS40OTIxN0MxOCA5Ljc2ODMxIDE3Ljc3NTYgOS45OTA2NCAxNy41IDEwLjAwNjZDMTMuMDM4MyAxMC4yNjU1IDkuNSAxMy45NjU2IDkuNSAxOC40OTIyQzkuNSAyMy4xODY2IDEzLjMwNTYgMjYuOTkyMiAxOCAyNi45OTIyQzIwLjc3NjggMjYuOTkyMiAyMy4yNDI5IDI1LjY2MSAyNC43OTQ3IDIzLjYwMDFDMjQuOTYwOCAyMy4zNzk1IDI1LjI3IDIzLjMxNiAyNS41IDIzLjQ2ODlDMjUuNzMgMjMuNjIxOCAyNS43OTM0IDIzLjkzMyAyNS42Mjg3IDI0LjE1NDZDMjMuODk4IDI2LjQ4MjUgMjEuMTI1NCAyNy45OTIyIDE4IDI3Ljk5MjJDMTIuNzUzMyAyNy45OTIyIDguNSAyMy43Mzg5IDguNSAxOC40OTIyQzguNSAxMy40MTMxIDEyLjQ4NTggOS4yNjUwNSAxNy41MDAxIDkuMDA1MUMxNy43NzU5IDguOTkwOCAxOCA5LjIxNjAzIDE4IDkuNDkyMTdaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxwYXRoIGQ9Ik0xNS41IDMuOTk5OThDMTUuMjIzOSAzLjk5OTk4IDE1IDQuMjIzODQgMTUgNC40OTk5OEMxNSA0Ljc3NjEzIDE1LjIyMzkgNC45OTk5OCAxNS41IDQuOTk5OThIMjAuNUMyMC43NzYxIDQuOTk5OTggMjEgNC43NzYxMyAyMSA0LjQ5OTk4QzIxIDQuMjIzODQgMjAuNzc2MSAzLjk5OTk4IDIwLjUgMy45OTk5OEgxNS41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMCAxOEMzMCAyNC42Mjc0IDI0LjYyNzQgMzAgMTggMzBDMTEuMzcyNiAzMCA2IDI0LjYyNzQgNiAxOEM2IDExLjM3MjYgMTEuMzcyNiA1Ljk5OTk4IDE4IDUuOTk5OThDMjQuNjI3NCA1Ljk5OTk4IDMwIDExLjM3MjYgMzAgMThaTTE3LjUgMTRDMTcuNzc2MSAxNCAxOCAxNC4yMjM4IDE4IDE0LjVWMTguMjg4N0wyMC41MzExIDE5Ljc1QzIwLjc3MDIgMTkuODg4MSAyMC44NTIyIDIwLjE5MzkgMjAuNzE0MSAyMC40MzNDMjAuNTc2IDIwLjY3MjEgMjAuMjcwMiAyMC43NTQxIDIwLjAzMTEgMjAuNjE2TDE3LjQzMyAxOS4xMTZDMTcuMzU0MSAxOS4wNzA1IDE3LjI5MjQgMTkuMDA2NyAxNy4yNDk5IDE4LjkzMzFDMTcuMTAwNSAxOC44NDY2IDE3IDE4LjY4NSAxNyAxOC41VjE0LjVDMTcgMTQuMjIzOCAxNy4yMjM5IDE0IDE3LjUgMTRaTTE4IDguOTk5OThDMTggOS4yNzYxMyAxNy43NzU2IDkuNDk4NDYgMTcuNSA5LjUxNDQ1QzEzLjAzODMgOS43NzMyOCA5LjUgMTMuNDczNCA5LjUgMThDOS41IDIyLjY5NDQgMTMuMzA1NiAyNi41IDE4IDI2LjVDMjAuNzc2OCAyNi41IDIzLjI0MjkgMjUuMTY4OCAyNC43OTQ3IDIzLjEwNzlDMjQuOTYwOCAyMi44ODczIDI1LjI3IDIyLjgyMzggMjUuNSAyMi45NzY3QzI1LjczIDIzLjEyOTYgMjUuNzkzNCAyMy40NDA4IDI1LjYyODcgMjMuNjYyNUMyMy44OTggMjUuOTkwNCAyMS4xMjU0IDI3LjUgMTggMjcuNUMxMi43NTMzIDI3LjUgOC41IDIzLjI0NjcgOC41IDE4QzguNSAxMi45MjEgMTIuNDg1OCA4Ljc3Mjg2IDE3LjUwMDEgOC41MTI5MUMxNy43NzU5IDguNDk4NjEgMTggOC43MjM4NCAxOCA4Ljk5OTk4WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE5NTBfMTI1ODAiIHgxPSIxOCIgeTE9IjAiIHgyPSIxOCIgeTI9IjM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjM4MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjAzODlGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTk1MF8xMjU4MCI+CjxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K", Di = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE5NTBfMTI1ODEpIj4KPHBhdGggZD0iTTAgOEMwIDMuNTgxNzIgMy41ODE3MiAwIDggMEgyOEMzMi40MTgzIDAgMzYgMy41ODE3MiAzNiA4VjI4QzM2IDMyLjQxODMgMzIuNDE4MyAzNiAyOCAzNkg4QzMuNTgxNzIgMzYgMCAzMi40MTgzIDAgMjhWOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xOTUwXzEyNTgxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjc1NzIgMTQuNjkzOEwyNC43OTg0IDExLjQ5ODFDMjUuMjEzMyAxMS4xNyAyNS41NjYyIDEwLjc1OTQgMjUuODMwNiAxMC4zMDEzQzI1Ljg0NzMgMTAuMjcyNSAyNS44NjMzIDEwLjI0MzQgMjUuODc4OCAxMC4yMTQyQzI4LjQwNCAxMi40MTQxIDMwIDE1LjY1MzUgMzAgMTkuMjY1N0MzMCAyNS43MzIzIDI0Ljg4NDkgMzEuMDA0MyAxOC40OCAzMS4yNTYyVjMxLjI2NTdIMTcuNTJWMzEuMjU2MkMxMS4xMTUxIDMxLjAwNDMgNiAyNS43MzIzIDYgMTkuMjY1N0M2IDEyLjYzODMgMTEuMDkxMyA2Ljc0OTk5IDE3LjcxODcgNi43NDk5OUMxOC4yNjcyIDYuNzQ5OTkgMjAuNjk2NiA2LjM2MjM2IDIxLjIyNTUgNi40MzM2MUMyMS4yMjU1IDYuOTYwOTcgMjEuMjI1NSA3LjMxMjUyIDIxLjIyNTUgNy43MDQxQzIwLjk3NTUgOC4xNTAxNSAyMC44MDU2IDguNjQ0MzMgMjAuNzMxNSA5LjE1MDA4TDE5Ljk4NDYgMTQuMjQ3N0MxOS45MjE2IDE0LjY3NzUgMjAuNDE2NSAxNC45NjMzIDIwLjc1NzIgMTQuNjkzOFpNMTcuNTIgMjkuNzMyOVYyMC4wMTdMOC45NDg2NyAyNS41ODgzQzExLjQ5NjEgMjcuOTg0NCAxMy45NzI3IDI5LjU4MTIgMTcuNTIgMjkuNzMyOVpNOC40MzI4OCAyNC4yODY0TDE3LjA1NjYgMTguNjgxTDE2LjM4MjggMTguNzM1Mkw4LjUxMTQ3IDEzLjYxODhDNy41MjYxIDE1LjI3MSA2Ljk2IDE3LjIwMjIgNi45NiAxOS4yNjU3QzYuOTYgMjEuMjczNiA3LjQ5NjA2IDIyLjY2NDIgOC40MzI4OCAyNC4yODY0Wk05LjAzODU2IDEyLjMyNDJMMTcuNTIgMTcuODM3MlY4LjIzNTg5QzE0LjAyNzggOC4zODUyOCAxMC45NTU5IDkuNjY0NzYgOS4wMzg1NiAxMi4zMjQyWk0yNy40NTM0IDEzLjU2MDJMMTkuNjE3MiAxOC42NTM4TDE4LjgxODEgMTguNjgxTDI3LjUzMjggMjQuMzQ1NUMyOC40OTA4IDIyLjcwOTkgMjkuMDQgMjEuMjk4IDI5LjA0IDE5LjI2NTdDMjkuMDQgMTcuMTc3OCAyOC40NjA0IDE1LjIyNTMgMjcuNDUzNCAxMy41NjAyWk0yNy4wMTIgMjUuNjQ0MUwxOC40OCAyMC4wOTg0TDE4LjQ4IDI5LjczMjlDMjIuMDAzIDI5LjU4MjIgMjQuNTAzOSAyOC4xMjUgMjcuMDEyIDI1LjY0NDFaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxwYXRoIGQ9Ik0yMS4xMDk2IDEzLjE5MTJMMjQuMjAyOSAxMC43NDUxQzI0LjUyMTIgMTAuNDkzNCAyNC43OTQ1IDEwLjE3NTkgMjQuOTk5MiA5LjgyMTMyQzI1LjI0MjIgOS40NTcwMiAyNS4yMjgzIDguNzc4NTQgMjUuMjI4MyA3LjczNDM3QzI0LjQzMzcgNy4yNzU2MiAyMi41NDA0IDcuMzIxODIgMjIuMDY5MyA4LjEzNzc4QzIxLjg2NDYgOC40OTIzMiAyMS43NDAyIDguODg3ODIgMjEuNjgxNCA5LjI4OTI2TDIxLjEwOTYgMTEuOTE4VjEzLjE5MTJaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNzU3MiAxNC4zNDIyTDI0Ljc5ODQgMTEuMTQ2NUMyNS4yMTMzIDEwLjgxODUgMjUuNTY2MiAxMC40MDc4IDI1LjgzMDYgOS45NDk3N0MyNS44NDczIDkuOTIwOTEgMjUuODYzMyA5Ljg5MTg2IDI1Ljg3ODggOS44NjI2M0MyOC40MDQgMTIuMDYyNiAzMCAxNS4zMDE5IDMwIDE4LjkxNDFDMzAgMjUuMzgwNyAyNC44ODQ5IDMwLjY1MjcgMTguNDggMzAuOTA0N1YzMC45MTQxSDE3LjUyVjMwLjkwNDdDMTEuMTE1MSAzMC42NTI3IDYgMjUuMzgwNyA2IDE4LjkxNDFDNiAxMi4yODY3IDExLjM3MjYgNi45MTQwOCAxOCA2LjkxNDA4QzE4LjkzOTcgNi45MTQwOCAyMC4zNDggNi4yMjkzNCAyMS4yMjU1IDYuNDMzNkMyMS4yMjU1IDYuNzE0ODQgMjEuMjI1NSA3LjE3MTg4IDIxLjIyNTUgNy4zNTI1NEMyMC45NzU1IDcuNzk4NiAyMC44MDU2IDguMjkyNzcgMjAuNzMxNSA4Ljc5ODUyTDE5Ljk4NDYgMTMuODk2MUMxOS45MjE2IDE0LjMyNiAyMC40MTY1IDE0LjYxMTcgMjAuNzU3MiAxNC4zNDIyWk0xNy41MiAyOS45NDM4VjE5LjY2NTRMOC45NDg2NyAyNS4yMzY3QzEwLjg1OSAyNy45NjY1IDEzLjk3MjcgMjkuNzkyMSAxNy41MiAyOS45NDM4Wk04LjQzMjg4IDI0LjQyN0wxNy4wNTY2IDE4LjgyMTZMOC41MTE0NyAxMy4yNjcyQzcuNTI2MSAxNC45MTk0IDYuOTYgMTYuODUwNiA2Ljk2IDE4LjkxNDFDNi45NiAyMC45MjIgNy40OTYwNiAyMi44MDQ4IDguNDMyODggMjQuNDI3Wk05LjAzODU2IDEyLjQ2NDlMMTcuNTIgMTcuOTc3OFY3Ljg4NDMzQzE0LjAyNzggOC4wMzM3MiAxMC45NTU5IDkuODA1NCA5LjAzODU2IDEyLjQ2NDlaTTI3LjQ1MzQgMTMuMjA4N0wxOC44MTgxIDE4LjgyMTZMMjcuNTMyOCAyNC40ODYxQzI4LjQ5MDggMjIuODUwNiAyOS4wNCAyMC45NDY1IDI5LjA0IDE4LjkxNDFDMjkuMDQgMTYuODI2MiAyOC40NjA0IDE0Ljg3MzcgMjcuNDUzNCAxMy4yMDg3Wk0yNy4wMTIgMjUuMjkyNkwxOC40OCAxOS43NDY4TDE4LjQ4IDI5Ljk0MzhDMjIuMDAzIDI5Ljc5MzEgMjUuMDk4NCAyNy45OTEzIDI3LjAxMiAyNS4yOTI2WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8cGF0aCBkPSJNMjEuMTMxOCAxMi44TDI0LjIyNTEgMTAuMzUzOUMyNC41NDMzIDEwLjEwMjIgMjQuODE2NyA5Ljc4NDY4IDI1LjAyMTQgOS40MzAxM0MyNS4yOSA4Ljk2NDg0IDI1LjIyOTIgOC4xOTE0MSAyNS4yMjkyIDcuNjk0NzVDMjUuMDkzNSA3LjM2MTA3IDI0Ljc0NzMgNy4yOTc1NiAyNC40MTgzIDcuMTA3NkMyMy42MjM3IDYuNjQ4ODYgMjIuNTc2NSA2LjkzMDYzIDIyLjEwNTQgNy43NDY1OUMyMS45MDA3IDguMTAxMTQgMjEuNzYyNCA4LjQ5NjYzIDIxLjcwMzUgOC44OTgwN0wyMS4xMzE4IDExLjg3ODNWMTIuOFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC43NTcyIDEzLjkyMDRMMjQuNzk4NCAxMC43MjQ3QzI1LjIxMzMgMTAuMzk2NiAyNS41NjYyIDkuOTg1OTQgMjUuODMwNiA5LjUyNzg5QzI1Ljg0NzMgOS40OTkwNCAyNS44NjMzIDkuNDY5OTkgMjUuODc4OCA5LjQ0MDc2QzI4LjQwNCAxMS42NDA3IDMwIDE0Ljg4MDEgMzAgMTguNDkyMkMzMCAyNC45NTg5IDI0Ljg4NDkgMzAuMjMwOCAxOC40OCAzMC40ODI4VjMwLjQ5MjJIMTcuNTJWMzAuNDgyOEMxMS4xMTUxIDMwLjIzMDggNiAyNC45NTg5IDYgMTguNDkyMkM2IDExLjg2NDggMTEuMzcyNiA2LjQ5MjIxIDE4IDYuNDkyMjFDMTkuMDMxNyA2LjQ5MjIxIDIwLjI3MDIgNi4xODg3NiAyMS4yMjU1IDYuNDMzNjFDMjEuMjI1NSA2LjcxNDg0IDIxLjIyNTUgNi44MjAzMSAyMS4yMjU1IDYuOTMwNjdDMjAuOTc1NSA3LjM3NjcyIDIwLjgwNTYgNy44NzA5IDIwLjczMTUgOC4zNzY2NEwxOS45ODQ2IDEzLjQ3NDNDMTkuOTIxNiAxMy45MDQxIDIwLjQxNjUgMTQuMTg5OCAyMC43NTcyIDEzLjkyMDRaTTE3LjUyIDI5LjUyMlYxOS4yNDM1TDguOTQ4NjcgMjQuODE0OUMxMC44NTkgMjcuNTQ0NiAxMy45NzI3IDI5LjM3MDIgMTcuNTIgMjkuNTIyWk04LjQzMjg4IDI0LjAwNTJMMTcuMDU2NiAxOC4zOTk3TDguNTExNDcgMTIuODQ1NEM3LjUyNjEgMTQuNDk3NSA2Ljk2IDE2LjQyODggNi45NiAxOC40OTIyQzYuOTYgMjAuNTAwMiA3LjQ5NjA2IDIyLjM4MjkgOC40MzI4OCAyNC4wMDUyWk05LjAzODU2IDEyLjA0M0wxNy41MiAxNy41NTU5VjcuNDYyNDZDMTQuMDI3OCA3LjYxMTg1IDEwLjk1NTkgOS4zODM1MiA5LjAzODU2IDEyLjA0M1pNMjcuNDUzNCAxMi43ODY4TDE4LjgxODEgMTguMzk5N0wyNy41MzI4IDI0LjA2NDJDMjguNDkwOCAyMi40Mjg3IDI5LjA0IDIwLjUyNDYgMjkuMDQgMTguNDkyMkMyOS4wNCAxNi40MDQzIDI4LjQ2MDQgMTQuNDUxOCAyNy40NTM0IDEyLjc4NjhaTTI3LjAxMiAyNC44NzA3TDE4LjQ4IDE5LjMyNDlMMTguNDggMjkuNTIyQzIyLjAwMyAyOS4zNzEyIDI1LjA5ODQgMjcuNTY5NCAyNy4wMTIgMjQuODcwN1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTIxLjEwOTYgMTIuNDE3OEwyNC4yMDI5IDkuOTcxNjRDMjQuNTIxMiA5LjcxOTk4IDI0Ljc5NDUgOS40MDI0NCAyNC45OTkyIDkuMDQ3ODlDMjUuMjIzNyA4LjY1OTEyIDI1LjIyNzkgOC4xOTE0MSAyNS4yMjc5IDcuNzM0MzhDMjUuMTI4IDcuMjg5MDggMjQuODEyMSA2Ljk2NTUzIDI0LjM5NjIgNi43MjUzNkMyMy42MDE2IDYuMjY2NjEgMjIuNTU0MyA2LjU0ODM5IDIyLjA4MzIgNy4zNjQzNEMyMS44Nzg1IDcuNzE4ODkgMjEuNzQwMiA4LjExNDM5IDIxLjY4MTQgOC41MTU4MkwyMS4xMDk2IDExLjkxOFYxMi40MTc4WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjc1NzIgMTMuNDI4MkwyNC43OTg0IDEwLjIzMjVDMjUuMjEzMyA5LjkwNDM5IDI1LjU2NjIgOS40OTM3NSAyNS44MzA2IDkuMDM1N0MyNS44NDczIDkuMDA2ODUgMjUuODYzMyA4Ljk3NzggMjUuODc4OCA4Ljk0ODU3QzI4LjQwNCAxMS4xNDg1IDMwIDE0LjM4NzkgMzAgMThDMzAgMjQuNDY2NyAyNC44ODQ5IDI5LjczODYgMTguNDggMjkuOTkwNlYzMEgxNy41MlYyOS45OTA2QzExLjExNTEgMjkuNzM4NiA2IDI0LjQ2NjcgNiAxOEM2IDExLjM3MjYgMTEuMzcyNiA2LjAwMDAyIDE4IDYuMDAwMDJDMTkuMTE3NCA2LjAwMDAyIDIwLjE5OTIgNi4xNTI3NSAyMS4yMjU1IDYuNDM4NDhDMjAuOTc1NSA2Ljg4NDUzIDIwLjgwNTYgNy4zNzg3IDIwLjczMTUgNy44ODQ0NUwxOS45ODQ2IDEyLjk4MjFDMTkuOTIxNiAxMy40MTE5IDIwLjQxNjUgMTMuNjk3NiAyMC43NTcyIDEzLjQyODJaTTE3LjUyIDI5LjAyOThWMTguNzUxM0w4Ljk0ODY3IDI0LjMyMjdDMTAuODU5IDI3LjA1MjQgMTMuOTcyNyAyOC44NzggMTcuNTIgMjkuMDI5OFpNOC40MzI4OCAyMy41MTNMMTcuMDU2NiAxNy45MDc1TDguNTExNDcgMTIuMzUzMkM3LjUyNjEgMTQuMDA1MyA2Ljk2IDE1LjkzNjYgNi45NiAxOEM2Ljk2IDIwLjAwOCA3LjQ5NjA2IDIxLjg5MDcgOC40MzI4OCAyMy41MTNaTTkuMDM4NTYgMTEuNTUwOEwxNy41MiAxNy4wNjM3VjYuOTcwMjZDMTQuMDI3OCA3LjExOTY1IDEwLjk1NTkgOC44OTEzMyA5LjAzODU2IDExLjU1MDhaTTI3LjQ1MzQgMTIuMjk0NkwxOC44MTgxIDE3LjkwNzVMMjcuNTMyOCAyMy41NzJDMjguNDkwOCAyMS45MzY1IDI5LjA0IDIwLjAzMjQgMjkuMDQgMThDMjkuMDQgMTUuOTEyMSAyOC40NjA0IDEzLjk1OTYgMjcuNDUzNCAxMi4yOTQ2Wk0yNy4wMTIgMjQuMzc4NUwxOC40OCAxOC44MzI3TDE4LjQ4IDI5LjAyOThDMjIuMDAzIDI4Ljg3OTEgMjUuMDk4NCAyNy4wNzczIDI3LjAxMiAyNC4zNzg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxLjEwOTYgMTEuOTI1NkwyNC4yMDI5IDkuNDc5NDVDMjQuNTIxMiA5LjIyNzc5IDI0Ljc5NDUgOC45MTAyNCAyNC45OTkyIDguNTU1N0MyNS40NzAzIDcuNzM5NzQgMjUuMTkwNyA2LjY5MTkxIDI0LjM5NjIgNi4yMzMxN0MyMy42MDE2IDUuNzc0NDIgMjIuNTU0MyA2LjA1NjE5IDIyLjA4MzIgNi44NzIxNUMyMS44Nzg1IDcuMjI2NyAyMS43NDAyIDcuNjIyMiAyMS42ODE0IDguMDIzNjNMMjEuMTA5NiAxMS45MjU2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE5NTBfMTI1ODEiIHgxPSIxOCIgeTE9IjAiIHgyPSIxOCIgeTI9IjM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGNTYwNjMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTgwNkY1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTk1MF8xMjU4MSI+CjxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K", yi = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4xNjY3IDE1LjgzMzNDMjkuNjI2OSAxNS44MzMzIDMwIDE1LjQ2MDIgMzAgMTVDMzAgMTQuNTM5OCAyOS42MjY5IDE0LjE2NjcgMjkuMTY2NyAxNC4xNjY3TDIyLjUgMTQuMTY2N0MyMi4wMzk4IDE0LjE2NjcgMjEuNjY2NyAxNC41Mzk4IDIxLjY2NjcgMTVDMjEuNjY2NyAxNS40NjAyIDIyLjAzOTggMTUuODMzMyAyMi41IDE1LjgzMzNMMjkuMTY2NyAxNS44MzMzWk0yNC40Mjc4IDI1LjYwNjVDMjQuNzUzMyAyNS45MzIgMjUuMjgwOSAyNS45MzIgMjUuNjA2MyAyNS42MDY1QzI1LjkzMTggMjUuMjgxMSAyNS45MzE4IDI0Ljc1MzUgMjUuNjA2MyAyNC40MjhMMjAuODkyMyAxOS43MTRDMjAuNTY2OSAxOS4zODg2IDIwLjAzOTIgMTkuMzg4NiAxOS43MTM4IDE5LjcxNEMxOS4zODg0IDIwLjAzOTQgMTkuMzg4NCAyMC41NjcxIDE5LjcxMzggMjAuODkyNUwyNC40Mjc4IDI1LjYwNjVaTTE1IC02LjU1NjcxZS0wN0MxNS40NjAyIC02LjM1NTUzZS0wNyAxNS44MzMzIDAuMzczMDk1IDE1LjgzMzMgMC44MzMzMzNMMTUuODMzMyA3LjVDMTUuODMzMyA3Ljk2MDI0IDE1LjQ2MDIgOC4zMzMzMyAxNSA4LjMzMzMzQzE0LjUzOTggOC4zMzMzMyAxNC4xNjY3IDcuOTYwMjQgMTQuMTY2NyA3LjVMMTQuMTY2NyAwLjgzMzMzM0MxNC4xNjY3IDAuMzczMDk1IDE0LjUzOTggLTYuNzU3ODhlLTA3IDE1IC02LjU1NjcxZS0wN1pNMjUuNjA2MyA1LjU3MTk2QzI1LjkzMTggNS4yNDY1MyAyNS45MzE4IDQuNzE4ODkgMjUuNjA2MyA0LjM5MzQ1QzI1LjI4MDkgNC4wNjgwMSAyNC43NTMzIDQuMDY4MDEgMjQuNDI3OCA0LjM5MzQ1TDE5LjcxMzggOS4xMDc0OUMxOS4zODg0IDkuNDMyOTMgMTkuMzg4NCA5Ljk2MDU3IDE5LjcxMzggMTAuMjg2QzIwLjAzOTIgMTAuNjExNCAyMC41NjY5IDEwLjYxMTQgMjAuODkyMyAxMC4yODZMMjUuNjA2MyA1LjU3MTk2Wk04LjMzMzMzIDE1QzguMzMzMzMgMTUuNDYwMiA3Ljk2MDI0IDE1LjgzMzMgNy41IDE1LjgzMzNMMC44MzMzMzMgMTUuODMzM0MwLjM3MzA5NiAxNS44MzMzIC02Ljc1Nzg4ZS0wNyAxNS40NjAyIC02LjU1NjcxZS0wNyAxNUMtNi4zNTU1M2UtMDcgMTQuNTM5OCAwLjM3MzA5NiAxNC4xNjY3IDAuODMzMzMzIDE0LjE2NjdMNy41IDE0LjE2NjdDNy45NjAyNCAxNC4xNjY3IDguMzMzMzMgMTQuNTM5OCA4LjMzMzMzIDE1Wk05LjEwNzIgMTAuMjg1OUM5LjQzMjYzIDEwLjYxMTMgOS45NjAyNyAxMC42MTEzIDEwLjI4NTcgMTAuMjg1OUMxMC42MTExIDkuOTYwNDcgMTAuNjExMSA5LjQzMjg0IDEwLjI4NTcgOS4xMDc0TDUuNTcxNjYgNC4zOTMzNUM1LjI0NjIzIDQuMDY3OTIgNC43MTg1OSA0LjA2NzkyIDQuMzkzMTUgNC4zOTMzNUM0LjA2NzcxIDQuNzE4NzkgNC4wNjc3MSA1LjI0NjQzIDQuMzkzMTUgNS41NzE4Nkw5LjEwNzIgMTAuMjg1OVpNMTUgMjEuNjY2N0MxNS40NjAyIDIxLjY2NjcgMTUuODMzMyAyMi4wMzk4IDE1LjgzMzMgMjIuNUwxNS44MzMzIDI5LjE2NjdDMTUuODMzMyAyOS42MjY5IDE1LjQ2MDIgMzAgMTUgMzBDMTQuNTM5OCAzMCAxNC4xNjY3IDI5LjYyNjkgMTQuMTY2NyAyOS4xNjY3TDE0LjE2NjcgMjIuNUMxNC4xNjY3IDIyLjAzOTggMTQuNTM5OCAyMS42NjY3IDE1IDIxLjY2NjdaTTEwLjI4NTcgMjAuODkyNkMxMC42MTExIDIwLjU2NzIgMTAuNjExMSAyMC4wMzk1IDEwLjI4NTcgMTkuNzE0MUM5Ljk2MDI3IDE5LjM4ODcgOS40MzI2MyAxOS4zODg2IDkuMTA3MiAxOS43MTQxTDQuMzkzMTUgMjQuNDI4MUM0LjA2NzcxIDI0Ljc1MzYgNC4wNjc3MSAyNS4yODEyIDQuMzkzMTUgMjUuNjA2NkM0LjcxODU5IDI1LjkzMjEgNS4yNDYyMiAyNS45MzIxIDUuNTcxNjYgMjUuNjA2NkwxMC4yODU3IDIwLjg5MjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
function Ii({ type: e = "timer" }) {
  return /* @__PURE__ */ G.jsxs("div", { className: "app-frame-splash loading-splash", children: [
    /* @__PURE__ */ G.jsx("div", { className: "app-icon", children: e === "timer" ? /* @__PURE__ */ G.jsx("img", { src: Ni, alt: "Timer icon" }) : /* @__PURE__ */ G.jsx("img", { src: Di, alt: "Spinner icon" }) }),
    /* @__PURE__ */ G.jsx("div", { className: "loading-icon", children: /* @__PURE__ */ G.jsx("img", { src: yi, alt: "Loading icon" }) })
  ] });
}
function ji({ error: e }) {
  return /* @__PURE__ */ G.jsx("div", { className: "app-frame-splash error-splash", children: /* @__PURE__ */ G.jsx("div", { className: "error-text", children: e }) });
}
function di({ app: e, onClose: r }) {
  return /* @__PURE__ */ G.jsxs(
    fi,
    {
      title: e.title,
      minSize: e.minSize,
      defaultSize: e.defaultSize,
      defaultPosition: e.defaultPosition,
      onClose: () => r(e),
      children: [
        /* @__PURE__ */ G.jsx(
          "iframe",
          {
            src: e.url,
            title: e.title,
            width: "100%",
            height: "100%",
            referrerPolicy: "strict-origin-when-cross-origin",
            sandbox: "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",
            allow: "encrypted-media; fullscreen; sync-xhr;"
          }
        ),
        !e.isLoaded && /* @__PURE__ */ G.jsx(Ii, { type: e.title }),
        e.error && /* @__PURE__ */ G.jsx(ji, { error: e.error })
      ]
    }
  );
}
function hi({ sources: e, onAppClose: r }) {
  return /* @__PURE__ */ G.jsx(G.Fragment, { children: e.map((n) => /* @__PURE__ */ G.jsx(
    di,
    {
      app: n,
      onClose: r
    },
    n.id
  )) });
}
export {
  hi as AppFrameModals
};

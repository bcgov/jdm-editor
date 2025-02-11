import { jsx as s, jsxs as Z, Fragment as te } from "react/jsx-runtime";
import { Radio as qn, Space as tn, Switch as Jn, Input as fe, Select as $n, Typography as O, Dropdown as ue, Button as N, Modal as pe, Form as J, Popconfirm as on, Spin as he, Tooltip as $, theme as de, message as q, Tabs as sn, Avatar as ho, Checkbox as To, notification as bo, Cascader as kt, Card as Zo, Divider as _o, ConfigProvider as vo } from "antd";
import j, { useState as K, useMemo as V, useRef as X, useEffect as C, forwardRef as rn, Suspense as xo, useLayoutEffect as In, createRef as Le, useCallback as Ae, useImperativeHandle as wo, memo as Do } from "react";
import { useDrop as Cn, useDrag as kn, DndProvider as zt } from "react-dnd";
import { HTML5Backend as zn } from "react-dnd-html5-backend";
import { produce as U } from "immer";
import { create as xe } from "zustand";
import k from "clsx";
import { syntaxHighlighting as Nt, HighlightStyle as Pt, LanguageSupport as Rt, LRLanguage as Ot, syntaxTree as Et, bracketMatching as So } from "@codemirror/language";
import { StateEffect as an, StateField as Io, Compartment as ve, EditorState as Co, Text as ko } from "@codemirror/state";
import { keymap as zo, hoverTooltip as No, EditorView as Ne, placeholder as Wn } from "@codemirror/view";
import { isReady as Po, VariableType as ae, createVariableType as Ue, validateExpression as Ro, validateUnaryExpression as Oo } from "@gorules/zen-engine-wasm";
import { match as I, P as z } from "ts-pattern";
import Eo, { Handle as $e, Position as We, MarkerType as Ao, getOutgoers as Ye, getIncomers as Uo, getBezierPath as jo, BaseEdge as Mo, EdgeLabelRenderer as Bo, useNodesState as Vo, useEdgesState as Fo, SelectionMode as Ko, Controls as Lo, ControlButton as Ho, Background as Go, ReactFlowProvider as qo } from "reactflow";
import Y from "lodash";
import { ArrowDownOutlined as At, ArrowRightOutlined as dn, MinusSquareOutlined as Jo, PlusSquareOutlined as $o, DragOutlined as Wo, CloseOutlined as be, MoreOutlined as Nn, BookOutlined as Ut, TableOutlined as Yo, SyncOutlined as jt, MenuOutlined as Qo, DeleteOutlined as Ie, PlusCircleOutlined as Mt, NumberOutlined as Xo, WarningFilled as es, InfoCircleOutlined as Bt, FormatPainterOutlined as Vt, ImportOutlined as Ft, LoginOutlined as ns, LogoutOutlined as ts, BranchesOutlined as os, DownOutlined as Kt, WarningOutlined as ss, LeftOutlined as rs, CompressOutlined as as, CloudUploadOutlined as is, CloudDownloadOutlined as ds, DeploymentUnitOutlined as ls, PlayCircleOutlined as cs, ClearOutlined as us, CheckCircleTwoTone as ps, CloseCircleTwoTone as ys, ExportOutlined as Lt, ArrowUpOutlined as fs, SwapOutlined as Ht, PlusOutlined as Pn } from "@ant-design/icons";
import { useThrottledCallback as Qe, useDebouncedCallback as Rn } from "use-debounce";
import { flexRender as Gt, useReactTable as ms, getCoreRowModel as gs } from "@tanstack/react-table";
import { useVirtualizer as hs } from "@tanstack/react-virtual";
import { z as pn } from "zod";
import { Transition as Ts } from "transition-hook";
import me from "json5";
import { PanelGroup as On, Panel as Re, PanelResizeHandle as hn } from "react-resizable-panels";
import { Editor as ln, DiffEditor as qt, loader as bs, useMonaco as Zs } from "@monaco-editor/react";
import _s from "to-json-schema";
import { useInView as vs } from "react-intersection-observer";
import { MarkerSeverity as xs } from "monaco-editor";
import { JSONTree as ws } from "react-json-tree";
import { createDragDropManager as Ds } from "dnd-core";
import { Resizable as Ss } from "re-resizable";
import Tn from "fast-deep-equal";
import { nodeSchema as Yn, decisionModelSchema as Qn } from "./schema.js";
import { CustomKind as Ri, DECISION_GRAPH_CONTENT_TYPE as Oi, NodeKind as Ei, anyNodeSchema as Ai, customNodeSchema as Ui, decisionNodeSchema as ji, decisionTableSchema as Mi, edgeSchema as Bi, expressionNodeSchema as Vi, functionNodeSchema as Fi, inputNodeSchema as Ki, outputNodeSchema as Li, switchNodeSchema as Hi, validationSchema as Gi } from "./schema.js";
import { closeBrackets as Is, closeBracketsKeymap as Cs, autocompletion as ks } from "@codemirror/autocomplete";
import { history as zs, historyKeymap as Ns, insertNewlineAndIndent as Xn } from "@codemirror/commands";
import { parser as Jt } from "@gorules/lezer-zen";
import { parser as Ps } from "@gorules/lezer-zen-template";
import { parseMixed as Rs, NodeProp as Os } from "@lezer/common";
import { tags as A } from "@lezer/highlight";
import { linter as Es } from "@codemirror/lint";
const $t = j.createContext({}), As = ({ children: e, getContainer: n }) => {
  const [t, o] = K(void 0), r = (l) => t?.type === l;
  return /* @__PURE__ */ s(
    $t.Provider,
    {
      value: {
        dialog: t,
        setDialog: o,
        isDialogActive: r,
        getContainer: n
      },
      children: e
    }
  );
}, Be = () => j.useContext($t);
function Us(e) {
  return e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var js = function e(n, t) {
  if (n === t) return !0;
  if (n && t && typeof n == "object" && typeof t == "object") {
    if (n.constructor !== t.constructor) return !1;
    var o, r, l;
    if (Array.isArray(n)) {
      if (o = n.length, o != t.length) return !1;
      for (r = o; r-- !== 0; )
        if (!e(n[r], t[r])) return !1;
      return !0;
    }
    if (n instanceof Map && t instanceof Map) {
      if (n.size !== t.size) return !1;
      for (r of n.entries())
        if (!t.has(r[0])) return !1;
      for (r of n.entries())
        if (!e(r[1], t.get(r[0]))) return !1;
      return !0;
    }
    if (n instanceof Set && t instanceof Set) {
      if (n.size !== t.size) return !1;
      for (r of n.entries())
        if (!t.has(r[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(n) && ArrayBuffer.isView(t)) {
      if (o = n.length, o != t.length) return !1;
      for (r = o; r-- !== 0; )
        if (n[r] !== t[r]) return !1;
      return !0;
    }
    if (n.constructor === RegExp) return n.source === t.source && n.flags === t.flags;
    if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === t.valueOf();
    if (n.toString !== Object.prototype.toString) return n.toString() === t.toString();
    if (l = Object.keys(n), o = l.length, o !== Object.keys(t).length) return !1;
    for (r = o; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, l[r])) return !1;
    for (r = o; r-- !== 0; ) {
      var a = l[r];
      if (!(a === "_owner" && n.$$typeof) && !e(n[a], t[a]))
        return !1;
    }
    return !0;
  }
  return n !== n && t !== t;
};
const Q = /* @__PURE__ */ Us(js), et = (e, n, t) => {
  const o = [...e.inputs, ...e.outputs], r = {
    _id: n._id || crypto.randomUUID(),
    _description: n._description
  };
  return o.forEach((l) => {
    if (t && r._id === t)
      return r[l.id] = n?.[l.id] || l?.defaultValue || "";
    r[l.id] = n?.[l.id] || "";
  }), r;
}, He = (e, n) => {
  const t = e?.rules || [], o = [...e.inputs, ...e.outputs];
  return t.map((r) => {
    const l = {
      _id: r._id || crypto.randomUUID(),
      _description: r._description
    };
    return o.forEach((a) => {
      l[a.id] = r?.[a.id] || "";
    }), l;
  });
}, je = (e) => {
  const n = {
    hitPolicy: e?.hitPolicy || "first",
    inputs: e?.inputs || [],
    outputs: e?.outputs || [],
    rules: e?.rules || [],
    passThorough: e?.passThorough ?? !1,
    inputField: e?.inputField,
    outputPath: e?.outputPath,
    executionMode: e?.executionMode ?? "single",
    _diff: e?._diff
  };
  return n.inputs?.length === 0 && (n.inputs = [
    {
      id: crypto.randomUUID(),
      name: "Input"
    }
  ]), n.outputs?.length === 0 && (n.outputs = [
    {
      id: crypto.randomUUID(),
      field: "output",
      name: "Output"
    }
  ]), n.rules.forEach((t) => {
    typeof t._id == "string" && t._id.length > 0 || (t._id = crypto.randomUUID());
  }), n;
}, Ve = j.createContext({}), Ms = (e) => {
  const { children: n } = e, t = V(
    () => xe(() => ({
      id: void 0,
      name: void 0,
      decisionTable: je(),
      cursor: null,
      activeRules: [],
      disabled: !1,
      configurable: !0,
      disableHitPolicy: !1,
      colWidth: 200,
      minColWidth: 150,
      inputsSchema: void 0,
      outputsSchema: void 0,
      derivedVariableTypes: {},
      inputVariableType: void 0,
      inputData: void 0
    })),
    []
  ), o = V(
    () => xe(() => ({
      onChange: void 0,
      cellRenderer: void 0
    })),
    []
  ), r = V(
    () => ({
      setDecisionTable: (l) => t.setState({ decisionTable: l }),
      setCursor: (l) => t.setState({ cursor: l }),
      commitData: (l, a) => {
        const { decisionTable: i } = t.getState(), d = U(i, (c) => {
          const { x: u, y: p } = a;
          return c.rules[p][u] = l, c;
        });
        t.setState({ decisionTable: d }), o.getState().onChange?.(d);
      },
      swapRows: (l, a) => {
        const { decisionTable: i } = t.getState(), d = U(i, (c) => {
          const u = c?.rules?.[l];
          return c.rules.splice(l, 1), c.rules.splice(a, 0, u), c;
        });
        t.setState({ decisionTable: d, cursor: null }), o.getState().onChange?.(d);
      },
      addRowAbove: (l) => {
        const { decisionTable: a } = t.getState(), i = U(a, (c) => {
          l === void 0 && (l = 0);
          const u = crypto.randomUUID();
          return c.rules.splice(l, 0, et(c, { _id: u }, u)), c;
        });
        t.setState({ decisionTable: i }), o.getState().onChange?.(i);
        const { cursor: d } = t.getState();
        d && d?.y === l && t.setState({ cursor: { x: d.x, y: d.y + 1 } });
      },
      addRowBelow: (l) => {
        const { decisionTable: a } = t.getState(), i = U(a, (c) => {
          l === void 0 ? l = c?.rules?.length : l += 1;
          const u = crypto.randomUUID();
          return c.rules.splice(l, 0, et(c, { _id: u }, u)), c;
        });
        t.setState({ decisionTable: i }), o.getState().onChange?.(i);
        const { cursor: d } = t.getState();
        d && d?.y === l && t.setState({ cursor: { x: d.x, y: d.y - 1 } });
      },
      removeRow: (l) => {
        const { decisionTable: a } = t.getState(), i = U(a, (d) => (l === void 0 && (l = d?.rules?.length || 0), d.rules.splice(l, 1), d));
        t.setState({ decisionTable: i }), o.getState().onChange?.(i);
      },
      addColumn: (l, a) => {
        const { decisionTable: i } = t.getState(), d = U(i, (c) => (c[l].push(a), c.rules = He(c), c));
        t.setState({ decisionTable: d }), o.getState().onChange?.(d);
      },
      updateColumn: (l, a, i) => {
        const { decisionTable: d } = t.getState(), c = U(d, (u) => (u[l] = u[l].map((p) => p.id === a ? {
          ...p,
          name: i?.name,
          field: i?.field,
          defaultValue: i?.defaultValue
        } : p), u.rules = He(u), u));
        t.setState({ decisionTable: c }), o.getState().onChange?.(c);
      },
      removeColumn: (l, a) => {
        const { decisionTable: i } = t.getState(), d = je(
          U(i, (c) => (c[l] = (c?.[l] || []).filter((u) => u?.id !== a), c.rules = He(c), c))
        );
        t.setState({ decisionTable: d, cursor: null }), o.getState().onChange?.(d);
      },
      reorderColumns: (l, a) => {
        const { decisionTable: i } = t.getState(), d = U(i, (c) => (c[l] = a, c.rules = He(c), c));
        t.setState({ decisionTable: d }), o.getState().onChange?.(d);
      },
      updateHitPolicy: (l) => {
        const { decisionTable: a } = t.getState(), i = U(a, (d) => (d.hitPolicy = l, d));
        t.setState({ decisionTable: i }), o.getState().onChange?.(i);
      }
    }),
    []
  );
  return /* @__PURE__ */ s(
    Ve.Provider,
    {
      value: {
        stateStore: t,
        listenerStore: o,
        actions: r
      },
      children: n
    }
  );
};
function se(e, n = Q) {
  return j.useContext(Ve).stateStore(e, n);
}
function Bs(e, n = Q) {
  return j.useContext(Ve).listenerStore(e, n);
}
function le() {
  return j.useContext(Ve).actions;
}
const En = () => j.useContext(Ve), An = (e, n) => {
  const t = e?.[0];
  if (!t) return;
  const o = n.find((r) => r.field === t);
  return o?.items ? An(e.slice(1), o.items) : o;
}, Wt = (e, n) => {
  if (!(!e || !n))
    for (let t = 0; t < n.length; t++) {
      const o = n[t];
      if (o.field === e)
        return [o.field];
      if (o.items) {
        const r = Wt(e, o.items);
        if (!r) continue;
        return [o.field, ...r];
      }
    }
}, Vs = (e) => (n) => [
  ...n.decisionTable.inputs.map((t) => ({
    ...t,
    colType: "input"
  })),
  ...n.decisionTable.outputs.map((t) => ({
    ...t,
    colType: "output"
  }))
].find((t) => t.id === e);
function Yt(...e) {
  return e.length === 2 ? tt(e[0], e[1]) || null : e.slice(1).reduce(
    (t, o) => tt(t, o),
    e[0]
  ) || null;
}
const nt = /* @__PURE__ */ new WeakMap();
function tt(e, n) {
  if (e && n) {
    const t = nt.get(e) || /* @__PURE__ */ new WeakMap();
    nt.set(e, t);
    const o = t.get(n) || ((r) => {
      ot(e, r), ot(n, r);
    });
    return t.set(n, o), o;
  }
  return e || n;
}
function ot(e, n) {
  typeof e == "function" ? e(n) : e.current = n;
}
const st = (e, n) => {
  const t = getComputedStyle(e), o = parseInt(t.lineHeight), r = parseInt(t.paddingTop), l = parseInt(t.paddingBottom);
  e.rows = 1;
  const a = e.scrollHeight - r - l, i = Math.floor(a / o);
  e.rows = Math.min(Math.max(i, 1), n);
}, Oe = j.forwardRef(
  ({ maxRows: e, className: n, value: t, ...o }, r) => {
    const l = X(null);
    return C(() => {
      l.current && st(l.current, e);
    }, [t, e]), C(() => {
      if (!l.current)
        return;
      const a = (d) => {
        window.requestAnimationFrame(() => {
          !Array.isArray(d) || d.length === 0 || st(d[0].target, e);
        });
      }, i = new ResizeObserver(a);
      return i.observe(l.current), () => {
        i.disconnect();
      };
    }, [e]), /* @__PURE__ */ s(
      "textarea",
      {
        className: k("grl-textarea-input", n),
        ref: Yt(l, r),
        value: t,
        ...o
      }
    );
  }
);
let yn = !1;
const ie = () => {
  if (yn)
    return !0;
  try {
    if (Po())
      return yn = !0, yn;
  } catch {
    return !1;
  }
}, Fs = (e, n) => e[n]?.[G.Input] ?? e[n]?.[G.InferredInput] ?? ae.fromJson({ Object: {} }), Ce = (e, { attachGlobals: n = !0, disabled: t = !1 } = {}) => {
  const o = L(({ nodeTypes: r, globalType: l }) => {
    if (!(!ie() || t))
      return { nodeTypes: r, globalType: l };
  });
  return V(() => {
    if (!o?.nodeTypes)
      return;
    const r = Fs(o.nodeTypes, e);
    return n && Object.entries(o?.globalType ?? {}).forEach(([l, a]) => r.set(l, a)), r;
  }, [o?.globalType, o?.nodeTypes, n]);
}, bn = ({ displayDiff: e, previousValue: n, options: t, ...o }) => /* @__PURE__ */ s(qn.Group, { ...o, children: (t || []).map((r) => /* @__PURE__ */ s(
  qn,
  {
    value: r.value,
    className: k([
      e && r.value === n && "text-removed",
      e && r.value === o.value && "text-added"
    ]),
    children: r.label
  },
  r.value
)) }), Qt = ({
  direction: e = "right",
  size: n = "small"
}) => {
  const t = n === "small" ? 12 : 16;
  return e === "down" ? /* @__PURE__ */ s(
    At,
    {
      className: "text-modified",
      style: {
        fontSize: t
      }
    }
  ) : /* @__PURE__ */ s(
    dn,
    {
      className: "text-modified",
      style: {
        fontSize: t
      }
    }
  );
}, Xt = ({ displayDiff: e, previousChecked: n, ...t }) => /* @__PURE__ */ Z(tn, { size: 4, children: [
  e && /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ s(Jn, { disabled: t.disabled, size: "small", checked: n }),
    /* @__PURE__ */ s(Qt, {})
  ] }),
  /* @__PURE__ */ s(Jn, { size: "small", ...t })
] }), Un = ({ previousValue: e, displayDiff: n, ...t }) => n ? /* @__PURE__ */ Z("div", { className: "diff-input-group", children: [
  (e || "")?.length > 0 && /* @__PURE__ */ s(
    fe,
    {
      ...t,
      value: e,
      onChange: void 0,
      className: k(t.className, "previous-input")
    }
  ),
  (t?.value || "")?.length > 0 && /* @__PURE__ */ s(fe, { ...t, className: k(t.className, "current-input") })
] }) : /* @__PURE__ */ s(fe, { ...t }), Ks = ({
  direction: e = "horizontal",
  previousValue: n,
  displayDiff: t,
  ...o
}) => /* @__PURE__ */ Z(tn, { size: "small", direction: e, children: [
  t && /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ s(
      $n,
      {
        ...o,
        disabled: !0,
        value: n,
        className: k(o.className, "text-removed"),
        onChange: void 0
      }
    ),
    /* @__PURE__ */ s(Qt, {})
  ] }),
  /* @__PURE__ */ s(
    $n,
    {
      ...o,
      disabled: o.disabled || t,
      className: k(o.className, t && "text-added")
    }
  )
] }), ke = j.forwardRef(
  ({ displayDiff: e, previousValue: n, noStyle: t, ...o }, r) => e ? /* @__PURE__ */ Z("div", { className: k("diff-code-editor", t && "no-style"), children: [
    (n || "")?.length > 0 && /* @__PURE__ */ s(
      Se,
      {
        ...o,
        className: k(o.className, "previous-input"),
        value: n,
        onChange: void 0,
        disabled: !0,
        noStyle: !0,
        lint: !1
      }
    ),
    (o?.value || "")?.length > 0 && /* @__PURE__ */ s(
      Se,
      {
        ...o,
        className: k(o.className, "current-input"),
        disabled: !0,
        noStyle: !0,
        lint: !1
      }
    )
  ] }) : /* @__PURE__ */ s(Se, { ref: r, ...o })
), Ls = rn(
  ({ previousValue: e, displayDiff: n, noStyle: t, ...o }, r) => n ? /* @__PURE__ */ Z("div", { className: k("diff-text-area-group", t && "no-style"), children: [
    (e || "")?.length > 0 && /* @__PURE__ */ s(
      Oe,
      {
        ...o,
        value: e,
        onChange: void 0,
        className: k(o.className, "previous-input")
      }
    ),
    (o.value || "")?.length > 0 && /* @__PURE__ */ s(Oe, { ...o, className: k(o.className, "current-input") })
  ] }) : /* @__PURE__ */ s(Oe, { ref: r, ...o })
), Hs = ({ id: e, manager: n }) => {
  const t = ee(), o = Ce(e, { attachGlobals: !1 }), { nodeTrace: r, disabled: l, configurable: a, content: i, globalType: d, inputsSchema: c, outputsSchema: u } = L(
    ({ simulate: g, disabled: m, configurable: h, decisionGraph: T, globalType: f, inputsSchema: b, outputsSchema: _ }) => ({
      nodeTrace: I(g).with({ result: z._ }, ({ result: v }) => v?.trace?.[e]).otherwise(() => null),
      disabled: m,
      configurable: h,
      content: (T?.nodes ?? []).find((v) => v.id === e)?.content,
      globalType: f,
      inputsSchema: b,
      outputsSchema: _
    })
  ), p = r?.traceData !== void 0 ? Array.isArray(r?.traceData) ? r?.traceData?.map((g) => g?.rule?._id) : [r?.traceData?.rule?._id] : [], y = V(() => {
    if (!o)
      return;
    const g = I(i?.inputField).with(z.string, (h) => o.get(h)).otherwise(() => o), m = i?.executionMode === "loop" ? g.arrayItem() : g;
    return Object.entries(d).forEach(([h, T]) => m.set(h, T)), m;
  }, [o, d, i?.inputField, i?.executionMode]);
  return /* @__PURE__ */ s(
    Na,
    {
      id: e,
      tableHeight: "100%",
      value: i,
      manager: n,
      disabled: l,
      configurable: a,
      inputData: y,
      activeRules: (p || []).filter((g) => !!g),
      inputsSchema: c,
      outputsSchema: u,
      onChange: (g) => {
        t.updateNode(e, (m) => (Object.assign(m.content, g), m));
      }
    }
  );
}, Gs = navigator.platform.includes("Mac"), rt = {
  Ctrl: "⌘",
  Backspace: "⌫",
  Alt: "⌥"
}, qe = {
  shortcut: (e) => Gs ? Object.keys(rt).reduce((n, t) => n.replaceAll(t, rt[t]), e) : e
}, at = {}, Xe = (e, n) => {
  const [t, o] = K(() => at?.[e] ?? n);
  return C(() => {
    at[e] = t;
  }, [t]), [t, o];
}, oe = (e) => {
  const {
    horizontal: n,
    reversed: t,
    verticalAlign: o = "start",
    horizontalAlign: r = "start",
    gap: l = 8,
    height: a = "auto",
    width: i = "100%",
    grow: d,
    style: c,
    ...u
  } = e, p = V(() => n ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", [n, t]);
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: p,
        justifyContent: n ? r : o,
        alignItems: n ? o : r,
        height: a,
        width: i,
        gap: l,
        flexGrow: d ? 1 : void 0,
        ...c
      },
      ...u
    }
  );
}, ye = ({ left: e, right: n, gap: t = 16 }) => /* @__PURE__ */ Z(oe, { gap: t, horizontal: !0, horizontalAlign: "space-between", children: [
  /* @__PURE__ */ s(O.Text, { style: { color: "inherit" }, children: e }),
  n && /* @__PURE__ */ s(O.Text, { style: { color: "inherit" }, children: n })
] }), Fe = ({ status: e, ...n }) => I(e).with("removed", () => /* @__PURE__ */ s(
  Jo,
  {
    ...n,
    style: {
      color: "var(--grl-color-error)",
      ...n?.style || {}
    }
  }
)).with("added", () => /* @__PURE__ */ s(
  $o,
  {
    ...n,
    style: {
      color: "var(--grl-color-success)",
      ...n?.style || {}
    }
  }
)).with("modified", () => /* @__PURE__ */ s(
  "span",
  {
    ...n,
    style: {
      width: n?.style?.fontSize ?? 14,
      height: n?.style?.fontSize ?? 14,
      border: "1.5px solid var(--grl-color-warning)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      ...n?.style || {}
    },
    children: /* @__PURE__ */ s(
      "span",
      {
        style: {
          width: 3,
          height: 3,
          backgroundColor: "var(--grl-color-warning)",
          borderRadius: "50%"
        }
      }
    )
  }
)).with("moved", () => /* @__PURE__ */ s(
  Wo,
  {
    ...n,
    style: {
      color: "var(--grl-color-info)",
      ...n?.style || {}
    }
  }
)).otherwise(() => null), it = ({ className: e, ...n }) => /* @__PURE__ */ s("div", { className: k("grl-dn__graphCard", e), ...n });
var Ze = /* @__PURE__ */ ((e) => (e.Blue = "var(--node-color-blue)", e.Purple = "var(--node-color-purple)", e.Orange = "var(--node-color-orange)", e.Green = "var(--node-color-green)", e))(Ze || {});
const eo = ({
  icon: e,
  name: n,
  children: t,
  actions: o = [],
  disabled: r = !1,
  isSelected: l = !1,
  noBodyPadding: a = !1,
  color: i = "primary",
  onNameChange: d,
  menuItems: c = [],
  status: u,
  diffStatus: p,
  compactMode: y,
  listMode: g,
  helper: m,
  details: h,
  detailsOpen: T = !1,
  detailsTitle: f = "Details",
  onDetailsClose: b
}) => {
  const [_, v] = K(!1), D = X(null);
  C(() => {
    D.current && _ && (D.current.value = n, D.current.focus(), D.current.select());
  }, [_]);
  const R = I(i).with("primary", () => Ze.Blue).otherwise((w) => w);
  return /* @__PURE__ */ Z(
    "div",
    {
      className: k(
        "grl-dn",
        y && "grl-dn--compact",
        g && "grl-dn--list",
        !p && l && "grl-dn--selected",
        u && `grl-dn--${u}`,
        p && `grl-dn--diff-${p}`
      ),
      style: {
        "--node-color": R
      },
      onKeyDown: (w) => w.stopPropagation(),
      children: [
        /* @__PURE__ */ Z(it, { children: [
          /* @__PURE__ */ Z("div", { className: "grl-dn__status-bar", children: [
            Array.isArray(m) && m.filter((w) => !!w).map((w, P) => /* @__PURE__ */ s("div", { className: k("grl-dn__status-icon"), children: w }, P)),
            u === "error" && /* @__PURE__ */ s("div", { className: k("grl-dn__status-icon", `grl-dn__status-icon--${u}`), children: /* @__PURE__ */ s(be, {}) }),
            /* @__PURE__ */ s(Fe, { status: p, style: { fontSize: 16 } })
          ] }),
          /* @__PURE__ */ Z("div", { className: k("grl-dn__header", y && "compact"), children: [
            /* @__PURE__ */ s("div", { className: k("grl-dn__header__icon", y && "compact"), children: e }),
            /* @__PURE__ */ Z("div", { className: "grl-dn__header__text", children: [
              !_ && /* @__PURE__ */ s(
                O.Text,
                {
                  className: k("grl-dn__header__text__name"),
                  onClick: () => {
                    r || v(!0);
                  },
                  children: n
                }
              ),
              _ && /* @__PURE__ */ s(
                "input",
                {
                  ref: D,
                  className: k("grl-dn__header__text__name-input", "nodrag"),
                  onBlur: (w) => {
                    w.target.value?.trim?.()?.length > 0 && d?.(D?.current?.value), w.preventDefault(), v(!1);
                  },
                  onKeyDown: (w) => {
                    w.key === "Enter" ? (w.currentTarget.blur(), w.preventDefault()) : w.key === "Escape" && (D.current && (D.current.value = n), v(!1), w.preventDefault());
                  }
                }
              )
            ] }),
            c.length > 0 && /* @__PURE__ */ s("div", { className: k("grl-dn__header__actions", "nodrag"), children: /* @__PURE__ */ s(ue, { trigger: ["click"], overlayStyle: { minWidth: 250 }, menu: { items: c }, children: /* @__PURE__ */ s(N, { type: "text", size: "small", icon: /* @__PURE__ */ s(Nn, {}) }) }) })
          ] }),
          t && /* @__PURE__ */ s(
            "div",
            {
              className: k(
                "grl-dn__body",
                o.length === 0 && "grl-dn__body--no-footer",
                a && "grl-dn__body--no-padding"
              ),
              children: t
            }
          ),
          o.length > 0 && /* @__PURE__ */ s("div", { className: k("grl-dn__footer", "nodrag"), children: /* @__PURE__ */ s("div", { className: "grl-dn__footer__actions", children: o }) })
        ] }),
        /* @__PURE__ */ s(Ts, { state: T, timeout: 100, children: (w, P) => P && /* @__PURE__ */ s(
          it,
          {
            className: "nodrag",
            style: {
              transition: "0.1s ease-in-out",
              transform: w === "enter" ? "translateY(0)" : "translateY(-10px)",
              opacity: w === "enter" ? 1 : 0
            },
            children: /* @__PURE__ */ Z("div", { className: "grl-dn__details", children: [
              /* @__PURE__ */ Z("div", { className: "grl-dn__details__header", children: [
                /* @__PURE__ */ s(O.Text, { className: "grl-dn__details__header__text", children: f }),
                /* @__PURE__ */ s(
                  N,
                  {
                    type: "text",
                    size: "small",
                    className: "grl-dn__details__header__close",
                    icon: /* @__PURE__ */ s(be, { style: { fontSize: 8 } }),
                    onClick: b
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { className: "grl-dn__details__body", children: h })
            ] })
          }
        ) })
      ]
    }
  );
}, Te = j.forwardRef(
  ({
    id: e,
    handleLeft: n = !0,
    handleRight: t = !0,
    className: o,
    specification: r,
    name: l,
    displayError: a,
    helper: i,
    actions: d,
    ...c
  }, u) => {
    const [p, y] = Xe(
      `node:details:${e}`,
      0
      /* Settings */
    ), [g, m] = Xe(`node:detailsOpen:${e}`, !1), h = ee(), { nodeError: T, nodeTrace: f, disabled: b, compactMode: _ } = L(
      ({ simulate: w, disabled: P, compactMode: x }) => ({
        disabled: P,
        nodeTrace: I(w).with({ result: z._ }, ({ result: S }) => S?.trace?.[e]).otherwise(() => null),
        nodeError: I(w).with({ error: { data: { nodeId: e } } }, ({ error: S }) => S).otherwise(() => null),
        compactMode: x
      })
    ), { diff: v } = Ke(e), D = r.renderSettings, R = [
      r.documentationUrl ? {
        key: "documentation",
        label: /* @__PURE__ */ s(ye, { left: "Documentation", right: /* @__PURE__ */ s(Ut, {}) }),
        onClick: () => window.open(r.documentationUrl, "_href")
      } : null,
      r.documentationUrl ? { key: "divider-1", type: "divider" } : null,
      !a && {
        key: "copy-clipboard",
        label: /* @__PURE__ */ s(ye, { left: "Copy to clipboard", right: qe.shortcut("Ctrl + C") }),
        onClick: () => {
        }
      },
      !a && {
        key: "duplicate",
        disabled: b,
        label: /* @__PURE__ */ s(ye, { left: "Duplicate", right: qe.shortcut("Ctrl + D") }),
        onClick: () => h.duplicateNodes([e])
      },
      !a && { key: "divider-2", type: "divider" },
      {
        key: "delete",
        danger: !0,
        label: /* @__PURE__ */ s(ye, { left: "Delete", right: qe.shortcut("Backspace") }),
        disabled: b,
        onClick: () => pe.confirm({
          icon: null,
          title: "Delete node",
          content: /* @__PURE__ */ Z(O.Text, { children: [
            "Are you sure you want to delete ",
            /* @__PURE__ */ s(O.Text, { strong: !0, children: l }),
            " node."
          ] }),
          okButtonProps: { danger: !0 },
          onOk: () => h.removeNodes([e])
        })
      }
    ].filter((w) => w !== !1);
    return /* @__PURE__ */ Z(
      "div",
      {
        className: k("grl-graph-node", o),
        style: { minWidth: 220, maxWidth: 220 },
        ref: u,
        onClick: (w) => {
          const P = I(navigator.platform.includes("Mac")).with(!0, () => w.metaKey).otherwise(() => w.ctrlKey);
          h.triggerNodeSelect(e, P ? "toggle" : "only");
        },
        children: [
          n && /* @__PURE__ */ s(
            $e,
            {
              className: k("grl-graph-node__handle-left", _ && "compact"),
              type: "target",
              position: We.Left,
              ...typeof n != "boolean" ? n : {}
            }
          ),
          /* @__PURE__ */ s(
            eo,
            {
              menuItems: R,
              ...c,
              disabled: b,
              icon: r.icon,
              color: r.color,
              type: r.displayName,
              helper: i,
              name: l,
              details: D ? /* @__PURE__ */ s(D, { id: e }) : void 0,
              detailsOpen: g,
              detailsTitle: I(p).with(0, () => "Settings").otherwise(() => {
              }),
              onDetailsClose: () => m(!1),
              actions: D ? [
                ...d ?? [],
                /* @__PURE__ */ s(
                  N,
                  {
                    type: "text",
                    style: { marginLeft: "auto" },
                    onClick: () => {
                      m(p === 0 ? !g : !0), y(
                        0
                        /* Settings */
                      );
                    },
                    children: "Settings"
                  },
                  "settings"
                )
              ] : d,
              status: I([f, T, a]).with([z._, z._, !0], () => "error").with([z._, z.not(z.nullish), z._], () => "error").with([z.not(z.nullish), z._, z._], () => "success").otherwise(() => {
              }),
              diffStatus: I([v]).with([{ status: "added" }], () => "added").with([{ status: "modified" }], () => "modified").with([{ status: "removed" }], () => "removed").with([{ status: "moved" }], () => "moved").otherwise(() => {
              }),
              onNameChange: (w) => {
                h.updateNode(e, (P) => (P.name = w, P));
              },
              compactMode: _
            }
          ),
          t && /* @__PURE__ */ s(
            $e,
            {
              className: k("grl-graph-node__handle-right", _ && "compact"),
              type: "source",
              position: We.Right,
              ...typeof t != "boolean" ? t : {}
            }
          )
        ]
      }
    );
  }
);
var E = /* @__PURE__ */ ((e) => (e.Input = "inputNode", e.Output = "outputNode", e.DecisionTable = "decisionTableNode", e.Function = "functionNode", e.Expression = "expressionNode", e.Switch = "switchNode", e))(E || {});
const jn = {
  type: E.DecisionTable,
  icon: /* @__PURE__ */ s(Yo, {}),
  displayName: "Decision table",
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions/decision-tables",
  shortDescription: "Rules spreadsheet",
  renderTab: ({ id: e, manager: n }) => /* @__PURE__ */ s(Hs, { id: e, manager: n }),
  getDiffContent: (e, n) => U(e, (t) => {
    const o = {};
    (e.executionMode ?? "single") !== (n.executionMode ?? "single") && Y.set(o, "executionMode", {
      status: "modified",
      previousValue: n.executionMode
    }), (e.hitPolicy ?? "first") !== (n.hitPolicy ?? "first") && Y.set(o, "hitPolicy", {
      status: "modified",
      previousValue: n.hitPolicy
    }), (e.inputField ?? "") !== (n.inputField ?? "") && Y.set(o, "inputField", {
      status: "modified",
      previousValue: n.inputField
    }), (e.outputPath ?? "") !== (n.outputPath ?? "") && Y.set(o, "outputPath", {
      status: "modified",
      previousValue: n.outputPath
    }), (e.passThrough ?? !1) !== (n.passThrough ?? !1) && Y.set(o, "passThrough", {
      status: "modified",
      previousValue: n.passThrough
    });
    const r = Ee(e?.inputs || [], n?.inputs || [], {
      compareFields: (i, d) => {
        const c = (i.name ?? "") !== (d.name ?? ""), u = (i.field ?? "") !== (d.field ?? ""), p = (i.defaultValue ?? "") !== (d.defaultValue ?? "");
        return {
          hasChanges: c || u || p,
          fields: {
            ...c && {
              name: {
                status: "modified",
                previousValue: d.name
              }
            },
            ...u && {
              field: {
                status: "modified",
                previousValue: d.field
              }
            },
            ...p && {
              defaultValue: {
                status: "modified",
                previousValue: d.defaultValue
              }
            }
          }
        };
      }
    }), l = Ee(e?.outputs || [], n?.outputs || [], {
      compareFields: (i, d) => {
        const c = (i.name ?? "") !== (d.name ?? ""), u = (i.field ?? "") !== (d.field ?? ""), p = (i.defaultValue ?? "") !== (d.defaultValue ?? "");
        return {
          hasChanges: c || u || p,
          fields: {
            ...c && {
              name: {
                status: "modified",
                previousValue: d.name
              }
            },
            ...u && {
              field: {
                status: "modified",
                previousValue: d.field
              }
            },
            ...p && {
              defaultValue: {
                status: "modified",
                previousValue: d.defaultValue
              }
            }
          }
        };
      }
    }), a = Ee(e?.rules || [], n?.rules || [], {
      idField: "_id",
      compareFields: (i, d) => {
        const c = (i._description ?? "") !== (d._description ?? ""), u = {};
        r.forEach((y) => {
          y._diff?.status === "added" ? u[y.id] = {
            status: "added"
          } : y._diff?.status === "removed" ? u[y.id] = {
            status: "removed"
          } : (i?.[y.id] ?? "") !== (d?.[y.id] ?? "") && (u[y.id] = {
            status: "modified",
            previousValue: d?.[y.id]
          });
        });
        const p = {};
        return l.forEach((y) => {
          y?._diff?.status === "added" ? p[y.id] = {
            status: "added"
          } : y?._diff?.status === "removed" ? p[y.id] = {
            status: "removed"
          } : (i?.[y.id] ?? "") !== (d?.[y.id] ?? "") && (p[y.id] = {
            status: "modified",
            previousValue: d?.[y.id]
          });
        }), {
          hasChanges: c || Object.keys(u).length > 0 || Object.keys(p).length > 0,
          fields: {
            ...c && {
              _description: {
                status: "modified",
                previousValue: d._description
              }
            },
            ...u,
            ...p
          }
        };
      }
    });
    return t.inputs = r, t.outputs = l, t.rules = a, r.find(
      (i) => i?._diff?.status === "modified" || i?._diff?.status === "added" || i?._diff?.status === "removed"
    ) && Y.set(o, "inputs", {
      status: "modified"
    }), l.find(
      (i) => i?._diff?.status === "modified" || i?._diff?.status === "added" || i?._diff?.status === "removed"
    ) && Y.set(o, "outputs", {
      status: "modified"
    }), a.find(
      (i) => i?._diff?.status === "modified" || i?._diff?.status === "added" || i?._diff?.status === "removed"
    ) && Y.set(o, "rules", {
      status: "modified"
    }), Object.keys(o).length > 0 && (t._diff = {
      status: "modified",
      fields: o
    }), t;
  }),
  inferTypes: {
    needsUpdate: (e, n) => !Q(e, n),
    determineOutputType: ({ content: e, input: n }) => {
      let t = n.clone(), o = ae.fromJson({ Object: {} });
      if (e.inputField && (t = n.calculateType(e.inputField)), e.executionMode === "loop" && (t = t.arrayItem()), (e?.outputs || []).filter((l) => !!l.field).forEach((l) => {
        for (const a of e.rules) {
          if (!a[l.id])
            continue;
          const i = t.calculateType(a[l.id]), d = i.toJson();
          if (d !== "Any" && d !== "Null") {
            o.set(l.field, i);
            return;
          }
        }
        o.setJson(l.field, "Any");
      }), e.hitPolicy === "collect" && (o = o.toArray()), e.executionMode === "loop" && (o = o.toArray()), e.outputPath) {
        const l = ae.fromJson({ Object: {} });
        l.set(e.outputPath, o), o = l;
      }
      return e.passThrough && (o = n.merge(o)), o;
    }
  },
  generateNode: ({ index: e }) => ({
    name: `decisionTable${e}`,
    content: {
      hitPolicy: "first",
      inputs: [
        {
          id: crypto.randomUUID(),
          name: "Input"
        }
      ],
      outputs: [
        {
          id: crypto.randomUUID(),
          field: "output",
          name: "Output"
        }
      ],
      rules: [],
      inputField: null,
      outputPath: null,
      passThrough: !0,
      executionMode: "single"
    }
  }),
  renderNode: ({ id: e, data: n, selected: t, specification: o }) => {
    const r = ee(), { passThrough: l, executionMode: a } = L(({ decisionGraph: i }) => {
      const d = (i?.nodes ?? []).find((c) => c.id === e)?.content;
      return {
        passThrough: d?.passThrough || !1,
        executionMode: d?.executionMode
      };
    });
    return /* @__PURE__ */ s(
      Te,
      {
        id: e,
        specification: o,
        name: n.name,
        isSelected: t,
        helper: [a === "loop" && /* @__PURE__ */ s(jt, {}), l && /* @__PURE__ */ s(dn, {})],
        actions: [
          /* @__PURE__ */ s(N, { type: "text", onClick: () => r.openTab(e), children: "Edit Table" }, "edit-table")
        ]
      }
    );
  },
  renderSettings: ({ id: e }) => {
    const n = ee(), t = Ce(e), { contentDiff: o } = Ke(e), { fields: r, disabled: l } = L(({ decisionGraph: i, disabled: d }) => {
      const c = (i?.nodes ?? []).find((u) => u.id === e)?.content;
      return {
        disabled: d,
        fields: {
          passThrough: c?.passThrough || !1,
          inputField: c?.inputField,
          outputPath: c?.outputPath,
          executionMode: c?.executionMode || "single",
          hitPolicy: c?.hitPolicy || "first"
        }
      };
    }), a = (i) => {
      n.updateNode(e, (d) => (Object.assign(d.content, i), d));
    };
    return /* @__PURE__ */ Z("div", { className: "settings-form", children: [
      /* @__PURE__ */ s(J.Item, { label: "Hit Policy", children: /* @__PURE__ */ s(tn, { direction: "vertical", size: 2, children: /* @__PURE__ */ s(
        bn,
        {
          size: "small",
          previousValue: o?.fields?.hitPolicy?.previousValue,
          displayDiff: o?.fields?.hitPolicy?.status === "modified",
          disabled: l,
          value: r?.hitPolicy,
          onChange: (i) => a({ hitPolicy: i?.target?.value }),
          options: [
            {
              value: "first",
              label: "First"
            },
            {
              value: "collect",
              label: "Collect"
            }
          ]
        }
      ) }) }),
      /* @__PURE__ */ s(J.Item, { label: "Passthrough", children: /* @__PURE__ */ s(
        Xt,
        {
          disabled: l,
          size: "small",
          displayDiff: o?.fields?.passThrough?.status === "modified",
          checked: r?.passThrough,
          previousChecked: o?.fields?.passThrough?.previousValue,
          onChange: (i) => a({ passThrough: i })
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Input field", children: /* @__PURE__ */ s(
        ke,
        {
          variableType: t,
          disabled: l,
          displayDiff: o?.fields?.inputField?.status === "modified",
          previousValue: o?.fields?.inputField?.previousValue,
          style: { fontSize: 12, lineHeight: "20px", width: "100%" },
          expectedVariableType: r?.executionMode === "loop" ? { Array: "Any" } : void 0,
          maxRows: 4,
          value: r?.inputField ?? "",
          onChange: (i) => a({ inputField: i?.trim() || null })
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Output path", children: /* @__PURE__ */ s(
        Un,
        {
          size: "small",
          readOnly: l,
          displayDiff: o?.fields?.outputPath?.status === "modified",
          previousValue: o?.fields?.outputPath?.previousValue,
          value: r?.outputPath ?? "",
          onChange: (i) => a({ outputPath: i?.target?.value?.trim() || null })
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Execution mode", children: /* @__PURE__ */ s(
        bn,
        {
          size: "small",
          disabled: l,
          displayDiff: o?.fields?.executionMode?.status === "modified",
          previousValue: o?.fields?.executionMode?.previousValue,
          value: r?.executionMode,
          onChange: (i) => a({ executionMode: i?.target?.value }),
          options: [
            {
              value: "single",
              label: "Single"
            },
            {
              value: "loop",
              label: "Loop"
            }
          ]
        }
      ) })
    ] });
  }
}, Mn = j.createContext({}), dt = (e = {}) => ({
  id: crypto.randomUUID(),
  key: "",
  value: "",
  ...e
}), qs = ({
  children: e
}) => {
  const n = V(
    () => xe((t) => ({
      configurable: !0,
      disabled: !1,
      addRowAbove: (o = 0) => {
        t(
          U((r) => (r.expressions.splice(o, 0, dt()), r))
        );
      },
      addRowBelow: (o) => {
        t(
          U((r) => (o = o ?? r.expressions.length - 1, r.expressions.splice(o + 1, 0, dt()), r))
        );
      },
      expressions: [],
      setExpressions: (o) => {
        t({ expressions: o });
      },
      swapRows: (o, r) => {
        t(
          U((l) => {
            const [a] = l.expressions.splice(o, 1);
            return l.expressions.splice(r, 0, a), l;
          })
        );
      },
      removeRow: (o) => {
        t(
          U((r) => (r.expressions.splice(o, 1), r))
        );
      },
      updateRow: (o, r) => {
        t(
          U((l) => (l.expressions[o] = {
            ...l.expressions[o],
            ...r
          }, l))
        );
      }
    })),
    []
  );
  return /* @__PURE__ */ s(Mn.Provider, { value: n, children: e });
};
function cn(e, n = Q) {
  return j.useContext(Mn)(e, n);
}
const no = () => j.useContext(Mn), Js = ({
  value: e,
  onChange: n,
  defaultValue: t = [],
  configurable: o = !0,
  disabled: r = !1
}) => {
  const l = X(!1), a = no(), { setExpressions: i, expressions: d } = cn(({ setExpressions: c, expressions: u }) => ({
    setExpressions: c,
    expressions: u
  }));
  return C(() => {
    a.setState({
      configurable: o,
      disabled: r
    });
  }, [o, r]), C(() => {
    if (n)
      return a.subscribe((c, u) => {
        Q(c.expressions, u.expressions) || n?.(c.expressions);
      });
  }, [a, n]), C(() => {
    l.current && e && !Q(e, d) && i(e);
  }, [e]), C(() => {
    e ? i(e) : t && i(t), l.current = !0;
  }, []), null;
}, $s = ({ expression: e, index: n, variableType: t }) => {
  const o = X(null), { updateRow: r, removeRow: l, swapRows: a, disabled: i, configurable: d } = cn(
    ({ updateRow: f, removeRow: b, swapRows: _, disabled: v, configurable: D }) => ({
      updateRow: f,
      removeRow: b,
      swapRows: _,
      disabled: v,
      configurable: D
    })
  ), c = (f) => {
    r(n, f);
  }, u = () => {
    l(n);
  }, [{ isDropping: p, direction: y }, g] = Cn({
    accept: "row",
    collect: (f) => ({
      isDropping: f.isOver({ shallow: !0 }),
      direction: (f.getDifferenceFromInitialOffset()?.y || 0) > 0 ? "down" : "up"
    }),
    drop: (f) => {
      a(f.index, n);
    }
  }), [{ isDragging: m }, h, T] = kn({
    canDrag: d && !i,
    item: () => ({ ...e, index: n }),
    type: "row",
    collect: (f) => ({
      isDragging: f.isDragging()
    })
  });
  return T(g(o)), /* @__PURE__ */ Z(
    "div",
    {
      ref: o,
      className: k(
        "expression-list-item",
        "expression-list__item",
        p && y === "down" && "dropping-down",
        p && y === "up" && "dropping-up",
        e?._diff?.status && `expression-list__item--${e?._diff?.status}`
      ),
      style: { opacity: m ? 0.5 : 1 },
      children: [
        /* @__PURE__ */ s("div", { ref: h, className: "expression-list-item__drag", "aria-disabled": !d || i, children: e?._diff?.status ? /* @__PURE__ */ s(
          Fe,
          {
            status: e?._diff?.status,
            style: {
              fontSize: 16
            }
          }
        ) : /* @__PURE__ */ s(Qo, {}) }),
        /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
          Un,
          {
            placeholder: "Key",
            readOnly: !d || i,
            displayDiff: e?._diff?.fields?.key?.status === "modified",
            previousValue: e?._diff?.fields?.key?.previousValue,
            value: e?.key,
            onChange: (f) => c({ key: f.target.value }),
            autoComplete: "off"
          }
        ) }),
        /* @__PURE__ */ Z("div", { className: "expression-list-item__code", children: [
          /* @__PURE__ */ s(
            ke,
            {
              placeholder: "Expression",
              maxRows: 9,
              disabled: i,
              value: e?.value,
              displayDiff: e?._diff?.fields?.value?.status === "modified",
              previousValue: e?._diff?.fields?.value?.previousValue,
              onChange: (f) => c({ value: f }),
              variableType: t
            }
          ),
          /* @__PURE__ */ s(Ws, { expression: e })
        ] }),
        /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
          on,
          {
            title: "Remove selected row?",
            okText: "Remove",
            onConfirm: u,
            disabled: !d || i,
            children: /* @__PURE__ */ s(N, { type: "text", icon: /* @__PURE__ */ s(Ie, {}), danger: !0, disabled: !d || i })
          }
        ) })
      ]
    }
  );
}, Ws = ({ expression: e }) => {
  const { trace: n } = cn(({ traceData: t }) => ({
    trace: t?.[e.key]?.result
  }));
  return n ? /* @__PURE__ */ s("div", { className: "expression-list-item__resultOverlay", children: /* @__PURE__ */ Z(O.Text, { ellipsis: { tooltip: n }, style: { maxWidth: 120 }, children: [
    "= ",
    n
  ] }) }) : null;
}, Ys = ({}) => {
  const { expressions: e, addRowBelow: n, configurable: t, disabled: o, inputVariableType: r } = cn(
    ({ expressions: i, addRowBelow: d, configurable: c, disabled: u, inputVariableType: p }) => ({
      expressions: i,
      addRowBelow: d,
      configurable: c,
      disabled: u,
      inputVariableType: p
    }),
    Q
  ), [l, a] = K();
  return C(() => {
    if (!ie() || !r)
      return;
    const i = r.clone();
    e.filter((d) => d.key.length > 0).forEach((d) => {
      const c = i.calculateType(d.value);
      i.set(`$.${d.key}`, c);
    }), a(i);
  }, [e, r]), /* @__PURE__ */ Z("div", { className: "expression-list", children: [
    /* @__PURE__ */ Z("div", { className: k("expression-list__item", "expression-list__item--heading"), children: [
      /* @__PURE__ */ s("div", {}),
      /* @__PURE__ */ s(O.Text, { type: "secondary", children: "Key" }),
      /* @__PURE__ */ s(O.Text, { type: "secondary", children: "Expression" }),
      /* @__PURE__ */ s("div", {})
    ] }),
    (e || []).map((i, d) => /* @__PURE__ */ s($s, { expression: i, index: d, variableType: l }, i.id)),
    t && !o && /* @__PURE__ */ s("div", { className: "expression-list__button-wrapper", children: /* @__PURE__ */ s(
      N,
      {
        className: "expression-list__button",
        icon: /* @__PURE__ */ s(Mt, {}),
        type: "link",
        onClick: () => n(),
        children: "Add row"
      }
    ) })
  ] });
}, Qs = ({ manager: e, traceData: n, inputData: t, ...o }) => {
  const [r, l] = K(!1), a = X(null);
  C(() => {
    l(!0);
  }, []);
  const i = V(() => e ? {
    manager: e
  } : {
    backend: zn,
    options: {
      rootElement: a.current
    }
  }, [a.current, e]);
  return /* @__PURE__ */ s("div", { ref: a, children: a.current && /* @__PURE__ */ s(zt, { ...i, children: /* @__PURE__ */ Z(qs, { children: [
    /* @__PURE__ */ s(Js, { ...o }),
    /* @__PURE__ */ s(Ys, {}),
    /* @__PURE__ */ s(Xs, { traceData: n, inputData: t })
  ] }) }) });
}, Xs = ({ traceData: e, inputData: n }) => {
  const t = no();
  return C(() => {
    const o = t.getState();
    Q(o, e) || t.setState({ traceData: e });
  }, [e]), C(() => {
    ie() && t.setState({ inputVariableType: Ue(n) });
  }, [n]), null;
}, er = ({ id: e, manager: n }) => {
  const t = ee(), o = Ce(e, { attachGlobals: !1 }), { disabled: r, configurable: l, content: a, trace: i, globalType: d } = L(
    ({ disabled: u, configurable: p, decisionGraph: y, simulate: g, globalType: m }) => ({
      disabled: u,
      configurable: p,
      content: (y?.nodes ?? []).find((h) => h.id === e)?.content,
      trace: g && "result" in g ? g.result?.trace[e] : void 0,
      globalType: m
    })
  ), c = V(() => {
    if (!o)
      return;
    const u = I(a?.inputField).with(z.string, (y) => o.get(y)).otherwise(() => o), p = a?.executionMode === "loop" ? u.arrayItem() : u;
    return Object.entries(d).forEach(([y, g]) => p.set(y, g)), p;
  }, [o, d, a?.inputField, a?.executionMode]);
  return /* @__PURE__ */ s("div", { style: { height: "100%", overflowY: "auto", boxSizing: "border-box" }, children: /* @__PURE__ */ s(
    Qs,
    {
      traceData: i?.traceData,
      value: a?.expressions,
      disabled: r,
      configurable: l,
      manager: n,
      inputData: c,
      onChange: (u) => {
        t.updateNode(e, (p) => (p.content.expressions = u, p));
      }
    }
  ) });
}, Bn = {
  type: E.Expression,
  icon: /* @__PURE__ */ s(Xo, {}),
  displayName: "Expression",
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions/expression",
  shortDescription: "Mapping utility",
  renderTab: ({ id: e, manager: n }) => /* @__PURE__ */ s(er, { id: e, manager: n }),
  getDiffContent: (e, n) => U(e, (o) => {
    const r = {};
    (e.executionMode || !1) !== (n.executionMode || !1) && Y.set(r, "executionMode", {
      status: "modified",
      previousValue: n.executionMode
    }), Ge(e.inputField, n.inputField) || Y.set(r, "inputField", {
      status: "modified",
      previousValue: n.inputField
    }), Ge(e.outputPath, n.outputPath) || Y.set(r, "outputPath", {
      status: "modified",
      previousValue: n.outputPath
    }), (e.passThrough || !1) !== (n.passThrough || !1) && Y.set(r, "passThrough", {
      status: "modified",
      previousValue: n.passThrough
    });
    const l = Ee(e?.expressions || [], n?.expressions || [], {
      compareFields: (a, i) => {
        const d = !Ge(a.key, i.key), c = !Ge(a.value, i.value);
        return {
          hasChanges: d || c,
          fields: {
            ...d && {
              key: {
                status: "modified",
                previousValue: i.key
              }
            },
            ...c && {
              value: {
                status: "modified",
                previousValue: i.value
              }
            }
          }
        };
      }
    });
    return o.expressions = l, l.find(
      (a) => a?._diff?.status === "modified" || a?._diff?.status === "added" || a?._diff?.status === "removed"
    ) && Y.set(r, "expressions", {
      status: "modified"
    }), Object.keys(r).length > 0 && (o._diff = {
      status: "modified",
      fields: r
    }), o;
  }),
  inferTypes: {
    needsUpdate: (e, n) => !Q(e, n),
    determineOutputType: ({ input: e, content: n }) => {
      let t = e.clone(), o = ae.fromJson({ Object: {} });
      if (n.inputField && (t = e.calculateType(n.inputField)), n.executionMode === "loop" && (t = t.arrayItem()), (n.expressions || []).forEach((r) => {
        if (!r.key || !r.value)
          return;
        const l = t.calculateType(r.value);
        t.set(`$.${r.key}`, l), o.set(r.key, l);
      }), n.executionMode === "loop" && (o = o.toArray()), n.outputPath) {
        const r = ae.fromJson({ Object: {} });
        r.set(n.outputPath, o), o = r;
      }
      return n.passThrough && (o = e.merge(o)), o;
    }
  },
  generateNode: ({ index: e }) => ({
    name: `expression${e}`,
    content: {
      inputField: null,
      outputPath: null,
      expressions: [],
      passThrough: !0,
      executionMode: "single"
    }
  }),
  renderNode: ({ id: e, data: n, selected: t, specification: o }) => {
    const r = ee(), { passThrough: l, executionMode: a } = L(({ decisionGraph: i }) => {
      const d = (i?.nodes ?? []).find((c) => c.id === e)?.content;
      return {
        passThrough: d?.passThrough || !1,
        executionMode: d?.executionMode
      };
    });
    return /* @__PURE__ */ s(
      Te,
      {
        id: e,
        specification: o,
        name: n.name,
        isSelected: t,
        actions: [
          /* @__PURE__ */ s(N, { type: "text", onClick: () => r.openTab(e), children: "Edit Expression" }, "edit-table")
        ],
        helper: [a === "loop" && /* @__PURE__ */ s(jt, {}), l && /* @__PURE__ */ s(dn, {})]
      }
    );
  },
  renderSettings: ({ id: e }) => {
    const n = ee(), t = Ce(e), { contentDiff: o } = Ke(e), { fields: r, disabled: l } = L(({ decisionGraph: i, disabled: d }) => {
      const c = (i?.nodes ?? []).find((u) => u.id === e)?.content;
      return {
        disabled: d,
        fields: {
          passThrough: c?.passThrough || !1,
          inputField: c?.inputField,
          outputPath: c?.outputPath,
          executionMode: c?.executionMode || "single"
        }
      };
    }), a = (i) => {
      n.updateNode(e, (d) => (Object.assign(d.content, i), d));
    };
    return /* @__PURE__ */ Z("div", { className: "settings-form", children: [
      /* @__PURE__ */ s(J.Item, { label: "Passthrough", children: /* @__PURE__ */ s(
        Xt,
        {
          disabled: l,
          size: "small",
          displayDiff: o?.fields?.passThrough?.status === "modified",
          checked: r?.passThrough,
          previousChecked: o?.fields?.passThrough?.previousValue,
          onChange: (i) => a({ passThrough: i })
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Input field", children: /* @__PURE__ */ s(
        ke,
        {
          variableType: t,
          disabled: l,
          displayDiff: o?.fields?.inputField?.status === "modified",
          previousValue: o?.fields?.inputField?.previousValue,
          style: { fontSize: 12, lineHeight: "20px", width: "100%" },
          expectedVariableType: r?.executionMode === "loop" ? { Array: "Any" } : void 0,
          maxRows: 4,
          value: r?.inputField ?? "",
          onChange: (i) => {
            a({ inputField: i?.trim() || null });
          }
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Output path", children: /* @__PURE__ */ s(
        Un,
        {
          size: "small",
          readOnly: l,
          displayDiff: o?.fields?.outputPath?.status === "modified",
          previousValue: o?.fields?.outputPath?.previousValue,
          value: r?.outputPath ?? "",
          onChange: (i) => a({ outputPath: i?.target?.value?.trim() || null })
        }
      ) }),
      /* @__PURE__ */ s(J.Item, { label: "Execution mode", children: /* @__PURE__ */ s(
        bn,
        {
          size: "small",
          disabled: l,
          displayDiff: o?.fields?.executionMode?.status === "modified",
          previousValue: o?.fields?.executionMode?.previousValue,
          value: r?.executionMode,
          onChange: (i) => a({ executionMode: i?.target?.value }),
          options: [
            {
              value: "single",
              label: "Single"
            },
            {
              value: "loop",
              label: "Loop"
            }
          ]
        }
      ) })
    ] });
  }
}, nr = `declare namespace Big {
    type BigSource = number | string | Big;

    /**
     * GT = 1, EQ = 0, LT = -1
     */
    type Comparison = -1 | 0 | 1;

    /**
     * RoundDown = 0, RoundHalfUp = 1, RoundHalfEven = 2, RoundUp = 3
     */
    type RoundingMode = 0 | 1 | 2 | 3;

    interface BigConstructor {
        /**
         * Returns a new instance of a Big number object
         *
         * String values may be in exponential, as well as normal (non-exponential) notation.
         * There is no limit to the number of digits of a string value (other than that of Javascript's maximum array size), but the largest recommended exponent magnitude is 1e+6.
         * Infinity, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.
         * String values in octal literal form will be interpreted as decimals, e.g. '011' is 11, not 9.
         *
         * @throws \`NaN\` on an invalid value.
         */
        new(value: BigSource): Big;

        /**
         * Returns a new instance of a Big number object
         *
         * String values may be in exponential, as well as normal (non-exponential) notation.
         * There is no limit to the number of digits of a string value (other than that of Javascript's maximum array size), but the largest recommended exponent magnitude is 1e+6.
         * Infinity, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.
         * String values in octal literal form will be interpreted as decimals, e.g. '011' is 11, not 9.
         *
         * @throws \`NaN\` on an invalid value.
         */
        (value: BigSource): Big;

        /**
         * Create an additional Big number constructor
         *
         * Values created with the returned constructor will have a separate set of configuration values.
         * This can be used to create Big objects with different DP and RM values.
         * Big numbers created by different constructors can be used together in operations, and it is the DP and RM setting of the Big number that an operation is called upon that will apply.
         * In the interest of memory efficiency, all Big number constructors share the same prototype object,
         * so while the DP and RM (and any other own properties) of a constructor are isolated and untouchable by another, its prototype methods are not.
         */
        (): BigConstructor;

        /**
         * The maximum number of decimal places of the results of operations involving division.
         * It is relevant only to the div and sqrt methods, and the pow method when the exponent is negative.
         *
         * 0 to 1e+6 inclusive
         * Default value: 20
         */
        DP: number;
        /**
         * The rounding mode used in the above operations and by round, toExponential, toFixed and toPrecision.
         * Default value: 1
         */
        RM: number;
        /**
         * The negative exponent value at and below which toString returns exponential notation.
         *
         * -1e+6 to 0 inclusive
         * Default value: -7
         */
        NE: number;
        /**
         * The positive exponent value at and above which toString returns exponential notation.
         *
         * 0 to 1e+6 inclusive
         * Default value: 21
         */
        PE: number;
        /**
         * When set to true, an error will be thrown if a primitive number is passed to the Big constructor,
         * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a primitive number without a loss of precision.
         *
         * true|false
         * Default value: false
         */
        strict: boolean;

        /** Readonly rounding modes */

        /**
         * Rounds towards zero.
         * I.e. truncate, no rounding.
         */
        readonly roundDown: 0;
        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds away from zero.
         */
        readonly roundHalfUp: 1;
        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards even neighbour.
         */
        readonly roundHalfEven: 2;
        /**
         * Rounds away from zero.
         */
        readonly roundUp: 3;

        readonly Big: BigConstructor;
    }

    interface Big {
        /** Returns a Big number whose value is the absolute value, i.e. the magnitude, of this Big number. */
        abs(): Big;
        /**
         * Returns a Big number whose value is the value of this Big number plus n - alias for .plus().
         *
         * @throws \`NaN\` if n is invalid.
         */
        add(n: BigSource): Big;
        /**
         * Compare the values.
         *
         * @throws \`NaN\` if n is invalid.
         */
        cmp(n: BigSource): Comparison;
        /**
         * Returns a Big number whose value is the value of this Big number divided by n.
         *
         * If the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
         *
         * @throws \`NaN\` if n is invalid.
         * @throws \`±Infinity\` on division by zero.
         * @throws \`NaN\` on division of zero by zero.
         */
        div(n: BigSource): Big;
        /**
         * Returns true if the value of this Big equals the value of n, otherwise returns false.
         *
         * @throws \`NaN\` if n is invalid.
         */
        eq(n: BigSource): boolean;
        /**
         * Returns true if the value of this Big is greater than the value of n, otherwise returns false.
         *
         * @throws \`NaN\` if n is invalid.
         */
        gt(n: BigSource): boolean;
        /**
         * Returns true if the value of this Big is greater than or equal to the value of n, otherwise returns false.
         *
         * @throws \`NaN\` if n is invalid.
         */
        gte(n: BigSource): boolean;
        /**
         * Returns true if the value of this Big is less than the value of n, otherwise returns false.
         *
         * @throws \`NaN\` if n is invalid.
         */
        lt(n: BigSource): boolean;
        /**
         * Returns true if the value of this Big is less than or equal to the value of n, otherwise returns false.
         *
         * @throws \`NaN\` if n is invalid.
         */
        lte(n: BigSource): boolean;
        /**
         * Returns a Big number whose value is the value of this Big number minus n.
         *
         * @throws \`NaN\` if n is invalid.
         */
        minus(n: BigSource): Big;
        /**
         * Returns a Big number whose value is the value of this Big number modulo n, i.e. the integer remainder of dividing this Big number by n.
         *
         * The result will have the same sign as this Big number, and it will match that of Javascript's % operator (within the limits of its precision) and BigDecimal's remainder method.
         *
         * @throws \`NaN\` if n is negative or otherwise invalid.
         */
        mod(n: BigSource): Big;
        /**
         * Returns a Big number whose value is the value of this Big number times n - alias for .times().
         *
         * @throws \`NaN\` if n is invalid.
         */
        mul(n: BigSource): Big;
        /**
         * Return a new Big whose value is the value of this Big negated.
         */
        neg(): Big;
        /**
         * Returns a Big number whose value is the value of this Big number plus n.
         *
         * @throws \`NaN\` if n is invalid.
         */
        plus(n: BigSource): Big;
        /**
         * Returns a Big number whose value is the value of this Big number raised to the power exp.
         *
         * If exp is negative and the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
         *
         * @param exp The power to raise the number to, -1e+6 to 1e+6 inclusive
         * @throws \`!pow!\` if exp is invalid.
         *
         * Note: High value exponents may cause this method to be slow to return.
         */
        pow(exp: number): Big;
        /**
         * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
         * significant digits using rounding mode rm, or Big.RM if rm is not specified.
         *
         * @param sd Significant digits: integer, 1 to MAX_DP inclusive.
         * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
         * @throws \`!prec!\` if sd is invalid.
         * @throws \`!Big.RM!\` if rm is invalid.
         */
        prec(sd: number, rm?: RoundingMode): Big;
        /**
         * Returns a Big number whose value is the value of this Big number rounded using rounding mode rm to a maximum of dp decimal places.
         *
         * @param dp Decimal places, 0 to 1e+6 inclusive
         * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
         * @throws \`!round!\` if dp is invalid.
         * @throws \`!Big.RM!\` if rm is invalid.
         */
        round(dp?: number, rm?: RoundingMode): Big;
        /**
         * Returns a Big number whose value is the square root of this Big number.
         *
         * If the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
         *
         * @throws \`NaN\` if this Big number is negative.
         */
        sqrt(): Big;
        /**
         * Returns a Big number whose value is the value of this Big number minus n - alias for .minus().
         *
         * @throws \`NaN\` if n is invalid.
         */
        sub(n: BigSource): Big;
        /**
         * Returns a Big number whose value is the value of this Big number times n.
         *
         * @throws \`NaN\` if n is invalid.
         */
        times(n: BigSource): Big;
        /**
         * Returns a string representing the value of this Big number in exponential notation to a fixed number of decimal places dp.
         *
         * If the value of this Big number in exponential notation has more digits to the right of the decimal point than is specified by dp,
         * the return value will be rounded to dp decimal places using rounding mode Big.RM.
         *
         * If the value of this Big number in exponential notation has fewer digits to the right of the decimal point than is specified by dp, the return value will be appended with zeros accordingly.
         *
         * If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.
         *
         * @param dp Decimal places, 0 to 1e+6 inclusive
         * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
         * @throws \`!toFix!\` if dp is invalid.
         */
        toExponential(dp?: number, rm?: RoundingMode): string;
        /**
         * Returns a string representing the value of this Big number in normal notation to a fixed number of decimal places dp.
         *
         * If the value of this Big number in normal notation has more digits to the right of the decimal point than is specified by dp,
         * the return value will be rounded to dp decimal places using rounding mode Big.RM.
         *
         * If the value of this Big number in normal notation has fewer fraction digits then is specified by dp, the return value will be appended with zeros accordingly.
         *
         * Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.
         *
         * If dp is omitted, or is null or undefined, then the return value is simply the value in normal notation.
         * This is also unlike Number.prototype.toFixed, which returns the value to zero decimal places.
         *
         * @param dp Decimal places, 0 to 1e+6 inclusive
         * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
         * @throws \`!toFix!\` if dp is invalid.
         */
        toFixed(dp?: number, rm?: RoundingMode): string;
        /**
         * Returns a string representing the value of this Big number to the specified number of significant digits sd.
         *
         * If the value of this Big number has more digits than is specified by sd, the return value will be rounded to sd significant digits using rounding mode Big.RM.
         *
         * If the value of this Big number has fewer digits than is specified by sd, the return value will be appended with zeros accordingly.
         *
         * If sd is less than the number of digits necessary to represent the integer part of the value in normal notation, then exponential notation is used.
         *
         * If sd is omitted, or is null or undefined, then the return value is the same as .toString().
         *
         * @param sd Significant digits, 1 to 1e+6 inclusive
         * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
         * @throws \`!toPre!\` if sd is invalid.
         */
        toPrecision(sd?: number, rm?: RoundingMode): string;
        /**
         * Returns a string representing the value of this Big number.
         *
         * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
         *
         * The point at which toString returns exponential rather than normal notation can be adjusted by changing
         * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
         */
        toString(): string;
        /**
         * Returns a primitive number representing the value of this Big number.
         *
         * If Big.strict is true an error will be thrown if toNumber is called on a Big number which cannot be converted to a primitive number without a loss of precision.
         *
         * @since 6.0
         */
        toNumber(): number;
        /**
         * Returns a string representing the value of this Big number.
         *
         * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
         *
         * The point at which toString returns exponential rather than normal notation can be adjusted by changing
         * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
         */
        valueOf(): string;
        /**
         * Returns a string representing the value of this Big number.
         *
         * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
         *
         * The point at which toString returns exponential rather than normal notation can be adjusted by changing
         * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
         */
        toJSON(): string;
        /**
         * Returns an array of single digits
         */
        c: number[];
        /**
         * Returns the exponent, Integer, -1e+6 to 1e+6 inclusive
         */
        e: number;
        /**
         * Returns the sign, -1 or 1
         */
        s: number;
    }
}

// We want the exported symbol 'Big' to represent two things:
// - The Big interface, when used in a type context.
// - The BigConstructor instance, when used in a value context.
declare const Big: Big.BigConstructor;
type Big = Big.Big;

// The export is the same as type/value combo symbol 'Big'.
export = Big;
export as namespace Big;
`, tr = `/// <reference path="./locale/index.d.ts" />

export = dayjs;

declare function dayjs (date?: dayjs.ConfigType): dayjs.Dayjs

declare function dayjs (date?: dayjs.ConfigType, format?: dayjs.OptionType, strict?: boolean): dayjs.Dayjs

declare function dayjs (date?: dayjs.ConfigType, format?: dayjs.OptionType, locale?: string, strict?: boolean): dayjs.Dayjs

declare namespace dayjs {
  interface ConfigTypeMap {
    default: string | number | Date | Dayjs | null | undefined
  }

  export type ConfigType = ConfigTypeMap[keyof ConfigTypeMap]

  export interface FormatObject { locale?: string, format?: string, utc?: boolean }

  export type OptionType = FormatObject | string | string[]

  export type UnitTypeShort = 'd' | 'D' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'

  export type UnitTypeLong = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date'

  export type UnitTypeLongPlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years' | 'dates'
  
  export type UnitType = UnitTypeLong | UnitTypeLongPlural | UnitTypeShort;

  export type OpUnitType = UnitType | "week" | "weeks" | 'w';
  export type QUnitType = UnitType | "quarter" | "quarters" | 'Q';
  export type ManipulateType = Exclude<OpUnitType, 'date' | 'dates'>;
  class Dayjs {
    constructor (config?: ConfigType)
    /**
     * All Day.js objects are immutable. Still, \`dayjs#clone\` can create a clone of the current object if you need one.
     * \`\`\`
     * dayjs().clone()// => Dayjs
     * dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
     * \`\`\`
     * Docs: https://day.js.org/docs/en/parse/dayjs-clone
     */
    clone(): Dayjs
    /**
     * This returns a \`boolean\` indicating whether the Day.js object contains a valid date or not.
     * \`\`\`
     * dayjs().isValid()// => boolean
     * \`\`\`
     * Docs: https://day.js.org/docs/en/parse/is-valid
     */
    isValid(): boolean
    /**
     * Get the year.
     * \`\`\`
     * dayjs().year()// => 2020
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/year
     */
    year(): number
    /**
     * Set the year.
     * \`\`\`
     * dayjs().year(2000)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/year
     */
    year(value: number): Dayjs
    /**
     * Get the month.
     *
     * Months are zero indexed, so January is month 0.
     * \`\`\`
     * dayjs().month()// => 0-11
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/month
     */
    month(): number
    /**
     * Set the month.
     *
     * Months are zero indexed, so January is month 0.
     *
     * Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the next year.
     * \`\`\`
     * dayjs().month(0)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/month
     */
    month(value: number): Dayjs
    /**
     * Get the date of the month.
     * \`\`\`
     * dayjs().date()// => 1-31
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/date
     */
    date(): number
    /**
     * Set the date of the month.
     *
     * Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
     * \`\`\`
     * dayjs().date(1)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/date
     */
    date(value: number): Dayjs
    /**
     * Get the day of the week.
     *
     * Returns numbers from 0 (Sunday) to 6 (Saturday).
     * \`\`\`
     * dayjs().day()// 0-6
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/day
     */
    day(): 0 | 1 | 2 | 3 | 4 | 5 | 6
    /**
     * Set the day of the week.
     *
     * Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to next weeks.
     * \`\`\`
     * dayjs().day(0)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/day
     */
    day(value: number): Dayjs
    /**
     * Get the hour.
     * \`\`\`
     * dayjs().hour()// => 0-23
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/hour
     */
    hour(): number
    /**
     * Set the hour.
     *
     * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
     * \`\`\`
     * dayjs().hour(12)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/hour
     */
    hour(value: number): Dayjs
    /**
     * Get the minutes.
     * \`\`\`
     * dayjs().minute()// => 0-59
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/minute
     */
    minute(): number
    /**
     * Set the minutes.
     *
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
     * \`\`\`
     * dayjs().minute(59)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/minute
     */
    minute(value: number): Dayjs
    /**
     * Get the seconds.
     * \`\`\`
     * dayjs().second()// => 0-59
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/second
     */
    second(): number
    /**
     * Set the seconds.
     *
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
     * \`\`\`
     * dayjs().second(1)// Dayjs
     * \`\`\`
     */
    second(value: number): Dayjs
    /**
     * Get the milliseconds.
     * \`\`\`
     * dayjs().millisecond()// => 0-999
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/millisecond
     */
    millisecond(): number
    /**
     * Set the milliseconds.
     *
     * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
     * \`\`\`
     * dayjs().millisecond(1)// => Dayjs
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/millisecond
     */
    millisecond(value: number): Dayjs
    /**
     * Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.
     *
     * In general:
     * \`\`\`
     * dayjs().set(unit, value) === dayjs()[unit](value)
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     * \`\`\`
     * dayjs().set('date', 1)
     * dayjs().set('month', 3) // April
     * dayjs().set('second', 30)
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/set
     */
    set(unit: UnitType, value: number): Dayjs
    /**
     * String getter, returns the corresponding information getting from Day.js object.
     *
     * In general:
     * \`\`\`
     * dayjs().get(unit) === dayjs()[unit]()
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     * \`\`\`
     * dayjs().get('year')
     * dayjs().get('month') // start 0
     * dayjs().get('date')
     * \`\`\`
     * Docs: https://day.js.org/docs/en/get-set/get
     */
    get(unit: UnitType): number
    /**
     * Returns a cloned Day.js object with a specified amount of time added.
     * \`\`\`
     * dayjs().add(7, 'day')// => Dayjs
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/add
     */
    add(value: number, unit?: ManipulateType): Dayjs
    /**
     * Returns a cloned Day.js object with a specified amount of time subtracted.
     * \`\`\`
     * dayjs().subtract(7, 'year')// => Dayjs
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/subtract
     */
    subtract(value: number, unit?: ManipulateType): Dayjs
    /**
     * Returns a cloned Day.js object and set it to the start of a unit of time.
     * \`\`\`
     * dayjs().startOf('year')// => Dayjs
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/start-of
     */
    startOf(unit: OpUnitType): Dayjs
    /**
     * Returns a cloned Day.js object and set it to the end of a unit of time.
     * \`\`\`
     * dayjs().endOf('month')// => Dayjs
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/end-of
     */
    endOf(unit: OpUnitType): Dayjs
    /**
     * Get the formatted date according to the string of tokens passed in.
     *
     * To escape characters, wrap them in square brackets (e.g. [MM]).
     * \`\`\`
     * dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
     * dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
     * dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
     * \`\`\`
     * Docs: https://day.js.org/docs/en/display/format
     */
    format(template?: string): string
    /**
     * This indicates the difference between two date-time in the specified unit.
     *
     * To get the difference in milliseconds, use \`dayjs#diff\`
     * \`\`\`
     * const date1 = dayjs('2019-01-25')
     * const date2 = dayjs('2018-06-05')
     * date1.diff(date2) // 20214000000 default milliseconds
     * date1.diff() // milliseconds to current time
     * \`\`\`
     *
     * To get the difference in another unit of measurement, pass that measurement as the second argument.
     * \`\`\`
     * const date1 = dayjs('2019-01-25')
     * date1.diff('2018-06-05', 'month') // 7
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/display/difference
     */
    diff(date?: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean): number
    /**
     * This returns the number of **milliseconds** since the Unix Epoch of the Day.js object.
     * \`\`\`
     * dayjs('2019-01-25').valueOf() // 1548381600000
     * +dayjs(1548381600000) // 1548381600000
     * \`\`\`
     * To get a Unix timestamp (the number of seconds since the epoch) from a Day.js object, you should use Unix Timestamp \`dayjs#unix()\`.
     *
     * Docs: https://day.js.org/docs/en/display/unix-timestamp-milliseconds
     */
    valueOf(): number
    /**
     * This returns the Unix timestamp (the number of **seconds** since the Unix Epoch) of the Day.js object.
     * \`\`\`
     * dayjs('2019-01-25').unix() // 1548381600
     * \`\`\`
     * This value is floored to the nearest second, and does not include a milliseconds component.
     *
     * Docs: https://day.js.org/docs/en/display/unix-timestamp
     */
    unix(): number
    /**
     * Get the number of days in the current month.
     * \`\`\`
     * dayjs('2019-01-25').daysInMonth() // 31
     * \`\`\`
     * Docs: https://day.js.org/docs/en/display/days-in-month
     */
    daysInMonth(): number
    /**
     * To get a copy of the native \`Date\` object parsed from the Day.js object use \`dayjs#toDate\`.
     * \`\`\`
     * dayjs('2019-01-25').toDate()// => Date
     * \`\`\`
     */
    toDate(): Date
    /**
     * To serialize as an ISO 8601 string.
     * \`\`\`
     * dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
     * \`\`\`
     * Docs: https://day.js.org/docs/en/display/as-json
     */
    toJSON(): string
    /**
     * To format as an ISO 8601 string.
     * \`\`\`
     * dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
     * \`\`\`
     * Docs: https://day.js.org/docs/en/display/as-iso-string
     */
    toISOString(): string
    /**
     * Returns a string representation of the date.
     * \`\`\`
     * dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
     * \`\`\`
     * Docs: https://day.js.org/docs/en/display/as-string
     */
    toString(): string
    /**
     * Get the UTC offset in minutes.
     * \`\`\`
     * dayjs().utcOffset()
     * \`\`\`
     * Docs: https://day.js.org/docs/en/manipulate/utc-offset
     */
    utcOffset(): number
    /**
     * This indicates whether the Day.js object is before the other supplied date-time.
     * \`\`\`
     * dayjs().isBefore(dayjs('2011-01-01')) // default milliseconds
     * \`\`\`
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * \`\`\`
     * dayjs().isBefore('2011-01-01', 'year')// => boolean
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/query/is-before
     */
    isBefore(date?: ConfigType, unit?: OpUnitType): boolean
    /**
     * This indicates whether the Day.js object is the same as the other supplied date-time.
     * \`\`\`
     * dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
     * \`\`\`
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * \`\`\`
     * dayjs().isSame('2011-01-01', 'year')// => boolean
     * \`\`\`
     * Docs: https://day.js.org/docs/en/query/is-same
     */
    isSame(date?: ConfigType, unit?: OpUnitType): boolean
    /**
     * This indicates whether the Day.js object is after the other supplied date-time.
     * \`\`\`
     * dayjs().isAfter(dayjs('2011-01-01')) // default milliseconds
     * \`\`\`
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * \`\`\`
     * dayjs().isAfter('2011-01-01', 'year')// => boolean
     * \`\`\`
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/query/is-after
     */
    isAfter(date?: ConfigType, unit?: OpUnitType): boolean

    locale(): string

    locale(preset: string | ILocale, object?: Partial<ILocale>): Dayjs
  }

  export type PluginFunc<T = unknown> = (option: T, c: typeof Dayjs, d: typeof dayjs) => void

  export function extend<T = unknown>(plugin: PluginFunc<T>, option?: T): Dayjs

  export function locale(preset?: string | ILocale, object?: Partial<ILocale>, isLocal?: boolean): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs

  const Ls : { [key: string] :  ILocale }
}
`, or = `import zen from 'zen';

/**
 * @param {InputSchema & Object.<string, any>} input
 * @returns {Promise<any>}
 */
export const handler = async (input) => {
  return input;
};
`, sr = `declare namespace console {
  function log(...args: any[]): void;
  async function sleep(durationMs: number): Promise<void>;
}

interface Config {
  readonly maxDepth: number;
  readonly iteration: number;
  readonly trace: boolean;
}

declare const config: Config;
`, rr = `declare class HttpResponse {
  readonly data: any;
  readonly headers: Record<string, string>;
  readonly status: number;
}

interface HttpConfig {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  data?: any;
}

class Http {
  head(url: string, config?: HttpConfig): Promise<HttpResponse>;

  get(url: string, config?: HttpConfig): Promise<HttpResponse>;

  delete(url: string, config?: HttpConfig): Promise<HttpResponse>;

  post(url: string, data: any, config?: HttpConfig): Promise<HttpResponse>;

  patch(url: string, data: any, config?: HttpConfig): Promise<HttpResponse>;

  put(url: string, data: any, config?: HttpConfig): Promise<HttpResponse>;
}

export interface HttpStatic extends Http {}

declare const http: HttpStatic;
export default http;
`, ar = `interface EvaluateOptions {
  trace?: boolean;
}

interface EvaluateResponse {
  performance: string;
  result: any;
  trace?: any;
}

interface ZenModule {
  /**
   * Evaluates ZEN expression
   * @param expression
   * @param context Must contain '$' key
   */
  evaluateExpression(expression: string, context: any): any;

  /**
   * Evaluates ZEN unary expression
   * @param expression
   * @param context Must contain '$' key
   */
  evaluateUnaryExpression(expression: string, context: any): boolean;

  /**
   * Evaluates ZEN unary expression
   * @param key File key to be evaluated through DecisionLoader
   * @param context
   * @param opts
   */
  evaluate(key: string, context: any, opts?: EvaluateOptions): Promise<EvaluateResponse>;
}

declare const zenModule: ZenModule;

export default zenModule;
`, ir = `declare type Primitive = string | number | symbol | bigint | boolean | null | undefined;
declare type Scalars = Primitive | Primitive[];

declare namespace util {
  type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
  export type isAny<T> = 0 extends 1 & T ? true : false;
  export const assertEqual: <A, B>(val: AssertEqual<A, B>) => AssertEqual<A, B>;
  export function assertIs<T>(_arg: T): void;
  export function assertNever(_x: never): never;
  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
  export type MakePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
  export type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;
  export const arrayToEnum: <T extends string, U extends [T, ...T[]]>(items: U) => { [k in U[number]]: k };
  export const getValidEnumValues: (obj: any) => any[];
  export const objectValues: (obj: any) => any[];
  export const objectKeys: ObjectConstructor['keys'];
  export const find: <T>(arr: T[], checker: (arg: T) => any) => T | undefined;
  export type identity<T> = objectUtil.identity<T>;
  export type flatten<T> = objectUtil.flatten<T>;
  export type noUndefined<T> = T extends undefined ? never : T;
  export const isInteger: NumberConstructor['isInteger'];
  export function joinValues<T extends any[]>(array: T, separator?: string): string;
  export const jsonStringifyReplacer: (_: string, value: any) => any;
  export {};
}
declare namespace objectUtil {
  export type MergeShapes<U, V> = {
    [k in Exclude<keyof U, keyof V>]: U[k];
  } & V;
  type optionalKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? k : never;
  }[keyof T];
  type requiredKeys<T extends object> = {
    [k in keyof T]: undefined extends T[k] ? never : k;
  }[keyof T];
  export type addQuestionMarks<T extends object, _O = any> = {
    [K in requiredKeys<T>]: T[K];
  } & {
    [K in optionalKeys<T>]?: T[K];
  } & {
    [k in keyof T]?: unknown;
  };
  export type identity<T> = T;
  export type flatten<T> = identity<{
    [k in keyof T]: T[k];
  }>;
  export type noNeverKeys<T> = {
    [k in keyof T]: [T[k]] extends [never] ? never : k;
  }[keyof T];
  export type noNever<T> = identity<{
    [k in noNeverKeys<T>]: k extends keyof T ? T[k] : never;
  }>;
  export const mergeShapes: <U, T>(first: U, second: T) => T & U;
  export type extendShape<A extends object, B extends object> = {
    [K in keyof A as K extends keyof B ? never : K]: A[K];
  } & {
    [K in keyof B]: B[K];
  };
  export {};
}
declare const ZodParsedType: {
  function: 'function';
  number: 'number';
  string: 'string';
  nan: 'nan';
  integer: 'integer';
  float: 'float';
  boolean: 'boolean';
  date: 'date';
  bigint: 'bigint';
  symbol: 'symbol';
  undefined: 'undefined';
  null: 'null';
  array: 'array';
  object: 'object';
  unknown: 'unknown';
  promise: 'promise';
  void: 'void';
  never: 'never';
  map: 'map';
  set: 'set';
};
declare type ZodParsedType = keyof typeof ZodParsedType;
declare const getParsedType: (data: any) => ZodParsedType;

declare type allKeys<T> = T extends any ? keyof T : never;
declare type inferFlattenedErrors<T extends ZodType<any, any, any>, U = string> = typeToFlattenedError<TypeOf<T>, U>;
declare type typeToFlattenedError<T, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in allKeys<T>]?: U[];
  };
};
declare const ZodIssueCode: {
  invalid_type: 'invalid_type';
  invalid_literal: 'invalid_literal';
  custom: 'custom';
  invalid_union: 'invalid_union';
  invalid_union_discriminator: 'invalid_union_discriminator';
  invalid_enum_value: 'invalid_enum_value';
  unrecognized_keys: 'unrecognized_keys';
  invalid_arguments: 'invalid_arguments';
  invalid_return_type: 'invalid_return_type';
  invalid_date: 'invalid_date';
  invalid_string: 'invalid_string';
  too_small: 'too_small';
  too_big: 'too_big';
  invalid_intersection_types: 'invalid_intersection_types';
  not_multiple_of: 'not_multiple_of';
  not_finite: 'not_finite';
};
declare type ZodIssueCode = keyof typeof ZodIssueCode;
declare type ZodIssueBase = {
  path: (string | number)[];
  message?: string;
};
interface ZodInvalidTypeIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_type;
  expected: ZodParsedType;
  received: ZodParsedType;
}
interface ZodInvalidLiteralIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_literal;
  expected: unknown;
  received: unknown;
}
interface ZodUnrecognizedKeysIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.unrecognized_keys;
  keys: string[];
}
interface ZodInvalidUnionIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_union;
  unionErrors: ZodError[];
}
interface ZodInvalidUnionDiscriminatorIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_union_discriminator;
  options: Primitive[];
}
interface ZodInvalidEnumValueIssue extends ZodIssueBase {
  received: string | number;
  code: typeof ZodIssueCode.invalid_enum_value;
  options: (string | number)[];
}
interface ZodInvalidArgumentsIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_arguments;
  argumentsError: ZodError;
}
interface ZodInvalidReturnTypeIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_return_type;
  returnTypeError: ZodError;
}
interface ZodInvalidDateIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_date;
}
declare type StringValidation =
  | 'email'
  | 'url'
  | 'emoji'
  | 'uuid'
  | 'nanoid'
  | 'regex'
  | 'cuid'
  | 'cuid2'
  | 'ulid'
  | 'datetime'
  | 'date'
  | 'time'
  | 'duration'
  | 'ip'
  | 'base64'
  | {
      includes: string;
      position?: number;
    }
  | {
      startsWith: string;
    }
  | {
      endsWith: string;
    };
interface ZodInvalidStringIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_string;
  validation: StringValidation;
}
interface ZodTooSmallIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.too_small;
  minimum: number | bigint;
  inclusive: boolean;
  exact?: boolean;
  type: 'array' | 'string' | 'number' | 'set' | 'date' | 'bigint';
}
interface ZodTooBigIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.too_big;
  maximum: number | bigint;
  inclusive: boolean;
  exact?: boolean;
  type: 'array' | 'string' | 'number' | 'set' | 'date' | 'bigint';
}
interface ZodInvalidIntersectionTypesIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_intersection_types;
}
interface ZodNotMultipleOfIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.not_multiple_of;
  multipleOf: number | bigint;
}
interface ZodNotFiniteIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.not_finite;
}
interface ZodCustomIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.custom;
  params?: {
    [k: string]: any;
  };
}
declare type DenormalizedError = {
  [k: string]: DenormalizedError | string[];
};
declare type ZodIssueOptionalMessage =
  | ZodInvalidTypeIssue
  | ZodInvalidLiteralIssue
  | ZodUnrecognizedKeysIssue
  | ZodInvalidUnionIssue
  | ZodInvalidUnionDiscriminatorIssue
  | ZodInvalidEnumValueIssue
  | ZodInvalidArgumentsIssue
  | ZodInvalidReturnTypeIssue
  | ZodInvalidDateIssue
  | ZodInvalidStringIssue
  | ZodTooSmallIssue
  | ZodTooBigIssue
  | ZodInvalidIntersectionTypesIssue
  | ZodNotMultipleOfIssue
  | ZodNotFiniteIssue
  | ZodCustomIssue;
declare type ZodIssue = ZodIssueOptionalMessage & {
  fatal?: boolean;
  message: string;
};
declare const quotelessJson: (obj: any) => string;
declare type recursiveZodFormattedError<T> = T extends [any, ...any[]]
  ? {
      [K in keyof T]?: ZodFormattedError<T[K]>;
    }
  : T extends any[]
    ? {
        [k: number]: ZodFormattedError<T[number]>;
      }
    : T extends object
      ? {
          [K in keyof T]?: ZodFormattedError<T[K]>;
        }
      : unknown;
declare type ZodFormattedError<T, U = string> = {
  _errors: U[];
} & recursiveZodFormattedError<NonNullable<T>>;
declare type inferFormattedError<T extends ZodType<any, any, any>, U = string> = ZodFormattedError<TypeOf<T>, U>;
declare class ZodError<T = any> extends Error {
  issues: ZodIssue[];
  get errors(): ZodIssue[];
  constructor(issues: ZodIssue[]);
  format(): ZodFormattedError<T>;
  format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
  static create: (issues: ZodIssue[]) => ZodError<any>;
  static assert(value: unknown): asserts value is ZodError;
  toString(): string;
  get message(): string;
  get isEmpty(): boolean;
  addIssue: (sub: ZodIssue) => void;
  addIssues: (subs?: ZodIssue[]) => void;
  flatten(): typeToFlattenedError<T>;
  flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
  get formErrors(): typeToFlattenedError<T, string>;
}
declare type stripPath<T extends object> = T extends any ? util.OmitKeys<T, 'path'> : never;
declare type IssueData = stripPath<ZodIssueOptionalMessage> & {
  path?: (string | number)[];
  fatal?: boolean;
};
declare type ErrorMapCtx = {
  defaultError: string;
  data: any;
};
declare type ZodErrorMap = (
  issue: ZodIssueOptionalMessage,
  _ctx: ErrorMapCtx,
) => {
  message: string;
};

declare const errorMap: ZodErrorMap;
//# sourceMappingURL=en.d.ts.map

declare function setErrorMap(map: ZodErrorMap): void;
declare function getErrorMap(): ZodErrorMap;

declare const makeIssue: (params: {
  data: any;
  path: (string | number)[];
  errorMaps: ZodErrorMap[];
  issueData: IssueData;
}) => ZodIssue;
declare type ParseParams = {
  path: (string | number)[];
  errorMap: ZodErrorMap;
  async: boolean;
};
declare type ParsePathComponent = string | number;
declare type ParsePath = ParsePathComponent[];
declare const EMPTY_PATH: ParsePath;
interface ParseContext {
  readonly common: {
    readonly issues: ZodIssue[];
    readonly contextualErrorMap?: ZodErrorMap;
    readonly async: boolean;
  };
  readonly path: ParsePath;
  readonly schemaErrorMap?: ZodErrorMap;
  readonly parent: ParseContext | null;
  readonly data: any;
  readonly parsedType: ZodParsedType;
}
declare type ParseInput = {
  data: any;
  path: (string | number)[];
  parent: ParseContext;
};
declare function addIssueToContext(ctx: ParseContext, issueData: IssueData): void;
declare type ObjectPair = {
  key: SyncParseReturnType<any>;
  value: SyncParseReturnType<any>;
};
declare class ParseStatus {
  value: 'aborted' | 'dirty' | 'valid';
  dirty(): void;
  abort(): void;
  static mergeArray(status: ParseStatus, results: SyncParseReturnType<any>[]): SyncParseReturnType;
  static mergeObjectAsync(
    status: ParseStatus,
    pairs: {
      key: ParseReturnType<any>;
      value: ParseReturnType<any>;
    }[],
  ): Promise<SyncParseReturnType<any>>;
  static mergeObjectSync(
    status: ParseStatus,
    pairs: {
      key: SyncParseReturnType<any>;
      value: SyncParseReturnType<any>;
      alwaysSet?: boolean;
    }[],
  ): SyncParseReturnType;
}
interface ParseResult {
  status: 'aborted' | 'dirty' | 'valid';
  data: any;
}
declare type INVALID = {
  status: 'aborted';
};
declare const INVALID: INVALID;
declare type DIRTY<T> = {
  status: 'dirty';
  value: T;
};
declare const DIRTY: <T>(value: T) => DIRTY<T>;
declare type OK<T> = {
  status: 'valid';
  value: T;
};
declare const OK: <T>(value: T) => OK<T>;
declare type SyncParseReturnType<T = any> = OK<T> | DIRTY<T> | INVALID;
declare type AsyncParseReturnType<T> = Promise<SyncParseReturnType<T>>;
declare type ParseReturnType<T> = SyncParseReturnType<T> | AsyncParseReturnType<T>;
declare const isAborted: (x: ParseReturnType<any>) => x is INVALID;
declare const isDirty: <T>(x: ParseReturnType<T>) => x is OK<T> | DIRTY<T>;
declare const isValid: <T>(x: ParseReturnType<T>) => x is OK<T>;
declare const isAsync: <T>(x: ParseReturnType<T>) => x is AsyncParseReturnType<T>;

declare namespace enumUtil {
  type UnionToIntersectionFn<T> = (T extends unknown ? (k: () => T) => void : never) extends (
    k: infer Intersection,
  ) => void
    ? Intersection
    : never;
  type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer Last ? Last : never;
  type UnionToTuple<T, Tuple extends unknown[] = []> = [T] extends [never]
    ? Tuple
    : UnionToTuple<Exclude<T, GetUnionLast<T>>, [GetUnionLast<T>, ...Tuple]>;
  type CastToStringTuple<T> = T extends [string, ...string[]] ? T : never;
  export type UnionToTupleString<T> = CastToStringTuple<UnionToTuple<T>>;
  export {};
}

declare namespace errorUtil {
  type ErrMessage =
    | string
    | {
        message?: string;
      };
  const errToObj: (message?: ErrMessage | undefined) => {
    message?: string | undefined;
  };
  const toString: (message?: ErrMessage | undefined) => string | undefined;
}

declare namespace partialUtil {
  type DeepPartial<T extends ZodTypeAny> =
    T extends ZodObject<ZodRawShape>
      ? ZodObject<
          {
            [k in keyof T['shape']]: ZodOptional<DeepPartial<T['shape'][k]>>;
          },
          T['_def']['unknownKeys'],
          T['_def']['catchall']
        >
      : T extends ZodArray<infer Type, infer Card>
        ? ZodArray<DeepPartial<Type>, Card>
        : T extends ZodOptional<infer Type>
          ? ZodOptional<DeepPartial<Type>>
          : T extends ZodNullable<infer Type>
            ? ZodNullable<DeepPartial<Type>>
            : T extends ZodTuple<infer Items>
              ? {
                  [k in keyof Items]: Items[k] extends ZodTypeAny ? DeepPartial<Items[k]> : never;
                } extends infer PI
                ? PI extends ZodTupleItems
                  ? ZodTuple<PI>
                  : never
                : never
              : T;
}

interface RefinementCtx {
  addIssue: (arg: IssueData) => void;
  path: (string | number)[];
}
declare type ZodRawShape = {
  [k: string]: ZodTypeAny;
};
declare type ZodTypeAny = ZodType<any, any, any>;
declare type TypeOf<T extends ZodType<any, any, any>> = T['_output'];
declare type input<T extends ZodType<any, any, any>> = T['_input'];
declare type output<T extends ZodType<any, any, any>> = T['_output'];

declare type CustomErrorParams = Partial<util.Omit<ZodCustomIssue, 'code'>>;
interface ZodTypeDef {
  errorMap?: ZodErrorMap;
  description?: string;
}
declare type RawCreateParams =
  | {
      errorMap?: ZodErrorMap;
      invalid_type_error?: string;
      required_error?: string;
      message?: string;
      description?: string;
    }
  | undefined;
declare type ProcessedCreateParams = {
  errorMap?: ZodErrorMap;
  description?: string;
};
declare type SafeParseSuccess<Output> = {
  success: true;
  data: Output;
  error?: never;
};
declare type SafeParseError<Input> = {
  success: false;
  error: ZodError<Input>;
  data?: never;
};
declare type SafeParseReturnType<Input, Output> = SafeParseSuccess<Output> | SafeParseError<Input>;
declare abstract class ZodType<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> {
  readonly _type: Output;
  readonly _output: Output;
  readonly _input: Input;
  readonly _def: Def;
  get description(): string | undefined;
  abstract _parse(input: ParseInput): ParseReturnType<Output>;
  _getType(input: ParseInput): string;
  _getOrReturnCtx(input: ParseInput, ctx?: ParseContext | undefined): ParseContext;
  _processInputParams(input: ParseInput): {
    status: ParseStatus;
    ctx: ParseContext;
  };
  _parseSync(input: ParseInput): SyncParseReturnType<Output>;
  _parseAsync(input: ParseInput): AsyncParseReturnType<Output>;
  parse(data: unknown, params?: Partial<ParseParams>): Output;
  safeParse(data: unknown, params?: Partial<ParseParams>): SafeParseReturnType<Input, Output>;
  parseAsync(data: unknown, params?: Partial<ParseParams>): Promise<Output>;
  safeParseAsync(data: unknown, params?: Partial<ParseParams>): Promise<SafeParseReturnType<Input, Output>>;
  /** Alias of safeParseAsync */
  spa: (data: unknown, params?: Partial<ParseParams> | undefined) => Promise<SafeParseReturnType<Input, Output>>;
  refine<RefinedOutput extends Output>(
    check: (arg: Output) => arg is RefinedOutput,
    message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams),
  ): ZodEffects<this, RefinedOutput, Input>;
  refine(
    check: (arg: Output) => unknown | Promise<unknown>,
    message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams),
  ): ZodEffects<this, Output, Input>;
  refinement<RefinedOutput extends Output>(
    check: (arg: Output) => arg is RefinedOutput,
    refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData),
  ): ZodEffects<this, RefinedOutput, Input>;
  refinement(
    check: (arg: Output) => boolean,
    refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData),
  ): ZodEffects<this, Output, Input>;
  _refinement(refinement: RefinementEffect<Output>['refinement']): ZodEffects<this, Output, Input>;
  superRefine<RefinedOutput extends Output>(
    refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput,
  ): ZodEffects<this, RefinedOutput, Input>;
  superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<this, Output, Input>;
  superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<this, Output, Input>;
  constructor(def: Def);
  optional(): ZodOptional<this>;
  nullable(): ZodNullable<this>;
  nullish(): ZodOptional<ZodNullable<this>>;
  array(): ZodArray<this>;
  promise(): ZodPromise<this>;
  or<T extends ZodTypeAny>(option: T): ZodUnion<[this, T]>;
  and<T extends ZodTypeAny>(incoming: T): ZodIntersection<this, T>;
  transform<NewOut>(transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>): ZodEffects<this, NewOut>;
  default(def: util.noUndefined<Input>): ZodDefault<this>;
  default(def: () => util.noUndefined<Input>): ZodDefault<this>;
  brand<B extends string | number | symbol>(brand?: B): ZodBranded<this, B>;
  catch(def: Output): ZodCatch<this>;
  catch(def: (ctx: { error: ZodError; input: Input }) => Output): ZodCatch<this>;
  describe(description: string): this;
  pipe<T extends ZodTypeAny>(target: T): ZodPipeline<this, T>;
  readonly(): ZodReadonly<this>;
  isOptional(): boolean;
  isNullable(): boolean;
}
declare type IpVersion = 'v4' | 'v6';
declare type ZodStringCheck =
  | {
      kind: 'min';
      value: number;
      message?: string;
    }
  | {
      kind: 'max';
      value: number;
      message?: string;
    }
  | {
      kind: 'length';
      value: number;
      message?: string;
    }
  | {
      kind: 'email';
      message?: string;
    }
  | {
      kind: 'url';
      message?: string;
    }
  | {
      kind: 'emoji';
      message?: string;
    }
  | {
      kind: 'uuid';
      message?: string;
    }
  | {
      kind: 'nanoid';
      message?: string;
    }
  | {
      kind: 'cuid';
      message?: string;
    }
  | {
      kind: 'includes';
      value: string;
      position?: number;
      message?: string;
    }
  | {
      kind: 'cuid2';
      message?: string;
    }
  | {
      kind: 'ulid';
      message?: string;
    }
  | {
      kind: 'startsWith';
      value: string;
      message?: string;
    }
  | {
      kind: 'endsWith';
      value: string;
      message?: string;
    }
  | {
      kind: 'regex';
      regex: RegExp;
      message?: string;
    }
  | {
      kind: 'trim';
      message?: string;
    }
  | {
      kind: 'toLowerCase';
      message?: string;
    }
  | {
      kind: 'toUpperCase';
      message?: string;
    }
  | {
      kind: 'datetime';
      offset: boolean;
      local: boolean;
      precision: number | null;
      message?: string;
    }
  | {
      kind: 'date';
      message?: string;
    }
  | {
      kind: 'time';
      precision: number | null;
      message?: string;
    }
  | {
      kind: 'duration';
      message?: string;
    }
  | {
      kind: 'ip';
      version?: IpVersion;
      message?: string;
    }
  | {
      kind: 'base64';
      message?: string;
    };
interface ZodStringDef extends ZodTypeDef {
  checks: ZodStringCheck[];
  typeName: ZodFirstPartyTypeKind.ZodString;
  coerce: boolean;
}
declare function datetimeRegex(args: { precision?: number | null; offset?: boolean; local?: boolean }): RegExp;
declare class ZodString extends ZodType<string, ZodStringDef, string> {
  _parse(input: ParseInput): ParseReturnType<string>;
  protected _regex(
    regex: RegExp,
    validation: StringValidation,
    message?: errorUtil.ErrMessage,
  ): ZodEffects<this, string, string>;
  _addCheck(check: ZodStringCheck): ZodString;
  email(message?: errorUtil.ErrMessage): ZodString;
  url(message?: errorUtil.ErrMessage): ZodString;
  emoji(message?: errorUtil.ErrMessage): ZodString;
  uuid(message?: errorUtil.ErrMessage): ZodString;
  nanoid(message?: errorUtil.ErrMessage): ZodString;
  cuid(message?: errorUtil.ErrMessage): ZodString;
  cuid2(message?: errorUtil.ErrMessage): ZodString;
  ulid(message?: errorUtil.ErrMessage): ZodString;
  base64(message?: errorUtil.ErrMessage): ZodString;
  ip(
    options?:
      | string
      | {
          version?: 'v4' | 'v6';
          message?: string;
        },
  ): ZodString;
  datetime(
    options?:
      | string
      | {
          message?: string | undefined;
          precision?: number | null;
          offset?: boolean;
          local?: boolean;
        },
  ): ZodString;
  date(message?: string): ZodString;
  time(
    options?:
      | string
      | {
          message?: string | undefined;
          precision?: number | null;
        },
  ): ZodString;
  duration(message?: errorUtil.ErrMessage): ZodString;
  regex(regex: RegExp, message?: errorUtil.ErrMessage): ZodString;
  includes(
    value: string,
    options?: {
      message?: string;
      position?: number;
    },
  ): ZodString;
  startsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
  endsWith(value: string, message?: errorUtil.ErrMessage): ZodString;
  min(minLength: number, message?: errorUtil.ErrMessage): ZodString;
  max(maxLength: number, message?: errorUtil.ErrMessage): ZodString;
  length(len: number, message?: errorUtil.ErrMessage): ZodString;
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message?: errorUtil.ErrMessage): ZodString;
  trim(): ZodString;
  toLowerCase(): ZodString;
  toUpperCase(): ZodString;
  get isDatetime(): boolean;
  get isDate(): boolean;
  get isTime(): boolean;
  get isDuration(): boolean;
  get isEmail(): boolean;
  get isURL(): boolean;
  get isEmoji(): boolean;
  get isUUID(): boolean;
  get isNANOID(): boolean;
  get isCUID(): boolean;
  get isCUID2(): boolean;
  get isULID(): boolean;
  get isIP(): boolean;
  get isBase64(): boolean;
  get minLength(): number | null;
  get maxLength(): number | null;
  static create: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: true | undefined;
        })
      | undefined,
  ) => ZodString;
}
declare type ZodNumberCheck =
  | {
      kind: 'min';
      value: number;
      inclusive: boolean;
      message?: string;
    }
  | {
      kind: 'max';
      value: number;
      inclusive: boolean;
      message?: string;
    }
  | {
      kind: 'int';
      message?: string;
    }
  | {
      kind: 'multipleOf';
      value: number;
      message?: string;
    }
  | {
      kind: 'finite';
      message?: string;
    };
interface ZodNumberDef extends ZodTypeDef {
  checks: ZodNumberCheck[];
  typeName: ZodFirstPartyTypeKind.ZodNumber;
  coerce: boolean;
}
declare class ZodNumber extends ZodType<number, ZodNumberDef, number> {
  _parse(input: ParseInput): ParseReturnType<number>;
  static create: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodNumber;
  gte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
  min: (value: number, message?: errorUtil.ErrMessage | undefined) => ZodNumber;
  gt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
  lte(value: number, message?: errorUtil.ErrMessage): ZodNumber;
  max: (value: number, message?: errorUtil.ErrMessage | undefined) => ZodNumber;
  lt(value: number, message?: errorUtil.ErrMessage): ZodNumber;
  protected setLimit(kind: 'min' | 'max', value: number, inclusive: boolean, message?: string): ZodNumber;
  _addCheck(check: ZodNumberCheck): ZodNumber;
  int(message?: errorUtil.ErrMessage): ZodNumber;
  positive(message?: errorUtil.ErrMessage): ZodNumber;
  negative(message?: errorUtil.ErrMessage): ZodNumber;
  nonpositive(message?: errorUtil.ErrMessage): ZodNumber;
  nonnegative(message?: errorUtil.ErrMessage): ZodNumber;
  multipleOf(value: number, message?: errorUtil.ErrMessage): ZodNumber;
  step: (value: number, message?: errorUtil.ErrMessage | undefined) => ZodNumber;
  finite(message?: errorUtil.ErrMessage): ZodNumber;
  safe(message?: errorUtil.ErrMessage): ZodNumber;
  get minValue(): number | null;
  get maxValue(): number | null;
  get isInt(): boolean;
  get isFinite(): boolean;
}
declare type ZodBigIntCheck =
  | {
      kind: 'min';
      value: bigint;
      inclusive: boolean;
      message?: string;
    }
  | {
      kind: 'max';
      value: bigint;
      inclusive: boolean;
      message?: string;
    }
  | {
      kind: 'multipleOf';
      value: bigint;
      message?: string;
    };
interface ZodBigIntDef extends ZodTypeDef {
  checks: ZodBigIntCheck[];
  typeName: ZodFirstPartyTypeKind.ZodBigInt;
  coerce: boolean;
}
declare class ZodBigInt extends ZodType<bigint, ZodBigIntDef, bigint> {
  _parse(input: ParseInput): ParseReturnType<bigint>;
  static create: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodBigInt;
  gte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
  min: (value: bigint, message?: errorUtil.ErrMessage | undefined) => ZodBigInt;
  gt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
  lte(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
  max: (value: bigint, message?: errorUtil.ErrMessage | undefined) => ZodBigInt;
  lt(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
  protected setLimit(kind: 'min' | 'max', value: bigint, inclusive: boolean, message?: string): ZodBigInt;
  _addCheck(check: ZodBigIntCheck): ZodBigInt;
  positive(message?: errorUtil.ErrMessage): ZodBigInt;
  negative(message?: errorUtil.ErrMessage): ZodBigInt;
  nonpositive(message?: errorUtil.ErrMessage): ZodBigInt;
  nonnegative(message?: errorUtil.ErrMessage): ZodBigInt;
  multipleOf(value: bigint, message?: errorUtil.ErrMessage): ZodBigInt;
  get minValue(): bigint | null;
  get maxValue(): bigint | null;
}
interface ZodBooleanDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodBoolean;
  coerce: boolean;
}
declare class ZodBoolean extends ZodType<boolean, ZodBooleanDef, boolean> {
  _parse(input: ParseInput): ParseReturnType<boolean>;
  static create: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodBoolean;
}
declare type ZodDateCheck =
  | {
      kind: 'min';
      value: number;
      message?: string;
    }
  | {
      kind: 'max';
      value: number;
      message?: string;
    };
interface ZodDateDef extends ZodTypeDef {
  checks: ZodDateCheck[];
  coerce: boolean;
  typeName: ZodFirstPartyTypeKind.ZodDate;
}
declare class ZodDate extends ZodType<Date, ZodDateDef, Date> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  _addCheck(check: ZodDateCheck): ZodDate;
  min(minDate: Date, message?: errorUtil.ErrMessage): ZodDate;
  max(maxDate: Date, message?: errorUtil.ErrMessage): ZodDate;
  get minDate(): Date | null;
  get maxDate(): Date | null;
  static create: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodDate;
}
interface ZodSymbolDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodSymbol;
}
declare class ZodSymbol extends ZodType<symbol, ZodSymbolDef, symbol> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodSymbol;
}
interface ZodUndefinedDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodUndefined;
}
declare class ZodUndefined extends ZodType<undefined, ZodUndefinedDef, undefined> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  params?: RawCreateParams;
  static create: (params?: RawCreateParams) => ZodUndefined;
}
interface ZodNullDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNull;
}
declare class ZodNull extends ZodType<null, ZodNullDef, null> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodNull;
}
interface ZodAnyDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodAny;
}
declare class ZodAny extends ZodType<any, ZodAnyDef, any> {
  _any: true;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodAny;
}
interface ZodUnknownDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodUnknown;
}
declare class ZodUnknown extends ZodType<unknown, ZodUnknownDef, unknown> {
  _unknown: true;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodUnknown;
}
interface ZodNeverDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNever;
}
declare class ZodNever extends ZodType<never, ZodNeverDef, never> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodNever;
}
interface ZodVoidDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodVoid;
}
declare class ZodVoid extends ZodType<void, ZodVoidDef, void> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: (params?: RawCreateParams) => ZodVoid;
}
interface ZodArrayDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodArray;
  exactLength: {
    value: number;
    message?: string;
  } | null;
  minLength: {
    value: number;
    message?: string;
  } | null;
  maxLength: {
    value: number;
    message?: string;
  } | null;
}
declare type ArrayCardinality = 'many' | 'atleastone';
declare type arrayOutputType<
  T extends ZodTypeAny,
  Cardinality extends ArrayCardinality = 'many',
> = Cardinality extends 'atleastone' ? [T['_output'], ...T['_output'][]] : T['_output'][];
declare class ZodArray<T extends ZodTypeAny, Cardinality extends ArrayCardinality = 'many'> extends ZodType<
  arrayOutputType<T, Cardinality>,
  ZodArrayDef<T>,
  Cardinality extends 'atleastone' ? [T['_input'], ...T['_input'][]] : T['_input'][]
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get element(): T;
  min(minLength: number, message?: errorUtil.ErrMessage): this;
  max(maxLength: number, message?: errorUtil.ErrMessage): this;
  length(len: number, message?: errorUtil.ErrMessage): this;
  nonempty(message?: errorUtil.ErrMessage): ZodArray<T, 'atleastone'>;
  static create: <T_1 extends ZodTypeAny>(schema: T_1, params?: RawCreateParams) => ZodArray<T_1, 'many'>;
}
declare type ZodNonEmptyArray<T extends ZodTypeAny> = ZodArray<T, 'atleastone'>;
declare type UnknownKeysParam = 'passthrough' | 'strict' | 'strip';
interface ZodObjectDef<
  T extends ZodRawShape = ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
> extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodObject;
  shape: () => T;
  catchall: Catchall;
  unknownKeys: UnknownKeys;
}
declare type mergeTypes<A, B> = {
  [k in keyof A | keyof B]: k extends keyof B ? B[k] : k extends keyof A ? A[k] : never;
};
declare type objectOutputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectUtil.flatten<objectUtil.addQuestionMarks<baseObjectOutputType<Shape>>> &
  CatchallOutput<Catchall> &
  PassthroughType<UnknownKeys>;
declare type baseObjectOutputType<Shape extends ZodRawShape> = {
  [k in keyof Shape]: Shape[k]['_output'];
};
declare type objectInputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectUtil.flatten<baseObjectInputType<Shape>> & CatchallInput<Catchall> & PassthroughType<UnknownKeys>;
declare type baseObjectInputType<Shape extends ZodRawShape> = objectUtil.addQuestionMarks<{
  [k in keyof Shape]: Shape[k]['_input'];
}>;
declare type CatchallOutput<T extends ZodType> = ZodType extends T
  ? unknown
  : {
      [k: string]: T['_output'];
    };
declare type CatchallInput<T extends ZodType> = ZodType extends T
  ? unknown
  : {
      [k: string]: T['_input'];
    };
declare type PassthroughType<T extends UnknownKeysParam> = T extends 'passthrough'
  ? {
      [k: string]: unknown;
    }
  : unknown;
declare type deoptional<T extends ZodTypeAny> =
  T extends ZodOptional<infer U> ? deoptional<U> : T extends ZodNullable<infer U> ? ZodNullable<deoptional<U>> : T;
declare type SomeZodObject = ZodObject<ZodRawShape, UnknownKeysParam, ZodTypeAny>;
declare type noUnrecognized<Obj extends object, Shape extends object> = {
  [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never;
};
declare class ZodObject<
  T extends ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output = objectOutputType<T, Catchall, UnknownKeys>,
  Input = objectInputType<T, Catchall, UnknownKeys>,
> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
  private _cached;
  _getCached(): {
    shape: T;
    keys: string[];
  };
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get shape(): T;
  strict(message?: errorUtil.ErrMessage): ZodObject<T, 'strict', Catchall>;
  strip(): ZodObject<T, 'strip', Catchall>;
  passthrough(): ZodObject<T, 'passthrough', Catchall>;
  /**
   * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
   * If you want to pass through unknown properties, use \`.passthrough()\` instead.
   */
  nonstrict: () => ZodObject<T, 'passthrough', Catchall>;
  extend<Augmentation extends ZodRawShape>(
    augmentation: Augmentation,
  ): ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall>;
  /**
   * @deprecated Use \`.extend\` instead
   *  */
  augment: <Augmentation extends ZodRawShape>(
    augmentation: Augmentation,
  ) => ZodObject<
    objectUtil.extendShape<T, Augmentation>,
    UnknownKeys,
    Catchall,
    objectOutputType<objectUtil.extendShape<T, Augmentation>, Catchall, UnknownKeys>,
    objectInputType<objectUtil.extendShape<T, Augmentation>, Catchall, UnknownKeys>
  >;
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge<Incoming extends AnyZodObject, Augmentation extends Incoming['shape']>(
    merging: Incoming,
  ): ZodObject<objectUtil.extendShape<T, Augmentation>, Incoming['_def']['unknownKeys'], Incoming['_def']['catchall']>;
  setKey<Key extends string, Schema extends ZodTypeAny>(
    key: Key,
    schema: Schema,
  ): ZodObject<
    T & {
      [k in Key]: Schema;
    },
    UnknownKeys,
    Catchall
  >;
  catchall<Index extends ZodTypeAny>(index: Index): ZodObject<T, UnknownKeys, Index>;
  pick<
    Mask extends util.Exactly<
      {
        [k in keyof T]?: true;
      },
      Mask
    >,
  >(mask: Mask): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall>;
  omit<
    Mask extends util.Exactly<
      {
        [k in keyof T]?: true;
      },
      Mask
    >,
  >(mask: Mask): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall>;
  /**
   * @deprecated
   */
  deepPartial(): partialUtil.DeepPartial<this>;
  partial(): ZodObject<
    {
      [k in keyof T]: ZodOptional<T[k]>;
    },
    UnknownKeys,
    Catchall
  >;
  partial<
    Mask extends util.Exactly<
      {
        [k in keyof T]?: true;
      },
      Mask
    >,
  >(
    mask: Mask,
  ): ZodObject<
    objectUtil.noNever<{
      [k in keyof T]: k extends keyof Mask ? ZodOptional<T[k]> : T[k];
    }>,
    UnknownKeys,
    Catchall
  >;
  required(): ZodObject<
    {
      [k in keyof T]: deoptional<T[k]>;
    },
    UnknownKeys,
    Catchall
  >;
  required<
    Mask extends util.Exactly<
      {
        [k in keyof T]?: true;
      },
      Mask
    >,
  >(
    mask: Mask,
  ): ZodObject<
    objectUtil.noNever<{
      [k in keyof T]: k extends keyof Mask ? deoptional<T[k]> : T[k];
    }>,
    UnknownKeys,
    Catchall
  >;
  keyof(): ZodEnum<enumUtil.UnionToTupleString<keyof T>>;
  static create: <T_1 extends ZodRawShape>(
    shape: T_1,
    params?: RawCreateParams,
  ) => ZodObject<
    T_1,
    'strip',
    ZodTypeAny,
    {
      [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>]: objectUtil.addQuestionMarks<
        baseObjectOutputType<T_1>,
        any
      >[k];
    },
    { [k_1 in keyof baseObjectInputType<T_1>]: baseObjectInputType<T_1>[k_1] }
  >;
  static strictCreate: <T_1 extends ZodRawShape>(
    shape: T_1,
    params?: RawCreateParams,
  ) => ZodObject<
    T_1,
    'strict',
    ZodTypeAny,
    {
      [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>]: objectUtil.addQuestionMarks<
        baseObjectOutputType<T_1>,
        any
      >[k];
    },
    { [k_1 in keyof baseObjectInputType<T_1>]: baseObjectInputType<T_1>[k_1] }
  >;
  static lazycreate: <T_1 extends ZodRawShape>(
    shape: () => T_1,
    params?: RawCreateParams,
  ) => ZodObject<
    T_1,
    'strip',
    ZodTypeAny,
    {
      [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T_1>, any>]: objectUtil.addQuestionMarks<
        baseObjectOutputType<T_1>,
        any
      >[k];
    },
    { [k_1 in keyof baseObjectInputType<T_1>]: baseObjectInputType<T_1>[k_1] }
  >;
}
declare type AnyZodObject = ZodObject<any, any, any>;
declare type ZodUnionOptions = Readonly<[ZodTypeAny, ...ZodTypeAny[]]>;
interface ZodUnionDef<T extends ZodUnionOptions = Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>>
  extends ZodTypeDef {
  options: T;
  typeName: ZodFirstPartyTypeKind.ZodUnion;
}
declare class ZodUnion<T extends ZodUnionOptions> extends ZodType<
  T[number]['_output'],
  ZodUnionDef<T>,
  T[number]['_input']
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get options(): T;
  static create: <T_1 extends readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>(
    types: T_1,
    params?: RawCreateParams,
  ) => ZodUnion<T_1>;
}
declare type ZodDiscriminatedUnionOption<Discriminator extends string> = ZodObject<
  {
    [key in Discriminator]: ZodTypeAny;
  } & ZodRawShape,
  UnknownKeysParam,
  ZodTypeAny
>;
interface ZodDiscriminatedUnionDef<
  Discriminator extends string,
  Options extends ZodDiscriminatedUnionOption<string>[] = ZodDiscriminatedUnionOption<string>[],
> extends ZodTypeDef {
  discriminator: Discriminator;
  options: Options;
  optionsMap: Map<Primitive, ZodDiscriminatedUnionOption<any>>;
  typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion;
}
declare class ZodDiscriminatedUnion<
  Discriminator extends string,
  Options extends ZodDiscriminatedUnionOption<Discriminator>[],
> extends ZodType<output<Options[number]>, ZodDiscriminatedUnionDef<Discriminator, Options>, input<Options[number]>> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get discriminator(): Discriminator;
  get options(): Options;
  get optionsMap(): Map<Primitive, ZodDiscriminatedUnionOption<any>>;
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create<
    Discriminator extends string,
    Types extends [ZodDiscriminatedUnionOption<Discriminator>, ...ZodDiscriminatedUnionOption<Discriminator>[]],
  >(
    discriminator: Discriminator,
    options: Types,
    params?: RawCreateParams,
  ): ZodDiscriminatedUnion<Discriminator, Types>;
}
interface ZodIntersectionDef<T extends ZodTypeAny = ZodTypeAny, U extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  left: T;
  right: U;
  typeName: ZodFirstPartyTypeKind.ZodIntersection;
}
declare class ZodIntersection<T extends ZodTypeAny, U extends ZodTypeAny> extends ZodType<
  T['_output'] & U['_output'],
  ZodIntersectionDef<T, U>,
  T['_input'] & U['_input']
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <T_1 extends ZodTypeAny, U_1 extends ZodTypeAny>(
    left: T_1,
    right: U_1,
    params?: RawCreateParams,
  ) => ZodIntersection<T_1, U_1>;
}
declare type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
declare type AssertArray<T> = T extends any[] ? T : never;
declare type OutputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
  [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]['_output'] : never;
}>;
declare type OutputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = Rest extends ZodTypeAny ? [...OutputTypeOfTuple<T>, ...Rest['_output'][]] : OutputTypeOfTuple<T>;
declare type InputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
  [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]['_input'] : never;
}>;
declare type InputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = Rest extends ZodTypeAny ? [...InputTypeOfTuple<T>, ...Rest['_input'][]] : InputTypeOfTuple<T>;
interface ZodTupleDef<T extends ZodTupleItems | [] = ZodTupleItems, Rest extends ZodTypeAny | null = null>
  extends ZodTypeDef {
  items: T;
  rest: Rest;
  typeName: ZodFirstPartyTypeKind.ZodTuple;
}
declare type AnyZodTuple = ZodTuple<[ZodTypeAny, ...ZodTypeAny[]] | [], ZodTypeAny | null>;
declare class ZodTuple<
  T extends [ZodTypeAny, ...ZodTypeAny[]] | [] = [ZodTypeAny, ...ZodTypeAny[]],
  Rest extends ZodTypeAny | null = null,
> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get items(): T;
  rest<Rest extends ZodTypeAny>(rest: Rest): ZodTuple<T, Rest>;
  static create: <T_1 extends [] | [ZodTypeAny, ...ZodTypeAny[]]>(
    schemas: T_1,
    params?: RawCreateParams,
  ) => ZodTuple<T_1, null>;
}
interface ZodRecordDef<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  valueType: Value;
  keyType: Key;
  typeName: ZodFirstPartyTypeKind.ZodRecord;
}
declare type KeySchema = ZodType<string | number | symbol, any, any>;
declare type RecordType<K extends string | number | symbol, V> = [string] extends [K]
  ? Record<K, V>
  : [number] extends [K]
    ? Record<K, V>
    : [symbol] extends [K]
      ? Record<K, V>
      : [BRAND<string | number | symbol>] extends [K]
        ? Record<K, V>
        : Partial<Record<K, V>>;
declare class ZodRecord<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  RecordType<Key['_output'], Value['_output']>,
  ZodRecordDef<Key, Value>,
  RecordType<Key['_input'], Value['_input']>
> {
  get keySchema(): Key;
  get valueSchema(): Value;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get element(): Value;
  static create<Value extends ZodTypeAny>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>;
  static create<Keys extends KeySchema, Value extends ZodTypeAny>(
    keySchema: Keys,
    valueType: Value,
    params?: RawCreateParams,
  ): ZodRecord<Keys, Value>;
}
interface ZodMapDef<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  valueType: Value;
  keyType: Key;
  typeName: ZodFirstPartyTypeKind.ZodMap;
}
declare class ZodMap<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  Map<Key['_output'], Value['_output']>,
  ZodMapDef<Key, Value>,
  Map<Key['_input'], Value['_input']>
> {
  get keySchema(): Key;
  get valueSchema(): Value;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <Key_1 extends ZodTypeAny = ZodTypeAny, Value_1 extends ZodTypeAny = ZodTypeAny>(
    keyType: Key_1,
    valueType: Value_1,
    params?: RawCreateParams,
  ) => ZodMap<Key_1, Value_1>;
}
interface ZodSetDef<Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  valueType: Value;
  typeName: ZodFirstPartyTypeKind.ZodSet;
  minSize: {
    value: number;
    message?: string;
  } | null;
  maxSize: {
    value: number;
    message?: string;
  } | null;
}
declare class ZodSet<Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  Set<Value['_output']>,
  ZodSetDef<Value>,
  Set<Value['_input']>
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  min(minSize: number, message?: errorUtil.ErrMessage): this;
  max(maxSize: number, message?: errorUtil.ErrMessage): this;
  size(size: number, message?: errorUtil.ErrMessage): this;
  nonempty(message?: errorUtil.ErrMessage): ZodSet<Value>;
  static create: <Value_1 extends ZodTypeAny = ZodTypeAny>(
    valueType: Value_1,
    params?: RawCreateParams,
  ) => ZodSet<Value_1>;
}
interface ZodFunctionDef<Args extends ZodTuple<any, any> = ZodTuple<any, any>, Returns extends ZodTypeAny = ZodTypeAny>
  extends ZodTypeDef {
  args: Args;
  returns: Returns;
  typeName: ZodFirstPartyTypeKind.ZodFunction;
}
declare type OuterTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> =
  Args['_input'] extends Array<any> ? (...args: Args['_input']) => Returns['_output'] : never;
declare type InnerTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> =
  Args['_output'] extends Array<any> ? (...args: Args['_output']) => Returns['_input'] : never;
declare class ZodFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> extends ZodType<
  OuterTypeOfFunction<Args, Returns>,
  ZodFunctionDef<Args, Returns>,
  InnerTypeOfFunction<Args, Returns>
> {
  _parse(input: ParseInput): ParseReturnType<any>;
  parameters(): Args;
  returnType(): Returns;
  args<Items extends Parameters<(typeof ZodTuple)['create']>[0]>(
    ...items: Items
  ): ZodFunction<ZodTuple<Items, ZodUnknown>, Returns>;
  returns<NewReturnType extends ZodType<any, any, any>>(returnType: NewReturnType): ZodFunction<Args, NewReturnType>;
  implement<F extends InnerTypeOfFunction<Args, Returns>>(
    func: F,
  ): ReturnType<F> extends Returns['_output']
    ? (...args: Args['_input']) => ReturnType<F>
    : OuterTypeOfFunction<Args, Returns>;
  strictImplement(func: InnerTypeOfFunction<Args, Returns>): InnerTypeOfFunction<Args, Returns>;
  validate: <F extends InnerTypeOfFunction<Args, Returns>>(
    func: F,
  ) => ReturnType<F> extends Returns['_output']
    ? (...args: Args['_input']) => ReturnType<F>
    : OuterTypeOfFunction<Args, Returns>;
  static create(): ZodFunction<ZodTuple<[], ZodUnknown>, ZodUnknown>;
  static create<T extends AnyZodTuple = ZodTuple<[], ZodUnknown>>(args: T): ZodFunction<T, ZodUnknown>;
  static create<T extends AnyZodTuple, U extends ZodTypeAny>(args: T, returns: U): ZodFunction<T, U>;
  static create<T extends AnyZodTuple = ZodTuple<[], ZodUnknown>, U extends ZodTypeAny = ZodUnknown>(
    args: T,
    returns: U,
    params?: RawCreateParams,
  ): ZodFunction<T, U>;
}
interface ZodLazyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  getter: () => T;
  typeName: ZodFirstPartyTypeKind.ZodLazy;
}
declare class ZodLazy<T extends ZodTypeAny> extends ZodType<output<T>, ZodLazyDef<T>, input<T>> {
  get schema(): T;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <T_1 extends ZodTypeAny>(getter: () => T_1, params?: RawCreateParams) => ZodLazy<T_1>;
}
interface ZodLiteralDef<T = any> extends ZodTypeDef {
  value: T;
  typeName: ZodFirstPartyTypeKind.ZodLiteral;
}
declare class ZodLiteral<T> extends ZodType<T, ZodLiteralDef<T>, T> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get value(): T;
  static create: <T_1 extends Primitive>(value: T_1, params?: RawCreateParams) => ZodLiteral<T_1>;
}
declare type ArrayKeys = keyof any[];
declare type Indices<T> = Exclude<keyof T, ArrayKeys>;
declare type EnumValues<T extends string = string> = readonly [T, ...T[]];
declare type Values<T extends EnumValues> = {
  [k in T[number]]: k;
};
interface ZodEnumDef<T extends EnumValues = EnumValues> extends ZodTypeDef {
  values: T;
  typeName: ZodFirstPartyTypeKind.ZodEnum;
}
declare type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};
declare type FilterEnum<Values, ToExclude> = Values extends []
  ? []
  : Values extends [infer Head, ...infer Rest]
    ? Head extends ToExclude
      ? FilterEnum<Rest, ToExclude>
      : [Head, ...FilterEnum<Rest, ToExclude>]
    : never;
declare type typecast<A, T> = A extends T ? A : never;
declare function createZodEnum<U extends string, T extends Readonly<[U, ...U[]]>>(
  values: T,
  params?: RawCreateParams,
): ZodEnum<Writeable<T>>;
declare function createZodEnum<U extends string, T extends [U, ...U[]]>(
  values: T,
  params?: RawCreateParams,
): ZodEnum<T>;
declare class ZodEnum<T extends [string, ...string[]]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
  #private;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  get options(): T;
  get enum(): Values<T>;
  get Values(): Values<T>;
  get Enum(): Values<T>;
  extract<ToExtract extends readonly [T[number], ...T[number][]]>(
    values: ToExtract,
    newDef?: RawCreateParams,
  ): ZodEnum<Writeable<ToExtract>>;
  exclude<ToExclude extends readonly [T[number], ...T[number][]]>(
    values: ToExclude,
    newDef?: RawCreateParams,
  ): ZodEnum<typecast<Writeable<FilterEnum<T, ToExclude[number]>>, [string, ...string[]]>>;
  static create: typeof createZodEnum;
}
interface ZodNativeEnumDef<T extends EnumLike = EnumLike> extends ZodTypeDef {
  values: T;
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum;
}
declare type EnumLike = {
  [k: string]: string | number;
  [nu: number]: string;
};
declare class ZodNativeEnum<T extends EnumLike> extends ZodType<T[keyof T], ZodNativeEnumDef<T>, T[keyof T]> {
  #private;
  _parse(input: ParseInput): ParseReturnType<T[keyof T]>;
  get enum(): T;
  static create: <T_1 extends EnumLike>(values: T_1, params?: RawCreateParams) => ZodNativeEnum<T_1>;
}
interface ZodPromiseDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodPromise;
}
declare class ZodPromise<T extends ZodTypeAny> extends ZodType<
  Promise<T['_output']>,
  ZodPromiseDef<T>,
  Promise<T['_input']>
> {
  unwrap(): T;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <T_1 extends ZodTypeAny>(schema: T_1, params?: RawCreateParams) => ZodPromise<T_1>;
}
declare type Refinement<T> = (arg: T, ctx: RefinementCtx) => any;
declare type SuperRefinement<T> = (arg: T, ctx: RefinementCtx) => void | Promise<void>;
declare type RefinementEffect<T> = {
  type: 'refinement';
  refinement: (arg: T, ctx: RefinementCtx) => any;
};
declare type TransformEffect<T> = {
  type: 'transform';
  transform: (arg: T, ctx: RefinementCtx) => any;
};
declare type PreprocessEffect<T> = {
  type: 'preprocess';
  transform: (arg: T, ctx: RefinementCtx) => any;
};
declare type Effect<T> = RefinementEffect<T> | TransformEffect<T> | PreprocessEffect<T>;
interface ZodEffectsDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  schema: T;
  typeName: ZodFirstPartyTypeKind.ZodEffects;
  effect: Effect<any>;
}
declare class ZodEffects<T extends ZodTypeAny, Output = output<T>, Input = input<T>> extends ZodType<
  Output,
  ZodEffectsDef<T>,
  Input
> {
  innerType(): T;
  sourceType(): T;
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <I extends ZodTypeAny>(
    schema: I,
    effect: Effect<I['_output']>,
    params?: RawCreateParams,
  ) => ZodEffects<I, I['_output'], input<I>>;
  static createWithPreprocess: <I extends ZodTypeAny>(
    preprocess: (arg: unknown, ctx: RefinementCtx) => unknown,
    schema: I,
    params?: RawCreateParams,
  ) => ZodEffects<I, I['_output'], unknown>;
}

interface ZodOptionalDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodOptional;
}
declare type ZodOptionalType<T extends ZodTypeAny> = ZodOptional<T>;
declare class ZodOptional<T extends ZodTypeAny> extends ZodType<
  T['_output'] | undefined,
  ZodOptionalDef<T>,
  T['_input'] | undefined
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  unwrap(): T;
  static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodOptional<T_1>;
}
interface ZodNullableDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodNullable;
}
declare type ZodNullableType<T extends ZodTypeAny> = ZodNullable<T>;
declare class ZodNullable<T extends ZodTypeAny> extends ZodType<
  T['_output'] | null,
  ZodNullableDef<T>,
  T['_input'] | null
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  unwrap(): T;
  static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodNullable<T_1>;
}
interface ZodDefaultDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  defaultValue: () => util.noUndefined<T['_input']>;
  typeName: ZodFirstPartyTypeKind.ZodDefault;
}
declare class ZodDefault<T extends ZodTypeAny> extends ZodType<
  util.noUndefined<T['_output']>,
  ZodDefaultDef<T>,
  T['_input'] | undefined
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  removeDefault(): T;
  static create: <T_1 extends ZodTypeAny>(
    type: T_1,
    params: {
      errorMap?: ZodErrorMap | undefined;
      invalid_type_error?: string | undefined;
      required_error?: string | undefined;
      message?: string | undefined;
      description?: string | undefined;
    } & {
      default: T_1['_input'] | (() => util.noUndefined<T_1['_input']>);
    },
  ) => ZodDefault<T_1>;
}
interface ZodCatchDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  catchValue: (ctx: { error: ZodError; input: unknown }) => T['_input'];
  typeName: ZodFirstPartyTypeKind.ZodCatch;
}
declare class ZodCatch<T extends ZodTypeAny> extends ZodType<T['_output'], ZodCatchDef<T>, unknown> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  removeCatch(): T;
  static create: <T_1 extends ZodTypeAny>(
    type: T_1,
    params: {
      errorMap?: ZodErrorMap | undefined;
      invalid_type_error?: string | undefined;
      required_error?: string | undefined;
      message?: string | undefined;
      description?: string | undefined;
    } & {
      catch: T_1['_output'] | (() => T_1['_output']);
    },
  ) => ZodCatch<T_1>;
}
interface ZodNaNDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNaN;
}
declare class ZodNaN extends ZodType<number, ZodNaNDef, number> {
  _parse(input: ParseInput): ParseReturnType<any>;
  static create: (params?: RawCreateParams) => ZodNaN;
}
interface ZodBrandedDef<T extends ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodBranded;
}
declare const BRAND: unique symbol;
declare type BRAND<T extends string | number | symbol> = {
  [BRAND]: {
    [k in T]: true;
  };
};
declare class ZodBranded<T extends ZodTypeAny, B extends string | number | symbol> extends ZodType<
  T['_output'] & BRAND<B>,
  ZodBrandedDef<T>,
  T['_input']
> {
  _parse(input: ParseInput): ParseReturnType<any>;
  unwrap(): T;
}
interface ZodPipelineDef<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodTypeDef {
  in: A;
  out: B;
  typeName: ZodFirstPartyTypeKind.ZodPipeline;
}
declare class ZodPipeline<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodType<
  B['_output'],
  ZodPipelineDef<A, B>,
  A['_input']
> {
  _parse(input: ParseInput): ParseReturnType<any>;
  static create<A extends ZodTypeAny, B extends ZodTypeAny>(a: A, b: B): ZodPipeline<A, B>;
}
declare type BuiltIn =
  | (((...args: any[]) => any) | (new (...args: any[]) => any))
  | {
      readonly [Symbol.toStringTag]: string;
    }
  | Date
  | Error
  | Generator
  | Promise<unknown>
  | RegExp;
declare type MakeReadonly<T> =
  T extends Map<infer K, infer V>
    ? ReadonlyMap<K, V>
    : T extends Set<infer V>
      ? ReadonlySet<V>
      : T extends [infer Head, ...infer Tail]
        ? readonly [Head, ...Tail]
        : T extends Array<infer V>
          ? ReadonlyArray<V>
          : T extends BuiltIn
            ? T
            : Readonly<T>;
interface ZodReadonlyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodReadonly;
}
declare class ZodReadonly<T extends ZodTypeAny> extends ZodType<
  MakeReadonly<T['_output']>,
  ZodReadonlyDef<T>,
  MakeReadonly<T['_input']>
> {
  _parse(input: ParseInput): ParseReturnType<this['_output']>;
  static create: <T_1 extends ZodTypeAny>(type: T_1, params?: RawCreateParams) => ZodReadonly<T_1>;
  unwrap(): T;
}
declare type CustomParams = CustomErrorParams & {
  fatal?: boolean;
};
declare function custom<T>(
  check?: (data: any) => any,
  params?: string | CustomParams | ((input: any) => CustomParams),
  /**
   * @deprecated
   *
   * Pass \`fatal\` into the params object instead:
   *
   * \`\`\`ts
   * z.string().custom((val) => val.length > 5, { fatal: false })
   * \`\`\`
   *
   */
  fatal?: boolean,
): ZodType<T, ZodTypeDef, T>;

declare const late: {
  object: <T extends ZodRawShape>(
    shape: () => T,
    params?: RawCreateParams,
  ) => ZodObject<
    T,
    'strip',
    ZodTypeAny,
    {
      [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T>, any>]: objectUtil.addQuestionMarks<
        baseObjectOutputType<T>,
        any
      >[k];
    },
    { [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }
  >;
};
declare enum ZodFirstPartyTypeKind {
  ZodString = 'ZodString',
  ZodNumber = 'ZodNumber',
  ZodNaN = 'ZodNaN',
  ZodBigInt = 'ZodBigInt',
  ZodBoolean = 'ZodBoolean',
  ZodDate = 'ZodDate',
  ZodSymbol = 'ZodSymbol',
  ZodUndefined = 'ZodUndefined',
  ZodNull = 'ZodNull',
  ZodAny = 'ZodAny',
  ZodUnknown = 'ZodUnknown',
  ZodNever = 'ZodNever',
  ZodVoid = 'ZodVoid',
  ZodArray = 'ZodArray',
  ZodObject = 'ZodObject',
  ZodUnion = 'ZodUnion',
  ZodDiscriminatedUnion = 'ZodDiscriminatedUnion',
  ZodIntersection = 'ZodIntersection',
  ZodTuple = 'ZodTuple',
  ZodRecord = 'ZodRecord',
  ZodMap = 'ZodMap',
  ZodSet = 'ZodSet',
  ZodFunction = 'ZodFunction',
  ZodLazy = 'ZodLazy',
  ZodLiteral = 'ZodLiteral',
  ZodEnum = 'ZodEnum',
  ZodEffects = 'ZodEffects',
  ZodNativeEnum = 'ZodNativeEnum',
  ZodOptional = 'ZodOptional',
  ZodNullable = 'ZodNullable',
  ZodDefault = 'ZodDefault',
  ZodCatch = 'ZodCatch',
  ZodPromise = 'ZodPromise',
  ZodBranded = 'ZodBranded',
  ZodPipeline = 'ZodPipeline',
  ZodReadonly = 'ZodReadonly',
}
declare type ZodFirstPartySchemaTypes =
  | ZodString
  | ZodNumber
  | ZodNaN
  | ZodBigInt
  | ZodBoolean
  | ZodDate
  | ZodUndefined
  | ZodNull
  | ZodAny
  | ZodUnknown
  | ZodNever
  | ZodVoid
  | ZodArray<any, any>
  | ZodObject<any, any, any>
  | ZodUnion<any>
  | ZodDiscriminatedUnion<any, any>
  | ZodIntersection<any, any>
  | ZodTuple<any, any>
  | ZodRecord<any, any>
  | ZodMap<any>
  | ZodSet<any>
  | ZodFunction<any, any>
  | ZodLazy<any>
  | ZodLiteral<any>
  | ZodEnum<any>
  | ZodEffects<any, any, any>
  | ZodNativeEnum<any>
  | ZodOptional<any>
  | ZodNullable<any>
  | ZodDefault<any>
  | ZodCatch<any>
  | ZodPromise<any>
  | ZodBranded<any, any>
  | ZodPipeline<any, any>
  | ZodReadonly<any>
  | ZodSymbol;
declare abstract class Class {
  constructor(..._: any[]);
}
declare const instanceOfType: <T extends typeof Class>(
  cls: T,
  params?: CustomParams,
) => ZodType<InstanceType<T>, ZodTypeDef, InstanceType<T>>;
declare const stringType: (
  params?:
    | ({
        errorMap?: ZodErrorMap | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
      } & {
        coerce?: true | undefined;
      })
    | undefined,
) => ZodString;
declare const numberType: (
  params?:
    | ({
        errorMap?: ZodErrorMap | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
      } & {
        coerce?: boolean | undefined;
      })
    | undefined,
) => ZodNumber;
declare const nanType: (params?: RawCreateParams) => ZodNaN;
declare const bigIntType: (
  params?:
    | ({
        errorMap?: ZodErrorMap | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
      } & {
        coerce?: boolean | undefined;
      })
    | undefined,
) => ZodBigInt;
declare const booleanType: (
  params?:
    | ({
        errorMap?: ZodErrorMap | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
      } & {
        coerce?: boolean | undefined;
      })
    | undefined,
) => ZodBoolean;
declare const dateType: (
  params?:
    | ({
        errorMap?: ZodErrorMap | undefined;
        invalid_type_error?: string | undefined;
        required_error?: string | undefined;
        message?: string | undefined;
        description?: string | undefined;
      } & {
        coerce?: boolean | undefined;
      })
    | undefined,
) => ZodDate;
declare const symbolType: (params?: RawCreateParams) => ZodSymbol;
declare const undefinedType: (params?: RawCreateParams) => ZodUndefined;
declare const nullType: (params?: RawCreateParams) => ZodNull;
declare const anyType: (params?: RawCreateParams) => ZodAny;
declare const unknownType: (params?: RawCreateParams) => ZodUnknown;
declare const neverType: (params?: RawCreateParams) => ZodNever;
declare const voidType: (params?: RawCreateParams) => ZodVoid;
declare const arrayType: <T extends ZodTypeAny>(schema: T, params?: RawCreateParams) => ZodArray<T, 'many'>;
declare const objectType: <T extends ZodRawShape>(
  shape: T,
  params?: RawCreateParams,
) => ZodObject<
  T,
  'strip',
  ZodTypeAny,
  {
    [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T>, any>]: objectUtil.addQuestionMarks<
      baseObjectOutputType<T>,
      any
    >[k];
  },
  { [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }
>;
declare const strictObjectType: <T extends ZodRawShape>(
  shape: T,
  params?: RawCreateParams,
) => ZodObject<
  T,
  'strict',
  ZodTypeAny,
  {
    [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<T>, any>]: objectUtil.addQuestionMarks<
      baseObjectOutputType<T>,
      any
    >[k];
  },
  { [k_1 in keyof baseObjectInputType<T>]: baseObjectInputType<T>[k_1] }
>;
declare const unionType: <T extends readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>(
  types: T,
  params?: RawCreateParams,
) => ZodUnion<T>;
declare const discriminatedUnionType: typeof ZodDiscriminatedUnion.create;
declare const intersectionType: <T extends ZodTypeAny, U extends ZodTypeAny>(
  left: T,
  right: U,
  params?: RawCreateParams,
) => ZodIntersection<T, U>;
declare const tupleType: <T extends [] | [ZodTypeAny, ...ZodTypeAny[]]>(
  schemas: T,
  params?: RawCreateParams,
) => ZodTuple<T, null>;
declare const recordType: typeof ZodRecord.create;
declare const mapType: <Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny>(
  keyType: Key,
  valueType: Value,
  params?: RawCreateParams,
) => ZodMap<Key, Value>;
declare const setType: <Value extends ZodTypeAny = ZodTypeAny>(
  valueType: Value,
  params?: RawCreateParams,
) => ZodSet<Value>;
declare const functionType: typeof ZodFunction.create;
declare const lazyType: <T extends ZodTypeAny>(getter: () => T, params?: RawCreateParams) => ZodLazy<T>;
declare const literalType: <T extends Primitive>(value: T, params?: RawCreateParams) => ZodLiteral<T>;
declare const enumType: typeof createZodEnum;
declare const nativeEnumType: <T extends EnumLike>(values: T, params?: RawCreateParams) => ZodNativeEnum<T>;
declare const promiseType: <T extends ZodTypeAny>(schema: T, params?: RawCreateParams) => ZodPromise<T>;
declare const effectsType: <I extends ZodTypeAny>(
  schema: I,
  effect: Effect<I['_output']>,
  params?: RawCreateParams,
) => ZodEffects<I, I['_output'], input<I>>;
declare const optionalType: <T extends ZodTypeAny>(type: T, params?: RawCreateParams) => ZodOptional<T>;
declare const nullableType: <T extends ZodTypeAny>(type: T, params?: RawCreateParams) => ZodNullable<T>;
declare const preprocessType: <I extends ZodTypeAny>(
  preprocess: (arg: unknown, ctx: RefinementCtx) => unknown,
  schema: I,
  params?: RawCreateParams,
) => ZodEffects<I, I['_output'], unknown>;
declare const pipelineType: typeof ZodPipeline.create;
declare const ostring: () => ZodOptional<ZodString>;
declare const onumber: () => ZodOptional<ZodNumber>;
declare const oboolean: () => ZodOptional<ZodBoolean>;
declare const coerce: {
  string: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: true | undefined;
        })
      | undefined,
  ) => ZodString;
  number: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodNumber;
  boolean: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodBoolean;
  bigint: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodBigInt;
  date: (
    params?:
      | ({
          errorMap?: ZodErrorMap | undefined;
          invalid_type_error?: string | undefined;
          required_error?: string | undefined;
          message?: string | undefined;
          description?: string | undefined;
        } & {
          coerce?: boolean | undefined;
        })
      | undefined,
  ) => ZodDate;
};

declare const NEVER: never;

//# sourceMappingURL=external.d.ts.map

declare const z_setErrorMap: typeof setErrorMap;
declare const z_getErrorMap: typeof getErrorMap;
declare const z_makeIssue: typeof makeIssue;
type z_ParseParams = ParseParams;
type z_ParsePathComponent = ParsePathComponent;
type z_ParsePath = ParsePath;
declare const z_EMPTY_PATH: typeof EMPTY_PATH;
type z_ParseContext = ParseContext;
type z_ParseInput = ParseInput;
declare const z_addIssueToContext: typeof addIssueToContext;
type z_ObjectPair = ObjectPair;
type z_ParseStatus = ParseStatus;
declare const z_ParseStatus: typeof ParseStatus;
type z_ParseResult = ParseResult;
declare const z_INVALID: typeof INVALID;
declare const z_DIRTY: typeof DIRTY;
declare const z_OK: typeof OK;
type z_SyncParseReturnType<T = any> = SyncParseReturnType<T>;
type z_AsyncParseReturnType<T> = AsyncParseReturnType<T>;
type z_ParseReturnType<T> = ParseReturnType<T>;
declare const z_isAborted: typeof isAborted;
declare const z_isDirty: typeof isDirty;
declare const z_isValid: typeof isValid;
declare const z_isAsync: typeof isAsync;
type z_Primitive = Primitive;
type z_Scalars = Scalars;
declare const z_util: typeof util;
declare const z_objectUtil: typeof objectUtil;
type z_ZodParsedType = ZodParsedType;
declare const z_getParsedType: typeof getParsedType;
declare const z_oboolean: typeof oboolean;
declare const z_onumber: typeof onumber;
declare const z_ostring: typeof ostring;
type z_RefinementCtx = RefinementCtx;
type z_ZodRawShape = ZodRawShape;
type z_ZodTypeAny = ZodTypeAny;
type z_TypeOf<T extends ZodType<any, any, any>> = TypeOf<T>;
type z_input<T extends ZodType<any, any, any>> = input<T>;
type z_output<T extends ZodType<any, any, any>> = output<T>;
type z_CustomErrorParams = CustomErrorParams;
type z_ZodTypeDef = ZodTypeDef;
type z_RawCreateParams = RawCreateParams;
type z_ProcessedCreateParams = ProcessedCreateParams;
type z_SafeParseSuccess<Output> = SafeParseSuccess<Output>;
type z_SafeParseError<Input> = SafeParseError<Input>;
type z_SafeParseReturnType<Input, Output> = SafeParseReturnType<Input, Output>;
type z_ZodType<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> = ZodType<Output, Def, Input>;
declare const z_ZodType: typeof ZodType;
type z_IpVersion = IpVersion;
type z_ZodStringCheck = ZodStringCheck;
type z_ZodStringDef = ZodStringDef;
declare const z_datetimeRegex: typeof datetimeRegex;
type z_ZodString = ZodString;
declare const z_ZodString: typeof ZodString;
type z_ZodNumberCheck = ZodNumberCheck;
type z_ZodNumberDef = ZodNumberDef;
type z_ZodNumber = ZodNumber;
declare const z_ZodNumber: typeof ZodNumber;
type z_ZodBigIntCheck = ZodBigIntCheck;
type z_ZodBigIntDef = ZodBigIntDef;
type z_ZodBigInt = ZodBigInt;
declare const z_ZodBigInt: typeof ZodBigInt;
type z_ZodBooleanDef = ZodBooleanDef;
type z_ZodBoolean = ZodBoolean;
declare const z_ZodBoolean: typeof ZodBoolean;
type z_ZodDateCheck = ZodDateCheck;
type z_ZodDateDef = ZodDateDef;
type z_ZodDate = ZodDate;
declare const z_ZodDate: typeof ZodDate;
type z_ZodSymbolDef = ZodSymbolDef;
type z_ZodSymbol = ZodSymbol;
declare const z_ZodSymbol: typeof ZodSymbol;
type z_ZodUndefinedDef = ZodUndefinedDef;
type z_ZodUndefined = ZodUndefined;
declare const z_ZodUndefined: typeof ZodUndefined;
type z_ZodNullDef = ZodNullDef;
type z_ZodNull = ZodNull;
declare const z_ZodNull: typeof ZodNull;
type z_ZodAnyDef = ZodAnyDef;
type z_ZodAny = ZodAny;
declare const z_ZodAny: typeof ZodAny;
type z_ZodUnknownDef = ZodUnknownDef;
type z_ZodUnknown = ZodUnknown;
declare const z_ZodUnknown: typeof ZodUnknown;
type z_ZodNeverDef = ZodNeverDef;
type z_ZodNever = ZodNever;
declare const z_ZodNever: typeof ZodNever;
type z_ZodVoidDef = ZodVoidDef;
type z_ZodVoid = ZodVoid;
declare const z_ZodVoid: typeof ZodVoid;
type z_ZodArrayDef<T extends ZodTypeAny = ZodTypeAny> = ZodArrayDef<T>;
type z_ArrayCardinality = ArrayCardinality;
type z_arrayOutputType<T extends ZodTypeAny, Cardinality extends ArrayCardinality = 'many'> = arrayOutputType<
  T,
  Cardinality
>;
type z_ZodArray<T extends ZodTypeAny, Cardinality extends ArrayCardinality = 'many'> = ZodArray<T, Cardinality>;
declare const z_ZodArray: typeof ZodArray;
type z_ZodNonEmptyArray<T extends ZodTypeAny> = ZodNonEmptyArray<T>;
type z_UnknownKeysParam = UnknownKeysParam;
type z_ZodObjectDef<
  T extends ZodRawShape = ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
> = ZodObjectDef<T, UnknownKeys, Catchall>;
type z_mergeTypes<A, B> = mergeTypes<A, B>;
type z_objectOutputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectOutputType<Shape, Catchall, UnknownKeys>;
type z_baseObjectOutputType<Shape extends ZodRawShape> = baseObjectOutputType<Shape>;
type z_objectInputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectInputType<Shape, Catchall, UnknownKeys>;
type z_baseObjectInputType<Shape extends ZodRawShape> = baseObjectInputType<Shape>;
type z_CatchallOutput<T extends ZodType> = CatchallOutput<T>;
type z_CatchallInput<T extends ZodType> = CatchallInput<T>;
type z_PassthroughType<T extends UnknownKeysParam> = PassthroughType<T>;
type z_deoptional<T extends ZodTypeAny> = deoptional<T>;
type z_SomeZodObject = SomeZodObject;
type z_noUnrecognized<Obj extends object, Shape extends object> = noUnrecognized<Obj, Shape>;
type z_ZodObject<
  T extends ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output = objectOutputType<T, Catchall, UnknownKeys>,
  Input = objectInputType<T, Catchall, UnknownKeys>,
> = ZodObject<T, UnknownKeys, Catchall, Output, Input>;
declare const z_ZodObject: typeof ZodObject;
type z_AnyZodObject = AnyZodObject;
type z_ZodUnionOptions = ZodUnionOptions;
type z_ZodUnionDef<T extends ZodUnionOptions = Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>> = ZodUnionDef<T>;
type z_ZodUnion<T extends ZodUnionOptions> = ZodUnion<T>;
declare const z_ZodUnion: typeof ZodUnion;
type z_ZodDiscriminatedUnionOption<Discriminator extends string> = ZodDiscriminatedUnionOption<Discriminator>;
type z_ZodDiscriminatedUnionDef<
  Discriminator extends string,
  Options extends ZodDiscriminatedUnionOption<string>[] = ZodDiscriminatedUnionOption<string>[],
> = ZodDiscriminatedUnionDef<Discriminator, Options>;
type z_ZodDiscriminatedUnion<
  Discriminator extends string,
  Options extends ZodDiscriminatedUnionOption<Discriminator>[],
> = ZodDiscriminatedUnion<Discriminator, Options>;
declare const z_ZodDiscriminatedUnion: typeof ZodDiscriminatedUnion;
type z_ZodIntersectionDef<T extends ZodTypeAny = ZodTypeAny, U extends ZodTypeAny = ZodTypeAny> = ZodIntersectionDef<
  T,
  U
>;
type z_ZodIntersection<T extends ZodTypeAny, U extends ZodTypeAny> = ZodIntersection<T, U>;
declare const z_ZodIntersection: typeof ZodIntersection;
type z_ZodTupleItems = ZodTupleItems;
type z_AssertArray<T> = AssertArray<T>;
type z_OutputTypeOfTuple<T extends ZodTupleItems | []> = OutputTypeOfTuple<T>;
type z_OutputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = OutputTypeOfTupleWithRest<T, Rest>;
type z_InputTypeOfTuple<T extends ZodTupleItems | []> = InputTypeOfTuple<T>;
type z_InputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = InputTypeOfTupleWithRest<T, Rest>;
type z_ZodTupleDef<T extends ZodTupleItems | [] = ZodTupleItems, Rest extends ZodTypeAny | null = null> = ZodTupleDef<
  T,
  Rest
>;
type z_AnyZodTuple = AnyZodTuple;
type z_ZodTuple<
  T extends [ZodTypeAny, ...ZodTypeAny[]] | [] = [ZodTypeAny, ...ZodTypeAny[]],
  Rest extends ZodTypeAny | null = null,
> = ZodTuple<T, Rest>;
declare const z_ZodTuple: typeof ZodTuple;
type z_ZodRecordDef<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> = ZodRecordDef<
  Key,
  Value
>;
type z_KeySchema = KeySchema;
type z_RecordType<K extends string | number | symbol, V> = RecordType<K, V>;
type z_ZodRecord<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> = ZodRecord<Key, Value>;
declare const z_ZodRecord: typeof ZodRecord;
type z_ZodMapDef<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> = ZodMapDef<Key, Value>;
type z_ZodMap<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> = ZodMap<Key, Value>;
declare const z_ZodMap: typeof ZodMap;
type z_ZodSetDef<Value extends ZodTypeAny = ZodTypeAny> = ZodSetDef<Value>;
type z_ZodSet<Value extends ZodTypeAny = ZodTypeAny> = ZodSet<Value>;
declare const z_ZodSet: typeof ZodSet;
type z_ZodFunctionDef<
  Args extends ZodTuple<any, any> = ZodTuple<any, any>,
  Returns extends ZodTypeAny = ZodTypeAny,
> = ZodFunctionDef<Args, Returns>;
type z_OuterTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> = OuterTypeOfFunction<
  Args,
  Returns
>;
type z_InnerTypeOfFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> = InnerTypeOfFunction<
  Args,
  Returns
>;
type z_ZodFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> = ZodFunction<Args, Returns>;
declare const z_ZodFunction: typeof ZodFunction;
type z_ZodLazyDef<T extends ZodTypeAny = ZodTypeAny> = ZodLazyDef<T>;
type z_ZodLazy<T extends ZodTypeAny> = ZodLazy<T>;
declare const z_ZodLazy: typeof ZodLazy;
type z_ZodLiteralDef<T = any> = ZodLiteralDef<T>;
type z_ZodLiteral<T> = ZodLiteral<T>;
declare const z_ZodLiteral: typeof ZodLiteral;
type z_ArrayKeys = ArrayKeys;
type z_Indices<T> = Indices<T>;
type z_EnumValues<T extends string = string> = EnumValues<T>;
type z_Values<T extends EnumValues> = Values<T>;
type z_ZodEnumDef<T extends EnumValues = EnumValues> = ZodEnumDef<T>;
type z_Writeable<T> = Writeable<T>;
type z_FilterEnum<Values, ToExclude> = FilterEnum<Values, ToExclude>;
type z_typecast<A, T> = typecast<A, T>;
type z_ZodEnum<T extends [string, ...string[]]> = ZodEnum<T>;
declare const z_ZodEnum: typeof ZodEnum;
type z_ZodNativeEnumDef<T extends EnumLike = EnumLike> = ZodNativeEnumDef<T>;
type z_EnumLike = EnumLike;
type z_ZodNativeEnum<T extends EnumLike> = ZodNativeEnum<T>;
declare const z_ZodNativeEnum: typeof ZodNativeEnum;
type z_ZodPromiseDef<T extends ZodTypeAny = ZodTypeAny> = ZodPromiseDef<T>;
type z_ZodPromise<T extends ZodTypeAny> = ZodPromise<T>;
declare const z_ZodPromise: typeof ZodPromise;
type z_Refinement<T> = Refinement<T>;
type z_SuperRefinement<T> = SuperRefinement<T>;
type z_RefinementEffect<T> = RefinementEffect<T>;
type z_TransformEffect<T> = TransformEffect<T>;
type z_PreprocessEffect<T> = PreprocessEffect<T>;
type z_Effect<T> = Effect<T>;
type z_ZodEffectsDef<T extends ZodTypeAny = ZodTypeAny> = ZodEffectsDef<T>;
type z_ZodEffects<T extends ZodTypeAny, Output = output<T>, Input = input<T>> = ZodEffects<T, Output, Input>;
declare const z_ZodEffects: typeof ZodEffects;
type z_ZodOptionalDef<T extends ZodTypeAny = ZodTypeAny> = ZodOptionalDef<T>;
type z_ZodOptionalType<T extends ZodTypeAny> = ZodOptionalType<T>;
type z_ZodOptional<T extends ZodTypeAny> = ZodOptional<T>;
declare const z_ZodOptional: typeof ZodOptional;
type z_ZodNullableDef<T extends ZodTypeAny = ZodTypeAny> = ZodNullableDef<T>;
type z_ZodNullableType<T extends ZodTypeAny> = ZodNullableType<T>;
type z_ZodNullable<T extends ZodTypeAny> = ZodNullable<T>;
declare const z_ZodNullable: typeof ZodNullable;
type z_ZodDefaultDef<T extends ZodTypeAny = ZodTypeAny> = ZodDefaultDef<T>;
type z_ZodDefault<T extends ZodTypeAny> = ZodDefault<T>;
declare const z_ZodDefault: typeof ZodDefault;
type z_ZodCatchDef<T extends ZodTypeAny = ZodTypeAny> = ZodCatchDef<T>;
type z_ZodCatch<T extends ZodTypeAny> = ZodCatch<T>;
declare const z_ZodCatch: typeof ZodCatch;
type z_ZodNaNDef = ZodNaNDef;
type z_ZodNaN = ZodNaN;
declare const z_ZodNaN: typeof ZodNaN;
type z_ZodBrandedDef<T extends ZodTypeAny> = ZodBrandedDef<T>;
type z_BRAND<T extends string | number | symbol> = BRAND<T>;
type z_ZodBranded<T extends ZodTypeAny, B extends string | number | symbol> = ZodBranded<T, B>;
declare const z_ZodBranded: typeof ZodBranded;
type z_ZodPipelineDef<A extends ZodTypeAny, B extends ZodTypeAny> = ZodPipelineDef<A, B>;
type z_ZodPipeline<A extends ZodTypeAny, B extends ZodTypeAny> = ZodPipeline<A, B>;
declare const z_ZodPipeline: typeof ZodPipeline;
type z_ZodReadonlyDef<T extends ZodTypeAny = ZodTypeAny> = ZodReadonlyDef<T>;
type z_ZodReadonly<T extends ZodTypeAny> = ZodReadonly<T>;
declare const z_ZodReadonly: typeof ZodReadonly;
declare const z_custom: typeof custom;
declare const z_late: typeof late;
type z_ZodFirstPartyTypeKind = ZodFirstPartyTypeKind;
declare const z_ZodFirstPartyTypeKind: typeof ZodFirstPartyTypeKind;
type z_ZodFirstPartySchemaTypes = ZodFirstPartySchemaTypes;
declare const z_coerce: typeof coerce;
declare const z_NEVER: typeof NEVER;
type z_inferFlattenedErrors<T extends ZodType<any, any, any>, U = string> = inferFlattenedErrors<T, U>;
type z_typeToFlattenedError<T, U = string> = typeToFlattenedError<T, U>;
type z_ZodIssueCode = ZodIssueCode;
type z_ZodIssueBase = ZodIssueBase;
type z_ZodInvalidTypeIssue = ZodInvalidTypeIssue;
type z_ZodInvalidLiteralIssue = ZodInvalidLiteralIssue;
type z_ZodUnrecognizedKeysIssue = ZodUnrecognizedKeysIssue;
type z_ZodInvalidUnionIssue = ZodInvalidUnionIssue;
type z_ZodInvalidUnionDiscriminatorIssue = ZodInvalidUnionDiscriminatorIssue;
type z_ZodInvalidEnumValueIssue = ZodInvalidEnumValueIssue;
type z_ZodInvalidArgumentsIssue = ZodInvalidArgumentsIssue;
type z_ZodInvalidReturnTypeIssue = ZodInvalidReturnTypeIssue;
type z_ZodInvalidDateIssue = ZodInvalidDateIssue;
type z_StringValidation = StringValidation;
type z_ZodInvalidStringIssue = ZodInvalidStringIssue;
type z_ZodTooSmallIssue = ZodTooSmallIssue;
type z_ZodTooBigIssue = ZodTooBigIssue;
type z_ZodInvalidIntersectionTypesIssue = ZodInvalidIntersectionTypesIssue;
type z_ZodNotMultipleOfIssue = ZodNotMultipleOfIssue;
type z_ZodNotFiniteIssue = ZodNotFiniteIssue;
type z_ZodCustomIssue = ZodCustomIssue;
type z_DenormalizedError = DenormalizedError;
type z_ZodIssueOptionalMessage = ZodIssueOptionalMessage;
type z_ZodIssue = ZodIssue;
declare const z_quotelessJson: typeof quotelessJson;
type z_ZodFormattedError<T, U = string> = ZodFormattedError<T, U>;
type z_inferFormattedError<T extends ZodType<any, any, any>, U = string> = inferFormattedError<T, U>;
type z_ZodError<T = any> = ZodError<T>;
declare const z_ZodError: typeof ZodError;
type z_IssueData = IssueData;
type z_ErrorMapCtx = ErrorMapCtx;
type z_ZodErrorMap = ZodErrorMap;
declare namespace z {
  export {
    errorMap as defaultErrorMap,
    z_setErrorMap as setErrorMap,
    z_getErrorMap as getErrorMap,
    z_makeIssue as makeIssue,
    type z_ParseParams as ParseParams,
    type z_ParsePathComponent as ParsePathComponent,
    type z_ParsePath as ParsePath,
    z_EMPTY_PATH as EMPTY_PATH,
    type z_ParseContext as ParseContext,
    type z_ParseInput as ParseInput,
    z_addIssueToContext as addIssueToContext,
    type z_ObjectPair as ObjectPair,
    z_ParseStatus as ParseStatus,
    type z_ParseResult as ParseResult,
    z_INVALID as INVALID,
    z_DIRTY as DIRTY,
    z_OK as OK,
    type z_SyncParseReturnType as SyncParseReturnType,
    type z_AsyncParseReturnType as AsyncParseReturnType,
    type z_ParseReturnType as ParseReturnType,
    z_isAborted as isAborted,
    z_isDirty as isDirty,
    z_isValid as isValid,
    z_isAsync as isAsync,
    type z_Primitive as Primitive,
    type z_Scalars as Scalars,
    z_util as util,
    z_objectUtil as objectUtil,
    type z_ZodParsedType as ZodParsedType,
    z_getParsedType as getParsedType,
    type TypeOf as infer,
    ZodEffects as ZodTransformer,
    ZodType as Schema,
    ZodType as ZodSchema,
    anyType as any,
    arrayType as array,
    bigIntType as bigint,
    booleanType as boolean,
    dateType as date,
    discriminatedUnionType as discriminatedUnion,
    effectsType as effect,
    enumType as enum,
    functionType as function,
    instanceOfType as instanceof,
    intersectionType as intersection,
    lazyType as lazy,
    literalType as literal,
    mapType as map,
    nanType as nan,
    nativeEnumType as nativeEnum,
    neverType as never,
    nullType as null,
    nullableType as nullable,
    numberType as number,
    objectType as object,
    z_oboolean as oboolean,
    z_onumber as onumber,
    optionalType as optional,
    z_ostring as ostring,
    pipelineType as pipeline,
    preprocessType as preprocess,
    promiseType as promise,
    recordType as record,
    setType as set,
    strictObjectType as strictObject,
    stringType as string,
    symbolType as symbol,
    effectsType as transformer,
    tupleType as tuple,
    undefinedType as undefined,
    unionType as union,
    unknownType as unknown,
    voidType as void,
    type z_RefinementCtx as RefinementCtx,
    type z_ZodRawShape as ZodRawShape,
    type z_ZodTypeAny as ZodTypeAny,
    type z_TypeOf as TypeOf,
    type z_input as input,
    type z_output as output,
    type z_CustomErrorParams as CustomErrorParams,
    type z_ZodTypeDef as ZodTypeDef,
    type z_RawCreateParams as RawCreateParams,
    type z_ProcessedCreateParams as ProcessedCreateParams,
    type z_SafeParseSuccess as SafeParseSuccess,
    type z_SafeParseError as SafeParseError,
    type z_SafeParseReturnType as SafeParseReturnType,
    z_ZodType as ZodType,
    type z_IpVersion as IpVersion,
    type z_ZodStringCheck as ZodStringCheck,
    type z_ZodStringDef as ZodStringDef,
    z_datetimeRegex as datetimeRegex,
    z_ZodString as ZodString,
    type z_ZodNumberCheck as ZodNumberCheck,
    type z_ZodNumberDef as ZodNumberDef,
    z_ZodNumber as ZodNumber,
    type z_ZodBigIntCheck as ZodBigIntCheck,
    type z_ZodBigIntDef as ZodBigIntDef,
    z_ZodBigInt as ZodBigInt,
    type z_ZodBooleanDef as ZodBooleanDef,
    z_ZodBoolean as ZodBoolean,
    type z_ZodDateCheck as ZodDateCheck,
    type z_ZodDateDef as ZodDateDef,
    z_ZodDate as ZodDate,
    type z_ZodSymbolDef as ZodSymbolDef,
    z_ZodSymbol as ZodSymbol,
    type z_ZodUndefinedDef as ZodUndefinedDef,
    z_ZodUndefined as ZodUndefined,
    type z_ZodNullDef as ZodNullDef,
    z_ZodNull as ZodNull,
    type z_ZodAnyDef as ZodAnyDef,
    z_ZodAny as ZodAny,
    type z_ZodUnknownDef as ZodUnknownDef,
    z_ZodUnknown as ZodUnknown,
    type z_ZodNeverDef as ZodNeverDef,
    z_ZodNever as ZodNever,
    type z_ZodVoidDef as ZodVoidDef,
    z_ZodVoid as ZodVoid,
    type z_ZodArrayDef as ZodArrayDef,
    type z_ArrayCardinality as ArrayCardinality,
    type z_arrayOutputType as arrayOutputType,
    z_ZodArray as ZodArray,
    type z_ZodNonEmptyArray as ZodNonEmptyArray,
    type z_UnknownKeysParam as UnknownKeysParam,
    type z_ZodObjectDef as ZodObjectDef,
    type z_mergeTypes as mergeTypes,
    type z_objectOutputType as objectOutputType,
    type z_baseObjectOutputType as baseObjectOutputType,
    type z_objectInputType as objectInputType,
    type z_baseObjectInputType as baseObjectInputType,
    type z_CatchallOutput as CatchallOutput,
    type z_CatchallInput as CatchallInput,
    type z_PassthroughType as PassthroughType,
    type z_deoptional as deoptional,
    type z_SomeZodObject as SomeZodObject,
    type z_noUnrecognized as noUnrecognized,
    z_ZodObject as ZodObject,
    type z_AnyZodObject as AnyZodObject,
    type z_ZodUnionOptions as ZodUnionOptions,
    type z_ZodUnionDef as ZodUnionDef,
    z_ZodUnion as ZodUnion,
    type z_ZodDiscriminatedUnionOption as ZodDiscriminatedUnionOption,
    type z_ZodDiscriminatedUnionDef as ZodDiscriminatedUnionDef,
    z_ZodDiscriminatedUnion as ZodDiscriminatedUnion,
    type z_ZodIntersectionDef as ZodIntersectionDef,
    z_ZodIntersection as ZodIntersection,
    type z_ZodTupleItems as ZodTupleItems,
    type z_AssertArray as AssertArray,
    type z_OutputTypeOfTuple as OutputTypeOfTuple,
    type z_OutputTypeOfTupleWithRest as OutputTypeOfTupleWithRest,
    type z_InputTypeOfTuple as InputTypeOfTuple,
    type z_InputTypeOfTupleWithRest as InputTypeOfTupleWithRest,
    type z_ZodTupleDef as ZodTupleDef,
    type z_AnyZodTuple as AnyZodTuple,
    z_ZodTuple as ZodTuple,
    type z_ZodRecordDef as ZodRecordDef,
    type z_KeySchema as KeySchema,
    type z_RecordType as RecordType,
    z_ZodRecord as ZodRecord,
    type z_ZodMapDef as ZodMapDef,
    z_ZodMap as ZodMap,
    type z_ZodSetDef as ZodSetDef,
    z_ZodSet as ZodSet,
    type z_ZodFunctionDef as ZodFunctionDef,
    type z_OuterTypeOfFunction as OuterTypeOfFunction,
    type z_InnerTypeOfFunction as InnerTypeOfFunction,
    z_ZodFunction as ZodFunction,
    type z_ZodLazyDef as ZodLazyDef,
    z_ZodLazy as ZodLazy,
    type z_ZodLiteralDef as ZodLiteralDef,
    z_ZodLiteral as ZodLiteral,
    type z_ArrayKeys as ArrayKeys,
    type z_Indices as Indices,
    type z_EnumValues as EnumValues,
    type z_Values as Values,
    type z_ZodEnumDef as ZodEnumDef,
    type z_Writeable as Writeable,
    type z_FilterEnum as FilterEnum,
    type z_typecast as typecast,
    z_ZodEnum as ZodEnum,
    type z_ZodNativeEnumDef as ZodNativeEnumDef,
    type z_EnumLike as EnumLike,
    z_ZodNativeEnum as ZodNativeEnum,
    type z_ZodPromiseDef as ZodPromiseDef,
    z_ZodPromise as ZodPromise,
    type z_Refinement as Refinement,
    type z_SuperRefinement as SuperRefinement,
    type z_RefinementEffect as RefinementEffect,
    type z_TransformEffect as TransformEffect,
    type z_PreprocessEffect as PreprocessEffect,
    type z_Effect as Effect,
    type z_ZodEffectsDef as ZodEffectsDef,
    z_ZodEffects as ZodEffects,
    type z_ZodOptionalDef as ZodOptionalDef,
    type z_ZodOptionalType as ZodOptionalType,
    z_ZodOptional as ZodOptional,
    type z_ZodNullableDef as ZodNullableDef,
    type z_ZodNullableType as ZodNullableType,
    z_ZodNullable as ZodNullable,
    type z_ZodDefaultDef as ZodDefaultDef,
    z_ZodDefault as ZodDefault,
    type z_ZodCatchDef as ZodCatchDef,
    z_ZodCatch as ZodCatch,
    type z_ZodNaNDef as ZodNaNDef,
    z_ZodNaN as ZodNaN,
    type z_ZodBrandedDef as ZodBrandedDef,
    type z_BRAND as BRAND,
    z_ZodBranded as ZodBranded,
    type z_ZodPipelineDef as ZodPipelineDef,
    z_ZodPipeline as ZodPipeline,
    type z_ZodReadonlyDef as ZodReadonlyDef,
    z_ZodReadonly as ZodReadonly,
    z_custom as custom,
    z_late as late,
    z_ZodFirstPartyTypeKind as ZodFirstPartyTypeKind,
    type z_ZodFirstPartySchemaTypes as ZodFirstPartySchemaTypes,
    z_coerce as coerce,
    z_NEVER as NEVER,
    type z_inferFlattenedErrors as inferFlattenedErrors,
    type z_typeToFlattenedError as typeToFlattenedError,
    type z_ZodIssueCode as ZodIssueCode,
    type z_ZodIssueBase as ZodIssueBase,
    type z_ZodInvalidTypeIssue as ZodInvalidTypeIssue,
    type z_ZodInvalidLiteralIssue as ZodInvalidLiteralIssue,
    type z_ZodUnrecognizedKeysIssue as ZodUnrecognizedKeysIssue,
    type z_ZodInvalidUnionIssue as ZodInvalidUnionIssue,
    type z_ZodInvalidUnionDiscriminatorIssue as ZodInvalidUnionDiscriminatorIssue,
    type z_ZodInvalidEnumValueIssue as ZodInvalidEnumValueIssue,
    type z_ZodInvalidArgumentsIssue as ZodInvalidArgumentsIssue,
    type z_ZodInvalidReturnTypeIssue as ZodInvalidReturnTypeIssue,
    type z_ZodInvalidDateIssue as ZodInvalidDateIssue,
    type z_StringValidation as StringValidation,
    type z_ZodInvalidStringIssue as ZodInvalidStringIssue,
    type z_ZodTooSmallIssue as ZodTooSmallIssue,
    type z_ZodTooBigIssue as ZodTooBigIssue,
    type z_ZodInvalidIntersectionTypesIssue as ZodInvalidIntersectionTypesIssue,
    type z_ZodNotMultipleOfIssue as ZodNotMultipleOfIssue,
    type z_ZodNotFiniteIssue as ZodNotFiniteIssue,
    type z_ZodCustomIssue as ZodCustomIssue,
    type z_DenormalizedError as DenormalizedError,
    type z_ZodIssueOptionalMessage as ZodIssueOptionalMessage,
    type z_ZodIssue as ZodIssue,
    z_quotelessJson as quotelessJson,
    type z_ZodFormattedError as ZodFormattedError,
    type z_inferFormattedError as inferFormattedError,
    z_ZodError as ZodError,
    type z_IssueData as IssueData,
    type z_ErrorMapCtx as ErrorMapCtx,
    type z_ZodErrorMap as ZodErrorMap,
  };
}

//# sourceMappingURL=index.d.ts.map

export {
  type AnyZodObject,
  type AnyZodTuple,
  type ArrayCardinality,
  type ArrayKeys,
  type AssertArray,
  type AsyncParseReturnType,
  BRAND,
  type CatchallInput,
  type CatchallOutput,
  type CustomErrorParams,
  DIRTY,
  type DenormalizedError,
  EMPTY_PATH,
  type Effect,
  type EnumLike,
  type EnumValues,
  type ErrorMapCtx,
  type FilterEnum,
  INVALID,
  type Indices,
  type InnerTypeOfFunction,
  type InputTypeOfTuple,
  type InputTypeOfTupleWithRest,
  type IpVersion,
  type IssueData,
  type KeySchema,
  NEVER,
  OK,
  type ObjectPair,
  type OuterTypeOfFunction,
  type OutputTypeOfTuple,
  type OutputTypeOfTupleWithRest,
  type ParseContext,
  type ParseInput,
  type ParseParams,
  type ParsePath,
  type ParsePathComponent,
  type ParseResult,
  type ParseReturnType,
  ParseStatus,
  type PassthroughType,
  type PreprocessEffect,
  type Primitive,
  type ProcessedCreateParams,
  type RawCreateParams,
  type RecordType,
  type Refinement,
  type RefinementCtx,
  type RefinementEffect,
  type SafeParseError,
  type SafeParseReturnType,
  type SafeParseSuccess,
  type Scalars,
  ZodType as Schema,
  type SomeZodObject,
  type StringValidation,
  type SuperRefinement,
  type SyncParseReturnType,
  type TransformEffect,
  type TypeOf,
  type UnknownKeysParam,
  type Values,
  type Writeable,
  ZodAny,
  type ZodAnyDef,
  ZodArray,
  type ZodArrayDef,
  ZodBigInt,
  type ZodBigIntCheck,
  type ZodBigIntDef,
  ZodBoolean,
  type ZodBooleanDef,
  ZodBranded,
  type ZodBrandedDef,
  ZodCatch,
  type ZodCatchDef,
  type ZodCustomIssue,
  ZodDate,
  type ZodDateCheck,
  type ZodDateDef,
  ZodDefault,
  type ZodDefaultDef,
  ZodDiscriminatedUnion,
  type ZodDiscriminatedUnionDef,
  type ZodDiscriminatedUnionOption,
  ZodEffects,
  type ZodEffectsDef,
  ZodEnum,
  type ZodEnumDef,
  ZodError,
  type ZodErrorMap,
  type ZodFirstPartySchemaTypes,
  ZodFirstPartyTypeKind,
  type ZodFormattedError,
  ZodFunction,
  type ZodFunctionDef,
  ZodIntersection,
  type ZodIntersectionDef,
  type ZodInvalidArgumentsIssue,
  type ZodInvalidDateIssue,
  type ZodInvalidEnumValueIssue,
  type ZodInvalidIntersectionTypesIssue,
  type ZodInvalidLiteralIssue,
  type ZodInvalidReturnTypeIssue,
  type ZodInvalidStringIssue,
  type ZodInvalidTypeIssue,
  type ZodInvalidUnionDiscriminatorIssue,
  type ZodInvalidUnionIssue,
  type ZodIssue,
  type ZodIssueBase,
  ZodIssueCode,
  type ZodIssueOptionalMessage,
  ZodLazy,
  type ZodLazyDef,
  ZodLiteral,
  type ZodLiteralDef,
  ZodMap,
  type ZodMapDef,
  ZodNaN,
  type ZodNaNDef,
  ZodNativeEnum,
  type ZodNativeEnumDef,
  ZodNever,
  type ZodNeverDef,
  type ZodNonEmptyArray,
  type ZodNotFiniteIssue,
  type ZodNotMultipleOfIssue,
  ZodNull,
  type ZodNullDef,
  ZodNullable,
  type ZodNullableDef,
  type ZodNullableType,
  ZodNumber,
  type ZodNumberCheck,
  type ZodNumberDef,
  ZodObject,
  type ZodObjectDef,
  ZodOptional,
  type ZodOptionalDef,
  type ZodOptionalType,
  ZodParsedType,
  ZodPipeline,
  type ZodPipelineDef,
  ZodPromise,
  type ZodPromiseDef,
  type ZodRawShape,
  ZodReadonly,
  type ZodReadonlyDef,
  ZodRecord,
  type ZodRecordDef,
  ZodType as ZodSchema,
  ZodSet,
  type ZodSetDef,
  ZodString,
  type ZodStringCheck,
  type ZodStringDef,
  ZodSymbol,
  type ZodSymbolDef,
  type ZodTooBigIssue,
  type ZodTooSmallIssue,
  ZodEffects as ZodTransformer,
  ZodTuple,
  type ZodTupleDef,
  type ZodTupleItems,
  ZodType,
  type ZodTypeAny,
  type ZodTypeDef,
  ZodUndefined,
  type ZodUndefinedDef,
  ZodUnion,
  type ZodUnionDef,
  type ZodUnionOptions,
  ZodUnknown,
  type ZodUnknownDef,
  type ZodUnrecognizedKeysIssue,
  ZodVoid,
  type ZodVoidDef,
  addIssueToContext,
  anyType as any,
  arrayType as array,
  type arrayOutputType,
  type baseObjectInputType,
  type baseObjectOutputType,
  bigIntType as bigint,
  booleanType as boolean,
  coerce,
  custom,
  dateType as date,
  datetimeRegex,
  z as default,
  errorMap as defaultErrorMap,
  type deoptional,
  discriminatedUnionType as discriminatedUnion,
  effectsType as effect,
  enumType as enum,
  functionType as function,
  getErrorMap,
  getParsedType,
  type TypeOf as infer,
  type inferFlattenedErrors,
  type inferFormattedError,
  type input,
  instanceOfType as instanceof,
  intersectionType as intersection,
  isAborted,
  isAsync,
  isDirty,
  isValid,
  late,
  lazyType as lazy,
  literalType as literal,
  makeIssue,
  mapType as map,
  type mergeTypes,
  nanType as nan,
  nativeEnumType as nativeEnum,
  neverType as never,
  type noUnrecognized,
  nullType as null,
  nullableType as nullable,
  numberType as number,
  objectType as object,
  type objectInputType,
  type objectOutputType,
  objectUtil,
  oboolean,
  onumber,
  optionalType as optional,
  ostring,
  type output,
  pipelineType as pipeline,
  preprocessType as preprocess,
  promiseType as promise,
  quotelessJson,
  recordType as record,
  setType as set,
  setErrorMap,
  strictObjectType as strictObject,
  stringType as string,
  symbolType as symbol,
  effectsType as transformer,
  tupleType as tuple,
  type typeToFlattenedError,
  type typecast,
  undefinedType as undefined,
  unionType as union,
  unknownType as unknown,
  util,
  voidType as void,
  z,
};
`, fn = [
  {
    name: "big.js",
    tagline: "Arbitrary-precision decimal arithmetic",
    importName: "Big",
    typeDef: nr,
    documentationUrl: "https://mikemcl.github.io/big.js/"
  },
  {
    name: "dayjs",
    tagline: "Date utilities",
    typeDef: tr,
    documentationUrl: "https://day.js.org/docs/en/parse/parse"
  },
  {
    name: "http",
    tagline: "Promise based HTTP client",
    typeDef: rr,
    documentationUrl: "https://docs.gorules.io/reference/http"
  },
  {
    name: "zen",
    tagline: "Rules engine utilities",
    typeDef: ar,
    documentationUrl: "https://docs.gorules.io/reference/zen"
  },
  {
    name: "zod",
    tagline: "Schema validation",
    importName: "z",
    typeDef: ir,
    documentationUrl: "https://zod.dev/"
  }
], dr = {
  globals: {
    "global.d.ts": sr
  }
}, lr = or, cr = j.lazy(async () => ({ default: (await import("./index-DNumq_39.js")).Function })), ur = ({ id: e }) => {
  const n = to(e), t = ee(), { inputsSchema: o, outputsSchema: r } = L(
    ({ inputsSchema: T = [], outputsSchema: f = [] }) => ({ inputsSchema: T, outputsSchema: f })
  ), l = ao((T) => T.onFunctionReady), [a, i] = K(), d = Ce(e), { nodeTrace: c, disabled: u, content: p, nodeError: y } = L(
    ({ simulate: T, disabled: f, configurable: b, decisionGraph: _ }) => ({
      nodeTrace: I(T).with({ result: z._ }, ({ result: v }) => v?.trace?.[e]).otherwise(() => null),
      nodeError: I(T).with({ error: { data: { nodeId: e } } }, ({ error: v }) => v).otherwise(() => null),
      disabled: f,
      configurable: b,
      content: (_?.nodes ?? []).find((v) => v.id === e)?.content
    })
  ), { diff: g, contentDiff: m } = Ke(e), h = V(() => n === Je.Stable ? m?.fields?.source?.previousValue : g?.fields?.content?.previousValue, [g, m]);
  return C(() => {
    if (!a)
      return;
    const T = a.languages.typescript.javascriptDefaults.getExtraLibs(), f = Object.entries(T).map(([_, v]) => ({
      filePath: _,
      content: v.content
    })), b = [
      {
        filePath: "node:InputSchema",
        content: `/**
                   * @typedef {Object} InputSchema
                   ${o.map(({ field: _, name: v }) => `* @property {any} ${_} - ${v}`).join(`
`)}
                   */`
      }
    ];
    a.languages.typescript.javascriptDefaults.setExtraLibs([...f, ...b]), l?.(a);
  }, [a, l, o, r]), /* @__PURE__ */ s(xo, { fallback: /* @__PURE__ */ s(he, {}), children: /* @__PURE__ */ s(
    cr,
    {
      onMonacoReady: (T) => i(T),
      value: n === Je.Stable ? p.source : p,
      previousValue: typeof h == "string" ? h : void 0,
      error: y ?? void 0,
      inputData: d,
      onChange: (T) => {
        t.updateNode(e, (f) => (n === Je.Stable ? f.content = { source: T } : f.content = T, f));
      },
      disabled: u,
      trace: c
    }
  ) });
}, Vn = {
  type: E.Function,
  icon: /* @__PURE__ */ s(O.Text, { style: { color: "white", fontSize: "inherit" }, children: "JS" }),
  displayName: "Function",
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions/functions",
  shortDescription: "Javascript lambda",
  color: Ze.Orange,
  renderTab: ({ id: e }) => /* @__PURE__ */ s(ur, { id: e }),
  getDiffContent: (e, n) => {
    const t = {}, o = I(e).with(
      z.string,
      () => 0
      /* Deprecated */
    ).otherwise(
      () => 1
      /* Stable */
    );
    I([e, n]).with([z.string, z.string], ([l, a]) => {
      l !== a && Y.set(t, "source", {
        previousValue: a,
        status: "modified"
      });
    }).with([{ source: z.string }, { source: z.string }], ([l, a]) => {
      l?.source !== a?.source && Y.set(t, "source", {
        previousValue: a.source,
        status: "modified"
      });
    }).otherwise(() => {
    });
    const r = Object.keys(t).length > 0;
    return {
      ...o === 0 ? { source: e } : e,
      ...r && {
        _diff: {
          status: "modified",
          fields: t
        }
      }
    };
  },
  generateNode: ({ index: e }) => ({
    name: `function${e}`,
    content: {
      source: lr
    }
  }),
  renderNode: ({ id: e, data: n, selected: t, specification: o }) => {
    const r = ee(), l = to(e);
    return /* @__PURE__ */ s(
      Te,
      {
        id: e,
        specification: {
          ...o,
          displayName: l === 1 ? "Function" : /* @__PURE__ */ Z("span", { children: [
            "Function v1 ",
            /* @__PURE__ */ s(lt, {})
          ] })
        },
        name: n.name,
        isSelected: t,
        helper: [l === 0 && /* @__PURE__ */ s(lt, { size: 16 })],
        actions: [
          /* @__PURE__ */ s(N, { type: "text", onClick: () => r.openTab(e), children: "Edit Function" }, "edit-function")
        ]
      }
    );
  }
};
var Je = /* @__PURE__ */ ((e) => (e[e.Deprecated = 0] = "Deprecated", e[e.Stable = 1] = "Stable", e))(Je || {});
const to = (e) => {
  const { kind: n } = L((t) => ({
    kind: I(t.decisionGraph.nodes.find((o) => o.id === e)?.content).with(
      z.string,
      () => 0
      /* Deprecated */
    ).otherwise(
      () => 1
      /* Stable */
    )
  }));
  return n;
}, lt = ({ size: e }) => /* @__PURE__ */ s(
  $,
  {
    placement: "top",
    title: 'Function v1 will be deprecated in one of the upcoming releases. To use a new Function, drag and drop a new Function Node and copy your logic. For more information click "Documentation". ',
    children: /* @__PURE__ */ s(es, { style: { color: "var(--grl-color-warning-text)", fontSize: e } })
  }
), pr = (e) => {
  const n = document.createElement("textarea");
  n.value = e, document.body.appendChild(n), n.focus(), n.select();
  try {
    document.execCommand("copy");
  } catch (t) {
    console.error("Unable to copy to clipboard", t);
  }
  document.body.removeChild(n);
}, Me = async (e) => {
  window.isSecureContext && navigator.clipboard ? await navigator.clipboard.writeText(e) : pr(e);
}, yr = async () => {
  try {
    return navigator.clipboard.readText();
  } catch {
    return "";
  }
}, fr = (e) => {
  const { isOpen: n, onDismiss: t, onSuccess: o, model: r } = e, { token: l } = de.useToken(), [a, i] = K("");
  return C(() => {
    n && r && i(r);
  }, [n]), /* @__PURE__ */ Z(
    pe,
    {
      title: "Convert to JSON Schema",
      open: n,
      destroyOnClose: !0,
      onCancel: t,
      width: 540,
      okText: "Convert",
      onOk: () => {
        try {
          o?.({
            schema: JSON.stringify(_s(me.parse(a)), null, 2),
            model: a
          });
        } catch (d) {
          q.error(d?.message);
        }
      },
      children: [
        /* @__PURE__ */ s(O.Text, { children: "Type or paste JSON or JSON5 model here and covert it to JSON Schema" }),
        /* @__PURE__ */ s(
          ln,
          {
            loading: /* @__PURE__ */ s(he, { size: "large" }),
            language: "javascript",
            theme: l.mode === "dark" ? "vs-dark" : "light",
            height: "400px",
            onChange: (d) => i(d || ""),
            value: a || "",
            onMount: (d, c) => {
              c.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                noSyntaxValidation: !0
              }), c.languages.typescript.javascriptDefaults.setModeConfiguration({
                codeActions: !1,
                inlayHints: !1
              }), d.addAction({
                id: "copy-json",
                label: "Copy JSON",
                contextMenuGroupId: "utils",
                run: async (u) => {
                  try {
                    await Me(JSON.stringify(me.parse(u.getValue()))), q.success("Copied to clipboard!");
                  } catch {
                    q.error("Failed to copy to clipboard.");
                  }
                }
              }), d.addAction({
                id: "format",
                label: "Format",
                contextMenuGroupId: "utils",
                precondition: "!editorReadonly",
                run: (u) => {
                  const p = JSON.stringify(me.parse(u.getValue()), null, 2);
                  u.setValue(p);
                }
              });
            },
            options: {
              automaticLayout: !0,
              minimap: { enabled: !1 },
              fontSize: 12,
              fontFamily: "var(--mono-font-family)",
              tabSize: 2,
              lineDecorationsWidth: 2,
              find: {
                addExtraSpaceOnTop: !1,
                seedSearchStringFromSelection: "never"
              },
              scrollbar: {
                verticalSliderSize: 4,
                verticalScrollbarSize: 4,
                horizontalScrollbarSize: 4,
                horizontalSliderSize: 4
              },
              lineNumbersMinChars: 3
            }
          }
        )
      ]
    }
  );
}, mr = "Provide JSON Schema format. If no JSON Schema is provided, validation will be skipped.", ct = {
  automaticLayout: !0,
  contextmenu: !1,
  fontSize: 13,
  fontFamily: "var(--mono-font-family)",
  tabSize: 2,
  minimap: { enabled: !1 },
  overviewRulerBorder: !1,
  scrollbar: {
    verticalSliderSize: 4,
    verticalScrollbarSize: 4,
    horizontalScrollbarSize: 4,
    horizontalSliderSize: 4
  }
};
var oo = /* @__PURE__ */ ((e) => (e.Schema = "Schema", e))(oo || {});
const so = ({ id: e, type: n = "input" }) => {
  const t = ee(), o = "json", { token: r } = de.useToken(), [l, a] = K(!1), [i, d] = K(
    "Schema"
    /* Schema */
  ), [c, u] = K(), [p, y] = K(), g = Qe(() => c?.layout(), 100, { trailing: !0 }), m = Qe(() => p?.layout(), 100, { trailing: !0 }), { disabled: h, content: T } = L(({ simulate: _, disabled: v, configurable: D, decisionGraph: R }) => ({
    nodeError: I(_).with({ error: { data: { nodeId: e } } }, ({ error: w }) => w).otherwise(() => null),
    disabled: v,
    configurable: D,
    content: (R?.nodes ?? []).find((w) => w.id === e)?.content
  })), { contentDiff: f } = Ke(e), b = V(() => f?.fields?.schema?.previousValue, [f]);
  return C(() => (window.addEventListener("resize", g), () => window.removeEventListener("resize", g)), [g, c]), C(() => (window.addEventListener("resize", m), () => window.removeEventListener("resize", m)), [m, p]), /* @__PURE__ */ s(
    "div",
    {
      className: "grl-node-content",
      "data-theme": r.mode,
      style: {
        height: "100%",
        "--color-text": r.colorTextBase,
        "--color-background-elevated": r.colorBgElevated,
        "--color-border": r.colorBorder,
        "--line-height": r.lineHeight
      },
      children: /* @__PURE__ */ s(
        On,
        {
          className: "grl-node-content-main",
          direction: "horizontal",
          autoSaveId: `jdm-editor:${n}:schema:layout`,
          children: /* @__PURE__ */ s("div", { className: "grl-node-content-side", children: /* @__PURE__ */ Z("div", { className: "grl-node-content-side__panel", children: [
            /* @__PURE__ */ s("div", { className: "grl-node-content-side__header", children: /* @__PURE__ */ s(
              sn,
              {
                rootClassName: "grl-inline-tabs",
                size: "small",
                style: { width: "100%" },
                items: Object.values(oo).map((_) => ({
                  key: _,
                  label: /* @__PURE__ */ Z("span", { children: [
                    _,
                    " ",
                    /* @__PURE__ */ s($, { title: mr, children: /* @__PURE__ */ s(
                      Bt,
                      {
                        style: { fontSize: 10, marginLeft: 4, opacity: 0.5, verticalAlign: "text-top" }
                      }
                    ) })
                  ] })
                })),
                activeKey: i,
                onChange: (_) => d(_),
                tabBarExtraContent: /* @__PURE__ */ Z(tn, { style: { marginRight: 8 }, size: "small", children: [
                  /* @__PURE__ */ s($, { title: "Format code", placement: "bottomRight", children: /* @__PURE__ */ s(
                    N,
                    {
                      size: "small",
                      type: "text",
                      disabled: h,
                      icon: /* @__PURE__ */ s(Vt, {}),
                      onClick: () => c?.getAction?.("editor.action.formatDocument")?.run?.()
                    }
                  ) }),
                  /* @__PURE__ */ s($, { title: "Import from JSON", placement: "bottomRight", children: /* @__PURE__ */ s(
                    N,
                    {
                      type: "text",
                      size: "small",
                      disabled: h,
                      icon: /* @__PURE__ */ s(Ft, {}),
                      onClick: () => {
                        a(!0);
                      }
                    }
                  ) })
                ] })
              }
            ) }),
            /* @__PURE__ */ s("div", { className: "grl-node-content-side__body", children: I(i).with(
              "Schema",
              () => b !== void 0 ? /* @__PURE__ */ s(
                qt,
                {
                  loading: /* @__PURE__ */ s(he, { size: "large" }),
                  language: o,
                  original: b,
                  modified: T?.schema,
                  onMount: (_) => y(_),
                  theme: r.mode === "dark" ? "vs-dark" : "light",
                  height: "100%",
                  options: {
                    ...ct,
                    readOnly: !0
                  }
                }
              ) : /* @__PURE__ */ s(
                ln,
                {
                  loading: /* @__PURE__ */ s(he, { size: "large" }),
                  language: o,
                  value: T?.schema || "",
                  onMount: (_) => u(_),
                  onChange: (_) => {
                    t.updateNode(e, (v) => (v.content = { schema: _ }, v));
                  },
                  theme: r.mode === "dark" ? "vs-dark" : "light",
                  height: "100%",
                  options: {
                    ...ct,
                    readOnly: h
                  }
                }
              )
            ).exhaustive() }),
            /* @__PURE__ */ s(
              fr,
              {
                isOpen: l,
                onDismiss: () => a(!1),
                onSuccess: ({ schema: _, model: v }) => {
                  localStorage.setItem(`${e}-model`, v), t.updateNode(e, (D) => (D.content = { schema: _ }, D)), a(!1);
                },
                model: localStorage.getItem(`${e}-model`) || void 0
              }
            )
          ] }) })
        }
      )
    }
  );
}, Fn = {
  type: E.Input,
  icon: /* @__PURE__ */ s(ns, {}),
  displayName: "Request",
  color: Ze.Green,
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions",
  shortDescription: "Provides input context",
  generateNode: () => ({
    name: "request",
    content: {
      schema: ""
    }
  }),
  renderTab: ({ id: e, manager: n }) => /* @__PURE__ */ s(so, { id: e, manager: n, type: "input" }),
  renderNode: ({ id: e, data: n, selected: t, specification: o }) => {
    const r = ee(), { disabled: l } = L(({ disabled: a }) => ({
      disabled: a
    }));
    return /* @__PURE__ */ s(
      Te,
      {
        id: e,
        specification: o,
        name: n.name,
        isSelected: t,
        handleLeft: !1,
        actions: [
          /* @__PURE__ */ s(N, { type: "text", onClick: () => r.openTab(e), children: "Configure" }, "edit-table")
        ],
        menuItems: [
          {
            key: "documentation",
            icon: /* @__PURE__ */ s(Ut, {}),
            label: "Documentation",
            onClick: () => window.open(o.documentationUrl, "_href")
          },
          {
            key: "delete",
            icon: /* @__PURE__ */ s(Ie, {}),
            danger: !0,
            label: /* @__PURE__ */ s(ye, { left: "Delete", right: qe.shortcut("Backspace") }),
            disabled: l,
            onClick: () => pe.confirm({
              icon: null,
              title: "Delete node",
              content: /* @__PURE__ */ Z(O.Text, { children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ s(O.Text, { strong: !0, children: n.name }),
                " node."
              ] }),
              okButtonProps: { danger: !0 },
              onOk: () => r.removeNodes([e])
            })
          }
        ]
      }
    );
  },
  getDiffContent: (e, n) => {
    const t = {};
    return U(e || {}, (o) => ((e?.schema || "")?.trim?.() !== (n?.schema || "")?.trim?.() && Y.set(t, "schema", {
      previousValue: n?.schema || "",
      status: "modified"
    }), Object.keys(t).length > 0 && (o._diff = {
      status: "modified",
      fields: t
    }), o));
  }
}, Kn = {
  type: E.Output,
  icon: /* @__PURE__ */ s(ts, {}),
  color: Ze.Green,
  displayName: "Response",
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions",
  shortDescription: "Outputs the context",
  generateNode: () => ({ name: "response", content: { schema: "" } }),
  renderTab: ({ id: e, manager: n }) => /* @__PURE__ */ s(so, { id: e, manager: n, type: "output" }),
  renderNode: ({ id: e, data: n, selected: t, specification: o }) => {
    const r = ee();
    return /* @__PURE__ */ s(
      Te,
      {
        id: e,
        specification: o,
        name: n.name,
        isSelected: t,
        handleRight: !1,
        actions: [
          /* @__PURE__ */ s(N, { type: "text", onClick: () => r.openTab(e), children: "Configure" }, "edit-table")
        ]
      }
    );
  },
  getDiffContent: (e, n) => {
    const t = {};
    return U(e || {}, (o) => ((e?.schema || "")?.trim?.() !== (n?.schema || "")?.trim?.() && Y.set(t, "schema", {
      previousValue: n?.schema || "",
      status: "modified"
    }), Object.keys(t).length > 0 && (o._diff = {
      status: "modified",
      fields: t
    }), o));
  }
}, ro = {
  type: E.Switch,
  icon: /* @__PURE__ */ s(os, {}),
  displayName: "Switch",
  documentationUrl: "https://gorules.io/docs/user-manual/decision-modeling/decisions/switch",
  shortDescription: "Conditional branching",
  color: Ze.Purple,
  getDiffContent: (e, n) => U(e, (t) => {
    const o = {};
    (e.hitPolicy ?? "") !== (n.hitPolicy ?? "") && Y.set(o, "hitPolicy", {
      status: "modified",
      previousValue: e.hitPolicy
    });
    const r = Ee(e?.statements || [], n?.statements || [], {
      compareFields: (l, a) => {
        const i = (l.condition ?? "") !== a.condition;
        return {
          hasChanges: i,
          fields: {
            ...i && {
              condition: {
                status: "modified",
                previousValue: a.condition
              }
            }
            // ...(hasIsDefaultChange && {
            //   isDefault: {
            //     status: 'modified',
            //     previousValue: previous.isDefault,
            //   },
            // }),
          }
        };
      }
    });
    return t.statements = r, r.find(
      (l) => l?._diff?.status === "modified" || l?._diff?.status === "added" || l?._diff?.status === "removed"
    ) && Y.set(o, "statements", {
      status: "modified"
    }), Object.keys(o).length > 0 && (t._diff = {
      status: "modified",
      fields: o
    }), t;
  }),
  inferTypes: {
    needsUpdate: () => !1,
    determineOutputType: (e) => e.input
  },
  generateNode: ({ index: e }) => ({
    name: `switch${e}`,
    content: {
      hitPolicy: "first",
      statements: [{ id: crypto.randomUUID(), condition: "", isDefault: !1 }]
    }
  }),
  renderNode: ({ specification: e, ...n }) => /* @__PURE__ */ s(gr, { specification: e, ...n })
}, gr = ({ id: e, data: n, selected: t, specification: o }) => {
  const r = ee(), { ref: l, inView: a } = vs({ delay: 1e3 }), { content: i, disabled: d, nodeTrace: c, compactMode: u, isGraphActive: p } = L(
    ({ decisionGraph: f, disabled: b, simulate: _, compactMode: v, activeTab: D }) => ({
      nodeTrace: I(_).with({ result: z._ }, ({ result: R }) => R?.trace?.[e]).otherwise(() => null),
      content: (f?.nodes || []).find((R) => R?.id === e)?.content,
      disabled: b,
      compactMode: v,
      isGraphActive: D === "graph"
    })
  ), y = Ce(e, { disabled: !p || !a }), g = i?.statements || [], m = i?.hitPolicy || "first", h = (f) => {
    r.updateNode(e, (b) => (b.content.hitPolicy = f, b));
  }, T = V(() => u ? Tr : hr, [u]);
  return /* @__PURE__ */ s(
    Te,
    {
      id: e,
      ref: l,
      className: k(["switch"]),
      specification: o,
      name: n.name,
      handleRight: !1,
      helper: [/* @__PURE__ */ s(dn, {}, "arrow-right")],
      noBodyPadding: !0,
      isSelected: t,
      actions: [
        /* @__PURE__ */ s(
          N,
          {
            type: "text",
            disabled: d,
            onClick: () => {
              m === "first" && g?.length > 0 ? r.updateNode(e, (f) => (f.content.statements = (f.content.statements || []).map((b) => (b.isDefault && (b.isDefault = !1), b)), f.content.statements.push({ id: crypto.randomUUID(), condition: "", isDefault: !0 }), f)) : r.updateNode(e, (f) => (f.content.statements = (f.content.statements || []).map((b) => (b.isDefault && (b.isDefault = !1), b)), f.content.statements.push({ id: crypto.randomUUID(), condition: "", isDefault: !1 }), f));
            },
            children: "Add Condition"
          },
          "add condition"
        ),
        /* @__PURE__ */ s(
          ue,
          {
            trigger: ["click"],
            placement: "bottomRight",
            menu: {
              items: [
                {
                  key: "first",
                  label: "First",
                  onClick: () => h("first"),
                  disabled: d
                },
                {
                  key: "collect",
                  label: "Collect",
                  disabled: d,
                  onClick: () => {
                    r.updateNode(e, (f) => (f.content.statements = (f.content.statements || []).map(
                      (b) => (b.isDefault && (b.isDefault = !1), b)
                    ), f)), h("collect");
                  }
                }
              ]
            },
            children: /* @__PURE__ */ Z(N, { type: "text", style: { textTransform: "capitalize", marginLeft: "auto" }, children: [
              m,
              " ",
              /* @__PURE__ */ s(Kt, {})
            ] })
          },
          "hitPolicy"
        )
      ],
      children: /* @__PURE__ */ s("div", { className: "switchNode", children: /* @__PURE__ */ Z("div", { className: "switchNode__body edit nodrag", children: [
        !(g?.length > 0) && /* @__PURE__ */ s(O.Text, { type: "secondary", className: "no-conditions", children: "No conditions" }),
        g.map((f, b) => /* @__PURE__ */ s(
          T,
          {
            index: b,
            value: f.condition,
            diff: f?._diff,
            id: f.id,
            isDefault: f.isDefault,
            totalStatements: g.length,
            disabled: d,
            hitPolicy: m,
            variableType: y,
            onSetIsDefault: (_) => {
              r.updateNode(e, (v) => {
                const D = v.content.statements.find((R) => R.id === f.id);
                return _ && (D.condition = ""), D.isDefault = _, v;
              });
            },
            isActive: I(c?.traceData).with(
              { statements: z.array(z._) },
              ({ statements: _ }) => _.some((v) => typeof v == "object" && v && "id" in v && v.id === f?.id)
            ).otherwise(() => !1),
            onDelete: () => {
              r.updateNode(e, (_) => (_.content.statements = _.content.statements.filter(
                (v) => v?.id !== f?.id
              ), (_.content.statements || []).length === 1 && (_.content.statements = (_.content.statements || []).map(
                (v) => (v.isDefault && (v.isDefault = !1), v)
              )), _)), r.removeEdgeByHandleId(f?.id);
            },
            onChange: (_) => {
              r.updateNode(e, (v) => {
                const D = v.content.statements.find((R) => R.id === f.id);
                return D.condition = _, v;
              });
            }
          },
          f.id
        ))
      ] }) })
    }
  );
}, hr = ({
  id: e,
  value: n,
  diff: t,
  onChange: o,
  disabled: r,
  configurable: l = !0,
  onDelete: a,
  isActive: i,
  index: d = 0,
  isDefault: c = !1,
  onSetIsDefault: u,
  totalStatements: p,
  hitPolicy: y,
  variableType: g
}) => {
  const [m, h] = K(n);
  In(() => {
    m !== n && h(n);
  }, [n]);
  const T = (_) => {
    h(_), o?.(_);
  }, f = d === p - 1, b = c && y === "first" && f && d > 0 && (n || "")?.trim?.()?.length === 0;
  return /* @__PURE__ */ Z("div", { className: k("switchNode__statement", i && "active", t?.status && `diff-${t?.status}`), children: [
    /* @__PURE__ */ Z(
      "div",
      {
        className: k("switchNode__statement__heading", b && "switchNode__statement__heading--without-input"),
        children: [
          (d === 0 || y === "collect") && /* @__PURE__ */ s(
            N,
            {
              disabled: r,
              className: k("switchNode__statement__heading__action"),
              size: "small",
              type: "text",
              children: "If"
            }
          ),
          y !== "collect" && d > 0 && /* @__PURE__ */ s(
            N,
            {
              className: k("switchNode__statement__heading__action", b && "inactive"),
              size: "small",
              type: "text",
              disabled: r,
              onClick: () => {
                f && y === "first" && u?.(!1);
              },
              children: "Else If"
            }
          ),
          y !== "collect" && d > 0 && f && /* @__PURE__ */ s(
            N,
            {
              className: k("switchNode__statement__heading__action", !b && "inactive"),
              size: "small",
              type: "text",
              disabled: r,
              onClick: () => {
                f && y === "first" && u?.(!0);
              },
              children: "Else"
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              style: {
                flexGrow: 1
              }
            }
          ),
          !r && l && /* @__PURE__ */ s(on, { title: "Remove condition?", okText: "Remove", onConfirm: () => a?.(), children: /* @__PURE__ */ s(N, { className: "switchNode__statement__delete", size: "small", type: "text", icon: /* @__PURE__ */ s(Ie, {}) }) }),
          /* @__PURE__ */ s(
            $e,
            {
              id: e,
              type: "source",
              position: We.Right,
              className: k(i && "switchNode__activeHandle")
            }
          )
        ]
      }
    ),
    !b && /* @__PURE__ */ s("div", { className: "switchNode__statement__inputArea", children: /* @__PURE__ */ s(
      ke,
      {
        style: {
          fontSize: 12,
          lineHeight: "20px",
          width: "100%"
        },
        displayDiff: t?.fields?.condition?.status === "modified",
        previousValue: t?.fields?.condition?.previousValue,
        value: m,
        maxRows: 4,
        disabled: r,
        onChange: T,
        variableType: g
      }
    ) })
  ] });
}, Tr = ({ id: e, value: n, diff: t, onChange: o, disabled: r, configurable: l = !0, onDelete: a, isActive: i, variableType: d }) => {
  const [c, u] = K(n);
  In(() => {
    c !== n && u(n);
  }, [n]);
  const p = (y) => {
    u(y), o?.(y);
  };
  return /* @__PURE__ */ Z(
    "div",
    {
      className: k("switchNode__statement", "compact", i && "active", t?.status && `diff-${t?.status}`),
      children: [
        /* @__PURE__ */ s("div", { className: k("switchNode__statement__inputArea"), children: /* @__PURE__ */ s(
          ke,
          {
            style: {
              fontSize: 12,
              lineHeight: "20px",
              width: "100%"
            },
            displayDiff: t?.fields?.condition?.status === "modified",
            previousValue: t?.fields?.condition?.previousValue,
            value: c,
            maxRows: 4,
            disabled: r,
            onChange: p,
            variableType: d
          }
        ) }),
        !r && l && /* @__PURE__ */ s("div", { className: "switchNode__statement__button", children: /* @__PURE__ */ s(on, { title: "Remove condition?", okText: "Remove", onConfirm: () => a?.(), children: /* @__PURE__ */ s(N, { className: "switchNode__statement__delete", size: "small", type: "text", icon: /* @__PURE__ */ s(Ie, {}) }) }) }),
        /* @__PURE__ */ s(
          $e,
          {
            id: e,
            type: "source",
            position: We.Right,
            className: k(i && "switchNode__activeHandle")
          }
        )
      ]
    }
  );
}, Ge = (e, n) => {
  const t = (e || "").trim(), o = (n || "").trim();
  return t === o;
}, br = (e, n, t) => {
  const o = Zr(e?.nodes ?? [], n?.nodes ?? [], t), r = _r(e?.edges ?? [], n?.edges ?? []);
  return {
    nodes: o,
    edges: r
  };
}, Zr = (e, n, t) => {
  const o = t?.components || [], r = t?.customNodes || [], l = /* @__PURE__ */ new Map();
  return (e || []).forEach((a) => {
    const i = (n || []).find((d) => d.id === a.id);
    if (!i)
      l.set(a.id, {
        ...a,
        _diff: {
          status: "added"
        }
      });
    else {
      const d = {};
      (i.position.x !== a.position.x || i.position.y !== a.position.y) && Y.set(d, "position", {
        status: "moved",
        previousValue: i.position
      }), i.name !== a.name && Y.set(d, "name", {
        status: "modified",
        previousValue: i.name
      });
      const c = I([a.type, i.type]).with(
        [E.Output, E.Output],
        () => Kn?.getDiffContent?.(a?.content, i?.content)
      ).with(
        [E.Input, E.Input],
        () => Fn?.getDiffContent?.(a?.content, i?.content)
      ).with(
        [E.Expression, E.Expression],
        () => Bn?.getDiffContent?.(a?.content, i?.content)
      ).with(
        [E.DecisionTable, E.DecisionTable],
        () => jn?.getDiffContent?.(a?.content, i?.content)
      ).with([E.Function, E.Function], () => {
        const u = Vn?.getDiffContent?.(a?.content, i?.content);
        return I(a?.content).with(z.string, () => (u?._diff?.fields?.source?.status === "modified" && Y.set(d, "content", {
          status: "modified",
          previousValue: u?._diff?.fields?.source?.previousValue
        }), u?.source)).otherwise(() => u);
      }).with(
        [E.Switch, E.Switch],
        () => ro?.getDiffContent?.(a?.content, i?.content)
      ).otherwise(() => {
        const u = o.find((y) => y.type === a.type);
        if (u)
          return u?.getDiffContent?.(a?.content, i?.content);
        const p = r.find(
          (y) => a?.type === "customNode" && a?.content?.kind === y?.kind
        );
        return p ? p?.calculateDiff?.(a?.content, i?.content) : null;
      });
      Object.keys(d).filter((u) => u !== "position").length > 0 || c?._diff?.status === "modified" ? l.set(a.id, {
        ...a,
        content: c ?? a.content,
        _diff: {
          status: "modified",
          fields: d
        }
      }) : Object.keys(d).length === 1 && d?.position?.status === "moved" ? l.set(a.id, {
        ...a,
        content: c ?? a.content,
        _diff: {
          status: "moved",
          fields: d
        }
      }) : l.set(a.id, {
        ...a,
        _diff: {
          status: "unchanged"
        }
      });
    }
  }), (n || []).forEach((a) => {
    l.has(a.id) || l.set(a.id, {
      ...a,
      _diff: {
        status: "removed"
      }
    });
  }), Array.from(l.values());
}, _r = (e, n) => {
  const t = /* @__PURE__ */ new Map();
  return (e || []).forEach((o) => {
    (n || []).find((l) => l.id === o.id) ? t.set(o.id, {
      ...o,
      _diff: {
        status: "unchanged"
      }
    }) : t.set(o.id, {
      ...o,
      _diff: {
        status: "added"
      }
    });
  }), (n || []).forEach((o) => {
    t.has(o.id) || t.set(o.id, {
      ...o,
      _diff: {
        status: "removed"
      }
    });
  }), Array.from(t.values());
}, Ee = (e, n, t = {}) => {
  const { idField: o = "id", compareFields: r } = t, l = (y) => y[o] || y._id, a = new Map(n.map((y, g) => [l(y), { ...y, index: g }])), i = new Map(e.map((y, g) => [l(y), { ...y, index: g }])), d = [], c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  e.forEach((y, g) => {
    a.has(l(y)) || c.add(g);
  }), n.forEach((y, g) => {
    i.has(l(y)) || u.add(g);
  });
  const p = (y, g) => {
    const m = Array.from(c).filter((b) => b < g).length, h = Array.from(u).filter((b) => b < y).length, T = g - m;
    return y - h !== T;
  };
  return e.forEach((y, g) => {
    const m = a.get(l(y));
    if (!m)
      d.push({
        ...y,
        originalIndex: g,
        _diff: {
          status: "added",
          newIndex: g
        }
      });
    else {
      const h = p(m.index, g), T = r ? r(y, m) : { hasChanges: !1 };
      T.hasChanges || h ? d.push({
        ...y,
        originalIndex: g,
        _diff: {
          status: "modified",
          positionChanged: h,
          previousIndex: m.index,
          newIndex: g,
          ...T.fields ? { fields: T.fields } : {}
        }
      }) : d.push({
        ...y,
        originalIndex: g,
        _diff: {
          status: "unchanged"
        }
      });
    }
  }), n.forEach((y, g) => {
    if (!i.has(l(y))) {
      let m = g;
      for (; m < d.length && a.get(l(d[m]))?.index < g; )
        m++;
      d.splice(m, 0, {
        ...y,
        originalIndex: g,
        isRemoved: !0,
        _diff: {
          status: "removed",
          previousIndex: g
        }
      });
    }
  }), d.map(({ originalIndex: y, isRemoved: g, ...m }) => m);
}, vr = (e) => {
  if (!e) return "";
  const n = "̶";
  return Array.from(e).map((t) => t + n).join("");
}, Di = (e, n) => [vr(n), "->", e].join(" "), re = Symbol("private"), xr = (e) => ({
  id: e?.id,
  sourceId: e?.source,
  type: e?.type,
  targetId: e?.target,
  name: e?.label,
  sourceHandle: e.sourceHandle ?? void 0,
  targetHandle: e.targetHandle ?? void 0
}), Zn = (e) => ({
  id: e.id,
  type: e.type,
  position: e.position,
  height: e[re]?.dimensions?.height,
  width: e[re]?.dimensions?.width,
  selected: e[re]?.selected,
  data: {
    name: e.name,
    kind: e?.content?.kind
  }
}), Pe = (e) => e.map(Zn), _n = (e) => ({
  id: e.id,
  source: e.sourceId,
  type: e?.type || "edge",
  target: e.targetId,
  label: e.name,
  sourceHandle: e.sourceHandle,
  targetHandle: e.targetHandle,
  markerEnd: { type: Ao.ArrowClosed, width: 20, height: 20 }
}), vn = (e) => e.filter((n) => n.sourceId && n.targetId).map(_n);
var G = /* @__PURE__ */ ((e) => (e[e.Input = 0] = "Input", e[e.Output = 1] = "Output", e[e.InferredInput = 2] = "InferredInput", e[e.InferredOutput = 3] = "InferredOutput", e))(G || {});
const ze = j.createContext({}), wr = (e) => {
  const { children: n } = e, t = V(
    () => xe()(() => ({
      id: void 0,
      simulate: void 0,
      decisionGraph: { nodes: [], edges: [] },
      hoveredEdgeId: null,
      openTabs: [],
      activeTab: "graph",
      name: "graph.json",
      disabled: !1,
      configurable: !0,
      components: [],
      customNodes: [],
      activePanel: void 0,
      panels: [],
      compactMode: localStorage.getItem("jdm-compact-mode") === "true",
      nodeTypes: {},
      globalType: {}
    })),
    []
  ), o = V(
    () => xe(() => ({
      onChange: void 0,
      onPanelsChange: void 0
    })),
    []
  ), r = V(
    () => xe(() => ({
      nodesState: Le(),
      edgesState: Le(),
      graphClipboard: Le(),
      reactFlowInstance: Le()
    })),
    []
  ), l = V(
    () => ({
      handleNodesChange: (a = []) => {
        const { nodesState: i } = r.getState(), { decisionGraph: d } = t.getState(), [, , c] = i.current;
        let u = !1;
        c?.(a);
        const p = U(d, (y) => {
          a.forEach(
            (g) => I(g).with({ type: "position" }, (m) => {
              const h = y.nodes.find((T) => T.id === m.id);
              h && m.position && !Q(h.position, m.position) && (u = !0, h.position = m.position);
            }).with({ type: "dimensions" }, (m) => {
              const h = y.nodes.find((T) => T.id === m.id);
              h && !Q(h[re]?.dimensions, m.dimensions) && (u = !0, h[re] ??= {}, h[re].dimensions = { height: m.dimensions?.height, width: m.dimensions?.width });
            }).with({ type: "select" }, (m) => {
              const h = y.nodes.find((T) => T.id === m.id);
              h && h[re]?.selected !== m.selected && (u = !0, h[re] ??= {}, h[re].selected = m.selected);
            }).otherwise(() => {
            })
          );
        });
        u && (t.setState({ decisionGraph: p }), o.getState().onChange?.(p));
      },
      handleEdgesChange: (a = []) => {
        const { decisionGraph: i } = t.getState(), { edgesState: d } = r.getState();
        if (d?.current?.[2](a), a.find((c) => c.type === "remove")) {
          const c = U(i, (u) => {
            const p = (u.edges || []).map((y) => a.find((m) => "id" in m && m.id === y.id)?.type === "remove" ? null : y).filter((y) => !!y);
            u.edges = p;
          });
          t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
        }
      },
      setNodes: (a = []) => {
        const { nodesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i?.current?.[1](Pe(a));
        const c = U(d, (u) => {
          u.nodes = a;
        });
        t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
      },
      addNodes: (a) => {
        const { nodesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i.current[0]?.some((p) => p.type === E.Input) && (a = a.filter((p) => p.type !== E.Input)), i.current[1]?.((p) => p.concat(Pe(a)));
        const u = U(d, (p) => {
          p.nodes = (p.nodes || []).concat(a);
        });
        t.setState({ decisionGraph: u }), o.getState().onChange?.(u);
      },
      duplicateNodes: (a) => {
        const { nodesState: i, edgesState: d } = r.getState(), { decisionGraph: c } = t.getState();
        let u = (c?.nodes || []).filter((f) => a.includes(f.id));
        if (i.current[0]?.some((f) => f.type === E.Input) && (u = u.filter((f) => f.type !== E.Input)), u.length === 0)
          return;
        const y = u.reduce(
          (f, b) => ({
            ...f,
            [b.id]: crypto.randomUUID()
          }),
          {}
        ), g = u.map((f) => ({
          ...f,
          id: y[f.id],
          position: {
            x: f.position?.x || 0,
            y: (f.position?.y || 0) + 140
          }
        })), m = Object.keys(y), h = [];
        g.length > 0 && (d.current?.[0] || []).forEach((f) => {
          m.includes(f.source) && m.includes(f.target) && h.push({
            id: crypto.randomUUID(),
            type: f.type,
            sourceId: y[f.source],
            targetId: y[f.target],
            sourceHandle: f.sourceHandle ?? void 0,
            targetHandle: f.targetHandle ?? void 0
          });
        }), i.current[1]?.((f) => f.concat(g.map(Zn))), d.current[1]?.((f) => f.concat(h.map(_n)));
        const T = U(c, (f) => {
          f.nodes.push(...g), f.edges.push(...h);
        });
        t.setState({ decisionGraph: T }), o.getState().onChange?.(T);
      },
      copyNodes: (a) => {
        const { graphClipboard: i, nodesState: d } = r.getState();
        if (!i.current || !d.current)
          return;
        const [c] = d.current, u = c.filter((p) => a.includes(p.id));
        i.current.copyNodes(u);
      },
      pasteNodes: () => {
        const { graphClipboard: a } = r.getState();
        a.current?.pasteNodes?.();
      },
      removeNodes: (a = []) => {
        const { nodesState: i, edgesState: d } = r.getState(), { decisionGraph: c, nodeTypes: u } = t.getState();
        i.current[1]?.((g) => g.filter((m) => a.every((h) => m.id !== h))), d.current[1]?.(
          (g) => g.filter(
            (m) => a.every((h) => m.source !== h && m.target !== h && m.sourceHandle !== h && m.targetHandle !== h)
          )
        );
        const p = U(c, (g) => {
          const m = g.nodes || [], h = g.edges || [];
          g.nodes = m.filter((T) => a.every((f) => T.id !== f)), g.edges = h.filter(
            (T) => a.every((f) => T.sourceId !== f && T.targetId !== f && T.sourceHandle !== f && T.targetHandle !== f)
          );
        }), y = U(u, (g) => {
          a.forEach((m) => {
            m in g && delete g[m];
          });
        });
        t.setState({ decisionGraph: p, nodeTypes: y }), o.getState().onChange?.(p);
      },
      addEdges: (a) => {
        const { edgesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i.current?.[1]?.((u) => u.concat(a.map(_n)));
        const c = U(d, (u) => {
          u.edges = (u.edges || []).concat(a);
        });
        t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
      },
      setEdges: (a = []) => {
        const { edgesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i?.current?.[1]?.(vn(a));
        const c = U(d, (u) => {
          u.edges = a;
        });
        t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
      },
      removeEdges: (a) => {
        const { edgesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i?.current?.[1]?.((u) => u.filter((p) => !a.find((y) => p.id === y)));
        const c = U(d, (u) => {
          u.edges = u.edges.filter((p) => !a.find((y) => p.id === y));
        });
        t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
      },
      removeEdgeByHandleId: (a) => {
        if (!a) return;
        const { edgesState: i } = r.getState(), { decisionGraph: d } = t.getState();
        i?.current?.[1]?.((u) => u.filter((p) => p.sourceHandle !== a));
        const c = U(d, (u) => {
          u.edges = u.edges.filter((p) => p.sourceHandle !== a);
        });
        t.setState({ decisionGraph: c }), o.getState().onChange?.(c);
      },
      updateNode: (a, i) => {
        const { decisionGraph: d } = t.getState(), { nodesState: c } = r.getState(), [u, p] = c.current, y = U(d, (T) => {
          const f = (T.nodes ?? []).find((b) => b?.id === a);
          f && i(f);
        }), g = y.nodes.find((T) => T.id === a);
        if (!g)
          return;
        const m = Zn(g), h = u.find((T) => T.id === a);
        Q(m, h) || p((T) => T.map((f) => f.id === a ? m : f)), t.setState({ decisionGraph: y }), o.getState().onChange?.(y);
      },
      setDecisionGraph: (a, i = {}) => {
        const { decisionGraph: d } = t.getState(), { edgesState: c, nodesState: u } = r.getState(), { skipOnChangeEvent: p = !1 } = i, y = U(d, (g) => {
          Object.assign(g, a);
        });
        c?.current?.[1](vn(y?.edges ?? [])), u?.current?.[1](Pe(y?.nodes ?? [])), t.setState({
          decisionGraph: y
        }), p || o.getState().onChange?.(y);
      },
      calculateDiffGraph: (a, i) => {
        const { components: d, customNodes: c } = t.getState();
        return br(a, i, {
          components: d,
          customNodes: c
        });
      },
      setHoveredEdgeId: (a) => t.setState({ hoveredEdgeId: a }),
      goToNode: (a) => {
        if (t.getState().activeTab !== "graph")
          return;
        const { reactFlowInstance: i } = r.getState();
        if (!i.current)
          return;
        const d = i.current.getNode(a);
        d && i.current.fitView({ nodes: [d], duration: 1e3, maxZoom: 1.25 });
      },
      openTab: (a) => {
        const { openTabs: i } = t.getState(), d = i.find((c) => c === a);
        if (a === "graph")
          return t.setState({ activeTab: a });
        d ? t.setState({ activeTab: d }) : t.setState({ openTabs: [...i, a], activeTab: a });
      },
      closeTab: (a, i) => {
        const { openTabs: d, activeTab: c } = t.getState(), u = d?.findIndex((h) => h === a), p = d?.[u], y = I(i).with(void 0, () => d.filter((h) => h !== p)).with("close", () => d.filter((h) => h !== p)).with("close-all", () => []).with("close-other", () => d.filter((h) => h === p)).with("close-right", () => d.slice(0, u + 1)).with("close-left", () => d.slice(u)).otherwise(() => d), g = {
          openTabs: y
        };
        y?.find((h) => h === c) || (g.activeTab = y?.[u - 1] ?? "graph"), t.setState(g);
      },
      setActivePanel: (a) => {
        const { panels: i } = t.getState(), d = {
          activePanel: a === void 0 ? void 0 : (i || []).find((c) => c.id === a)?.id
        };
        o.getState()?.onPanelsChange?.(a), t.setState(d);
      },
      setCompactMode: (a) => {
        const i = {
          compactMode: a
        };
        localStorage.setItem("jdm-compact-mode", `${a}`), t.setState(i);
      },
      toggleCompactMode: () => {
        const { compactMode: a } = t.getState(), i = !a, d = {
          compactMode: i
        };
        localStorage.setItem("jdm-compact-mode", `${i}`), t.setState(d);
      },
      setNodeType: (a, i, d) => {
        const { nodeTypes: c } = t.getState(), u = U(c, (p) => {
          p[a] ??= {}, p[a][i] = d;
        });
        t.setState({ nodeTypes: u });
      },
      removeNodeType: (a, i) => {
        const { nodeTypes: d } = t.getState(), c = U(d, (u) => {
          a in u && (i ? i in u[a] && delete u[a][i] : delete u[a]);
        });
        t.setState({ nodeTypes: c });
      },
      triggerNodeSelect: (a, i) => {
        const { decisionGraph: d } = t.getState(), { nodesState: c, edgesState: u } = r.getState(), [, p] = c.current, [, y] = u.current, g = U(d, (m) => {
          const h = m.nodes.find((T) => T.id === a);
          h && (i === "only" && m.nodes.forEach((T) => {
            T[re] && (T[re].selected = !1);
          }), h[re] ??= {}, h[re].selected = I(i).with("only", () => !0).otherwise(() => !h[re]?.selected));
        });
        p(Pe(g.nodes)), i == "only" && y(
          (m) => m.map((h) => ({
            ...h,
            selected: !1
          }))
        ), t.setState({ decisionGraph: g }), o.getState().onChange?.(g);
      }
    }),
    []
  );
  return /* @__PURE__ */ s(
    ze.Provider,
    {
      value: {
        stateStore: t,
        referenceStore: r,
        listenerStore: o,
        actions: l
      },
      children: n
    }
  );
};
function L(e, n = Q) {
  return j.useContext(ze).stateStore(e, n);
}
function ao(e, n = Q) {
  return j.useContext(ze).listenerStore(e, n);
}
function Dr(e, n = Q) {
  return j.useContext(ze).referenceStore(e, n);
}
function ee() {
  return j.useContext(ze).actions;
}
function _e() {
  return j.useContext(ze);
}
const Ke = (e) => {
  const { diff: n, contentDiff: t } = L((o) => {
    const r = (o?.decisionGraph?.nodes ?? []).find((l) => l.id === e);
    return {
      diff: r?._diff,
      contentDiff: r?.content?._diff
    };
  });
  return {
    diff: n,
    contentDiff: t
  };
}, Sr = (e) => {
  const { diff: n } = L((t) => ({
    diff: (t?.decisionGraph?.edges ?? []).find((r) => r.id === e)?._diff
  }));
  return {
    diff: n
  };
}, Ir = ({
  id: e,
  defaultValue: n,
  value: t,
  name: o,
  disabled: r = !1,
  configurable: l = !0,
  onChange: a,
  components: i,
  customNodes: d,
  defaultActivePanel: c,
  panels: u,
  simulate: p,
  inputsSchema: y,
  outputsSchema: g,
  onPanelsChange: m,
  onReactFlowInit: h,
  onCodeExtension: T,
  onFunctionReady: f
}) => {
  const b = X(!1), _ = ee(), { stateStore: v, listenerStore: D } = _e(), { decisionGraph: R } = L(({ decisionGraph: P }) => ({
    decisionGraph: P
  })), w = Rn((P) => {
    a?.(P);
  }, 100);
  return C(() => {
    v.setState({
      id: e,
      disabled: r,
      configurable: l,
      components: Array.isArray(i) ? i : [],
      customNodes: Array.isArray(d) ? d : [],
      panels: u
    });
  }, [e, r, l, i, d, u]), C(() => {
    v.setState({ name: o ?? "graph.json" });
  }, [o]), C(() => {
    v.setState({
      inputsSchema: y,
      outputsSchema: g
    });
  }, [y, g]), C(() => {
    v.setState({ simulate: p });
  }, [p]), C(() => {
    D.setState({
      onReactFlowInit: h,
      onPanelsChange: m,
      onCodeExtension: T,
      onFunctionReady: f
    });
  }, [h, m, T, f]), C(() => {
    D.setState({ onChange: w });
  }, [w]), C(() => {
    b.current && t !== void 0 && !Q(t, R) && _.setDecisionGraph(t);
  }, [t]), C(() => {
    t !== void 0 ? _.setDecisionGraph(t) : n !== void 0 && _.setDecisionGraph(n), v.setState({
      activePanel: c
    }), b.current = !0;
  }, []), null;
}, Cr = () => {
  let e = null;
  return {
    walk: function* (n) {
      const t = kr(n);
      if (e && Q(t, e.digest)) {
        yield* Nr(n, e.iterator);
        return;
      }
      const o = [];
      for (const r of zr(n))
        o.push({ id: r.node.id, incomers: r.incomers.map((l) => l.id) }), yield r;
      e = { digest: t, iterator: o };
    }
  };
}, kr = (e) => {
  const n = e.nodes.map((o) => o.id), t = e.edges;
  return { nodes: n, edges: t };
};
function* zr(e) {
  const n = Pe(e.nodes), t = vn(e.edges), o = e.nodes.find((i) => i.type === "inputNode"), r = n.find((i) => i.id === o?.id);
  if (!o || !r || Pr(r, n, t))
    return;
  yield { node: o, incomers: [] };
  const l = /* @__PURE__ */ new Set();
  l.add(o.id);
  const a = Ye(r, n, t);
  for (; a.length > 0; ) {
    const i = a.pop();
    if (l.has(i.id))
      continue;
    const d = Uo(i, n, t), c = d.filter((y) => !l.has(y.id));
    if (c.length > 0) {
      a.push(i, ...c);
      continue;
    }
    l.add(i.id);
    const u = e.nodes.find((y) => y.id === i.id);
    if (u) {
      const y = e.nodes.filter((g) => d.some((m) => m.id === g.id));
      yield { node: u, incomers: y };
    }
    const p = Ye(i, n, t);
    a.push(...p);
  }
}
function* Nr(e, n) {
  for (const t of n) {
    const o = e.nodes.find((l) => l.id === t.id);
    if (!o)
      continue;
    const r = e.nodes.filter((l) => t.incomers.includes(l.id));
    yield { node: o, incomers: r };
  }
}
const Pr = (e, n, t) => {
  const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), l = (a) => {
    o.add(a.id), r.add(a.id);
    const i = Ye(a, n, t);
    for (const d of i)
      if (o.has(d.id)) {
        if (r.has(d.id))
          return !0;
      } else if (l(d))
        return !0;
    return r.delete(a.id), !1;
  };
  return l(e);
};
const ge = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  [E.Input]: Fn,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  [E.Output]: Kn,
  [E.DecisionTable]: jn,
  [E.Expression]: Bn,
  [E.Function]: Vn,
  [E.Switch]: ro
}, Rr = () => {
  const { stateStore: e } = _e();
  return C(() => {
    if (ie())
      return e.subscribe(({ simulate: n, nodeTypes: t, decisionGraph: o }, r) => {
        if (Q(n, r?.simulate))
          return;
        const l = I(n).with({ result: z.nonNullable }, ({ result: d }) => d.trace).otherwise(() => null);
        if (l === null) {
          const d = U(t, (c) => {
            Object.values(c).forEach((u) => {
              delete u[G.Input], delete u[G.Output];
            });
          });
          e.setState({ nodeTypes: d });
          return;
        }
        const a = Object.values(l);
        if (a.length === 0)
          return;
        const i = U(t, (d) => {
          a.forEach((c) => {
            o.nodes.find((p) => p.id === c.id)?.type !== "inputNode" && (d[c.id] ??= {}, d[c.id][G.Output] = new ae(c.output ?? {}), d[c.id][G.Input] = new ae(c.input ?? {}));
          });
        });
        e.setState({ nodeTypes: i });
      });
  }, []), C(() => {
    if (!ie())
      return;
    const n = Cr();
    return e.subscribe((t, o) => {
      const r = ut(t), l = ut(o), a = Er(t, o);
      if (Q(r, l) && !a)
        return;
      const i = Or(t, o, n);
      i.isModified && e.setState({ nodeTypes: i.nodeTypes });
    });
  }, []), C(() => {
    if (ie())
      return e.subscribe((n, t) => {
        const o = pt(n), r = pt(t);
        if (Q(o, r))
          return;
        const l = ae.fromJson({ Object: {} });
        n.decisionGraph.nodes.forEach((a) => {
          const i = n.nodeTypes[a.id], d = i?.[G.Output] ?? i?.[G.InferredOutput] ?? ae.fromJson({ Object: {} });
          l.set(a.name, d);
        }), e.setState({ globalType: { $nodes: l } });
      });
  }, []), null;
}, Or = ({ decisionGraph: e, nodeTypes: n, customNodes: t }, o, r) => {
  let l = !1;
  const a = U(n, (i) => {
    r.walk(e).forEach(({ node: d, incomers: c }) => {
      if (d.type === "inputNode")
        return;
      const u = c.map((v) => {
        const D = i[v.id] ?? {};
        return D[G.Output] ?? D[G.InferredOutput];
      }).filter((v) => !!v).map((v) => v.clone()), p = I(u.length).with(1, () => u[0]).otherwise(() => ae.fromIncoming(u));
      i?.[d.id]?.[G.InferredInput]?.equal(p) || (l = !0, i[d.id] ??= {}, i[d.id][G.InferredInput] = p);
      const g = ge[d.type]?.inferTypes ?? t.find((v) => v.kind === d.type)?.inferTypes;
      if (!g)
        return;
      const m = i?.[d.id]?.[G.Input] ?? i?.[d.id]?.[G.InferredInput] ?? ae.fromJson("Any"), h = o.nodeTypes?.[d.id]?.[G.Input] ?? o.nodeTypes?.[d.id]?.[G.InferredInput] ?? ae.fromJson("Any"), T = o.decisionGraph.nodes.find((v) => v.id === d.id)?.content;
      if (!(g.needsUpdate(d.content, T) || !m.equal(h)) && i?.[d.id]?.[G.InferredOutput])
        return;
      const b = g.determineOutputType({ input: m, content: d.content });
      i?.[d.id]?.[G.InferredOutput]?.equal(b) || (l = !0, i[d.id] ??= {}, i[d.id][G.InferredOutput] = b);
    });
  });
  return {
    isModified: l,
    nodeTypes: a
  };
}, ut = ({ decisionGraph: e, nodeTypes: n, customNodes: t }) => {
  const o = e.edges, r = e.nodes.map(({ id: c, type: u }) => ({ id: c, type: u })), l = t.map((c) => c.kind), a = Object.entries(n).map(([c, u]) => ({
    id: c,
    input: xn(u[G.Input]),
    output: xn(u[G.Output])
  })), i = e.nodes.find((c) => c.type === "inputNode")?.id, d = I(n?.[i ?? ""]?.[G.InferredOutput]).with(z.nonNullable, (c) => c.hash()).otherwise(() => null);
  return { edgesData: o, nodesData: r, typesData: a, customNodesData: l, inputNodeType: d };
}, Er = ({ decisionGraph: e, customNodes: n }, t) => e.nodes.map((r) => {
  const l = ge[r.type]?.inferTypes ?? n.find((i) => i.kind === r.type)?.inferTypes;
  if (!l)
    return !1;
  const a = t.decisionGraph.nodes.find((i) => i.id === r.id);
  return a ? l.needsUpdate(r.content, a.content) : !0;
}).some((r) => r), xn = (e) => {
  if (e)
    return e.__hash || (e.__hash = e.hash()), e.__hash;
}, pt = (e) => ({ nodeInfo: e.decisionGraph.nodes.map((t) => {
  const o = e.nodeTypes[t.id], r = o?.[G.Output] ?? o?.[G.InferredOutput];
  return {
    id: t.id,
    type: xn(r),
    name: t.name
  };
}) }), yt = "jdmEditor:graphPanel:height", Ar = () => {
  const e = ee(), { panels: n, activePanel: t } = L(({ panels: l, activePanel: a }) => ({
    panels: l,
    activePanel: a
  })), o = V(() => t === void 0 ? void 0 : (n || []).find((l) => l.id === t), [t, n]), r = V(() => Number.parseFloat(localStorage.getItem(yt) ?? "") ?? 300, [o]);
  return o ? /* @__PURE__ */ Z(
    Ss,
    {
      className: "grl-dg__panel",
      defaultSize: { height: r },
      handleStyles: {
        bottom: { display: "none" },
        left: { display: "none" },
        topLeft: { display: "none" },
        topRight: { display: "none" },
        right: { display: "none" },
        bottomLeft: { display: "none" },
        bottomRight: { display: "none" }
      },
      maxHeight: 500,
      minHeight: 150,
      onResize: (l, a, i) => {
        localStorage.setItem(yt, i.clientHeight.toString());
      },
      children: [
        !o.hideHeader && /* @__PURE__ */ Z("div", { className: "grl-dg__panel__toolbar", children: [
          /* @__PURE__ */ s("div", { className: "grl-dg__panel__toolbar__content", children: /* @__PURE__ */ s(O.Text, { style: { fontSize: 13 }, children: o.title }) }),
          /* @__PURE__ */ s("div", { className: "grl-dg__panel__toolbar__actions", children: /* @__PURE__ */ s($, { placement: "topLeft", title: "Close panel", children: /* @__PURE__ */ s(
            N,
            {
              size: "small",
              type: "text",
              icon: /* @__PURE__ */ s(be, { style: { fontSize: 12 } }),
              onClick: () => e.setActivePanel(void 0)
            }
          ) }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "grl-dg__panel__content", children: o?.renderPanel?.({}) })
      ]
    }
  ) : null;
}, Ur = (e) => {
  const n = ee(), { id: t, sourceX: o, sourceY: r, targetX: l, targetY: a, sourcePosition: i, targetPosition: d, style: c = {}, markerEnd: u } = e, { isHovered: p, disabled: y } = L(({ hoveredEdgeId: f, disabled: b }) => ({
    isHovered: f === t,
    disabled: b
  })), { diff: g } = Sr(t), [m, h, T] = jo({
    sourceX: o,
    sourceY: r,
    sourcePosition: i,
    targetX: l,
    targetY: a,
    targetPosition: d
  });
  return /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ s(
      Mo,
      {
        path: m,
        markerEnd: u,
        style: {
          ...c || {},
          stroke: I(g).with({ status: "added" }, () => "var(--grl-color-success)").with({ status: "removed" }, () => "var(--grl-color-error)").otherwise(() => {
          })
        }
      }
    ),
    /* @__PURE__ */ s(Bo, { children: /* @__PURE__ */ s(
      "div",
      {
        className: "nodrag nopan edge-renderer",
        style: {
          transform: `translate(-50%, -50%) translate(${h}px,${T}px)`
        },
        children: !y && /* @__PURE__ */ s(
          N,
          {
            type: "primary",
            shape: "round",
            icon: /* @__PURE__ */ s(Ie, {}),
            danger: !0,
            className: k("grl-edge-delete-button"),
            "data-visible": p,
            onClick: () => n.removeEdges([t])
          }
        )
      }
    ) })
  ] });
}, jr = (e) => (n) => /* @__PURE__ */ s(Ur, { ...n, ...e }), Mr = (e) => typeof e != "object" ? !1 : Array.isArray(e?.nodes), Br = (e, n) => {
  const t = _e(), o = ee(), r = Ae(
    async (a) => {
      try {
        if (!e.current)
          return;
        const i = (t.stateStore.getState()?.decisionGraph?.nodes || []).filter(
          (p) => a.some((y) => y.id === p.id)
        ), d = i.map((p) => p.id), c = [];
        i.length > 0 && e.current.getEdges().forEach((y) => {
          d.includes(y.source) && d.includes(y.target) && c.push({
            id: y.id,
            type: y.type,
            sourceId: y.source,
            targetId: y.target,
            sourceHandle: y.sourceHandle ?? void 0,
            targetHandle: y.targetHandle ?? void 0
          });
        }), await Me(JSON.stringify({
          nodes: i,
          edges: c
        })), q.success("Copied to clipboard!");
      } catch (i) {
        q.error(i.message);
      }
    },
    [t]
  ), l = Ae(async () => {
    try {
      if (!e?.current)
        return;
      const a = await yr();
      if (!a)
        return;
      const i = JSON.parse(a);
      if (!Mr(i))
        throw new Error("invalid clipboard");
      const d = i.nodes.reduce(
        (h, T) => ({
          ...h,
          [T.id]: crypto.randomUUID()
        }),
        {}
      ), c = Object.keys(d), u = e.current.getNodes().find((h) => c.includes(h.id)), p = i.nodes.find((h) => h.id === u?.id), y = {
        x: i.nodes.reduce((h, T) => h + T.position.x, 0) / i.nodes.length,
        y: i.nodes.reduce((h, T) => h + T.position.y, 0) / i.nodes.length
      }, g = i.nodes.map((h) => {
        const T = {
          x: h?.position?.x || 0,
          y: h?.position?.y || 0
        };
        if (u && p)
          h.id === u.id ? (T.x = u.position.x, T.y = u.position.y - 20) : (T.x = u.position.x - p.position.x + h.position.x, T.y = u.position.y - p.position.y + h.position.y - 20);
        else if (n.current) {
          const f = n.current.getBoundingClientRect(), b = {
            x: f.width / 2,
            y: f.height / 2
          }, _ = e.current.project(b);
          T.x = h.position.x + _.x - y.x / 2, T.y = h.position.y + _.y - y.y / 2;
        }
        return {
          ...h,
          position: T,
          id: d[h.id]
        };
      }), m = (i.edges || []).map((h) => ({
        id: crypto.randomUUID(),
        type: h.type,
        sourceId: d[h.sourceId],
        targetId: d[h.targetId],
        sourceHandle: h.sourceHandle ?? void 0,
        targetHandle: h.targetHandle ?? void 0
      }));
      if (o.addNodes(g), o.addEdges(m), q.success("Pasted from clipboard!"), u)
        try {
          await Me(JSON.stringify({ nodes: g }));
        } catch {
        }
    } catch {
      q.error("Failed to paste from clipboard");
    }
  }, [e, n]);
  return V(
    () => ({
      copyNodes: r,
      pasteNodes: l
    }),
    [r, l]
  );
}, Vr = j.memo(({ inputDisabled: e, disabled: n }) => {
  const t = L((u) => u.components || []), o = L((u) => u.customNodes || []), [r, l] = K(""), a = Ae((u, p, y) => {
    const g = u.target;
    if (!g)
      return;
    const { offsetX: m, offsetY: h } = u.nativeEvent, { height: T, width: f } = g.getBoundingClientRect(), b = {
      x: m / f,
      y: h / T
    };
    u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("application/reactflow", p), u.dataTransfer.setData("relativePosition", JSON.stringify(b)), y && u.dataTransfer.setData("customNodeComponent", y);
  }, []), i = V(() => {
    const u = { ...ge }, p = t.filter((g) => {
      const m = Object.values(E).includes(g.type);
      return m && (u[g.type] = {
        ...ge[g.type],
        ...g
      }), !m;
    }), y = {
      core: Object.values(u)
    };
    return t?.length > 0 && (y.extended = p), (o || []).forEach((g) => {
      const m = g.group?.trim?.() || "";
      m.length > 0 && (y?.[m] ? y[m].push({ ...g, type: "customNode" }) : y[m] = [{ ...g, type: "customNode" }]);
    }), (o || []).forEach((g) => {
      g?.group || (y?.custom ? y.custom.push({ ...g, type: "customNode" }) : y.custom = [{ ...g, type: "customNode" }]);
    }), y;
  }, [t, o]), d = V(() => Object.keys(i).reduce((u, p) => ({
    ...u,
    [p]: (i[p] || []).filter(
      (y) => !(r?.trim?.().length > 0) || (y.type || "").toLowerCase().indexOf(r.toLowerCase()) > -1 || (y.displayName || "").toLowerCase().indexOf(r.toLowerCase()) > -1 || (y.shortDescription || "").toLowerCase().indexOf(r.toLowerCase()) > -1 || (y.group || "").toLowerCase().indexOf(r.toLowerCase()) > -1
    )
  }), {}), [i, r]), c = t.length + o.length;
  return /* @__PURE__ */ Z("div", { children: [
    c > 5 && /* @__PURE__ */ s(
      fe,
      {
        placeholder: "Search components...",
        value: r,
        onChange: (u) => l(u.target.value || ""),
        allowClear: !0,
        className: "grl-dg__aside__menu__components__search"
      }
    ),
    /* @__PURE__ */ s("div", { className: "grl-dg__aside__menu__components", children: Object.keys(d).map((u) => I(u).with(
      "core",
      () => d.core?.length > 0 && /* @__PURE__ */ s(j.Fragment, { children: (d.core || []).map((p) => /* @__PURE__ */ s(j.Fragment, { children: /* @__PURE__ */ s(
        ft,
        {
          disabled: I(p.type).with(E.Input, () => n || e).otherwise(() => n),
          specification: p,
          onDragStart: (y) => ge[p.type] !== void 0 ? a(y, p.type) : a(y, "customNode", "kind" in p ? p.kind : "")
        }
      ) }, "kind" in p ? p.kind : p.type)) }, u)
    ).otherwise(
      (p) => d[p]?.length > 0 && /* @__PURE__ */ s(j.Fragment, { children: (d?.[p] || []).map((y) => /* @__PURE__ */ s(
        ft,
        {
          disabled: n,
          specification: y,
          onDragStart: (g) => p === "extended" ? a(g, y.type) : a(g, "customNode", "kind" in y ? y.kind : "")
        },
        "kind" in y ? y.kind : y.type
      )) }, p)
    )) })
  ] });
}), ft = ({ specification: e, disabled: n = !1, ...t }) => /* @__PURE__ */ s("div", { className: k("draggable-component"), draggable: !n, ...t, children: /* @__PURE__ */ s("div", { style: { pointerEvents: "none" }, children: /* @__PURE__ */ s(
  eo,
  {
    listMode: !0,
    compactMode: !0,
    color: e.color,
    icon: e.icon,
    name: e.displayName,
    type: e.shortDescription
  }
) }) }), Fr = Object.entries(ge).reduce(
  (e, [n, t]) => ({
    ...e,
    [n]: j.memo(
      (o) => t.renderNode({ specification: t, ...o }),
      (o, r) => o.id === r.id && o.selected === r.selected && Tn(o.data, r.data)
    )
  }),
  {}
), Kr = {
  edge: j.memo(jr(null))
}, Lr = rn(function({ reactFlowProOptions: n, className: t }, o) {
  const r = X(null), l = X(null), a = Vo([]), i = Fo([]), [d, c] = K(!0), u = _e(), p = ee(), y = Dr((x) => x), { onReactFlowInit: g } = ao(({ onReactFlowInit: x }) => ({ onReactFlowInit: x })), { disabled: m, hasInputNode: h, components: T, customNodes: f } = L(
    ({ disabled: x, components: S, customNodes: H, decisionGraph: F }) => ({
      disabled: x,
      components: S,
      customNodes: H,
      hasInputNode: (F?.nodes || []).some((M) => M.type === E.Input)
    })
  );
  y.nodesState.current = a, y.edgesState.current = i, y.graphClipboard.current = Br(l, r), y.reactFlowInstance.current = l.current;
  const b = V(() => j.memo(
    (x) => {
      const S = f.find((H) => H.kind === x?.data?.kind);
      return S ? S.renderNode({
        specification: S,
        ...x
      }) : (console.warn("node not found", x, f), /* @__PURE__ */ s(
        Te,
        {
          id: x.id,
          specification: {
            displayName: `${x.data?.kind}`,
            color: "var(--grl-color-error)",
            icon: /* @__PURE__ */ s(ss, {})
          },
          name: x?.data?.name,
          isSelected: x.selected,
          displayError: !0,
          noBodyPadding: !0,
          handleLeft: !0,
          handleRight: !0
        }
      ));
    },
    (x, S) => x.id === S.id && x.selected === S.selected && Tn(x.data, S.data)
  ), [f]), _ = V(() => T.reduce(
    (x, S) => ({
      ...x,
      [S.type]: j.memo(
        (H) => S.renderNode({ specification: S, ...H }),
        (H, F) => H.id === F.id && H.selected === F.selected && Tn(H.data, F.data)
      )
    }),
    { ...Fr, customNode: b }
  ), [T, b]), v = async (x, S, H) => {
    if (!r.current || !l.current)
      return;
    if (!S) {
      const B = r.current.getBoundingClientRect(), ne = {
        x: B.width / 2,
        y: B.height / 2
      };
      S = l.current.project(ne);
    }
    const F = I(x).with("customNode", () => f.find((B) => B.kind === H)).otherwise(() => [...Object.values(ge), ...T].find((ne) => ne.type === x));
    if (!F) {
      q.error(`Unknown node type ${x} - ${H}.`);
      return;
    }
    let M = I(F).with({ kind: z.string }, (B) => {
      const ne = (l.current?.getNodes() || []).filter((un) => un.data?.kind === B.kind).length + 1, ce = B.generateNode({ index: ne });
      return {
        id: crypto.randomUUID(),
        type: "customNode",
        name: ce.name,
        position: S,
        content: {
          kind: B.kind,
          config: ce?.config
        }
      };
    }).with({ type: z.string }, (B) => {
      const ne = (l.current?.getNodes() || []).filter((un) => un.type === B.type).length + 1, ce = B.generateNode({ index: ne });
      return {
        id: crypto.randomUUID(),
        type: B.type,
        position: S,
        ...ce
      };
    }).otherwise(() => null);
    if (!M) {
      q.error(`Unknown node type ${x} - ${H}.`);
      return;
    }
    if (F.onNodeAdd)
      try {
        M = await F.onNodeAdd(M);
      } catch {
        return;
      }
    const W = Yn.safeParse(M);
    if (W.success)
      return p.addNodes([Yn.parse(M)]);
    q.error(W.error?.message);
  }, D = (x) => {
    if (x.source === x.target || m)
      return !1;
    const [S] = a, [H] = i, F = H.some(
      (B) => B.source === x.source && B.target === x.target && (B.sourceHandle ?? null) === (x.sourceHandle ?? null) && (B.targetHandle ?? null) === (x.targetHandle ?? null)
    ), M = S.find((B) => B.id === x.target);
    if (!M || M.id === x.source)
      return !1;
    const W = (B, ne = /* @__PURE__ */ new Set()) => {
      if (ne.has(B.id))
        return !1;
      ne.add(B.id);
      for (const ce of Ye(B, S, H))
        if (ce.id === x.source || W(ce, ne)) return !0;
    };
    return !F && !W(M);
  }, R = (x) => {
    if (x.preventDefault(), x.stopPropagation(), !r.current || !l.current)
      return;
    const S = r.current.getBoundingClientRect(), H = x.dataTransfer.getData("application/reactflow");
    let F;
    try {
      F = JSON.parse(x.dataTransfer.getData("relativePosition"));
    } catch {
      return;
    }
    const M = l.current.project({
      x: x.clientX - S.left,
      y: x.clientY - S.top
    });
    M.x -= Math.round(F.x * 226 / 10) * 10, M.y -= Math.round(F.y * 60 / 10) * 10;
    const W = I(x.dataTransfer.getData("customNodeComponent")).with(z.string, (B) => B).otherwise(() => {
    });
    v(H, M, W);
  }, w = (x) => {
    x.preventDefault(), x.dataTransfer.dropEffect = "move";
  }, P = (x) => {
    const S = {
      ...x,
      type: "edge",
      id: crypto.randomUUID()
    };
    m || p.addEdges([xr(S)]);
  };
  return wo(o, () => ({
    ...p,
    stateStore: u.stateStore
  })), /* @__PURE__ */ s(
    "div",
    {
      className: k(["tab-content", t]),
      tabIndex: 0,
      onKeyDown: (x) => {
        x.key === "v" && x.metaKey && !m && p.pasteNodes();
      },
      children: /* @__PURE__ */ Z(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex"
          },
          children: [
            !m && !d && /* @__PURE__ */ s(
              "div",
              {
                className: "grl-dg__components__floating",
                style: {
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1
                },
                children: /* @__PURE__ */ s($, { placement: "right", title: "Components", children: /* @__PURE__ */ s(N, { icon: /* @__PURE__ */ s(rs, { style: { fontSize: 12 } }), onClick: () => c(!0) }) })
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                tabIndex: 0,
                className: "content-wrapper",
                onKeyDown: (x) => {
                  const [S] = a, [H] = i;
                  if (x.key === "c" && x.metaKey) {
                    const F = a[0].filter((M) => M.selected).map(({ id: M }) => M);
                    if (F.length === 0)
                      return;
                    p.copyNodes(F), x.preventDefault();
                  } else if (x.key === "d" && x.metaKey) {
                    if (!m) {
                      const F = S.filter((M) => M.selected).map(({ id: M }) => M);
                      if (F.length === 0)
                        return;
                      p.duplicateNodes(F);
                    }
                    x.preventDefault();
                  } else if (x.key === "Backspace") {
                    if (!m) {
                      const F = S.filter((W) => W.selected), M = H.filter((W) => W.selected);
                      if (F.length > 0) {
                        const W = F.length, B = W > 1 ? "nodes" : "node";
                        pe.confirm({
                          icon: null,
                          title: `Delete ${B}`,
                          content: /* @__PURE__ */ Z(O.Text, { children: [
                            "Are you sure you want to delete ",
                            W > 1 ? `${W} ${B}` : B,
                            "?"
                          ] }),
                          okButtonProps: { danger: !0 },
                          onOk: () => {
                            M.length > 0 && p.removeEdges(M.map((ne) => ne.id)), p.removeNodes(F.map((ne) => ne.id));
                          }
                        });
                      } else M.length > 0 && p.removeEdges(M.map((W) => W.id));
                    }
                    x.stopPropagation(), x.preventDefault();
                  }
                },
                children: /* @__PURE__ */ s("div", { className: k(["react-flow"]), ref: r, children: /* @__PURE__ */ Z(
                  Eo,
                  {
                    deleteKeyCode: null,
                    elevateEdgesOnSelect: !1,
                    elevateNodesOnSelect: !0,
                    zoomOnDoubleClick: !1,
                    connectionRadius: 35,
                    nodes: a[0],
                    edges: i[0],
                    onInit: (x) => {
                      l.current = x, g?.(x);
                    },
                    snapToGrid: !0,
                    snapGrid: [5, 5],
                    minZoom: 0.25,
                    selectionMode: Ko.Partial,
                    nodeTypes: _,
                    edgeTypes: Kr,
                    onDrop: R,
                    onDragOver: w,
                    onConnect: P,
                    isValidConnection: D,
                    proOptions: n,
                    nodesConnectable: !m,
                    nodesDraggable: !m,
                    edgesUpdatable: !m,
                    onNodesChange: p.handleNodesChange,
                    onEdgesChange: p.handleEdgesChange,
                    onNodesDelete: (x) => {
                      x.forEach((S) => {
                        p.closeTab(S?.id);
                      });
                    },
                    onEdgeMouseEnter: (x, S) => p.setHoveredEdgeId(S.id),
                    onEdgeMouseLeave: () => p.setHoveredEdgeId(null),
                    children: [
                      /* @__PURE__ */ s(Lo, { showInteractive: !1, children: /* @__PURE__ */ s(Ho, { onClick: () => p.toggleCompactMode(), children: /* @__PURE__ */ s(as, {}) }) }),
                      /* @__PURE__ */ s(Go, { color: "var(--grl-color-border)", gap: 20 })
                    ]
                  }
                ) })
              }
            ),
            !m && d && /* @__PURE__ */ s("div", { className: "grl-dg__aside__menu", children: /* @__PURE__ */ Z(te, { children: [
              /* @__PURE__ */ Z("div", { className: "grl-dg__aside__menu__heading", children: [
                /* @__PURE__ */ Z("div", { className: "grl-dg__aside__menu__heading__text", children: [
                  /* @__PURE__ */ s(O.Text, { strong: !0, style: { marginBottom: 0 }, children: "Components" }),
                  " ",
                  /* @__PURE__ */ s(O.Text, { type: "secondary", style: { fontSize: 10, marginLeft: 5 }, children: "(Drag-and-drop)" })
                ] }),
                /* @__PURE__ */ s(
                  N,
                  {
                    type: "text",
                    size: "small",
                    icon: /* @__PURE__ */ s(be, { style: { fontSize: 12 } }),
                    onClick: () => c(!1)
                  }
                )
              ] }),
              /* @__PURE__ */ s("div", { className: "grl-dg__aside__menu__content", children: /* @__PURE__ */ s(Vr, { inputDisabled: h, disabled: m }) })
            ] }) })
          ]
        }
      )
    }
  );
}), Hr = (e, n) => {
  const t = document.createElement("a");
  t.download = e, t.href = URL.createObjectURL(n), t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, io = async (e, n) => {
  const t = await import("exceljs"), o = new t.Workbook();
  n.forEach((a) => {
    let i = a.name, d = 0;
    if (o.getWorksheet(i))
      do
        d++, i = `${a.name} (${d})`;
      while (o.getWorksheet(i));
    const c = o.addWorksheet(i), u = [
      ...a.inputs.map((D) => ({
        title: D.name,
        meta: { id: D.id, name: D.field, type: "input" }
      })),
      ...a.outputs.map((D) => ({
        title: D.name,
        meta: { id: D.id, name: D.field, type: "output" }
      })),
      { title: "DESCRIPTION", meta: null },
      { title: "Rule ID", meta: null }
    ], p = [...a.inputs, ...a.outputs], y = a.rules.map((D) => {
      const R = [];
      return p.forEach((w) => {
        const P = D?.[w.id || ""], x = typeof P == "object" && P !== null ? JSON.stringify(P) : P;
        R.push(x || "");
      }), R.push(D?._description || ""), R.push(D?._id || ""), R;
    }), g = u.filter((D) => D.meta?.type.toLowerCase() === "input").length, m = u.filter((D) => D.meta?.type.toLowerCase() === "output").length;
    c.mergeCells(1, 1, 1, g + m + 2);
    const h = c.getCell(1, 1);
    h.value = a.id, h.alignment = { horizontal: "center", vertical: "middle" }, c.mergeCells(2, 1, 2, g);
    const T = c.getCell(2, 1);
    T.value = "Inputs", T.alignment = { horizontal: "center", vertical: "middle" }, T.font = { bold: !0, color: { argb: "FFFFFF" } }, T.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "5e6476" }
    }, c.mergeCells(2, g + 1, 2, g + m);
    const f = c.getCell(2, g + 1);
    f.value = "Outputs", f.alignment = { horizontal: "center", vertical: "middle" }, f.font = { bold: !0, color: { argb: "FFFFFF" } }, f.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "63546c" }
    };
    const b = c.getCell(2, g + m + 1);
    b.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "63546c" }
    };
    const _ = c.getCell(2, g + m + 2);
    _.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "63546c" }
    }, c.addRow(u.map((D) => D.title)).eachCell((D) => {
      const R = u.find((P) => P.title === D.value)?.meta, w = R?.type.toLowerCase() === "input" ? "5e6476" : "63546c";
      D.font = { bold: !0, color: { argb: "FFFFFF" } }, D.fill = { type: "pattern", pattern: "solid", fgColor: { argb: w } }, R && (D.note = {
        texts: [{ text: JSON.stringify(R, void 0, 2) }]
      });
    }), y?.forEach((D) => {
      c.addRow(Object.values(D));
    }), c.columns.forEach((D, R) => {
      let w = 15;
      const P = c.getColumn(R + 1);
      P.eachCell({ includeEmpty: !1 }, (x) => {
        const S = x.value ? x.value.toString().length : 0;
        w = S > w ? S : w, x.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        };
      }), P.width = w;
    }), c.views = [{ state: "frozen", xSplit: 0, ySplit: 3 }];
  });
  const r = await o.xlsx.writeBuffer(), l = new Blob([r], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  Hr(`${e}.xlsx`, l);
}, Gr = (e) => {
  const t = e.splice(0, 3)[2].map((a) => {
    if (a.value.toLowerCase() === "description")
      return {
        name: a.value,
        id: "_description"
      };
    if (a.value.toLowerCase() === "rule id")
      return {
        name: a.value,
        id: "_id"
      };
    let i = {
      name: "",
      type: "",
      id: ""
    };
    try {
      i = JSON.parse(a.note);
    } catch {
      q.error("Header note can not be parsed!");
    }
    return {
      name: a.value,
      field: i?.name,
      _type: i?.type,
      id: i?.id,
      defaultValue: ""
    };
  }), o = t.filter((a) => a._type?.toLowerCase() === "input").map((a) => ({
    id: a.id,
    name: a?.name,
    field: a?.field,
    defaultValue: a?.defaultValue
  })), r = t.filter((a) => a._type?.toLowerCase() === "output").map((a) => ({
    id: a.id,
    name: a?.name,
    field: a?.field,
    defaultValue: a?.defaultValue
  })), l = e.map((a) => {
    const i = {
      _id: crypto.randomUUID()
    };
    return t.forEach((d, c) => {
      i[d.id] = I(a?.[c]?.value).with(z.string, (u) => u.trim()).with(z.nullish, () => "").otherwise((u) => u.toString());
    }), i;
  });
  return je({
    inputs: o,
    outputs: r,
    rules: l,
    hitPolicy: "first"
  });
}, lo = async (e) => {
  const n = await import("exceljs"), o = await new n.Workbook().xlsx.load(e), r = [];
  return o.eachSheet((l) => {
    const a = [], i = l.name;
    l.eachRow((c) => {
      const u = [];
      for (let p = 1; p <= c.cellCount; p++) {
        const y = c.getCell(p), g = y.note ? typeof y.note == "object" ? y.note.texts?.map((m) => m.text).join("") : y.note : null;
        u.push({ value: y.value, note: g });
      }
      a.push(u);
    });
    const d = a[0][0].value;
    r.push({
      id: d,
      name: i,
      type: E.DecisionTable,
      content: Gr(a),
      position: { x: 0, y: 0 }
    });
  }), r;
}, mt = "application/vnd.gorules.decision", qr = () => {
  const e = _e(), n = X(null), t = X(null), { setDecisionGraph: o, setActivePanel: r } = ee(), { disabled: l, panels: a, activePanel: i } = L(({ disabled: m, panels: h, activePanel: T }) => ({
    disabled: m,
    panels: h,
    activePanel: T
  })), d = async (m) => {
    const h = m?.target?.files, T = new FileReader();
    T.onload = function(f) {
      try {
        const b = JSON.parse(f?.target?.result);
        if (b?.contentType !== mt)
          throw new Error("Invalid content type");
        const _ = Array.isArray(b?.nodes) ? b.nodes : [], v = _.map((w) => w.id), D = b.edges.filter(
          (w) => v.includes(w?.targetId) && v.includes(w?.sourceId)
        ), R = Qn.safeParse({
          nodes: _,
          edges: D,
          settings: b?.settings
        });
        if (!R.success) {
          console.log(R.error?.message), q.error(R.error?.message);
          return;
        }
        o(R.data);
      } catch (b) {
        q.error(b.message);
      }
    }, T.readAsText(Array.from(h)?.[0], "UTF-8");
  }, c = (m) => {
    const h = m?.target?.files[0], T = new FileReader();
    try {
      T.readAsArrayBuffer(h), T.onload = async () => {
        const f = T.result;
        if (!f) return;
        const b = await lo(f), { decisionGraph: _ } = e.stateStore.getState(), v = _.nodes.map((w) => {
          let P = w;
          return b.forEach((x) => {
            x.id === w.id && (P = { ...w, content: x.content });
          }), P;
        }), D = b.filter((w) => !v.some((P) => P.id === w.id)).map((w, P) => ({ ...w, position: { x: P * 250, y: 0 } })), R = Qn.safeParse({
          nodes: [...v, ...D],
          edges: _.edges,
          settings: _.settings
        });
        if (!R.success) {
          console.log(R.error?.message), q.error(R.error?.message);
          return;
        }
        o(R.data), q.success("Excel file has been uploaded successfully!");
      };
    } catch {
      q.error("Failed to upload Excel!");
    }
  }, u = async () => {
    try {
      const { name: m } = e.stateStore.getState(), { decisionGraph: h } = e.stateStore.getState(), T = `${m.replaceAll(".json", "")}.json`, f = JSON.stringify(
        {
          contentType: mt,
          nodes: h.nodes,
          edges: h.edges,
          settings: h.settings
        },
        null,
        2
      ), b = new Blob([f], { type: "application/json" }), _ = URL.createObjectURL(b), v = window.document.createElement("a");
      v.href = _, v.download = T, window.document.body.appendChild(v), v.click(), window.document.body.removeChild(v), URL.revokeObjectURL(_);
    } catch (m) {
      q.error(m.message);
    }
  }, p = async (m = "decision tables") => {
    try {
      const { decisionGraph: h } = e.stateStore.getState(), T = h.nodes.filter((f) => f.type === E.DecisionTable).map((f) => ({
        ...f.content,
        id: f.id,
        name: f.name
      }));
      await io(m, T), q.success("Excel file has been downloaded successfully!");
    } catch {
      q.error("Failed to download Excel file!");
    }
  };
  return /* @__PURE__ */ Z("div", { className: "grl-dg__aside", children: [
    /* @__PURE__ */ s(
      "input",
      {
        hidden: !0,
        accept: "application/json",
        type: "file",
        ref: n,
        onChange: d,
        onClick: (m) => {
          m.target.value = null;
        }
      }
    ),
    /* @__PURE__ */ s(
      "input",
      {
        hidden: !0,
        accept: ".xlsx",
        type: "file",
        ref: t,
        onChange: c,
        onClick: (m) => {
          m.target.value = null;
        }
      }
    ),
    /* @__PURE__ */ Z("div", { className: "grl-dg__aside__side-bar", children: [
      /* @__PURE__ */ Z("div", { className: "grl-dg__aside__side-bar__top", children: [
        !l && /* @__PURE__ */ s(ue, { menu: { items: [
          {
            key: "upload-json",
            label: "Upload JSON",
            onClick: () => n?.current?.click?.()
          },
          {
            key: "upload-excel",
            label: "Upload Excel",
            onClick: () => t?.current?.click?.()
          }
        ] }, placement: "bottomRight", trigger: ["click"], arrow: !0, children: /* @__PURE__ */ s(N, { type: "text", disabled: l, icon: /* @__PURE__ */ s(is, {}) }) }),
        /* @__PURE__ */ s(ue, { menu: { items: [
          {
            key: "download-json",
            label: "Download JSON",
            onClick: () => u()
          },
          {
            key: "download-excel",
            label: "Download Excel",
            onClick: () => p()
          }
        ] }, placement: "bottomRight", trigger: ["click"], arrow: !0, children: /* @__PURE__ */ s(N, { type: "text", icon: /* @__PURE__ */ s(ds, {}) }) })
      ] }),
      /* @__PURE__ */ s("div", { className: "grl-dg__aside__side-bar__bottom", children: (a || []).map((m) => {
        const h = i === m.id;
        return /* @__PURE__ */ s(
          $,
          {
            title: `${h ? "Close" : "Open"} ${m.title.toLowerCase()} panel`,
            placement: "right",
            children: /* @__PURE__ */ s(
              N,
              {
                type: "text",
                icon: m.icon,
                style: { background: h ? "rgba(0, 0, 0, 0.1)" : void 0 },
                onClick: () => {
                  if (m?.onClick) return m.onClick();
                  m?.renderPanel && r(h ? void 0 : m.id);
                }
              },
              m.id
            )
          },
          m.id
        );
      }) })
    ] })
  ] });
}, Jr = ({ disabled: e, tabBarExtraContent: n }) => {
  const t = ee(), { openNodes: o, activeNodeId: r } = L(({ decisionGraph: l, activeTab: a, openTabs: i }) => ({
    activeNodeId: (l?.nodes ?? []).find((d) => d.id === a)?.id,
    openNodes: (i || []).map((d) => {
      const c = (l?.nodes ?? []).find((u) => u.id === d);
      if (c)
        return {
          id: c?.id,
          name: c.name,
          type: c.type,
          diff: c?._diff
        };
    }).filter((d) => !!d)
  }));
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    sn,
    {
      type: "line",
      size: "small",
      className: k("grl-graph-tabs"),
      activeKey: r || "graph",
      onChange: (l) => t.openTab(l),
      tabBarExtraContent: n,
      items: [
        {
          closable: !1,
          key: "graph",
          label: /* @__PURE__ */ s(
            gt,
            {
              total: o?.length,
              icon: /* @__PURE__ */ s(ls, {}),
              name: "Graph",
              active: !r || r === "graph",
              onContextClick: (l) => {
                t.closeTab("graph", l);
              }
            }
          )
        },
        ...o.map((l, a) => {
          const i = ge[l.type];
          return {
            disabled: e,
            key: l.id,
            label: /* @__PURE__ */ s(
              gt,
              {
                onContextClick: (d) => {
                  t.closeTab(l.id, d);
                },
                icon: i?.icon,
                name: l?.name ?? l?.type,
                diffStatus: l?.diff?.status,
                color: i?.color,
                index: a,
                active: l.id === r,
                total: o?.length,
                onClose: () => t.closeTab(l.id)
              }
            ),
            closable: !0
          };
        })
      ]
    }
  ) });
}, gt = ({ total: e = 0, index: n = -1, icon: t, name: o, active: r, diffStatus: l, color: a = Ze.Blue, onClose: i, onContextClick: d }) => {
  const c = [
    e > 0 && n !== -1 && {
      key: "close",
      label: "Close",
      onClick: () => d?.("close")
    },
    e > 0 && n !== -1 && {
      key: "close-all",
      label: "Close all Tabs",
      onClick: () => d?.("close-all")
    },
    e > 0 && n !== -1 && {
      key: "close-other",
      label: "Close other Tabs",
      onClick: () => d?.("close-other")
    },
    e > 0 && n + 1 < e && {
      key: "close-right",
      label: "Close Tabs to the right",
      onClick: () => d?.("close-right")
    },
    e > 0 && n > 0 && n > 0 && {
      key: "close-left",
      label: "Close Tabs to the left",
      onClick: () => d?.("close-left")
    }
  ].filter((u) => !!u);
  return /* @__PURE__ */ s(ue, { menu: { items: c }, trigger: ["contextMenu"], children: /* @__PURE__ */ Z("div", { className: "grl-graph-tabs__tab", "data-active": r, children: [
    /* @__PURE__ */ s(
      ho,
      {
        size: "small",
        shape: "square",
        style: {
          background: a,
          fontSize: 11,
          width: 18,
          height: 18,
          lineHeight: "18px",
          borderRadius: 3
        },
        icon: t
      }
    ),
    o,
    /* @__PURE__ */ s(
      Fe,
      {
        status: l,
        style: {
          fontSize: 16
        }
      }
    ),
    i && /* @__PURE__ */ s(
      N,
      {
        className: "grl-graph-tabs__closeIcon",
        type: "text",
        size: "small",
        style: { height: 20, width: 20, color: "black", borderRadius: "50%", lineHeight: 0 },
        icon: /* @__PURE__ */ s(be, { style: { fontSize: 10 } }),
        onClick: (u) => {
          u.stopPropagation(), i?.();
        }
      }
    )
  ] }) });
}, $r = j.memo(
  rn(function({ reactFlowProOptions: n, tabBarExtraContent: t }, o) {
    const [r, l] = K(!1), a = L(({ decisionGraph: i, activeTab: d }) => (i?.nodes ?? []).some((c) => c.id === d));
    return /* @__PURE__ */ Z(te, { children: [
      /* @__PURE__ */ s(qr, {}),
      /* @__PURE__ */ Z("div", { className: "grl-dg__graph", children: [
        /* @__PURE__ */ s(Jr, { disabled: r, tabBarExtraContent: t }),
        /* @__PURE__ */ s(
          Lr,
          {
            ref: o,
            className: k([!a && "active"]),
            reactFlowProOptions: n,
            onDisableTabs: l
          }
        ),
        /* @__PURE__ */ s(Wr, {})
      ] }),
      /* @__PURE__ */ s(Ar, {})
    ] });
  })
), Wr = j.memo(() => {
  const { openNodes: e, activeNodeId: n, components: t } = L(
    ({ decisionGraph: l, openTabs: a, activeTab: i, components: d }) => {
      const c = (l?.nodes ?? []).find((p) => p.id === i)?.id;
      return {
        openNodes: (l?.nodes ?? []).filter((p) => a.includes(p.id)).map(({ id: p, type: y }) => ({ id: p, type: y })),
        activeNodeId: c,
        components: d
      };
    }
  ), o = X(null), r = V(() => Ds(zn, void 0, {
    rootElement: o.current
  }), [o.current]);
  return /* @__PURE__ */ s("div", { style: { display: "contents" }, ref: o, children: e.map((l) => /* @__PURE__ */ s("div", { className: k(["tab-content", n === l?.id && "active"]), children: I(l?.type).with(
    E.DecisionTable,
    () => jn?.renderTab?.({ id: l?.id, manager: r })
  ).with(E.Function, () => Vn?.renderTab?.({ id: l?.id, manager: r })).with(
    E.Expression,
    () => Bn?.renderTab?.({ id: l?.id, manager: r })
  ).with(E.Input, () => Fn?.renderTab?.({ id: l?.id, manager: r })).with(E.Output, () => Kn?.renderTab?.({ id: l?.id, manager: r })).otherwise(() => {
    const a = t.find((i) => i.type === l.type);
    return a ? a?.renderTab?.({ id: l.id, manager: r }) : null;
  }) }, l?.id)) });
}), Si = rn(
  ({ manager: e, reactFlowProOptions: n, tabBarExtraContent: t, ...o }, r) => /* @__PURE__ */ s("div", { className: "grl-dg", children: /* @__PURE__ */ s(qo, { children: /* @__PURE__ */ Z(wr, { children: [
    /* @__PURE__ */ s(
      $r,
      {
        ref: r,
        reactFlowProOptions: n,
        tabBarExtraContent: t
      }
    ),
    /* @__PURE__ */ s(Rr, {}),
    /* @__PURE__ */ s(Ir, { ...o })
  ] }) }) })
), Ii = (e) => ({
  kind: e.kind,
  icon: e.icon,
  color: e.color,
  displayName: e.displayName,
  group: e.group,
  shortDescription: e.shortDescription,
  generateNode: e.generateNode || (({ index: n }) => ({
    name: `${e.kind || e.displayName}${n}`
  })),
  onNodeAdd: e.onNodeAdd,
  renderNode: e.renderNode ? e.renderNode : ({ id: n, specification: t, data: o, selected: r }) => {
    const [l, a] = K(!1), { token: i } = de.useToken(), { updateNode: d } = ee(), u = L((p) => (p.decisionGraph?.nodes || []).find((y) => y.id === n))?.content?.config;
    return /* @__PURE__ */ s(
      Te,
      {
        id: n,
        specification: t,
        name: o.name,
        isSelected: r,
        noBodyPadding: !0,
        handleLeft: e.handleLeft,
        handleRight: e.handleRight,
        actions: e?.inputs ? [
          /* @__PURE__ */ s(
            N,
            {
              type: "text",
              style: { marginLeft: "auto", transform: l ? "rotate(180deg)" : void 0 },
              onClick: () => a((p) => !p),
              children: /* @__PURE__ */ s(Kt, {})
            },
            "edit-table"
          )
        ] : void 0,
        children: l && e?.inputs && /* @__PURE__ */ s(
          J,
          {
            className: "grl-dn__cn__form",
            layout: "vertical",
            initialValues: u,
            onValuesChange: (p, y) => {
              d(n, (g) => (g.content.config = y, g));
            },
            children: (e?.inputs || []).map(({ name: p, control: y, label: g }) => {
              const m = I({ control: y }).with({ control: "text" }, () => /* @__PURE__ */ s(Se, { type: "template" })).with({ control: "bool" }, () => /* @__PURE__ */ s(To, { children: /* @__PURE__ */ s(O.Text, { style: { fontSize: i.fontSizeSM }, children: g }) })).exhaustive(), h = I({ control: y }).with({ control: "bool" }, () => null).otherwise(() => /* @__PURE__ */ s(O.Text, { style: { fontSize: i.fontSizeSM }, children: g })), T = I({ control: y }).with({ control: "bool" }, () => "checked").otherwise(() => {
              });
              return /* @__PURE__ */ s(
                J.Item,
                {
                  name: p,
                  label: h,
                  valuePropName: T,
                  style: {
                    marginBottom: 4
                  },
                  children: m
                },
                p
              );
            })
          }
        )
      }
    );
  }
});
self.monaco && bs.config({ monaco: self.monaco });
const co = ({ value: e, onChange: n, readOnly: t }) => {
  const { token: o } = de.useToken();
  return /* @__PURE__ */ s(
    ln,
    {
      loading: /* @__PURE__ */ s(he, { size: "large" }),
      language: "javascript",
      value: e,
      onChange: n,
      theme: o.mode === "dark" ? "vs-dark" : "light",
      height: "100%",
      onMount: (r, l) => {
        l.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          noSyntaxValidation: !0
        }), l.languages.typescript.javascriptDefaults.setModeConfiguration({
          codeActions: !1,
          inlayHints: !1
        }), r.addAction({
          id: "copy-json",
          label: "Copy JSON",
          contextMenuGroupId: "utils",
          run: async (a) => {
            try {
              await Me(JSON.stringify(me.parse(a.getValue()))), q.success("Copied to clipboard!");
            } catch {
              q.error("Failed to copy to clipboard.");
            }
          }
        }), r.addAction({
          id: "format",
          label: "Format",
          contextMenuGroupId: "utils",
          precondition: "!editorReadonly",
          run: (a) => {
            const i = JSON.stringify(me.parse(a.getValue()), null, 2);
            a.setValue(i);
          }
        });
      },
      options: {
        readOnly: t,
        automaticLayout: !0,
        minimap: { enabled: !1 },
        fontSize: 12,
        fontFamily: "var(--mono-font-family)",
        tabSize: 2,
        lineDecorationsWidth: 2,
        find: {
          addExtraSpaceOnTop: !1,
          seedSearchStringFromSelection: "never"
        },
        scrollbar: {
          verticalSliderSize: 4,
          verticalScrollbarSize: 4,
          horizontalScrollbarSize: 4,
          horizontalSliderSize: 4
        },
        lineNumbersMinChars: 3
      }
    }
  );
}, Yr = "Your business context that enters through the Request node, starting the decision process. Supply JSON or JSON5 format.", Qr = ({
  onChange: e,
  hasInputNode: n,
  loading: t,
  onRun: o,
  defaultRequest: r
}) => {
  const [l, a] = K(r), { stateStore: i, actions: d } = _e();
  return C(() => {
    if (!ie())
      return;
    const { decisionGraph: c } = i.getState(), u = c.nodes.find((p) => p.type === "inputNode");
    if (u)
      try {
        const p = l ? me.parse(l) : "Any";
        d.setNodeType(u.id, G.InferredOutput, new ae(p));
      } catch {
      }
  }, [l]), /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ Z("div", { className: "grl-dg__simulator__section__bar grl-dg__simulator__section__bar--request", children: [
      /* @__PURE__ */ s($, { title: Yr, children: /* @__PURE__ */ Z(O.Text, { style: { fontSize: 13, cursor: "help" }, children: [
        "Request",
        /* @__PURE__ */ s(Bt, { style: { fontSize: 10, marginLeft: 4, opacity: 0.5, verticalAlign: "text-top" } })
      ] }) }),
      /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__bar__actions", children: o && /* @__PURE__ */ s(
        $,
        {
          title: n ? void 0 : "Request node is required to run the graph. Drag-and-drop it from the Components panel.",
          children: /* @__PURE__ */ s(
            N,
            {
              size: "small",
              type: "primary",
              loading: t,
              icon: /* @__PURE__ */ s(cs, {}),
              disabled: !n,
              onClick: () => {
                try {
                  const c = (l || "").trim().length === 0 ? null : me.parse(l || "");
                  o?.({ graph: i.getState().decisionGraph, context: c });
                } catch {
                  bo.error({
                    message: "Invalid format",
                    description: "Unable to format request, invalid JSON format",
                    placement: "top"
                  });
                }
              },
              children: "Run"
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__content", children: /* @__PURE__ */ s(
      co,
      {
        value: l,
        onChange: (c) => {
          a(c), e?.(c ?? "");
        }
      }
    ) })
  ] });
};
var uo = /* @__PURE__ */ ((e) => (e.Output = "Output", e.Input = "Input", e.Trace = "Trace", e))(uo || {});
const Ci = ({
  defaultRequest: e,
  onChange: n,
  onRun: t,
  onClear: o,
  loading: r = !1,
  leftPanel: l = Qr
}) => {
  const [a, i] = Xe("simulation.search", ""), [d, c] = Xe(
    "simulation.segment",
    "Output"
    /* Output */
  ), { actions: u } = _e(), { nodeTypes: p, simulate: y, hasInputNode: g } = L(({ decisionGraph: f, simulate: b }) => ({
    simulate: b,
    hasInputNode: f.nodes.some((_) => _.type === E.Input),
    nodeTypes: (f.nodes ?? []).reduce(
      (_, v) => ({
        ..._,
        [v.id]: v.type
      }),
      {}
    )
  })), [m, h] = K("graph"), T = V(() => y ? "result" in y ? Object.entries(y.result?.trace ?? {}).map(([f, b]) => ({ ...b, nodeId: f })).filter((f) => ![E.Input].includes(p?.[f.nodeId])).filter((f) => f.name.toLowerCase().includes(a?.toLowerCase() ?? "")).sort((f, b) => (f.order ?? 0) - (b.order ?? 0)) : [] : [], [y, a]);
  return /* @__PURE__ */ Z(On, { className: "grl-dg__simulator", direction: "horizontal", autoSaveId: "jdm-editor:simulator:layout", children: [
    /* @__PURE__ */ s(Re, { minSize: 20, defaultSize: 30, className: "grl-dg__simulator__section grl-dg__simulator__request", children: /* @__PURE__ */ s(
      l,
      {
        defaultRequest: e,
        loading: r,
        hasInputNode: g,
        onRun: t,
        onChange: n
      }
    ) }),
    /* @__PURE__ */ s(hn, {}),
    /* @__PURE__ */ Z(Re, { minSize: 20, maxSize: 20, className: "grl-dg__simulator__section grl-dg__simulator__nodes", children: [
      /* @__PURE__ */ Z("div", { className: "grl-dg__simulator__section__bar grl-dg__simulator__section__bar--nodes", children: [
        /* @__PURE__ */ s(
          "input",
          {
            className: "grl-dg__simulator__search",
            type: "text",
            placeholder: "Search nodes...",
            value: a,
            onChange: (f) => i(f.target.value)
          }
        ),
        /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__bar__actions", children: o && /* @__PURE__ */ s($, { title: "Clear", children: /* @__PURE__ */ s(
          N,
          {
            size: "small",
            type: "text",
            icon: /* @__PURE__ */ s(us, {}),
            onClick: () => {
              o?.(), h("graph"), i("");
            }
          }
        ) }) })
      ] }),
      /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__content", children: /* @__PURE__ */ s(he, { spinning: r, children: /* @__PURE__ */ Z("div", { className: "grl-dg__simulator__nodes-list", children: [
        !y && /* @__PURE__ */ Z(O.Text, { type: "secondary", style: { textAlign: "center", marginTop: 60, fontSize: 13 }, children: [
          "Ready to simulate!",
          /* @__PURE__ */ s("br", {}),
          "Run a request to see the node trace in action.",
          /* @__PURE__ */ s("br", {}),
          /* @__PURE__ */ s(
            O.Link,
            {
              href: "https://docs.gorules.io/docs/simulator",
              target: "_blank",
              style: { fontSize: 13, marginTop: 4, display: "inline-block" },
              children: "Learn more"
            }
          )
        ] }),
        "graph".includes(a?.toLowerCase() ?? "") && y && /* @__PURE__ */ Z(
          "div",
          {
            className: k("grl-dg__simulator__nodes-list__node", m === "graph" && "active"),
            onClick: () => h("graph"),
            children: [
              /* @__PURE__ */ Z(O.Text, { "data-role": "name", ellipsis: !0, children: [
                /* @__PURE__ */ s(
                  Tt,
                  {
                    status: I(y).with({ error: z.nonNullable }, () => "error").with({ result: z.nonNullable }, () => "success").otherwise(() => "not-run")
                  }
                ),
                "Graph"
              ] }),
              /* @__PURE__ */ s(O.Text, { type: "secondary", "data-role": "performance", children: I(y).with({ result: z._ }, ({ result: f }) => f?.performance).otherwise(() => {
              }) })
            ]
          }
        ),
        T.map((f) => /* @__PURE__ */ Z(
          "div",
          {
            className: k("grl-dg__simulator__nodes-list__node", f.nodeId === m && "active"),
            onClick: () => h(f.nodeId),
            onDoubleClick: () => u.goToNode(f.nodeId),
            children: [
              /* @__PURE__ */ Z(O.Text, { "data-role": "name", ellipsis: { tooltip: f.name }, children: [
                /* @__PURE__ */ s(Tt, { status: f.nodeId === y?.error?.data?.nodeId ? "error" : "success" }),
                f.name
              ] }),
              /* @__PURE__ */ s(O.Text, { type: "secondary", "data-role": "performance", children: f.performance })
            ]
          },
          f.nodeId
        ))
      ] }) }) })
    ] }),
    /* @__PURE__ */ s(hn, {}),
    /* @__PURE__ */ Z(Re, { minSize: 30, defaultSize: 50, className: "grl-dg__simulator__section grl-dg__simulator__response", children: [
      /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__bar grl-dg__simulator__section__bar--response", children: /* @__PURE__ */ s(
        sn,
        {
          rootClassName: "grl-inline-tabs",
          size: "small",
          style: { width: "100%" },
          onChange: (f) => c(f),
          items: Object.values(uo).map((f) => ({
            key: f,
            label: f
          })),
          tabBarExtraContent: /* @__PURE__ */ s($, { title: "Close panel", children: /* @__PURE__ */ s(
            N,
            {
              type: "text",
              icon: /* @__PURE__ */ s(be, { style: { fontSize: 12 } }),
              onClick: () => u.setActivePanel(void 0)
            }
          ) })
        }
      ) }),
      /* @__PURE__ */ s("div", { className: "grl-dg__simulator__section__content", children: /* @__PURE__ */ s(
        co,
        {
          readOnly: !0,
          value: I(y).with(
            { result: z._ },
            ({ result: f }) => I(m).with(
              "graph",
              () => ht(
                {
                  traceData: f?.trace,
                  output: f?.result
                },
                d ?? "Output"
                /* Output */
              )
            ).otherwise(() => ht(
              f?.trace[m],
              d ?? "Output"
              /* Output */
            ))
          ).otherwise(() => "")
        }
      ) })
    ] })
  ] });
}, ht = (e, n) => {
  const t = I([n, e]).with(["Output", { output: z._ }], ([, { output: o }]) => o).with(["Input", { input: z._ }], ([, { input: o }]) => o).with(["Trace", { trace: z._ }], ([, { trace: o }]) => o).with(["Trace", { traceData: z._ }], ([, { traceData: o }]) => o).otherwise(() => ({}));
  return me.stringify(t, void 0, 2);
}, Tt = ({ status: e }) => e === "not-run" ? null : e === "success" ? /* @__PURE__ */ s(
  ps,
  {
    twoToneColor: ["var(--grl-color-success)", "var(--grl-color-success-bg)"],
    style: { marginRight: 6, fontSize: 12, opacity: 0.5 }
  }
) : /* @__PURE__ */ s(
  ys,
  {
    twoToneColor: ["var(--grl-color-error)", "var(--grl-color-error-bg)"],
    style: { marginRight: 5, fontSize: 12 }
  }
), po = [
  {
    label: "$root",
    type: "variable",
    detail: "Root variable",
    boost: -10,
    info: ""
  },
  {
    label: "len",
    type: "function",
    detail: "`<T>`(var: `string | T[]`) -> `number`",
    info: "Returns the length of variable"
  },
  {
    label: "contains",
    type: "function",
    detail: "`<T>`(haystack: `string | T[]`, needle: `string | T`) -> `boolean`",
    info: "Checks if variable contains a needle"
  },
  {
    label: "flatten",
    type: "function",
    detail: "`<T>`(arr: `T[][]`) -> `T[]`",
    info: "Flattens an array"
  },
  {
    label: "upper",
    type: "function",
    detail: "(str: `string`) -> `string`",
    info: "Converts all characters in a string to uppercase"
  },
  {
    label: "lower",
    type: "function",
    detail: "(str: `string`) -> `string`",
    info: "Converts all characters in a string to lowercase"
  },
  {
    label: "trim",
    type: "function",
    detail: "(str: `string`) -> `string`",
    info: "Returns the string with leading and trailing whitespace removed"
  },
  {
    label: "startsWith",
    type: "function",
    detail: "(str: `string`, prefix: `string`) -> `boolean`",
    info: "Returns true if the string starts with the specified prefix"
  },
  {
    label: "endsWith",
    type: "function",
    detail: "(str: `string`, suffix: `string`) -> `boolean`",
    info: "Returns true if the string ends with the specified suffix"
  },
  {
    label: "matches",
    type: "function",
    detail: "(str: `string`, pattern: `string`) -> `boolean`",
    info: "Returns true if the string matches the specified pattern"
  },
  {
    label: "extract",
    type: "function",
    detail: "(str: `string`, pattern: `string`) -> `string[]`",
    info: "Extracts matching substrings according to a pattern"
  },
  {
    label: "fuzzyMatch",
    type: "function",
    detail: "(haystack: `string | string[]`, needle: `string`) -> `number | number[]`",
    info: "Performs a fuzzy search of the needle in the haystack, and returns the match score(s)."
  },
  {
    label: "split",
    type: "function",
    detail: "(str: `string`, delimiter: `string`) -> `string[]`",
    info: "Splits a string into an array of substrings using the specified delimiter."
  },
  {
    label: "abs",
    type: "function",
    detail: "(num: `number`) -> `number`",
    info: "Returns the absolute value of a number"
  },
  {
    label: "sum",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Returns the sum of all elements in the input array."
  },
  {
    label: "avg",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Calculates the average of all elements in the input array."
  },
  {
    label: "min",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Returns the smallest of the elements in the input array."
  },
  {
    label: "max",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Returns the largest of the elements in the input array."
  },
  {
    label: "rand",
    type: "function",
    detail: "(max: `number`) -> `number`",
    info: "Generates a random number between 0 (inclusive) and max (inclusive)."
  },
  {
    label: "median",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Calculates the median value of all elements in the input array."
  },
  {
    label: "mode",
    type: "function",
    detail: "(arr: `number[]`) -> `number`",
    info: "Finds the mode(s) of the input array, which are the most frequent element(s)."
  },
  {
    label: "floor",
    type: "function",
    detail: "(num: `number`) -> `number`",
    info: "Rounds a number down to the nearest integer."
  },
  {
    label: "ceil",
    type: "function",
    detail: "(num: `number`) -> `number`",
    info: "Rounds a number up to the nearest integer."
  },
  {
    label: "round",
    type: "function",
    detail: "(num: `number`) -> `number`",
    info: "Rounds a number to a specified number of decimal places."
  },
  {
    label: "isNumeric",
    type: "function",
    detail: "(value: `any`) -> `boolean`",
    info: "Checks if the given value is of a numeric type."
  },
  {
    label: "string",
    type: "function",
    detail: "(value: `any`) -> `string`",
    info: "Converts the given value to a string."
  },
  {
    label: "number",
    type: "function",
    detail: "(value: `any`) -> `number`",
    info: "Converts the given value to a number."
  },
  {
    label: "bool",
    type: "function",
    detail: "(value: `any`) -> `boolean`",
    info: "Converts the given value to a boolean."
  },
  {
    label: "type",
    type: "function",
    detail: "`<T>`(value: `T`) -> `string`",
    info: "Returns a string representing the data type of the value."
  },
  {
    label: "date",
    type: "function",
    detail: "(timestamp: `string | number`) -> `number`",
    info: "Converts a numeric timestamp to a unix timestamp."
  },
  {
    label: "time",
    type: "function",
    detail: "(timestamp: `string`) -> `number`",
    info: "Extracts the time from a numeric timestamp and returns it as a seconds from beginning of day."
  },
  {
    label: "duration",
    type: "function",
    detail: "(duration: `string`) -> `number`",
    info: "e.g. 1h30min"
  },
  {
    label: "year",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Extracts the year from a given timestamp."
  },
  {
    label: "dayOfWeek",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Gets the day of the week from a given timestamp, where Sunday might be 0."
  },
  {
    label: "dayOfMonth",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Extracts the day of the month from a given timestamp."
  },
  {
    label: "dayOfYear",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Gets the day of the year from a given timestamp."
  },
  {
    label: "weekOfYear",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Calculates the week of the year from a given timestamp."
  },
  {
    label: "monthOfYear",
    type: "function",
    detail: "(timestamp: `number`) -> `number`",
    info: "Extracts the month from a given timestamp, typically with January as 1."
  },
  {
    label: "monthString",
    type: "function",
    detail: "(timestamp: `number`) -> `string`",
    info: "Converts the month from a given timestamp into its string representation (e.g., 'Jan')."
  },
  {
    label: "dateString",
    type: "function",
    detail: "(timestamp: `number`) -> `string`",
    info: "Converts a timestamp to a human-readable date string."
  },
  {
    label: "weekdayString",
    type: "function",
    detail: "(timestamp: `number`) -> `string`",
    info: "Converts the day of the week from a given timestamp into its string representation (e.g., 'Mon')."
  },
  {
    label: "startOf",
    type: "function",
    detail: "(timestamp: `number`, unit: `string`) -> `number`",
    info: "Returns the timestamp representing the start of a specified unit (e.g., day, month, year) based on a given timestamp."
  },
  {
    label: "endOf",
    type: "function",
    detail: "(timestamp: `number`, unit: `string`) -> `number`",
    info: "Returns the timestamp representing the end of a specified unit (e.g., day, month, year) based on a given timestamp."
  },
  {
    label: "keys",
    type: "function",
    detail: "(obj: `object`) -> `string[]`",
    info: "Returns an array of a given object's own enumerable property names."
  },
  {
    label: "values",
    type: "function",
    detail: "(obj: `object`) -> `any[]`",
    info: "Returns an array of a given object's own enumerable property values."
  },
  {
    label: "all",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `boolean`",
    info: "Checks if all elements in the array satisfy the condition defined in the callback."
  },
  {
    label: "some",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `boolean`",
    info: "Checks if at least one element in the array satisfies the condition defined in the callback."
  },
  {
    label: "none",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `boolean`",
    info: "Checks if no elements in the array satisfy the condition defined in the callback."
  },
  {
    label: "filter",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `T[]`",
    info: "Creates a new array with all elements that satisfy the condition defined in the callback."
  },
  {
    label: "map",
    type: "function",
    detail: "`<T, U>`(array: `T[]`, callback: `Callback<T, U>`) -> `U[]`",
    info: "Creates a new array populated with the results of calling the provided function on every element in the calling array."
  },
  {
    label: "count",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `number`",
    info: "Counts the number of elements in the array that satisfy the condition defined in the callback."
  },
  {
    label: "one",
    type: "function",
    detail: "`<T>`(array: `T[]`, callback: `Callback<T, boolean>`) -> `boolean`",
    info: "Checks if exactly one element in the array satisfies the condition defined in the callback."
  },
  {
    label: "flatMap",
    type: "function",
    detail: "`<T, U>`(array: `T[]`, callback: `Callback<T, U[]>`) -> `U[]`",
    info: "First maps each element using a mapping function, then flattens the result into a new array."
  }
], wn = ({ text: e, className: n }) => e.replace(/`([^`]+)`/g, (t, o) => {
  let r;
  return /^["'].*["']$/.test(o) ? r = "#077d16" : /^\d+$/.test(o) ? r = "#015cc5" : r = "#CE8E6D", `<span class="${n}" style="color: ${r};">${o}</span>`;
}), Xr = {
  linter: Es
}, ea = (e) => {
  try {
    const n = e.split(" at ");
    if (n.length <= 1)
      return null;
    const o = n.pop().replace("(", "").replace(")", ""), [r, l] = o.split(", ");
    return l ? [parseInt(r), parseInt(l)] : parseInt(r);
  } catch {
    return null;
  }
}, na = (e, n) => {
  if (!ie())
    return [];
  const t = I(e).with("standard", () => Ro(n)).with("unary", () => Oo(n)).otherwise(() => null);
  if (!t)
    return [];
  const o = I(ea(t.source)).with(z.number, (l) => ({ from: l, to: l })).with([z.number, z.number], ([l, a]) => ({ from: l, to: a })).otherwise(() => ({ from: 0, to: n.length })), r = I(t.type).with("parserError", () => "Parser error").with("lexerError", () => "Lexer error").with("compilerError", () => "Compiler error").with("vmError", () => "VM error").otherwise((l) => l);
  return [
    {
      from: o.from,
      to: o.to,
      message: t.source,
      source: r,
      severity: "error"
    }
  ];
}, ta = (e) => ie() ? Xr.linter(
  (n) => {
    n.dom.setAttribute("data-severity", "none");
    const t = n.state.field(we), o = n.state.doc.toString(), r = oa({
      source: o,
      expressionType: e,
      strict: t.strict,
      types: t.types,
      expectedVariableType: t.expectedVariableType
    });
    return r.some((l) => l.severity === "error") ? n.dom.setAttribute("data-severity", "error") : r.some((l) => l.severity === "warning") ? n.dom.setAttribute("data-severity", "warning") : r.some((l) => l.severity === "info") ? n.dom.setAttribute("data-severity", "info") : r.some((l) => l.severity === "hint") && n.dom.setAttribute("data-severity", "hint"), r;
  },
  {
    needsRefresh: (n) => n.transactions.some(
      (t) => t.effects.some(
        (o) => o.is(Hn) || o.is(en) || o.is(nn) || o.is(Gn)
      )
    )
  }
) : [], oa = ({
  source: e,
  expressionType: n = "standard",
  strict: t = !1,
  types: o,
  expectedVariableType: r
}) => {
  if (e.trim().length === 0)
    return [];
  const l = e ? na(n, e) : [], a = o.filter((d) => !!d.error).map(
    (d) => mn({
      from: d.span[0],
      to: d.span[1],
      severity: I(d.error).with(z.string.startsWith("Hint:"), () => "hint").with(z.string.startsWith("Info:"), () => "info").otherwise(() => "warning"),
      message: d.error,
      source: "Type check"
    })
  ), i = [...l, ...a];
  if (n === "unary" && o.length > 0) {
    const d = o[0].kind;
    d !== "Bool" && i.push(
      mn({
        from: 0,
        to: e.length,
        severity: t ? "error" : "warning",
        message: `Expected unary expression to evaluate to type \`bool\`, received \`${De(d)}\` instead.`,
        source: "Type check"
      })
    );
  } else if (r && o.length > 0) {
    const d = o[0].kind, c = ae.fromJson(d);
    I(t).with(!0, () => c.equal(r)).otherwise(() => c.satisfies(r)) || i.push(
      mn({
        from: 0,
        to: e.length,
        severity: t ? "error" : "warning",
        message: `Expected expression to evaluate to type \`${De(r.toJson())}\`, received \`${De(d)}\` instead.`,
        source: "Type check"
      })
    );
  }
  return i;
}, mn = (e) => (e.renderMessage = (n) => {
  const t = document.createElement("div");
  return t.innerHTML = wn({
    text: e.message,
    className: "cm-diagnosticMessageToken"
  }), t;
}, e);
let Ln = po;
const yo = (e, n, t, o) => {
  const r = I(n.type).with("function", () => {
    const l = `${n.label}()`;
    return e.state.update({
      changes: { from: t, to: o, insert: l },
      selection: { anchor: t + l.length - 1 }
      // Place the caret inside the parentheses
    });
  }).otherwise(
    () => e.state.update({
      changes: { from: t, to: o, insert: n.label },
      selection: { anchor: t + n.label.length }
    })
  );
  e.dispatch(r);
}, fo = (e) => e ? e?.type.prop(Os.group)?.includes("autoComplete") || !1 || fo(e?.parent) : !1, sa = () => (e) => {
  const n = Et(e.state), t = e.state.wordAt(e.pos), o = n.resolveInner(e.pos, -1);
  if (!fo(o) || !e.explicit && e.pos === 0 || !e.explicit && !t && o.name !== ".")
    return null;
  const r = Ln.map(
    (a) => ({
      ...a,
      detail: a.detail.replaceAll("`", ""),
      apply: yo
    })
  ), l = t?.from ?? e.pos;
  switch (o.name) {
    case "Standard":
    case "VariableName": {
      const a = e.state.field(we);
      return {
        from: l,
        options: [...gn({ type: "variable", kind: a.rootKind }), ...r],
        validFor: /\w*/
      };
    }
    case "String": {
      const a = e.state.field(we), i = bt(o), d = (a.types ?? []).find((c) => c.span[0] === i?.[0] && c.span[1] === i[1]);
      return d ? {
        from: o.from + 1,
        options: gn({ kind: d.kind }),
        validFor: /\w*/
      } : null;
    }
    case ".":
    case "PropertyName": {
      const a = e.state.field(we), i = bt(o), d = (a.types ?? []).find((c) => c.span[0] === i?.[0] && c.span[1] === i[1]);
      return d ? {
        from: l,
        options: gn({ kind: d.kind }),
        validFor: /\w*/
      } : null;
    }
    default:
      return null;
  }
}, bt = (e) => {
  let n = e;
  ["PropertyExpression", "PropertyAccess"].includes(n.parent?.name ?? "") && n.parent?.prevSibling && (n = n.parent.prevSibling);
  let t = n;
  for (; t.prevSibling; )
    t = t.prevSibling;
  return [t.from, n.to];
}, ra = (e) => {
  let n = e;
  n.parent && ["PropertyExpression", "PropertyAccess"].includes(n.parent.name) && (n = n.parent);
  let t = n;
  for (; t.prevSibling; )
    t = t.prevSibling;
  return [t.from, n.to];
}, aa = (e = []) => {
  const n = e.map(({ field: t, name: o }) => ({
    label: t,
    type: "variable",
    detail: o || "",
    info: ""
  }));
  return Ln = [...po, ...n], ks({
    override: [sa()]
  });
}, ia = () => No((e, n) => {
  const t = e.state.wordAt(n);
  if (!t)
    return null;
  const o = e.state.doc.sliceString(t.from, t.to), r = Ln.find((u) => u.label === o);
  if (r)
    return {
      pos: t.from,
      end: t.to,
      above: !0,
      create() {
        const u = document.createElement("div");
        return u.classList.add("grl-ce-hover-tooltip"), u.style.whiteSpace = "pre", u.innerHTML = wn({
          text: `<span style="font-size: 12px">${r.info}</span>
${r.label}: ${r.detail}
`,
          className: "cm-hoverTooltipMessageToken"
        }), { dom: u };
      }
    };
  const a = Et(e.state).resolveInner(n, -1), i = e.state.field(we), d = ra(a), c = (i.types ?? []).find((u) => u.span[0] === d?.[0] && u.span[1] === d[1]);
  if (c && d) {
    const u = e.state.doc.toString();
    return {
      pos: d[0],
      end: d[1],
      above: !0,
      create() {
        const p = document.createElement("div");
        return p.classList.add("grl-ce-hover-tooltip"), p.style.whiteSpace = "pre", p.innerHTML = wn({
          text: `${u.slice(d[0], d[1])}: \`${De(c.kind)}\``,
          className: "cm-hoverTooltipMessageToken"
        }), { dom: p };
      }
    };
  }
  return null;
}), da = Nt(
  Pt.define([
    { tag: [A.bracket, A.operator, A.variableName, A.propertyName, A.content, A.punctuation], color: "#080808" },
    { tag: [A.number, A.bool], color: "#015cc5" },
    { tag: [A.function(A.variableName), A.keyword, A.self, A.special(A.brace), A.logicOperator], color: "#6f42c1" },
    { tag: [A.string, A.meta, A.name, A.quote], color: "#077d16" },
    { tag: A.invalid, color: "#cb2431" }
  ])
), la = Nt(
  Pt.define([
    { tag: [A.bracket, A.operator, A.variableName, A.propertyName, A.content, A.punctuation], color: "#bdbec4" },
    { tag: [A.number, A.bool], color: "#57a8f5" },
    { tag: [A.function(A.variableName), A.keyword, A.self, A.special(A.brace), A.logicOperator], color: "#c87dbb" },
    { tag: [A.string, A.meta, A.name, A.quote], color: "#6aab73" },
    { tag: A.invalid, color: "#cb2431" }
  ])
), ca = new Rt(
  Ot.define({
    parser: Jt,
    name: "zen",
    languageData: {
      closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
      wordChars: "$"
    }
  })
), ua = new Rt(
  Ot.define({
    parser: Ps.configure({
      wrap: Rs((e) => e.name === "ExpressionInner" ? { parser: Jt } : null)
    }),
    name: "zenTemplate",
    languageData: {
      closeBrackets: { brackets: ["(", "[", "'", '"', "{", "`"] },
      wordChars: "$"
    }
  })
), Zt = ({ type: e, lint: n = !0, schema: t }) => [
  e !== "template" ? ca : ua,
  aa(t),
  ia(),
  Is(),
  n && ta(e),
  we,
  zs(),
  zo.of([
    ...Cs,
    ...Ns,
    { key: "Enter", run: Xn, shift: Xn }
  ])
].filter((o) => !!o), pa = { types: [], rootKind: "Any", expressionType: "standard", strict: !1 }, en = an.define(), Hn = an.define(), nn = an.define(), Gn = an.define(), we = Io.define({
  create() {
    return pa;
  },
  update(e, n) {
    const t = n.effects.find((p) => p.is(Hn)), o = I(t).with({ value: z.string }, (p) => p.value).otherwise(() => e.expressionType), r = n.effects.find((p) => p.is(nn)), l = I(r).with({ value: z.nonNullable }, ({ value: p }) => p).with({ value: z.nullish }, () => {
    }).otherwise(() => e.expectedVariableType), a = n.effects.find((p) => p.is(en)), i = I(a).with({ value: z._ }, (p) => p.value).otherwise(() => e.root || null), d = n.effects.find((p) => p.is(Gn)), c = I(d).with({ value: z.boolean }, ({ value: p }) => p).otherwise(() => e.strict);
    if (!i)
      return { ...e, expressionType: o, expectedVariableType: l, strict: c };
    if (!n.docChanged && !t && !a)
      return { ...e, expressionType: o, expectedVariableType: l, strict: c };
    const u = n.newDoc.toString();
    return {
      source: u,
      expressionType: o,
      expectedVariableType: l,
      strict: c,
      root: i,
      rootKind: i.toJson(),
      types: I(o).with("unary", () => i.typeCheckUnary(u)).otherwise(() => i.typeCheck(u))
    };
  },
  compare(e, n) {
    return e.source === n.source && e.expressionType === n.expressionType && e.root === n.root && e.expectedVariableType === n.expectedVariableType && e.strict === n.strict;
  }
}), gn = ({ kind: e, type: n = "property" }) => I(e).with(
  { Object: z._ },
  (t) => Object.entries(t.Object).map(([o, r]) => ({
    label: o,
    type: n,
    boost: 10,
    detail: De(r),
    apply: yo
  }))
).otherwise(() => []), De = (e) => I(e).with(z.string, (n) => n.toLowerCase()).with({ Object: z._ }, () => "object").with({ Array: z._ }, (n) => `${De(n.Array)}[]`).otherwise(() => "unknown"), _t = (e, n) => Ne.updateListener.of((t) => {
  n?.(t.state), t.docChanged && e?.(t.state.doc.toString());
}), vt = (e = !1) => e ? la : da, Se = j.forwardRef(
  ({
    noStyle: e = !1,
    fullHeight: n = !1,
    strict: t = !1,
    maxRows: o,
    disabled: r,
    value: l,
    onChange: a,
    placeholder: i,
    className: d,
    onStateChange: c,
    type: u = "standard",
    extension: p,
    variableType: y,
    expectedVariableType: g,
    lint: m = !0,
    ...h
  }, T) => {
    const f = X(null), b = X(null), { token: _ } = de.useToken(), { inputsSchema: v, outputsSchema: D } = L(
      ({ inputsSchema: P = [], outputsSchema: x = [] }) => ({ inputsSchema: P, outputsSchema: x })
    ), R = [...v, ...D], w = V(
      () => ({
        zenExtension: new ve(),
        theme: new ve(),
        placeholder: new ve(),
        readOnly: new ve(),
        updateListener: new ve(),
        userProvided: new ve()
      }),
      []
    );
    return C(() => {
      if (!f.current)
        return;
      const P = new Ne({
        parent: f.current,
        state: Co.create({
          doc: l,
          extensions: [
            Ne.lineWrapping,
            So(),
            w.zenExtension.of(Zt({ type: u, lint: m, schema: R })),
            w.updateListener.of(_t(a, c)),
            w.theme.of(vt(_.mode === "dark")),
            w.placeholder.of(i ? Wn(i) : []),
            w.readOnly.of(Ne.editable.of(!r)),
            w.userProvided.of(p?.({ type: u }) ?? [])
          ]
        })
      });
      return b.current = P, () => {
        P.destroy(), b.current = null;
      };
    }, []), C(() => {
      if (!b.current || l === void 0)
        return;
      const P = b.current;
      P.state.doc.eq(ko.of(l.split(`
`))) || P.dispatch({
        changes: {
          from: 0,
          to: P.state.doc.length,
          insert: l
        }
      });
    }, [l]), C(() => {
      b.current && b.current.dispatch({
        effects: w.theme.reconfigure(vt(_.mode === "dark"))
      });
    }, [_.mode]), C(() => {
      b.current && b.current.dispatch({
        effects: w.placeholder.reconfigure(i ? Wn(i) : [])
      });
    }, [i]), C(() => {
      b.current && b.current.dispatch({
        effects: w.readOnly.reconfigure(Ne.editable.of(!r))
      });
    }, [r]), C(() => {
      b.current && b.current.dispatch({
        effects: w.updateListener.reconfigure(_t(a, c))
      });
    }, [a, c]), C(() => {
      b.current && b.current.dispatch({
        effects: [
          w.zenExtension.reconfigure(Zt({ type: u, lint: m, schema: R })),
          Hn.of(
            I(u).with("unary", () => "unary").otherwise(() => "standard")
          )
        ]
      });
    }, [u, m, R]), C(() => {
      b.current && b.current.dispatch({
        effects: w.userProvided.reconfigure(p?.({ type: u }) ?? [])
      });
    }, [p, u]), C(() => {
      if (!(!b.current || !ie())) {
        if (y == null) {
          b.current.dispatch({
            effects: en.of(null)
          });
          return;
        }
        b.current.dispatch({
          effects: en.of(Ue(y))
        });
      }
    }, [y]), C(() => {
      if (!(!b.current || !ie())) {
        if (g == null) {
          b.current.dispatch({
            effects: nn.of(null)
          });
          return;
        }
        b.current.dispatch({
          effects: nn.of(Ue(g))
        });
      }
    }, [g]), C(() => {
      b.current && b.current.dispatch({
        effects: Gn.of(t)
      });
    }, [t]), /* @__PURE__ */ s(
      "div",
      {
        ref: Yt(f, T),
        className: k(
          "grl-ce",
          o && !n && "max-rows",
          n && "full-height",
          e && "no-style",
          d
        ),
        style: { "--editorMaxRows": o },
        "data-type": u,
        ...h
      }
    );
  }
), ya = (e) => {
  const { isOpen: n, onDismiss: t, onSuccess: o, schema: r, getContainer: l } = e, { inputVariableType: a } = se(({ inputVariableType: c }) => ({ inputVariableType: c })), [i] = J.useForm(), d = J.useWatch("type", i);
  return C(() => {
    n && i.resetFields();
  }, [n, i]), /* @__PURE__ */ s(
    pe,
    {
      title: "Add a column",
      open: n,
      destroyOnClose: !0,
      onCancel: t,
      width: 360,
      okText: "Add",
      okButtonProps: {
        form: "field-add-dialog",
        htmlType: "submit"
      },
      getContainer: l,
      children: /* @__PURE__ */ Z(
        J,
        {
          id: "field-add-dialog",
          requiredMark: !1,
          form: i,
          layout: "vertical",
          initialValues: { type: "expression" },
          onFinish: ({ field: c, name: u, defaultValue: p }) => {
            o?.({
              id: crypto.randomUUID(),
              field: (c || "")?.trim?.()?.length > 0 ? c : void 0,
              name: u,
              defaultValue: p
            });
          },
          children: [
            r && /* @__PURE__ */ s(J.Item, { label: "Choose from list", children: /* @__PURE__ */ s(
              kt,
              {
                fieldNames: { label: "name", value: "field", children: "items" },
                options: r,
                onChange: (c) => {
                  const u = An(c, r);
                  u && i.setFieldsValue({
                    name: u?.name,
                    field: u?.field
                  });
                }
              }
            ) }),
            /* @__PURE__ */ s(J.Item, { name: "name", label: "Label", rules: [{ required: !0 }], children: /* @__PURE__ */ s(fe, { autoComplete: "off" }) }),
            /* @__PURE__ */ s(
              J.Item,
              {
                name: "field",
                label: d === "expression" ? "Selector" : "Field",
                rules: [{ required: e.columnType === "outputs" }],
                children: e.columnType === "inputs" ? /* @__PURE__ */ s(Se, { variableType: a }) : /* @__PURE__ */ s(Oe, { maxRows: 3 })
              }
            ),
            /* @__PURE__ */ s(J.Item, { name: "defaultValue", label: "Default Value", children: /* @__PURE__ */ s(fe, { autoComplete: "off" }) })
          ]
        }
      )
    }
  );
}, fa = (e) => {
  const { isOpen: n, onDismiss: t, onSuccess: o, field: r, schema: l, getContainer: a } = e, { inputVariableType: i } = se(({ inputVariableType: p }) => ({ inputVariableType: p })), [d] = J.useForm(), [c, u] = K();
  return C(() => {
    n && (d.resetFields(), d.setFieldsValue({
      name: r?.name,
      field: r?.field,
      defaultValue: r?.defaultValue
    }), u(Wt(r?.field, l)));
  }, [n, d, r, l]), /* @__PURE__ */ s(
    pe,
    {
      title: "Update column",
      open: n,
      onCancel: t,
      destroyOnClose: !0,
      okText: "Update",
      okButtonProps: {
        form: "field-update-dialog",
        htmlType: "submit"
      },
      width: 360,
      getContainer: a,
      children: /* @__PURE__ */ Z(
        J,
        {
          id: "field-update-dialog",
          form: d,
          layout: "vertical",
          requiredMark: !1,
          initialValues: {
            name: r?.name,
            field: r?.field,
            defaultValue: r?.defaultValue
          },
          onFinish: (p) => {
            o?.({
              ...r,
              ...p,
              field: p?.field?.trim?.()?.length > 0 ? p?.field : void 0
            });
          },
          children: [
            l && /* @__PURE__ */ s(J.Item, { label: "Choose from list", children: /* @__PURE__ */ s(
              kt,
              {
                fieldNames: { label: "name", value: "field", children: "items" },
                options: l,
                value: c,
                onChange: (p) => {
                  u(p);
                  const y = An(p, l);
                  y && d.setFieldsValue({
                    name: y?.name,
                    field: y?.field
                  });
                }
              }
            ) }),
            /* @__PURE__ */ s(J.Item, { name: "name", label: "Label", rules: [{ required: !0 }], children: /* @__PURE__ */ s(fe, {}) }),
            /* @__PURE__ */ s(J.Item, { name: "field", label: "Selector", rules: [{ required: e.columnType === "outputs" }], children: e.columnType === "inputs" ? /* @__PURE__ */ s(Se, { variableType: i }) : /* @__PURE__ */ s(Oe, { maxRows: 3 }) }),
            /* @__PURE__ */ s(J.Item, { name: "defaultValue", label: "Default Value", children: /* @__PURE__ */ s(fe, { autoComplete: "off" }) })
          ]
        }
      )
    }
  );
}, ma = ({ col: e, index: n, moveCard: t }) => {
  const o = X(null), [, r] = Cn({
    accept: "col",
    collect(i) {
      return {
        handlerId: i.getHandlerId()
      };
    },
    hover(i, d) {
      if (!o.current)
        return;
      const c = i.index, u = n;
      if (c === u)
        return;
      const p = o.current?.getBoundingClientRect(), y = (p.bottom - p.top) / 2, m = d.getClientOffset().y - p.top;
      c < u && m < y || c > u && m > y || (t(c, u), i.index = u);
    }
  }), [{ isDragging: l }, a] = kn({
    type: "col",
    item: () => ({ id: e.id, index: n }),
    collect: (i) => ({
      isDragging: i.isDragging()
    })
  });
  return a(r(o)), /* @__PURE__ */ s(Zo, { ref: o, style: { opacity: l ? 0 : 1 }, bodyStyle: { padding: "0.5rem" }, children: /* @__PURE__ */ s("div", { className: "grl-dt__fields-reorder__item", children: /* @__PURE__ */ Z(oe, { horizontal: !0, verticalAlign: "center", children: [
    /* @__PURE__ */ s("div", { className: "grl-dt__fields-reorder__handle", children: "=" }),
    /* @__PURE__ */ Z(oe, { grow: !0, gap: 0, children: [
      /* @__PURE__ */ s(O.Text, { children: e.name }),
      /* @__PURE__ */ s(O.Text, { type: "secondary", style: { fontSize: 12 }, children: e.field })
    ] })
  ] }) }) });
}, ga = (e) => {
  const { isOpen: n, onDismiss: t, onSuccess: o, fields: r, getContainer: l } = e, [a, i] = K([]);
  C(() => {
    n && i([...r || []]);
  }, [n, r]);
  const d = (c, u) => {
    if (u === void 0)
      return;
    const p = [...a], y = p.splice(c, 1)[0];
    p.splice(u, 0, y), i(p);
  };
  return /* @__PURE__ */ s(
    pe,
    {
      title: "Reorder fields",
      open: n,
      onCancel: t,
      width: 360,
      destroyOnClose: !0,
      bodyStyle: { paddingTop: 17 },
      okText: "Update",
      okButtonProps: {
        htmlType: "submit",
        form: "fields-reorder-dialog"
      },
      getContainer: l,
      children: /* @__PURE__ */ s(J, { id: "fields-reorder-dialog", onFinish: () => o?.(a), children: /* @__PURE__ */ s(oe, { gap: 8, horizontalAlign: "stretch", children: a.map((c, u) => /* @__PURE__ */ s(ma, { col: c, index: u, moveCard: d }, c.id)) }) })
    }
  );
}, ha = () => {
  const { dialog: e, setDialog: n, isDialogActive: t, getContainer: o } = Be(), r = "test", l = le(), { decisionTableFields: a, inputsSchema: i, outputsSchema: d } = se(
    ({ decisionTable: c, inputsSchema: u, outputsSchema: p }) => ({
      decisionTableFields: e?.columnType ? c[e.columnType] : void 0,
      inputsSchema: u,
      outputsSchema: p
    })
  );
  return /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ s(
      ya,
      {
        id: r,
        columnType: e?.columnType,
        isOpen: t("add"),
        schema: e?.columnType === "inputs" ? i : d,
        onDismiss: () => n(void 0),
        onSuccess: (c) => {
          e && (l.addColumn(e.columnType, c), n(void 0));
        },
        getContainer: o
      }
    ),
    /* @__PURE__ */ s(
      fa,
      {
        id: r,
        columnType: e?.columnType,
        isOpen: t("edit"),
        schema: e?.columnType === "inputs" ? i : d,
        field: e?.item,
        onDismiss: () => n(void 0),
        onSuccess: (c) => {
          e && (l.updateColumn(e.columnType, c.id, c), n(void 0));
        },
        getContainer: o
      }
    ),
    /* @__PURE__ */ s(
      ga,
      {
        isOpen: t("reorder"),
        fields: a,
        onDismiss: () => n(void 0),
        onSuccess: (c) => {
          e && (l.reorderColumns(e.columnType, c), n(void 0));
        },
        getContainer: o
      }
    )
  ] });
}, Ta = () => {
  const e = le(), { disableHitPolicy: n, disabled: t, configurable: o, hitPolicy: r, diffHitPolicy: l, cursor: a } = se(
    ({ disableHitPolicy: g, disabled: m, configurable: h, decisionTable: T, cursor: f }) => ({
      disableHitPolicy: g,
      disabled: m,
      configurable: h,
      cursor: f,
      hitPolicy: T.hitPolicy,
      diffHitPolicy: T?._diff?.fields?.hitPolicy
    })
  ), { listenerStore: i, stateStore: d } = En(), c = X(null), u = async (g) => {
    const { name: m } = g;
    try {
      const h = d.getState().decisionTable;
      await io(m, [{ ...h, name: "decision table", id: crypto.randomUUID() }]), q.success("Excel file has been downloaded successfully!");
    } catch {
      q.error("Failed to download Excel file!");
    }
  }, p = () => {
    c?.current?.click?.();
  }, y = async (g) => {
    const m = g?.target?.files[0], h = new FileReader();
    try {
      h.readAsArrayBuffer(m), h.onload = async () => {
        const T = h.result;
        if (!T) return;
        const b = (await lo(T))[0].content;
        e.setDecisionTable(b), i.getState().onChange?.(b);
      }, q.success("Excel file has been uploaded successfully!");
    } catch {
      q.error("Failed to upload Excel!");
    }
  };
  return /* @__PURE__ */ Z(te, { children: [
    /* @__PURE__ */ Z(oe, { horizontal: !0, horizontalAlign: "space-between", verticalAlign: "center", className: "grl-dt__command-bar", children: [
      /* @__PURE__ */ Z(oe, { gap: 8, horizontal: !0, className: "full-width", children: [
        /* @__PURE__ */ s(
          N,
          {
            type: "text",
            size: "small",
            color: "secondary",
            icon: /* @__PURE__ */ s(Lt, {}),
            onClick: () => u({ name: "table" }),
            children: "Export Excel"
          }
        ),
        /* @__PURE__ */ s(
          N,
          {
            type: "text",
            size: "small",
            color: "secondary",
            disabled: t,
            icon: /* @__PURE__ */ s(Ft, {}),
            onClick: () => p(),
            children: "Import Excel"
          }
        ),
        a && !t && /* @__PURE__ */ Z(te, { children: [
          /* @__PURE__ */ s(
            _o,
            {
              type: "vertical",
              style: {
                height: 24
              }
            }
          ),
          /* @__PURE__ */ s($, { title: "Add row below", children: /* @__PURE__ */ s(
            N,
            {
              type: "text",
              size: "small",
              color: "secondary",
              icon: /* @__PURE__ */ s(At, {}),
              onClick: () => e.addRowBelow(a?.y)
            }
          ) }),
          /* @__PURE__ */ s($, { title: "Add row above", children: /* @__PURE__ */ s(
            N,
            {
              type: "text",
              size: "small",
              color: "secondary",
              icon: /* @__PURE__ */ s(fs, {}),
              onClick: () => e.addRowAbove(a?.y)
            }
          ) }),
          /* @__PURE__ */ s($, { children: /* @__PURE__ */ s(on, { title: "Remove row?", okText: "Remove", onConfirm: () => e.removeRow(a?.y), children: /* @__PURE__ */ s(N, { type: "text", size: "small", icon: /* @__PURE__ */ s(Ie, {}) }) }) }),
          /* @__PURE__ */ s(
            N,
            {
              type: "text",
              size: "small",
              color: "secondary",
              icon: /* @__PURE__ */ s(be, {}),
              onClick: () => e.setCursor(null),
              children: "Deselect"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s(
        Ks,
        {
          displayDiff: l?.status === "modified",
          style: { width: 140 },
          previousValue: l?.previousValue,
          size: "small",
          disabled: t || !o || n,
          value: r,
          onSelect: (g) => e.updateHitPolicy(g),
          options: [
            {
              key: "first",
              label: "First",
              value: "first"
            },
            {
              key: "collect",
              label: "Collect",
              value: "collect"
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s(
      "input",
      {
        multiple: !0,
        hidden: !0,
        accept: ".xlsx",
        type: "file",
        ref: c,
        onChange: y,
        onClick: (g) => {
          g.target.value = null;
        }
      }
    )
  ] });
}, ba = ({
  id: e,
  defaultValue: n,
  value: t,
  disabled: o = !1,
  configurable: r = !0,
  disableHitPolicy: l = !1,
  activeRules: a,
  inputsSchema: i,
  outputsSchema: d,
  inputData: c,
  colWidth: u,
  minColWidth: p,
  cellRenderer: y,
  onChange: g
}) => {
  const m = X(!1), { stateStore: h, listenerStore: T } = En(), f = le(), { decisionTable: b } = se(({ decisionTable: v }) => ({
    decisionTable: v
  })), _ = Rn((v) => {
    g?.(v);
  }, 100);
  return C(() => {
    h.setState({
      id: e,
      disabled: o,
      configurable: r,
      disableHitPolicy: l,
      activeRules: a,
      inputsSchema: i,
      outputsSchema: d,
      colWidth: u || 200,
      minColWidth: p || 150
    });
  }, [e, o, r, l, a, i, p, u, d]), C(() => {
    T.setState({
      cellRenderer: y,
      onChange: _
    });
  }, [y, _]), C(() => {
    m.current && t !== void 0 && !Q(t, b) && f.setDecisionTable(je(t));
  }, [t]), C(() => (f.setDecisionTable(je(t === void 0 ? n : t)), m.current = !0, () => {
    const { derivedVariableTypes: v } = h.getState();
    Object.values(v).forEach((D) => {
      D.free();
    });
  }), []), C(() => {
    ie() && h.setState({ inputVariableType: Ue(c) });
  }, [c]), null;
}, Za = (e) => {
  const { children: n } = e, t = le(), { cursor: o, disabled: r } = se(({ cursor: l, disabled: a }) => ({
    cursor: l,
    disabled: a
  }));
  return /* @__PURE__ */ s(
    ue,
    {
      destroyPopupOnHide: !0,
      transitionName: "",
      disabled: r,
      overlayStyle: {
        minWidth: 270
      },
      menu: {
        items: [
          {
            key: "addRowAbove",
            label: /* @__PURE__ */ s(ye, { left: "Add row above" }),
            onClick: () => {
              o && t.addRowAbove(o?.y);
            }
          },
          {
            key: "addRowBelow",
            label: /* @__PURE__ */ s(ye, { left: "Add row below" }),
            onClick: () => {
              o && t.addRowBelow(o?.y);
            }
          },
          {
            type: "divider"
          },
          {
            key: "remove",
            label: /* @__PURE__ */ s(ye, { left: "Remove row" }),
            onClick: () => {
              o && t.removeRow(o?.y);
            }
          }
        ]
      },
      trigger: ["contextMenu"],
      children: n
    }
  );
}, _a = j.memo(Za), va = Do(({ context: e, ...n }) => {
  const {
    row: { index: t },
    column: { id: o },
    table: r
  } = e, l = le(), { disabled: a, value: i, diff: d } = se(({ decisionTable: g, disabled: m }) => ({
    value: g?.rules?.[t]?.[o],
    diff: g?.rules?.[t]?._diff?.fields?.[o],
    disabled: m
  })), c = se(
    Vs(o),
    (g, m) => g?.id !== void 0 && m?.id !== void 0 && g?.id === m?.id
  ), [u, p] = K(i);
  In(() => {
    u !== i && p(i);
  }, [i]);
  const y = Ae(
    (g) => {
      p(g), l.commitData(g, { x: o, y: t });
    },
    [l, p]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: "cell-wrapper",
      onFocus: () => l.setCursor({ x: o, y: t }),
      onContextMenu: () => l.setCursor({ x: o, y: t }),
      ...n,
      children: r.options.meta?.getCell?.({
        disabled: a,
        column: c,
        value: u,
        diff: d,
        onChange: y
      }) || /* @__PURE__ */ s(xa, { disabled: a, column: c, value: u, onChange: y, diff: d })
    }
  );
}), xa = ({ column: e, value: n, onChange: t, disabled: o, diff: r }) => {
  const l = V(() => crypto.randomUUID(), []), a = X(null), i = En(), { inputVariableType: d, localVariableType: c } = se(
    ({ inputVariableType: u, derivedVariableTypes: p }) => ({
      inputVariableType: u,
      localVariableType: I(e).with({ colType: "input", field: z.string }, (y) => ({
        type: 1,
        value: p[y.field] ?? null
      })).otherwise(() => ({ type: 0, value: u }))
    })
  );
  return C(() => {
    if (!d || !e?.field || c.type !== 1)
      return;
    const u = i.stateStore.getState(), p = d.clone(), y = d.calculateType(e.field);
    p.set("$", y), i.stateStore.setState({
      derivedVariableTypes: {
        ...u.derivedVariableTypes,
        [e.field]: p
      }
    });
  }, [d, e]), C(() => {
    if (!a.current)
      return;
    const u = a.current.closest("div.cell-wrapper"), p = (y) => {
      y.target === a.current || !a.current || ("selectionStart" in a.current ? (a.current.focus(), a.current.selectionStart = a.current.value.length) : a.current.querySelector(".cm-editor").focus());
    };
    return u.style.cursor = "text", u.addEventListener("click", p), () => {
      u.style.cursor = "", u.removeEventListener("click", p);
    };
  }, []), e ? /* @__PURE__ */ s(
    ke,
    {
      ref: a,
      id: l,
      type: I(e).with({ colType: "input", field: z.string }, () => "unary").otherwise(() => "standard"),
      className: "grl-dt__cell__input",
      noStyle: !0,
      displayDiff: r?.status === "modified",
      previousValue: r?.previousValue,
      variableType: c.value,
      maxRows: 3,
      value: n,
      disabled: o,
      onChange: t
    }
  ) : /* @__PURE__ */ s(
    Ls,
    {
      id: l,
      ref: a,
      className: "grl-dt__cell__input",
      maxRows: 3,
      value: n,
      disabled: o,
      displayDiff: r?.status === "modified",
      previousValue: r?.previousValue,
      spellCheck: !1,
      onChange: (u) => t(u.target.value)
    }
  );
}, wa = ({ configurable: e, disabled: n }) => {
  const t = se((r) => r.decisionTable?.inputs), { setDialog: o } = Be();
  return /* @__PURE__ */ s("div", { className: "head-cell", children: /* @__PURE__ */ Z(oe, { horizontal: !0, horizontalAlign: "space-between", verticalAlign: "center", children: [
    /* @__PURE__ */ s(oe, { gap: 0, className: "text-wrapper", verticalAlign: "center", children: /* @__PURE__ */ s(O.Text, { className: "span-overflow grl-dt-text-primary", children: "Inputs" }) }),
    e && /* @__PURE__ */ Z("div", { className: "cta-wrapper", children: [
      t?.length > 1 && /* @__PURE__ */ s($, { title: "Reorder fields", children: /* @__PURE__ */ s(
        N,
        {
          className: "grl-dt-text-secondary",
          icon: /* @__PURE__ */ s(Ht, {}),
          size: "small",
          type: "text",
          disabled: n,
          onClick: () => {
            o({
              type: "reorder",
              columnType: "inputs",
              item: null
            });
          }
        }
      ) }),
      /* @__PURE__ */ s($, { title: "Add input", children: /* @__PURE__ */ s(
        N,
        {
          className: "grl-dt-text-secondary",
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ s(Pn, {}),
          disabled: n,
          onClick: () => {
            o({
              type: "add",
              columnType: "inputs",
              item: null
            });
          }
        }
      ) })
    ] })
  ] }) });
}, Da = ({ configurable: e, disabled: n }) => {
  const t = se((r) => r.decisionTable?.outputs), { setDialog: o } = Be();
  return /* @__PURE__ */ s("div", { className: "head-cell", children: /* @__PURE__ */ Z(oe, { horizontal: !0, horizontalAlign: "space-between", verticalAlign: "center", children: [
    /* @__PURE__ */ s(oe, { gap: 0, className: "text-wrapper", verticalAlign: "center", children: /* @__PURE__ */ s(O.Text, { className: "span-overflow grl-dt-text-primary", children: "Outputs" }) }),
    e && /* @__PURE__ */ Z("div", { className: "cta-wrapper", children: [
      t?.length > 1 && /* @__PURE__ */ s($, { title: "Reorder fields", children: /* @__PURE__ */ s(
        N,
        {
          className: "grl-dt-text-secondary",
          icon: /* @__PURE__ */ s(Ht, {}),
          size: "small",
          type: "text",
          disabled: n,
          onClick: () => {
            o({
              type: "reorder",
              columnType: "outputs",
              item: null
            });
          }
        }
      ) }),
      /* @__PURE__ */ s($, { title: "Add output", children: /* @__PURE__ */ s(
        N,
        {
          className: "grl-dt-text-secondary",
          size: "small",
          type: "text",
          icon: /* @__PURE__ */ s(Pn, {}),
          disabled: n,
          onClick: () => {
            o({
              type: "add",
              columnType: "outputs",
              item: null
            });
          }
        }
      ) })
    ] })
  ] }) });
}, Sa = ({ configurable: e, disabled: n, schema: t }) => {
  const { setDialog: o, getContainer: r } = Be(), l = le();
  return /* @__PURE__ */ s("div", { className: k(["head-cell"]), children: /* @__PURE__ */ Z(oe, { horizontal: !0, horizontalAlign: "space-between", verticalAlign: "center", children: [
    /* @__PURE__ */ Z(oe, { gap: 0, className: "text-wrapper", children: [
      t?._diff?.fields?.name?.status === "modified" && /* @__PURE__ */ s(O.Text, { className: k(["span-overflow", "grl-dt-text-primary", "text-removed"]), children: t?._diff?.fields?.name?.previousValue }),
      /* @__PURE__ */ s(O.Text, { className: k(["span-overflow", "grl-dt-text-primary"]), children: t.name }),
      t?._diff?.fields?.field?.status && /* @__PURE__ */ s(
        O.Text,
        {
          className: k(["span-overflow", "grl-dt-text-secondary", "text-removed"]),
          type: "secondary",
          style: { fontSize: 12 },
          children: t?._diff?.fields?.field?.previousValue
        }
      ),
      /* @__PURE__ */ s(
        O.Text,
        {
          className: k(["span-overflow", "grl-dt-text-secondary"]),
          type: "secondary",
          style: { fontSize: 12 },
          children: t.field
        }
      )
    ] }),
    /* @__PURE__ */ Z(
      oe,
      {
        horizontal: !0,
        gap: 2,
        verticalAlign: "center",
        style: {
          width: "auto"
        },
        children: [
          /* @__PURE__ */ s(
            Fe,
            {
              status: t?._diff?.status,
              style: {
                fontSize: 16
              }
            }
          ),
          e && /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
            ue,
            {
              trigger: ["click"],
              overlayStyle: { minWidth: 140 },
              disabled: n,
              menu: {
                items: [
                  {
                    key: "edit",
                    label: "Edit column",
                    onClick: () => {
                      o({
                        type: "edit",
                        columnType: "inputs",
                        item: t
                      });
                    }
                  },
                  {
                    key: "remove",
                    label: "Remove column",
                    onClick: () => {
                      pe.confirm({
                        title: "Remove column",
                        icon: !1,
                        getContainer: r,
                        content: /* @__PURE__ */ Z(O.Paragraph, { children: [
                          "You are about to delete ",
                          /* @__PURE__ */ s("strong", { children: t.name }),
                          " column."
                        ] }),
                        okText: "Remove",
                        okButtonProps: { danger: !0 },
                        onOk: () => l.removeColumn("inputs", t.id)
                      });
                    }
                  }
                ]
              },
              children: /* @__PURE__ */ s($, { title: "Settings", children: /* @__PURE__ */ s(N, { className: "grl-dt-text-secondary", type: "text", size: "small", icon: /* @__PURE__ */ s(Nn, {}) }) })
            }
          ) })
        ]
      }
    )
  ] }) });
}, Ia = ({ configurable: e, disabled: n, schema: t }) => {
  const { setDialog: o, getContainer: r } = Be(), l = le();
  return /* @__PURE__ */ s("div", { className: k(["head-cell"]), children: /* @__PURE__ */ Z(oe, { horizontal: !0, horizontalAlign: "space-between", verticalAlign: "center", children: [
    /* @__PURE__ */ Z(oe, { gap: 0, className: "text-wrapper", verticalAlign: "center", children: [
      t?._diff?.fields?.name?.status === "modified" && /* @__PURE__ */ s(O.Text, { className: k(["span-overflow", "grl-dt-text-primary", "text-removed"]), children: t?._diff?.fields?.name?.previousValue }),
      /* @__PURE__ */ s(O.Text, { className: "span-overflow grl-dt-text-primary", children: t.name }),
      t?._diff?.fields?.field?.status === "modified" && /* @__PURE__ */ s(
        O.Text,
        {
          className: k(["span-overflow", "grl-dt-text-secondary", "text-removed"]),
          type: "secondary",
          style: { fontSize: 12 },
          children: t?._diff?.fields?.field?.previousValue
        }
      ),
      /* @__PURE__ */ s(O.Text, { className: "span-overflow grl-dt-text-secondary", type: "secondary", style: { fontSize: 12 }, children: t.field })
    ] }),
    /* @__PURE__ */ Z(
      oe,
      {
        horizontal: !0,
        gap: 2,
        verticalAlign: "center",
        style: {
          width: "auto"
        },
        children: [
          /* @__PURE__ */ s(
            Fe,
            {
              status: t?._diff?.status,
              style: {
                fontSize: 16
              }
            }
          ),
          e && /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
            ue,
            {
              trigger: ["click"],
              overlayStyle: { minWidth: 140 },
              disabled: n,
              menu: {
                items: [
                  {
                    key: "edit",
                    label: "Edit column",
                    onClick: () => {
                      o({
                        type: "edit",
                        columnType: "outputs",
                        item: t
                      });
                    }
                  },
                  {
                    key: "remove",
                    label: "Remove column",
                    onClick: () => {
                      pe.confirm({
                        title: "Remove column",
                        content: /* @__PURE__ */ Z(O.Paragraph, { children: [
                          "You are about to delete ",
                          /* @__PURE__ */ s("strong", { children: t.name }),
                          " column."
                        ] }),
                        getContainer: r,
                        icon: !1,
                        okText: "Remove",
                        okButtonProps: {
                          danger: !0
                        },
                        onOk: () => l.removeColumn("outputs", t.id)
                      });
                    }
                  }
                ]
              },
              children: /* @__PURE__ */ s($, { title: "Settings", children: /* @__PURE__ */ s(N, { className: "grl-dt-text-secondary", type: "text", size: "small", icon: /* @__PURE__ */ s(Nn, {}) }) })
            }
          ) })
        ]
      }
    )
  ] }) });
}, xt = ({ headerGroup: e }) => /* @__PURE__ */ Z("tr", { children: [
  /* @__PURE__ */ s("th", { colSpan: 1, style: { width: 72 } }),
  e.headers.map((n) => {
    const t = n.getContext(), o = t.header.column.parent?.id, r = I(o).with("inputs", () => "input").with("outputs", () => "output").otherwise(() => {
    }), l = I(t.column.id).with("inputs", () => "input").with("outputs", () => "output").with("_description", () => "description").otherwise(() => {
    });
    return /* @__PURE__ */ Z(
      "th",
      {
        colSpan: n.colSpan,
        "data-self": l,
        "data-parent": r,
        style: {
          width: n.getSize()
        },
        children: [
          !n.isPlaceholder && Gt(n.column.columnDef.header, t),
          n.column.getCanResize() && /* @__PURE__ */ s(
            "div",
            {
              className: k("resizer", n.column.getIsResizing() && "isResizing"),
              onMouseDown: n.getResizeHandler(),
              onTouchStart: n.getResizeHandler()
            }
          )
        ]
      },
      n.id
    );
  })
] }, e.id), Ca = ({ row: e, disabled: n, virtualItem: t, onResize: o }) => {
  const r = X(null), l = le(), { cursor: a, isActive: i } = se(({ cursor: f, activeRules: b }) => ({
    cursor: f,
    isActive: Array.isArray(b) && b.includes(e.id)
  })), [{ isDropping: d, direction: c }, u] = Cn({
    accept: "row",
    collect: (f) => ({
      isDropping: f.isOver({ shallow: !0 }),
      direction: (f.getDifferenceFromInitialOffset()?.y || 0) > 0 ? "down" : "up"
    }),
    drop: (f) => l.swapRows(f.index, e.index)
  }), [{ isDragging: p }, y, g] = kn({
    collect: (f) => ({
      isDragging: f.isDragging()
    }),
    item: () => e,
    type: "row"
  });
  g(u(r)), C(() => {
    if (!r.current)
      return;
    o?.(r.current);
    const f = new ResizeObserver((b) => {
      b.forEach((_) => {
        _.target.hasAttribute("data-virtual-index") && o?.(_.target);
      });
    });
    return f.observe(r.current), () => {
      f.disconnect();
    };
  }, []);
  const { rowValue: m } = se(({ decisionTable: f }) => ({
    rowValue: (f?.rules || [])?.find((b) => b._id === e?.original?._id)
  })), h = V(() => m?._diff, [m]), T = h?.status;
  return /* @__PURE__ */ Z(
    "tr",
    {
      ref: r,
      className: k(
        "table-row",
        d && c === "down" && "dropping-down",
        d && c === "up" && "dropping-up",
        !T && i && "active",
        !T && n && "disabled",
        !T && a?.y === t.index && !n && "selected",
        T && `diff-${T}`
      ),
      style: {
        opacity: p ? 0.5 : 1
      },
      "data-virtual-index": t.index,
      children: [
        /* @__PURE__ */ s(
          "td",
          {
            className: k("sort-handler", !n && "draggable", T && "diff"),
            ref: n ? void 0 : y,
            onContextMenuCapture: () => l.setCursor({ x: "id", y: t.index }),
            children: /* @__PURE__ */ s("div", { className: "text", children: /* @__PURE__ */ s(O, { children: t.index + 1 }) })
          }
        ),
        e.getVisibleCells().map((f) => /* @__PURE__ */ s(
          "td",
          {
            className: k(
              !n && a?.x === f.column.id && a?.y === t.index && "selected",
              h?.fields?.[f?.column?.id]?.status && `diff-${h?.fields?.[f?.column?.id]?.status}`
            ),
            style: { width: f.column.getSize() },
            children: Gt(f.column.columnDef.cell, f.getContext())
          },
          f.id
        ))
      ]
    }
  );
}, mo = (e) => `jdm-editor:decisionTable:columns:${e}`, wt = (e) => {
  if (!e)
    return {};
  try {
    const n = localStorage.getItem(mo(e)), t = JSON.parse(n ?? "{}");
    return pn.record(pn.string(), pn.number()).parse(t);
  } catch {
    return {};
  }
}, ka = ({ id: e, maxHeight: n }) => {
  const { token: t } = de.useToken(), o = le(), { cellRenderer: r } = Bs(({ cellRenderer: f }) => ({ cellRenderer: f })), [l, a] = K(() => wt(e)), { configurable: i, disabled: d, inputs: c, outputs: u, colWidth: p, minColWidth: y } = se(
    ({ configurable: f, disabled: b, minColWidth: _, colWidth: v, decisionTable: D }) => ({
      configurable: f,
      disabled: b,
      minColWidth: _,
      colWidth: v,
      inputs: D.inputs,
      outputs: D.outputs
    })
  ), { rules: g } = se(
    ({ decisionTable: f }) => ({
      rules: f.rules
    }),
    (f, b) => Q(
      f.rules.map((_) => _?._id),
      b.rules.map((_) => _?._id)
    )
  ), m = j.useMemo(
    () => [
      {
        id: "inputs",
        minSize: y,
        size: p,
        enableResizing: !0,
        header: () => /* @__PURE__ */ s(wa, { configurable: i, disabled: d }),
        columns: [
          ...(c || []).map((f) => ({
            accessorKey: f.id,
            id: f.id,
            minSize: y,
            size: p,
            header: () => /* @__PURE__ */ s(Sa, { schema: f, configurable: i, disabled: d })
          }))
        ]
      },
      {
        id: "outputs",
        minSize: y,
        size: y,
        header: () => /* @__PURE__ */ s(Da, { disabled: d, configurable: i }),
        columns: [
          ...(u || []).map((f) => ({
            accessorKey: f.id,
            minSize: y,
            size: p,
            header: () => /* @__PURE__ */ s(Ia, { schema: f, configurable: i, disabled: d })
          }))
        ]
      },
      {
        id: "_description",
        accessorKey: "_description",
        header: () => /* @__PURE__ */ s("div", { className: "head-cell", children: /* @__PURE__ */ s(O.Text, { className: "grl-dt-text-primary", children: "Description" }) }),
        minSize: y,
        size: p
      }
    ],
    [i, d, c, u]
  ), h = ms({
    data: g,
    columnResizeMode: "onChange",
    getRowId: (f) => f._id,
    columns: m,
    getCoreRowModel: gs(),
    defaultColumn: {
      cell: (f) => /* @__PURE__ */ s(va, { context: f })
    },
    meta: {
      getCell: r
    },
    ...e ? {
      state: { columnSizing: l },
      onColumnSizingChange: a
    } : {}
  }), T = X(null);
  return C(() => {
    if (!T.current)
      return;
    const f = new ResizeObserver((b) => {
      for (const _ of b)
        _.target instanceof HTMLDivElement && _.target.style.setProperty("--dt-container-width", `${_.contentRect.width}px`);
    });
    return f.observe(T.current), () => {
      f.disconnect();
    };
  }, []), C(() => {
    e && a(wt(e));
  }, [e]), C(() => {
    e && localStorage.setItem(mo(e), JSON.stringify(l));
  }, [l]), /* @__PURE__ */ Z(
    "div",
    {
      ref: T,
      className: "grl-dt__container",
      style: { maxHeight: n, overflowY: "auto" },
      "data-theme": t.mode,
      children: [
        /* @__PURE__ */ s(Dt, { width: h.getCenterTotalSize(), children: /* @__PURE__ */ s("thead", { children: h.getHeaderGroups().filter((f, b) => b === 0).map((f) => /* @__PURE__ */ s(xt, { headerGroup: f }, f.id)) }) }),
        /* @__PURE__ */ Z(Dt, { width: h.getCenterTotalSize(), children: [
          /* @__PURE__ */ s("thead", { children: h.getHeaderGroups().filter((f, b) => b === 1).map((f) => /* @__PURE__ */ s(xt, { headerGroup: f }, f.id)) }),
          /* @__PURE__ */ s(_a, { children: /* @__PURE__ */ s(za, { tableContainerRef: T, table: h }) }),
          /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { colSpan: c.length + u.length + 2, children: /* @__PURE__ */ s("div", { className: "grl-dt__add-row-wrapper", children: /* @__PURE__ */ s(
            N,
            {
              className: "grl-dt__add-row",
              type: "link",
              disabled: d,
              icon: /* @__PURE__ */ s(Mt, {}),
              onClick: () => o.addRowBelow(),
              children: "Add row"
            }
          ) }) }) }) })
        ] })
      ]
    }
  );
}, za = j.forwardRef(
  ({ table: e, tableContainerRef: n, ...t }, o) => {
    const r = le(), { disabled: l, cursor: a } = se(({ disabled: m, cursor: h }) => ({
      disabled: m,
      cursor: h
    })), { rows: i } = e.getRowModel(), d = hs({
      getScrollElement: () => n.current,
      estimateSize: () => 38,
      indexAttribute: "data-virtual-index",
      count: i.length,
      overscan: 5
    }), c = d.getVirtualItems(), u = d.getTotalSize(), p = c.length > 0 && c?.[0]?.start || 0, y = c.length > 0 ? u - (c?.[c.length - 1]?.end || 0) : 0, g = Ae((m) => {
      l || (m.code === "ArrowUp" && (m.metaKey || m.altKey) && a && r.addRowAbove(a.y), m.code === "ArrowDown" && (m.metaKey || m.altKey) && a && r.addRowBelow(a.y), m.code === "Backspace" && (m.metaKey || m.altKey) && a && r.removeRow(a.y));
    }, []);
    return /* @__PURE__ */ Z("tbody", { ref: o, ...t, onKeyDown: g, children: [
      p > 0 && /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { style: { height: `${p}px` } }) }),
      c.map((m) => {
        const h = i[m.index];
        return /* @__PURE__ */ s(
          Ca,
          {
            virtualItem: m,
            row: h,
            disabled: l,
            onResize: (T) => d.measureElement(T)
          },
          m.key
        );
      }),
      y > 0 && /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { style: { height: `${y}px` } }) })
    ] });
  }
), Dt = ({
  style: e,
  className: n,
  width: t,
  ...o
}) => /* @__PURE__ */ s("table", { className: k("table", n), style: { width: t, ...e }, ...o }), Na = ({
  id: e,
  tableHeight: n,
  mountDialogsOnBody: t = !1,
  manager: o,
  ...r
}) => {
  const { token: l } = de.useToken(), [a, i] = K(!1), d = X(null);
  C(() => {
    i(!0);
  }, []);
  const c = () => d.current, u = V(() => o ? {
    manager: o
  } : {
    backend: zn,
    options: {
      rootElement: d.current
    }
  }, [d.current, o]);
  return /* @__PURE__ */ s("div", { ref: d, className: "grl-dt", style: { background: l.colorBgElevated }, children: d.current && /* @__PURE__ */ s(zt, { ...u, children: /* @__PURE__ */ s(Ms, { children: /* @__PURE__ */ Z(As, { getContainer: t ? void 0 : c, children: [
    /* @__PURE__ */ s(Ta, {}),
    /* @__PURE__ */ s(ka, { id: e, maxHeight: n }),
    /* @__PURE__ */ s(ha, {}),
    /* @__PURE__ */ s(ba, { ...r })
  ] }) }) }) });
}, Pa = "data:image/svg+xml,%3csvg%20id='fi_5968381'%20enable-background='new%200%200%20512%20512'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m50%200h412c27.614%200%2050%2022.386%2050%2050v412c0%2027.614-22.386%2050-50%2050h-412c-27.614%200-50-22.386-50-50v-412c0-27.614%2022.386-50%2050-50z'%20fill='%233178c6'%3e%3c/path%3e%3cpath%20d='m50%200h412c27.614%200%2050%2022.386%2050%2050v412c0%2027.614-22.386%2050-50%2050h-412c-27.614%200-50-22.386-50-50v-412c0-27.614%2022.386-50%2050-50z'%20fill='%233178c6'%3e%3c/path%3e%3cpath%20clip-rule='evenodd'%20d='m316.939%20407.424v50.061c8.138%204.172%2017.763%207.3%2028.875%209.386s22.823%203.129%2035.135%203.129c21.219%200%2044.448-3.035%2062.602-14.784%2018.064-11.691%2026.449-31.14%2026.449-52.172%200-15.637-4.851-30.684-15.807-42.081-16.429-17.091-39.516-24.022-60.255-34.183-10.389-5.09-24.727-12.992-24.727-26.361%200-3.441.887-6.543%202.661-9.307%207.132-11.113%2022.973-13.376%2035.057-13.376%2013.717%200%2028.189%203.071%2040.926%208.76%204.434%201.982%208.529%204.276%2012.285%206.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895%200-23.163%201.278-33.805%203.833s-20.006%206.544-28.093%2011.967c-8.086%205.424-14.476%2012.333-19.171%2020.729-4.695%208.395-7.043%2018.433-7.043%2030.114%200%2014.914%204.304%2027.638%2012.912%2038.172%208.607%2010.533%2021.675%2019.45%2039.204%2026.751%2011.792%204.822%2024.053%209.581%2034.665%2016.739%207.355%204.96%2014.007%2011.877%2014.007%2021.275%200%206.821-3.856%2012.604-9.468%2016.192-8.303%205.308-18.936%206.492-28.563%206.492-10.851%200-21.597-1.903-32.24-5.71-10.641-3.806-20.501-9.516-29.578-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z'%20fill='%23fff'%20fill-rule='evenodd'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", Ra = {
  dark: {
    string: "#CE9178",
    number: "#B5CEA8",
    constants: "#569CD6",
    type: "#3DC9B0",
    error: "#E51400",
    info: "rgba(0, 0, 0, 0.65)"
  },
  light: {
    string: "#A31515",
    number: "#098658",
    constants: "#0000FF",
    type: "#008080",
    error: "#E51400",
    info: "rgba(0, 0, 0, 0.65)"
  }
}, St = ({ lines: e, msSinceRun: n }) => {
  const { token: t } = de.useToken(), o = Ra[t.mode ?? "light"];
  return /* @__PURE__ */ Z("div", { className: "grl-function__debugger__log", children: [
    /* @__PURE__ */ s(
      ue,
      {
        trigger: ["contextMenu"],
        menu: {
          items: [
            {
              key: "copy",
              label: "Copy to clipboard",
              onClick: async () => {
                await Me(e.length === 1 ? e[0] : `[${e.join(", ")}]`), q.success("Copied to clipboard");
              }
            }
          ]
        },
        children: /* @__PURE__ */ s("div", { className: "grl-function__debugger__log__values", children: e.map((r, l) => {
          const a = JSON.parse(r);
          return /* @__PURE__ */ s(
            ws,
            {
              data: a,
              shouldExpandNodeInitially: () => !1,
              labelRenderer: (i, d) => {
                const c = [], u = i?.[0];
                if (u !== "root" && c.push(
                  /* @__PURE__ */ Z(te, { children: [
                    /* @__PURE__ */ s("span", { style: { color: o.constants }, children: u }),
                    ": "
                  ] })
                ), i.length >= 1) {
                  let p = [...i];
                  p.pop(), p = p.reverse(), c.push(Oa(o)(Ea(a, p), d));
                }
                return /* @__PURE__ */ s(te, { children: c });
              },
              valueRenderer: Dn(o),
              theme: {
                base00: t.colorBgElevated,
                base03: t.colorTextBase,
                base0B: t.colorTextBase,
                base0D: t.colorTextBase
              }
            },
            l
          );
        }) })
      }
    ),
    /* @__PURE__ */ s("div", { className: "grl-function__debugger__log__time", children: n !== null && /* @__PURE__ */ Z($, { title: "Time since start of execution of script.", children: [
      n,
      "ms"
    ] }) })
  ] });
}, Oa = (e) => (n, t) => {
  if (t === "Object") {
    const r = Object.entries(n), l = r.reduce(
      (a, [i, d], c) => [
        ...a,
        /* @__PURE__ */ Z("span", { children: [
          i,
          ": ",
          Dn(e)(It(d), d),
          c !== r.length - 1 && /* @__PURE__ */ s(te, { children: ", " })
        ] }, i)
      ],
      []
    );
    return /* @__PURE__ */ Z(te, { children: [
      " {",
      l,
      "}"
    ] });
  } else if (t === "Array") {
    const o = n, r = o.reduce(
      (l, a, i) => [
        ...l,
        /* @__PURE__ */ Z("span", { children: [
          Dn(e)(It(a), a),
          i !== o.length - 1 && /* @__PURE__ */ s(te, { children: ", " })
        ] }, i)
      ],
      []
    );
    return /* @__PURE__ */ Z(te, { children: [
      o.length > 2 ? `(${o.length})` : "",
      " [",
      r,
      "]"
    ] });
  } else
    return null;
}, It = (e) => {
  switch (!0) {
    case Array.isArray(e):
      return `Array(${e.length})`;
    case typeof e == "object":
      return "{...}";
    default:
      return JSON.stringify(e);
  }
}, Dn = (e) => (n, t) => {
  const o = n;
  return typeof t == "string" ? o.startsWith('"Error:') ? /* @__PURE__ */ s("span", { style: { color: e.error }, children: o.slice(1, -1) }) : o.startsWith('"Info:') ? /* @__PURE__ */ s("span", { style: { color: e.info }, children: o.slice(1, -1) }) : /* @__PURE__ */ s("span", { style: { color: e.string }, children: o }) : typeof t == "boolean" ? /* @__PURE__ */ s("span", { style: { color: e.constants }, children: o }) : typeof t == "number" ? /* @__PURE__ */ s("span", { style: { color: e.number }, children: o }) : o;
}, Ea = (e, n) => n.reduce((t, o) => t && t[o] ? t[o] : null, e);
var go = /* @__PURE__ */ ((e) => (e.Console = "Console", e.Libraries = "Libraries", e))(go || {});
const Aa = ({ trace: e, editor: n, libraries: t = [], editorValue: o }) => {
  const r = e?.traceData?.log || [], [l, a] = K(
    "Console"
    /* Console */
  );
  return /* @__PURE__ */ s("div", { className: "grl-function__debugger", children: /* @__PURE__ */ Z("div", { className: "grl-function__debugger__panel", children: [
    /* @__PURE__ */ s("div", { className: "grl-function__debugger__header", children: /* @__PURE__ */ s(
      sn,
      {
        rootClassName: "grl-inline-tabs",
        size: "small",
        style: { width: "100%" },
        items: Object.values(go).map((i) => ({ key: i, label: i })),
        activeKey: l,
        onChange: (i) => a(i),
        tabBarExtraContent: /* @__PURE__ */ s("div", { style: { marginRight: 8 }, children: /* @__PURE__ */ s($, { title: "Format code", placement: "bottomLeft", children: /* @__PURE__ */ s(
          N,
          {
            size: "small",
            type: "text",
            icon: /* @__PURE__ */ s(Vt, {}),
            onClick: () => n?.getAction?.("editor.action.formatDocument")?.run?.()
          }
        ) }) })
      }
    ) }),
    /* @__PURE__ */ s("div", { className: "grl-function__debugger__body", children: I(l).with("Console", () => /* @__PURE__ */ Z(te, { children: [
      r.length === 0 && /* @__PURE__ */ s(
        St,
        {
          lines: ['"Info: Use console.log and run simulation to debug your code."'],
          msSinceRun: null
        }
      ),
      r.map((i, d) => /* @__PURE__ */ s(St, { lines: i.lines, msSinceRun: i.msSinceRun }, d))
    ] })).with("Libraries", () => /* @__PURE__ */ s("div", { className: "grl-function__libraries", children: t.map((i) => /* @__PURE__ */ s(
      Ua,
      {
        lib: i,
        editorValue: o,
        onImport: () => {
          if (!n)
            return;
          const d = `import ${i.importName ?? i.name} from '${i.name}';`;
          n.setValue(d + `
` + n.getValue());
        }
      },
      i.name
    )) })).exhaustive() })
  ] }) });
}, Ua = ({
  lib: e,
  onImport: n,
  editorValue: t
}) => {
  const o = V(() => t ? !t.includes(`from "${e.name}"`) && !t.includes(`from '${e.name}'`) : !0, [e.name, t]);
  return /* @__PURE__ */ Z("div", { className: "grl-function__libraries__item", children: [
    /* @__PURE__ */ s("img", { alt: "TypeScript Library", src: Pa, height: 18 }),
    /* @__PURE__ */ s(O.Text, { strong: !0, children: e.name }),
    /* @__PURE__ */ s(O.Text, { type: "secondary", style: { fontSize: 12, marginTop: 1.5 }, children: e.tagline }),
    /* @__PURE__ */ Z("div", { className: "grl-function__libraries__item__actions", children: [
      /* @__PURE__ */ s($, { title: "Import library", placement: "bottomLeft", children: /* @__PURE__ */ s(N, { type: "text", size: "small", icon: /* @__PURE__ */ s(Pn, {}), disabled: !o, onClick: n }) }),
      /* @__PURE__ */ s($, { title: "Go to documentation", placement: "bottomLeft", children: /* @__PURE__ */ s(
        N,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Lt, {}),
          href: e.documentationUrl,
          target: "_blank",
          disabled: !e.documentationUrl
        }
      ) })
    ] })
  ] }, e.name);
}, ja = (e) => {
  const n = e.toJson();
  return Sn(n);
}, Sn = (e) => I(e).with("String", () => "string").with("Bool", () => "boolean").with("Number", () => "number").with("Null", () => "null").with("Any", () => "any").with({ Object: z.select() }, (n) => `{${Object.entries(n).map(([o, r]) => [o, Sn(r)].join(":")).join(",")}}`).with({ Array: z.select() }, (n) => `${Sn(n)}[]`).with({ Constant: z.select() }, (n) => {
  try {
    return JSON.stringify(n);
  } catch {
    return "any";
  }
}).exhaustive(), ki = ({
  disabled: e = !1,
  disableDebug: n,
  language: t = "javascript",
  defaultValue: o,
  value: r,
  onChange: l,
  trace: a,
  onMonacoReady: i,
  error: d,
  inputData: c,
  previousValue: u,
  libraries: p = fn
}) => {
  const y = Zs(), g = X(!1), { token: m } = de.useToken(), [h, T] = K(), [f, b] = K(), _ = Rn((S) => {
    l?.(S);
  }, 100), [v, D] = K(), [R, w] = K(), P = Qe(() => v?.layout(), 100, { trailing: !0 }), x = Qe(() => R?.layout(), 100, { trailing: !0 });
  return C(() => (window.addEventListener("resize", P), () => window.removeEventListener("resize", P)), [P, v]), C(() => (window.addEventListener("resize", x), () => window.removeEventListener("resize", x)), [x, R]), C(() => {
    y && (y.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: y.languages.typescript.ScriptTarget.ES2020,
      module: y.languages.typescript.ModuleKind.ESNext,
      moduleResolution: y.languages.typescript.ModuleResolutionKind.NodeJs,
      allowSyntheticDefaultImports: !0,
      allowNonTsExtensions: !0,
      allowJs: !0,
      checkJs: !0,
      lib: ["es2023"]
    }), y.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSyntaxValidation: !1,
      noSemanticValidation: !1,
      noSuggestionDiagnostics: !1,
      onlyVisible: !1
    }), y.languages.typescript.javascriptDefaults.setExtraLibs(
      fn.map((S) => ({
        content: `declare module '${S.name}' { ${S.typeDef} }`,
        filePath: S.name
      }))
    ), Object.entries(dr.globals).forEach(([S, H]) => {
      y.languages.typescript.javascriptDefaults.addExtraLib(H, `ts:${S}`);
    }), i?.(y));
  }, [y, p]), C(() => {
    g.current && r !== void 0 && r !== h && T(r);
  }, [r]), C(() => {
    T(r === void 0 ? o : r), g.current = !0;
  }, []), C(() => {
    if (!y) return;
    let S = "any";
    ie() && (S = ja(Ue(c))), y.languages.typescript.javascriptDefaults.addExtraLib(
      `
    type Input = ${S};
    type Output = Promise<any>;
    
    type Handler = (input: Input) => Output; 
    `,
      "ts:input.d.ts"
    );
  }, [y, c]), C(() => {
    if (!y)
      return;
    const S = y.editor.getModels()?.[0];
    S && y.editor.setModelMarkers(S, "gorules", []);
  }, [h, y]), C(() => {
    f && (f.clear(), b(void 0));
  }, [h]), C(() => {
    try {
      if (!d || !y)
        return;
      const S = /Error:(\[.*])?(:?\d+)?(:\d+)?(.*)/s.exec(d.data.source ?? "");
      if (!S || S.length === 0)
        return;
      const H = parseFloat((S?.[2] ?? "").replace(/^:/, "")), F = S?.[4] ?? "";
      if (!H || !F)
        return;
      const M = y.editor.getModels()[0];
      if (!M)
        return;
      const W = new y.Range(
        H,
        M.getLineFirstNonWhitespaceColumn(H),
        H,
        M.getLineLastNonWhitespaceColumn(H)
      );
      y.editor.setModelMarkers(M, "gorules", [
        {
          severity: xs.Error,
          message: F,
          startLineNumber: W.startLineNumber,
          endLineNumber: W.endLineNumber,
          startColumn: W.startColumn,
          endColumn: W.endColumn
        }
      ]);
      const B = y.editor.getEditors()[0];
      if (!B)
        return;
      const ne = B.createDecorationsCollection([
        {
          range: W,
          options: {
            hoverMessage: { value: F },
            isWholeLine: !0,
            className: "grl-function__errorLineContent"
          }
        }
      ]);
      b((ce) => (ce?.clear?.(), ne));
    } catch {
    }
  }, [d, v]), /* @__PURE__ */ s(
    "div",
    {
      className: "grl-function",
      "data-theme": m.mode,
      style: {
        height: "100%",
        "--color-text": m.colorTextBase,
        "--color-background-elevated": m.colorBgElevated,
        "--color-border": m.colorBorder,
        "--line-height": m.lineHeight
      },
      children: /* @__PURE__ */ Z(On, { className: "grl-function__content", direction: "horizontal", autoSaveId: "jdm-editor:function:layout", children: [
        /* @__PURE__ */ s(Re, { defaultSize: 70, minSize: 50, children: u ? /* @__PURE__ */ s(
          qt,
          {
            loading: /* @__PURE__ */ s(he, { size: "large" }),
            language: t,
            original: u,
            modified: h,
            onMount: (S) => w(S),
            theme: m.mode === "dark" ? "vs-dark" : "light",
            height: "100%",
            options: {
              ...Ct,
              readOnly: !0
            }
          }
        ) : /* @__PURE__ */ s(
          ln,
          {
            loading: /* @__PURE__ */ s(he, { size: "large" }),
            language: t,
            value: h,
            onMount: (S) => D(S),
            onChange: (S) => {
              T(S ?? ""), _(S ?? "");
            },
            theme: m.mode === "dark" ? "vs-dark" : "light",
            height: "100%",
            options: {
              ...Ct,
              readOnly: e
            }
          }
        ) }),
        !n && /* @__PURE__ */ Z(te, { children: [
          /* @__PURE__ */ s(hn, {}),
          /* @__PURE__ */ s(Re, { minSize: 25, children: !n && /* @__PURE__ */ s(Aa, { libraries: fn, trace: a, editor: v, editorValue: r }) })
        ] })
      ] })
    }
  );
}, Ct = {
  automaticLayout: !0,
  contextmenu: !1,
  fontSize: 13,
  fontFamily: "var(--mono-font-family)",
  tabSize: 2,
  minimap: { enabled: !1 },
  overviewRulerBorder: !1,
  scrollbar: {
    verticalSliderSize: 4,
    verticalScrollbarSize: 4,
    horizontalScrollbarSize: 4,
    horizontalSliderSize: 4
  }
}, zi = ({
  theme: { mode: e = "light", token: n = {}, ...t } = {},
  prefixCls: o,
  children: r
}) => {
  const l = V(() => {
    switch (e) {
      case "dark":
        return de.darkAlgorithm;
      case "light":
      default:
        return de.defaultAlgorithm;
    }
  }, [e]);
  return /* @__PURE__ */ Z(vo, { prefixCls: o, theme: { ...t, algorithm: l, token: { ...n, mode: e } }, children: [
    /* @__PURE__ */ s(Ma, { mode: e }),
    r
  ] });
}, Ma = ({ mode: e }) => {
  const { token: n } = de.useToken(), t = V(
    () => ({
      "--grl-color-border": n.colorBorder,
      "--grl-color-border-hover": e === "light" ? "#c3c3c3" : "#555555",
      "--grl-color-border-fade": e === "light" ? "#e9e9e9" : "#333333",
      "--grl-color-primary": n.colorPrimary,
      "--grl-color-primary-bg": n.colorPrimaryBg,
      "--grl-color-primary-bg-fade": e === "light" ? "#f7f9fc" : "#141414",
      "--grl-color-primary-bg-hover": n.colorPrimaryBgHover,
      "--grl-color-primary-border": n.colorPrimaryBorder,
      "--grl-color-primary-border-hover": n.colorPrimaryBorderHover,
      "--grl-color-primary-text-hover": n.colorPrimaryTextHover,
      "--grl-color-success": n.colorSuccess,
      "--grl-color-success-bg": n.colorSuccessBg,
      "--grl-color-success-border": n.colorSuccessBorder,
      "--grl-color-error": n.colorError,
      "--grl-color-error-bg": n.colorErrorBg,
      "--grl-color-error-border": n.colorErrorBorder,
      "--grl-color-warning": n.colorWarning,
      "--grl-color-warning-bg": n.colorWarningBg,
      "--grl-color-warning-border": n.colorWarningBorder,
      "--grl-color-warning-text": n.colorWarningText,
      "--grl-color-info": n.colorInfo,
      "--grl-color-info-bg": n.colorInfoBg,
      "--grl-color-info-border": n.colorInfoBorder,
      "--grl-color-info-text": n.colorInfoText,
      "--grl-color-bg-layout": n.colorBgLayout,
      "--grl-color-bg-mask": n.colorBgMask,
      "--grl-color-bg-elevated": n.colorBgElevated,
      "--grl-color-bg-container": n.colorBgContainer,
      "--grl-color-bg-container-disabled": n.colorBgContainerDisabled,
      "--grl-color-bg-text-hover": n.colorBgTextHover,
      "--grl-color-primary-hover": n.colorPrimaryHover,
      "--grl-color-primary-active": n.colorPrimaryActive,
      "--grl-color-text": n.colorText,
      "--grl-color-text-placeholder": n.colorTextPlaceholder,
      "--grl-color-text-base": n.colorTextBase,
      "--grl-color-text-disabled": n.colorTextDisabled,
      "--grl-color-text-secondary": n.colorTextSecondary,
      "--grl-control-outline": n.controlOutline,
      "--grl-primary-color": n.colorPrimary,
      "--grl-primary-color-bg": n.colorPrimaryBg,
      "--grl-font-family": n.fontFamily,
      "--grl-line-height": n.lineHeight,
      "--grl-border-radius": `${n.borderRadius}px`,
      "--grl-decision-table-output": e === "light" ? "#eaeaea" : "#091422",
      "--grl-decision-table-selected-row": e === "light" ? "#f4faff" : "#121720"
    }),
    [n, e]
  ), o = Object.entries(t).map(([r, l]) => `  ${r}: ${l};`).join(`
`);
  return /* @__PURE__ */ s("style", { dangerouslySetInnerHTML: { __html: `:root {
${o}
}` } });
};
export {
  Se as CodeEditor,
  Ri as CustomKind,
  Oi as DECISION_GRAPH_CONTENT_TYPE,
  Si as DecisionGraph,
  Na as DecisionTable,
  Ls as DiffAutosizeTextArea,
  ke as DiffCodeEditor,
  Fe as DiffIcon,
  Un as DiffInput,
  bn as DiffRadio,
  Ks as DiffSelect,
  Xt as DiffSwitch,
  Qs as Expression,
  ki as Function,
  Te as GraphNode,
  Ci as GraphSimulator,
  zi as JdmConfigProvider,
  Ze as NodeColor,
  Ei as NodeKind,
  G as NodeTypeKind,
  co as SimulatorEditor,
  vr as addStrikethrough,
  Ai as anyNodeSchema,
  Di as buildDiffString,
  br as calculateDiffGraph,
  Xr as codemirror,
  Ee as compareAndUnifyLists,
  Ge as compareStringFields,
  Ii as createJdmNode,
  Ui as customNodeSchema,
  Qn as decisionModelSchema,
  ji as decisionNodeSchema,
  Mi as decisionTableSchema,
  Bi as edgeSchema,
  Vi as expressionNodeSchema,
  Fi as functionNodeSchema,
  Ki as inputNodeSchema,
  Yn as nodeSchema,
  Li as outputNodeSchema,
  _r as processEdges,
  Zr as processNodes,
  Hi as switchNodeSchema,
  ee as useDecisionGraphActions,
  ao as useDecisionGraphListeners,
  _e as useDecisionGraphRaw,
  Dr as useDecisionGraphReferences,
  L as useDecisionGraphState,
  Sr as useEdgeDiff,
  Ke as useNodeDiff,
  Ce as useNodeType,
  Xe as usePersistentState,
  Gi as validationSchema
};
//# sourceMappingURL=index.js.map

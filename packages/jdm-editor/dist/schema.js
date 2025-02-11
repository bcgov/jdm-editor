import { z as e } from "zod";
const y = "application/vnd.gorules.decision", o = e.string().default(crypto.randomUUID);
var s = /* @__PURE__ */ ((t) => (t.Input = "inputNode", t.Output = "outputNode", t.DecisionTable = "decisionTableNode", t.Function = "functionNode", t.Expression = "expressionNode", t.Switch = "switchNode", t.Decision = "decisionNode", t))(s || {});
const l = "customNode", n = e.object({
  id: o,
  name: e.string(),
  position: e.object({ x: e.number(), y: e.number() }).default({ x: 0, y: 0 })
}), i = e.object({
  type: e.literal(
    "inputNode"
    /* Input */
  ),
  content: e.object({
    schema: e.string().nullish().transform((t) => t ?? "")
  }).default({
    schema: ""
  })
}).merge(n), r = e.object({
  type: e.literal(
    "outputNode"
    /* Output */
  ),
  content: e.object({
    schema: e.string().nullish().transform((t) => t ?? "")
  }).default({
    schema: ""
  })
}).merge(n), u = e.object({
  type: e.literal(
    "decisionTableNode"
    /* DecisionTable */
  ),
  content: e.object({
    hitPolicy: e.enum(["first", "collect"]).nullish().transform((t) => t ?? "first"),
    rules: e.array(
      e.record(
        e.string(),
        e.string().nullish().transform((t) => t ?? "")
      )
    ).default([]),
    inputs: e.array(
      e.object({
        id: o,
        name: e.string().nullish(),
        field: e.string().nullish(),
        defaultValue: e.string().nullish()
      })
    ),
    outputs: e.array(
      e.object({
        id: o,
        name: e.string(),
        field: e.string(),
        defaultValue: e.string().nullish()
      })
    ),
    passThrough: e.boolean().nullish().transform((t) => t ?? !1),
    inputField: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    outputPath: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    executionMode: e.enum(["single", "loop"]).nullish().transform((t) => t ?? "single")
  })
}).merge(n), a = e.object({
  type: e.literal(
    "functionNode"
    /* Function */
  ),
  content: e.string().or(
    e.object({
      source: e.string().default("")
    })
  ).nullish()
}).merge(n), c = e.object({
  type: e.literal(
    "expressionNode"
    /* Expression */
  ),
  content: e.object({
    expressions: e.array(
      e.object({
        id: o,
        key: e.string().default(""),
        value: e.string().default("")
      })
    ),
    passThrough: e.boolean().nullish().transform((t) => t ?? !1),
    inputField: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    outputPath: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    executionMode: e.enum(["single", "loop"]).nullish().transform((t) => t ?? "single")
  })
}).merge(n), m = e.object({
  type: e.literal(
    "decisionNode"
    /* Decision */
  ),
  content: e.object({
    key: e.string(),
    passThrough: e.boolean().nullish().transform((t) => t ?? !1),
    inputField: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    outputPath: e.string().nullish().default(null).transform((t) => t && t.trim().length > 0 ? t : null),
    executionMode: e.enum(["single", "loop"]).nullish().transform((t) => t ?? "single")
  })
}).merge(n), d = e.object({
  type: e.literal(
    "switchNode"
    /* Switch */
  ),
  content: e.object({
    hitPolicy: e.enum(["first", "collect"]).nullish().transform((t) => t ?? "first"),
    statements: e.array(
      e.object({
        id: o,
        condition: e.string().nullish().transform((t) => t ?? ""),
        isDefault: e.boolean().nullish().transform((t) => t ?? !1)
      })
    )
  })
}).merge(n), h = e.object({
  type: e.literal(l),
  content: e.object({
    kind: e.string(),
    config: e.any()
  })
}).merge(n), g = e.object({
  type: e.string().refine((t) => !Object.values(s).includes(t), {
    message: "Invalid type"
  }),
  content: e.any().nullish()
}).merge(n), f = e.discriminatedUnion("type", [
  m,
  c,
  a,
  u,
  d,
  h,
  i,
  r
]).or(g), p = e.object({
  id: e.string(),
  sourceId: e.string(),
  targetId: e.string(),
  sourceHandle: e.string().nullish(),
  type: e.enum(["edge"])
}), j = e.object({
  inputSchema: e.any().nullish().default(null),
  outputSchema: e.any().nullish().default(null)
}), N = e.object({
  nodes: e.array(f).default([]),
  edges: e.array(p).default([])
});
export {
  l as CustomKind,
  y as DECISION_GRAPH_CONTENT_TYPE,
  s as NodeKind,
  g as anyNodeSchema,
  h as customNodeSchema,
  N as decisionModelSchema,
  m as decisionNodeSchema,
  u as decisionTableSchema,
  p as edgeSchema,
  c as expressionNodeSchema,
  a as functionNodeSchema,
  i as inputNodeSchema,
  f as nodeSchema,
  r as outputNodeSchema,
  d as switchNodeSchema,
  j as validationSchema
};
//# sourceMappingURL=schema.js.map

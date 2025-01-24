import { z } from 'zod';

export declare const anyNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    content?: any;
}, {
    name: string;
    type: string;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: any;
}>;

export declare const CustomKind = "customNode";

export declare const customNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"customNode">;
    content: z.ZodObject<{
        kind: z.ZodString;
        config: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        kind: string;
        config?: any;
    }, {
        kind: string;
        config?: any;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "customNode";
    position: {
        x: number;
        y: number;
    };
    content: {
        kind: string;
        config?: any;
    };
}, {
    name: string;
    type: "customNode";
    content: {
        kind: string;
        config?: any;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const DECISION_GRAPH_CONTENT_TYPE = "application/vnd.gorules.decision";

export declare const decisionModelSchema: z.ZodObject<{
    nodes: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Decision>;
        content: z.ZodObject<{
            key: z.ZodString;
            passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
            inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            key: string;
        }, {
            key: string;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        }>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Decision;
        position: {
            x: number;
            y: number;
        };
        content: {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            key: string;
        };
    }, {
        name: string;
        type: NodeKind.Decision;
        content: {
            key: string;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Expression>;
        content: z.ZodObject<{
            expressions: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                key: z.ZodDefault<z.ZodString>;
                value: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                value: string;
                key: string;
            }, {
                id?: string | undefined;
                value?: string | undefined;
                key?: string | undefined;
            }>, "many">;
            passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
            inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            expressions: {
                id: string;
                value: string;
                key: string;
            }[];
        }, {
            expressions: {
                id?: string | undefined;
                value?: string | undefined;
                key?: string | undefined;
            }[];
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        }>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Expression;
        position: {
            x: number;
            y: number;
        };
        content: {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            expressions: {
                id: string;
                value: string;
                key: string;
            }[];
        };
    }, {
        name: string;
        type: NodeKind.Expression;
        content: {
            expressions: {
                id?: string | undefined;
                value?: string | undefined;
                key?: string | undefined;
            }[];
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Function>;
        content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
            source: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            source: string;
        }, {
            source?: string | undefined;
        }>]>>>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Function;
        position: {
            x: number;
            y: number;
        };
        content?: string | {
            source: string;
        } | null | undefined;
    }, {
        name: string;
        type: NodeKind.Function;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: string | {
            source?: string | undefined;
        } | null | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.DecisionTable>;
        content: z.ZodObject<{
            hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
            rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>>, "many">>;
            inputs: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }, {
                id?: string | undefined;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }>, "many">;
            outputs: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                name: z.ZodString;
                field: z.ZodString;
                defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                field: string;
                defaultValue?: string | null | undefined;
            }, {
                name: string;
                field: string;
                id?: string | undefined;
                defaultValue?: string | null | undefined;
            }>, "many">;
            passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
            inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
            executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            hitPolicy: "first" | "collect";
            rules: Record<string, string>[];
            inputs: {
                id: string;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name: string;
                field: string;
                defaultValue?: string | null | undefined;
            }[];
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
        }, {
            inputs: {
                id?: string | undefined;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                name: string;
                field: string;
                id?: string | undefined;
                defaultValue?: string | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
            rules?: Record<string, string | null | undefined>[] | undefined;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        }>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.DecisionTable;
        position: {
            x: number;
            y: number;
        };
        content: {
            hitPolicy: "first" | "collect";
            rules: Record<string, string>[];
            inputs: {
                id: string;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name: string;
                field: string;
                defaultValue?: string | null | undefined;
            }[];
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
        };
    }, {
        name: string;
        type: NodeKind.DecisionTable;
        content: {
            inputs: {
                id?: string | undefined;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                name: string;
                field: string;
                id?: string | undefined;
                defaultValue?: string | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
            rules?: Record<string, string | null | undefined>[] | undefined;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Switch>;
        content: z.ZodObject<{
            hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
            statements: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                condition: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
                isDefault: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                condition: string;
                isDefault: boolean;
            }, {
                id?: string | undefined;
                condition?: string | null | undefined;
                isDefault?: boolean | null | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            hitPolicy: "first" | "collect";
            statements: {
                id: string;
                condition: string;
                isDefault: boolean;
            }[];
        }, {
            statements: {
                id?: string | undefined;
                condition?: string | null | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
        }>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Switch;
        position: {
            x: number;
            y: number;
        };
        content: {
            hitPolicy: "first" | "collect";
            statements: {
                id: string;
                condition: string;
                isDefault: boolean;
            }[];
        };
    }, {
        name: string;
        type: NodeKind.Switch;
        content: {
            statements: {
                id?: string | undefined;
                condition?: string | null | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"customNode">;
        content: z.ZodObject<{
            kind: z.ZodString;
            config: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            kind: string;
            config?: any;
        }, {
            kind: string;
            config?: any;
        }>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: "customNode";
        position: {
            x: number;
            y: number;
        };
        content: {
            kind: string;
            config?: any;
        };
    }, {
        name: string;
        type: "customNode";
        content: {
            kind: string;
            config?: any;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Input>;
        content: z.ZodDefault<z.ZodObject<{
            schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            schema: string;
        }, {
            schema?: string | null | undefined;
        }>>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Input;
        position: {
            x: number;
            y: number;
        };
        content: {
            schema: string;
        };
    }, {
        name: string;
        type: NodeKind.Input;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: {
            schema?: string | null | undefined;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<NodeKind.Output>;
        content: z.ZodDefault<z.ZodObject<{
            schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            schema: string;
        }, {
            schema?: string | null | undefined;
        }>>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: NodeKind.Output;
        position: {
            x: number;
            y: number;
        };
        content: {
            schema: string;
        };
    }, {
        name: string;
        type: NodeKind.Output;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: {
            schema?: string | null | undefined;
        } | undefined;
    }>]>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodEffects<z.ZodString, string, string>;
        content: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
    }, {
        id: z.ZodDefault<z.ZodString>;
        name: z.ZodString;
        position: z.ZodDefault<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: string;
        position: {
            x: number;
            y: number;
        };
        content?: any;
    }, {
        name: string;
        type: string;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: any;
    }>]>, "many">>;
    edges: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sourceId: z.ZodString;
        targetId: z.ZodString;
        sourceHandle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodEnum<["edge"]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }, {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    nodes: ({
        id: string;
        name: string;
        type: NodeKind.Input;
        position: {
            x: number;
            y: number;
        };
        content: {
            schema: string;
        };
    } | {
        id: string;
        name: string;
        type: NodeKind.Output;
        position: {
            x: number;
            y: number;
        };
        content: {
            schema: string;
        };
    } | {
        id: string;
        name: string;
        type: NodeKind.DecisionTable;
        position: {
            x: number;
            y: number;
        };
        content: {
            hitPolicy: "first" | "collect";
            rules: Record<string, string>[];
            inputs: {
                id: string;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name: string;
                field: string;
                defaultValue?: string | null | undefined;
            }[];
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
        };
    } | {
        id: string;
        name: string;
        type: NodeKind.Function;
        position: {
            x: number;
            y: number;
        };
        content?: string | {
            source: string;
        } | null | undefined;
    } | {
        id: string;
        name: string;
        type: NodeKind.Expression;
        position: {
            x: number;
            y: number;
        };
        content: {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            expressions: {
                id: string;
                value: string;
                key: string;
            }[];
        };
    } | {
        id: string;
        name: string;
        type: NodeKind.Decision;
        position: {
            x: number;
            y: number;
        };
        content: {
            passThrough: boolean;
            inputField: string | null;
            outputPath: string | null;
            executionMode: "single" | "loop";
            key: string;
        };
    } | {
        id: string;
        name: string;
        type: NodeKind.Switch;
        position: {
            x: number;
            y: number;
        };
        content: {
            hitPolicy: "first" | "collect";
            statements: {
                id: string;
                condition: string;
                isDefault: boolean;
            }[];
        };
    } | {
        id: string;
        name: string;
        type: "customNode";
        position: {
            x: number;
            y: number;
        };
        content: {
            kind: string;
            config?: any;
        };
    } | {
        id: string;
        name: string;
        type: string;
        position: {
            x: number;
            y: number;
        };
        content?: any;
    })[];
    edges: {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }[];
}, {
    nodes?: ({
        name: string;
        type: NodeKind.Input;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: {
            schema?: string | null | undefined;
        } | undefined;
    } | {
        name: string;
        type: NodeKind.Output;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: {
            schema?: string | null | undefined;
        } | undefined;
    } | {
        name: string;
        type: NodeKind.DecisionTable;
        content: {
            inputs: {
                id?: string | undefined;
                name?: string | null | undefined;
                field?: string | null | undefined;
                defaultValue?: string | null | undefined;
            }[];
            outputs: {
                name: string;
                field: string;
                id?: string | undefined;
                defaultValue?: string | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
            rules?: Record<string, string | null | undefined>[] | undefined;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: NodeKind.Function;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: string | {
            source?: string | undefined;
        } | null | undefined;
    } | {
        name: string;
        type: NodeKind.Expression;
        content: {
            expressions: {
                id?: string | undefined;
                value?: string | undefined;
                key?: string | undefined;
            }[];
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: NodeKind.Decision;
        content: {
            key: string;
            passThrough?: boolean | null | undefined;
            inputField?: string | null | undefined;
            outputPath?: string | null | undefined;
            executionMode?: "single" | "loop" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: NodeKind.Switch;
        content: {
            statements: {
                id?: string | undefined;
                condition?: string | null | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | null | undefined;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: "customNode";
        content: {
            kind: string;
            config?: any;
        };
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: string;
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
        content?: any;
    })[] | undefined;
    edges?: {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }[] | undefined;
}>;

export declare const decisionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Decision>;
    content: z.ZodObject<{
        key: z.ZodString;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        key: string;
    }, {
        key: string;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Decision;
    position: {
        x: number;
        y: number;
    };
    content: {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        key: string;
    };
}, {
    name: string;
    type: NodeKind.Decision;
    content: {
        key: string;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const decisionTableSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.DecisionTable>;
    content: z.ZodObject<{
        hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
        rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>>, "many">>;
        inputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }, {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }>, "many">;
        outputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodString;
            field: z.ZodString;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }, {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }>, "many">;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        hitPolicy: "first" | "collect";
        rules: Record<string, string>[];
        inputs: {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }[];
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
    }, {
        inputs: {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
        rules?: Record<string, string | null | undefined>[] | undefined;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.DecisionTable;
    position: {
        x: number;
        y: number;
    };
    content: {
        hitPolicy: "first" | "collect";
        rules: Record<string, string>[];
        inputs: {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }[];
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
    };
}, {
    name: string;
    type: NodeKind.DecisionTable;
    content: {
        inputs: {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
        rules?: Record<string, string | null | undefined>[] | undefined;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const edgeSchema: z.ZodObject<{
    id: z.ZodString;
    sourceId: z.ZodString;
    targetId: z.ZodString;
    sourceHandle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodEnum<["edge"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "edge";
    sourceId: string;
    targetId: string;
    sourceHandle?: string | null | undefined;
}, {
    id: string;
    type: "edge";
    sourceId: string;
    targetId: string;
    sourceHandle?: string | null | undefined;
}>;

export declare const expressionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Expression>;
    content: z.ZodObject<{
        expressions: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            key: z.ZodDefault<z.ZodString>;
            value: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            value: string;
            key: string;
        }, {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }>, "many">;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        expressions: {
            id: string;
            value: string;
            key: string;
        }[];
    }, {
        expressions: {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }[];
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Expression;
    position: {
        x: number;
        y: number;
    };
    content: {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        expressions: {
            id: string;
            value: string;
            key: string;
        }[];
    };
}, {
    name: string;
    type: NodeKind.Expression;
    content: {
        expressions: {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }[];
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const functionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Function>;
    content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
        source: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: string;
    }, {
        source?: string | undefined;
    }>]>>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Function;
    position: {
        x: number;
        y: number;
    };
    content?: string | {
        source: string;
    } | null | undefined;
}, {
    name: string;
    type: NodeKind.Function;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: string | {
        source?: string | undefined;
    } | null | undefined;
}>;

export declare const inputNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Input>;
    content: z.ZodDefault<z.ZodObject<{
        schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | null | undefined;
    }>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Input;
    position: {
        x: number;
        y: number;
    };
    content: {
        schema: string;
    };
}, {
    name: string;
    type: NodeKind.Input;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: {
        schema?: string | null | undefined;
    } | undefined;
}>;

export declare enum NodeKind {
    Input = "inputNode",
    Output = "outputNode",
    DecisionTable = "decisionTableNode",
    Function = "functionNode",
    Expression = "expressionNode",
    Switch = "switchNode",
    Decision = "decisionNode"
}

export declare const nodeSchema: z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Decision>;
    content: z.ZodObject<{
        key: z.ZodString;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        key: string;
    }, {
        key: string;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Decision;
    position: {
        x: number;
        y: number;
    };
    content: {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        key: string;
    };
}, {
    name: string;
    type: NodeKind.Decision;
    content: {
        key: string;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Expression>;
    content: z.ZodObject<{
        expressions: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            key: z.ZodDefault<z.ZodString>;
            value: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            value: string;
            key: string;
        }, {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }>, "many">;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        expressions: {
            id: string;
            value: string;
            key: string;
        }[];
    }, {
        expressions: {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }[];
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Expression;
    position: {
        x: number;
        y: number;
    };
    content: {
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
        expressions: {
            id: string;
            value: string;
            key: string;
        }[];
    };
}, {
    name: string;
    type: NodeKind.Expression;
    content: {
        expressions: {
            id?: string | undefined;
            value?: string | undefined;
            key?: string | undefined;
        }[];
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Function>;
    content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
        source: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: string;
    }, {
        source?: string | undefined;
    }>]>>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Function;
    position: {
        x: number;
        y: number;
    };
    content?: string | {
        source: string;
    } | null | undefined;
}, {
    name: string;
    type: NodeKind.Function;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: string | {
        source?: string | undefined;
    } | null | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.DecisionTable>;
    content: z.ZodObject<{
        hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
        rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>>, "many">>;
        inputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }, {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }>, "many">;
        outputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodString;
            field: z.ZodString;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }, {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }>, "many">;
        passThrough: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        inputField: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        outputPath: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>, string | null, string | null | undefined>;
        executionMode: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["single", "loop"]>>>, "single" | "loop", "single" | "loop" | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        hitPolicy: "first" | "collect";
        rules: Record<string, string>[];
        inputs: {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }[];
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
    }, {
        inputs: {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
        rules?: Record<string, string | null | undefined>[] | undefined;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.DecisionTable;
    position: {
        x: number;
        y: number;
    };
    content: {
        hitPolicy: "first" | "collect";
        rules: Record<string, string>[];
        inputs: {
            id: string;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name: string;
            field: string;
            defaultValue?: string | null | undefined;
        }[];
        passThrough: boolean;
        inputField: string | null;
        outputPath: string | null;
        executionMode: "single" | "loop";
    };
}, {
    name: string;
    type: NodeKind.DecisionTable;
    content: {
        inputs: {
            id?: string | undefined;
            name?: string | null | undefined;
            field?: string | null | undefined;
            defaultValue?: string | null | undefined;
        }[];
        outputs: {
            name: string;
            field: string;
            id?: string | undefined;
            defaultValue?: string | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
        rules?: Record<string, string | null | undefined>[] | undefined;
        passThrough?: boolean | null | undefined;
        inputField?: string | null | undefined;
        outputPath?: string | null | undefined;
        executionMode?: "single" | "loop" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Switch>;
    content: z.ZodObject<{
        hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
        statements: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            condition: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
            isDefault: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            condition: string;
            isDefault: boolean;
        }, {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        hitPolicy: "first" | "collect";
        statements: {
            id: string;
            condition: string;
            isDefault: boolean;
        }[];
    }, {
        statements: {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Switch;
    position: {
        x: number;
        y: number;
    };
    content: {
        hitPolicy: "first" | "collect";
        statements: {
            id: string;
            condition: string;
            isDefault: boolean;
        }[];
    };
}, {
    name: string;
    type: NodeKind.Switch;
    content: {
        statements: {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"customNode">;
    content: z.ZodObject<{
        kind: z.ZodString;
        config: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        kind: string;
        config?: any;
    }, {
        kind: string;
        config?: any;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: "customNode";
    position: {
        x: number;
        y: number;
    };
    content: {
        kind: string;
        config?: any;
    };
}, {
    name: string;
    type: "customNode";
    content: {
        kind: string;
        config?: any;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Input>;
    content: z.ZodDefault<z.ZodObject<{
        schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | null | undefined;
    }>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Input;
    position: {
        x: number;
        y: number;
    };
    content: {
        schema: string;
    };
}, {
    name: string;
    type: NodeKind.Input;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: {
        schema?: string | null | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Output>;
    content: z.ZodDefault<z.ZodObject<{
        schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | null | undefined;
    }>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Output;
    position: {
        x: number;
        y: number;
    };
    content: {
        schema: string;
    };
}, {
    name: string;
    type: NodeKind.Output;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: {
        schema?: string | null | undefined;
    } | undefined;
}>]>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    content?: any;
}, {
    name: string;
    type: string;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: any;
}>]>;

export declare const outputNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Output>;
    content: z.ZodDefault<z.ZodObject<{
        schema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | null | undefined;
    }>>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Output;
    position: {
        x: number;
        y: number;
    };
    content: {
        schema: string;
    };
}, {
    name: string;
    type: NodeKind.Output;
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
    content?: {
        schema?: string | null | undefined;
    } | undefined;
}>;

export declare const switchNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<NodeKind.Switch>;
    content: z.ZodObject<{
        hitPolicy: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEnum<["first", "collect"]>>>, "first" | "collect", "first" | "collect" | null | undefined>;
        statements: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            condition: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
            isDefault: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>, boolean, boolean | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            condition: string;
            isDefault: boolean;
        }, {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        hitPolicy: "first" | "collect";
        statements: {
            id: string;
            condition: string;
            isDefault: boolean;
        }[];
    }, {
        statements: {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
    }>;
}, {
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    position: z.ZodDefault<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    type: NodeKind.Switch;
    position: {
        x: number;
        y: number;
    };
    content: {
        hitPolicy: "first" | "collect";
        statements: {
            id: string;
            condition: string;
            isDefault: boolean;
        }[];
    };
}, {
    name: string;
    type: NodeKind.Switch;
    content: {
        statements: {
            id?: string | undefined;
            condition?: string | null | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | null | undefined;
    };
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const validationSchema: z.ZodObject<{
    inputSchema: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
    outputSchema: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
}, "strip", z.ZodTypeAny, {
    inputSchema?: any;
    outputSchema?: any;
}, {
    inputSchema?: any;
    outputSchema?: any;
}>;

export { }


declare module 'antd/es/theme/interface/alias' {
    interface AliasToken {
        mode: 'dark' | 'light';
    }
}


declare module '@gorules/zen-engine-wasm' {
    interface VariableType {
        __hash: string;
    }
}


declare global {
    interface Window {
        monaco?: Monaco;
    }
}

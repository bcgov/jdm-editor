import { default as default_2 } from 'react';
import { DragDropManager } from 'dnd-core';
import { Edge } from 'reactflow';
import { EdgeChange } from 'reactflow';
import { EditorState } from '@codemirror/state';
import { Extension } from '@codemirror/state';
import { HandleProps } from 'reactflow';
import { linter } from '@codemirror/lint';
import { MenuProps } from 'antd';
import { Monaco } from '@monaco-editor/react';
import { monacoEditor } from 'monaco-editor';
import { MutableRefObject } from 'react';
import { Node as Node_2 } from 'reactflow';
import { NodeChange } from 'reactflow';
import { NodeProps } from 'reactflow';
import { ProOptions } from 'reactflow';
import { ReactFlowInstance } from 'reactflow';
import { RefObject } from 'react';
import { StoreApi } from 'zustand';
import { ThemeConfig as ThemeConfig_2 } from 'antd';
import { UseBoundStore } from 'zustand';
import { useEdgesState } from 'reactflow';
import { useNodesState } from 'reactflow';
import { WritableDraft } from 'immer/src/types/types-external';
import { WritableDraft as WritableDraft_2 } from 'immer/src/internal';
import { z } from 'zod';

export declare const anyNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
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
    name: string;
    id: string;
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
    content?: any;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

declare type BaseNode<Component extends string, InputName extends string, Inputs extends InputSchema<InputName>[], NodeData extends object = CreateDynamicType<Inputs>> = {
    kind: Component;
    icon?: default_2.ReactNode;
    color?: string;
    displayName: string;
    shortDescription?: string;
    group?: string;
    handleLeft?: boolean;
    handleRight?: boolean;
    inputs?: [...Inputs];
    generateNode?: CustomNodeSpecification<NodeData, Component>['generateNode'];
    renderNode?: CustomNodeSpecification<NodeData, Component>['renderNode'];
    onNodeAdd?: CustomNodeSpecification<NodeData, Component>['onNodeAdd'];
};

declare type BoolInput = {
    control: 'bool';
    label?: string;
};

export declare const CodeEditor: default_2.ForwardRefExoticComponent<{
    maxRows?: number | undefined;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onStateChange?: ((state: EditorState) => void) | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    type?: "unary" | "standard" | "template" | undefined;
    fullHeight?: boolean | undefined;
    noStyle?: boolean | undefined;
    extension?: ((params: ExtensionParams) => Extension) | undefined;
} & Omit<default_2.HTMLAttributes<HTMLDivElement>, "disabled" | "onChange"> & default_2.RefAttributes<HTMLDivElement>>;

export declare type CodeEditorProps = {
    maxRows?: number;
    value?: string;
    onChange?: (value: string) => void;
    onStateChange?: (state: EditorState) => void;
    placeholder?: string;
    disabled?: boolean;
    type?: 'unary' | 'standard' | 'template';
    fullHeight?: boolean;
    noStyle?: boolean;
    extension?: (params: ExtensionParams) => Extension;
} & Omit<default_2.HTMLAttributes<HTMLDivElement>, 'disabled' | 'onChange'>;

export declare const codemirror: {
    linter: typeof linter;
};

declare type ControlToType<T> = T extends keyof InputTypeMap ? InputTypeMap[T] : never;

declare type CreateDynamicType<T extends ReadonlyArray<unknown>, Result = {}> = T extends readonly [infer First, ...infer Rest] ? First extends {
    control: infer Control extends string;
    name: infer Name extends string;
} ? CreateDynamicType<Rest, Result & SplitPath<Name, ControlToType<Control>>> : Result : Result;

export declare const createJdmNode: <Component extends string, InputName extends string, Inputs extends InputSchema<InputName>[]>(n: BaseNode<Component, InputName, Inputs>) => CustomNodeSpecification<any, Component>;

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
    name: string;
    id: string;
    content: {
        kind: string;
        config?: any;
    };
    type: "customNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        kind: string;
        config?: any;
    };
    type: "customNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare type CustomNodeSpecification<Data extends object, Component extends string> = {
    kind: Component;
    color?: string;
    icon?: default_2.ReactNode;
    displayName: string;
    group?: string;
    documentationUrl?: string;
    shortDescription?: string;
    generateNode: (params: GenerateNodeParams_2) => Omit<DecisionNode<Data>, 'position' | 'id' | 'type' | 'content'> & {
        config?: Data;
    };
    renderNode: default_2.FC<MinimalNodeProps & {
        specification: MinimalNodeSpecification;
    }>;
    onNodeAdd?: (node: DecisionNode<{
        kind: Component;
        config: Data;
    }>) => Promise<DecisionNode<{
        kind: Component;
        config: Data;
    }>>;
};

export declare const DECISION_GRAPH_CONTENT_TYPE = "application/vnd.gorules.decision";

export declare type DecisionEdge = {
    id: string;
    name?: string;
    sourceId: string;
    targetId: string;
    sourceHandle?: string;
    targetHandle?: string;
    type?: string;
};

export declare const DecisionGraph: default_2.ForwardRefExoticComponent<{
    manager?: DragDropManager | undefined;
} & DecisionGraphWrapperProps & DecisionGraphEmptyType & default_2.RefAttributes<{
    setDecisionGraph: (val: DecisionGraphType) => void;
    handleNodesChange: (nodesChange: NodeChange[]) => void;
    handleEdgesChange: (edgesChange: EdgeChange[]) => void;
    setNodes: (nodes: DecisionNode<any>[]) => void;
    addNodes: (nodes: DecisionNode<any>[]) => void;
    updateNode: (id: string, updater: (draft: WritableDraft_2<DecisionNode<any>>) => WritableDraft_2<DecisionNode<any>>) => void;
    removeNodes: (ids: string[]) => void;
    duplicateNodes: (ids: string[]) => void;
    copyNodes: (ids: string[]) => void;
    pasteNodes: () => void;
    setEdges: (edges: DecisionEdge[]) => void;
    addEdges: (edge: DecisionEdge[]) => void;
    removeEdges: (ids: string[]) => void;
    removeEdgeByHandleId: (handleId: string) => void;
    setHoveredEdgeId: (edgeId: string | null) => void;
    closeTab: (id: string) => void;
    openTab: (id: string) => void;
    setActivePanel: (panel?: string | undefined) => void;
    setCompactMode: (mode: boolean) => void;
    toggleCompactMode: () => void;
}>>;

declare type DecisionGraphContextProps = {};

declare type DecisionGraphEmptyType = {
    id?: string;
    defaultValue?: DecisionGraphType;
    value?: DecisionGraphType;
    disabled?: boolean;
    configurable?: boolean;
    components?: DecisionGraphStoreType['state']['components'];
    customNodes?: DecisionGraphStoreType['state']['customNodes'];
    name?: DecisionGraphStoreType['state']['name'];
    defaultActivePanel?: string;
    panels?: DecisionGraphStoreType['state']['panels'];
    onPanelsChange?: DecisionGraphStoreType['listeners']['onPanelsChange'];
    inputsSchema?: SchemaSelectProps_2[];
    outputsSchema?: SchemaSelectProps_2[];
    simulate?: DecisionGraphStoreType['state']['simulate'];
    onChange?: DecisionGraphStoreType['listeners']['onChange'];
    onReactFlowInit?: DecisionGraphStoreType['listeners']['onReactFlowInit'];
    onCodeExtension?: DecisionGraphStoreType['listeners']['onCodeExtension'];
    onFunctionReady?: DecisionGraphStoreType['listeners']['onFunctionReady'];
};

export declare type DecisionGraphProps = {
    manager?: DragDropManager;
} & DecisionGraphWrapperProps & DecisionGraphContextProps & DecisionGraphEmptyType;

export declare type DecisionGraphRef = GraphRef;

declare type DecisionGraphStoreType = {
    state: {
        id?: string;
        components: NodeSpecification[];
        disabled?: boolean;
        configurable?: boolean;
        decisionGraph: DecisionGraphType;
        hoveredEdgeId: string | null;
        openTabs: string[];
        activeTab: string;
        name: string;
        customNodes: CustomNodeSpecification<object, string>[];
        panels?: PanelType[];
        activePanel?: string;
        onPanelsChange?: (val?: string) => void;
        inputsSchema?: SchemaSelectProps[];
        outputsSchema?: SchemaSelectProps[];
        simulate?: Simulation;
        compactMode?: boolean;
    };
    references: {
        nodesState: MutableRefObject<ReturnType<typeof useNodesState>>;
        edgesState: MutableRefObject<ReturnType<typeof useEdgesState>>;
        graphClipboard: MutableRefObject<ReturnType<typeof useGraphClipboard>>;
    };
    actions: {
        setDecisionGraph: (val: DecisionGraphType) => void;
        handleNodesChange: (nodesChange: NodeChange[]) => void;
        handleEdgesChange: (edgesChange: EdgeChange[]) => void;
        setNodes: (nodes: DecisionNode[]) => void;
        addNodes: (nodes: DecisionNode[]) => void;
        updateNode: (id: string, updater: DraftUpdateCallback<DecisionNode>) => void;
        removeNodes: (ids: string[]) => void;
        duplicateNodes: (ids: string[]) => void;
        copyNodes: (ids: string[]) => void;
        pasteNodes: () => void;
        setEdges: (edges: DecisionEdge[]) => void;
        addEdges: (edge: DecisionEdge[]) => void;
        removeEdges: (ids: string[]) => void;
        removeEdgeByHandleId: (handleId: string) => void;
        setHoveredEdgeId: (edgeId: string | null) => void;
        closeTab: (id: string) => void;
        openTab: (id: string) => void;
        setActivePanel: (panel?: string) => void;
        setCompactMode: (mode: boolean) => void;
        toggleCompactMode: () => void;
    };
    listeners: {
        onChange?: (val: DecisionGraphType) => void;
        onPanelsChange?: (val?: string) => void;
        onReactFlowInit?: (instance: ReactFlowInstance) => void;
        onCodeExtension?: CodeEditorProps['extension'];
        onFunctionReady?: (monaco: Monaco) => void;
    };
};

export declare type DecisionGraphType = {
    nodes: DecisionNode[];
    edges: DecisionEdge[];
};

declare type DecisionGraphWrapperProps = {
    reactFlowProOptions?: ProOptions;
    defaultOpenMenu?: GraphAsideProps['defaultOpenMenu'];
};

export declare const decisionModelSchema: z.ZodObject<{
    nodes: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"decisionNode">;
        content: z.ZodObject<{
            key: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            key: string;
        }, {
            key: string;
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
        name: string;
        id: string;
        content: {
            key: string;
        };
        type: "decisionNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        content: {
            key: string;
        };
        type: "decisionNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"expressionNode">;
        content: z.ZodObject<{
            expressions: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                key: z.ZodDefault<z.ZodString>;
                value: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                key: string;
                id: string;
            }, {
                value?: string | undefined;
                key?: string | undefined;
                id?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            expressions: {
                value: string;
                key: string;
                id: string;
            }[];
        }, {
            expressions: {
                value?: string | undefined;
                key?: string | undefined;
                id?: string | undefined;
            }[];
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
        name: string;
        id: string;
        content: {
            expressions: {
                value: string;
                key: string;
                id: string;
            }[];
        };
        type: "expressionNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        content: {
            expressions: {
                value?: string | undefined;
                key?: string | undefined;
                id?: string | undefined;
            }[];
        };
        type: "expressionNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"functionNode">;
        content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
            source: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            source: string;
        }, {
            source: string;
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
        name: string;
        id: string;
        type: "functionNode";
        position: {
            x: number;
            y: number;
        };
        content?: string | {
            source: string;
        } | null | undefined;
    }, {
        name: string;
        type: "functionNode";
        id?: string | undefined;
        content?: string | {
            source: string;
        } | null | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"decisionTableNode">;
        content: z.ZodObject<{
            hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
            rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
            inputs: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }, {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }>, "many">;
            outputs: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }, {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            rules: Record<string, string>[];
            hitPolicy: "first" | "collect";
            inputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
        }, {
            inputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            rules?: Record<string, string>[] | undefined;
            hitPolicy?: "first" | "collect" | undefined;
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
        name: string;
        id: string;
        content: {
            rules: Record<string, string>[];
            hitPolicy: "first" | "collect";
            inputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
        };
        type: "decisionTableNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        content: {
            inputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            rules?: Record<string, string>[] | undefined;
            hitPolicy?: "first" | "collect" | undefined;
        };
        type: "decisionTableNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"switchNode">;
        content: z.ZodObject<{
            hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
            statements: z.ZodArray<z.ZodObject<{
                id: z.ZodDefault<z.ZodString>;
                condition: z.ZodDefault<z.ZodString>;
                isDefault: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                condition: string;
                isDefault: boolean | null;
            }, {
                id?: string | undefined;
                condition?: string | undefined;
                isDefault?: boolean | null | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            statements: {
                id: string;
                condition: string;
                isDefault: boolean | null;
            }[];
            hitPolicy: "first" | "collect";
        }, {
            statements: {
                id?: string | undefined;
                condition?: string | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | undefined;
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
        name: string;
        id: string;
        content: {
            statements: {
                id: string;
                condition: string;
                isDefault: boolean | null;
            }[];
            hitPolicy: "first" | "collect";
        };
        type: "switchNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        content: {
            statements: {
                id?: string | undefined;
                condition?: string | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | undefined;
        };
        type: "switchNode";
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
        name: string;
        id: string;
        content: {
            kind: string;
            config?: any;
        };
        type: "customNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        content: {
            kind: string;
            config?: any;
        };
        type: "customNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"inputNode">;
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
        name: string;
        id: string;
        type: "inputNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        type: "inputNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"outputNode">;
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
        name: string;
        id: string;
        type: "outputNode";
        position: {
            x: number;
            y: number;
        };
    }, {
        name: string;
        type: "outputNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    }>]>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodString;
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
        name: string;
        id: string;
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
        content?: any;
        position?: {
            x: number;
            y: number;
        } | undefined;
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
    edges: {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }[];
    nodes: ({
        name: string;
        id: string;
        type: "inputNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        type: "outputNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        content: {
            rules: Record<string, string>[];
            hitPolicy: "first" | "collect";
            inputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                id: string;
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                field?: string | null | undefined;
            }[];
        };
        type: "decisionTableNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        type: "functionNode";
        position: {
            x: number;
            y: number;
        };
        content?: string | {
            source: string;
        } | null | undefined;
    } | {
        name: string;
        id: string;
        content: {
            expressions: {
                value: string;
                key: string;
                id: string;
            }[];
        };
        type: "expressionNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        content: {
            key: string;
        };
        type: "decisionNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        content: {
            statements: {
                id: string;
                condition: string;
                isDefault: boolean | null;
            }[];
            hitPolicy: "first" | "collect";
        };
        type: "switchNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        content: {
            kind: string;
            config?: any;
        };
        type: "customNode";
        position: {
            x: number;
            y: number;
        };
    } | {
        name: string;
        id: string;
        type: string;
        position: {
            x: number;
            y: number;
        };
        content?: any;
    })[];
}, {
    edges?: {
        id: string;
        type: "edge";
        sourceId: string;
        targetId: string;
        sourceHandle?: string | null | undefined;
    }[] | undefined;
    nodes?: ({
        name: string;
        type: "inputNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: "outputNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        content: {
            inputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            outputs: {
                name?: string | null | undefined;
                defaultValue?: string | null | undefined;
                id?: string | undefined;
                field?: string | null | undefined;
            }[];
            rules?: Record<string, string>[] | undefined;
            hitPolicy?: "first" | "collect" | undefined;
        };
        type: "decisionTableNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: "functionNode";
        id?: string | undefined;
        content?: string | {
            source: string;
        } | null | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        content: {
            expressions: {
                value?: string | undefined;
                key?: string | undefined;
                id?: string | undefined;
            }[];
        };
        type: "expressionNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        content: {
            key: string;
        };
        type: "decisionNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        content: {
            statements: {
                id?: string | undefined;
                condition?: string | undefined;
                isDefault?: boolean | null | undefined;
            }[];
            hitPolicy?: "first" | "collect" | undefined;
        };
        type: "switchNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        content: {
            kind: string;
            config?: any;
        };
        type: "customNode";
        id?: string | undefined;
        position?: {
            x: number;
            y: number;
        } | undefined;
    } | {
        name: string;
        type: string;
        id?: string | undefined;
        content?: any;
        position?: {
            x: number;
            y: number;
        } | undefined;
    })[] | undefined;
}>;

export declare type DecisionNode<T = any> = {
    id: string;
    name: string;
    description?: string;
    type?: string;
    content?: T;
    position: Position;
};

declare type DecisionNodeProps = {
    name?: string;
    icon: default_2.ReactNode;
    type: default_2.ReactNode;
    disabled?: boolean;
    isSelected?: boolean;
    children?: default_2.ReactNode;
    actions?: default_2.ReactNode[];
    status?: 'error' | 'success';
    noBodyPadding?: boolean;
    color?: 'primary' | 'secondary' | string;
    menuItems?: MenuProps['items'];
    onNameChange?: (name: string) => void;
    compactMode?: boolean;
};

export declare const decisionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"decisionNode">;
    content: z.ZodObject<{
        key: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        key: string;
    }, {
        key: string;
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
    name: string;
    id: string;
    content: {
        key: string;
    };
    type: "decisionNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        key: string;
    };
    type: "decisionNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare const DecisionTable: default_2.FC<DecisionTableProps>;

declare type DecisionTableContextProps = {};

declare type DecisionTableEmptyType = {
    id?: string;
    defaultValue?: DecisionTableType;
    value?: DecisionTableType;
    disabled?: boolean;
    configurable?: boolean;
    disableHitPolicy?: boolean;
    activeRules?: string[];
    cellRenderer?: (props: TableCellProps) => JSX.Element | null | undefined;
    inputsSchema?: SchemaSelectProps[];
    outputsSchema?: SchemaSelectProps[];
    minColWidth?: number;
    colWidth?: number;
    onChange?: (val: DecisionTableType) => void;
};

export declare type DecisionTableProps = {
    tableHeight: string | number;
    mountDialogsOnBody?: boolean;
    manager?: DragDropManager;
} & DecisionTableContextProps & DecisionTableEmptyType;

export declare const decisionTableSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"decisionTableNode">;
    content: z.ZodObject<{
        hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
        rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        inputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }>, "many">;
        outputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        rules: Record<string, string>[];
        hitPolicy: "first" | "collect";
        inputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
    }, {
        inputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        rules?: Record<string, string>[] | undefined;
        hitPolicy?: "first" | "collect" | undefined;
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
    name: string;
    id: string;
    content: {
        rules: Record<string, string>[];
        hitPolicy: "first" | "collect";
        inputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
    };
    type: "decisionTableNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        inputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        rules?: Record<string, string>[] | undefined;
        hitPolicy?: "first" | "collect" | undefined;
    };
    type: "decisionTableNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare type DecisionTableType = {
    hitPolicy: HitPolicy | string;
    inputs: TableSchemaItem[];
    outputs: TableSchemaItem[];
    rules: Record<string, string>[];
};

declare type DraftUpdateCallback<T> = (draft: WritableDraft<T>) => WritableDraft<T>;

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

declare type ExposedStore<T> = UseBoundStore<StoreApi<T>> & {
    setState: (partial: Partial<T>) => void;
};

export declare const Expression: default_2.FC<ExpressionProps>;

declare type ExpressionControllerProps = {
    configurable?: boolean;
    disabled?: boolean;
    defaultValue?: ExpressionEntry[];
    value?: ExpressionEntry[];
    onChange?: (value: ExpressionEntry[]) => void;
};

declare type ExpressionEntry = {
    id: string;
    key: string;
    value: string;
};

export declare const expressionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"expressionNode">;
    content: z.ZodObject<{
        expressions: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            key: z.ZodDefault<z.ZodString>;
            value: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
            id: string;
        }, {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        expressions: {
            value: string;
            key: string;
            id: string;
        }[];
    }, {
        expressions: {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }[];
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
    name: string;
    id: string;
    content: {
        expressions: {
            value: string;
            key: string;
            id: string;
        }[];
    };
    type: "expressionNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        expressions: {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }[];
    };
    type: "expressionNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare type ExpressionProps = {
    manager?: DragDropManager;
    traceData?: SimulationTraceDataExpression;
} & ExpressionControllerProps;

declare type ExtensionParams = {
    type?: 'standard' | 'unary' | 'template';
};

declare const Function_2: default_2.FC<FunctionProps>;
export { Function_2 as Function }

export declare const functionNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"functionNode">;
    content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        source: string;
    }, {
        source: string;
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
    name: string;
    id: string;
    type: "functionNode";
    position: {
        x: number;
        y: number;
    };
    content?: string | {
        source: string;
    } | null | undefined;
}, {
    name: string;
    type: "functionNode";
    id?: string | undefined;
    content?: string | {
        source: string;
    } | null | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

export declare type FunctionProps = {
    disabled?: boolean;
    defaultValue?: string;
    disableDebug?: boolean;
    language?: string;
    value?: string;
    onChange?: (value: string) => void;
    trace?: SimulationTrace<SimulationTraceDataFunction>;
    onMonacoReady?: (monaco: Monaco) => void;
    error?: {
        data: {
            nodeId: string;
            source?: string;
        };
    };
};

declare type GenerateNodeParams = {
    index: number;
};

declare type GenerateNodeParams_2 = {
    index: number;
};

declare type GraphAsideProps = {};

export declare const GraphNode: default_2.FC<GraphNodeProps>;

export declare type GraphNodeProps = {
    id: string;
    handleLeft?: boolean | Partial<HandleProps>;
    handleRight?: boolean | Partial<HandleProps>;
    className?: string;
    specification: MinimalNodeSpecification;
    displayError?: boolean;
} & Partial<DecisionNodeProps>;

declare type GraphRef = DecisionGraphStoreType['actions'];

export declare const GraphSimulator: default_2.FC<GraphSimulatorProps>;

declare type GraphSimulatorProps = {
    defaultRequest?: string;
    onChange?: (val: string) => void;
    onRun?: (payload: {
        graph: DecisionGraphType;
        context: unknown;
    }) => void;
    onClear?: () => void;
    loading?: boolean;
};

declare type HitPolicy = 'first' | 'collect';

declare type Input = unknown;

export declare const inputNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"inputNode">;
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
    name: string;
    id: string;
    type: "inputNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    type: "inputNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

declare type InputSchema<Name extends string> = {
    name: Name;
} & (BoolInput | TextInput);

declare type InputTypeMap = {
    bool: boolean;
    text: string;
};

export declare const JdmConfigProvider: default_2.FC<JdmConfigProviderProps>;

export declare type JdmConfigProviderProps = {
    theme?: ThemeConfig;
    prefixCls?: string;
    children?: default_2.ReactNode;
};

export declare type MinimalNodeProps = Pick<NodeProps, 'id' | 'data' | 'selected'>;

export declare type MinimalNodeSpecification = Pick<NodeSpecification, 'color' | 'icon' | 'displayName' | 'documentationUrl'>;

export declare const nodeSchema: z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"decisionNode">;
    content: z.ZodObject<{
        key: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        key: string;
    }, {
        key: string;
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
    name: string;
    id: string;
    content: {
        key: string;
    };
    type: "decisionNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        key: string;
    };
    type: "decisionNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"expressionNode">;
    content: z.ZodObject<{
        expressions: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            key: z.ZodDefault<z.ZodString>;
            value: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
            id: string;
        }, {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        expressions: {
            value: string;
            key: string;
            id: string;
        }[];
    }, {
        expressions: {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }[];
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
    name: string;
    id: string;
    content: {
        expressions: {
            value: string;
            key: string;
            id: string;
        }[];
    };
    type: "expressionNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        expressions: {
            value?: string | undefined;
            key?: string | undefined;
            id?: string | undefined;
        }[];
    };
    type: "expressionNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"functionNode">;
    content: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodObject<{
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        source: string;
    }, {
        source: string;
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
    name: string;
    id: string;
    type: "functionNode";
    position: {
        x: number;
        y: number;
    };
    content?: string | {
        source: string;
    } | null | undefined;
}, {
    name: string;
    type: "functionNode";
    id?: string | undefined;
    content?: string | {
        source: string;
    } | null | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"decisionTableNode">;
    content: z.ZodObject<{
        hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
        rules: z.ZodDefault<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        inputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }>, "many">;
        outputs: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            defaultValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        rules: Record<string, string>[];
        hitPolicy: "first" | "collect";
        inputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
    }, {
        inputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        rules?: Record<string, string>[] | undefined;
        hitPolicy?: "first" | "collect" | undefined;
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
    name: string;
    id: string;
    content: {
        rules: Record<string, string>[];
        hitPolicy: "first" | "collect";
        inputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            id: string;
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            field?: string | null | undefined;
        }[];
    };
    type: "decisionTableNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        inputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        outputs: {
            name?: string | null | undefined;
            defaultValue?: string | null | undefined;
            id?: string | undefined;
            field?: string | null | undefined;
        }[];
        rules?: Record<string, string>[] | undefined;
        hitPolicy?: "first" | "collect" | undefined;
    };
    type: "decisionTableNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"switchNode">;
    content: z.ZodObject<{
        hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
        statements: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            condition: z.ZodDefault<z.ZodString>;
            isDefault: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }, {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        statements: {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }[];
        hitPolicy: "first" | "collect";
    }, {
        statements: {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | undefined;
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
    name: string;
    id: string;
    content: {
        statements: {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }[];
        hitPolicy: "first" | "collect";
    };
    type: "switchNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        statements: {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | undefined;
    };
    type: "switchNode";
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
    name: string;
    id: string;
    content: {
        kind: string;
        config?: any;
    };
    type: "customNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        kind: string;
        config?: any;
    };
    type: "customNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"inputNode">;
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
    name: string;
    id: string;
    type: "inputNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    type: "inputNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"outputNode">;
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
    name: string;
    id: string;
    type: "outputNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    type: "outputNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>]>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
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
    name: string;
    id: string;
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
    content?: any;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>]>;

export declare type NodeSpecification<T = any> = {
    icon?: default_2.ReactNode;
    type: string;
    color?: DecisionNodeProps['color'];
    group?: string;
    displayName: string | default_2.ReactNode;
    documentationUrl?: string;
    shortDescription?: string;
    generateNode: (params: GenerateNodeParams) => Omit<DecisionNode<T>, 'position' | 'id' | 'type'>;
    renderNode: default_2.FC<MinimalNodeProps & {
        specification: MinimalNodeSpecification;
    }>;
    onNodeAdd?: (node: DecisionNode<T>) => Promise<DecisionNode<T>>;
};

declare type Output = unknown;

export declare const outputNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"outputNode">;
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
    name: string;
    id: string;
    type: "outputNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    type: "outputNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

declare type PanelType = {
    id: string;
    icon: default_2.ReactNode;
    title: string;
    renderPanel?: default_2.FC;
    onClick?: () => void;
};

declare type Position = {
    x: number;
    y: number;
};

declare type SchemaSelectProps = {
    field: string;
    name?: string;
    items?: SchemaSelectProps[];
};

declare type SchemaSelectProps_2 = {
    field: string;
    name?: string;
    items?: SchemaSelectProps_2[];
};

export declare type Simulation = {
    result?: SimulationOk;
} | {
    error?: SimulationError;
};

export declare type SimulationError = {
    title?: string;
    message?: string;
    data: {
        nodeId?: string;
    };
};

export declare type SimulationOk = {
    performance: string;
    result: Output;
    trace: Record<string, SimulationTrace>;
};

export declare type SimulationTrace<Trace = TraceDataVariants> = {
    input: Input | null;
    output: Output | null;
    name: string;
    id: string;
    performance: string | null;
    traceData: Trace;
};

export declare type SimulationTraceDataExpression = Record<string, {
    result: unknown;
}>;

export declare type SimulationTraceDataFunction = {
    log?: TraceFunctionLog[];
};

export declare type SimulationTraceDataSwitch = {
    statements: {
        id: string;
    }[];
};

export declare type SimulationTraceDataTable = {
    index: number;
    reference_map: Record<string, unknown>;
    rule: Record<string, string>;
};

declare type SplitPath<Path extends string, Obj> = Path extends `${infer Prefix}.${infer Rest}` ? {
    [K in Prefix]: SplitPath<Rest, Obj>;
} : {
    [K in Path]: Obj;
};

export declare const switchNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodLiteral<"switchNode">;
    content: z.ZodObject<{
        hitPolicy: z.ZodDefault<z.ZodEnum<["first", "collect"]>>;
        statements: z.ZodArray<z.ZodObject<{
            id: z.ZodDefault<z.ZodString>;
            condition: z.ZodDefault<z.ZodString>;
            isDefault: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }, {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        statements: {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }[];
        hitPolicy: "first" | "collect";
    }, {
        statements: {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | undefined;
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
    name: string;
    id: string;
    content: {
        statements: {
            id: string;
            condition: string;
            isDefault: boolean | null;
        }[];
        hitPolicy: "first" | "collect";
    };
    type: "switchNode";
    position: {
        x: number;
        y: number;
    };
}, {
    name: string;
    content: {
        statements: {
            id?: string | undefined;
            condition?: string | undefined;
            isDefault?: boolean | null | undefined;
        }[];
        hitPolicy?: "first" | "collect" | undefined;
    };
    type: "switchNode";
    id?: string | undefined;
    position?: {
        x: number;
        y: number;
    } | undefined;
}>;

declare type TableCellProps = {
    column?: {
        colType: string;
    } & TableSchemaItem;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
};

declare type TableSchemaItem = {
    id: string;
    name: string;
    field?: string;
    defaultValue?: string;
};

declare type TextInput = {
    control: 'text';
    label?: string;
};

export declare type ThemeConfig = Omit<ThemeConfig_2, 'algorithm'> & {
    mode?: 'light' | 'dark';
};

declare type TraceDataVariants = SimulationTraceDataTable | SimulationTraceDataFunction | SimulationTraceDataExpression | SimulationTraceDataSwitch | null;

declare type TraceFunctionLog = {
    lines: string[];
    msSinceRun: number;
};

export declare function useDecisionGraphActions(): DecisionGraphStoreType['actions'];

export declare function useDecisionGraphListeners<T>(selector: (state: DecisionGraphStoreType['listeners']) => T, equals?: (a: any, b: any) => boolean): T;

export declare function useDecisionGraphRaw(): {
    stateStore: ExposedStore<{
        id?: string | undefined;
        components: NodeSpecification[];
        disabled?: boolean | undefined;
        configurable?: boolean | undefined;
        decisionGraph: DecisionGraphType;
        hoveredEdgeId: string | null;
        openTabs: string[];
        activeTab: string;
        name: string;
        customNodes: CustomNodeSpecification<object, string>[];
        panels?: PanelType[] | undefined;
        activePanel?: string | undefined;
        onPanelsChange?: ((val?: string | undefined) => void) | undefined;
        inputsSchema?: SchemaSelectProps[] | undefined;
        outputsSchema?: SchemaSelectProps[] | undefined;
        simulate?: Simulation | undefined;
        compactMode?: boolean | undefined;
    }>;
    listenerStore: ExposedStore<{
        onChange?: ((val: DecisionGraphType) => void) | undefined;
        onPanelsChange?: ((val?: string | undefined) => void) | undefined;
        onReactFlowInit?: ((instance: ReactFlowInstance) => void) | undefined;
        onCodeExtension?: ((params: {
            type?: "unary" | "standard" | "template" | undefined;
        }) => Extension) | undefined;
        onFunctionReady?: ((monaco: monacoEditor) => void) | undefined;
    }>;
    referenceStore: ExposedStore<{
        nodesState: default_2.MutableRefObject<[Node_2<unknown, string | undefined>[], default_2.Dispatch<default_2.SetStateAction<Node_2<unknown, string | undefined>[]>>, (changes: NodeChange[]) => void]>;
        edgesState: default_2.MutableRefObject<[Edge<unknown>[], default_2.Dispatch<default_2.SetStateAction<Edge<unknown>[]>>, (changes: EdgeChange[]) => void]>;
        graphClipboard: default_2.MutableRefObject<{
            copyNodes: (nodes: Node_2[]) => Promise<void>;
            pasteNodes: () => Promise<void>;
        }>;
    }>;
    actions: {
        setDecisionGraph: (val: DecisionGraphType) => void;
        handleNodesChange: (nodesChange: NodeChange[]) => void;
        handleEdgesChange: (edgesChange: EdgeChange[]) => void;
        setNodes: (nodes: DecisionNode<any>[]) => void;
        addNodes: (nodes: DecisionNode<any>[]) => void;
        updateNode: (id: string, updater: DraftUpdateCallback<DecisionNode<any>>) => void;
        removeNodes: (ids: string[]) => void;
        duplicateNodes: (ids: string[]) => void;
        copyNodes: (ids: string[]) => void;
        pasteNodes: () => void;
        setEdges: (edges: DecisionEdge[]) => void;
        addEdges: (edge: DecisionEdge[]) => void;
        removeEdges: (ids: string[]) => void;
        removeEdgeByHandleId: (handleId: string) => void;
        setHoveredEdgeId: (edgeId: string | null) => void;
        closeTab: (id: string) => void;
        openTab: (id: string) => void;
        setActivePanel: (panel?: string | undefined) => void;
        setCompactMode: (mode: boolean) => void;
        toggleCompactMode: () => void;
    };
};

export declare function useDecisionGraphReferences<T>(selector: (state: DecisionGraphStoreType['references']) => T, equals?: (a: any, b: any) => boolean): T;

export declare function useDecisionGraphState<T>(selector: (state: DecisionGraphStoreType['state']) => T, equals?: (a: any, b: any) => boolean): T;

declare const useGraphClipboard: (reactFlow: RefObject<ReactFlowInstance | null>, wrapper: RefObject<HTMLDivElement | null>) => {
    copyNodes: (nodes: Node_2[]) => Promise<void>;
    pasteNodes: () => Promise<void>;
};

export { }


declare module 'antd/es/theme/interface/alias' {
    interface AliasToken {
        mode: 'dark' | 'light';
    }
}


declare global {
    interface Window {
        monaco?: Monaco;
    }
}


import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { DragDropManager } from 'dnd-core';
import { EdgeChange } from 'reactflow';
import { EditorState } from '@codemirror/state';
import { Extension } from '@codemirror/state';
import { HandleProps } from 'reactflow';
import { InputProps } from 'antd';
import { linter } from '@codemirror/lint';
import { MenuProps } from 'antd';
import { Monaco } from '@monaco-editor/react';
import { MutableRefObject } from 'react';
import { Node as Node_2 } from 'reactflow';
import { NodeChange } from 'reactflow';
import { NodeProps } from 'reactflow';
import { Position as Position_2 } from 'reactflow';
import { ProOptions } from 'reactflow';
import { RadioGroupProps } from 'antd';
import { ReactFlowInstance } from 'reactflow';
import { RefObject } from 'react';
import { SelectProps } from 'antd';
import { SetStateAction } from 'react';
import { SpaceProps } from 'antd';
import { StoreApi } from 'zustand';
import { SwitchProps } from 'antd';
import { TabsProps } from 'antd';
import { ThemeConfig as ThemeConfig_2 } from 'antd';
import { UseBoundStore } from 'zustand';
import { useEdgesState } from 'reactflow';
import { useNodesState } from 'reactflow';
import { VariableType } from '@gorules/zen-engine-wasm';
import { WritableDraft } from 'immer/src/types/types-external';
import { z } from 'zod';

export declare const addStrikethrough: (text?: string) => string;

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

declare type AutosizeTextAreaProps = {
    maxRows: number;
} & default_2.DetailedHTMLProps<default_2.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

declare interface BaseItem {
    id?: string;
    _id?: string;
    [key: string]: any;
}

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

export declare const buildDiffString: (currentValue: string, previousValue: string) => string;

export declare const calculateDiffGraph: (currentGraph: DecisionGraphType, previousGraph: DecisionGraphType, options?: ProcessNodesOptions) => DecisionGraphType;

export declare const CodeEditor: default_2.ForwardRefExoticComponent<{
    maxRows?: number;
    value?: string;
    onChange?: (value: string) => void;
    onStateChange?: (state: EditorState) => void;
    placeholder?: string;
    disabled?: boolean;
    type?: "unary" | "standard" | "template";
    lint?: boolean;
    strict?: boolean;
    fullHeight?: boolean;
    noStyle?: boolean;
    extension?: (params: ExtensionParams) => Extension;
    variableType?: any;
    expectedVariableType?: any;
} & Omit<default_2.HTMLAttributes<HTMLDivElement>, "disabled" | "onChange"> & default_2.RefAttributes<HTMLDivElement>>;

export declare type CodeEditorProps = {
    maxRows?: number;
    value?: string;
    onChange?: (value: string) => void;
    onStateChange?: (state: EditorState) => void;
    placeholder?: string;
    disabled?: boolean;
    type?: 'unary' | 'standard' | 'template';
    lint?: boolean;
    strict?: boolean;
    fullHeight?: boolean;
    noStyle?: boolean;
    extension?: (params: ExtensionParams) => Extension;
    variableType?: any;
    expectedVariableType?: any;
} & Omit<default_2.HTMLAttributes<HTMLDivElement>, 'disabled' | 'onChange'>;

export declare const codemirror: {
    linter: typeof linter;
};

export declare const compareAndUnifyLists: <T extends BaseItem>(newList: T[], oldList: T[], options?: DiffOptions<T>) => T[];

export declare const compareStringFields: (field1?: string | null, field2?: string | null) => boolean;

declare type ControlToType<T> = T extends keyof InputTypeMap ? InputTypeMap[T] : never;

declare type CreateDynamicType<T extends ReadonlyArray<unknown>, Result = {}> = T extends readonly [infer First, ...infer Rest] ? First extends {
    control: infer Control extends string;
    name: infer Name extends string;
} ? CreateDynamicType<Rest, Result & SplitPath<Name, ControlToType<Control>>> : Result : Result;

export declare const createJdmNode: <Component extends string, InputName extends string, Inputs extends InputSchema<InputName>[]>(n: BaseNode<Component, InputName, Inputs>) => CustomNodeSpecification<any, Component>;

declare type CustomDecisionNode<T> = {
    id: string;
    name: string;
    description?: string;
    type?: string;
    content?: T;
    position: Position_2;
};

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

export declare type CustomNodeSpecification<Data extends object, Component extends string> = {
    kind: Component;
    color?: string;
    icon?: default_2.ReactNode;
    displayName: string;
    group?: string;
    documentationUrl?: string;
    shortDescription?: string;
    renderTab?: (props: {
        id: string;
        manager?: DragDropManager;
    }) => default_2.ReactNode;
    calculateDiff?: (current: any, previous: any) => [any, any];
    generateNode: (params: GenerateNodeParams_2) => Omit<DecisionNode, 'position' | 'id' | 'type' | 'content'> & {
        config?: Data;
    };
    renderNode: default_2.FC<MinimalNodeProps & {
        specification: MinimalNodeSpecification;
    }>;
    inferTypes?: {
        needsUpdate: (state: InferTypeData<Data>, prevState: InferTypeData<Data>) => boolean;
        determineOutputType: (state: InferTypeData<Data>) => VariableType;
    };
    onNodeAdd?: (node: CustomDecisionNode<{
        kind: Component;
        config: Data;
    }>) => Promise<CustomDecisionNode<{
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
    sourceHandle?: string | null;
    targetHandle?: string | null;
    type?: string;
    _diff?: {
        status: DiffStatus;
    };
};

export declare const DecisionGraph: default_2.ForwardRefExoticComponent<{
    manager?: DragDropManager;
} & DecisionGraphWrapperProps & DecisionGraphEmptyType & default_2.RefAttributes<GraphRef>>;

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
        customNodes: CustomNodeSpecification<object, any>[];
        panels?: PanelType[];
        activePanel?: string;
        onPanelsChange?: (val?: string) => void;
        inputsSchema?: SchemaSelectProps[];
        outputsSchema?: SchemaSelectProps[];
        simulate?: Simulation;
        compactMode?: boolean;
        nodeTypes: Record<string, Partial<Record<NodeTypeKind, VariableType>>>;
        globalType: Record<string, VariableType>;
    };
    references: {
        nodesState: MutableRefObject<ReturnType<typeof useNodesState>>;
        edgesState: MutableRefObject<ReturnType<typeof useEdgesState>>;
        reactFlowInstance: MutableRefObject<ReactFlowInstance | null>;
        graphClipboard: MutableRefObject<ReturnType<typeof useGraphClipboard>>;
    };
    actions: {
        setDecisionGraph: (val: Partial<DecisionGraphType>, options?: SetDecisionGraphOptions) => void;
        calculateDiffGraph: (currentGraph: DecisionGraphType, previousGraph: DecisionGraphType) => DecisionGraphType;
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
        closeTab: (id: string, action?: string) => void;
        openTab: (id: string) => void;
        goToNode: (id: string) => void;
        setActivePanel: (panel?: string) => void;
        setCompactMode: (mode: boolean) => void;
        toggleCompactMode: () => void;
        setNodeType: (id: string, kind: NodeTypeKind, vt: VariableType) => void;
        removeNodeType: (id: string, kind?: NodeTypeKind) => void;
        triggerNodeSelect: (id: string, mode: 'toggle' | 'only') => void;
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
    settings?: DecisionSettings;
};

declare type DecisionGraphWrapperProps = {
    reactFlowProOptions?: ProOptions;
    tabBarExtraContent?: GraphTabsProps['tabBarExtraContent'];
};

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

export declare type DecisionNode<T = any> = {
    id: string;
    name: string;
    description?: string;
    type?: NodeSchema['type'] | string;
    content?: T;
    position: Position;
    [privateSymbol]?: {
        dimensions?: {
            height?: number;
            width?: number;
        };
        selected?: boolean;
    };
    _diff?: {
        status: DiffStatus;
        fields?: Record<string, DiffMetadata>;
    };
};

declare type DecisionNodeProps = {
    name?: string;
    icon: default_2.ReactNode;
    type: default_2.ReactNode;
    helper?: (default_2.ReactNode | false)[];
    disabled?: boolean;
    isSelected?: boolean;
    children?: default_2.ReactNode;
    actions?: default_2.ReactNode[];
    status?: 'error' | 'success' | 'warning';
    diffStatus?: 'removed' | 'added' | 'modified' | 'moved';
    noBodyPadding?: boolean;
    color?: 'primary' | 'secondary' | string;
    menuItems?: MenuProps['items'];
    onNameChange?: (name: string) => void;
    compactMode?: boolean;
    listMode?: boolean;
    details?: default_2.ReactNode;
    detailsOpen?: boolean;
    detailsTitle?: string;
    onDetailsClose?: () => void;
};

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

export declare type DecisionSettings = z.infer<typeof decisionModelSchema>['settings'] & Diff;

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
    inputData?: unknown;
    minColWidth?: number;
    colWidth?: number;
    onChange?: (val: DecisionTableType) => void;
};

export declare type DecisionTableProps = {
    id?: string;
    tableHeight: string | number;
    mountDialogsOnBody?: boolean;
    manager?: DragDropManager;
    inputData?: unknown;
} & DecisionTableContextProps & DecisionTableEmptyType;

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

export declare type DecisionTableType = {
    hitPolicy: HitPolicy | string;
    passThorough?: boolean;
    inputField?: string;
    outputPath?: string;
    executionMode?: 'single' | 'loop';
    inputs: TableSchemaItem[];
    outputs: TableSchemaItem[];
    rules: Record<string, string>[];
} & Diff;

export declare type Diff<T = any> = {
    _diff?: DiffMetadata<T>;
};

export declare const DiffAutosizeTextArea: default_2.FC<DiffAutosizeTextAreaProps>;

export declare type DiffAutosizeTextAreaProps = AutosizeTextAreaProps & {
    previousValue?: string;
    displayDiff?: boolean;
    noStyle?: boolean;
};

export declare const DiffCodeEditor: default_2.ForwardRefExoticComponent<{
    maxRows?: number;
    value?: string;
    onChange?: (value: string) => void;
    onStateChange?: (state: EditorState) => void;
    placeholder?: string;
    disabled?: boolean;
    type?: "unary" | "standard" | "template";
    lint?: boolean;
    strict?: boolean;
    fullHeight?: boolean;
    noStyle?: boolean;
    extension?: (params: {
        type?: "standard" | "unary" | "template";
    }) => Extension;
    variableType?: any;
    expectedVariableType?: any;
} & Omit<default_2.HTMLAttributes<HTMLDivElement>, "disabled" | "onChange"> & {
    displayDiff?: boolean;
    previousValue?: string;
    noStyle?: boolean;
} & default_2.RefAttributes<HTMLDivElement>>;

export declare type DiffCodeEditorProps = CodeEditorProps & {
    displayDiff?: boolean;
    previousValue?: string;
    noStyle?: boolean;
};

export declare const DiffIcon: default_2.FC<{
    status?: DiffStatus;
} & default_2.HTMLAttributes<HTMLSpanElement>>;

export declare const DiffInput: default_2.FC<DiffInputProps>;

export declare type DiffInputProps = InputProps & {
    previousValue?: string;
    displayDiff?: boolean;
};

export declare type DiffMetadata<T = any> = {
    status?: DiffStatus;
    previousValue?: T;
    previousIndex?: number;
    currentIndex?: number;
    fields?: Record<string, DiffMetadata>;
};

declare interface DiffOptions<T extends BaseItem> {
    idField?: 'id' | '_id';
    compareFields?: (current: T, previous: T) => {
        hasChanges: boolean;
        fields?: Record<string, DiffMetadata>;
    };
}

export declare const DiffRadio: default_2.FC<DiffRadioProps>;

export declare type DiffRadioProps = {
    previousValue?: string;
    displayDiff?: boolean;
} & RadioGroupProps;

export declare const DiffSelect: default_2.FC<DiffSelectProps>;

export declare type DiffSelectProps = Omit<SelectProps, 'direction'> & {
    previousValue?: string;
    displayDiff?: boolean;
    direction?: SpaceProps['direction'];
};

export declare type DiffStatus = 'added' | 'removed' | 'modified' | 'unchanged' | 'moved';

export declare const DiffSwitch: default_2.FC<DiffSwitchProps>;

export declare type DiffSwitchProps = {
    previousChecked?: boolean;
    displayDiff?: boolean;
} & SwitchProps;

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
    _diff?: DiffMetadata;
};

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

export declare type ExpressionProps = {
    manager?: DragDropManager;
    traceData?: SimulationTraceDataExpression;
    inputData?: unknown;
} & ExpressionControllerProps;

declare type ExtensionParams = {
    type?: 'standard' | 'unary' | 'template';
};

declare const Function_2: default_2.FC<FunctionProps>;
export { Function_2 as Function }

declare type FunctionLibrary = {
    name: string;
    tagline: string;
    typeDef: string;
    importName?: string;
    documentationUrl?: string;
};

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

export declare type FunctionProps = {
    disabled?: boolean;
    defaultValue?: string;
    disableDebug?: boolean;
    language?: string;
    value?: string;
    previousValue?: string;
    onChange?: (value: string) => void;
    trace?: SimulationTrace<SimulationTraceDataFunction>;
    onMonacoReady?: (monaco: Monaco) => void;
    libraries?: FunctionLibrary[];
    inputData?: unknown;
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

export declare const GraphNode: default_2.ForwardRefExoticComponent<{
    id: string;
    handleLeft?: boolean | Partial<HandleProps>;
    handleRight?: boolean | Partial<HandleProps>;
    className?: string;
    specification: MinimalNodeSpecification;
    displayError?: boolean;
} & Partial<DecisionNodeProps> & default_2.RefAttributes<HTMLDivElement>>;

export declare type GraphNodeProps = {
    id: string;
    handleLeft?: boolean | Partial<HandleProps>;
    handleRight?: boolean | Partial<HandleProps>;
    className?: string;
    specification: MinimalNodeSpecification;
    displayError?: boolean;
} & Partial<DecisionNodeProps>;

declare type GraphRef = DecisionGraphStoreType['actions'] & {
    stateStore: ExposedStore<DecisionGraphStoreType['state']>;
};

export declare const GraphSimulator: default_2.FC<GraphSimulatorProps>;

export declare type GraphSimulatorProps = {
    onClear?: () => void;
    loading?: boolean;
    defaultRequest?: SimulatorRequestPanelProps['defaultRequest'];
    onChange?: SimulatorRequestPanelProps['onChange'];
    onRun?: SimulatorRequestPanelProps['onRun'];
    leftPanel?: default_2.FC<SimulatorRequestPanelProps>;
};

declare type GraphTabsProps = {
    disabled?: boolean;
    tabBarExtraContent?: TabsProps['tabBarExtraContent'];
};

declare type HitPolicy = 'first' | 'collect';

declare type InferTypeData<T> = {
    input: VariableType;
    content: T;
};

declare type Input = unknown;

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

export declare type MinimalNodeSpecification = Pick<NodeSpecification, 'color' | 'icon' | 'displayName' | 'documentationUrl' | 'helper' | 'renderSettings'>;

export declare enum NodeColor {
    Blue = "var(--node-color-blue)",
    Purple = "var(--node-color-purple)",
    Orange = "var(--node-color-orange)",
    Green = "var(--node-color-green)"
}

export declare enum NodeKind {
    Input = "inputNode",
    Output = "outputNode",
    DecisionTable = "decisionTableNode",
    Function = "functionNode",
    Expression = "expressionNode",
    Switch = "switchNode",
    Decision = "decisionNode"
}

declare type NodeSchema = z.infer<typeof nodeSchema>;

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

export declare type NodeSpecification<T = any> = {
    icon?: default_2.ReactNode;
    type: string;
    color?: DecisionNodeProps['color'];
    group?: string;
    displayName: string | default_2.ReactNode;
    documentationUrl?: string;
    shortDescription?: string;
    helper?: string | default_2.ReactNode;
    renderTab?: (props: {
        id: string;
        manager?: DragDropManager;
    }) => default_2.ReactNode;
    getDiffContent?: (current: T, previous: T) => T;
    generateNode: (params: GenerateNodeParams) => Omit<DecisionNode<T>, 'position' | 'id' | 'type'>;
    renderNode: default_2.FC<MinimalNodeProps & {
        specification: MinimalNodeSpecification;
    }>;
    renderSettings?: default_2.FC<{
        id: string;
    }>;
    inferTypes?: {
        needsUpdate: (content: T, prevContent: T) => boolean;
        determineOutputType: (state: InferTypeData<T>) => VariableType;
    };
    onNodeAdd?: (node: DecisionNode<T>) => Promise<DecisionNode<T>>;
};

export declare enum NodeTypeKind {
    Input = 0,
    Output = 1,
    InferredInput = 2,
    InferredOutput = 3
}

declare type NodeTypeParams = {
    attachGlobals?: boolean;
    disabled?: boolean;
};

declare type Output = unknown;

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

declare type PanelType = {
    id: string;
    icon: default_2.ReactNode;
    title: string;
    renderPanel?: default_2.FC;
    hideHeader?: boolean;
    onClick?: () => void;
};

export declare type Position = {
    x: number;
    y: number;
};

declare const privateSymbol: unique symbol;

export declare const processEdges: (currentEdges: DecisionEdge[], previousEdges: DecisionEdge[]) => any[];

export declare const processNodes: (currentNodes: DecisionNode<any>[], previousNodes: DecisionNode<any>[], options?: ProcessNodesOptions) => any[];

export declare type ProcessNodesOptions = {
    components: NodeSpecification[];
    customNodes: CustomNodeSpecification<object, any>[];
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

declare type SetDecisionGraphOptions = {
    skipOnChangeEvent?: boolean;
};

export declare type Simulation = {
    result?: SimulationOk;
} & {
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
    order?: number;
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

export declare const SimulatorEditor: default_2.FC<SimulatorEditorProps>;

declare type SimulatorEditorProps = {
    value?: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
};

declare type SimulatorRequestPanelProps = {
    defaultRequest?: string;
    onChange?: (contextJson: string) => void;
    hasInputNode?: boolean;
    loading?: boolean;
    onRun?: (payload: {
        graph: DecisionGraphType;
        context: unknown;
    }) => void;
};

declare type SplitPath<Path extends string, Obj> = Path extends `${infer Prefix}.${infer Rest}` ? {
    [K in Prefix]: SplitPath<Rest, Obj>;
} : {
    [K in Path]: Obj;
};

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

declare type TableCellProps = {
    column?: {
        colType: string;
    } & TableSchemaItem;
    value: string;
    diff?: DiffMetadata;
    onChange: (value: string) => void;
    disabled?: boolean;
};

declare type TableSchemaItem = {
    id: string;
    name: string;
    field?: string;
    defaultValue?: string;
    _diff?: DiffMetadata;
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
    stateStore: ExposedStore<DecisionGraphStoreType["state"]>;
    listenerStore: ExposedStore<DecisionGraphStoreType["listeners"]>;
    referenceStore: ExposedStore<DecisionGraphStoreType["references"]>;
    actions: DecisionGraphStoreType["actions"];
};

export declare function useDecisionGraphReferences<T>(selector: (state: DecisionGraphStoreType['references']) => T, equals?: (a: any, b: any) => boolean): T;

export declare function useDecisionGraphState<T>(selector: (state: DecisionGraphStoreType['state']) => T, equals?: (a: any, b: any) => boolean): T;

export declare const useEdgeDiff: (id: string) => {
    diff: {
        status: DiffStatus;
    } | undefined;
};

declare const useGraphClipboard: (reactFlow: RefObject<ReactFlowInstance | null>, wrapper: RefObject<HTMLDivElement | null>) => {
    copyNodes: (nodes: Node_2[]) => Promise<void>;
    pasteNodes: () => Promise<void>;
};

export declare const useNodeDiff: (id: string) => {
    diff: {
        status: DiffStatus;
        fields?: Record<string, DiffMetadata>;
    } | undefined;
    contentDiff: any;
};

export declare const useNodeType: (id: string, { attachGlobals, disabled }?: NodeTypeParams) => VariableType | undefined;

export declare const usePersistentState: <S>(key: string, defaultValue?: S) => [S | undefined, Dispatch<SetStateAction<S | undefined>>];

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

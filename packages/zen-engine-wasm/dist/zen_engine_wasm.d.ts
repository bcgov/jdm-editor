/* tslint:disable */
/* eslint-disable */
/**
* @param {string} expression
* @param {any} context
* @returns {any}
*/
export function evaluateExpression(expression: string, context: any): any;
/**
* @param {string} expression
* @param {any} context
* @returns {boolean}
*/
export function evaluateUnaryExpression(expression: string, context: any): boolean;
/**
* @param {string} template
* @param {any} context
* @returns {any}
*/
export function renderTemplate(template: string, context: any): any;
/**
* @param {string} expression
* @returns {any}
*/
export function validateUnaryExpression(expression: string): any;
/**
* @param {string} expression
* @returns {any}
*/
export function validateExpression(expression: string): any;
/**
* @returns {boolean}
*/
export function isReady(): boolean;
export type VariableTypeJson =
  | 'Any'
  | 'Null'
  | 'Bool'
  | 'String'
  | 'Number'
  | { Constant: any }
  | { Array: VariableTypeJson }
  | { Object: Record<string, VariableTypeJson> };


/**
*/
export class VariableType {
  free(): void;
/**
* @param {any} value
*/
  constructor(value: any);
/**
* @param {VariableTypeJson} value
* @returns {VariableType}
*/
  static fromJson(value: VariableTypeJson): VariableType;
/**
* @param {(VariableType)[]} values
* @returns {VariableType}
*/
  static fromIncoming(values: (VariableType)[]): VariableType;
/**
* @returns {VariableTypeJson}
*/
  toJson(): VariableTypeJson;
/**
* @returns {VariableType}
*/
  clone(): VariableType;
/**
* @returns {VariableType}
*/
  toArray(): VariableType;
/**
* @returns {VariableType}
*/
  arrayItem(): VariableType;
/**
* @param {string} source
* @returns {VariableType}
*/
  calculateType(source: string): VariableType;
/**
* @param {VariableType} other
* @returns {VariableType}
*/
  merge(other: VariableType): VariableType;
/**
* @param {string} path
* @param {VariableType} value
*/
  set(path: string, value: VariableType): void;
/**
* @param {string} path
* @param {VariableTypeJson} value
*/
  setJson(path: string, value: VariableTypeJson): void;
/**
* @param {string} path
* @returns {VariableType}
*/
  get(path: string): VariableType;
/**
* @param {VariableType} other
* @returns {boolean}
*/
  equal(other: VariableType): boolean;
/**
* @param {VariableType} other
* @returns {boolean}
*/
  satisfies(other: VariableType): boolean;
/**
* @returns {string}
*/
  hash(): string;
/**
* @param {string} source
* @returns {any}
*/
  typeCheck(source: string): any;
/**
* @param {string} source
* @returns {any}
*/
  typeCheckUnary(source: string): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly evaluateExpression: (a: number, b: number, c: number, d: number) => void;
  readonly evaluateUnaryExpression: (a: number, b: number, c: number, d: number) => void;
  readonly renderTemplate: (a: number, b: number, c: number, d: number) => void;
  readonly validateUnaryExpression: (a: number, b: number) => number;
  readonly validateExpression: (a: number, b: number) => number;
  readonly __wbg_variabletype_free: (a: number, b: number) => void;
  readonly variabletype_new: (a: number) => number;
  readonly variabletype_fromJson: (a: number) => number;
  readonly variabletype_fromIncoming: (a: number, b: number) => number;
  readonly variabletype_toJson: (a: number) => number;
  readonly variabletype_clone: (a: number) => number;
  readonly variabletype_toArray: (a: number) => number;
  readonly variabletype_arrayItem: (a: number) => number;
  readonly variabletype_calculateType: (a: number, b: number, c: number) => number;
  readonly variabletype_merge: (a: number, b: number) => number;
  readonly variabletype_set: (a: number, b: number, c: number, d: number) => void;
  readonly variabletype_setJson: (a: number, b: number, c: number, d: number) => void;
  readonly variabletype_get: (a: number, b: number, c: number) => number;
  readonly variabletype_equal: (a: number, b: number) => number;
  readonly variabletype_satisfies: (a: number, b: number) => number;
  readonly variabletype_hash: (a: number, b: number) => void;
  readonly variabletype_typeCheck: (a: number, b: number, c: number) => number;
  readonly variabletype_typeCheckUnary: (a: number, b: number, c: number) => number;
  readonly isReady: () => number;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_2: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_3: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

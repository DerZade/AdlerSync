/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare function requireNode(module: string): any;
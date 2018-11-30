export interface NodePosition {
    x: number;
    y: number;
  }
  
  export interface NodeDimension {
    width: number;
    height: number;
  }
  
  export interface Node {
    id: string;
    position?: NodePosition;
    dimension?: NodeDimension;
    transformation?: string;
    headerOutput?: string[];
    data?: any;
  }
  

  export interface ActionNode extends Node{
    
  }

  export interface StartNode extends Node {
    childNodeIds: string[];
  }



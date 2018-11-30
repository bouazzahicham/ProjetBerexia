import {Node,StartNode} from './node'
import {Edge} from './edge'


export interface Graph {
    startNodes?: StartNode[];
    nodes?: Node[];
    connections?: Edge[];
}

import {TargetConnectorComponent} from "../target-connector/target-connector.component";
import {SourceConnectorComponent} from "../source-connector/source-connector.component";

export interface Connection {
    source: SourceConnectorComponent;
    target: TargetConnectorComponent;
}

export interface Socket {
    x1, y1, x2, y2: number;
    target: TargetConnectorComponent;
}
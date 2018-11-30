import {ElementRef, Injectable} from '@angular/core';

import * as _ from 'lodash';
import {SourceConnectorComponent} from "../source-connector/source-connector.component";
import {TargetConnectorComponent} from "../target-connector/target-connector.component";
import {Connection, Socket} from "../_models/model";

@Injectable()
export class PatchesService {

    sockets: Socket[] = [];

    connections: Connection[] = [];


    public connect(source: SourceConnectorComponent, target: TargetConnectorComponent)
    {
        this.connections.push({source, target});
    }

    public notConnected(source: SourceConnectorComponent, target: TargetConnectorComponent) {
        return _.isUndefined(
            _.find(
                this.connections,
                ({source: a, target: b}) => (a === source) && (b === target)));
    }

    public getConnectionsFor(source: SourceConnectorComponent) {
        return _.filter(this.connections, ({source: a}) => a === source);
    }

    public removeConnection(source: SourceConnectorComponent, i: number) {
        const targets = this.getConnectionsFor(source);
        const r = _.remove(this.connections, ({source: a, target: b}) => {
            return a === source && b === targets[i].target;
        });
        return r;
    }

    public registerTarget(el: ElementRef, target: TargetConnectorComponent)
    {
        // TODO: use el.getBoundingClientRect()
        const x1 = el.nativeElement.offsetLeft;
        const y1 = el.nativeElement.offsetTop;
        const x2 = x1 + el.nativeElement.offsetWidth;
        const y2 = y1 + el.nativeElement.offsetHeight;
        this.sockets.push({x1, y1, x2, y2, target});
    }

    public resetSelection() {
        _.map(this.sockets, s => s.target.isSelected = false);
    }

    public deregisterTarget(target: TargetConnectorComponent) {
        this.sockets = _.filter(this.sockets, s => s.target !== target);
    }

    public removeConnectionsFor(socket: SourceConnectorComponent) {
        return _.remove(this.connections, ({source, target}) => {
            return source === socket ;
        });
    }

    public locateTarget(e: MouseEvent)
    {
        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        const found = _.find(this.sockets, s => {
            return (x <= s.x2) && (x >= s.x1) && (y <= s.y2) && (y >= s.y1);
        });

        return _.get(found, 'target', false);
    }

}
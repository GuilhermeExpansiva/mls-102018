/// <mls shortName="aaaa" project="102018" enhancement="_100554_enhancementLit" />

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StateLitElement } from '_100554_/l2/stateLitElement';
import { exec } from "_102019_/l2/layer1Exec";

@customElement('aaaa-102018')
export class Aaaa102018 extends StateLitElement {

    @property() name: string = 'Somebody';

    async firstUpdated() {
        const req: any = {
            action: 'MDMGetList',
            inDeveloped: true,
            version: '1',
            params: { filter: '1001' }
        };
        const mdm = await exec(req);
        console.info(mdm)
    }

    render() {
        return html`<p> Hello, ${this.name} !</p>`;
    }
}

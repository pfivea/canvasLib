// Copyright (c) 2023 Parth Degama
// This code is licensed under MIT license

// fill text element

import { CanvasElement } from "./element"
import { Position } from "./position"

interface FillTextProp {
    type: 'text';

    text: string;

    isEnv: boolean;
    ifEnvKey: string;

    textFont: string;

    textSize: number;
    textWidth: number;

    textWidthAuto?: boolean;

    pos: Position
    onclick?: Function;

    height: number;
    width: number;

    selected?: boolean;
}

class FillText extends CanvasElement {

    prop: FillTextProp

    constructor() {
        super()
        this.prop = {
            type: 'text',
            text: "Text",
            isEnv: false,
            ifEnvKey: "",
            textFont: "Verdana",
            textSize: 22,
            textWidth: 0,
            textWidthAuto: true,
            pos: { x: 10, y: 10 },

            height: 22,
            width: 0
        }
    }

    public setText(text: string) {
        this.prop.text = text
    }

    public setWidth(w: number) {
        this.prop.textWidth = w
    }

    public getWidth(): number {
        return this.prop.textWidth
    }

    public setFontSize(size: number) {
        this.prop.textSize = size
        this.setHeight(this.prop.textSize)
    }

    public setFont(font: string) {
        this.prop.textFont = font
    }

    public onclick(cb: Function) {
        this.prop.onclick = cb
    }

    public setTextWidthAuto(b: boolean) {
        this.prop.textWidthAuto = b
    }

    public getTextWidthAuto(): boolean {
        return this.prop.textWidthAuto || false
    }

    public setEnv(key: string) {
        this.prop.isEnv = true
        this.prop.ifEnvKey = key
    }

    public removeEnv() {
        this.prop.isEnv = false
        this.prop.ifEnvKey = ""
    }

    public isEnv(): string {
        return this.prop.ifEnvKey
    }

}


export { FillText }
export type { FillTextProp }

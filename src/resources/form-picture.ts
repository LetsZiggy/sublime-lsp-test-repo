import { autoinject, customElement } from "aurelia-framework"

@customElement("form-picture")
@autoinject()
export class FormPicture {
	height: number = 0
	width: number = 0

	constructor (private readonly element: Element) {}

	attached (): void {
		this.width = Math.floor(this.element.clientWidth / 100) * 100
		this.height = Math.floor(this.element.clientHeight / 100) * 100
	}
}

export class Page {
    _id: string
    name: string
    elements: Element[]
}

export class Element {
    name: string
    attributes: Attribute[]
}

export class Attribute {
    name: string
    type: string
    editable: boolean
}
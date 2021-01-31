export interface MessageIfc{
    isArray: string,
    transform: object,
}
export interface TransformIfc{
    Type: string,
    Prop: string
}
export function transform(el: HTMLElement, message: MessageIfc){
    const target = message.isArray? [] : {};
    debugger;
}
function doTransform(target: object, el: HTMLElement, transform: TransformIfc, context: MessageIfc){
    el.children.forEach(child =>{
        for(const key in transform){
            if(key[0] === key[0])
        }
    })
}
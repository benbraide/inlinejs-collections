import { AddDirectiveHandler, CreateDirectiveHandlerCallback, BindEvent } from "@benbraide/inlinejs";

export function CreateCollectionDirectiveHandler(name: string){
    return CreateDirectiveHandlerCallback(name, ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
        BindEvent({ contextElement, expression,
            component: (component || componentId),
            key: name,
            event: argKey,
            defaultEvent: 'update',
            eventWhitelist: ['item', 'import', 'clear'],
            options: [...argOptions, 'window'],
            optionBlacklist: ['document', 'outside'],
        });
    });
}

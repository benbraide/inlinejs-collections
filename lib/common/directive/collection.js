"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionDirectiveHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
function CreateCollectionDirectiveHandler(name) {
    return (0, inlinejs_1.CreateDirectiveHandlerCallback)(name, ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
        (0, inlinejs_1.BindEvent)({ contextElement, expression,
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
exports.CreateCollectionDirectiveHandler = CreateCollectionDirectiveHandler;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAction = LogAction;
// Decorator to log method calls
function LogAction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`🔍 Action: ${propertyKey} called with args:`, args);
        return originalMethod.apply(this, args);
    };
}

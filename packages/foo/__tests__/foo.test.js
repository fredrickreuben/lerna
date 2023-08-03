'use strict';

const foo = require('..');
const assert = require('assert').strict;

assert.strictEqual(foo(), 'Hello from foo');
console.info('foo tests passed');

'use strict';

const bar = require('..');
const assert = require('assert').strict;

assert.strictEqual(bar(), 'Hello from bar');
console.info('bar tests passed');

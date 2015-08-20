# every2

[![Build Status](https://travis-ci.org/javiercejudo/every2.svg)](https://travis-ci.org/javiercejudo/every2)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/every2/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/every2?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/every2/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/every2)

Like `Array.prototype.every` but for every 2-tuple

## Install

    npm i every2

## Usage

```js
var everyTuple = require('every-n');

every2([1, 5, 10], fixtures.isAscendingPair); // => true
every2([8, 5, 10], fixtures.isAscendingPair); // => false
```

Please note the tuples are passed to the callback as individual arguments, not as an array.

See more examples of [fixture callbacks](fixtures/callbacks.js).

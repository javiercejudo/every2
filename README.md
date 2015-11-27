# every2

[![Build Status](https://travis-ci.org/javiercejudo/every2.svg)](https://travis-ci.org/javiercejudo/every2)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/every2/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/every2?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/every2/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/every2)

Like [`Array.prototype.every`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every) but for every 2-tuple

## Install

    npm i every2

## Usage

```js
var every2 = require('every2');

every2(fixtures.isAscendingPair, [1, 5, 10]); // => true
every2(fixtures.isAscendingPair, [8, 5, 10]); // => false
```

Please note the tuples are passed to the callback as individual arguments, not as an array.

See more examples of [fixture callbacks](fixtures/callbacks.js).

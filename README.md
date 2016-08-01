# cyclejs-storage

A [Cycle.js](http://cycle.js.org) [Driver](http://cycle.js.org/drivers.html) for using
[redux](https://github.com/reactjs/redux).

## Installation

```
npm install --save cyclejs-redux
```

## Usage

Basics:

```js
import Cycle from '@cycle/xstream-run';
import { makeStateDriver } from 'cyclejs-redux';

function reducer(state, action)
{
    switch(action.type)
    {
    case 'increment': return Object.assign({}, state, { counter: state.counter + 1 });
    case 'decrement': return Object.assign({}, state, { counter: state.counter - 1 });
    default: return state;
    }
}

function main(sources) {
  // ...
}

const drivers = {
  storage: makeStateDriver(reducer, { counter: 0 })
}

Cycle.run(main, drivers);
```

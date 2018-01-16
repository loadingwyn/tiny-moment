# React Image Slides

> a tiny js date/time handler 


## Features
- weights less than 2kb gzipped.
- well tested
- flexible parser and formatter

## Install
`yarn add tiny-moment`

## Usage

1. format

```js
import tinyMoment from 'tiny-moment';

tinyMoment.format('1995/2/7', 'yyyy.MM.dd'); // '1995.02.07'
tinyMoment.format('1995/2/7', 'yy:M:dd, HH'); // '95:2:07, 00'
```

2. parse


```js
import tinyMoment from 'tiny-moment';

tinyMoment.parse('2016-08-18', 'yyyy-MM-dd', 'MM-yyyy-dd, hh'); // '09-2016-18, 00'
tinyMoment.parse('2016-08-18', 'yyyy-MM-dd'); // a Date instance that represents '2016-08-18'
```

## Apis

### format

#### Arguments

- string | object:  The value to format. It must be a valid date string that `Date.parse` can recognize or an Date instance.
- string: Target format

#### Return

- string: String in the target format

### parse

#### Arguments

- string: The value to parse.
- string: The format of the fisrt param
- string(Optional): Target format

#### Return

- string | object: A date instance or a string in the target format

## Todo

- add add/subtract method
- add escaped characters
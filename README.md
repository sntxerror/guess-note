# Guss Note JS

Returns a closest note number from curren octave by given frequency of sound and kamertone in Hz. 

Install: 

```javascript
npm install guess-note
```

Use: 

```javascript
var gn = require('guess-note');

//460 is input frequency
//440 is kamertone frequency (note A), differs for different cultures
var note = gn.guessNote(466, 440); 

```

Notes ordered from "A" to "G#":

index|note
---|---
0|A
1|A#
2|B
3|C
4|C#
5|D
6|D#
7|E
8|F
9|F#
10|G
11|G#
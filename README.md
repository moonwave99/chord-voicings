# Chord Voicings

Returns an array of notes from a voicing schema **without the root**, e.g.:

```ts
import { getNotes } from "@moonwave99/chord-voicings";

getNotes("C", "b3", "b5", "b7"); // returns ['Eb', 'Gb', 'Bb']
```

If you want the root, mark it as `'R'`:

```ts
import { getNotes } from "@moonwave99/voicings";

getNotes("C", "b3", "b5", "b7", "R"); // returns ['Eb', 'Gb', 'Bb', 'C']
```

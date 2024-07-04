import test from 'ava';
import { getNotes } from './index.js';

test('getNotes - Cmaj', t => {
  t.deepEqual(getNotes('C', 'R', '3', '5', 'R'), 'C E G C'.split(' '));
});

test('getNotes - Cmaj7', t => {
  t.deepEqual(getNotes('C', '3', '5', '7'), 'E G B'.split(' '));
});

test('getNotes - C7', t => {
  t.deepEqual(getNotes('C', '3', '5', 'b7'), 'E G Bb'.split(' '));
});

test('getNotes - Cm7', t => {
  t.deepEqual(getNotes('C', 'b3', '5', 'b7'), 'Eb G Bb'.split(' '));
});

test('getNotes - Cmmaj7', t => {
  t.deepEqual(getNotes('C', 'b3', '5', '7'), 'Eb G B'.split(' '));
});

test('getNotes - C7b9', t => {
  t.deepEqual(getNotes('C', '3', '5', 'b7', 'b9'), 'E G Bb Db'.split(' '));
});

test('getNotes - C7b5', t => {
  t.deepEqual(getNotes('C', '3', 'b5', 'b7', 'b9'), 'E Gb Bb Db'.split(' '));
});

test('getNotes - Cmaj7#11', t => {
  t.deepEqual(getNotes('C', '3', '5', '7', '#11'), 'E G B F#'.split(' '));
});

test('getNotes - Cm7b5', t => {
  t.deepEqual(getNotes('C', 'b3', 'b5', 'b7'), 'Eb Gb Bb'.split(' '));
});

test('getNotes - Cdim7', t => {
  t.deepEqual(getNotes('C', 'b3', 'b5', 'bb7'), 'Eb Gb Bbb'.split(' '));
});

test('getNotes - E7b9', t => {
  t.deepEqual(getNotes('E', '3', '5', 'b7', 'b9'), 'G# B D F'.split(' '));
});
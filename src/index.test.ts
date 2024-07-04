import test from 'ava';
import { getNotes } from './index';

test('getNotes - Cmaj7', t => {
  t.is(getNotes('C', '3', '5', '7'), 'C E G B');
});

test('getNotes - C7', t => {
  t.is(getNotes('C', '3', '5', 'b7'), 'C E G Bb');
});

test('getNotes - Cm7', t => {
  t.is(getNotes('C', 'b3', '5', 'b7'), 'C Eb G Bb');
});

test('getNotes - Cmmaj7', t => {
  t.is(getNotes('C', 'b3', '5', '7'), 'C Eb G B');
});

test('getNotes - C7b9', t => {
  t.is(getNotes('C', '3', '5', 'b7', 'b9'), 'C E G Bb Db');
});

test('getNotes - C7b5', t => {
  t.is(getNotes('C', '3', 'b5', 'b7', 'b9'), 'C E Gb Bb Db');
});

test('getNotes - Cmaj7#11', t => {
  t.is(getNotes('C', '3', '5', '7', '#11'), 'C E G B F#');
});

test('getNotes - Cm7b5', t => {
  t.is(getNotes('C', 'b3', 'b5', 'b7'), 'C Eb Gb Bb');
});

test('getNotes - Cdim7', t => {
  t.is(getNotes('C', 'b3', 'b5', 'bb7'), 'C Eb Gb Bbb');
});

test('getNotes - E7b9', t => {
  t.is(getNotes('E', '3', '5', 'b7', 'b9'), 'E G# B D F');
});
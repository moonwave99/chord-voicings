import { Note } from "tonal";

type Interval = {
  size: number;
  quality: string;
}

function getPerfectQuality(modifier: string, size: number) {
  if (modifier === 'b') {
    return `d`;
  }
  if (modifier === '#') {
    return `A`;
  }
  return 'P'
}

function getVariableQuality(modifier: string, size: number) {
  if (modifier === 'bb') {
    return `d`;
  }
  if (modifier === 'b') {
    return `m`;
  }
  if (modifier === '#') {
    return `A`;
  }
  return 'M'
}

const PERFECT_INTERVALS = [4, 5, 11];

function getQuality(modifier: string, size: number): string {
  if (PERFECT_INTERVALS.includes(size)) {
    return getPerfectQuality(modifier, size)
  }
  return getVariableQuality(modifier, size)
}

function parseToken(token: string): Interval {
  let modifier = '', size = parseInt(token);
  if (token.startsWith('bb')) {
    modifier = 'bb';
    size = parseInt(token.slice(2));
  } else if (token.startsWith('b') || token.startsWith('#')) {
    modifier = token.charAt(0);
    size = parseInt(token.slice(1));
  } else if (token === 'R') {
    size = 8;
  }
  return {
    size,
    quality: getQuality(modifier, size)
  }
}

function getInterval(token: string): string {
  const { size, quality } = parseToken(token);
  return `${size}${quality}`;
}

function getNotes(root: string, ...notes: string[]): string[] {
  return notes.map(n => Note.transpose(root, getInterval(n)));
}

export { getNotes };
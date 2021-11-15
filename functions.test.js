const { test, expect } = require('@jest/globals')
const {
    returnTwo,
    greeting,
    add
} = require('./functions')

test("will test returnTwo", () => {
  expect(returnTwo()).toEqual(2)
});

test("will test greeting's return", () => {
    expect(greeting('Tanner')).toEqual("Hello, Tanner.")
});

test("will test greeting's return", () => {
    expect(greeting('Josh')).toEqual("Hello, Josh.")
});

test("will test the sum of add", () => {
    expect(add(1, 2)).toEqual(3)
});

test("will test the sum of add", () => {
    expect(add(5, 9)).toEqual(14)
})
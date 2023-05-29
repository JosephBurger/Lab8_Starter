// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//isPhoneNUumber Tests
test('tests if phone number 760-315-9933 is valid', () => {
    expect(functions.isPhoneNumber('760-315-9933')).toBe(true);
});
test('tests if phone number 760-315-9934 is valid', () => {
    expect(functions.isPhoneNumber('760-315-9934')).toBe(true);
});
test('tests if phone number 1-800 is valid', () => {
    expect(functions.isPhoneNumber('1-800')).toBe(false);
});
test('tests if phone number 7A is valid', () => {
    expect(functions.isPhoneNumber('7A')).toBe(false);
});

//isEmail Tests
test('tests if jburgos@ucsd.edu is valid', () => {
    expect(functions.isEmail('jburgos@ucsd.edu')).toBe(true);
});
test('tests if lburgos@gmail.com is valid', () => {
    expect(functions.isEmail('lburgos@gmail.com')).toBe(true);
});
test('tests if lburgos@gmail.com.com is valid', () => {
    expect(functions.isEmail('lburgos@gmail.com.com')).toBe(false);
});
test('tests if jburgosgmail.com is valid', () => {
    expect(functions.isEmail('jburgosgmail.com')).toBe(false);
});

//isStrongPassword Tests
test('tests if PeterPan is a Strong Password', () => {
    expect(functions.isStrongPassword('Peter_Pan555')).toBe(true);
});
test('tests if Melon_Lover55 is a Strong Password', () => {
    expect(functions.isStrongPassword('Melon_Lover55')).toBe(true);
});
test('tests if 5PeterPan is a Strong Password', () => {
    expect(functions.isStrongPassword('5PeterPan')).toBe(false);
});
test('tests if Peter&(Pan is a Strong Password', () => {
    expect(functions.isStrongPassword('Peter&(Pan')).toBe(false);
});

//isData Tests
test('tests if 11/20/2001 is a valid date', () => {
    expect(functions.isDate('11/20/2001')).toBe(true);
});
test('tests if 11/20/2001 is a valid date', () => {
    expect(functions.isDate('4/20/1800')).toBe(true);
});
test('tests if November 20th,2001 is a valid date', () => {
    expect(functions.isDate('November 20th,2001')).toBe(false);
});
test('tests if 11/20/20011 is a valid date', () => {
    expect(functions.isDate('11/20/20011')).toBe(false);
});


//isHexColor Tests
test('test if #008000 is a valid hex color code', () => {
    expect(functions.isHexColor('#008000')).toBe(true);
});
test('test if #FF0000 is a valid hex color code', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});
test('test if #AA33FF11 is a valid hex color code', () => {
    expect(functions.isHexColor('#AA33FF11')).toBe(false);
});
test('test if #Z34FF9 is a valid hex color code', () => {
    expect(functions.isHexColor('#Z34FF9')).toBe(false);
});
// TODO - Part 2
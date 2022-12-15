const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      const testWord = new Word('flame')

      expect(testWord.word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      const word = new Word('flame');
      const word2 = new Word('');
      const word3 = new Word();

      expect(word.word).to.equal('flame');
      expect(word2.word).to.equal('');
      expect(word3.word).to.be.undefined;
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const word = new Word('flame');
      const word2 = new Word('BILL');
      const word3 = new Word('BLT');
      expect(word.removeVowels()).to.equal('flm');
      expect(word2.removeVowels()).to.equal('BLL');
      expect(word3.removeVowels()).to.equal('BLT');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word = new Word('flame');
      const word2 = new Word('BILL');
      const word3 = new Word('BLT');
      expect(word.removeConsonants()).to.equal('ae');
      expect(word2.removeConsonants()).to.equal('I');
      expect(word3.removeConsonants()).to.equal('');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word = new Word('Banana');

      expect(word.pigLatin()).to.equal('ananaBay');

    });

    it('should take a word that starts with a vowel and add a yay', function() {
      const word2 = new Word('apple');
      expect(word2.pigLatin()).to.equal('appleyay')
    })
  });
});
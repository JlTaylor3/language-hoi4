# If you want an example of language specs, check out:
# https://github.com/atom/language-javascript/blob/master/spec/javascript-spec.coffee

describe "Hoi4LangMisterjay", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("hoi4-lang-misterjay")

    runs ->
      grammar = atom.syntax.grammarForScopeName("source.hoi4-misterjay-lang")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "source.hoi4-misterjay-lang"

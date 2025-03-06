# AI Experiment: Translation

This experiment is about translating text from one language to another.

## Challenges

- Domain specific jargon or technical terms should not be translated
- The text structure and formatting should be preserved

## Task

- Translate the text from English to Czech
- Keep technical terms and domain specific jargon in English
- The text structure and formatting should be preserved

## Approach

Various tools can do this, a simple approach is to use an AI Chat, where you
copy paste the text and use a propmt like this:

### Prompt

Translate the text from English to Czech. Keep specific technical terms or
domain specific jargon in English, but try to translate words that have good
translation in target language. The text structure and formatting should be
preserved. The output should be only the markdown file contents.

For Claude Chat:
Use an artefact for the markdown.

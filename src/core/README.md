# Core

This folder contains "core" of longman-to-anki. It consists of four types of functions:

1. **extractSomething functions**. They take small markup strings and extracts something from them, for example, headword or definition.
1. **composeSomeData functions**. They take big markup strings and return deep objects with data, extracted from these strings. They use **extractSomething functions** a lot.
1. **normalizeSomeData functions**. They take data from **composeSomeData functions** and normalizes it, so one object is enough to create anki card.
1. **makeCard function**. Takes single card object and transforms it into anki card string.

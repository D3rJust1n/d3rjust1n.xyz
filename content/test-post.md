+++
title = "Test Post"
date = "2023-12-27"
description = "Beispielartikel zum Testen der Markdown-Funktionalität."
[taxonomies]
tags = ["general"]
[extra]
mermaid = true
cover.image = "images/markdown-syntax.png"
+++

Dieser Artikel bietet ein Beispiel der grundlegenden Markdown-Syntax, die in Zola-Inhaltsdateien verwendet werden kann, und zeigt außerdem, ob grundlegende HTML-Elemente in einem Zola-Theme mit CSS dekoriert sind.

<!--more-->

## Überschriften

Die folgenden HTML-Elemente `<h1>`–`<h6>` repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene, während `<h6>` die niedrigste ist.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Textabschnitt

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

Ich bin zu faul alles auf Deutsch zu übersetzen...

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Zola supports them out-of-the-box.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Code block with backticks

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Images

![alt text](/card.png)

![alt text](/card.gif)

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Mermaid

{% mermaid() %}

graph TD;
A-->B;
A-->C;
B-->D;
C-->D;

{% end %}

{% mermaid() %}

```
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

{% end %}

{% mermaid() %}

```mermaid
gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
```

{% end %}

## Admonition

{% admonition(type="note", title="Note") %}

This is a note.
{% end %}

{% admonition(type="abstract", title="Abstract") %}

This is an abstract.
{% end %}

{% admonition(type="info", title="Info") %}

This is an info.
{% end %}

{% admonition(type="tip", title="Tip") %}

This is a tip.
{% end %}

{% admonition(type="success", title="Success") %}

This is a success.
{% end %}

{% admonition(type="question", title="Question") %}

This is a question.
{% end %}

{% admonition(type="warning", title="Warning") %}

This is a warning.
{% end %}

{% admonition(type="failure", title="Failure") %}

This is a failure.
{% end %}

{% admonition(type="danger", title="Danger") %}

This is a danger.
{% end %}

{% admonition(type="bug", title="Bug") %}

This is a bug.
{% end %}

{% admonition(type="example", title="Example") %}

This is an example.
{% end %}

{% admonition(type="quote", title="Quote") %}

This is a quote.
{% end %}

## Youtube

{{ youtube(id="_PPWWRV6gbA?si=xIWivKfrnlbSYPRr", class="youtube") }}

This is a youtube video!
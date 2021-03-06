# react-markdown-math

A react wrapper library for React Markdown so that you can render complex math equations in no time.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Usage](#use)
*   [API](#api)
    *   [`markdown`](#markdown)
    *   [`reactMarkdownProps`](#reactMarkdownProps)
*   [Contribute](#contribute)
*   [License](#license)
*   [Related](#related)

## What is this?

This package is a [React][] component that can be given a string of markdown with math (in Latex format)
that it’ll safely render to React elements.
You can pass plugins to change how markdown is transformed to React elements and
pass components that will be used instead of normal HTML elements.

*   to learn markdown, see this [cheatsheet and tutorial][cheat]
*   to learn math using Latex, see [this][latex]
## When should I use this?

You might need to render complex mathematical equations written in Markdown for your React application. This library uses [React Markdown][react-markdown] and [Better React Mathjax][better-react-mathjax] under the hood. You can use this for a quick implementation.

## Install

```sh
npm install react-markdown-math
```
## Usage

```sh
<ReactMarkdownMath markdown='\\(\\frac{10}{4x} \\approx 2^{12}\\)' />
```

## API

The default export is `ReactMarkdownMath`.

### `markdown`

The markdown string
### `reactMarkdownProps`

This optional prop is for additional configuration of React Markdown. Find the details [here][react-markdown-props]

## Contribute

If you find any issues or scope for improvement, please feel free to raise a pull request. If you feel like you don't have the bandwidth to get your hands dirty, please do create a [new][create-issue] issue while ensuring its not a duplicate.

## License

[MIT][license]

## Related

* [React Markdown][react-markdown]
* [Better React MathJax][better-react-mathjax]

[latex]: https://www1.cmc.edu/pages/faculty/aaksoy/latex/latexthree.html

[react]: http://reactjs.org

[license]: license

[cheat]: https://commonmark.org/help/

[unified]: https://github.com/unifiedjs/unified

[rehype]: https://github.com/rehypejs/rehype

[react-remark]: https://github.com/remarkjs/react-remark

[react-markdown]: https://github.com/remarkjs/react-markdown

[react-markdown-props]: https://github.com/remarkjs/react-markdown#props

[better-react-mathjax]: https://github.com/fast-reflexes/better-react-mathjax

[create-issue]: https://github.com/aivinthomas/react-markdown-math/issues/new/choose

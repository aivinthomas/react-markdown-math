import * as React from 'react'
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import ReactMarkdown, { Options } from 'react-markdown'
import RemarkMath from 'remark-math'

type OptionsOmitingChildren = Omit<Options, 'children'>
interface Props {
  markdown: string
  reactMarkdownProps?: OptionsOmitingChildren
}

export const ReactMarkdownMath = ({ markdown, reactMarkdownProps }: Props) => {
  const reactMarkdownPropswithMathjax = {
    ...reactMarkdownProps,
    remarkplugins: [RemarkMath],
    components: {
      ...reactMarkdownProps?.components,
      math: (props: any) => <MathJax>{props.value}</MathJax>,
      inlineMath: (props: any) => <MathJax>{props.value}</MathJax>
    }
  }
  return (
    <MathJaxContext hideUntilTypeset='first'>
      <ReactMarkdown {...reactMarkdownPropswithMathjax}>
        {markdown}
      </ReactMarkdown>
    </MathJaxContext>
  )
}

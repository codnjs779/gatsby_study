import React, { FunctionComponent } from 'react'

type TextProps = {
  text: string
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text} text</div>
}

export default Text
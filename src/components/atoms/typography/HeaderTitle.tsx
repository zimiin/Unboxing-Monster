import React from 'react'
import NotoSansBold from './NotoSansBold'

const HeaderTitle = ({ content }: { content: string }) => {
  return (
    <NotoSansBold
      style={{
        fontFamily: 'NotoSansCJKkr-Bold',
        fontSize: 17,
        letterSpacing: -0.51
      }}
    >
      {content}
    </NotoSansBold>
  )
}

export default HeaderTitle

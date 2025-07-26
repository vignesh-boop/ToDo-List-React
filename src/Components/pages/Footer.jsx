import React from 'react'
import { Author, FooterContainer, Objective } from '../../styles/footer'
import { PathSpan } from '../../styles/common'

export const Footer = () => {
  return (
    <>
    <FooterContainer>
        <Objective variant='h5'>React Learning</Objective>
        <Author variant='h5'>Carrier <PathSpan>Path</PathSpan> Editor</Author>
    </FooterContainer>
    </>
  )
}

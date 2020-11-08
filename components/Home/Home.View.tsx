import React, { ReactElement } from 'react'

export interface ViewProps {
  message: string
}
export const View = ({ message }: ViewProps): ReactElement => (
  <>
    <div>nextjs template</div>
    <p>{message}</p>
  </>
)

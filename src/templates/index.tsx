import { Mjml, MjmlBody, MjmlBreakpoint, MjmlColumn, MjmlHead, MjmlSection, MjmlText, MjmlTitle, MjmlWrapper } from 'mjml-react';
import React from 'react';

export const index = (
  <Mjml>
    <MjmlHead>
      <MjmlBreakpoint width="768px" />
      <MjmlTitle>My email</MjmlTitle>
    </MjmlHead>
    <MjmlBody width={700}>
      <MjmlWrapper>
        <MjmlSection fullWidth padding="0">
          <MjmlColumn padding={0}>
            <MjmlText padding="0">Content</MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

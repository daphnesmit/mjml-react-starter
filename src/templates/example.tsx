import { Mjml, MjmlBody, MjmlBreakpoint, MjmlButton, MjmlHead, MjmlImage, MjmlPreview, MjmlTitle, MjmlWrapper } from 'mjml-react';
import React from 'react';

import { MailSection } from '../components/MailSection';

export const example = (
  <Mjml>
    <MjmlHead>
      <MjmlBreakpoint width="768px" />
      <MjmlTitle>My email</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlWrapper>
        <MailSection backgroundColor="#efefef">
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
        </MailSection>
        <MailSection>
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.daphnesmit.nl"
          >
            I like it!
          </MjmlButton>
        </MailSection>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

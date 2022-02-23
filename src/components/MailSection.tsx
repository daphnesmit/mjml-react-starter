import { BorderProps, ClassNameProps, MjmlColumn, MjmlSection, MjmlSectionProps, PaddingProps } from 'mjml-react';
import React from 'react';

interface IMailSection extends MjmlSectionProps, BorderProps, PaddingProps, ClassNameProps {}

export const MailSection = ({ children, ...rest }: IMailSection) => {
  return (
    <MjmlSection fullWidth padding="0" {...rest}>
      <MjmlColumn padding={0}>
        {children}
      </MjmlColumn>
    </MjmlSection>
  );
};

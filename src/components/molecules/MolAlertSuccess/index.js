import React from 'react';
import AtmText from '../../atoms/AtmText';
import AtmIcon from '../../atoms/AtmIcon';
import AtmAlert from '../../atoms/AtmAlert';
import AtmContainer from '../../atoms/AtmContainer';

const MolAlertSuccess = ({visibility, message}) => {
  return (
    <AtmAlert visibility={visibility}>
      <AtmContainer padding={5} flexDirection="row">
        <AtmContainer padding={10} width={60}>
          <AtmIcon
            icon="checkmark"
            iconColor="white"
            iconSize="md"
            bgColor="green"
            bgShape="circle"
          />
        </AtmContainer>
        <AtmContainer padding={5} flex={1}>
          <AtmText
            text="Success"
            size="md"
            textColor="green"
            height={25}
            lineHeight={25}
            weight="medium"
          />
          <AtmText
            text={message}
            size="sm"
            textColor="primaryText"
            height={20}
            lineHeight={20}
          />
        </AtmContainer>
      </AtmContainer>
    </AtmAlert>
  );
};

export default MolAlertSuccess;

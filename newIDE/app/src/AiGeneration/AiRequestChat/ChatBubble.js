// @flow
import * as React from 'react';
import classes from './ChatBubble.module.css';
import Paper from '../../UI/Paper';
import ArrowTopThenLeft from '../../UI/CustomSvgIcons/ArrowTopThenLeft';
import IconButton from '../../UI/IconButton';

const styles = {
  chatBubble: {
    paddingTop: 5,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 5,
  },
};

type ChatBubbleProps = {|
  children: React.Node,
  feedbackButtons?: React.Node,
  role: 'assistant' | 'user',
  restoreProps?: {|
    onRestore: () => void,
    disabled?: boolean,
  |},
|};

export const ChatBubble = ({
  children,
  feedbackButtons,
  role,
  restoreProps,
}: ChatBubbleProps) => {
  return (
    <div className={classes.chatBubbleContainer}>
      <div className={classes.chatBubbleRestoreArrow}>
        {restoreProps && (
          <IconButton
            size="small"
            onClick={restoreProps.onRestore}
            disabled={restoreProps.disabled}
            tooltip="Restore project to this state"
          >
            <ArrowTopThenLeft fontSize="small" />
          </IconButton>
        )}
      </div>
      <Paper
        background={role === 'user' ? 'light' : 'medium'}
        style={styles.chatBubble}
      >
        <div className={classes.chatBubbleContent}>{children}</div>
        {feedbackButtons}
      </Paper>
    </div>
  );
};

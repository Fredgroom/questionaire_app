import { FC } from 'react';

type QuestionBoxPropsType = {
  text: string;
};

const QuestionBox: FC<QuestionBoxPropsType> = ({ text }) => {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '1em',
        borderRadius: '0.5em',
      }}
    >
      <p>questionnaire</p>
      <p>{text}</p>
    </div>
  );
};

export default QuestionBox;

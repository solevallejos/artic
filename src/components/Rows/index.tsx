import React from 'react';
import {Row} from './styled';
import {THEME} from '../../../assets/theme/theme';
import {Body} from '../../../assets/typography/typography';

interface RowData {
  label: string;
  value: string;
}

interface RowsProps {
  rows: RowData[];
}

const Rows: React.FC<RowsProps> = ({rows}) => {
  return (
    <>
      {rows.map((row, index) => (
        <Row key={index}>
          <Body bold>{row.label}</Body>
          <Body color={THEME.COLORS.SECONDARY_TEXT}>{row.value}</Body>
        </Row>
      ))}
    </>
  );
};

export default Rows;

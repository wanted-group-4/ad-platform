import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

interface IDropDown {
  isOpen: boolean;
}

export default function DropDown({setDataKey, dataKey}: any) {
  const [isSelected, setIsSelected] = useState(dataKey);
  const [isOpen, setIsOpen] = useState(false);

  function selecEventHandler(event: any) {
    event.stopPropagation();
    setIsSelected(event.target.id);
  }

  useEffect(() => {
    setDataKey(isSelected);
  }, [isSelected]);

  return (
    <DropwDownContainer>
      <DropwDownLabel onClick={() => setIsOpen(true)}>
        {isSelected}
      </DropwDownLabel>
      <DropDownList
        onClick={event => {
          selecEventHandler(event);
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        <DropDownItem id="click">imp</DropDownItem>
        <DropDownItem id="click">click</DropDownItem>
        <DropDownItem id="roas">roas</DropDownItem>
        <DropDownItem id="cost">cost</DropDownItem>
        <DropDownItem id="conv">conv</DropDownItem>
        <DropDownItem id="convValue">convValue</DropDownItem>
        <DropDownItem id="ctr">ctr</DropDownItem>
        <DropDownItem id="cpc">cpc</DropDownItem>
        <DropDownItem id="cpa">cpa</DropDownItem>
      </DropDownList>
    </DropwDownContainer>
  );
}

const DropwDownContainer = styled.div`
  display: flex;
  gap: 14.23px;
  cursor: pointer;
`;

const DropwDownLabel = styled.div`
  width: 119.87px;
  height: 36.04px;
  background: #ffffff;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  text-align: center;
  line-height: 36.04px;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
`;

const DropDownList = styled.ul<IDropDown>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  list-style-type: none;
  transition: 0.2s ease-in-out;
  z-index: 3;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  overflow: hidden;
`;

const DropDownItem = styled.li`
  width: 119.87px;
  height: 36.04px;
  background: #ffffff;
  text-align: center;
  line-height: 36.04px;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  background: #ffffff;
  transition: 0.3s;
  :hover {
    background: #dcdcdc;
  }
`;

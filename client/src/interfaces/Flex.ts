type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
type AlignItemsType = 'stretch' | 'center' | 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
type JustifyContentType = 'center' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';

export interface IFlexProps {
  flexDirection?: FlexDirectionType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
}

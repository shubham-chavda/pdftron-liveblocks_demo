import { Col, Row, Spin, Popover, Select } from 'antd';
import styled from 'styled-components';

export const WebviewerSection = styled.div`
	flex: 1;
	margin: 8px;
	height: 99%;
`;
export const StyledSelect = styled(Select)`

	&& .ant-select-selector {
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		background: #ecf4ff;
		height: 100%;
		padding: 0 2vw;
		margin-right: 0.5vw;
		display:flex;
		align-items: center;
		border: none;
		padding-right: 60px;
	}
	&& .ant-select-selection-item {
		font-size: 16px;
		color: #170944;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	&& .ant-select-arrow {
		margin-right: 2.3vw;
		color: #170944;
		@media screen and (max-width: 1280px) {
			/* margin-right: 0.5vw; */
			margin-right: 34px;
			margin-top: -25px
		}
	}
`;

export const ContentSection = styled(Row)`
	height: calc(100vh - 110px);
	display: flex !important;
	justify-content: center;
	align-items: center;
`;
export const RightCollapsibleSider = styled(Col)`
	/* transition: all 0.1s ease-in-out; */
	width: 25%;
	min-width: 8%;
	max-width: 30%;

	@media screen and (max-width: 150px) {
		.inner-content {
			display: none;
		}
	}
	@media screen and (min-width: 150px) {
		.inner-content {
			display: block;
		}
	}
`;
export const MemberCount = styled.div`
	color: #c4cedb;
	font-size: 11px;
`;
export const CustomSpinner = styled(Spin)`
	max-height: 100% !important;
`;

export const HederDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	height: 3.2vw;
	justify-content: space-around;
	align-items: center;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: rgb(236, 244, 255);
`;
export const StyledPopover = styled(Popover)`
	& .ant-popover-inner {
		border-radius: 8px !important;
	}
	& .ant-popover-content {
		position: relative;
		right: 52px;
		top: -11px;
	}
	& .ant-popover-placement-bottom,
	.ant-popover-placement-bottomLeft,
	.ant-popover-placement-bottomRight {
		padding: 0px !important;
	}
`;
export const DarkText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #170944;
margin: auto;
// overflow: hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// white-space:nowrap;
//     text-overflow:ellipsis;
// -webkit-line-clamp: 1;
// -webkit-box-orient: vertical;
// word-break: break-all;
`;
export const LightText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #797294;
margin: auto;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
word-break: break-all;

`;

import { Button, Col, Input, Row, Select, Switch } from 'antd';
import styled from 'styled-components';

export const MainContainer = styled.div`
	/* height: 100vh; */
`;
export const HeaderContainer = styled(Row)`
	// height: 5.2vh;
	height: 48px;
	/* border-bottom: 1px solid #e3ecf3; */
`;
export const HeaderHome = styled(Col)`
	/* width: 4.16%; */
	border-right: 1px solid #e3ecf3;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #e3ecf3;
`;
export const OwnerInfoContainer = styled(Col)`
	padding: 20px 30px;
	border-bottom: 1px solid #e3ecf3;
	transition: all 0.5s ease-in-out;
`;

export const RightHeaderContainer = styled(Row)`
	display: flex !important;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
export const RightIconGroup = styled(Col)`
	display: flex !important;
	justify-content: space-around;
	align-items: center;
`;

export const LeftIconGroup = styled(Col)`
	margin-left: 6px;
`;
export const LeftSliderContainer = styled(Col)`
	padding-top: 20px;
`;

export const HeaderFileTab = styled(Col)`
	font-size: 16px;
	height: 48px;
	border-right: 1px solid #e3ecf3;
	border-bottom: 1px solid #e3ecf3;
`;

export const CenterColumn = styled(Col)`
	padding-top: 15px;
	flex: 1;
`;

export const SearchButtonFilled = styled(Input)`
	border-radius: 24px;
	padding: 10px;
	padding-left: 18px;
	background: #f5f7f9;
	border: none;
	&& .ant-input-affix-wrapper,
	input.ant-input {
		background: #f5f7f9;
		padding-left: 12px;
	}
`;
export const SearchButtonDropDown = styled(Select)`
	border-radius: 24px;
	width: 180px;
	padding: 10px;
	background: #f5f7f9;
	border: none;
	&& .ant-select-selector {
		background: #f5f7f9 !important;
		padding-left: 12px;
	}
	&& .ant-select-selector:hover {
		border-color: none !important;
	}
`;
export const ButtonFilled = styled.button`
	border: none;
	background: #170944;
	border-radius: 30px;
	color: white;
	width: 89px;
`;
export const StyledButtonFilled = styled(Button)`
	border-radius: 18px;
	color: white;
	border: none;
	background: #170944;

	&:focus {
		background: #170944;
		color: white;
	}
	&:hover {
		background-color: rgb(24, 23, 49) !important;
		color: white;
	}
`;
export const StyledSwitch = styled(Switch)`
	background: ${props => (props.checked ? '#ecf2f7' : '#ECF2F7')};
	&& .ant-switch-handle::before {
		background: ${props => (props.checked ? '#1379ff' : '#C4CEDB')};
		border-radius: 14px;
	}
	&& .ant-switch-handle {
		width: 24px;
		height: 24px;
		top: -1px;
		margin-left:-2px;
	}
	&& .ant-switch{
		min-width: 40px !important;
		width: 40px !important;
	}
	min-width: 40px !important;
`;
export const InputField = styled(Input)`
	background: #f5f7f9;
	height: 48px;
	width: 100%;
	border-radius: 10px;
	border-color: #f5f7f9;
	padding-left: 18px;
	&& .ant-input-affix-wrapper,
	input.ant-input {
		background: #f5f7f9;
	}
	.react-tel-input .form-control{
		background : #f5f7f9;
		padding : 9px 10px 9px 55px;
		width : 120px;
		border : none;
		pointer-events: none;
		font-size: 12px;
	}
	.react-tel-input .form-control:focus{
		background : #f5f7f9;
		padding : 9px 10px 9px 47px;
		width : 130px;
		border : none;
		pointer-events: none;
	}
	.form-control:focus .flag-dropdown .selected-flag .open{
		border : none !important
	}
	.react-tel-input .selected-flag:before {
		content : none;
	}
	.react-tel-input .country-list .search-box {
		width : 97%;
	}
`;

export const OverviewHeaderText = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 26px;
	color: #170944;
	margin-left: 32px;
`

export const ChartTopDiv = styled.div`
		box-sizing: border-box;
		border-radius: 16px;
		flex: 0.4;
		padding-top: 32px;
		padding-bottom: 26px;
`;

export const ChartMainContainer = styled.div`
	width: 100%;
	height: 130px;
	justify-content: center;
  /* display: flex; */
	margin-top: 20px;
	margin-bottom: 42px;
`

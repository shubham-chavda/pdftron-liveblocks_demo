/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState, useRef } from 'react';
import { ContentSection, WebviewerSection } from './App.style';

import WebViewer from '@pdftron/webviewer';

import { Row } from 'antd';

import { CenterColumn } from './styles/Layout.style';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { setCursor } from 'store/Liveblocks/LiveblocksReducer';
import { actions } from '@liveblocks/redux';
import { useAppSelector } from 'hooks/useAppSelector';
import Cursor from 'cursor';

const Home = () => {
	// const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777'];
	const viewer: any = useRef(null);
	const [isDocumentOpen, setDocumentOpen] = useState<boolean>(false);

	// --liveblocks parameter to get other users cursor position
	const others = useAppSelector((state) => state.liveblocks.others);
	console.log('🚀 ~ file: Home.tsx ~ line 20 ~ Home ~ others', others);

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!isDocumentOpen) {
			// --liveblocks event to create and enter in room
			dispatch(actions.enterRoom('new Room'));
			loadPdfDocumentByPath();
		}
	}, []);

	const loadPdfDocumentByPath = () => {
		setDocumentOpen(true);
		// --pdftron connection to initiate pdfs
		WebViewer(
			{
				path: '/webviewer/lib/',
				fullAPI: true,
				extension: ['pdf'],
				disabledElements: [
					'header',
					'toolsHeader',
					'searchPanel',
					'contextMenuPopup',
					'notesPanel',
					'pageNavOverlay'
				],
				css: '/test.css',
				enableAnnotations: false,
				preloadWorker: 'pdf'
			},
			viewer.current
			// documentTabRef.current[0]
		).then(async (instance) => {
			const { documentViewer } = instance.Core;
			instance.UI.loadDocument('/files/test.pdf');

			// --Mouse event of iframe that we got from pdftron
			documentViewer.addEventListener('mouseMove', (e) => {
				console.log(
					'🚀 ~ file: Home.tsx ~ line 56 ~ documentViewer.addEventListener ~ e',
					e
				);
				dispatch(setCursor({ x: e.clientX, y: e.clientY }));
			});
		});
	};

	const webViewFunction = () => {
		return (
			<>
				<WebviewerSection ref={viewer} />
				{/* --cursor component to draw other users cursor */}
				{/* {cursors &&
					cursors?.map((item: any) => {
						if (item)
							return (
								<Cursor
									key={item.connectionId}
									color={COLORS[item.connectionId % COLORS.length]}
									x={item.x}
									y={item.y}
								/>
							);
					})} */}
			</>
		);
	};
	return (
		<>
			<div style={{ display: 'block' }}>
				<div
				// --alternate pointer event that should work. But its also not working
				// onPointerMove={(e) =>
				// 	dispatch(setCursor({ x: e.clientX, y: e.clientY }))
				// }
				>
					Mouse over after pdf will be visible to initiate liveblocks
				</div>
				<Row
					id="main-column"
					style={{
						height: '100vh'
					}}
				>
					<CenterColumn>
						<ContentSection>{webViewFunction()}</ContentSection>
					</CenterColumn>
				</Row>
			</div>
		</>
	);
};
export default Home;

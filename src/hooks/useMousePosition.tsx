import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useMousePosition() {
	const location = useLocation();
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		if (location.pathname === '/sleep-optimizer/' || location.pathname === '/sleep-optimizer/menu') {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};}
	}, [location] as const);

	return mousePosition;
}

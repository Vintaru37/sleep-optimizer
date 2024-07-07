import { useState, useEffect } from 'react';

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		document.body.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.body.removeEventListener('mousemove', handleMouseMove);
		};
	}, [] as const);

	return mousePosition;
}

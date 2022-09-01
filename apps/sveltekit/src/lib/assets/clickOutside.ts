export function clickOutside(node: Node): { destroy: () => void } {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

const QuickMsg = (content, duration) => {
	const el = document.createElement('div');
	el.className = 'quickMsg';
	el.innerHTML = content;
	document.body.appendChild(el);
	setTimeout(() => {
		el.classList.add('hide')
		el.addEventListener('animationend', () => el.remove(), {once:true});
	}, duration);
}

export default QuickMsg;
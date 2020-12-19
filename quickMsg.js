/**
 * @module QuickMsg
 * @description 
 * Add message in a small box
 *
 * @param content - message to show
 * @param duration - duration of showing box
 * 
 */

const QuickMsg = (content, duration) => {
	const el = document.createElement('div');
	el.className = 'quickMsg';
	el.setAttribute('role', 'dialog');
	el.setAttribute('aria-modal', true);
	el.innerHTML = content;
	document.body.appendChild(el);
	setTimeout(() => {
		el.classList.add('hide')
		el.addEventListener('animationend', () => el.remove(), {once:true});
	}, duration);
}

export default QuickMsg;
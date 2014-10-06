function Pendulum(node){
	var style = window.getComputedStyle(node);
	var thread = document.createElement('div');
	thread.style.height = '100px';
	thread.style.width = '1px';
	thread.style.backgroundColor = 'black';
	thread.style.position = 'absolute';
	thread.style.top = 0;
	thread.style.left = (parseInt(style.width) / 2)+"px";
	node.appendChild(thread);

	var ball = document.createElement('div');
	ball.style.width = ball.style.height = '40px';
	ball.style.borderRadius = '20px';
	ball.style.border = '1px solid black';
	ball.style.position = 'absolute';
	ball.style.top = parseInt(thread.style.height) + 'px';
	ball.style.left = (parseInt(style.width)/2 - parseInt(ball.style.width)/2) + 'px';
	node.appendChild(ball);
}
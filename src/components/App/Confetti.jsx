import { useEffect } from "react";

const ConfettiAnimation = () => {
	useEffect(() => {
		const maxParticleCount = 150;
		const particleSpeed = 2;
		const colors = [
			"DodgerBlue",
			"OliveDrab",
			"Gold",
			"Pink",
			"SlateBlue",
			"LightBlue",
			"Violet",
			"PaleGreen",
			"SteelBlue",
			"SandyBrown",
			"Chocolate",
			"Crimson",
		];
		const particles = [];
		let streamingConfetti = false;
		let animationTimer = null;
		let waveAngle = 0;

		function resetParticle(particle, width, height) {
			particle.color = colors[(Math.random() * colors.length) | 0];
			particle.x = Math.random() * width;
			particle.y = Math.random() * height - height;
			particle.diameter = Math.random() * 10 + 5;
			particle.tilt = Math.random() * 10 - 10;
			particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
			particle.tiltAngle = 0;
			return particle;
		}

		function startConfettiInner() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute(
				"style",
				"position: fixed; top: 0; left: 0; pointer-events: none;"
			);
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;

			const context = canvas.getContext("2d");
			while (particles.length < maxParticleCount)
				particles.push(resetParticle({}, width, height));

			streamingConfetti = true;
			if (animationTimer === null) {
				(function runAnimation() {
					context.clearRect(0, 0, window.innerWidth, window.innerHeight);
					if (particles.length === 0) animationTimer = null;
					else {
						updateParticles();
						drawParticles(context);
						animationTimer = requestAnimationFrame(runAnimation);
					}
				})();
			}
		}

		function drawParticles(context) {
			let particle;
			let x;
			for (let i = 0; i < particles.length; i++) {
				particle = particles[i];
				context.beginPath();
				context.lineWidth = particle.diameter;
				context.strokeStyle = particle.color;
				x = particle.x + particle.tilt;
				context.moveTo(x + particle.diameter / 2, particle.y);
				context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
				context.stroke();
			}
		}

		function updateParticles() {
			const width = window.innerWidth;
			const height = window.innerHeight;
			let particle;
			waveAngle += 0.01;
			for (let i = 0; i < particles.length; i++) {
				particle = particles[i];
				if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
				else {
					particle.tiltAngle += particle.tiltAngleIncrement;
					particle.x += Math.sin(waveAngle);
					particle.y +=
						(Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
					particle.tilt = Math.sin(particle.tiltAngle) * 15;
				}
				if (
					particle.x > width + 20 ||
					particle.x < -20 ||
					particle.y > height
				) {
					if (streamingConfetti && particles.length <= maxParticleCount)
						resetParticle(particle, width, height);
					else {
						particles.splice(i, 1);
						i--;
					}
				}
			}
		}

		startConfettiInner();

		// Cleanup the confetti when the component is unmounted
		return () => {
			streamingConfetti = false;
			const canvas = document.getElementById("confetti-canvas");
			if (canvas) {
				canvas.parentNode.removeChild(canvas);
			}
			particles.length = 0;
		};
	}, []);

	return null; // No need to render anything, it's just for the confetti animation
};

export default ConfettiAnimation;

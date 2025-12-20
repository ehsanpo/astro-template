import React, { useEffect, useState } from "react";

interface DuckSpriteProps {
	className?: string;
}

const DuckSprite: React.FC<DuckSpriteProps> = ({ className = "" }) => {
	const [position, setPosition] = useState(0);
	const [animation, setAnimation] = useState("idle_normal");
	const [direction, setDirection] = useState<"left" | "right">("right");
	const [isWalking, setIsWalking] = useState(false);

	const handleQuack = () => {
		// Light, cute quack sound!
		const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

		const oscillator = audioContext.createOscillator();
		const gainNode = audioContext.createGain();

		// Connect nodes
		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);

		// Higher, lighter frequency range (400-800 Hz)
		const frequency = 400 + Math.random() * 400;
		oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
		oscillator.frequency.exponentialRampToValueAtTime(
			frequency * 0.7,
			audioContext.currentTime + 0.05
		);
		oscillator.frequency.exponentialRampToValueAtTime(
			frequency * 0.5,
			audioContext.currentTime + 0.1
		);

		// Use square wave for more "quacky" character
		oscillator.type = "square";

		// Quick, light envelope
		gainNode.gain.setValueAtTime(0, audioContext.currentTime);
		gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
		gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);

		oscillator.start(audioContext.currentTime);
		oscillator.stop(audioContext.currentTime + 0.1);
	};

	useEffect(() => {
		// Set initial random position
		setPosition(Math.random() * (window.innerWidth - 32));

		const interval = setInterval(
			() => {
				const shouldWalk = Math.random() > 0.4;

				if (shouldWalk) {
					setIsWalking(true);
					setDirection(Math.random() > 0.5 ? "right" : "left");
					setAnimation(Math.random() > 0.5 ? "walk_normal" : "walk_bounce");
				} else {
					setIsWalking(false);
					setAnimation(Math.random() > 0.5 ? "idle_normal" : "idle_bounce");
				}
			},
			2000 + Math.random() * 3000
		);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!isWalking) return;

		const moveInterval = setInterval(() => {
			setPosition((prev) => {
				const speed = direction === "right" ? 2 : -2;
				const newPos = prev + speed;
				const maxX = window.innerWidth - 32;

				if (newPos < 0 || newPos > maxX) {
					setDirection(direction === "right" ? "left" : "right");
					return prev;
				}
				return newPos;
			});
		}, 50);

		return () => clearInterval(moveInterval);
	}, [isWalking, direction]);

	return (
		<div
			className={`duck-sprite ${animation} ${className}`}
			onClick={handleQuack}
			style={{
				position: "absolute",
				left: `${position}px`,
				bottom: "208px",
				width: "32px",
				height: "32px",
				backgroundImage: "url(/img/ducky_2_spritesheet.png)",
				backgroundSize: "192px 128px",
				imageRendering: "pixelated",
				transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
				zIndex: 1000,
				pointerEvents: "auto",
				cursor: "pointer",
			}}
		/>
	);
};

export default DuckSprite;

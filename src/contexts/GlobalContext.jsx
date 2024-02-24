import { createContext, useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [popupOpened, setPopupOpened] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [text, setText] =
		useState(`In the quaint village of Willowbrook, nestled between rolling hills and meandering streams, lived a curious young girl named Elara. Her days were often spent exploring the enchanting woods that bordered the village, where secrets whispered among the rustling leaves seemed to beckon her forward. One crisp morning, as dawn's golden rays bathed the landscape, Elara ventured deeper into the forest than ever before. Amidst the ancient trees, she stumbled upon a hidden glade, its heart adorned with an ornate, long-forgotten fountain. Carved with intricate symbols and guarded by a stone statue of a regal phoenix, the fountain seemed to hold a promise of forgotten tales and untold mysteries.

	Drawn by an irresistible urge, Elara traced her fingers over the fountain's inscriptions, her touch setting off a cascade of sparkling water that danced with a captivating melody. The air around her shimmered, and before her eyes materialized the majestic figure of a phoenix, its plumage aflame with colors that defied imagination. With a voice as melodious as the fountain's waters, the phoenix spoke of an ancient prophecy and a quest that only a heart pure of intention could undertake. Elara listened, her heart aflutter with a mix of awe and determination. As the phoenix finished its tale, it bestowed upon Elara a radiant feather, a key to unlocking the secrets of a world beyond her wildest dreams.
	
	From that day forward, Elara's life was forever changed. Armed with the phoenix's feather and an unyielding spirit, she embarked on a journey that would lead her through enchanted forests, across treacherous mountains, and into the depths of her own courage. Along the way, she encountered both friends and foes, each imparting valuable lessons. As she overcame challenges and unraveled mysteries, Elara discovered that the true magic lay not only in the fantastical realms she explored but also within herself. Guided by the wisdom of the phoenix and fueled by her unwavering belief in the extraordinary, Elara's journey became a testament to the boundless possibilities that reside in a single, determined heart.`);

	const caption = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [anim, setAnim] = useState(null);

	const togglePlay = (anim) => {
		if ("speechSynthesis" in window) {
			// Create a new SpeechSynthesisUtterance instance
			const utterance = new SpeechSynthesisUtterance();

			// Set the text you want to convert to speech
			utterance.text = text;

			// Speak the text
			speechSynthesis.speak(utterance);
		}
		if (playing) {
			speechSynthesis.pause();
			popupOpened && anim.pause();
		} else {
			speechSynthesis.resume();
			popupOpened && anim.resume();
		}

		setPlaying(!playing);
	};
	useEffect(() => {
		if (caption.current) {
			const text = new SplitType(caption.current, { types: "words" });
			const animation = gsap.from(text.words, {
				opacity: 0.2,
				stagger: 0.1,
			});
			animation.pause();
			setAnim(animation);
		}
	}, [loading]);
	useEffect(() => {
		if (!popupOpened) {
			anim?.pause();
		}
	}, [popupOpened]);
	useEffect(() => {
		speechSynthesis.cancel();
	}, []);
	return (
		<GlobalContext.Provider
			value={{
				popupOpened,
				setPopupOpened,
				caption,
				togglePlay,
				anim,
				playing,
				loading,
				setLoading,
				showNav,
				setShowNav,
				text,
				setText,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

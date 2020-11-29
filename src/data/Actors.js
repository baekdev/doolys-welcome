export const Welcome = {
	title: "어서오고",
	source: {
		imageSrc: "bg_1.png",
		imageWidth: 519,
		imageHeight: 606,

		twoLineTextId: "inputWelcomeStranger",
		threeLineTextId: "inputWelcomeDooly",

		filename: "doolys-welcome",
	},
	presets: {
		twoLineConst: {
			placeholder: "어이 둘리.",
			maxMessageLength: 12,
			lineLimitLength: {
				first: 7,
				second: 5,
			},
			positions: {
				init: {
					x: 100,
					y: 70,
				},
				firstRow: {
					x: 70,
					y: 55,
				},
				secondRow: {
					x: 70,
					y: 90,
				},
			},
			countForMove: 4,
			lineHeight: 20,
		},
		threeLineConst: {
			placeholder: "도우너 어서오고.",
			maxMessageLength: 23,
			lineLimitLength: {
				first: 6,
				second: 9,
				third: 8,
			},
			positions: {
				init: {
					x: 300,
					y: 120,
				},
				firstRow: {
					x: 270,
					y: 80,
				},
				secondRow: {
					x: 250,
					y: 120,
				},
				thirdRow: {
					x: 260,
					y: 160,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Hoi = {
	title: "초능력",
	source: {
		imageSrc: "bg_2.png",
		imageWidth: 430,
		imageHeight: 542,

		twoLineTextId: "inputHoiDooly",

		filename: "doolys-hoi",
	},
	presets: {
		twoLineConst: {
			placeholder: "초능력 맛 좀 볼래?",
			maxMessageLength: 22,
			lineLimitLength: {
				first: 11,
				second: 11,
			},
			positions: {
				init: {
					x: 120,
					y: 100,
				},
				firstRow: {
					x: 40,
					y: 75,
				},
				secondRow: {
					x: 40,
					y: 115,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Smoke = {
	title: "떨",
	source: {
		imageSrc: "bg_5.png",
		imageWidth: 532,
		imageHeight: 539,

		twoLineTextId: "inputSmokeStranger",
		threeLineTextId: "inputSmokeDooly",

		filename: "doolys-smoke",
	},
	presets: {
		twoLineConst: {
			placeholder: "떨 한대 말아줘?",
			maxMessageLength: 18,
			lineLimitLength: {
				first: 10,
				second: 8,
			},
			positions: {
				init: {
					x: 110,
					y: 80,
				},
				firstRow: {
					x: 40,
					y: 60,
				},
				secondRow: {
					x: 50,
					y: 100,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
		threeLineConst: {
			placeholder: "아니 나 금연 중ㅋ",
			maxMessageLength: 25,
			lineLimitLength: {
				first: 8,
				second: 9,
				third: 8,
			},
			positions: {
				init: {
					x: 340,
					y: 190,
				},
				firstRow: {
					x: 290,
					y: 155,
				},
				secondRow: {
					x: 290,
					y: 190,
				},
				thirdRow: {
					x: 290,
					y: 225,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

export const Over = {
	title: "선 넘네",
	source: {
		imageSrc: "bg_4.png",
		imageWidth: 481,
		imageHeight: 540,

		twoLineTextId: "inputOverDooly",

		filename: "doolys-over",
	},
	presets: {
		twoLineConst: {
			placeholder: "선 넘네;;",
			maxMessageLength: 16,
			lineLimitLength: {
				first: 8,
				second: 8,
			},
			positions: {
				init: {
					x: 170,
					y: 100,
				},
				firstRow: {
					x: 130,
					y: 75,
				},
				secondRow: {
					x: 130,
					y: 115,
				},
			},
			countForMove: 5,
			lineHeight: 20,
		},
	},
}

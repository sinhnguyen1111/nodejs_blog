var servicesChart = new Chart(document.getElementById('servicesChart'), {
	type: 'line',
	data: {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Haircut/Styling',
				data: [100, 60, 120, 80, 140, 100, 140, 120, 140, 100, 140, 160],
				borderColor: '#00BD24',
				fill: false,
				// cubicInterpolationMode: 'monotone',
				tension: 0.2,
			},
			{
				label: 'Professional Shampoo / Scalp Massage',
				data: [80, 40, 20, 60, 120, 60, 100, 60, 70, 90, 70, 100, 150],
				borderColor: '#1DCECF',
				fill: false,
				tension: 0.2,
			},
			{
				label: 'Steaming/Nourishing/Restoring Hair',
				data: [60, 60, 30, 90, 45, 90, 45, 50, 60, 80, 105, 125, 145],
				borderColor: '#FE9320',
				fill: false,
				tension: 0.2,
			},
			{
				label: 'Hair Fashion (Extension/Curling/Straighten/Dying)',
				data: [40, 80, 40, 120, 60, 88, 44, 100, 40, 60, 90, 110, 160],
				borderColor: '#2D96FF',
				fill: false,
				tension: 0.2,
			},
			{
				label: 'Treatment of Hair Diseases',
				data: [20, 100, 50, 50, 75, 100, 80, 75, 100, 125, 100, 120, 150],
				borderColor: '#FF4A6D',
				fill: false,
				tension: 0.2,
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Growth chart of statistical services by month',
				font: {
					weight: 'bold',
					size: 24,
				},
			},
		},
		interaction: {
			intersect: false,
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Value',
				},
				suggestedMin: 0,
				suggestedMax: 200,
			},
		},
	},
});
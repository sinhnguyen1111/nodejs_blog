var counter = [];
var bookingChart = new Chart(document.getElementById('bookingChart'), {
	type: 'pie',
	data: {
		labels: ['Completed', 'Upcoming', 'Pending', 'Cancelled'],
		datasets: [
			{
				label: 'My First Dataset',
				data: counter,
				backgroundColor: [
					'rgb(253, 208, 87)',
					'rgb(65, 159, 235)',
					'rgb(74, 191, 192)',
					'rgb(255, 101, 131)',
				],
				hoverOffset: 4,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
				position: 'bottom',
				labels: {
					font: {
						size: 24,
					},
				},
			},
		},
	},
});
import React from 'react';
import './App.css';
import { sampleTransactions } from './sampleData';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Tooltip,
} from 'recharts';

const COLORS = [
	'#667eea',
	'#764ba2',
	'#f093fb',
	'#4facfe',
	'#43e97b',
	'#fa709a',
	'#fee140',
	'#30cfd0',
];

function App() {
	// CALCULATION 1:  Total spending
	const totalSpent = sampleTransactions.reduce((sum, transaction) => {
		return sum + transaction.amount;
	}, 0);

	// CALCULATION 2: Transaction Count
	const transactionCount = sampleTransactions.length;

	// CALCULATION 3: Average Transaction
	const averageTransaction = totalSpent / transactionCount;

	// CALCULATION 4: Group by Category and Find Top Category
	const categoryTotals = sampleTransactions.reduce((acc, transaction) => {
		const category = transaction.category;
		acc[category] = (acc[category] || 0) + transaction.amount;
		return acc;
	}, {});

	// Find which category has the highest totals
	const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
		categoryTotals[a] > categoryTotals[b] ? a : b
	);
	const topCategoryAmount = categoryTotals[topCategory];

	// CALCULATION 5: Transform category date for pie chart
	const chartData = Object.keys(categoryTotals).map((category) => ({
		name: category,
		value: categoryTotals[category],
	}));

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Personal Finance Analyzer</h1>
				<p>Track and visualize your spending</p>
			</header>

			<main className='main-content'>
				{/* Stats section */}
				<div className='stats-grid'>
					<div className='stat-card'>
						<h3> Total Spent</h3>
						<p className='stat-value'>
							$
							{totalSpent.toLocaleString('en-US', {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</p>
						<p className='stat.subtitle'>Across all transaction</p>
					</div>
					<div className='stat-card'>
						<h3>Transaction</h3>
						<p className='stat-value'>{transactionCount}</p>
						<p className='stat-subtitle'>Total count</p>
					</div>
					<div className='stat-card'>
						<h3>Average per Transaction</h3>
						<p className='stat-value'>
							$
							{averageTransaction.toLocaleString('en-US', {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</p>
						<p className='stat-subtitle'>Mean spending</p>
					</div>
					<div className='stat-card'>
						<h3>Top Category</h3>
						<p className='stat-value'>{topCategory}</p>
						<p className='stat-subtitle'>
							$
							{topCategoryAmount.toLocaleString('en-US', {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
							spent
						</p>
					</div>
				</div>
				<div>
					{/* Pie Chart Section */}
					<div className='chart-section'>
						<h2>Spending by Category</h2>
						<ResponsiveContainer
							width='100%'
							height={400}>
							<PieChart>
								<Pie
									data={chartData}
									cx='50%'
									cy='50%'
									labelLine={false}
									outerRadius={120}
									fill='#8884d8'
									dataKey='value'>
									{chartData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip
									formatter={(value) =>
										`$${value.toFixed(2)}`
									}
								/>
								<Legend />
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Transaction Table */}
				<h2>Recent Transactions</h2>
				<table className='transaction-table'>
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Category</th>
							<th>amount</th>
						</tr>
					</thead>
					<tbody>
						{sampleTransactions.map((transaction) => (
							<tr key={transaction.id}>
								<td>{transaction.date}</td>
								<td>{transaction.description}</td>
								<td>{transaction.category}</td>
								<td>${transaction.amount.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';
import { sampleTransactions } from './sampleData';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Personal Finance Analyzer</h1>
				<p>Track and visualize your spending</p>
			</header>
			<main className='main-content'>
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
								<td>{transaction.amount.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</div>
	);
}

export default App;

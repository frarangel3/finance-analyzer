# Personal Finance Analyzer

A data visualization dashboard for analyzing personal spending patterns. Upload a CSV of bank transactions and see interactive charts, statistics, and insights.

🔗 **Live Demo:** [https://finance-analyzer-nine.vercel.app](https://finance-analyzer-nine.vercel.app)

## Features

- 📊 **Interactive Pie Chart** - Visual breakdown of spending by category
- 📈 **Key Statistics** - Total spent, transaction count, averages, top category
- 📁 **CSV Upload** - Import your own bank transactions
- ✅ **Data Validation** - Case-insensitive column checking with robust error handling
- 🎨 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔄 **Real-time Updates** - All visualizations update instantly with new data

## How to Use

1. **Upload Your Data:**
   - Click "Choose File" in the upload section
   - Select a CSV file with columns: `date`, `description`, `amount`, `category`
   - Column names are case-insensitive
   - File will be validated and parsed automatically

2. **View Your Insights:**
   - See total spending, transaction count, and averages in stat cards
   - Explore the pie chart (hover over slices for details)
   - Browse all transactions in the sortable table

3. **CSV Format Example:**
```csv
   date,description,amount,category
   2024-10-01,Whole Foods,87.32,Groceries
   2024-10-02,Shell Gas,45.00,Transportation
   2024-10-03,Netflix,15.49,Entertainment
```

## Technologies Used

- **React 18** - Frontend framework with hooks
- **Recharts 2.x** - Data visualization library
- **Papaparse 5.x** - CSV parsing with validation
- **CSS3** - Custom styling and responsive design
- **Vercel** - Deployment and hosting

## Technical Highlights

- **State Management:** React Hooks (useState) for dynamic data handling
- **Data Processing:** JavaScript array methods (reduce, map, filter) for analysis
- **Validation:** Case-insensitive column checking, data type validation, empty row filtering
- **Error Handling:** User-friendly error messages with color-coded feedback
- **Calculations:** Data aggregations (sum, average, count, group by category)
- **Responsive UI:** Mobile-first design with CSS Grid and Flexbox

## What I Learned

- Working with external libraries (Recharts for charts, Papaparse for CSV)
- File handling and CSV parsing in JavaScript
- React state management and component lifecycle
- Data validation and comprehensive error handling
- Data transformation and aggregation techniques (reduce, map, filter)
- Responsive UI design principles and CSS best practices
- Deploying React apps to production with Vercel

## Local Development
```bash
# Clone the repository
git clone https://github.com/frarangel3/finance-analyzer.git

# Navigate to project directory
cd finance-analyzer

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

## Project Structure
```
finance-analyzer/
├── public/
├── src/
│   ├── App.js           # Main component with state and logic
│   ├── App.css          # Styling
│   ├── sampleData.js    # Sample transaction data
│   └── index.js         # Entry point
├── package.json
└── README.md
```

## Future Enhancements

- [ ] Line chart for spending trends over time
- [ ] Date range filters for custom time periods
- [ ] Category filtering and search
- [ ] Export filtered data as CSV
- [ ] Bar chart for category comparisons
- [ ] Dark mode toggle
- [ ] User accounts and data persistence with backend database

## Author

**Francisco Rangel**
- GitHub: [@frarangel3](https://github.com/frarangel3)
- Portfolio: [https://github.com/frarangel3]

---

Built with ❤️ as part of my journey from teaching to software development
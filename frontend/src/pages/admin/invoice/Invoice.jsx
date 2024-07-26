import React, { useState, useEffect } from 'react';
import './Invoice.modules.css';

const Invoice = () => {
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedInvoiceDate = today.toISOString().split('T')[0];
    const due = new Date(today);
    due.setDate(due.getDate() + 30);
    const formattedDueDate = due.toISOString().split('T')[0];

    setInvoiceDate(formattedInvoiceDate);
    setDueDate(formattedDueDate);
  }, []);

  return (
    <div className="invoice-page">
      <div className="invoice-content">
        <main className="main-content">
          <h2>Invoice</h2>
          <div className="invoice-header">
            <div className="invoice-from">
              <label>
                Invoice From: 
                <input type="text" defaultValue="Sophia Loren" />
              </label>
            </div>
            <div className="invoice-to">
              <label>
                Invoice To: 
                <input type="text" defaultValue="Lazy Ltd" />
              </label>
            </div>
            <div className="invoice-dates">
              <label>
                Invoice Date: 
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </label>
              <label>
                Due Date: 
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="products-list">
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Description</th>
                  <th className="hidden-column">Quantity</th>
                  <th>Base Cost</th>
                  <th className="hidden-column">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Children Toy</td>
                  <td className="hidden-column">2</td>
                  <td>$20</td>
                  <td className="hidden-column">$80</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Makeup</td>
                  <td className="hidden-column">2</td>
                  <td>$50</td>
                  <td className="hidden-column">$100</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Asus Laptop</td>
                  <td className="hidden-column">5</td>
                  <td>$100</td>
                  <td className="hidden-column">$500</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Iphone X</td>
                  <td className="hidden-column">4</td>
                  <td>$1000</td>
                  <td className="hidden-column">$4000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="invoice-total">
            <p>Total: $4680</p>
          </div>
          <div className="invoice-buttons">
            <button>Print</button>
            <button>Send</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoice;

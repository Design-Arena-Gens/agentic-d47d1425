'use client'

import { useState } from 'react'
import {
  CreditCard,
  Send,
  ArrowDownToLine,
  PiggyBank,
  ChevronRight,
  Eye,
  EyeOff,
  Home,
  Wallet,
  BarChart3,
  User,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

export default function MobileBankingApp() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('home')

  const transactions = [
    { id: 1, name: 'Amazon Purchase', amount: -127.50, date: '2025-11-02', type: 'expense', category: 'Shopping' },
    { id: 2, name: 'Salary Deposit', amount: 4500.00, date: '2025-11-01', type: 'income', category: 'Salary' },
    { id: 3, name: 'Netflix Subscription', amount: -15.99, date: '2025-10-31', type: 'expense', category: 'Entertainment' },
    { id: 4, name: 'Coffee Shop', amount: -4.50, date: '2025-10-31', type: 'expense', category: 'Food' },
    { id: 5, name: 'Transfer from John', amount: 50.00, date: '2025-10-30', type: 'income', category: 'Transfer' },
  ]

  const quickActions = [
    { icon: Send, label: 'Send', color: 'bg-blue-500' },
    { icon: ArrowDownToLine, label: 'Request', color: 'bg-green-500' },
    { icon: CreditCard, label: 'Cards', color: 'bg-purple-500' },
    { icon: PiggyBank, label: 'Save', color: 'bg-orange-500' },
  ]

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 pt-8 pb-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-90">Welcome back,</p>
            <h1 className="text-2xl font-bold">Sarah Johnson</h1>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <User size={24} />
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm opacity-90 mb-1">Total Balance</p>
              <div className="flex items-center gap-2">
                {showBalance ? (
                  <h2 className="text-3xl font-bold">$24,562.80</h2>
                ) : (
                  <h2 className="text-3xl font-bold">••••••</h2>
                )}
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-75">This month</p>
              <p className="text-sm font-semibold text-green-300 flex items-center gap-1">
                <TrendingUp size={14} /> +12.5%
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-white/20">
            <div className="flex-1">
              <p className="text-xs opacity-75 mb-1">Income</p>
              <p className="font-semibold">$5,240.00</p>
            </div>
            <div className="flex-1">
              <p className="text-xs opacity-75 mb-1">Expenses</p>
              <p className="font-semibold">$2,480.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md`}>
                  <action.icon size={24} />
                </div>
                <span className="text-xs font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-6 pb-24">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
          <button className="text-sm text-indigo-600 font-medium">See All</button>
        </div>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'income' ? (
                      <TrendingUp className="text-green-600" size={20} />
                    ) : (
                      <TrendingDown className="text-red-600" size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around items-center px-6 py-3">
          {[
            { icon: Home, label: 'Home', id: 'home' },
            { icon: Wallet, label: 'Wallet', id: 'wallet' },
            { icon: BarChart3, label: 'Stats', id: 'stats' },
            { icon: User, label: 'Profile', id: 'profile' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-500'
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

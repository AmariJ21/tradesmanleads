import React, { useState } from 'react';
import { Users, UserCheck, Monitor, Package, DollarSign, Target, HelpCircle, ChevronRight, Search, TrendingUp, TrendingDown } from 'lucide-react';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('customers');
  const [sortBy, setSortBy] = useState('newest');

  const customers = [
    { id: 1, name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'active' },
    { id: 2, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'inactive' },
    { id: 3, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'inactive' },
    { id: 4, name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'active' },
    { id: 5, name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'active' },
    { id: 6, name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'active' },
    { id: 7, name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'active' },
  ];

  const stats = [
    { 
      icon: Users, 
      label: 'Total Customers', 
      value: '5,423', 
      trend: 'up', 
      trendValue: '16%',
      trendLabel: 'this month',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    { 
      icon: UserCheck, 
      label: 'Members', 
      value: '1,893', 
      trend: 'down', 
      trendValue: '1%',
      trendLabel: 'this month',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    { 
      icon: Monitor, 
      label: 'Active Now', 
      value: '189', 
      avatars: true,
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
  ];

  const menuItems = [
    { icon: Package, label: 'Dashboard', active: false },
    { icon: Package, label: 'Product', active: false },
    { icon: Users, label: 'Customers', active: true },
    { icon: DollarSign, label: 'Income', active: false },
    { icon: Target, label: 'Promote', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <span className="font-semibold">Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item.label.toLowerCase())}
              className={`w-full flex items-center justify-between px-4 py-3 mb-1 rounded-lg transition-colors ${
                item.active
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </nav>

        <div className="p-4 m-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white">
          <p className="font-semibold mb-1">Upgrade to PRO to get</p>
          <p className="text-sm opacity-90 mb-4">access all Features!</p>
          <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Pro Now!
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                    {stat.trend && (
                      <div className="flex items-center gap-1">
                        {stat.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.trendValue}
                        </span>
                        <span className="text-sm text-gray-500">{stat.trendLabel}</span>
                      </div>
                    )}
                    {stat.avatars && (
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white" />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customers Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">All Customers</h2>
                  <p className="text-sm text-emerald-500 font-medium">Active Members</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Short by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Customer Name</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Company</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Phone Number</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Email</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Country</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{customer.company}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{customer.country}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                            customer.status === 'active'
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                              : 'bg-red-100 text-red-700 border border-red-200'
                          }`}
                        >
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-600">1 / 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  withdrawAnimalRequest,
  withdrawDonationRequest,
  withdrawCareRequest,
  withdrawFeederRequest,
  editAnimalRequest,
  editDonationRequest,
  editCareRequest,
  editFeederRequest,
} from '../redux/requestSlice';

function RequestDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const tabs = [
    { label: 'Animal Request', key: 'animalRequests' },
    { label: 'Donation', key: 'donationRequests' },
    { label: 'Pet Care', key: 'careRequests' },
    { label: 'Feeder Request', key: 'feederRequests' },
  ];

  const getRequestList = (key) => requests[key];

  const handleWithdraw = (type, index) => {
    switch (type) {
      case 'animalRequests':
        dispatch(withdrawAnimalRequest(index));
        break;
      case 'donationRequests':
        dispatch(withdrawDonationRequest(index));
        break;
      case 'careRequests':
        dispatch(withdrawCareRequest(index));
        break;
      case 'feederRequests':
        dispatch(withdrawFeederRequest(index));
        break;
      default:
        break;
    }
  };

  const handleEditSave = (type, index) => {
    const payload = { index, data: editData };

    switch (type) {
      case 'animalRequests':
        dispatch(editAnimalRequest(payload));
        break;
      case 'donationRequests':
        dispatch(editDonationRequest(payload));
        break;
      case 'careRequests':
        dispatch(editCareRequest(payload));
        break;
      case 'feederRequests':
        dispatch(editFeederRequest(payload));
        break;
      default:
        break;
    }

    setEditingIndex(null);
    setEditData({});
  };

  const currentKey = tabs[activeTab].key;
  const currentList = getRequestList(currentKey);

  return (
    <section className="py-16 bg-white text-center min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Request Dashboard</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setEditingIndex(null);
              }}
              className={`px-4 py-2 rounded-full font-medium border ${
                activeTab === index
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700'
              } transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full bg-gray-50 shadow rounded overflow-hidden">
            <thead>
              <tr className="bg-orange-500 text-white">
                {currentList[0] &&
                  Object.keys(currentList[0]).map((col, i) => (
                    <th key={i} className="py-2 px-3 text-sm font-medium">
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </th>
                  ))}
                <th className="py-2 px-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentList.length > 0 ? (
                currentList.map((entry, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100 transition">
                    {Object.entries(entry).map(([key, val], i) => (
                      <td key={i} className="py-2 px-3 text-sm text-center">
                        {editingIndex === index ? (
                          <input
                            type="text"
                            value={editData[key] || ''}
                            onChange={(e) =>
                              setEditData({ ...editData, [key]: e.target.value })
                            }
                            className="border rounded px-2 py-1 text-sm w-full"
                          />
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                    <td className="py-2 px-3 text-sm text-center space-x-2">
                      {editingIndex === index ? (
                        <button
                          onClick={() => handleEditSave(currentKey, index)}
                          className="text-green-600 hover:underline"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingIndex(index);
                            setEditData(entry);
                          }}
                          className="text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleWithdraw(currentKey, index)}
                        className="text-red-500 hover:underline"
                      >
                        Withdraw
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="100%" className="py-6 text-gray-500">
                    No requests submitted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RequestDashboard;

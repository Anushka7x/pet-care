import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animalRequests: [],
  donationRequests: [],
  careRequests: [],
  feederRequests: [],
};

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    // Add actions
    addAnimalRequest: (state, action) => {
      state.animalRequests.push(action.payload);
    },
    addDonationRequest: (state, action) => {
      state.donationRequests.push(action.payload);
    },
    addCareRequest: (state, action) => {
      state.careRequests.push(action.payload);
    },
    addFeederRequest: (state, action) => {
      state.feederRequests.push(action.payload);
    },

    // Withdraw actions
    withdrawAnimalRequest: (state, action) => {
      state.animalRequests.splice(action.payload, 1);
    },
    withdrawDonationRequest: (state, action) => {
      state.donationRequests.splice(action.payload, 1);
    },
    withdrawCareRequest: (state, action) => {
      state.careRequests.splice(action.payload, 1);
    },
    withdrawFeederRequest: (state, action) => {
      state.feederRequests.splice(action.payload, 1);
    },

    // Edit actions
    editAnimalRequest: (state, action) => {
      const { index, data } = action.payload;
      state.animalRequests[index] = data;
    },
    editDonationRequest: (state, action) => {
      const { index, data } = action.payload;
      state.donationRequests[index] = data;
    },
    editCareRequest: (state, action) => {
      const { index, data } = action.payload;
      state.careRequests[index] = data;
    },
    editFeederRequest: (state, action) => {
      const { index, data } = action.payload;
      state.feederRequests[index] = data;
    },
  },
});

export const {
  addAnimalRequest,
  addDonationRequest,
  addCareRequest,
  addFeederRequest,
  withdrawAnimalRequest,
  withdrawDonationRequest,
  withdrawCareRequest,
  withdrawFeederRequest,
  editAnimalRequest,
  editDonationRequest,
  editCareRequest,
  editFeederRequest,
} = requestSlice.actions;

export default requestSlice.reducer;

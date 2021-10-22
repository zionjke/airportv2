import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AirlineType, AirportType, ArrivalFlightType, CityType} from "../types";
import {api} from "../api";

export const fetchCities = createAsyncThunk('airport/fetchCities', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await api.fetchCitys()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const fetchAirports = createAsyncThunk('airport/fetchAirports', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await api.fetchAirports()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const fetchAirlines = createAsyncThunk('airport/fetchAirlines', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await api.fetchAirlines()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const fetchArrivalFlights = createAsyncThunk('airport/fetchArrivalFlights', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await api.fetchArrivalFlights()
        return data
    } catch (e) {
        return rejectWithValue(null)
    }
})

export const appSlice = createSlice({
    name: 'airport',
    initialState: {
        cities: [] as CityType[],
        airports: [] as AirportType[],
        airlines: [] as AirlineType[],
        arrivalFlights: [] as ArrivalFlightType[],
    },
    reducers: {},
    extraReducers: {
        [fetchCities.fulfilled.type]: (state, action: PayloadAction<CityType[]>) => {
            state.cities = action.payload
        },
        [fetchAirports.fulfilled.type]: (state, action: PayloadAction<AirportType[]>) => {
            state.airports = action.payload
        },
        [fetchAirlines.fulfilled.type]: (state, action: PayloadAction<AirlineType[]>) => {
            state.airlines = action.payload
        },
        [fetchArrivalFlights.fulfilled.type]: (state, action: PayloadAction<ArrivalFlightType[]>) => {
            state.arrivalFlights = action.payload
        },
    }
})

export default appSlice.reducer

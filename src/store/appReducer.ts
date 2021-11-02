import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AirlineType, AirportType, CityType, FLightType} from "../types";
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

export const fetchDepartureFlights = createAsyncThunk('airport/fetchDepartureFlights', async (param, {dispatch, rejectWithValue}) => {
    try {
        const {data} = await api.fetchDepartureFlights()
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
        arrivalFlights: [] as FLightType[],
        departureFlights: [] as FLightType[]
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
        [fetchArrivalFlights.fulfilled.type]: (state, action: PayloadAction<FLightType[]>) => {
            state.arrivalFlights = action.payload
        },
        [fetchDepartureFlights.fulfilled.type]: (state, action: PayloadAction<FLightType[]>) => {
            state.departureFlights = action.payload
        },
    }
})

export default appSlice.reducer

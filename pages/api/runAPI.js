import { getToken } from "@/config/getToken";
import { httpClient } from "@/config/httpClient";

const token = getToken()

export const createRun = async (runData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await httpClient.post('/api/runsData/', runData, config)

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const getRuns = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await httpClient.get('/api/runsData/', config)

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const deleteRun = async (runID) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await httpClient.delete(`/api/runsData/${runID}`, config)

    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

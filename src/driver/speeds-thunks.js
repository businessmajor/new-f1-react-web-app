import { createAsyncThunk } from "@reduxjs/toolkit";
import * as speedsService from "./speeds-service"

export const findAllSpeedsThunk = createAsyncThunk("speeds/my-speeds", async () => {
    const speeds = await speedsService.findAllSpeeds();
    return speeds;
  });

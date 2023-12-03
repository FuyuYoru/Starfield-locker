import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILockSection {
  segments: number[];
  distances: number[];
  opened: boolean;
}

interface ILockSections {
  activeSection: number | null;
  sections: {
    [key: string]: ILockSection;
  };
}

const initialState: ILockSections = {
  activeSection: null,
  sections: {},
};

const lockSections = createSlice({
  name: 'lockSections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<{ sectionNumber: string; segments: number[]; distances: number[] }>) => {
      const { sectionNumber, segments, distances } = action.payload;
      state.sections[sectionNumber] = {
        segments,
        distances,
        opened: false,
      };
    },
    changeSection: (state, action: PayloadAction<{ sectionNumber: number; newSegments: number[] }>) => {
      const { sectionNumber, newSegments } = action.payload;
      const section = sectionNumber.toString();
      if (state.sections[section]) {
        if (newSegments.length > 0) {
          state.sections[section].segments = newSegments;
        } else {
          state.sections[section].opened = true;
          if (sectionNumber !== Object.keys(state.sections).length - 1) {
            state.activeSection = sectionNumber + 1;
          }
          console.log(state.activeSection);
        }
      }
    },
    setCurrentSection: (state, action: PayloadAction<{ section: number }>) => {
      const { section } = action.payload;
      state.activeSection = section;
    },
    clearLockSections: (state) => {
      return { ...initialState };
    },
  },
});

export const { addSection, changeSection, setCurrentSection, clearLockSections } = lockSections.actions;
export default lockSections.reducer;

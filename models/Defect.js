import mongoose from "mongoose";

const defectSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    inCharge: {
      type: String,
      required: true,
    },
    shift: String,
    line: String,
    mo: String,
    isn: String,
    defectType: {
      type: String,
      required: true,
    },
    location: String,

    images: {
      evidence: String,
      spi: String,
      preAoi: String,
      postAoi: String,
    },

    analysis: String,
    rootCause: String,
    improvement: String,
  },
  {
    timestamps: true,
  }
);

const Defect = mongoose.model("Defect", defectSchema);

export default Defect;
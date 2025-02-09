import mongoose from "mongoose";
import Cache from "../models/cache.model.js";

export const createData = async (req, res) => {
  try {
    // Count the total cache
    const cacheCount = await Cache.countDocuments({});

    // Check if the limit is reached
    const MAX_CACHE = 10;
    if (cacheCount >= MAX_CACHE) {
      return res.status(400).json({
        success: false,
        message: "Max cache limit reached, please delete some to add more",
      });
    }

    // Create new cache entry
    const cacheEntry = await Cache.create(req.body);

    // Return response
    return res.status(201).json({
      success: true,
      message: "Key-value pair added",
      data: cacheEntry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const cacheEntry = await Cache.findOne({ key: req.params.key });
    if (!cacheEntry) {
      return res.status(404).json({
        success: false,
        message: "Key not found",
      });
    }

    res.status(200).json({
      success: true,
      data: cacheEntry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteById = async (req, res) => {
  try {
    const cacheEntry = await Cache.findOneAndDelete({ key: req.params.key });
    if (!cacheEntry) {
      return res
        .status(404)
        .json({ success: false, message: "Key not found in cache." });
    }

    res
      .status(200)
      .json({ success: true, message: "Key-value pair removed from cache." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

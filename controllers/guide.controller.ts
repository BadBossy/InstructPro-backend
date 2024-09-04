import { Request, Response } from "express";
import Guide from "../models/guide.model";

export const createGuide = async (req: Request, res: Response) => {
  try {
    const guide = new Guide(req.body);
    await guide.save();
    res.status(201).json(guide);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getGuides = async (req: Request, res: Response) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getGuideById = async (req: Request, res: Response) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) return res.status(404).json({ message: "Guide not found" });
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateGuide = async (req: Request, res: Response) => {
  try {
    const guide = await Guide.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!guide) return res.status(404).json({ message: "Guide not found" });
    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteGuide = async (req: Request, res: Response) => {
  try {
    const guide = await Guide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).json({ message: "Guide not found" });
    res.status(200).json({ message: "Guide deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

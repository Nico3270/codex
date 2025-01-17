"use server";

import { Video } from "@/interfaces/interfaces";
import prisma from "@/lib/prisma";


export const addNewVideo = async (video: {
  url: string;
  title: string;
  description: string;
  order: number;
}): Promise<
  | { success: true; video: Video }
  | { success: false; error: string }
> => {
  try {
    const newVideo = await prisma.video.create({
      data: {
        url: video.url,
        title: video.title,
        description: video.description,
        order: video.order,
      },
    });
    return {
      success: true,
      video: {
        id: newVideo.id,
        url: newVideo.url,
        title: newVideo.title,
        description: newVideo.description,
        order: newVideo.order,
      },
    };
  } catch (error) {
    console.error("Error al agregar nuevo video:", error);
    return { success: false, error: "No se pudo agregar el nuevo video." };
  }
};

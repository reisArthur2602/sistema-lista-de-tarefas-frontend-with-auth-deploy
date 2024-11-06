"use server";
import { TASK_ENDPOINT, TASK_MESSAGES } from "@/constants/task";
import { apiConnection } from "@/lib/axios";
import {
  EditTaskRequest,
  ReoderTaskRequest,
  TaskRequest,
  TaskResponse,
} from "./task.types";
import { revalidatePath } from "next/cache";
import { HttpResponse } from "@/types/http";

const getTasks = async () => {
  const { data } = await apiConnection.get<TaskResponse[] | []>(TASK_ENDPOINT);
  return data;
};

const createTask = async (
  credentials: TaskRequest,
): Promise<HttpResponse<string>> => {
  try {
    await apiConnection.post<TaskResponse>(TASK_ENDPOINT, credentials);
    revalidatePath("/task");
    return {
      success: true,
      body: TASK_MESSAGES.CREATE_TASK_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: TASK_MESSAGES.CREATE_TASK_ERROR,
    };
  }
};

const deleteTask = async (id: string): Promise<HttpResponse<string>> => {
  try {
    await apiConnection.delete(TASK_ENDPOINT + `?id=${id}`);
    revalidatePath("/task");
    return {
      success: true,
      body: TASK_MESSAGES.DELETE_TASK_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: TASK_MESSAGES.DELETE_TASK_ERROR,
    };
  }
};

const editTask = async (
  credentials: EditTaskRequest,
): Promise<HttpResponse<string>> => {
  try {
    await apiConnection.put<TaskResponse>(TASK_ENDPOINT, credentials);
    revalidatePath("/task");
    return {
      success: true,
      body: TASK_MESSAGES.UPDATE_TASK_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: TASK_MESSAGES.UPDATE_TASK_ERROR,
    };
  }
};

const reorderTask = async (
  credentials: ReoderTaskRequest,
): Promise<HttpResponse<string>> => {
  try {
    await apiConnection.patch(TASK_ENDPOINT + "/reorder", credentials);
    revalidatePath("/task");
    return {
      success: true,
      body: TASK_MESSAGES.REORDER_TASK_SUCCESS,
    };
  } catch {
    return {
      success: false,
      error: TASK_MESSAGES.REORDER_TASK_ERROR,
    };
  }
};

export { getTasks, createTask, deleteTask, editTask, reorderTask };

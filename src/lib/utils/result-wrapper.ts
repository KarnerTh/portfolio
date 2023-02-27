import type { FailureType } from "./failure-type";

export type Success<T> = { result: "success", value: T };
export type Failure = { result: "failure", msg: string, failureType: FailureType, error?: any };
export type Result<T> = Success<T> | Failure;

export const success = <T>(value: T): Success<T> => {
  return {
    result: "success",
    value,
  }
}

export const failure = (msg: string, failureType: FailureType, error?: any): Failure => {
  return {
    result: "failure",
    msg,
    failureType,
    error,
  }
}

export const isSuccess = <T>(value: Result<T>): value is Success<T> => {
  return value.result === "success";
}

export const isFailure = <T>(value: Result<T>): value is Failure => !isSuccess(value);
